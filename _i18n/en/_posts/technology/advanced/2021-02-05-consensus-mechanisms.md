---
layout: post
type: article
title:  "Consensus Mechanisms"
permalink: technology/advanced/consensus-mechanisms/
topic: technology
level: advanced
chapter: "How Does it work?"
---

The consensus mechanism of a blockchain allows the network to agree on a single version of history. The history in the case of a blockchain for cryptocurrencies is the order in which the transactions on the network happened.

When a network participant creates a transaction, the transaction is then broadcast to the entire network. Each node records the transaction and adds it to their version of the ledger. The different versions kept by different nodes might look slightly different. If you are in the US and broadcast a transaction the nodes that are closest to you will receive it earlier than a node based in Asia. What you get is a set of slightly different versions of the same transaction history. Eventually all network participants need to agree on a given order and this is what the consensus mechanism of a blockchain is for.

There are many approaches to achieving consensus in a distributed network but the two most commonly used ones are the Proof-of-Work and Proof-of-Stake algorithm. I like the generalization Demiro Massessi has formulated:

_"The main difference between consensus mechanisms is the way in which they delegate and reward the verification of transactions. (...) In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control."_ - Demiro Massessi

![Consensus](/assets/post_files/technology/advanced/consensus-mechanisms/consensus.jpg)

### Proof-of-Work - PoW

Miners are the ones who work to achieve consensus within the network in a Proof-of-Work blockchain, . They collect all the transactions that are forwarded to them through the peer-to-peer network and save them in their mempool (memory pool). While they collect incoming transactions, they verify if the transactions are valid according to the protocol and add them to the block they are currently working on. At the same time, they are working on solving a computationally expensive puzzle. We will cover what this puzzle actually is in the next article on mining.

The miner who solves the puzzle first broadcasts their block to the network and gets to extend the blockchain by one block. The miner receives newly created coins for his work and he gets to write the history of the blockchain for the past couple of minutes. In Horizen this happens on average every 2.5 minutes, in Bitcoin on average every 10 minutes. The chance of solving a block is directly proportional to the computational power a miner has. If a miner had 10% of the computing power of the network, he would solve every tenth block on average.

Computational power is the limited resource in a PoW based blockchain. It takes real-world resources, namely mining hardware and electricity, to mine a cryptocurrency. It is hard for one actor to control the majority of the network because there is an external cost involved in maintaining a PoW ledger. It is a highly competitive environment, in which each miner constantly wants to increase his share of the computational power or hash rate.

Miners require computational power because the problem they are trying to solve can only be solved through random guessing. PoW only works, because this problem is optimization-free and approximation-free. Optimization-free means there is no shortcut to trying out a large number of different solutions until you find a valid one. You cannot calculate a solution, you need to find it through a trial-and-error approach. Approximation-free means that it is not possible to have a part of the solution or to "be close to solving the problem". You either have a solution or not, making it a binary situation.

All nodes and miners verify the validity of a new block as soon as the block is discovered and broadcast to the network. If it is, they delete all the transactions that are now already recorded on the blockchain from their mempool, which is the storage that they use to collect transactions. They start working on the next block once their mempool contains transactions that haven't been mined. This is how the network agrees on a single version of the history of all transactions in a Proof-of-Work blockchain.

![POW](/assets/post_files/technology/advanced/consensus-mechanisms/POW.jpg)


**The Longest Chain Rule**

Now you can imagine a scenario in which two miners find a block at the same time. In this case, all the nodes and miners on the network save both versions of the block. This is a tie situation: both blocks are valid at this point, but somehow they must break the tie. We need a single version of the truth. The miners will start building on top of the block they received first. The tie is broken when the miners find the next block. The block of the two competing versions that is built on top of will become accepted as the single truth by all miners and nodes. The block that is disregarded is called an _orphan block_. This procedure of breaking a tie between to concurring blocks is called the Longest Chain Rule or Nakamoto Consensus.

If 80% of miners receive block A first and the other 20% block B, then the chances of block A getting extended are 80% (assuming all miners have the same computational power). In a way, the miners vote with their computational power on one version of the history. This aligns perfectly with our quote from the beginning of the article: _"In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control."_ - Demiro Massessi

![Longest chain](/assets/post_files/technology/advanced/consensus-mechanisms/longest_chain.jpg)

Proof-of-Work is one of the most secure consensus mechanisms. This mechanism is only feasible if there is a sufficient amount of computing power (_hash rate_) in the network. The Bitcoin protocol has proved how secure Proof-of-Work consensus is for over 10 years, given enough computing power on the network. We already talked about game theory in our article describing blockchain as a **protocol to transfer value** and in the article on **smart contracts**. Game theory "is the study of mathematical models of strategic interaction between rational decision-makers" according to Wikipedia. Miners are a group of rational decision makers in a PoW blockchain. The incentives, to act according to the rules of the mining protocol are embedded in the protocol itself. This is what makes a mature PoW blockchain so robust.

In our article on **mining**, we will talk about this process in more detail and you will learn what the puzzle that we are talking about in the context of PoW is.

### Proof-of-Stake - PoS

There are entities collecting transactions and creating new blocks In a Proof-of-Stake blockchain. The process, as well as the terminology in this setting, is a little different.

Whereas miners are mining blocks in PoW, _validators_ are _forging_ blocks in PoS. The chance of validating a new block is proportional to the stake a validator has. The stake refers to the amount of funds a validator is willing to lock up for the time they want to be a validator. To become a validator, a user needs to send funds in a special type of transaction. These funds are locked in a deposit called the _validator pool_ and only released if the validator acts according to the rules of the protocol. If the validator were to include fraudulent transactions in their block, they would lose their stake and the right to forge blocks.

The scarce resource in a PoS environment is the native currency of the blockchain. The more money you stake on a PoS blockchain, the higher your chances of validating a new block. In (most) Proof-of-Stake blockchains there is no block reward. The validators incentive to do work is solely based on collecting the transaction fees attached to the transactions.

![POS](/assets/post_files/technology/advanced/consensus-mechanisms/POS.png)

### Comparing POW and POS

Skeptics question the overall security of the Proof-of-Stake consensus model because it doesn't consume real-world resources to be a validator. There is no cost associated with building a new block on top of both blocks simultaneously when there are two conflicting blocks in a Proof-of-Stake blockchain. In PoW, there is a real-world cost (electricity) to every block that gets mined. It remains to be seen if PoS blockchains can provide the same security guarantees over an extended period of time that Bitcoin with its PoW blockchain has shown for over a decade now.

Another difference between PoW and PoS is that in a PoS blockchain "each validating node needs to be identifiable. The staked coins must be held accountable for any malicious acts." according to Massessi. In a PoW blockchain, there is no need to have miners or nodes identifiable. In fact, it is a feature, that if a node receives a block, there is no information included about who the miner of the block was. It might have been the node you just received the block from, or it might have been relayed several times before it reached you. It does not and it should not matter who the miner was. All that matters is that the solution to the puzzle and all transactions in the block are valid. You only need to trust the math and nobody else in order to trust Proof-of-Work.

Supporters of Proof-of-Stake refer to the high energy cost and limited throughput of PoW blockchains and thus consider the PoS consensus mechanism to be more sustainable. Right now there is no PoS blockchain available that can support its claims of being secure with a track record over an extended period of time. We have a precedent of a PoW blockchain running for over 10 years without any major security breach (Bitcoin). Time will tell if PoS blockchains can deliver on their promise of being equally secure while more scalable than PoW blockchains.

We will pick up on this discussion once again at the end of our article on mining. The arguments of the PoS and PoW community will make a more sense to you once you understand what the mining process is all about.

![Comparing POW and POS](/assets/post_files/technology/advanced/consensus-mechanisms/compare.jpg)

### Summary

In the Proof-of-Work method, miners are voting on a version of the history with the weight of the computational power they are controlling. In the Proof-of-Stake method, validators are voting on a version of the history with the weight of the funds or stake they own on the blockchain. While PoW has proven secure for over a decade now, the security of PoS blockchains remains to be proven. In our next article on mining, we will finally explain what the "puzzle" or "computationally expensive task" is, that we have been vaguely talking about up until now.


[https://medium.com/coinmonks/blockchain-consensus-and-fault-tolerance-in-a-nutshell-765de83b8d03](https://medium.com/coinmonks/blockchain-consensus-and-fault-tolerance-in-a-nutshell-765de83b8d03)
