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

### The Scalability Challenge

factors affecting a protocols scalibility:

- the size of a single transaction (byte)
- the block size (byte -> transactions per block)
- block time, the interval in which blocks are created (time -> blocks per time unit -> transactions per time unit)
- propagation delay on the network (seconds)

To increase the throughput of a linear blockchain on the protocol level (not through hardware improvements) one can either decrease the size of transactions themselves or the interval in which blocks are created. Alternatively, the block size can be increased.

This can be shown with Bitcoin as an example. Whereas Bitcoin activated SegWit to decrease the size of individual transactions, Bitcoin Cash went the other way and decided to increase the block size. The closely related Litecoin Protocol, on the other hand, reduced the block interval from 10 to 2.5 min.

The problem is the following: transaction size can only be decreased by so much, as they are quite compact already, and even if you could shrink a transaction to a tenth of its size, this would only increase throughput from 7 to 70 transactions per second (for Bitcoin). Not exactly Visa level. Increasing the block size comes at the expanse of mining centralization. Decreasing the block interval leads to more orphaned blocks and is limited by network synchronization time across the globe.

**TKKG** orphaned blocks decrease security

There are generally three approaches to scalability:

- Second-layer technologies like [payment channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-state-and-payment-channels %}) used in the *Lightning Network* that take transactions off-chain with the option to settle on-chain at any time.

- [*Sidechain*]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) approaches, which can best be described as a parallelization of blockchains. Assets can be transferred from one chain to another via a *two-way peg* (2WP) and the transactional load is shared between the mainchain and its sidechains.

- *Directed acyclic graphs* (DAGs) have a different [datastructure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) than blockchains. Many blocks can be produced in parallel which requires modifications to the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-050-consensus-mechanisms %}).

### What is a DAG

Strictly speaking a DAG are a mathematical concept and nothing new. The structure on the far left of the image below is a simple graph made up of nodes, or *vertices*, and *edges* connecting the vertices. In a directed graph each edge has a direction, indicated by the arrows. A directed acyclic graph (DAG) does not allow cyclic relationships of nodes like the one you can see in the bottom part of the directed graph in the middle. In technical terms one would say the Graph *G = (V, E)* is defined as the set of vertices *V* and edges *E*. DAGs allow *topological sorts*, an ordering of vertices in the graph *G* which are connected by an *edge* to have a defined order. 

![DAG](/assets/post_files/horizen/advanced/block-dag/dag_D.jpg)
![DAG](/assets/post_files/horizen/advanced/block-dag/dag_M.jpg)

Technically, a blockchain is the most simple form of a DAG. It is a linear structure of nodes and edges that have a direction on no cyclic relationships. The **innovation** (ref Protocol section) introduced with Bitcoin and blockchain technology in general was achieving consensus in a decentralized environment. This innovation can be applied to different, more sophisticated data structures as well.

> "Both [, Blockchains and DAGs,] are digital ledgers. Both may be distributed. Both may be decentralized. Both may have token-economic incentive-mechanisms. They are both subject to immutability attributes as defined by their networks/communities. And finally each network is comprised by its constituents, including users, devs, miners, and other stakeholders" - Bunny Hernandez

There are two different ways to set up a DAG to be used for a cryptocurrency. The nodes can be comprised of individual transactions or they can be blocks containing a number of transactions. The first notable DAG protocol was IOTA's [Tangle](https://blog.iota.org/the-tangle-an-illustrated-introduction-4d5eae6fe8d4). In the Tangle, each node is made up of a transaction. Each transaction references two prior transactions and has a small [Proof-of-Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-051-proof-of-work %}) attached to it. 

Horizen is considering the use of a Block-DAG protocol. Each node in the DAG is a block, similar to a block in the blockchain. It also consists of a  block header and a set of transactions. The main difference, when compared to a block in a blockchain, is that a block in the Block-DAG can contain references to more than one predecessors. This allows the [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) to become two-dimensional when compared to the one-dimensional or linear data structure of a blockchain. We only change the data structure compared to a blockchain but keep the same consensus mechanism, Proof-of-Work with an adapted form of the longest chain rule or Nakamoto Consensus to have the network agree on a single transaction history.

![chain DAG](/assets/post_files/horizen/advanced/block-dag/chain_dag_D.jpg)
![chain DAG](/assets/post_files/horizen/advanced/block-dag/chain_dag_M.jpg)

### Block-DAGs

ghost -> spectre -> phantom



#### GHOST

A first step in the development of Block-DAGS was the [Ghost Protocol](https://eprint.iacr.org/2013/881.pdf). The Greedy Heaviest Observable Sub Tree (GHOST)

aggregate chain work vs aggregate subtree work

++++ Ghost image

with dags liveness is easy but persistence is the challenge\\

"To execute a double-spend, a 50\% attacker’s main objective is to overwrite, previously written blocks. In order to do so, an attacker is incentivized to dedicate all its computational power to the blockchain it wants to extend. Since the consensus rule is resolved by subtrees and not chains however, the attacker can never reliably extend an attacker chain without consistently contributing to the honest blockchain." - spectre overview medium


block throughput and block size can be increased without reducing security. but, implementation more complex (???)

#### SPECRTE

[SPECTRE]https://eprint.iacr.org/2016/1159.pdf

With SPECTRE mining and consensus seperated. leads to weak liveness (\textbf{why?}). Property of TX being included at some point.

"SPECTRE prioritizes quickness over powerfulness in terms of sheer mining power."\\


++++ recursive voting graphic

SPECTRE pairwise ordering through recursice voting. "The authors of SPECTRE make it clear that the pairwise ordering relation is not transitive, i.e. not always a linear ordering. The idea is that some DAG states may exhibit cases of [Condorcet’s Paradox](https://en.wikipedia.org/wiki/Condorcet_paradox), a paradox in social choice theory around cycles of pairwise preferences."

Without proper ordering throughout all pairs of blocks - complete vs. weak liveness - SPECTRE cannot support cryptocurrency networks where strict ordering among TXs is necessary.\\

"started by analyzing Bitcoin’s longest chain rule and GHOST’s heaviest subtree rule. These protocols built tree structures by design and \textbf{differed primarily in fork selection}. The first blockDAG protocol that we looked at, SPECTRE, abstracts away from this to build a directed acyclic graph structure over blocks. It provides separate mechanisms for mining and consensus on valid transactions, which allows the end user an extra dosage of freedom in the transactions they want to accept./ phantom overview medium\\

Spectre "there is no guarantee that any linear ordering over blocks and transactions exists without double-spend transactions."\\

#### PHANTOM

[PHANTOM](https://pdfs.semanticscholar.org/bf71/4c9c854b3ef79895b1585bb9ce73584734ba.pdf?_ga=2.37419552.1079935823.1558038475-904529471.1558038475)

"PHANTOM sacrifices speed for the ability to totally order blocks and transactions." security assumption based on min of 50\% honest miners\\




### The Miners of a Block-DAG

There will also be miners in our Block-DAG protocol that perform the Proof-of-Work. 

Algo: Mining node collects set all leaves, $B$. Includes $B$ in header of their block $b$ and compute hashes $h$ until they find an $h \leq \text{target}$. Once found they broadcast $b$.\\

"The mining is similar to a regular POW blockchain. A miner begins creating a block by collecting the leaves of the DAG that do not contain conflicting transactions. Two conflicting transactions would try to perform a double spend. Next, the miner collects the unconfirmed transactions from the mempool and verifies their validity. Finally, the miner combines the references to the set of leaf blocks they see. The miner forms unconfirmed transactions into a new block and starts working on finding a valid proof-of-work. If the miner receives a new block before finding a solution they drop the block and start over again. If the miner finds a valid POW before receiving another block, they will broadcast the block with its proof to the network.\\

You might ask yourself why a miner would drop their block instead of continuing to work on it. This is because Proof-of-Work is approximation-free. There is no "being close" to finding a solution to the Proof-of-Work, you have either found one or not. No matter how much time a miner has spent finding a solution to a block, the chances of finding a solution with the next attempt don't change if the miner switches to finding a solution for a different block.\\

We are expecting more independent miners because there will be less need to join mining pools with an overall greater number of blocks mined at a lower difficulty. This leads to a greater decentralization with regards to the distribution of newly mined coins. We talk about the mining difficulty later in this article."\\




With a change in the data structure, the incentive system needs to be adjusted as well. A difference in the reward structure of our DAG compared to a blockchain is that not only the miner that solves a block gets a reward for that particular block but also a number of miners that confirm that block, later on, will receive a reward. This incentivizes the miners to reference all unreferenced blocks. Newly created blocks that are not referenced yet are called leaves of the DAG.

Mining in the Horizen Block-DAG will be similar to traditional mining but we expect more blocks to be mined in total with an overall lower difficulty which should lead to greater mining decentralization as fewer miners will need to join mining pools.

![leaves](/assets/post_files/horizen/advanced/block-dag/leaves_D.jpg)
![leaves](/assets/post_files/horizen/advanced/block-dag/leaves_M.jpg)

In a DAG there is a slightly more complex algorithm than the Longest Chain Rule determining the validity of two conflicting blocks, based on how often they were confirmed. The basic principle of the Longest Chain Rule or Nakamoto Consensus remains. The more confirmations a block in the DAG has, the higher the probability of it being the valid block out of two conflicting ones.

### Difficulty Adjustment

The difficulty determines how hard it is to create a new block by adjusting the *target* based on the average block production time. This affects how many blocks are created in a given amount of time. 

For a Block-DAG not only on the time it takes to mine new blocks but also the size of the last blocks can be factored in for the difficulty adjustment. When several blocks hit the block size limit in a row, this is an indicator of high network activity. In a DAG the difficulty can decrease in case of high network activity, which allows miners to produce more blocks within the same period of time. As a result, more transactions can be processed per time unit and overall throughput is increased. This mechanism allows a DAG to dynamically handle varying network activity without sacrificing security.

### The Main Challenge

From an engineering perspective, there is one main challenge to solve with Block-DAG protocols: establishing an order throughout all blocks. While the order of blocks is always given in a linear blockchain, it needs to be established by a set of predefined rules in a DAG. Block ordering in our DAG will be based on the intersection of blocks. A valid transaction can be included in two different valid blocks. By looking at the "overlap" in transactions of a set of blocks, one can establish a final order throughout the set.
