---
layout: post
type: article
title: "The Elements of a Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you will learn the role miners and nodes play in a blockchain ecosystem at a beginner level."
permalink: /technology/beginner/the-elements-of-a-blockchain/
topic: technology
level: beginner
chapter: "How Does a Blockchain Work?"
further_reads: [three_elements_to_understanding_blockchain_and_its_greatest_opportunity, blockchain_technology_explained_introduction_meaning_and_applications]
---

The last chapter stated that on one hand, the blockchain is a data structure, a way to store information. On the other hand, it is a protocol to transfer value. We want to discuss the parties that play a part in the blockchain ecosystem in this article. Let's first talk about the term protocol again.

A protocol is a set of rules. These rules govern a blockchain and restrict what you can and cannot do. They also define standards for how participants communicate. There are rules on what order information must be provided in if you want to send a transaction. Luckily you don't have to know those rules - your [wallet]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) will take care of this. An example of another rule would be the following:

- If you try to spend the same Coin twice, the first transaction that spends it will be valid. The second transaction will be invalid.

Now that you know that a protocol, a term you will hear quite often, is just a set of rules let's take a look at the individuals that play a part in a blockchain ecosystem.

### Nodes

A network of computers - the *nodes* - run a blockchain. They are constantly exchanging information on new transactions and blocks. Nodes make up the infrastructure of the blockchain. A *full node* is a node that maintains a copy of the blockchain. A *light node* does not keep a copy of the blockchain. The light node must connect to a full node before it can interact with the blockchain, e.g. to send a transaction. You could compare the distributed network of a blockchain to the infrastructure supporting your mobile phone in this sense.

A _full node_ is like a cell phone tower that your phone - the light node - is connecting to. All the antenna stations (full nodes) are connected to each other and make up the communication networks infrastructure. If you want to make a call with your phone, you need to connect to a cell phone tower first, before you can interact with any other mobile phone.

Similarly, in the distributed network of a blockchain, the _full nodes_ are up and running most of the time and make up the distributed network. They also maintain a copy of the entire blockchain. You are likely using a _light node_ if you use a wallet on your phone or computer. In this case, you are going to connect to a _full node_ first before you can actually interact with the blockchain.

You can run a full node if you want to contribute to the stability and security of your network, but to use cryptocurrencies you don't have to. Most wallets out there are light nodes, which means they store your keys but don't maintain a copy of the blockchain. With our flagship app [Sphere by Horizen](https://www.horizen.global/spherebyhorizen/), you can choose to run it as a full or light node.

![Nodes](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/nodes_D.jpg)
![Nodes](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/nodes_M.jpg)

### Miners

Miners are nodes as well. They support the network by forwarding information and maintaining a copy of the blockchain, just like all the other nodes. Additionally, the miners are responsible for creating new blocks.

The purpose of miners for the network is the following: Each new block can be understood as a collective decision on the history of the last few minutes. The network comes to _consensus_ on the order of transactions for that time period. For Horizen this time period is 2.5 min on average, for Bitcoin, it is 10 minutes.

Each miner has a slightly different block than the other miners. This is because it takes some time for a new transaction to spread across the entire network, and different miners might receive those transactions in a different order.

![Miner](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/miner_D.jpg)
![Miner](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/miner_M.jpg)

Miners have to solve a cryptographic puzzle to creat a valid block. The miners start working on a new block - and therefore new puzzle - immediately after the previous block is added to the chain. They gather all the transactions on the network that have not been included in a block yet and put them in their version of the next block.

The miner who solves the puzzle first gets to add the next block writes the history for the last few minutes. They broadcast their block to the network together with the solution they found for the puzzle. All nodes, no matter if they are mining or not verify if the solution to the puzzle is correct, and if it is they add the new block to their copy of the blockchain. Then the cycle starts all over again.

This is how the network comes to agreement or *consensus* on what has happened in the past. If you wonder why we said it takes "around 2.5 min" to find a block, this is because it actually varies. All the miners start to solve the puzzle at the same time. The time it takes the miners to solve the puzzle depends on how difficult it is. If there are more people trying to solve the puzzle at the same time they will solve it faster on average.

The protocol increases the difficulty of the puzzle when new miners join the network. It will take the miners roughly 2.5 min again to solve the puzzle. This is another example of the protocol being a set of rules:

- If it takes less than 2.5 min on average to solve the puzzle, make it more difficult. If it takes longer, make it easier.

Miners run the equipment that helps to create consensus among all participants on the order of transactions. Imagine hundreds or thousands of miners in a conference room. None of the miners know each other and must discuss what happened at what time - it would be a disaster. The blockchain introduces a highly efficient way, to reach consensus. Miners propose different versions of the history of transactions. Then they vote on their version with their computing power. The first miner that solves the puzzle determines the version accepted by everybody in the network. Bitcoin actually introduced the first protocol in human history, that could come to consensus in a trustless and distributed environment.

#### But Why Are Miners Doing This?

Miners are rewarded when they solve the puzzle first. This creates an incentive for individuals to purchase and run the hardware needed to solve the cryptographic puzzle. The first miner to solve a block receives a reward in the currency that she is mining. She is allowed to send herself a transaction with a few coins that didn't exist before. It is another example of a rule in a blockchain protocol:

- The miner that solves a block is allowed to include a transaction in his block sending himself some newly created coins.

### Summary

In conclusion, miners and node operators are the two main entities in a blockchain. The nodes make up the infrastructure of the network. Miners are the bookkeepers that make the decisions regarding the order of events.

For performing the valuable task of creating consensus among all network participants miners receive a reward. This reward generates new coins. Every ZEN out there started out as the block reward for some miner.

The next article is going to tackle the question of how [identity works in the context of the blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}). If there is no concept of identity, there cannot be ownership - and wouldn't it be great to be able to own your cryptocurrency when you buy it?
