---
layout: post
type: article
title: "A relative - The DAG"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/a-relative-the-dag/
topic: technology
level: expert
chapter: "What is a Blockchain?"
published: false
---

One of the main engineering challenges in the blockchain space is scalability. Scalability refers to the development of technologies or protocols that can handle more transactions in a fixed amount of time. While traditional payment networks like Visa can handle thousands of transactions per second most blockchains can only handle a handful of transactions in the same period of time. While this comparison is unjust, in that Visa itself can be viewed as a third- or fourth-layer technology (International Bank of Settlements -> National Central Bank -> Retail Bank -> VISA), it is still a significant difference in performance that needs to be addressed. 

### What is a DAG

Strictly speaking a DAG is a mathematical concept and nothing particularly innovative in an of itself. The structure on the  left in the image below is a *graph* made up of *nodes*, or *vertices*, and *edges* connecting the vertices. In a *directed graph* each edge has a direction, indicated by the arrows. A *directed acyclic graph* (DAG) does not allow cyclic relationships of nodes, like the one you can see in the bottom part of the directed graph in the middle. In technical terms one would say the Graph *G = (V, E)* is defined as the set of vertices *V* and edges *E*. DAGs allow *topological sorts*, an ordering of vertices in the graph *G* connected by *edges*, because edges have a direction in the time dimension. 

![DAG](/assets/post_files/technology/expert/1.4-dags/dag_D.jpg)
![DAG](/assets/post_files/technology/expert/1.4-dags/dag_M.jpg)

Technically, a blockchain is the most simple form of a DAG. It is a linear structure of nodes (the blocks), and edges (the references) that have a direction on no cyclic relationships. The [**innovation**]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}) introduced with Bitcoin and blockchain technology in general was achieving consensus and Sybil-resistance in a decentralized environment. This innovation can be applied to different, more sophisticated data structures as well.

> "Both [, Blockchains and DAGs,] are digital ledgers. Both may be distributed. Both may be decentralized. Both may have token-economic incentive-mechanisms. They are both subject to immutability attributes as defined by their networks/communities. And finally each network is comprised by its constituents, including users, devs, miners, and other stakeholders" - Bunny Hernandez

There are two different ways to set up a DAG to be used to run a cryptocurrency. The nodes can comprise individual transactions or they can be blocks, containers for a set of transactions. The first notable DAG protocol was IOTA's [Tangle](https://blog.iota.org/the-tangle-an-illustrated-introduction-4d5eae6fe8d4). In the Tangle, each node is made up of a transaction. Each transaction references two prior transactions and has a small [Proof-of-Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) attached to it. 

Horizen is considering the use of a Block-DAG protocol. Each node in the DAG is a block, similar to a block in the blockchain. It also consists of a  block header and a set of transactions. The main difference, when compared to a block in the blockchain, is that a block in the Block-DAG can contain references to more than one predecessors. Miners don't have to choose a single predecessor to reference, but instead include references to all previously unconfirmed blocks, the *leaves* of the DAG.

![DAG](/assets/post_files/technology/expert/1.4-dags/leaves_D.jpg)
![DAG](/assets/post_files/technology/expert/1.4-dags/leaves_M.jpg)

This allows the [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) to become two-dimensional when compared to the one-dimensional or linear data structure of a blockchain. We change the data structure compared to a blockchain and have to adapt the consensus mechanism, the *longest chain rule* (more precisely the *heaviest chain rule*) or Nakamoto Consensus to have the network agree on a single transaction history.
The consensus mechanism, Proof-of-Work remains the same.

### The Scalability Challenge

The main factors affecting a blockchains protocol scalibility regarding transaction throughput are:

- the size of a single transaction (byte)
- the block size (byte -> transactions per block)
- block time, the interval in which blocks are created (time -> blocks per time unit -> transactions per time unit)
- propagation delay on the network (seconds)

To increase the throughput of a linear blockchain on the protocol level (read: through software improvements) one can either decrease the size of transactions themselves or the interval in which blocks are created. Another option would be to increase the block size.

This can be shown with Bitcoin as an example. Whereas Bitcoin activated SegWit to decrease the size of individual transactions, the closely related Litecoin Protocol, on the other hand, reduced the block interval from 10 to 2.5 min. Bitcoin Cash went the other way and decided to increase the block size.

The problem is the following: transaction size can only be decreased by so much, as transactions are quite compact already, and even if you could shrink a transaction to a tenth of its size, this would only increase throughput from 7 to 70 transactions per second (for Bitcoin). Not exactly Visa level. Raising the block size limit comes at the expanse of mining centralization, as fewer people can compete in the competitive mining industry, when hardware and network requirements increase. Decreasing the block interval leads to more orphaned blocks and is limited by network synchronization time across the globe. An increase in block size also increases the orphan rate because propagation time is increased linearly with it. A high rate of orphaned blocks reduce the overall security of the protocol, because honest hash power is "wasted" and does not contribute to the security of the ledger.

![Scaling](/assets/post_files/technology/expert/1.4-dags/scaling_dag_D.jpg)

There are generally three approaches to scalability:

- Second-layer technologies like [payment- or state channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-state-payment-channels %}) which are used in the *Lightning Network* that take transactions off-chain with the option to settle on-chain at any time.

- [*Sidechain*]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) approaches, which can best be described as a parallelization of blockchains. Assets can be transferred from one chain to another via a *two-way peg* (2WP) and the transactional load is shared between the mainchain and its sidechains.

- *Directed acyclic graphs* (DAGs) have a different [datastructure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) than blockchains. Many blocks can be produced in parallel which requires modifications to the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}).

### Consensus vs. Sybil Resistance

We would like to introduce a distinction between *consensus mechanisms* and a *Sybil-resistance mechanisms* at this point. Most likely you came across the terms [*Proof-of-Work*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) (PoW), [*Proof-of-Stake*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) (PoS) or [Proof-of-*something-else*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-3-other-consensus-mechanisms %}) labeled as consensus mechanisms before. We are guilty of using that label ourselves, for it has become a convention that we used to reduce confusion, against our better knowledge.

PoW and it's realtives are actually Sybil-resistance mechanisms. In a **Sybil Attack**, a malicious party creates a large number of centrally controlled (online) identities and tries to achieve certain, mostly malicious, goals by exerting influence through these fake identities. Online voting is the most intuitive example of a situation, where many fake identities can be used to game the results.

Sybil-resistance mechanism prevent this by tying an entities voting power to a scarce resource, that is harder to obtain than fake user-accounts or IP-addresses. 

In PoW the scarce resource voting power is tied to is computational power. Your voting power is the share of computing power you control, relative to the total computing power of the network.
In PoS, your voting power is tied to the share of native currency you own, relative to the circulating supply on the network, or more precisely, to the actually *staked* supply on the network.

While these mechanisms prevent malicious actors from exerting undue influence on the network, they don't help achieving consensus on a single transaction history in and off themselves. This is what the actual consensus mechanism does. In most cases this is the longest-chain rule (heaviest-chain rule), also called Nakamoto Consensus. The term heaviest chain rule is more precise, as the rule is defined by the amount of aggregated work that went into building a branch, rather than the number of blocks. Theoretically, there could be a fork with two branches, where the shorter branch has more aggregate work to it. In this case the shorter branch would be considered valid. In practice, this does not make much of a difference because there is little to no variety in the PoW attached to blocks on major blockchains.

This little excursion should prove valuable to following along on a short history of Block DAG protocols.

### Block DAGs

**Note:** there are no production block DAG protocols live today. This article is meant to lay out the considerations that go into building such a protocol, rather than the actual implementation details.

#### GHOST

A first step towards Block-DAG protocols was the [*Greedy Heaviest Observable Sub Tree* (GHOST) Protocol](https://eprint.iacr.org/2013/881.pdf). The consensus mechanism in GHOST is not based on the longest-chain criterion. Instead, the subtree with the greatest combined Proof-of-Work or difficulty is considered the valid branch by protocol design. 

![Ghost](/assets/post_files/technology/expert/1.4-dags/ghost_D.jpg)

A more intuitive description might be finding the subtree of greatest cardinality (here we make the same assumption as before when distinguishing between longest- and heaviest-chain rule). The structure on the image above is moving into DAG territory, rather than just being a blockchain with orphaned blocks (also there is no such clear distinction). Technically, it is still a *tree* and not a DAG though. The two differ in trees being able to branch off in the direction of the edges, but branches not merging together later on. DAGs on the other hand can do both, branch off and merge. Trees are a subcategory of DAGs, in that every tree is a DAG, but not every DAG is a tree.

![Tree vs. DAG](/assets/post_files/technology/expert/1.4-dags/tree_vs_dag_D.jpg)

In the beginning of this article we said decreasing the blocktime and increasing the block size leads to a higher orphan rate and reduced security. In GHOST, [this effect is eliminated](https://medium.com/@drstone/an-overview-of-proof-of-work-based-blockchain-consensus-protocols-part-1-e04102885093) by introducing a different mechanism to elect valid forks. An attacker would also need to control more relative hash power to perform double spends (>51%), than he would need to with the longest chain rule (51%) as consensus mechanism.

> "Each of these mechanisms share similar quantitative notions of a blocks aggregate proof of work/hash power but differ qualitatively: aggregate chain work vs aggregate subtree work." - Drew Stone

#### SPECTRE

Another evolutionary step in the development of a Block DAG was the [*Serialization of Proof-of-work Events: Confirming Transactions via Recursive Elections* - *SPECTRE* protocol](https://eprint.iacr.org/2016/1159.pdf), which actually builds a DAG structure. This allows block creation in parallel at a high rate. It seperates the mining protocol from the consensus protocol in that miners don't have to choose which blocks to build on top of according to the consensus rules. While the protocol suggests building new blocks on the *leaves* of the DAG, the set of unconfirmed blocks, a valid block can be build on any set of blocks in the DAG. The consensus mechanism determines the order of blocks in a second step, via a *recursive election*.

Determining an order throughout the blocks is an important step. If two blocks contain conflicting transactions, you want the transaction made first to be the valid one and have the double spend transaction rejected. The recursive election is a type of voting scheme.

> " In this voting scheme, each block will identify a preference ordering over pairs of blocks based on which block they believe occurred first. The final ordering is taken as a majority vote on pairwise orderings across all blocks." - Drew Stone
 
![Recursive Election](/assets/post_files/technology/expert/1.4-dags/recursive_election_D.jpg)

Consider you were to determine the order between block *X* and *Y* in the graphic above with the recursive election protocol. 

**TKKG: Check with Zohar Summary**

First, the blocks that reference only one of the two blocks cast a vote on which block came first. Blocks 6, 7 and 8 don't reference *Y* at all, so they for *X*. Blocks 9, 10 and 11 don't reference, or don't *see*, block *X*, so they vote for *Y*.

Next, the blocks that have a connection to both blocks in question cast a vote. Block 12 references both, *X* and *Y*, and therefore takes itself out of the equation. It looks at the blocks it references and which have a connection to *X* and *Y* (6, 7, 8, and 9) and adapts the majority vote, which is 3 to 1 for *X*.

All blocks (1-5) which preceded the two blocks in question adapt the majority vote of the other blocks. 
If there is a tie situation, the next block that is added to the DAG determines the order, just like in a fork of a blockchain.

If a malicious miner were to mine hidden blocks only to reveal them later, they would have no references and therefore would always be voted on as coming last. This makes double spend attacks much harder, even if an attacker controls a large share of the hash power. 

A weakness of the SPECTRE approach to ordering blocks is that it cannot guarantee linear block ordering. Although great effort is put into avoiding this, the [*Condorcet's Paradox*](https://en.wikipedia.org/wiki/Condorcet_paradox) which origins in social choice theory, can occur with the recursive election approach. It is a situation where a majority vote can order A < B, B < C, and yet C < A.

Because linear block ordering cannot be guaranteed, the protocol doesn't satisfy the *liveness* property. *Liveness* and *safety* are properties distributed systems must display in order to securely support a cryptocurrency. More complex use cases like [smart contracts]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-guaranteed-execution-with-smart-contracts %}) are completely incompatible with SPECTRE.

Aviv Zohar, co-author of all protocols mentioned in this article, gave a presentation on GHOST and SPECTRE at the 6th Technion Summer School on Cyber and Computer Security that you [can find here](https://www.youtube.com/watch?v=5mEaBXl3BMM). He also wrote a detailed [summary of SPECTRE](https://medium.com/@avivzohar/the-spectre-protocol-7dbbebb707b5) on Medium.

#### PHANTOM

The last protocol worth mentioning in the context of Block DAGs is the [PHANTOM protocol](https://pdfs.semanticscholar.org/bf71/4c9c854b3ef79895b1585bb9ce73584734ba.pdf?_ga=2.37419552.1079935823.1558038475-904529471.1558038475). It can guarantee linear block ordering and therefore satifies the liveness condition at the expense of speed. Speed relates to the time it takes all nodes on the network to reach consensus.

The security assumptions for PHANTOM are based on an honest majority of peers. The mechanism used to establish a final block ordering is first defining a cluster of blocks in the DAG. Finding this cluster is an [NP-hard problem](https://en.wikipedia.org/wiki/NP-hardness), which means it cannot directly be solved but needs to be approximated. Once these clusters are defined (or approximated), a [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) is performed to establish an order. 

**TKKG** lay out approach, add graphic. one section max. to complex, unneccessary

Because PHANTOM allows for linear block ordering, the protocol is suitable for advanced applications such as smart contracts. In order to correctly execute a smart contract.

The details of this algorithm extend the scope of this article. If you are interested, we refer you to the actual [paper](https://pdfs.semanticscholar.org/bf71/4c9c854b3ef79895b1585bb9ce73584734ba.pdf?_ga=2.37419552.1079935823.1558038475-904529471.1558038475) of the protocol or a [detailed summary](https://medium.com/@drstone/an-overview-of-phantom-a-blockdag-consensus-protocol-part-3-f28fa5d76ef7) written by Drew Stone.

### Our Block-DAG Protocol

With a change in the data structure, form linear chain to DAG, the incentive system needs to be adjusted as well. A difference in the reward structure of our DAG compared to a blockchain is that not only the miner that solves a block gets a reward for that particular block but also a number of miners that confirm that block, later on, will receive a reward. This incentivizes the miners to reference all *leaves*. 

In a DAG there is a slightly more complex algorithm than the Longest Chain Rule determining the validity of two conflicting blocks, based on how often they were confirmed. The basic principle of the Longest Chain Rule or Nakamoto Consensus remains. The more confirmations a block in the DAG has, the higher the probability of it being the valid block out of two conflicting ones.

#### Difficulty Adjustment

Mining in the Horizen Block-DAG will be similar to traditional mining but we expect more blocks to be mined in total with an overall lower difficulty which should lead to greater mining decentralization as fewer miners will need to join mining pools. The difficulty determines how hard it is to create a new block by adjusting the *target* based on the average block production time. This affects how many blocks are created in a given amount of time.

For a DAG not only on the time it takes to mine new blocks but also the size of the last blocks can be factored in for the difficulty adjustment. When several blocks hit the block size limit in a row, this is an indicator of high network activity. The difficulty can decrease in case of high network activity, which allows miners to produce more blocks within the same period of time. As a result, more transactions can be processed per time unit and overall throughput is increased. This mechanism allows a DAG to dynamically handle varying network activity without sacrificing security.

#### Block Ordering

As we have learned from looking at previous attempts to build Block DAG protocols, from an engineering perspective the main challenge to solve is establishing an order throughout all blocks. Block ordering in our DAG will be based on the intersection of blocks. A valid transaction can be included in two different valid blocks. By looking at the "overlap" in transactions of a set of blocks, one can establish a final order throughout the set.

At this point our DAG protocol is still being researched and analysed using theoretical methods. As soon as there will be  reliable results, a paper on the protocol will be published and this article will be updated.

### Summary

**TKKG**

### FR

new analysis framework for blockchain protocols focusing on trees of blocks as opposed to chains: On Trees, Chains and Fast Transactions in the Blockchain https://eprint.iacr.org/2016/545.pdf

https://medium.com/@drstone/an-overview-of-proof-of-work-based-blockchain-consensus-protocols-part-1-e04102885093

https://medium.com/@drstone/an-overview-of-spectre-a-blockdag-consensus-protocol-part-2-36d3d2bd33fc

https://medium.com/@drstone/an-overview-of-phantom-a-blockdag-consensus-protocol-part-3-f28fa5d76ef7

https://medium.com/@avivzohar/the-spectre-protocol-7dbbebb707b5
