---
layout: post
type: article
title: "The Elements of a Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/the-elements-of-a-blockchain/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
canonical_link: "/technology/beginner/the-elements-of-a-blockchain/"
---

This article is a high-level overview of the topics we discuss in this chapter. It is not focused on details but on providing context before each topic is covered on a granular level.

## Hash Functions

The verification of data is an important aspect when building a data structure on a decentralized network. Participants need a way to reliably distinguish between valid data and malicious information.

[Hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) are mathematical one-way functions used to verify data in blockchains and a first major building block of the technology. They are applied in several important steps from creating an address, to proving ownership, and even verifying the integrity of the blockchain itself. The first notable property of all hash functions is that they consume inputs of variable length and produce an output of fixed length called the *hash value*.

Other key properties include:

- They are irreversible one-way functions
- They are pseudo-random, meaning they produce seemingly random outputs from two similar inputs
- They are unlikely to produce the same output for two different inputs
- They are deterministic in that they always produce the same output from a given input.

## Public-Key Cryptography

A second major building block of digital money is [public-key cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %}). It can be used to ensure the exchange of sensitive information through encryption; it is also the basis for establishing ownership in the digital realm. Without the concept of ownership digital money would be useless.

### Elliptic Curve Cryptography

There are many different public-key cryptography schemes and in blockchains [elliptic curve cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}) (ECC) is predominant. Cryptography relies on one-way functions. Multiplication on an elliptic curve is the second one-way function we introduce. We show how this type of *discrete math* works and why it is a well suited tool to build a concept of ownership on a distributed peer-to-peer network.

### Generating Keys and Addresses

Money or data sent to a public key can only be accessed by someone who has knowledge of the corresponding private key (the owner). We show how public key cryptography is applied to [create a public key from a private key]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-2-generating-keys-and-addresses %}). At this point, you already understand why the derivation of a public key from a private key cannot be reversed, which is the single most important attribute of PKC.

You rarely use a *public key* when transferring cryptocurrency. You primarily use the *address* that was generated from a public key. This step relies on the one-wayness of hash functions that we introduced before.

![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_D.jpg)
![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_M.jpg)

### Digital Signatures

Anyone can create a raw transaction spending someone else's money, but in order for the transaction to be recognized by the netword it needs to have a valid [*digital signature*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}). The private key associated with the address where the funds are located in is required to sign a transaction. The signature is comprised of two values that can only be provided by the rightful owner, *R*, and *s*.

When a transaction is broadcast to the network every full node and miner verifies it based on the *message*, public key or address, and signature. The result of the verification is a binary output: either the signature is valid or invalid. The verifier does not learn anything about the private key used to create the signature in this process.

![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_D.jpg)
![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_M.jpg)

## Consensus Mechanisms

The [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}) of a blockchain ensures that all participants maintain a consistent record of transactions. The peers agree on a common version of history with every block. There are different ways to achieve consensus in distributed networks. We cover the various approaches in the article on consensus mechanisms.

### Consensus in Distributed Systems

There are challenges to creating [consensus in distributed systems]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-1-consensus-in-distributed-systems %}). The consensus mechanism has to tolerate malicious actors and handle a network providing unreliable communication. We define *liveness* as the property of the system not stalling and safety as all nodes agreeing on new blocks. We show why Nakamoto consensus is brilliant in that it defined consensus in a novel way: non-deterministic.

![Different Consensus Mechanisms in Distributed Systems](/assets/post_files/technology/expert/2.1-elements-of-a-blockchain/consensus-in-distributed-systems_D.jpg)
![Different Consensus Mechanisms in Distributed Systems](/assets/post_files/technology/expert/2.1-elements-of-a-blockchain/consensus-in-distributed-systems_M.jpg)

### Proof of Work

We take an in-depth look at [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) (PoW), the consensus and *Sybil-resistance* mechanism used in Horizen, Bitcoin and most other public blockchains.

PoW creates a bridge between the physical and the real world and maintains the block creation process. There are different mining algorithms used in PoW and they have several things in common.

## The Peer-to-Peer Network

Public blockchains are commodidies, a digital good that anyone with an internet connection can access. Nobody owns these commodities, so there is no central provider for their infrastructure. Instead, the infrastrucuture is provided by many independent peers spread across the globe. Because the nodes of the network run independently from one another, the infrastructure as a whole, the distributed [*Peer-to-Peer network*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-06-the-p2p-network %}), is highly resilient.

## Mining

Performing the Proof-of-Work in blockchains is called [mining]({{ site.baseurl }}{% post_url /technology/expert/2022-02-07-mining %}). Miners extend the blockchain with new blocks in predefined time intervals. Miners secure the ledger and give it its immutability attribute by attaching a Proof-of-Work to each block.

Mining is more than just performing Proof-of-Work, it comes with economic implications, from choosing which blockchain to mine, what hardware to use, and even what strategies to apply. In this article, we want to take a wholistic view at the mining industry.

## Blockchain Governance

One of the most highly valued properties of public blockchain protocols is their level of decentralization. Usually, there is a lot of focus on how decentralized the block generation process is but little on how code and other changes are decided upon. [Governance]({{ site.baseurl }}{% post_url /technology/expert/2022-02-08-blockchain-governance %}) is the keyword here.

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Open source protocol governance is something that’s constantly iterated and improved upon. The blockchain space is relatively young compared to traditional governance processes. The large number of different blockchain projects represent a huge real-world sandbox. Many differents attempts at creating fair governance are being tried in parallel at this stage. Only experimentation and constant iteration will improve governance by making it more transparent, efficient, and fair.
