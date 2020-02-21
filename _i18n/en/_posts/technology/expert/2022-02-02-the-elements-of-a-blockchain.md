---
layout: post
type: article
title: "The Elements of a Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/the-elements-of-a-blockchain/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

This article provides you with a general overview of what this chapter is all about. It is a high level description focused on providing some context before each topic is covered on a granular level.

## Hash Functions

The verification of data is an important aspect when building a data structure on a decentralized network. Participants need a way to reliably distinguish between valid and malicious information.

[Hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) are mathematical one-way functions used to verify data in blockchains. They are applied in several important steps from creating an address, to proving ownership and verifying the integrity of the blockchain itself. The first notable property of all hash functions is that they consume inputs of variable length and produce an output of fixed length called *hash value*.

Other key properties are being *irreversible one-way functions*, being *pseudorandom* in that they produce seemingly random outputs from two similar inputs, having a small likelyhood of producing the same output for two different inputs and lastly, being *deterministic* in that they always produce the same output for a given input.

![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_D.jpg)
![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_M.jpg)

## Public-Key Cryptography

Besides verifying data we need a way to verify ownership. A major building block of digital money - as the name *crypto*currency suggests - is cryptography: namely [public-key cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %}).

While it can be used to secure the exchange of sensitive information through encryption it is also the basis for establishing ownership in the digital realm. The general idea is the following: You derive an address from a private key and receive money using this address. When you want to spend that money, you digitally sign the transaction using your private key. A verifier can assess if the signature was created using the correct private key, but doesn't learn anything about it in the process.

![Asymmetric](/assets/post_files/technology/beginner/identity-in-blockchain/asymmetric_D.jpg)
![Asymmetric](/assets/post_files/technology/beginner/identity-in-blockchain/asymmetric_M.jpg)

### Elliptic Curve Cryptography

There are many different public-key cryptography schemes. In blockchains [elliptic curve cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}) (ECC) is used.

Cryptography mostly relies on one-way functions. Multiplication on an elliptic curve is the second one-way function we introduce after the previously explained hash functions. We show how this special type of math works and why it is a well suited tool to build a concept of ownership on a distributed peer-to-peer network.

![Finite Field Addition](/assets/post_files/technology/expert/2.3.1-ecc/finite_addition.gif)

### Generating Keys and Addresses

Money or data sent to a public key can only be accessed by someone who has knowledge of the corresponding private key - the owner. With the basics of elliptic curve cryptography understood, we show how it is applied to [derive a public key from a private key]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-2-generating-keys-and-addresses %}). At this point, you already understand why the derivation of a public key from a private key cannot be reversed, which is the single most important attribute of public-key cryptographic schemes.

When you transfer cryptocurrencies you will barely ever use a public key, but rather an *address* that was generated from a *public key*. This step relies on the one-wayness of hash functions.

![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_D.jpg)
![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_M.jpg)

### Digital Signatures

Anyone can create a raw transaction spending someone else's money, but in order for the transaction to be recognized by the netword it needs to have a valid [*digital signature*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}). To sign a transaction the private key associated with the address is needed. The signature comprises two values, that can only be provided by the rightful owner.

When a transaction is broadcast to the network every full node and miner verifies it based on the *message*, public key or address, and signature. The result of the verification is a binary output: either the signature is valid or invalid.

![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_D.jpg)
![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_M.jpg)

## Consensus Mechanisms

Now, that we have tools to verify data and ownership on the blockchain, we can create valid transactions. Because many different peers use the blockchain it is important for them to agree on a single transaction history on the network.

The [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}) of a blockchain ensures that all participants maintain a consistent record of transactions. With every block the peers agree on a common version of history.

![Consensus](/assets/post_files/technology/advanced/consensus-mechanisms/consensus_D.jpg)
![Consensus](/assets/post_files/technology/advanced/consensus-mechanisms/consensus_M.jpg)

### Consensus in Distributed Systems

First, we look at the challenges of achieving [consensus in distributed systems]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-1-consensus-in-distributed-systems %}) in general.

The consensus mechanism has to tolerate malicious or *Byzantine* actors and needs to handle a network providing unreliable communication. We define liveness as the property of the system not stalling and safety as all nodes agreeing on new blocks. Lastly, we show why Nakamoto consensus is brilliant in that it defined consensus in a novel way: non-deterministic.

![Different Consensus Mechanisms in Distributed Systems](/assets/post_files/technology/expert/2.1-elements-of-a-blockchain/consensus-in-distributed-systems_D.jpg)
![Different Consensus Mechanisms in Distributed Systems](/assets/post_files/technology/expert/2.1-elements-of-a-blockchain/consensus-in-distributed-systems_M.jpg)

### Proof of Work

In this article, we take an in-depth look at [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) (PoW) - the consensus and *Sybil-resistance* mechanism used in Horizen, Bitcoin and most other public blockchains.

We show how PoW creates a bridge between the physical and the real world and how the block creation process works. We also look at mining algorithms, e.g. Hashcash PoW and Equihash and show what they have in common.

![Hash Cash Proof of Work (PoW)](/assets/post_files/technology/expert/2.4.2-pow/hash_cash_pow_D.jpg)
![Hash Cash Proof of Work (PoW)](/assets/post_files/technology/expert/2.4.2-pow/hash_cash_pow_M.jpg)

## The Peer-to-Peer Network

Public blockchains are commodidies, a digital good that anyone with an internet connection can access. Nobody owns these commodities, so there is no central provider for their infrastructure.

Instead, the infrastrucuture is provided by many independent peers, spread all over the globe. Because the nodes of the network are run independently from one another the infrastructure as a whole - the distributed [*Peer-to-Peer network*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-06-the-p2p-network %}) is highly resilient.

Key-considerations regarding the P2P network are the effective broadcasting of messages across all nodes, and providing privacy in that an adversary cannot link IP addresses to public keys, as this would mean being able to link money on the blockchain to its owners real life identity.

![Broadcasting Mechanism - Flooding, Diffusion, and Dandelion](/assets/post_files/technology/expert/2.5-p2p/broadcasting_expert_D.jpg)
![Broadcasting Mechanism - Flooding, Diffusion, and Dandelion](/assets/post_files/technology/expert/2.5-p2p/broadcasting_expert_M.jpg)

## Mining

Performing the Proof of Work in blockchains is called [mining]({{ site.baseurl }}{% post_url /technology/expert/2022-02-07-mining %}). Miners extend the blockchain with new blocks. By attaching a Proof of Work to each block miners secure the ledger and give it its *immutability* attribute.

![Different Hardware for Hashing](/assets/post_files/technology/expert/2.2-hash-functions/cpu_asic_D.jpg)
![Different Hardware for Hashing](/assets/post_files/technology/expert/2.2-hash-functions/cpu_asic_M.jpg)

But mining is more than just performing Proof of Work - it comes with highly interesting economic implications, from choosing which blockchain to mine, to what hardware to use and what strategies to apply. In this article, we want to take a wholistic view at the mining industry.

## Blockchain Governance

One of the most highly valued properties of public blockchain protocols is their level of decentralization. Usually, there is a lot of focus on how decentralized the block generation process is but little on how code and other changes are decided upon. [Governance]({{ site.baseurl }}{% post_url /technology/expert/2022-02-08-blockchain-governance %}) is the keyword here.

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Open source protocol governance is something that’s constantly iterated and improved upon. The blockchain space is relatively young, and compared to  traditional governance processes so is open-source software in general. The large number of different blockchain projects represent a huge real-world sandbox. Many differents attempts at creating fair governance are being tried in parallel at this stage, and only experimentation and constant iteration will improve governance by making it more transparent, efficient and fair.
