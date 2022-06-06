---
layout: post
type: article
title: "Cross-Chain Transactions"
description: "In this article, we take a close look at transactions that move assets between different blockchains, specifically a mainchain and its sidechains"
permalink: /technology/expert/cross-chain-transactions/
no_alternate: true
topic: technology
level: expert
chapter: "Transactions"
---

**In this article**, we take a close look at transactions that move assets _between_ different blockchains, specifically a _mainchain_ and its _sidechains_. **Sidechains** are blockchains interoperable with an existing **mainchain**. A special transaction is needed to transfer assets from one chain to another. These are called **cross-chain transactions**.

The way we structured this article follows the process of a developer building a sidechain. **First**, the _sidechain_ needs to be deployed. **Next**, an _address_ or _account_ on the sidechain needs to be funded. The assets transferred to the sidechain can now be sent from one account to another within the sidechain. **Finally**, _money_ can be transferred back to the mainchain. We will explain how all these actions can be performed and what options a developer or user has to trigger those actions.

This article builds heavily on our article about [sidechains](https://academy.horizen.io/horizen/advanced/sidechains/). We recommend reading this article before getting into cross-chain transactions.

## The Zendoo Sidechain Construction

The **Zendoo** sidechain construction allows the deployment of an arbitrary number of sidechains on top of existing **Bitcoin**-based blockchains with a single one-off change to the mainchain protocol. Zendoo is based on an _asymmetric peg_ between the mainchain and its sidechains. The sidechains monitor events on the mainchain, but the main blockchain is agnostic to its sidechains.

![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_M.jpg)

**Forward transfers** from mainchain to sidechain are simpler to construct than **backward transfers** that return assets to the mainchain. **Here**, the receiving chain (mainchain) cannot verify incoming backward transfers easily. Zendoo introduces a **SNARK-based proving system**, where sidechains generate a proof for each given period, or _Epoch_, that is submitted to the mainchain together with that epoch's backward transfers. The backward transfers and the proof are grouped into a **Withdrawal Certificate**, a special container that structures communication with the mainchain.

**The _cryptographic proofs_ allow the mainchain to verify state transitions of the sidechain without monitoring it directly**. Some modifications to the mainchain needed to enable this sidechain design are the following:

### Sidechain Transactions Commitment

A new data field called **Sidechain Transactions Commitment** (_SCTxsCommitment_) is added to the mainchain block header. It is the _root_ of a Merkle tree whose leaves are made up of sidechain relevant transactions contained in that specific block. **Including this data** in the block header allows sidechain nodes to easily synchronize and verify incoming transactions without needing to know the entire mainchain block.

### Sidechain Deployment

A special type of bootstrapping transaction is introduced in which several important parameters of the new sidechain are defined. The **sidechain identifier** `ledgerId` is set, as well as the verifying key to validate incoming withdrawal certificates. This _bootstrapping transaction_ also describes how proof data will be provided from sidechain to mainchain with regards to the number and types of included data elements. **Additionally**, the length of a **withdrawal epoch** is defined in the bootstrapping transaction.

## Forward Transfers

**A forward transfer moves assets from the mainchain to one of its sidechains**. These transactions, more specifically the _transaction outputs_, are unspendable on the mainchain, but include some metadata so they are redeemable on one of the sidechains. It is the responsibility of sidechain nodes to monitor the mainchain for incoming transactions, and include them in a sidechain block.

> "**Generally, the scenario looks as follows:** an MC to SC transfer is represented by a pair of transactions which we can consider as "sending" and "receiving". "Sending" is done on the mainchain side by means of the Forward Transfer [...] and "receiving" is done on the sidechain side by means of aggregated Forward Transfers transaction [...]. While "sending" destroys coins in the mainchain, "receiving" creates the corresponding number of coins in the sidechain." - [Zendoo protocol](https://www.horizen.io/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf)

### Initiating a Forward Transfer on the Mainchain

When users want to transfer coins from the mainchain to a sidechain, they create a transaction including sidechain relevant data, **namely**:

- **_ledgerId_**: The unique identifier of an active sidechain
- **_receiverMetadata_**: Information about the receiver (i.e., the address) and other sidechain-relevant data

Depending on the consensus rules of the given sidechain, the `receiverMetadata` entails different types of data. This part of the output is not verified by the mainchain, as it is agnostic to the sidechain consensus protocol.

When we consider a blockchain running the UTXO model, for instance, **Horizen** or **Bitcoin**, a "forward output" can be one of many outputs in a regular transaction. Not all outputs need to be "forward outputs", e.g., change outputs are required.

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

**In the example above**, a total of **eight** coins are spent, and **two** UTXOs are consumed. The transaction creates **four** new outputs, **two** of which are regular outputs spendable on the mainchain. The other **two** outputs are sending coins to a single sidechain (**ledgerId 0x300C...**) with **two** and **three** coins, respectively.

### Finalizing a Forward Transfer on the Sidechain

A sidechain developer is free to come up with a mechanism to process incoming forward transfers. Since there is only one implementation of a sidechain consensus protocol at the time of writing, we will explain how [Latus](https://www.horizen.io/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf) handles forward transfers.

The overall idea is to group forward transfers from one or more mainchain blocks into a special **Forward Transfers Transaction** (FTTx). This transaction is similar to the coinbase transaction on the mainchain in that it does not include any chain-internal inputs. It can be considered a transaction minting coins on the sidechain. A _forward transfers transaction_ comprises only outputs from forward transfers. There will be no forward transfers transaction if there are no forward transfers to a sidechain over a period of mainchain blocks.

![Processing Forward Transfers on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/forward-transfer-transaction_D.jpg)
![Processing Forward Transfers on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/forward-transfer-transaction_M.jpg)

**In Latus**, the `receiverMetadata` entails the _receiver's_ address on the sidechain, and a _payback_ address used to refund the sender on the mainchain if a forward transfer was to fail. This could be because the mainchain block that includes the forward transfer is not referenced, or the receiver's address is not provided correctly. The latter would only become apparent once the forward transfer is synched to the sidechain as the mainchain does not verify sidechain specific data. **Let's look at an example:**

```CPP
type ForwardTransfersTx (mcid: BlockID, ft: List[FT])
{
    outputs: List [UTXO];
    rejectedTransfers: List [BackwardTransfer]
}
```

The **mainchain identifier** (`mcid`) identifies the mainchain block, whose forward transfers are synchronized in the **FTTx**. The list of synchronized forward transfers (`List[FT]`) is similar to the inputs in a regular mainchain transaction, with the difference that the sidechain doesn't verify their validity. They would not have been included in the mainchain if they violated the mainchain consensus rules. (`List[UTXO]`) comprises the newly created outputs on the sidechain, spendable under the conditions defined in the sidechain consensus protocol.

**Lastly**, forward transfers, which cannot be processed, are collected to be included in the next _withdrawal certificate_. This mechanism is needed because the mainchain does not learn about failed forward transfers in another way. It cannot create refund transactions itself.

## Sidechain Internal Transactions

There are several ways to realize **sidechain-internal transactions** in Zendoo. As long as a sidechain adheres to the cross-chain transfer protocol, internal transactions can be implemented; **however**, the use case deems appropriate. One of the first considerations that needs to go into a decision of the transactional model, is if the sidechain will run the [UTXO or account model](https://academy.horizen.io/technology/expert/utxo-vs-account-model/). **One reason** to diverge from the UTXO model used in **Horizen's** mainchain and the **Latus** sidechain construction would be the easier implementation of complex [smart contract](https://academy.horizen.io/technology/advanced/guaranteed-execution-with-smart-contracts/) functionalities in the account model.

Recall how the Zendoo protocol doesn't require a sidechain to be a blockchain at all. User account balances could be maintained in a more traditional data structure, or even a highly progressive one like a [directed acyclic graph (DAG)](https://academy.horizen.io/horizen/advanced/block-dag/). The option space for implementing sidechain internal transactions is very large.

### Sidechain Internal Transactions in Latus

**Latus uses the UTXO accounting model.** Transactions on Latus sidechains work just like regular UTXO on-chain transactions. At least one input is consumed with each transaction, spending of which is authorized through a [digital signature](https://academy.horizen.io/technology/expert/digital-signatures/). **The total amount of the outputs created must be less than or equal to the number of inputs consumed**.

## Backward Transfers

Backward transfers in Zendoo require a more complex mechanism. **Backward transfers** are typically initiated on the sidechain as special transactions batched in withdrawal certificates and propagated to the mainchain by sidechain nodes.

Backward transfers in Zendoo are challenging due to the asymmetric design. **On the other hand**, the protocol allows great flexibility in sidechain design. There are few limitations on how backward transfers and withdrawal certificates are generated outside of those imposed through the CCTP.

Before we look into actual backward transfers, we need to talk about two concepts that are introduced with the CCTP, and that affect all backward transfers.

### Withdrawal Certificates

The **first** concept is the **withdrawal certificate**, which serves primarily as a container for backward transfers. **Additionally**, it is used as a _liveness indicator_ for sidechains. When there is no withdrawal certificate submitted for a given sidechain within a time period (`submit_len`) defined with the deployment of said sidechain, that sidechain is considered to be inactive by the mainchain and no further Withdrawal Certificates for that sidechain will be accepted by the mainchain.

Grouping backward transfers comes with two advantages compared to broadcasting them individually. **First**, it reduces the amount of inter-chain communication. If you consider a system with a single sidechain, this advantage could be considered negligible - in a system with tens and potentially hundreds of sidechains not so much. **Second**, it might reduce the computational burden on the sidechain. Remember how each withdrawal certificate has a **SNARK proof** attached that authorizes the transaction and proves correct state transitions within the sidechain. _Generating this proof comes at a computational cost_, which, depending on the proving system adopted by the sidechain, may be reduced by broadcasting sidechain updates to the mainchain less frequently.

Note that the mainchain consensus protocol does not impose any rules on how exactly a withdrawal certificate should be generated, or by whom it should be submitted.

### Withdrawal Epochs

The concept of **withdrawal epochs** is introduced as a number of mainchain blocks in which a sidechain is collecting backward transfers to be broadcasted to the mainchain. **One withdrawal certificate** is submitted per withdrawal epoch, accompanied by a SNARK proof that all backward transfers are valid.

![Withdrawal Epochs in Zendoo](/assets/post_files/technology/expert/4.2-cross-chain-transactions/withdrawal-epoch_D.jpg)
![Withdrawal Epochs in Zendoo](/assets/post_files/technology/expert/4.2-cross-chain-transactions/withdrawal-epoch_M.jpg)

**The length of a withdrawal epoch**, defined over a number of mainchain blocks, is _fixed_ with the deployment of the sidechain. The choice of withdrawal epochs length depends on parameters like the block time of a sidechain. **If blocks are produced at a high frequency**, for instance, because the sidechain is built for many _in-game micro-payments_, the withdrawal epoch in terms of mainchain blocks can be short. This can prevent withdrawal certificates from becoming too large due to the number of included backward transfers. **A sidechain primarily used to store data**, e.g., for a supply chain tracking system, might choose a block time close to that of **Horizen** and a longer withdrawal epoch compared to the in-game payment sidechain.

### Initiating a Backward Transfer on Sidechain

A regular backward transfer in a UTXO-based sidechain works very similarly to a regular blockchain-internal transaction. **Previously** _unspent transaction outputs_ are consumed as inputs, spending of which is authorized through _digital signatures_. Outputs meant to be spendable on the mainchain must specify the receiver's mainchain address and the amount to be transferred. _Because backward transfers are a special transaction type by design_, **there is no need to specifically refer to the mainchain in the outputs.**

All backward transfers initiated within a single withdrawal epoch are grouped into a **Backward Transfers Transaction** (BTTx). This is a regular multi-output transaction in which all outputs are spendable on the mainchain. This backward transfer transaction is then placed in the withdrawal certificate to be broadcast on the mainchain.

### Initiating a Backward Transfer on the Mainchain

**A user** might need to request a backward transfer directly from the mainchain. This could happen either because the sidechain is controlled by malicious actors because it was implemented incorrectly, or because it became inactive. Rather than trying to broadcast a backward transfer to all sidechain nodes, **a user can instead use one of two mechanisms that allow initiating backward transfers from the mainchain directly**: _Backward Transfer Requests_ (**BTRs**) and _Ceased Sidechain Withdrawals_ (**CSWs**).

#### Backward Transfer Requests

A **backward transfer request** is a special type of transaction created on the mainchain. It includes the **ledgerId** specifying the sidechain, the _receiver_ address on the mainchain as well as the _amount_ to be transferred. The **nullifier** serves as a unique identifier of coins on a sidechain. Additionally, a **proof** and **proofdata** is submitted with the **BTR**, which allows sidechain nodes to verify incoming backward transfer requests. The _proofdata_ contains one or more UTXOs on the sidechain, which will be consumed by the BTR. The right to spend the UTXO(s), i.e. the [digital signature](https://academy.horizen.io/technology/expert/digital-signatures/), is provided in the _proof_ part.

![Processing Backward Transfer Requests on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/backward-transfer-request_D.jpg)
![Processing Backward Transfer Requests on a Zendoo Sidechain](/assets/post_files/technology/expert/4.2-cross-chain-transactions/backward-transfer-request_M.jpg)

When a backward transfer request is submitted on the mainchain, it will be synchronized to the sidechain through the same mechanism used to process forward transfers. **First**, it is included in the mainchains **Sidechain Transaction Commitment** Merkle tree. It is synched to the sidechain with the next mainchain block reference. **Here**, it is included in a special **Backward Transfer Requests Transaction** (BTRTx), which works analogously to the **Forward Transfers Transaction** (FTTx) we already covered. It is a single transaction where all inputs are specified through BTRs, and the outputs are backward transfers.

Once a BTR is included in a _BTRTx_, it will also be included in the next withdrawal certificate. After the withdrawal certificate is broadcast back to the mainchain and included by the miners, **the transfer is deemed complete**.

#### Ceased Sidechain Withdrawal

Another mechanism to initiate a backward transfer is the **Ceased Sidechain Withdrawal** (CSW). When a sidechain fails to submit a withdrawal certificate within its submit period, it becomes inactive, and no further withdrawal certificates will be accepted.

A **ceased sidechain withdrawal** is similar to a backward transfer request, in that it is a transaction submitted on the mainchain, triggering an event affecting the sidechain. It differs from a BTR, in that it performs a direct payment. A backward transfer request tells the sidechain nodes to trigger a backward transfer. A ceased sidechain withdrawal, on the other hand, makes an immediate payment to the submitter.

**A CSW has the same structure as a BTR from a data perspective**. But since withdrawal certificates for inactive sidechains are not processed by the mainchain, it must trigger a direct payment. _The proof-system interface for ceased sidechain withdrawals works just like the SNARK interface for backward transfer requests_: The **_proofdata_** specifies which sidechain-UTXOs are consumed, and the **_proof_** comprises the authorization to spend them.

In **Zendoo**, sidechains don't need to support ceased sidechain Withdrawals and backward transfer requests. They are an option the mainchain supports and that each sidechain development team is free to implement.

### Handling incoming Backward Transfers on the mainchain

Once all backward transfers of a withdrawal epoch are submitted, through either regular backward transfers on the sidechain or **BTRs/CSWs** on the mainchain, they are broadcast to the mainchain in a withdrawal certificate together with a _SNARK proof_. **Now**, this data needs to be verified by the mainchain.

**First**, mainchain nodes will check if the **ledgerId** refers to a currently active sidechain. **Next**, the **epochId** must be a valid withdrawal epoch number for the given sidechain. **Lastly**, the proof must be a valid SNARK proof and evaluate to true, using the _verification key_ submitted at the time of sidechain deployment. If the SNARK proof and public parameters are valid, then the withdrawal certificate gets included and processed in the mainchain.

## Summary

After a quick recap of the _modifications_ to the mainchain protocol we looked into **forward transfers** sending money to a sidechain. The transfers are initiated on the mainchain, synchronized to the sidechain through **mainchain block references**, and grouped into **forward transfers transactions** that "mint" coins on the sidechain, similar to _coinbase_ transactions.

Money that resides on a sidechain can be transferred freely within the system, and the option space for how a sidechain can handle these payments transactions is ample. This is because sidechain-internal transactions don't involve the **cross-chain transfer protocol**, which must be adhered to by **_all_** sidechains.

**When it comes to backward transfers**, there are several ways they can be initiated. In most cases, a user will create a backward transfer from within the sidechain. _If this is not possible_, the user can submit a **backward transfer request** on the mainchain. If the sidechain has become inactive, the **ceased sidechain withdrawal mechanism** serves as a last resort to recover funds.

All backward transfers and BTRs are broadcast to the mainchain via **withdrawal certificates**, whereas CSWs trigger a payment directly on the mainchain without involving sidechain nodes.

The validity of withdrawal certificates is proven with **SNARK proofs** and verified based on the verification key submitted at the time of sidechain deployment.
