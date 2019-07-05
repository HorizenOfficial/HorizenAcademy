---
layout: post
type: article
title: "A relative - The DAG"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/a-relative-the-dag/
topic: technology
level: expert
chapter: "What is a Blockchain?"
---

One of the main engineering challenges in the blockchain space is scalability. Scalability refers to the development of technologies or protocols that can handle more transactions in a fixed amount of time. While traditional payment networks like Visa can handle thousands of transactions per second most blockchains can only handle a handful of transactions in the same period of time. While this comparison is unjust, in that Visa itself can be viewed as a third- or fourth-layer technology (International Bank of Settlements -> National Central Bank -> Retail Bank -> VISA), it is still a significant difference in performance that needs to be addressed. 

There are generally three approaches to scalability:

- Second-layer technologies like [payment channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-state-and-payment-channels %}) used in the *Lightning Network* that take transactions off-chain with the option to settle on-chain at any time.

- [*Sidechain*]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) approaches, which can best be described as a parallelization of blockchains. Assets can be transferred from one chain to another via a *two-way peg* (2WP) and the transactional load is shared between the mainchain and its sidechains.

- *Directed acyclic graphs* (DAGs) have a different [datastructure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) than blockchains. Many blocks can be produced in parallel which requires modifications to the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-050-consensus-mechanisms %}).

### What is a DAG

Strictly speaking a DAG are a mathematical concept and nothing new. The structure on the far left of the image below is a simple graph made up of nodes and edges connecting the nodes. In a directed graph each connection has a direction, indicated by the arrows. A directed acyclic graph (DAG) does not allow cyclic relationships of nodes like the one you can see in the bottom part of the directed graph in the middle.

![DAG](/assets/post_files/horizen/advanced/block-dag/dag_D.jpg)
![DAG](/assets/post_files/horizen/advanced/block-dag/dag_M.jpg)

Technically, a blockchain is the most simple form of a DAG. It is a linear structure of nodes and edges that have a direction on no cyclic relationships. The **innovation** (ref Protocol section) introduced with Bitcoin and blockchain technology in general was achieving consensus in a decentralized environment. This innovation can be applied to different, more sophisticated data structures as well.

> "Both [, Blockchains and DAGs,] are digital ledgers. Both may be distributed. Both may be decentralized. Both may have token-economic incentive-mechanisms. They are both subject to immutability attributes as defined by their networks/communities. And finally each network is comprised by its constituents, including users, devs, miners, and other stakeholders" - Bunny Hernandez

There are two different ways to set up a DAG to be used for a cryptocurrency. The nodes can be comprised of individual transactions or they can be blocks containing a number of transactions. The first notable DAG protocol was IOTA's Tangle. In the Tangle, each node is made up of a transaction. Each transaction references two prior transactions and has a small [Proof-of-Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-051-proof-of-work %}) attached to it. 

Horizen is considering the use of a Block-DAG protocol. Each node in the DAG is a block, similar to a block in the blockchain. It also consists of a  block header and a set of transactions. The main difference, when compared to a block in a blockchain, is that a block in the Block-DAG can contain references to more than one predecessors. This allows the [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) to become two-dimensional when compared to the one-dimensional or linear data structure of a blockchain. We only change the data structure compared to a blockchain but keep the same consensus mechanism, Proof-of-Work with an adapted form of the longest chain rule or Nakamoto Consensus to have the network agree on a single transaction history.

![chain DAG](/assets/post_files/horizen/advanced/block-dag/chain_dag_D.jpg)
![chain DAG](/assets/post_files/horizen/advanced/block-dag/chain_dag_M.jpg)

### The Miners of a Block-DAG

There will also be miners in our Block-DAG protocol that perform the Proof-of-Work. With a change in the data structure, the incentive system needs to be adjusted as well. A difference in the reward structure of our DAG compared to a blockchain is that not only the miner that solves a block gets a reward for that particular block but also a number of miners that confirm that block, later on, will receive a reward. This incentivizes the miners to reference all unreferenced blocks. Newly created blocks that are not referenced yet are called leaves of the DAG.

Mining in the Horizen Block-DAG will be similar to traditional mining but we expect more blocks to be mined in total with an overall lower difficulty which should lead to greater mining decentralization as fewer miners will need to join mining pools.

![leaves](/assets/post_files/horizen/advanced/block-dag/leaves_D.jpg)
![leaves](/assets/post_files/horizen/advanced/block-dag/leaves_M.jpg)

In a DAG there is a slightly more complex algorithm than the Longest Chain Rule determining the validity of two conflicting blocks, based on how often they were confirmed. The basic principle of the Longest Chain Rule or Nakamoto Consensus remains. The more confirmations a block in the DAG has, the higher the probability of it being the valid block out of two conflicting ones.

### Difficulty Adjustment

The difficulty determines how hard it is to create a new block by adjusting the *target* based on the average block production time. This affects how many blocks are created in a given amount of time. 

For a Block-DAG not only on the time it takes to mine new blocks but also the size of the last blocks can be factored in for the difficulty adjustment. When several blocks hit the block size limit in a row, this is an indicator of high network activity. In a DAG the difficulty can decrease in case of high network activity, which allows miners to produce more blocks within the same period of time. As a result, more transactions can be processed per time unit and overall throughput is increased. This mechanism allows a DAG to dynamically handle varying network activity without sacrificing security.

### The Main Challenge

From an engineering perspective, there is one main challenge to solve with Block-DAG protocols: establishing an order throughout all blocks. While the order of blocks is always given in a linear blockchain, it needs to be established by a set of predefined rules in a DAG. Block ordering in our DAG will be based on the intersection of blocks. A valid transaction can be included in two different valid blocks. By looking at the "overlap" in transactions of a set of blocks, one can establish a final order throughout the set.
