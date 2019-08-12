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
---

When Satoshi Nakamoto released the Bitcoin whitepaper he presented an innovation composed of several well-known components and as a few new ones. We designed this chapter to explain how a blockchain works and what the individual parts do. We want to put the individual pieces into context before we move on to explaining each concept. 

### Hash Functions

A _hash function_ is a mathematical function with a few special properties but like any other function, it does one job. The hash function takes an input and produces an output (also called hash value, hash digest or a hash).

The input doesn't have to be a number, it can be any sort of data from a single character up to a large file like a video. The output of a given hash function has a constant length no matter what the input was. There are many hash functions out there and most of them carry the length of the output they produce in their name. One of the most commonly used hash functions is SHA256 (Secure Hash Algorithm 256 bit). The number indicates the output of the hash function will always be 256 bit long no matter the input. The hash value serves as a fingerprint of data. One can verify the integrity of the files or detect if they differ from one another by comparing the hashes. 

![Hash](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/hash_D.jpg)
![Hash](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/hash_M.jpg)

### Public-Key Cryptography

_Public-key cryptography_, is also known as asymmetric cryptography. The term asymmetric stems from the property of keys always coming in pairs. If you have encrypted something with one of the keys, you need the other one to decrypt it and vice versa. These keys are the public key and private key (or secret key). Your keys translate to your identity on the blockchain. You receive funds with your public key and send funds with your private key. Public-key cryptography is also where cryptocurrencies got their name from.

![Asymmetric](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/asymmetric_D.jpg)
![Asymmetric](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/asymmetric_M.jpg)

### A Peer-to-Peer Network

You have probably come across the term Peer-to-Peer (P2P) network before, most likely in the context of file-sharing services like BitTorrent. In a distributed network the users don't connect to a central server or entity to access a service, but to many peers. The peers are other network participants that provide the service to each other. P2P networks are very resilient, as there is no single point of failure. Blockchains make use of this concept and it is one reason why they are so robust. To create a transaction or view your balance you ask other peers, or nodes, on the network that maintain a copy of the blockchain to share the information they store. You will often hear the attributes permissionless and censorship-resistant when reading about the value proposition of blockchain technology. The Peer-to-Peer network plays a significant part in giving blockchains these properties.

![Central distri](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/central-distri_M.jpg)

### Consensus Mechanism

If you want to build a form of digital cash on a P2P network with many people participating, you will need to build consensus on the order of transactions. If a user has one ZEN and creates two different transactions that spend that same coin simultaneously, some peers will receive version A first, while some others might receive version B first. The network needs to come to an agreement, or consensus, on which of the two transactions happened first. The consensus mechanism is what enables a large number of different entities that neither know, nor trust each other to reach consensus on the order of events.

![Consensus](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/consensus_D.jpg)
![Consensus](/assets/post_files/technology/advanced/the-elements-of-a-blockchain/consensus_M.jpg)

### Mining

There are many consensus mechanisms. The "original" that Horizen, Bitcoin and most other cryptocurrencies use is the Proof-of-Work (POW) mechanism. You have probably heard about cryptocurrency mining before and maybe about the miners having to solve a computationally expensive puzzle. We want to show you what this puzzle is, and how solving the puzzle makes the network agree on a given order of transactions.

### Demo

This is a [great blockchain Demo](https://blockchaindemo.io/). We invite you to go play around with it, either now, or after you have finished this chapter. The demonstration is hands-on and really helps to understand this somewhat complex topic. The demo provides a guide that will lead you through the processes running on a blockchain step-by-step.

