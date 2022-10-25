---
layout: post
type: intro
title: "zk-SNARKs vs zk-STARKs"
description: "SNARKs & STARKs are 2 distinct methods for verifying proof of computation for transactions on a blockchain without revealing the data within the computation."
permalink: /technology/advanced/zk-snarks-vs-zk-starks/
topic: technology
level: advanced
chapter: "zk-SNARKs vs zk-STARKs"
image: assets/post_files/technology/advanced/zk-snarks-vs-zk-starks/meta.jpg
---

<p></p>

Privacy preserving technologies in the Web3 space have experienced a major resurgence in popularity over the past year.

As mainstream users and institutions begin to adopt public blockchain networks, the need to better conceal sensitive information on-chain, combined with the challenges of scaling these networks while maintaining decentralization has led many protocol developers to turn to cutting-edge solutions like _zero-knowledge proofs_.

A **zero-knowledge proof** or _ZKP_ is a form of cryptography that enables one party in a transaction, the prover to prove that they have knowledge of a specific piece of information to another party, the verifier without revealing what that information is.

This technology has many advantages not only in protecting users’ sensitive data, but also in simplifying how nodes communicate to enable blockchain networks to confirm transactions with greater efficiency and become more scalable.

Under the ZKP umbrella, there are 2 distinct approaches that have emerged as major forces in the fight to solve the blockchain scalability trilemma; **zk-SNARKs** and **zk-STARKs**.

_In this article_ we will explore what differentiates these 2 methods for privacy-preserving transactions, and which approach Horizen has adopted to build its zero-knowledge-enabled network of blockchains.

## How Horizen Implements Zero-Knowledge Proofs

Before we dive into zk-SNARKs vs zk-STARKs, we will first lay out an example of how the ZKP technology works in practice on the _Horizen_ network.

**Horizen** uses ZKPs to allow a prover, a [sidechain](https://www.horizen.io/blockchain-academy/horizen/advanced/sidechains/), to prove that a transaction is valid to a verifier, our mainchain, without the mainchain nodes knowing the details of the transaction (i.e. addresses or values transferred).

The sidechain does this by first validating transactions in its blockchain as normal, then constructing a **‘proof’**, which is essentially a certificate that proves that the transactions within the sidechain have been correctly validated based on a standard process that is recognized by the mainchain.

The process of constructing a proof requires the sidechain to solve a series of challenges issued by a hash function simulator to prove that the transaction data has been validated correctly.

This **proof or certificate** is used to accurately represent the state of the sidechain(s) (i.e., account balances and total values in each sidechain) while containing far less data compared to the tens of thousands of transactions it represents.

The nodes on the mainchain then use a special algorithm to validate this certificate just like they would for any other transaction. If the algorithm confirms that the certificate/proof is correct, the mainchain nodes will take this as evidence that the transactions in the sidechains have all been correctly validated without needing to perform the validation process themselves.

In other words, instead of the mainchain nodes validating every single [sidechain transaction](https://www.horizen.io/blockchain-academy/technology/expert/cross-chain-transactions/), the mainchain can simply verify **‘proof of computation’** for tens to hundreds of thousands of sidechain transactions within a single block.

## zk-SNARKs and zk-STARKs

_SNARKs_ and _STARKs_ are 2 distinct methods for verifying proof of computation for transactions on a blockchain without revealing the data within the computation.

- **zk-SNARK** stands for zero-knowledge **succinct non-interactive** argument of knowledge.
- While **zk-STARK** stands for zero-knowledge **scalable transparent** argument of knowledge.

**‘Non-interactive’** is a trait that both approaches share. It simply means that the code constructing a proof or verifying proof of computation operates autonomously, without the need of human intervention.

## zk-SNARKs

The concept of zk-SNARKs was first explained in a 2012 paper co-authored by University of Berklee professor _Alessandro Chiesa_. A _**zk-SNARK**_ is a form of zero-knowledge proof that is both _‘succinct’_ and _‘non-interactive’_.

A **succinct proof** is one that is small in terms of data size and can be easily verified using a custom algorithm.

It is considered ‘non-interactive’ when the prover must prove that a statement is true or a transaction is valid against a hash function simulator, which is meant to represent the verifier.

_One of the key aspects of zk-SNARKs is that it relies on a trusted setup._

A **trusted setup** is an event that enables a set of private keys to be created that allows counterparties in a transaction to construct the ‘proof’ that must be verified in order for the transaction to be confirmed as valid.

As we mentioned earlier in our Horizen example, the process of constructing a proof requires solving a series of challenges issued by a hash function simulator. These challenges are based on a set of parameters that are initially created by private keys in the trusted setup event.

A key criticism of the trusted setup model is that it relies on trusted 3rd parties to create private keys that are used to construct the proof, which makes the process centralized.

If the private keys are not destroyed and a bad actor gains access to them, they could construct false proofs that would appear valid to the nodes on the Horizen mainchain, enabling them to potentially create new tokens out of thin air by simply claiming through a false proof that they received them in a sidechain transaction.

_Nevertheless_, zk-SNARKs offer some key advantages, including wider development adoption and support, smaller proof sizes and cheaper gas costs on the Ethereum network.

## zk-STARKs

zk-STARKs were invented in 2018 by Eli Ben-Sasson, Iddo Bentov, Yinon Horeshy and Michael Riabzev as an alternative approach to zk-SNARKs that does not require the use of a trusted setup to execute.

_Instead_, **zk-STARKs** use random samples of publicly verifiable information as a way to construct proofs without relying on trusted parties.

With this approach, zk-STARKs claim to offer greater scalability in terms of improving speed and reducing the computational size of transaction data.

It also uses a collision-resistant hash function, which supposedly makes it resistant to attacks by a quantum computer.

_The drawback_ with zk-STARKs is that the proof sizes are larger than zk-SNARKs owing to the larger set of data that needs to be processed when sampling publicly verifiable information.

Larger proof sizes means that zk-STARKs require more gas fees for transactions.

![STARKs SNARKs comparison]({{site.baseurl_root}}/assets/post_files/technology/advanced/zk-snarks-vs-zk-starks/ZBF_graphic_ZKsnarks-starks.jpg)

## zk-SNARKs vs zk-STARKs - Applications

Both zk-SNARKs and zk-STARKs have achieved major success in terms of fundraising and adoption.

_zk-SNARKs are more widely adopted since they are a lot older than STARKs._

**Zcash** was the first blockchain to utilize zk-SNARKs for private transactions in 2016. More recently, zk-SNARKs have become a core component of Ethereum’s layer 2 scaling solution through _zk-Rollups_.

**zk-Rollups** enable layer 2 transactions to be transmitted and verified on the Ethereum mainnet without the mainnet nodes knowing the details of each transaction. It is designed to offer greater scalability to the Ethereum network by only requiring the nodes to verify the proof of computation rather than the transaction data itself.

zk-Rollups have been adopted by layer 2 scaling solutions like Loopering, Polygon and zk-Sync.

zk-STARKs are earlier in its adoption curve but no less promising. The most prominent player in the space to adopt STARKs is a company aptly named Starware, created by zk-STARKs inventor Eli Ben-Sasson.

Starkware has created a zk-rollup solution called StarkNet, which uses the zk-STARKs method to enable roll ups that they claim provide cheaper and faster scalability solutions for the Ethereum network.

To date, Starware has raised over [$50 million](https://www.bloomberg.com/news/articles/2021-11-16/sequoia-led-round-values-blockchain-firm-starkware-at-2-billion) and is currently valued at $2 billion.

**zk-STARKs and dYdX**

_One of the most popular applications_ to adopt zk-STARKs was _dYdX_, an on-chain derivatives exchange that processed trading orders via a more traditional off-chain order book as opposed to smart contract-based liquidity pools.

zk-STARKs enabled DYDX users to save gas fees by executing trade orders through a STARK powered zk-rollup. This allowed trades to be processed more quickly while still maintaining a high level of security as all transaction data would ultimately settle on the Ethereum layer 1.

More recently, dYdX opted to move their dApp to Cosmos in order to utilize their own app-chain that would grant greater sovereignty and control over the full blockchain tech-stack.

## Why Horizen Chose SNARKs

While both approaches to validating transactions with zero knowledge present incredible opportunities for blockchain to scale while maintaining privacy, **Horizen chose zk-SNARKs** primarily because it is a more tried and tested approach to applying zero knowledge proofs on a blockchain.

Although a trusted setup may be more centralized, it also increases the accuracy of proofs and makes the technology more applicable to real world use cases like managing healthcare data or implementing decentralized KYC solutions.

_In both cases_, third party entities like hospitals or government agencies will have to be involved in providing the initial inputs that a prover will need to construct a proof.

The zk-STARK approach, which has no external trusted setup phase and relies on sampling publicly available information to construct proofs ,cannot easily be adopted for use cases outside of validating rollup transactions.

**Ultimately**, privacy preserving technologies have a highly promising future in the Web3 space.

Both zk-SNARKs and zk-STARKs are well funded and will continue to develop ways to make up for their shortcomings. As our ecosystem grows and developers feel empowered to build new cutting edge solutions, we anticipate zk-STARKs playing a role in how transactions are confirmed within different sidechains.
