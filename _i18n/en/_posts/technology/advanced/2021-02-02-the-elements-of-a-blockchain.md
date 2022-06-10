---
layout: post
type: article
title: "The Elements of a Blockchain"
description: "In this article, we give you an advanced overview of the different elements that make a blockchain work."
permalink: /technology/advanced/the-elements-of-a-blockchain/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
---

A protocol is a set of rules. These rules govern a blockchain and restrict what you can and cannot do. They also define standards for how participants communicate. There are rules on what order information must be provided if you want to send a transaction.

Luckily you don’t have to know those rules - your [wallet](https://academy.horizen.io/technology/advanced/types-of-wallets/) will take care of this.

**An example of another rule would be the following:**

- _If you try to spend the same coin twice, the first transaction that spends it will be valid. The second transaction will be invalid._

A protocol is just a set of rules, let’s take a look at the individuals that play a part in a blockchain ecosystem.

## The Blockchain

A blockchain works like a large book on the internet. This book keeps track of how much money everybody has. A single block in the blockchain is like a single page in a book. You can fit only so many words on one page before the page is full and you have to use the next one.

![What is a Blockchain](/assets/post_files/eli5/what-is-a-blockchain/what_is_blockchain_D.jpg)
![What is a Blockchain](/assets/post_files/eli5/what-is-a-blockchain/what_is_blockchain_M.jpg)

The blockchain documents every transfer of money. This ensures that no one can spend the same set of his or her money twice. If you have one ZEN and send it to a friend or an online shop, the recipient is now in control of that ZEN and you cannot use it anymore.

Blockchains solved a major problem in the digital world. When I send you a picture in an email, I actually just send you a copy of that picture, and afterward, we both have a copy. I could send the same picture to another person later on.

Blockchains allow digital things to exist in only one location at a time. This is one of the main reasons blockchains are innovative. Digital money would not work if I could send you a copy of my money and spend it a second time later on.

## Nodes

A network of computers - the _nodes_ - run a blockchain. They are constantly exchanging information on new transactions and blocks. Nodes make up the infrastructure of the blockchain. A **full node** is a node that maintains a copy of the blockchain. A **light node** does not keep a copy of the blockchain.

The light node must connect to a full node before it can interact with the blockchain, like sending a transaction. You could compare the distributed network of a blockchain to the infrastructure supporting your mobile phone in this sense.

A full node is like a cell phone tower that your phone - _the light node_ - is connecting to. All the antenna stations - _full nodes_ - are connected to each other and make up the communication network infrastructure. If you want to make a call with your phone, you need to connect to a cell phone tower first before you can interact with any other mobile phone.

Similarly, in the distributed network of a blockchain, the full nodes are up and running most of the time and make up the distributed network. They also maintain a copy of the entire blockchain. You are likely to use a light node if you use a wallet on your phone or computer. In this case, you are going to connect to a full node first before you can interact with the blockchain.

You can run a full node if you want to contribute to the stability and security of your network, but to use cryptocurrencies, you don’t have to. Most wallets out there are light nodes, which means they store your keys but don’t maintain a copy of the blockchain. With our flagship wallet [Sphere by Horizen](https://www.horizen.io/spherebyhorizen/), you can choose to run it as a full or light node.

![Nodes](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/nodes_D.jpg)
![Nodes](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/nodes_M.jpg)

## Miners

Miners are nodes as well. They support the network by forwarding information and maintaining a copy of the blockchain, just like all the other nodes. Additionally, the miners are responsible for creating new blocks.

The purpose of miners for the network is the following: _Each new block can be understood as a collective decision on the history of the last few minutes._

The network comes to a consensus on the order of transactions for that time period. For Horizen, this time period is **2.5 min** on average, for Bitcoin, it is **10 minutes**.

Each miner has a slightly different block than the other miners. The difference is because it takes some time for a new transaction to spread across the entire network, and different miners might receive those transactions in a different order.

![Miner](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/miner_D.jpg)
![Miner](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/miner_M.jpg)

Miners have to solve a cryptographic puzzle to create a valid block. The miners start working on a new block - and therefore new puzzle - immediately after the previous block is added to the chain. They gather all the transactions on the network that have not been included in a block yet and put them in their version of the next block.

The miner who solves the puzzle first gets to add the next block and writes the history for the last few minutes. They broadcast their block to the network together with the solution they found for the puzzle. All nodes, no matter if they are mining or not, verify if the solution to the puzzle is correct, and if it is, they add the new block to their copy of the blockchain. Then the cycle starts all over again.

The process described is how the network comes to agreement or consensus on what has happened in the past. If you wonder why we said it takes “around 2.5 minutes” to find a block, this is because it actually varies. All the miners start to solve the puzzle at the same time. The time it takes the miners to solve the puzzle depends on how difficult it is. If more people are trying to solve the puzzle at the same time, they will solve it faster on average.

The protocol increases the difficulty of the puzzle when new miners join the network. It will take the miners roughly 2.5 min again to solve the puzzle.

**This is another example of the protocol being a set of rules:**

- _If it takes less than 2.5 min on average to solve the puzzle, make it more difficult. If it takes longer, make it easier._

Miners run the equipment that helps to create consensus among all participants on the order of transactions. Imagine hundreds or thousands of miners in a conference room. None of the miners know each other and must discuss what happened at what time - it would be a disaster. The blockchain introduces a highly efficient way to reach consensus.

Miners propose different versions of the history of transactions. Then they vote on their version with their computing power. The first miner that solves the puzzle determines the version accepted by everybody in the network. Bitcoin actually introduced the first protocol in human history that could come to consensus in a trustless and distributed environment.

### Why Are Miners Doing This?

Miners are rewarded when they solve the puzzle first. This creates an incentive for individuals to purchase and run the hardware needed to solve the cryptographic puzzle. The first miner to solve a block receives a reward in the currency that she is mining. She is allowed to send herself a transaction with a few coins that didn’t exist before.

**It is another example of a rule in a blockchain protocol:**

- _The miner that solves a block is allowed to include a transaction in his block, sending himself some newly created coins._

When Satoshi Nakamoto released the Bitcoin whitepaper, he presented an innovation comprising several well-known components in a new composition. Let’s look at how a blockchain works and what its individual parts do.

## Hash Functions

The verification of data is an important aspect when building a data structure on a decentralized network. Participants need a way to reliably distinguish between valid data and malicious information.

[Hash functions](https://academy.horizen.io/technology/advanced/hash-functions/) are mathematical one-way functions used to verify data in blockchains and a major building block of the technology. They are applied in several important steps from creating an address to proving ownership, and even verifying the integrity of the blockchain itself. The first notable property of all hash functions is that they consume inputs of variable length and produce an output of fixed length called the **_hash value_**, _hash digest_ or simply, _hash_.

**Other key properties include:**

- They are _irreversible one-way functions_
- They are _pseudo-random_, meaning they produce seemingly random outputs from two similar inputs
- They are _unlikely to produce the same output for two different inputs_
- They are _deterministic_ in that they always produce the same output from a given input.

The input doesn’t have to be a number, it can be any sort of data from a single character up to a large file like a video. The output of a given hash function has a constant length no matter the input. There are many hash functions out there and most of them carry the length of the output they produce in their name.

One of the most commonly used hash functions is **SHA256**, _Secure Hash Algorithm 256 bit_. The number indicates the output of the hash function has 256 bit. A hash value can serve as a fingerprint of data. One can verify the integrity of files and detect changes by comparing their hashes.

![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/hash2_D.jpg)
![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/hash2_M.jpg)

## Public-Key Cryptography

We must have a concept of identity to have ownership. You want to be the sole owner of your funds, and there must be a way to associate the funds with you. This is where cryptography enters the scene.

[**_Public-Key Cryptography_**](https://academy.horizen.io/technology/advanced/public-key-cryptography/) is also known as _asymmetric cryptography_. With symmetric cryptography, you encrypt and decrypt a message using the same key, like with a padlock.

![Symmetric](/assets/post_files/technology/beginner/identity-in-blockchain/symmetric_D.jpg)
![Symmetric](/assets/post_files/technology/beginner/identity-in-blockchain/symmetric_M.jpg)

The term _asymmetric_ stems from the property of keys always coming in pairs and being used complementary. If you encrypt something with one of the keys, you need the other one to decrypt it, and vice versa. The keys are called **public key** and **private key**, also _spending key_ or _secret key_. Your keys translate to your identity on the blockchain. You receive funds with your public key and send funds with your private key.

### Your Key Pair is Your Identity

The idea in cryptocurrencies is that you are receiving funds with your public key and spending them with your private key. A private key on the _Horizen_ blockchain could look like this:

**Kz6994Ek9L3uzjQo2wANaHguBbEShoHZo6q1Y3r6rXrHfWka1fnx**

The corresponding public key or address like this:

**znSrHR9ssjKMsrYfk5fTmKH4LbgDxXJ3s6j**

The keys were intentionally named public and private keys. You can share your public key with anybody that wants to send you money. Your private key, as the name suggests, should remain private under all circumstances, because it allows you to spend your money. If somebody gets their hands on your private key, they can access and steal your funds.

The real-life comparison you will hear most often is your public key being like your address. You can give it to anybody that wants to send you a letter. Your private key is like the key to your postbox. Only this key lets you access your mail, and you wouldn’t hand it to a stranger.

Your keys are important for sending and receiving transactions. Technically, a transaction is a message to all nodes on the network. This message includes how much of your money you want to send, and to whom. This information is then encrypted with your private key, a step we call _signing a transaction._

![Signing](/assets/post_files/technology/beginner/identity-in-blockchain/signing_D.jpg)
![Signing](/assets/post_files/technology/beginner/identity-in-blockchain/signing_M.jpg)

A digital signature works similarly to how you authorize real-life transactions using your “analog” signature. Even with modern supercomputers, it is infeasible to forge such a digital signature. The type of public-key cryptography used in blockchains is one of the safest means of encryption available today.

All of this would be cumbersome to do manually and require quite some skill. Luckily there are [wallets](https://academy.horizen.io/technology/advanced/types-of-wallets/) that help you do all the above. Wallets generate and manage your keys and take care of all the necessary encryption and decryption. What is important is to understand that your private key authorizes the spending of your funds.

Keeping it safe is the first and most important lesson. Nobody can help you recover your keys in case you lose them. If somebody were able to recover it for you, they would also be able to take your money at will.

### Elliptic Curve Cryptography

There are many different public-key cryptography schemes, and in blockchains, [_Elliptic Curve Cryptography_](https://academy.horizen.io/technology/expert/elliptic-curve-cryptography/) (ECC) is predominant. Cryptography relies on one-way functions, and multiplication on an elliptic curve is another one-way function of note. This type of _discrete math_ works and is a well suited tool to build a concept of ownership on a distributed peer-to-peer network.

### Generating Keys and Addresses

Money or data sent to a public key can only be accessed by someone who has knowledge of the corresponding private key, _the owner_. The derivation of a public key from a private key cannot be reversed, which is the single most important attribute of PKC.

You rarely use a public key when transferring cryptocurrency. You primarily use the address that was generated from a public key. This step relies on the one-wayness of hash functions that we introduced before.

![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_D.jpg)
![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_M.jpg)

### Digital Signatures

Anyone can create a raw transaction spending someone else’s money, but in order for the transaction to be recognized by the network, it needs to have a valid [_digital signature_](https://academy.horizen.io/technology/expert/digital-signatures/). The private key associated with the address where the funds are located is required to sign a transaction. The signature consists of two values that can only be provided by the rightful owner, **R** and **s**.

When a transaction is broadcast to the network, every full node and miner verifies it based on the _message_, public key or address, and signature.

The result of the verification is a binary output: either the signature is valid or invalid. The _verifier_ does not learn anything about the private key used to create the signature in this process.

![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_D.jpg)
![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_M.jpg)

## A Peer-to-Peer Network

Public blockchains are commodities, a digital good that anyone with an internet connection can access. Nobody owns these commodities, so there is no central provider for their infrastructure. Instead, the infrastructure is provided by many independent peers spread across the globe. Because the nodes of the network run independently from one another, the infrastructure as a whole, the distributed [_Peer-to-Peer network_](https://academy.horizen.io/technology/advanced/a-peer-to-peer-p2p-network/), is highly resilient.

You have probably come across the term Peer-to-Peer (P2P) network before, most likely in the context of file-sharing services like BitTorrent. In these distributed P2P networks, the users don’t connect to a central server to access a service, but to many peers. The peers are other network participants and all of them provide the service to each other. As stated previously, P2P networks are highly resilient, as there is no single point of failure.

Blockchains make use of this concept, and it is one reason why they are so robust. You will often hear the attributes _permissionless_ and _censorship-resistant_ when reading about the value propositions of public blockchains. The Peer-to-Peer network plays a significant part in giving blockchains these properties.

![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/central-distri_M.jpg)

## Consensus Mechanism

The [_consensus mechanism_](https://academy.horizen.io/technology/advanced/consensus-mechanisms/) of a blockchain ensures that all participants maintain a consistent record of transactions. The peers agree on a common version of history with every block. There are different ways to achieve consensus in distributed networks.

If you want to build a form of digital money on a P2P network with many unknown participants, you will need to build _consensus_ on the order of transactions. If a user has one ZEN and creates two different transactions that spend that same coin simultaneously, some peers will receive **version A** first, while others might receive **version B** first.

The network needs to come to an agreement, or consensus, on which of the two transactions happened first and is valid. The consensus mechanism is what enables a large number of different entities that neither know, nor trust each other to agree on a single version of the blockchain.

![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/consensus_D.jpg)
![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/consensus_M.jpg)

### Consensus in Distributed Systems

There are challenges to creating consensus in distributed systems. The consensus mechanism has to tolerate malicious actors and handle a network providing unreliable communication. We define _liveness_ as the property of the system not stalling, and safety as all nodes agreeing on new blocks. Nakamoto Consensus is brilliant in that it defines consensus in a novel way: non-deterministic.

![Different Consensus Mechanisms in Distributed Systems](/assets/post_files/technology/expert/2.1-elements-of-a-blockchain/consensus-in-distributed-systems_D.jpg)
![Different Consensus Mechanisms in Distributed Systems](/assets/post_files/technology/expert/2.1-elements-of-a-blockchain/consensus-in-distributed-systems_M.jpg)

### Mining

There are many consensus mechanisms. The “original” Sybil-Resistance Mechanism introduced with Bitcoin is the Proof of Work (PoW) mechanism, and is also used in Horizen and most other public blockchains.

PoW creates a bridge between the physical and the real world and maintains the block creation process. There are different mining algorithms used in PoW and they have several things in common.

Performing the Proof-of-Work in blockchains is called [mining](https://academy.horizen.io/technology/advanced/mining/). Miners extend the blockchain with new blocks in predefined time intervals. Miners secure the ledger and give it its immutability attribute by attaching a Proof-of-Work to each block.

Mining is more than just performing Proof-of-Work, it comes with economic implications, from choosing which blockchain to mine, what hardware to use, and even what strategies to apply.

### Blockchain Governance

One of the most highly valued properties of public blockchain protocols is their level of decentralization. Usually, there is a lot of focus on how decentralized the block generation process is, but little on how code and other changes are decided upon. [Governance](https://academy.horizen.io/technology/expert/blockchain-governance/) is the keyword here.

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Open source protocol governance is something that’s constantly iterated and improved upon. The blockchain space is relatively young compared to traditional governance processes. The large number of different blockchain projects represent a huge _real-world sandbox_.

Many different attempts at creating fair governance are being tried in parallel at this stage, only experimentation and constant iteration will improve governance by making it more transparent, efficient, and fair.

## Summary

Miners and node operators are the two main entities in a blockchain. The nodes make up the infrastructure of the network. Miners are the bookkeepers that make decisions regarding the order of events.

For performing the valuable task of creating consensus among all network participants, miners receive a reward. This reward generates new coins. Every ZEN out there started as the block reward for some miners.

Your key pair is your identity on the blockchain. Your public key serves as your address and is used to receive funds. Your private key is like a password - it lets you, or anybody that gets their hands on it, spend your money. Always protect your private keys and never hand them out to other parties.

This is a [great blockchain demo](https://blockchaindemo.io/). The demonstration is hands-on and really helps to understand how a blockchain is built. The demo provides a guide that will lead you through the processes running on a blockchain step-by-step.
