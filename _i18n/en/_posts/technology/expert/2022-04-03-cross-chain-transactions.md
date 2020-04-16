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

![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_M.jpg)

This means forward transfers from main- to sidechain are much simpler to construct, than backward transfers returning assets to the mainchain. Here, the receiving chain (mainchain) cannot verify incoming backward transfers easily. Zendoo introduces a recursive SNARK proof system, where sidechains periodically generate proofs which are submitted to the mainchain together with a number of backward transfers grouped into Withdrawal Certificates.

These proofs allow the mainchain to verify state transitions of the sidechain without monitoring it directly. Some modifications to the mainchain needed to enable this sidechain design are the following.

### Sidechain Transactions Commitment

A new data field called Sidechain Transactions Commitment (SCTxsCommitment) is added to the mainchain [block header](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#the-block-header). It is the root of a [Merkle tree](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#merkle-trees) where leaves are made up of sidechain relevant transactions contained in that specific block. Including this data in the block header allows sidechain nodes to easily synchronize and verify incoming transactions without the need to transmit the entire mainchain block.





**TODO**
Provided with mproof, forwardTransfers, btRequests, and wcert fields, the SCTxsCommitment can be reconstructed and verified against the scTxsCommitment field included in the MC block header. It allows to verify that all SC-related transactions were correctly synchronized from the MC block without the need to download and verify its body. -> can compute proof for all this





### Sidechain Deployment

A special type of bootstrapping transaction is introduced in which several important parameters of a new sidechain are defined. The sidechains identifier `ledgerId` is set, as well as the verifying key to validate incoming withdrawal certificates. This bootstrapping transaction also defines how proof data will be provided from sidechain to mainchain with regards to the number and types of included data elements. Additionally, the length of a *Withdrawal Epoch* is defined in the bootstrapping transaction.

## Forward Transfers

A forward transfer sends assets from the mainchain to one of its sidechains. These transactions, or more specifically, the transaction outputs are unspendable on the mainchain but include some sidechain relevant metadata so they are redeemable on one of the sidechains. It is the responsibility of sidechain nodes to monitor the mainchain for incoming transactions, and include them in a sidechain block.

> "In general, it looks as follows: an MC to SC transfer is represented by a pair of transactions which we can consider as “sending” and “receiving”. “Sending” is done on the mainchain side by means of the forward transfer [...] and “receiving” is done on the sidechain side by means of aggregated ForwardTransfers transaction [...]. While “sending” destroys coins in the mainchain, “receiving” creates the corresponding number of coins in the sidechain." - [Zendoo protocol](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf)

### Initiating a Forward Transfer on the Mainchain

When users want to transfer coins from main- to a sidechain they create a transaction that differs from a regular transaction, in that the outputs meant to be spendable on the sidechain include some additional data, namely:

- *ledgerId*: the unique identifier of an active sidechain
- *amount*: the amount of coins to be transferred
- *receiverMetadata*: information about the receiver (i.e. the address) and other sidechain relevant data

Depending on the consensus rules of the given sidechain the `receiverMetadata` entails different types of data. This part of the output is not verified by the mainchain, as it is agnostic to the Sidechain Consensus protocol.

When we consider a blockchain running the UTXO model, for instance Horizen or Bitcoin, a "forward output" can be one of many outputs in a regular transaction. Not all outputs need to be "forward outputs", e.g. change outputs are needed.

```CPP
type Transaction
{
    Inputs:
    {
        Input(addr: 0x013A..., amount: 5, signature: 0x034B...),
        Input(addr: 0x0930..., amount: 3, signature: 0x1AA1...),
    }
    Outputs:
    {
        Output(addr: 0x023B..., amount: 1),
        Output(addr: 0x0731..., amount: 1.999),
        ForwardTransfer(ledgerId: 0x300c..., receiverMetadata: 0x139G..., amount: 2),
        ForwardTransfer(ledgerId: 0x300c..., receiverMetadata: 0x8451..., amount: 3),
    }
}
```

In the example transaction above, a total amount of eight coins is being spent and two UTXOs are consumed. Four new outputs are created, two of which are regular outputs spendable on the mainchain, secured with a Pubkey Script. The other two outputs are sending coins to a single sidechain (ledgerId 0x300C...). Two different addresses are being funded (0x139G... and 0x8451...) with two and three coins respectively.

### Finalizing a Forward Transfer on the Sidechain

A sidechain developer is free to come up with a mechansim to process incoming forward transfers. Since there is only one implementation of a sidechain consensus protocol at the time of writing we will explain how forward transfers are handled in [Latus](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf).

The overall idea is to group forward transfers from one or more mainchain blocks into a special *Forward Transfers Transaction* (FTTx). This transaction is similar to the coinbase transaction on the mainchain in that it does not include any inputs being spent. It can be considered a transaction minting coins on the sidechain.

In Latus, the `receiverMetadata` entails the receivers address on the sidechain, as well as a payback address, which is used to refund the sender on the mainchain in case a forward transfer was to fail for some reason. This could be because the mainchain block that includes the forward transfer is not referenced or the receivers address is not provided correctly. The latter would only become apparent once the forward transfer is synched to the sidechain as the mainchain doesn't verify the sidechain specific data. Let's look at an example:

```CPP
type ForwardTransfersTx (mcid: BlockID, ft: List [FT])
{
    outputs: List [UTXO];
    rejectedTransfers: List [BackwardTransfer]
}
```

The mainchain identifier (`mcid`) identifies the mainchain block, whose forward transfers are synchronized in the FTTx. The list of synchronized forward transfers (`List[FT]`) is similar to the inputs in a regular mainchain transaction, with the difference that the sidechain doesn't need to verify their validity. They would not have been included in the mainchain block if they violated the mainchain consensus rules. (`List[UTXO]`) comprises the newly created outputs on the sidechain, spendable under the condidtions defined in the Sidechain Consensus Protocol.

Lastly, forward transfers which cannot be processed properly are gathered and placed in a backward transfer to be included in the next withdrawal certificate. This mechanism is needed because the mainchain does not learn about failed forward transfers in another way. Hence, it cannot create refund transactions itself.

## Sidechain Internal Transactions

There are several ways to realize sidechain internal transactions in Zendoo. As long as a sidechain adheres to the Cross-Chain Transfer Protocol internal transactions can be implemented however the use case deems necessary. One of the first considerations that needs to go into a deciosion of the transactional model is if the sidechain should run the [UTXO or account model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}). One reason to diverge from the UTXO model used in Horizen's mainchain and the Latus sidechain construction would be the easier implementation of complex [smart contract functionalities]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-guaranteed-execution-with-smart-contracts %}) in the account model.

Recall how the Zendoo protocol doesn't require a sidechain to be a blockchain at all. User account balances could be maintained in a more traditional [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}), or even a highly progressive one like a [Directed Acyclic Graph]({{ site.baseurl }}{% post_url /technology/expert/2022-01-06-a-relative-the-dag %}). Hence, the option space for implementing sidechain internal transactions is huge.

### Sidechain Internal Transactions in Latus

In Latus, the UTXO accounting model is used. Transactions on a Latus sidechain look pretty the same as those on mainchain. At least one input is consumed with each transaction, spending of which is authorized through a [digital signature]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}). The total amount of the outputs created must be less than or equal to the amount of inputs consumed.

## Backward Transfers

Compared to forward transfers, a more complex mechanism is required for backward transfers in Zendoo. Usually, backward transfers are initiated on the sidechain as special transactions, batched in withdrawal certificates, and propagated to the mainchain by the sidechain nodes.

Backward transfers in Zendoo are challenging due to the asymmetric design in which sidechains monitor the mainchain but not vice versa. On the other hand, the protocol allows great flexibility in sidechain design. There few limitations on how backward transfers and withdrawal certificates are generated besides those imposed through the CCTP.

Before we look into the actual backward transfer, we need to talk about two concepts that are introduced with the CCTP and that effect all backward transfers alike.

### Withdrawal Certificates

The first concept is the withdrawal certificate which serves primarily as a container for backward transfers from a given sidechain. Additinally, withdrawal certificates serve as a liveness indicator for sidechains. When there is no withdrawal certificate submitted for a given sidechain within a time period defined with the deployment of said sidechain, it is considered to be inactive by the mainchain and no further withdrawal certificates for that chain will be accepted by the mainchain.

Grouping backward transfers comes with two advantages compared to broadcasting individual backward transfers to the mainchain. First, it reduces the communication overhead between chains. If you consider a system with a single sidechain this advantage could be considered negligible - in a system with tens or potentially even hundreds of sidechains not so much. Second, it reduces the computational burden on the sidechain. Remember how each withdrawal certificate has a SNARK proof attached, which authorizes the transaction and proves the correct state transitions within the sidechain.





Note that the mainchain consensus protocol does not impose any rules on how exactly a withdrawal certificate should be generated and by whom it should be submitted. It is up to the sidechain to define corresponding procedures. We only assume that it is submitted by means of a special transaction in the mainchain.

### Withdrawal Epochs

The concept of withdrawal epochs is introduced as a period of mainchain blocks in which sidechains are collecting backward transfers to be broadcast in a batch to the mainchain. One withdraw certificate per withdraw epoch is submitted to the mainchain, acompanied by the proof that all state transitions are valid. This reduces communication overhead, as not every backward transfer has to be broadcast individually.

![Withdrawal Epochs in Zendoo](/assets/post_files/technology/expert/4.2-cross-chain-transactions/withdrawal-epoch.jpg)

The length of a withdrawal epoch, defined over a number of mainchain blocks, is fixed with the deployment of the sidechain. The choice of the withdrawal epochs length depends on parameters such as the block time of a sidechain. If blocks are produced at a high frequency, for instance because the sidechain is build for near-instant in-game payments, the withdrawal epoch in terms of mainchain blocks might be short, so that each withdrawal certificate doesn't become too large in size due to the number of included backward transfers. A sidechain primarily used to store data, e.g. for a supply chain tracking system, might choose a longer withdraw epoch.

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

 Additionally, there is a mechanism to initiate a backward transfer on the mainchain, the *Backward Transfer Request* (BTR).

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

## Other Cross-Chain Transactions

### Liquid Chains

### PoA Token Bridge

## Summary



## Footnotes

[^1]: Garoffolo, Kaidalov, Oliynykov, [Zendoo: a zk-SNARK Verifiable Cross-Chain Transfer Protocol Enabling Decoupled and Decentralized Sidechains](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf)







first paper: decentralized certifiers. that were registering themselves in the MC and were responsible for signing withdrawal certificates.

In Zendoo, we avoid direct reliance on certifiers or any other special type of actors assigned to validate withdrawal certificates. Instead, we are going to leverage SNARKs [6, 7, 19] to provide means for the mainchain to effectively validate withdrawals.

**other**

MST is a fixed size Merkle tree

each sidechain defines its own SNARK that is used to validate withdrawal certificates. --> by putting verification key on chain this works
"The mainchain knows only the verification key – which is registered upon sidechain creation – and the interface of the verifier, which is unified for all sidechains. If the SNARK proof and public parameters are valid, then the certificate gets included and processed in the mainchain."

This provides flexibility to define its own rules for backward transfers. For instance, a sidechain can adopt a chain-of-trust model [13] or even the certifiers model
