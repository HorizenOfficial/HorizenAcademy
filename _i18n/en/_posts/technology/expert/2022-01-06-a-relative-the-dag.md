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

One of the main engineering challenges in the blockchain space is *scalability*. Scalability refers to the development of technologies or protocols that can handle more transactions in the same amount of time. While traditional payment networks like Visa handle thousands of transactions per second most blockchains can only handle a handful in the same period of time. This comparison is unjust, in that Visa itself can be viewed as a third- or fourth-layer technology (International Bank of Settlements -> National Central Bank -> Retail Bank -> VISA), it is still a significant difference in performance that needs to be addressed.

## The Scalability Challenge

The main factors affecting a blockchains protocol scalability regarding transaction throughput are:

- The size of a single transaction (byte)
- The block size (byte -> transactions per block)
- Block time, the interval in which blocks are created (time -> blocks per time unit -> transactions per time unit)
- Propagation delay on the network (seconds)

To increase the throughput of a linear blockchain on the protocol level (read: through software improvements) one can either decrease the size of transactions themselves or the interval in which blocks are created. Another option would be to increase the block size.

This can be shown with Bitcoin as an example. Whereas Bitcoin activated SegWit to decrease the size of individual transactions, the closely related Litecoin Protocol, on the other hand, reduced the block interval from 10 to 2.5 min. Bitcoin Cash went the other way and decided to increase the block size.

The problem is the following: transaction size can only be decreased by so much, as transactions are quite compact already, and even if you could shrink a transaction to a tenth of its size, this would only increase throughput from 7 to 70 transactions per second (for Bitcoin). Not exactly Visa level. Raising the block size limit comes at the expanse of mining centralization, as fewer people can compete in the competitive mining industry when hardware and network requirements increase. Decreasing the block interval leads to more orphaned blocks and is limited by network synchronization time across the globe. An increase in block size also increases the orphan rate because propagation time is increased linearly with it. A high rate of orphaned blocks reduce the overall security of the protocol, because honest hash power is "wasted" and does not contribute to the security of the ledger.

![Scaling](/assets/post_files/technology/expert/1.5-DAGs/scaling_dag_D.jpg)
![Scaling](/assets/post_files/technology/expert/1.5-DAGs/scaling_dag_M.jpg)

There are generally three approaches to scalability:

- Second-layer technologies like [payment- or state channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-state-and-payment-channels %}) which are used in the *Lightning Network* that take transactions off-chain with the option to settle on-chain at any time.
- [*Sidechain*]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) approaches, which can best be described as a parallelization of blockchains. Assets can be transferred from one chain to another via a *two-way peg* (2WP) and the transactional load is shared between the mainchain and its sidechains.
- *Directed acyclic graphs* (DAGs) have a different [datastructure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) than blockchains. Many blocks can be produced in parallel which requires modifications to the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}).

## What is a DAG

Strictly speaking, a DAG is a mathematical concept and nothing particularly innovative in an of itself. The structure on the left in the image below is a *graph* made up of *nodes*, or *vertices*, and *edges* connecting the nodes. In a *directed graph* each edge has a direction, indicated by the arrows. A *directed acyclic graph* (DAG) does not allow cyclic relationships of nodes, like the one you can see in the bottom part of the directed graph in the middle. In technical terms, one would say the Graph *G = (V, E)* is defined as the set of vertices *V* and edges *E*.

![DAG](/assets/post_files/technology/expert/1.5-DAGs/dag_D.jpg)
![DAG](/assets/post_files/technology/expert/1.5-DAGs/dag_M.jpg)

Technically, a blockchain is the most simple form of a DAG. It is a linear structure of nodes (the blocks), and edges (the references) that have a direction and no cyclic relationships. The [innovation introduced with Bitcoin]](https://academy.horizen.global/technology/expert/a-protocol-to-transfer-value/#the-great-innovations-introduced-with-bitcoin) and blockchain technology was achieving consensus and Sybil-resistance in a decentralized environment. This innovation can be applied to different, more sophisticated data structures as well.

> "Both [, Blockchains and DAGs,] are digital ledgers. Both may be distributed. Both may be decentralized. Both may have token-economic incentive-mechanisms. They are both subject to immutability attributes as defined by their networks/communities. And finally each network is comprised by its constituents, including users, devs, miners, and other stakeholders" - Bunny Hernandez

There are two different ways to set up a DAG to run a cryptocurrency. The nodes can comprise individual transactions or they can be blocks, containers for a set of transactions. The first notable DAG protocol was IOTA's [Tangle](https://blog.iota.org/the-tangle-an-illustrated-introduction-4d5eae6fe8d4). In the Tangle, each node is made up of a transaction. Each transaction references two prior transactions and has a small [Proof-of-Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) attached to it. Many problems with IOTAs architecture have been discussed and at the time of writing the network cannot run reliably without a central coordinator.

Horizen is researching the use of a Block-DAG protocol in cooperation with [IOHK](https://iohk.io/). Each node in this DAG is a block, similar to a block in the blockchain that consists of a block header and transactions. The main difference, when compared to a block in the blockchain, is that a block in the Block-DAG can reference more than one predecessor. Miners don't have to choose a single block to reference, but instead include references to all previously unconfirmed blocks, the *leaves* of the DAG.

![DAG](/assets/post_files/technology/expert/1.5-DAGs/leaves_D.jpg)
![DAG](/assets/post_files/technology/expert/1.5-DAGs/leaves_M.jpg)

This allows the [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) to become two-dimensional when compared to the one-dimensional or linear data structure of a blockchain. When we change the data structure (compared to a blockchain) we also have to adapt the consensus mechanism.

## Consensus vs. Sybil Resistance

We would like to introduce a distinction between *consensus mechanisms* and *Sybil-resistance mechanisms* at this point.

Most likely you came across the terms [*Proof-of-Work*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) (PoW), *Proof-of-Stake* (PoS) or *Proof-of-something-else* labeled as consensus mechanisms before. We are guilty of using that label ourselves, for it has become a convention that we used to reduce confusion, against better knowledge.

PoW and its relatives are actually Sybil-resistance mechanisms. In a *Sybil Attack*, a malicious party creates a large number of centrally controlled (online) identities and tries to achieve certain, mostly malicious, goals by exerting influence through these fake identities. Online voting is the most intuitive example of a situation, where many fake identities can be used to game the results.

Sybil-resistance mechanisms prevent this by tying the voting power of an entity to a scarce resource, that is harder to obtain than fake user-accounts or IP-addresses.

In PoW the scarce resource voting power is tied to is computational power. Your voting power is the share of computing power you control, relative to the total computing power of the network. In PoS, your voting power is tied to the share of native currency you own, relative to the circulating supply on the network, or more precisely, to the actually *staked* supply on the network.

While these mechanisms prevent malicious actors from exerting undue influence on the network, they don't help to achieve consensus on a single transaction history by themselves. This is what the actual consensus mechanism does. In most cases this is the longest chain rule or *heaviest chain rule*, also called Nakamoto Consensus. The term heaviest chain rule is more precise, as the rule is defined by the amount of aggregated work that went into building a branch, rather than the number of blocks. Theoretically, there could be a fork with two branches, where the shorter branch has more aggregate work to it. In this case, the shorter branch would be considered valid. In practice, this does not make much of a difference because there is little variety in the PoW attached to blocks on major blockchains.

This little excursion should prove valuable to following along on a short history of Block DAG protocols.

## Block DAGs

**Note:** there are no production block DAG protocols live today. This article is meant to lay out the considerations that go into building such a protocol, rather than the actual implementation details.

### GHOST

One of the first steps towards Block-DAG protocols was the [*Greedy Heaviest Observable Sub Tree* (GHOST) Protocol](https://eprint.iacr.org/2013/881.pdf). The consensus mechanism in GHOST is not based on the longest chain rule. Instead, the subtree with the greatest combined Proof-of-Work or difficulty is considered the valid branch by protocol design.

![Ghost](/assets/post_files/technology/expert/1.5-DAGs/ghost_D.jpg)
![Ghost](/assets/post_files/technology/expert/1.5-DAGs/ghost_M.jpg)

A more intuitive description might be finding the subtree of greatest cardinality (here we make the same assumption as before when distinguishing between longest- and heaviest-chain rule). The structure on the image above is moving into DAG territory, rather than just being a blockchain with orphaned blocks (there is no such clear distinction). Technically, it is still a *tree* and not a DAG though. The two differ in trees being able to branch off in the direction of the edges, but branches not merging together later on. DAGs, on the other hand, can do both, branch off and merge. Trees are a subcategory of DAGs, in that every tree is a DAG, but not every DAG is a tree.

![Tree vs. DAG](/assets/post_files/technology/expert/1.5-DAGs/tree_vs_dag_D.jpg)
![Tree vs. DAG](/assets/post_files/technology/expert/1.5-DAGs/tree_vs_dag_M.jpg)

At the beginning of this article we said decreasing the blocktime and increasing the block size leads to a higher orphan rate and reduced security. In GHOST, [this effect is eliminated](https://medium.com/@drstone/an-overview-of-proof-of-work-based-blockchain-consensus-protocols-part-1-e04102885093) by introducing a different mechanism to elect valid forks. An attacker would also need to control more relative hash power to perform double spends (>51%) than he would need to with the longest chain rule (51%) as the consensus mechanism.

> "Each of these mechanisms share similar quantitative notions of a blocks aggregate proof of work/hash power but differ qualitatively: aggregate chain work vs aggregate subtree work." - Drew Stone

### SPECTRE

Another evolutionary step in the development of a Block DAG was the [*Serialization of Proof-of-work Events: Confirming Transactions via Recursive Elections* - *SPECTRE* protocol](https://eprint.iacr.org/2016/1159.pdf), which actually builds a DAG structure. This allows block creation in parallel at a high rate. It separates the mining protocol from the consensus protocol in that miners don't have to choose which blocks to build on top of according to the consensus rules. While the protocol suggests building new blocks on the *leaves* (the set of unconfirmed blocks) of the DAG a valid block can be built on any set of blocks in the DAG. The consensus mechanism determines the order of blocks in a second step, via a *recursive election*.

Determining an order throughout the blocks is an important step. If two blocks contain conflicting transactions, you want the transaction broadcast first to be the valid one and have the double-spend transaction rejected. The recursive election is a type of voting scheme to establish order throughout all blocks.

> "In this voting scheme, each block will identify a preference ordering over pairs of blocks based on which block they believe occurred first. The final ordering is taken as a majority vote on pairwise orderings across all blocks." - Drew Stone
 
![Recursive Election](/assets/post_files/technology/expert/1.5-DAGs/recursive_election_D.jpg)
![Recursive Election](/assets/post_files/technology/expert/1.5-DAGs/recursive_election_M.jpg)

Consider you were to determine the order between block *X* and *Y* in the graphic above with the recursive election protocol.

First, the blocks that reference only one of the two blocks cast a vote on which block came first. Blocks 6, 7 and 8 don't reference *Y* at all, so they vote for *X*. Blocks 9, 10 and 11 don't reference (or don't *see*) block *X*, so they vote for *Y*.

Next, the blocks that have a connection to both blocks in question cast a vote. Block 12 references both, *X* and *Y*, and therefore takes itself out of the equation. It looks at the blocks it references and which have a connection to *X* and *Y* (6, 7, 8, and 9) and adapts the majority vote, which is 3 to 1 for *X*.

All blocks (1-5) which preceded the two blocks in question adapt the majority vote of the other blocks.
If there is a tie situation, the next block that is added to the DAG determines the order, just like a tie after a fork in a blockchain is broken with the next block.

If a malicious miner were to mine hidden blocks only to reveal them later, they would have no references and therefore would always be voted on as coming last. This makes double-spend attacks much harder, even if an attacker controls a large share of the hash power.

A weakness of the SPECTRE approach to ordering blocks is that it cannot guarantee linear block ordering. Although great effort is put into avoiding this, the [*Condorcet's Paradox*](https://en.wikipedia.org/wiki/Condorcet_paradox) which origins in social choice theory, can occur with the recursive election approach. It is a situation where a majority vote can order A < B, B < C, and yet C < A.

Because linear block ordering cannot be guaranteed, the protocol doesn't satisfy the *liveness* property. *Liveness* and *safety* are properties distributed systems must display in order to securely support a cryptocurrency.

- *Liveness* means that all non-faulty nodes eventually compute a new state (read: block). In simple terms it means, the system doesn't halt and reacts to events.
- *Safety* means that all non-faulty nodes transition to the same state after a given external event. This means all nodes will be in sync eventually.

Aviv Zohar, the co-author of all protocols mentioned in this article, gave a presentation on GHOST and SPECTRE at the 6th Technion Summer School on Cyber and Computer Security that you [can find here](https://www.youtube.com/watch?v=5mEaBXl3BMM). He also wrote a detailed [summary of SPECTRE](https://medium.com/@avivzohar/the-spectre-protocol-7dbbebb707b5).

### PHANTOM

The last protocol worth mentioning in the context of Block-DAGs is the [PHANTOM protocol](https://pdfs.semanticscholar.org/bf71/4c9c854b3ef79895b1585bb9ce73584734ba.pdf?_ga=2.37419552.1079935823.1558038475-904529471.1558038475). It can guarantee linear block ordering and therefore satisfies the liveness condition at the expense of speed. Speed relates to the time it takes all nodes on the network to reach consensus.

The security assumptions for PHANTOM are based on an honest majority of peers. The mechanism used to establish a final block ordering comprises defining a cluster of blocks in the DAG first. Finding this cluster is an [NP-hard problem](https://en.wikipedia.org/wiki/NP-hardness), which means it cannot directly be solved but needs to be approximated. Once these clusters are defined (or approximated), a [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) is performed to establish an order.

The details of this algorithm extend the scope of this article. If you are interested, we refer you to the actual [paper](https://pdfs.semanticscholar.org/bf71/4c9c854b3ef79895b1585bb9ce73584734ba.pdf?_ga=2.37419552.1079935823.1558038475-904529471.1558038475) of the protocol or a [detailed summary](https://medium.com/@drstone/an-overview-of-phantom-a-blockdag-consensus-protocol-part-3-f28fa5d76ef7) written by Drew Stone.

## Our Block-DAG Protocol

With a change in the data structure, from linear blockchain to DAG, the incentive system needs to be adjusted as well. A difference in the reward structure of our DAG compared to a blockchain is that not only the miner that solves a block gets a reward for that particular block but also a number of miners that confirm that block, later on, will receive a reward. This incentivizes the miners to reference all *leaves* of the DAG.

In a DAG there is a slightly more complex algorithm than the Longest Chain Rule determining the validity of two conflicting blocks, based on how often they were confirmed. The basic principle of the Longest Chain Rule or Nakamoto Consensus remains. The more confirmations a block in the DAG has, the higher the probability of it being the valid block out of two conflicting ones.

### Difficulty Adjustment

Mining in the Horizen Block-DAG will be similar to traditional mining but we expect more blocks to be mined in total with an overall lower difficulty which should lead to greater mining decentralization. Fewer miners will need to join mining pools. The difficulty is a measure of how hard it is to create a new block and affects how many blocks are created in a given amount of time.

For a DAG, not only the block production rate but also the size of the last blocks can be factored in for the difficulty adjustment. When several blocks hit the block size limit in a row, this is an indicator of high network activity. The difficulty can decrease in case of high network activity, which allows miners to produce more blocks within the same period of time. As a result, more transactions can be processed per time unit and the overall throughput is increased. This mechanism allows a DAG to dynamically handle varying network activity without sacrificing security.

### Block Ordering

As we have learned from looking at previous attempts to build Block DAG protocols, from an engineering perspective the main challenge is establishing order throughout all blocks in the DAG. Block ordering in our DAG will be based on the intersection of blocks. A valid transaction can be included in two different valid blocks. By looking at the "overlap" in transactions of a set of blocks, one can establish a final order throughout the set.

Our DAG protocol is still being researched and analyzed using theoretical methods. As soon as there are reliable results, a paper on the protocol will be published and this article will be updated.

## Summary

DAGs might be suited to become the successors of linear blockchains. They mostly differ in that a block in a DAG can reference more than one block at a time. This introduces a sort of two-dimensionality to the data structure.

A DAG can be constructed with entire blocks or individual transactions as nodes or vertices. While there are transaction DAGs live today, they suffer from a lack of decentralization as they need a central coordinator. Currently, there are no production-level Block-DAGs out there but a lot of research has gone into this type of construction. The main challenge from an engineering perspective is to order blocks in a linear fashion.

The first step towards a Block-DAG was introduced with the GHOST paper, where consensus is based on finding the subtree with the greatest combined PoW. 
The SPECTRE protocol introduced a block ordering mechanism based on recursive elections and satisfied the safety condition but cannot guarantee liveness.
PHANTOM was the next evolutionary step in Block-DAG research and the protocol allows for linear block ordering. This means the protocol can provide safety and liveness.

IOHK and Horizen are researching the use of a Block-DAG protocol, with a difficulty adjustment based on network activity and block production rate. Linear block ordering will be based on the overlap of transactions in blocks.

A lot of work needs to be done before we will see a first production-level Block-DAG, but the data structure is a promising candidate to solve the scalability issues with distributed ledger technologies in a trustless environment.
