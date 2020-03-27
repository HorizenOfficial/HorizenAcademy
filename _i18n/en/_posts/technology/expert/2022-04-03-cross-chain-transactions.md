---
layout: post
type: article
title: "Cross-Chain Transactions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/cross-chain-transactions/
topic: technology
level: expert
chapter: "Transactions"
further_reads: [zendoo]
---

In this article we will take a close look at transactions that move assets between different blockchains - more specifically sidechains. Sidechains are blockchains which are interoperable with an existing mainchain. In order to transfer assets from one chain to another a special type of transaction is needed - the cross-chain transaction.

The way we structured this article follows the logic of a developer who wants to build a sidechains. First, the sidechain needs to be deployed. Next an address or account on the sidechain needs to be funded. The assets transferred to the sidechain can now be sent from one account to another within the sidechain. Finally, assets can be transferred back to the mainchain. We will explain how all these actions can be performed, and what options a developer or user has, to trigger those actions.

Recap first article: CCTP most important part, abackward transfer more tricky

Why crucial, can't monitor each sidechain.

asymmetric - term from back paper https://blockstream.com/sidechains.pdf

Explain components/primitives used to build cctp

forward easy

backward hard.

first paper: decentralized certifiers. that were registering themselves in the MC and were responsible for signing withdrawal certificates.

In Zendoo, we avoid direct reliance on certifiers or any other special type of actors assigned to validate withdrawal certificates. Instead, we are going to leverage SNARKs [6, 7, 19] to provide means for the mainchain to effectively validate withdrawals.

# Sidechain Deployment

# Forward Transfers

In our approach, Zendoo, we consider a forward transfer as a special transaction on the mainchain that destroys coins and provides sidechain-specific metadata allowing a user to receive coins in the sidechain.

## Initiating a Forward Transfer on the Mainchain

ledgerId amount
−
−
def
FT = (ledgerId, receiverMetadata, amount),
a unique identifier of a previously created and active sidechain to which coins are transferred;
a number of coins to transfer;
some metadata for receiving sidechain B (e.g., a receiver’s address); its structure is not fixed in the mainchain and can consist of different variables of predefined types depending on a sidechain’s construction; its semantic meaning is not known to the mainchain.

UTXO-based blockchain system (e.g. Bit- coin or Horizen), we can consider FT as a special unspendable transaction output in a regular multi-input multi-output transaction --> no pubkey sript

it is the responsibility of the sidechain to sync forward transfers from the MC and issue the corresponding amount of coins.

## Finalizing a Forward Transfer on the Mainchain

### Example: Latus

# Sidechain Internal Transactions

## Latus Example

# Backward Transfers

A more complex procedure is required for backward transfers. They are initiated in the sidechain as special transactions, batched in a withdrawal certificate, and propagated to the mainchain for processing.

each sidechain defines its own SNARK that is used to validate withdrawal certificates. --> by putting verification key on chain this works
"The mainchain knows only the verification key – which is registered upon sidechain creation – and the interface of the verifier, which is unified for all sidechains. If the SNARK proof and public parameters are valid, then the certificate gets included and processed in the mainchain."

This provides flexibility to define its own rules for backward transfers. For instance, a sidechain can adopt a chain-of-trust model [13] or even the certifiers model

Note that the mainchain consensus protocol does not impose any rules on how exactly a withdrawal certificate should be generated and by whom it should be submitted. It is up to the sidechain to define corresponding procedures. We only assume that it is submitted by means of a special transaction in the mainchain.

## Withdrawal Certificates

## Initiating a Backward Transfer on Sidechain

## Initiating a Backwart Transfer on the Mainchain

There might be cases when a user would want to request a backward transfer directly from the mainchain rather than creating a BT in the SC. For instance, it would allow users to withdraw funds in case of a misbehaving (e.g., maliciously controlled sidechain that censors submission of backward transfers) or ceased sidechain.

1. Backward transfer request (BTR), and 
2. Ceased sidechain withdrawal (CSW).

### Backward Transfer Requests

### Ceased Sidechain Withdrawal

## Handling incoming Backward Transfers



## Summary



## Footnotes

[^1]: Garoffolo, Kaidalov, Oliynykov, [Zendoo: a zk-SNARK Verifiable Cross-Chain Transfer Protocol Enabling Decoupled and Decentralized Sidechains](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf)
