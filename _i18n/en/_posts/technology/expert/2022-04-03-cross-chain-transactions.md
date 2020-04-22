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

A new data field called Sidechain Transactions Commitment (SCTxsCommitment) is added to the mainchain [block header](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#the-block-header). It is the root of a [Merkle tree](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#merkle-trees) whos leaves are made up of sidechain relevant transactions contained in that specific block. Including this data in the block header allows sidechain nodes to easily synchronize and verify incoming transactions without the need to transmit the entire mainchain block.

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

The overall idea is to group forward transfers from one or more mainchain blocks into a special *Forward Transfers Transaction* (FTTx). This transaction is similar to the coinbase transaction on the mainchain in that it does not include any inputs being spent. It can be considered a transaction minting coins on the sidechain. A Forward Transfers Transaction comprises only forward transfer outputs. If there are no forward transfers to a sidechain over a period of mainchain blocks, there will be no Forward Transfers Transaction in that period.

![Processing Forward Transfers on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/forward-transfer-transaction.jpg)

In Latus, the `receiverMetadata` entails the receivers address on the sidechain, as well as a payback address used to refund the sender on the mainchain in case a forward transfer was to fail for some reason. This could be because the mainchain block that includes the forward transfer is not referenced or the receivers address is not provided correctly. The latter would only become apparent once the forward transfer is synched to the sidechain as the mainchain doesn't verify the sidechain specific data. Let's look at an example:

```CPP
type ForwardTransfersTx (mcid: BlockID, ft: List[FT])
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

Grouping backward transfers comes with two advantages compared to broadcasting individual backward transfers to the mainchain. First, it reduces the amount of communication between chains. If you consider a system with a single sidechain this advantage could be considered negligible - in a system with tens and potentially hundreds of sidechains not so much. Second, it reduces the computational burden on the sidechain. Remember how each withdrawal certificate has a SNARK proof attached, which authorizes the transaction and proves the correct state transitions within the sidechain. Generating this proof comes at a computational cost which is reduced by broadcasting sidechain updates to the mainchain.

Note that the mainchain consensus protocol does not impose any rules on how exactly a withdrawal certificate should be generated and by whom it should be submitted. It is up to the sidechain to define corresponding procedures.

### Withdrawal Epochs

The concept of withdrawal epochs is introduced as a period of mainchain blocks in which a sidechain is collecting backward transfers to be broadcast to the mainchain. One withdraw certificate is submitted to the mainchain per withdraw epoch, acompanied by the proof that all state transitions are valid.

![Withdrawal Epochs in Zendoo](/assets/post_files/technology/expert/4.2-cross-chain-transactions/withdrawal-epoch.jpg)

The length of a withdrawal epoch, defined over a number of mainchain blocks, is fixed with the deployment of the sidechain. The choice of the withdrawal epochs length depends on parameters such as the block time of a sidechain. If blocks are produced at a high frequency, for instance because the sidechain is built for many small in-game payments, the withdrawal epoch in terms of mainchain blocks can be short. That way withdrawal certificates don't become too large in size due to the number of included backward transfers. A sidechain primarily used to store data, e.g. for a supply chain tracking system, might choose a block time close to that of Horizen and a longer withdraw epoch compared to the in-game payment sidechain.

### Initiating a Backward Transfer on Sidechain

A regular backward transfer in a UTXO based sidechain works very similar to a regular blockchain-internal transaction. A number of previously unspent transaction outputs is consumed as inputs, spending of which is authorized through digital signatures. Outputs meant to be spendable on the mainchain must specify the receivers mainchain address as well as the amount to be transferred.

All backward transfers initiated within a single withdrawal epoch are first grouped into a *Backward Transfers Transaction* (BTTx). This is a regular multi-output transaction in which all outputs are spendable on the mainchain. This Backward Transfers Transaction is then placed in the withdrawal certificate to be broadcast on the mainchain.

**Where in the output is the information included, that it is meant to be transferred to mainchain? In Forward transfers the ledgerId indicates a cross-chain transfer. How about backward transfers?**

### Initiating a Backwart Transfer on the Mainchain

There might arise cases where a user needs to request a backward transfer directly from the mainchain. This could happen either because a sidechain is controlled by malicious actors, because it was implemented incorrectly or because it became inactive. Rather then trying to broadcast a backward transfer to all sidechain nodes, a user can instead use one of two mechansims that allow initiating backward transfers from the mainchain directly: *Backward Transfer Requests* (BTRs) and *Ceased Sidechain Withdrawals* (CSWs).

#### Backward Transfer Requests

A Backward Transfer Requests is a special type of transaction created on the mainchain. It includes the *ledgerId* specifying the sidechain, the *receiver* address on the mainchain as well as the *amount* to be transferred and the *nullifier*, a unique identifier of the coins on the sidechain. Additionally, a *proof* and *proofdata* is submitted with the BTR, which allows sidechain nodes to verify incoming Backward Transfer Requests. The proofdata contains one or more UTXOs on the sidechain, which will be consumed by the BTR. The right to spend the UTXO(s) is provided through the *proof*.

![Processing Backward Transfer Requests on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/backward-transfer-request.jpg)

When a BTR is submitted on the mainchain it will be synchronized to the sidechain through the same mechanism used to process forward transfers. First, it is included in the mainchains *Sidechain Transaction Comittment* Merkle tree and with the next mainchain block reference it is synched to the sidechain. Here, it is included in a special *Backward Transfer Requests Transaction* (BTRTx) which works similar to the *Forward Transfers Transaction* (FTTx) we already talked about. It is a single transaction in which all inputs are specified through BTRs and the outputs are backward transfers, as specified in the BTRs.

Once a BTR is included in a sidechain blocks BTRTx, it will also be included in the next withdrawal certificate of that sidechain. After the withdrawal certificate is broadcast back to the mainchain the transfer is completed.

#### Ceased Sidechain Withdrawal

Another mechanism to initiate a backward transfer is the *Ceased Sidechain Withdrawal* (CSW). When a sidechain fails to submit a withdrawal certificate within its submit period it becomes inactive and no further withdrawal certificates will be accepted.

A Ceased Sidechain Withdrawal is similar to a Backward Transfer Request, in that it is a transaction submitted on the mainchain, triggering an event effecting the sidechain. It differs from a BTR, in that it performs a direct payment. A Backward Transfer Request tells the sidechain notes to trigger a backward transfer. A Ceased Sidechain Withdrawal on the other hand makes a direct payment to the submitter.

A CSW has the exact same structure as a BTR from a data perspective. But since withdrawal certificates for inactive sidechains are not processed by the mainchain, it must trigger a direct payment. The proof-system interface for Ceased Sidechain Withdrawals works just like the SNARK interface for BTRs: the *proofdata* specifies which sidechain-UTXOs are consumed and *proof* comprises the authorization to spend them.

In Zendoo, not all sidechains need to support Ceased Sidechain Withdrawals and Backward Transfer Requests. The mainchain supports these mechanisms regardless and each sidechain development team is free to make use of these mechanisms as they see fit.

### Handling incoming Backward Transfers on the Mainchain

Once all backward transfers of a withdrawal epoch are complete, submitted through regular backward transfers on the sidechain, or BTRs/CSWs on the sidechain, they are broadcast to the mainchain in a withdrawal certificate with an attached proof. Now this data needs to be verified by the mainchain.

First, mainchain nodes will check if the *ledgerId* refers to a currently active sidechain. Next, the *epochId* must be a valid withdrawal epoch number for the given sidechain. Lastly, the proof must be a valid SNARK proof and evaluate to true, using the verification key submitted at the time of sidechain deployment. If the SNARK proof and public parameters are valid, then the certificate gets included and processed in the mainchain.

## Summary

Now what's the information you should take away from reading this article?

After a quick recap of the modifications to the mainchain protocol we first looked into forward transfers sending money to a sidechain. The transfers are initiated on the mainchain, synchronized to the sidechain through mainchain block references and grouped into *Forward Transfers Transactions* that "mint" coins on the sidechain, similar to coinbase transactions on the mainchain.

Money that resides on a sidechain can freely be transferred sidechain internally and there a large option space for how these payments transactions are handled on the sidechain. This is due to the fact that sidechain internal transactions don't involve the cross-chain transfer protocol which must be adhered to by all sidechains.

When it comes to backward transfers there are several ways how they can be triggered. In most every case, a user will just create a backward transfer from within the sidechain. If this is not possible for some reason, he can submit a Backward Transfer Request on the mainchain. If the sidechain has become inactive, the Ceased Sidechain Withdrawal mechanisms serves as a last resort to recover funds from a sidechain.

All backward transfers and BTRs, are broadcast to the mainchain via withdrawal certificates, whereas CSWs trigger a payment directly on the mainchain without involving sidechain nodes at all.
