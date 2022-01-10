---
layout: post
type: article
title: "Cross-Chain Transactions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/cross-chain-transactions/
topic: technology
level: expert
chapter: "Transactions"
further_reads: [zendoo, poa_erc20_token_bridge]
---

In this article, we take a close look at transactions that move assets between different blockchains, specifically a mainchain and its sidechains. Sidechains are blockchains interoperable with an existing mainchain. A special transaction is needed to transfer assets from one chain to another. These are called cross-chain transactions.

The way we structured this article follows the process of a developer building a sidechain. First, the sidechain needs to be deployed. Next, an address or account on the sidechain needs to be funded. The assets transferred to the sidechain can now be sent from one account to another within the sidechain. Finally, money can be transferred back to the mainchain. We will explain how all these actions can be performed and what options a developer or user has to trigger those actions.

This article builds heavily on our article about [sidechains]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-sidechains-interoperable-blockchains %}). We recommend reading this article before getting into cross-chain transactions.

## The Zendoo Sidechain Construction

The Zendoo sidechain construction allows the deployment of an arbitrary number of sidechains on top of existing Bitcoin-based blockchains with a single one-off change to the mainchain protocol. Zendoo is based on an asymmetric peg between the mainchain and its sidechains. The sidechains monitor events on the mainchain, but the main blockchain is agnostic to its sidechains.

![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_M.jpg)

Forward Transfers from mainchain to sidechain are simpler to construct than Backward Transfers that return assets to the mainchain. Here, the receiving chain (mainchain) cannot verify incoming Backward Transfers easily. Zendoo introduces a SNARK-based proving system, where sidechains generate a proof for each given period ("Epoch"), that is submitted to the mainchain together with that epoch's Backward Transfers. The Backward Transfers and the proof are grouped into a _Withdrawal Certificate_, a special container that structures communication with the mainchain.

The cryptographic proofs allow the mainchain to verify state transitions of the sidechain without monitoring it directly. Some modifications to the mainchain needed to enable this sidechain design are the following:

### Sidechain Transactions Commitment

A new data field called _Sidechain Transactions Commitment_ (SCTxsCommitment) is added to the mainchain [block header](https://academy.horizen.io//technology/expert/blockchain-as-a-data-structure/#the-block-header). It is the root of a [Merkle tree](https://academy.horizen.io//technology/expert/blockchain-as-a-data-structure/#merkle-trees) whose leaves are made up of sidechain relevant transactions contained in that specific block. Including this data in the block header allows sidechain nodes to easily synchronize and verify incoming transactions without needing to know the entire mainchain block.

### Sidechain Deployment

A special type of bootstrapping transaction is introduced in which several important parameters of the new sidechain are defined. The sidechain identifier `ledgerId` is set, as well as the verifying key to validate incoming Withdrawal Certificates. This bootstrapping transaction also describes how proof data will be provided from sidechain to mainchain with regards to the number and types of included data elements. Additionally, the length of a _Withdrawal Epoch_ is defined in the bootstrapping transaction.

## Forward Transfers

A Forward Transfer moves assets from the mainchain to one of its sidechains. These transactions, more specifically the transaction outputs, are unspendable on the mainchain but include some metadata, so they are redeemable on one of the sidechains. It is the responsibility of sidechain nodes to monitor the mainchain for incoming transactions, and include them in a sidechain block.

> "Generally, the scenario looks as follows: an MC to SC transfer is represented by a pair of transactions which we can consider as "sending" and "receiving". "Sending" is done on the mainchain side by means of the Forward Transfer [...] and "receiving" is done on the sidechain side by means of aggregated Forward Transfers transaction [...]. While "sending" destroys coins in the mainchain, "receiving" creates the corresponding number of coins in the sidechain." - [Zendoo protocol](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf)

### Initiating a Forward Transfer on the Mainchain

When users want to transfer coins from the mainchain to a sidechain, they create a transaction including sidechain relevant data, namely:

- _ledgerId_: the unique identifier of an active sidechain
- _receiverMetadata_: information about the receiver (i.e., the address) and other sidechain-relevant data

Depending on the consensus rules of the given sidechain, the `receiverMetadata` entails different types of data. This part of the output is not verified by the mainchain, as it is agnostic to the sidechain consensus protocol.

When we consider a blockchain running the UTXO model, for instance, Horizen or Bitcoin, a "forward output" can be one of many outputs in a regular transaction. Not all outputs need to be "forward outputs", e.g., change outputs are required.

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

In the example above, a total of eight coins are spent, and two UTXOs are consumed. The transaction creates four new outputs, two of which are regular outputs spendable on the mainchain. The other two outputs are sending coins to a single sidechain (ledgerId 0x300C...) with two and three coins, respectively.

### Finalizing a Forward Transfer on the Sidechain

A sidechain developer is free to come up with a mechanism to process incoming Forward Transfers. Since there is only one implementation of a sidechain consensus protocol at the time of writing, we will explain how [Latus](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf) handles Forward Transfers.

The overall idea is to group Forward Transfers from one or more mainchain blocks into a special _Forward Transfers Transaction_ (FTTx). This transaction is similar to the coinbase transaction on the mainchain in that it does not include any chain-internal inputs. It can be considered a transaction minting coins on the sidechain. A Forward Transfers Transaction comprises only outputs from Forward Transfers. There will be no Forward Transfers Transaction if there are no Forward Transfers to a sidechain over a period of mainchain blocks.

![Processing Forward Transfers on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/forward-transfer-transaction_D.jpg)
![Processing Forward Transfers on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/forward-transfer-transaction_M.jpg)

In Latus, the `receiverMetadata` entails the receiver's address on the sidechain, and a payback address used to refund the sender on the mainchain if a Forward Transfer was to fail. This could be because the mainchain block that includes the Forward Transfer is not referenced, or the receiver's address is not provided correctly. The latter would only become apparent once the Forward Transfer is synched to the sidechain as the mainchain does not verify sidechain specific data. Let's look at an example:

```CPP
type ForwardTransfersTx (mcid: BlockID, ft: List[FT])
{
    outputs: List [UTXO];
    rejectedTransfers: List [BackwardTransfer]
}
```

The mainchain identifier (`mcid`) identifies the mainchain block, whose Forward Transfers are synchronized in the FTTx. The list of synchronized Forward Transfers (`List[FT]`) is similar to the inputs in a regular mainchain transaction, with the difference that the sidechain doesn't verify their validity. They would not have been included in the mainchain if they violated the mainchain consensus rules. (`List[UTXO]`) comprises the newly created outputs on the sidechain, spendable under the conditions defined in the sidechain consensus protocol.

Lastly, Forward Transfers, which cannot be processed, are collected to be included in the next Withdrawal Certificate. This mechanism is needed because the mainchain does not learn about failed Forward Transfers in another way. It cannot create refund transactions itself.

## Sidechain Internal Transactions

There are several ways to realize sidechain-internal transactions in Zendoo. As long as a sidechain adheres to the cross-chain transfer protocol, internal transactions can be implemented; however, the use case deems appropriate. One of the first considerations that needs to go into a decision of the transactional model, is if the sidechain will run the [UTXO or account model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}). One reason to diverge from the UTXO model used in Horizen's mainchain and the Latus sidechain construction would be the easier implementation of complex [smart contract functionalities]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-guaranteed-execution-with-smart-contracts %}) in the account model.

Recall how the Zendoo protocol doesn't require a sidechain to be a blockchain at all. User account balances could be maintained in a more traditional [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}), or even a highly progressive one like a [directed acyclic graph (DAG)]({{ site.baseurl }}{% post_url /technology/expert/2022-01-06-a-relative-the-dag %}). The option space for implementing sidechain internal transactions is very large.

### Sidechain Internal Transactions in Latus

In Latus uses the UTXO accounting model. Transactions on Latus sidechains work just like regular UTXO on-chain transactions. At least one input is consumed with each transaction, spending of which is authorized through a [digital signature]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}). The total amount of the outputs created must be less than or equal to the number of inputs consumed.

## Backward Transfers

Backward Transfers in Zendoo require a more complex mechanism. Backward Transfers are typically initiated on the sidechain as special transactions batched in Withdrawal Certificates and propagated to the mainchain by sidechain nodes.

Backward Transfers in Zendoo are challenging due to the asymmetric design. On the other hand, the protocol allows great flexibility in sidechain design. There are few limitations on how Backward Transfers and Withdrawal Certificates are generated outside of those imposed through the CCTP.

Before we look into actual Backward Transfers, we need to talk about two concepts that are introduced with the CCTP, and that affect all Backward Transfers.

### Withdrawal Certificates

The first concept is the Withdrawal Certificate, which serves primarily as a container for Backward Transfers. Additionally, it is used as a liveness indicator for sidechains. When there is no Withdrawal Certificate submitted for a given sidechain within a time period (`submit_len`) defined with the deployment of said sidechain, that sidechain is considered to be inactive by the mainchain, and no further Withdrawal Certificates for that sidechain will be accepted by the mainchain.

Grouping Backward Transfers comes with two advantages compared to broadcasting them individually. First, it reduces the amount of inter-chain communication. If you consider a system with a single sidechain, this advantage could be considered negligible - in a system with tens and potentially hundreds of sidechains not so much. Second, it might reduce the computational burden on the sidechain. Remember how each Withdrawal Certificate has a SNARK proof attached that authorizes the transaction and proves correct state transitions within the sidechain. Generating this proof comes at a computational cost, which, depending on the proving system adopted by the sidechain, may be reduced by broadcasting sidechain updates to the mainchain less frequently.

Note that the mainchain consensus protocol does not impose any rules on how exactly a Withdrawal Certificate should be generated or by whom it should be submitted.

### Withdrawal Epochs

The concept of Withdrawal Epochs is introduced as a number of mainchain blocks in which a sidechain is collecting Backward Transfers to be broadcasted to the mainchain. One Withdrawal Certificate is submitted per Withdrawal Epoch, accompanied by a SNARK proof that all Backward Transfers are valid.

![Withdrawal Epochs in Zendoo](/assets/post_files/technology/expert/4.2-cross-chain-transactions/withdrawal-epoch_D.jpg)
![Withdrawal Epochs in Zendoo](/assets/post_files/technology/expert/4.2-cross-chain-transactions/withdrawal-epoch_M.jpg)

The length of a Withdrawal Epoch, defined over a number of mainchain blocks, is fixed with the deployment of the sidechain. The choice of Withdrawal Epochs length depends on parameters like the block time of a sidechain. If blocks are produced at a high frequency, for instance, because the sidechain is built for many in-game micro-payments, the Withdrawal Epoch in terms of mainchain blocks can be short. This can prevent Withdrawal Certificates from becoming too large due to the number of included Backward Transfers. A sidechain primarily used to store data, e.g., for a supply chain tracking system, might choose a block time close to that of Horizen and a longer Withdrawal Epoch compared to the in-game payment sidechain.

### Initiating a Backward Transfer on Sidechain

A regular Backward Transfer in a UTXO-based sidechain works very similarly to a regular blockchain-internal transaction. Previously unspent transaction outputs are consumed as inputs, spending of which is authorized through digital signatures. Outputs meant to be spendable on the mainchain must specify the receiver's mainchain address and the amount to be transferred. Because Backward Transfers are a special transaction type by design, there is no need to specifically refer to the mainchain in the outputs.

All Backward Transfers initiated within a single Withdrawal Epoch are grouped into a _Backward Transfers Transaction_ (BTTx). This is a regular multi-output transaction in which all outputs are spendable on the mainchain. This Backward Transfers Transaction is then placed in the Withdrawal Certificate to be broadcast on the mainchain.

### Initiating a Backward Transfer on the Mainchain

A user might need to request a Backward Transfer directly from the mainchain. This could happen either because the sidechain is controlled by malicious actors because it was implemented incorrectly, or because it became inactive. Rather than trying to broadcast a Backward Transfer to all sidechain nodes, a user can instead use one of two mechanisms that allow initiating Backward Transfers from the mainchain directly: _Backward Transfer Requests_ (BTRs) and _Ceased Sidechain Withdrawals_ (CSWs).

#### Backward Transfer Requests

A Backward Transfer Request is a special type of transaction created on the mainchain. It includes the _ledgerId_ specifying the sidechain, the _receiver_ address on the mainchain as well as the _amount_ to be transferred. The _nullifier_ serves as a unique identifier of coins on a sidechain. Additionally, a _proof_ and _proofdata_ is submitted with the BTR, which allows sidechain nodes to verify incoming Backward Transfer Requests. The proofdata contains one or more UTXOs on the sidechain, which will be consumed by the BTR. The right to spend the UTXO(s), i.e. the [digital signature]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}), is provided in the _proof_ part.

![Processing Backward Transfer Requests on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/backward-transfer-request_D.jpg)
![Processing Backward Transfer Requests on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/backward-transfer-request_M.jpg)

When a Backward Transfer Request is submitted on the mainchain it will be synchronized to the sidechain through the same mechanism used to process Forward Transfers. First, it is included in the mainchains _Sidechain Transaction Commitment_ Merkle tree. It is synched to the sidechain with the next mainchain block reference. Here, it is included in a special _Backward Transfer Requests Transaction_ (BTRTx), which works analogously to the _Forward Transfers Transaction_ (FTTx) we already covered. It is a single transaction where all inputs are specified through BTRs, and the outputs are Backward Transfers.

Once a BTR is included in a BTRTx, it will also be included in the next Withdrawal Certificate. After the Withdrawal Certificate is broadcast back to the mainchain and included by the miners, the transfer is deemed complete.

#### Ceased Sidechain Withdrawal

Another mechanism to initiate a Backward Transfer is the _Ceased Sidechain Withdrawal_ (CSW). When a sidechain fails to submit a Withdrawal Certificate within its submit period, it becomes inactive, and no further Withdrawal Certificates will be accepted.

A Ceased Sidechain Withdrawal is similar to a Backward Transfer Request, in that it is a transaction submitted on the mainchain, triggering an event affecting the sidechain. It differs from a BTR, in that it performs a direct payment. A Backward Transfer Request tells the sidechain nodes to trigger a Backward Transfer. A Ceased Sidechain Withdrawal, on the other hand, makes an immediate payment to the submitter.

A CSW has the same structure as a BTR from a data perspective. But since Withdrawal Certificates for inactive sidechains are not processed by the mainchain, it must trigger a direct payment. The proof-system interface for Ceased Sidechain Withdrawals works just like the SNARK interface for Backward Transfer Requests: the _proofdata_ specifies which sidechain-UTXOs are consumed, and the _proof_ comprises the authorization to spend them.

In Zendoo, sidechains don't need to support Ceased Sidechain Withdrawals and Backward Transfer Requests. They are an option the mainchain supports and that each sidechain development team is free to implement.

### Handling incoming Backward Transfers on the mainchain

Once all Backward Transfers of a Withdrawal Epoch are submitted, through either regular Backward Transfers on the sidechain or BTRs/CSWs on the mainchain, they are broadcast to the mainchain in a Withdrawal Certificate together with a SNARK proof. Now, this data needs to be verified by the mainchain.

First, mainchain nodes will check if the _ledgerId_ refers to a currently active sidechain. Next, the _epochId_ must be a valid Withdrawal Epoch number for the given sidechain. Lastly, the proof must be a valid SNARK proof and evaluate to true, using the verification key submitted at the time of sidechain deployment. If the SNARK proof and public parameters are valid, then the Withdrawal Certificate gets included and processed in the mainchain.

## Summary

Now, what's the information you should take away? After a quick recap of the modifications to the mainchain protocol we looked into Forward Transfers sending money to a sidechain. The transfers are initiated on the mainchain, synchronized to the sidechain through mainchain block references, and grouped into _Forward Transfers Transactions_ that "mint" coins on the sidechain, similar to coinbase transactions.

Money that resides on a sidechain can be transferred freely within the system, and the option space for how a sidechain can handle these payments transactions is ample. This is because sidechain-internal transactions don't involve the Cross-Chain Transfer Protocol, which must be adhered to by all sidechains.

When it comes to Backward Transfers, there are several ways how they can be initiated. In most cases, a user will create a Backward Transfer from within the sidechain. If this is not possible, the user can submit a Backward Transfer Request on the mainchain. If the sidechain has become inactive, the Ceased Sidechain Withdrawal mechanism serves as a last resort to recover funds.

All Backward Transfers and BTRs are broadcast to the mainchain via Withdrawal Certificates, whereas CSWs trigger a payment directly on the mainchain without involving sidechain nodes.

The validity of Withdrawal Certificates is proven with SNARK proofs and verified based on the verification key submitted at the time of sidechain deployment.
