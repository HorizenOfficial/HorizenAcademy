---
layout: post
type: article
title:  "The elements of a blockchain"
permalink: technology/beginner/the-elements-of-a-blockchain/
topic: technology
level: beginner
chapter: "How Does it work?"
---

The last articles stated that on one hand, the blockchain is a data structure, a way to store information. On the other hand, it is a protocol to transfer value and the miners are the bookkeepers of a blockchain. We want to discuss the parties that play a part in the blockchain ecosystem in this article. Let's first talk about the term protocol again before we discuss that.

A protocol is like a set of rules. These rules implemented govern a given blockchain and restrict what you can and cannot do. One of the rules states what order information must be in if you want to send a transaction. Luckily your wallet will help you with that, so you don't need to worry. An example of other rules would be the following:

 - If you have 1 Coin, 1 Coin is the most you can spend.
 - If you try to spend the same Coin twice, the first transaction that spends it will be valid. The second transaction will be invalid.

Now that you know that a protocol, a term you will hear quite often is just a set of rules let's take a look at the individuals that play a part in a blockchain ecosystem.

### Nodes
A network of computers or servers (_nodes_) run a blockchain. They are constantly communicating to exchange information. Nodes make up the infrastructure of the blockchain. A _full node_ is a node that maintains a copy of the blockchain. A light node does not keep a copy of the blockchain. The light node must connect to a full node before it can interact with the blockchain. You need to communicate with the network to be able to use a cryptocurrency such as ZEN or Bitcoin. You could compare the distributed network of a blockchain to the infrastructure supporting your mobile phone in this sense.

A _full node_ is like a cell phone tower that your phone is connecting to (a _light node_ would be the phone here). All the antenna stations (full nodes) connect to each other and make up the communication networks infrastructure. If you want to make a call with your phone, you need to connect to a cell phone tower first, before you can interact with any other mobile phone.

Similarly, in the distributed network of a blockchain, the _full nodes_ are up and running most of the time and make up the distributed network. They also maintain a copy of the entire blockchain. You are likely using a _light node_ if you use a wallet on your phone or computer. IIn this case you are going to connect to a _full node_ first, before you can actually interact with the blockchain. 

You can run a full node, and you should if you want to contribute to the stability and security of your network, but to use cryptocurrencies you don't have to. Most wallets out there are light nodes, which means they store your keys but don't maintain a copy of the blockchain. With our flagship app Sphere by Horizen, you can choose to run a full node or not, making it a "hybrid node".

![Nodes](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/nodes.png)

### Miner
Miners are nodes as well. They support the network by forwarding information and maintaining a copy of the blockchain, just like all the other nodes. Additionally, the miners are constantly trying to solve a puzzle required to create new blocks.

Leaving the technical details aside, for now, their actual purpose for the network is the following: Each new block can be understood as a collective decision on the history of the last few minutes. The network comes to _consensus_ on the order of transactions for that time period. For Horizen this time period is 2.5 min on average, for Bitcoin, it is 10 minutes.

But why do you need the puzzle? Each miner might have a slightly different block than the other miners. This is because it takes some time for a new transaction to spread across the entire network, and different miners might receive those transactions in a different order.

![Miner](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/miner.jpg)

The miners start solving a new puzzle (working on the next block) immediately after solving the previous block. They gather all the transactions on the network that have not been included in a block yet and put them in their version of the next block. The miner who solves the puzzle first gets to write the history for the last few minutes. This person broadcasts their block to the network together with the solution they found for the puzzle. All nodes, no matter if they are mining or not verify if the solution to the puzzle is correct, and if it is they add the new block to their copy of the blockchain. Now the cycle starts all over again. 

This is how the network comes to agreement or **consensus** on what has happened in the past. If you wonder why we said "around 2.5 min", this is because it actually varies. All the miners start to solve the puzzle right after the previous block was solved and broadcasted. The time it takes the miners to solve the puzzle depends on how difficult it is. If there are more people trying to solve the puzzle at the same time they will solve it faster on average.

The protocol increases the difficulty of the puzzle when new miners join the network. It will take the miners roughly 2.5 min again to solve the puzzle. This is another example of the protocol being a set of rules:

 - If it takes less than 2.5 min on average to solve the puzzle, make it more difficult. If it takes longer, make it easier.

Miners run the equipment that helps to create consensus among all participants on the order of events. Imagine hundreds or thousands of miners in a conference. None of the miners know each other and must discuss what happened at what time. It would be a disaster. The blockchain introduces a highly efficient way, to agree on the order in which certain events happened. Miners propose suggestions on the history of transactions. The first miner that solves the puzzle determines the version accepted by everybody in the network. Bitcoin actually introduced the first protocol in human history, that could come to a consensus in a trustless and distributed environment.

Miners are rewarded for solving the puzzle. This gives incentive for individuals to purchase and run the hardware. The first miner to solve a block receives a reward in the currency that she is mining. She is allowed to send herself a transaction with a number of coins that didn't exist before. It is another example of a rule in a blockchain protocol:

 - The miner that first solves a block is allowed to include a transaction in his block sending himself some newly created coins.

This process generates new coins and creates an incentive for people to create a consensus.

### Summary
In conclusion, miners and node operators are the two main entities in a blockchain. The nodes make up the infrastructure of the network. Miners are the bookkeepers that make the decisions regarding the order of events. They receive a reward for their efforts. The reward generates new coins. The next article is going to tackle the question of how [identity works in the context of the blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-identity-in-blockchain %}). It will cover the keys that we mentioned in this article and what they are for.
