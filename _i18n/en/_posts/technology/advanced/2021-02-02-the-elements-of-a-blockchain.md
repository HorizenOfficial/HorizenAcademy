---
layout: post
type: article
title: "The Elements of a Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, we give you an advanced overview of the different elements that make a blockchain work."
permalink: /technology/advanced/the-elements-of-a-blockchain/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
further_reads: [three_elements_to_understanding_blockchain_and_its_greatest_opportunity]
canonical_link: "/technology/beginner/the-elements-of-a-blockchain/"
---

When Satoshi Nakamoto released the Bitcoin whitepaper he presented an innovation comprising several well-known components in a new composition. This chapter explains how a blockchain works and what its individual parts do. We want to put the individual pieces into context before we move on to explaining each concept separately.

### Hash Functions

A [*hash function*]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}) is a mathematical function with a few special properties but like any other function, it does one job. The hash function takes an *input* and produces an *output* (also called *hash value, hash digest* or simply *hash*).

The input doesn't have to be a number, it can be any sort of data from a single character up to a large file like a video. The output of a given hash function has a constant length no matter the input. There are many hash functions out there and most of them carry the length of the output they produce in their name.

One of the most commonly used hash functions is SHA256 (Secure Hash Algorithm 256 bit). The number indicates the output of the hash function has 256 bit. A hash value can serve as a fingerprint of data. One can verify the integrity of files and detect changes by comparing their hashes.

![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/hash2_D.jpg)
![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/hash2_M.jpg)

### Public-Key Cryptography

[*Public-key cryptography*]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography %}) is also known as *asymmetric cryptography*. The term asymmetric stems from the property of keys always coming in pairs and them being used complementary. If you encrypt something with one of the keys, you need the other one to decrypt it and vice versa. The keys are called *public key* and *private key* (also *spending key* or *secret key*). Your keys translate to your identity on the blockchain. You receive funds with your public key and send funds with your private key.

![Asymmetric](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/asymmetric_D.jpg)
![Asymmetric](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/asymmetric_M.jpg)

### A Peer-to-Peer Network

You have probably come across the term [*Peer-to-Peer*]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-05-a-peer-to-peer-p2p-network %}) (P2P) network before, most likely in the context of file-sharing services like BitTorrent. In a distributed P2P network the users don't connect to a central server to access a service but to many peers. The peers are other network participants and all of them provide the service to each other. P2P networks are very resilient, as there is no single point of failure.

Blockchains make use of this concept and it is one reason why they are so robust. You will often hear the attributes *permissionless* and *censorship-resistant* when reading about the value propositions of public blockchains. The Peer-to-Peer network plays a significant part in giving blockchains these properties.

![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/central-distri_M.jpg)

### Consensus Mechanism

If you want to build a form of digital money on a P2P network with many unknown participants, you will need to build *consensus* on the order of transactions. If a user has one ZEN and creates two different transactions that spend that same coin simultaneously, some peers will receive version A first, while others might receive version B first. The network needs to come to an agreement, or consensus, on which of the two transactions happened first and is valid. The [*consensus mechanism*]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) is what enables a large number of different entities that neither know, nor trust each other to agree on a single version of the blockchain.

![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/consensus_D.jpg)
![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/consensus_M.jpg)

### Mining

There are many consensus mechanisms. The "original" introduced with Bitcoin is the Proof of Work (PoW) mechanism. You have probably heard about cryptocurrency [*mining*]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}) before and about the miners having to solve a computationally expensive puzzle. We want to explain what this puzzle is, and how solving the puzzle makes the network agree on a given order of transactions.

### Demo

This is a [great blockchain demo](https://blockchaindemo.io/). We invite you to go play around with it, either now, or after you have finished this chapter. The demonstration is hands-on and really helps to understand how a blockchain is built. The demo provides a guide that will lead you through the processes running on a blockchain step-by-step.
