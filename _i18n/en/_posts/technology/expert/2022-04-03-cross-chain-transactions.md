---
layout: post
type: article
title: "Cross-Chain Transactions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/cross-chain-transactions
topic: technology
level: expert
chapter: "Transactions"
further_reads: [zendoo]
---

In this article we will take a close look at transactions that move assets between different blockchains - more specifically sidechains. Sidechains are blockchains interoperable with an existing mainchain. In order to transfer assets from one chain to another a special set of transactions is needed - cross-chain transactions.

The way we structured this article follows the logic of a developer who wants to build a sidechains. First, the sidechain needs to be deployed. Next an address or account on the sidechain needs to be funded. The assets transferred to the sidechain can now be sent from one account to another within the sidechain. Finally, money can be transferred back to the mainchain. We will explain how all these actions can be performed, and what options a developer or user has, to trigger those actions.

This article builds heavily on our article about [sidechains]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-expanding-blockchain-with-sidechains %}) from the first chapter. We recommend reading this article first, before getting into cross-chain transactions.

## The Zendoo Sidechain Construction

This section provides a quick recap of the sidechain article in the first chapter. The Zendoo sidechain construction allows deploying an arbitrary number of sidechains on top of existing Bitcoin-based blockchains with only a moderate number modifications to the mainchain protocol. It provides an asymmetric peg between mainchain and its sidechains. Sidechains monitor events on the mainchain, but the main blockchain is agnostic to its sidechains.

This means forward transfers from main- to sidechain are much simpler to construct, than backward transfers returning assets to the mainchain. Here, the receiving chain (mainchain) cannot verify incoming backward transfers easily. Zendoo introduces a recursive SNARK proof system, where sidechains periodically generate proofs which are submitted to the mainchain together with a number of backward transfers grouped into Withdrawal Certificates.

These proofs allow the mainchain to verify state transitions of the sidechain without monitoring it directly. Some modifications to the mainchain needed to enable this sidechain design are the following.

### Sidechain Transactions Commitment

A new data field called Sidechain Transactions Commitment (SCTxsCommitment) is added to the mainchain [block header](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#the-block-header). It is the root of a [Merkle tree](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#merkle-trees) where leaves are made up of sidechain relevant transactions contained in that specific block. Including this data in the block header allows sidechain nodes to easily synchronize and verify incoming transactions without the need to transmit the entire mainchain block.

### Sidechain Deployment

A special type of bootstrapping transaction is introduced in which several important parameters of a new sidechain are defined. The sidechains identifier `ledgerId` is set, as well as the verifying key to validate incoming withdrawal certificates. This bootstrapping transaction also defines how proof data will be provided from sidechain to mainchain with regards to the number and types of included data elements. Additionally, the length of a *Withdrawal Epoch* is defined in the bootstrapping transaction.

### Withdrawal Epoch

We omitted 

The length of a withdrawal epoch, defined over a number of mainchain blocks, is also defined in this first transaction. One withdraw certificate per withdraw epoch is submitted to the mainchain, acompanied by the proof that all state transitions were valid.

The choice of the withdrawal epochs length depends on parameters such as the block time of a sidechain. If blocks are produced at a high frequency, for instance because the sidechain is build for near-instant in-game payments, the withdrawal epoch in terms of mainchain blocks might be short, so that each withdrawal certificate doesn't become too large in size due to the number of included backward transfers.













## Forward Transfers

In our approach, Zendoo, we consider a forward transfer as a special transaction on the mainchain that destroys coins and provides sidechain-specific metadata allowing a user to receive coins in the sidechain.

"In general, it looks as follows: an MC to SC transfer is represented by a pair of transactions which we can consider as “sending” and “receiving”. “Sending” is done on the mainchain side by means of the forward transfer defined in [4.1.1 Forward Transfers] and “receiving” is done on the sidechain side by means of aggregated ForwardTransfers transaction defined in [5.3.2 Forward Transfers Transaction]. While “sending” destroys coins in the mainchain, “receiving” creates the corresponding number of coins in the sidechain."

### Initiating a Forward Transfer on the Mainchain

ledgerId amount
−
−
def
FT = (ledgerId, receiverMetadata, amount),
a unique identifier of a previously created and active sidechain to which coins are transferred;
a number of coins to transfer;
some metadata for receiving sidechain B (e.g., a receiver’s address); its structure is not fixed in the mainchain and can consist of different variables of predefined types depending on a sidechain’s construction; its semantic meaning is not known to the mainchain.

![Forward Transfer as a special unspendable output in a regular multi-input multi-output transaction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/forward-transfer.png)

UTXO-based blockchain system (e.g. Bit- coin or Horizen), we can consider FT as a special unspendable transaction output in a regular multi-input multi-output transaction --> no pubkey sript

it is the responsibility of the sidechain to sync forward transfers from the MC and issue the corresponding amount of coins.

### Finalizing a Forward Transfer on the Sidechain in Latus

aggregated in single forward transfers transaction (FTTx)


receiverMetadata is defined by the sidechain construction and in Latus it is just a receiver
address and a payback address on the MC needed in case of transfer failure:

The sidechain will synchronize FTs present in the referenced MC block by including a special F orwardT ransf ers transaction (FTTx) in the SC block. Such FTTx specifies all forward transfers from the referenced MC block that are related to this specific sidechain. From the sidechain perspective, we can consider FTTx as a coinbase transaction (the one that creates new coins [28]) that is authorized by the mainchain.

Provided with mproof, forwardTransfers, btRequests, and wcert fields, the SCTxsCommitment can be reconstructed and verified against the scTxsCommitment field included in the MC block header. It allows to verify that all SC-related transactions were correctly synchronized from the MC block without the need to download and verify its body. -> can compute proof for all this

## Sidechain Internal Transactions

can work just like horizen

can be something completely different

recall how the "sidechain" doesn't need to be a blockchain at all. 

### Sidechain Internal Transactions in Latus











## Backward Transfers

A more complex procedure is required for backward transfers. They are initiated in the sidechain as special transactions, batched in a withdrawal certificate, and propagated to the mainchain for processing.

each sidechain defines its own SNARK that is used to validate withdrawal certificates. --> by putting verification key on chain this works
"The mainchain knows only the verification key – which is registered upon sidechain creation – and the interface of the verifier, which is unified for all sidechains. If the SNARK proof and public parameters are valid, then the certificate gets included and processed in the mainchain."

This provides flexibility to define its own rules for backward transfers. For instance, a sidechain can adopt a chain-of-trust model [13] or even the certifiers model

Note that the mainchain consensus protocol does not impose any rules on how exactly a withdrawal certificate should be generated and by whom it should be submitted. It is up to the sidechain to define corresponding procedures. We only assume that it is submitted by means of a special transaction in the mainchain.

### Withdrawal Certificates

explain container


### Withdrawal Epochs

+++++ graphic

### Initiating a Backward Transfer on Sidechain

regular BT

It is represented by a tuple of the form:
BT = (receiverAddr, amount),
where:
receiverAddr − an address in the mainchain where transferred coins should be credited;
amount − the number of transferred coins.
There can be different approaches to integrate backward transfers in the mainchain. Follow- ing the assumption of a UTXO-based mainchain, a BT can be represented by a special output in a transaction with a withdrawal certificate.

Essentially, we can consider backwardTransfers in txBT as specialized outputs that are unspendable on the sidechain

aggregated in single backward transfers transaction (BTTx)

BTTx transaction is a special case of regular payment transaction where all outputs are backward transfers.

pubkey script

### Initiating a Backwart Transfer on the Mainchain

There might be cases when a user would want to request a backward transfer directly from the mainchain rather than creating a BT in the SC. For instance, it would allow users to withdraw funds in case of a misbehaving (e.g., maliciously controlled sidechain that censors submission of backward transfers) or ceased sidechain.

1. Backward transfer request (BTR), and 
2. Ceased sidechain withdrawal (CSW).

CSW performs direct payment while BTR does not

#### Backward Transfer Requests

aggregated in single backward transfer requests transaction (BTRTx)

The consistency of BTRs included in the sidechain is verified by recalculating the BTRHash (Fig. 12) and checking its presence in the SCTxsCommitment tree

It is represented by the following tuple:
controlled sidechain to process user’s withdrawals . Importantly, the BTR does not lead to a direct coin transfer in the mainchain.
where:

ledgerId receiver amount nullif ier proof data proof
− an identifier of the sidechain, for which BTR is created; − an address of the receiver on the mainchain;
− the number of coins to be transferred;
− a unique identifier of claimed coins;
− input data to a SNARK verifier; − a SNARK proof.
def
BTR = (ledgerId, receiver, amount, nullifier, proofdata, proof),

In Latus, proofdata
contains an unspent output that should be consumed in the SC to provide coins for transferring: proofdata = {utxo}.

The sidechain synchronizes BTRs by including in the SC block a special BackwardTransferRequests transaction (BTRTx) that contains all BTRs relevant to this sidechain from the referenced MC block.

#### Ceased Sidechain Withdrawal


The interface of the SNARK verifier for the CSW is completely the same as for the BTR.

For instance, one can omit defining these operations at all (e.g., by setting vkBTR and vkCSW to NULL)

### Handling incoming Backward Transfers on the Mainchain

WCert Verification
1. ledgerId should be an identifier of a currently active sidechain;
2. epochId should be a valid withdrawal epoch number for the ledgerId (remember that the certificate should be submitted during the first submit len blocks of the epoch following the one, for which such certificate was created);
3. quality should be higher than the quality of the previously submitted withdrawal certificate for this epoch; if it is the first WCert for this epoch - any quality is accepted;
4. proof should be a valid SNARK proof whose verification key vkWCert is set upon sidechain registration;

Siehe Block welche data fields

## Summary



## Footnotes

[^1]: Garoffolo, Kaidalov, Oliynykov, [Zendoo: a zk-SNARK Verifiable Cross-Chain Transfer Protocol Enabling Decoupled and Decentralized Sidechains](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf)







first paper: decentralized certifiers. that were registering themselves in the MC and were responsible for signing withdrawal certificates.

In Zendoo, we avoid direct reliance on certifiers or any other special type of actors assigned to validate withdrawal certificates. Instead, we are going to leverage SNARKs [6, 7, 19] to provide means for the mainchain to effectively validate withdrawals.

**other**

MST is a fixed size Merkle tree


