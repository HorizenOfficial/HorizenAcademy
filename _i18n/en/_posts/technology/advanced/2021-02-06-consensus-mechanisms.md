---
layout: post
type: article
title: "Consensus Mechanisms"
description: "The consensus mechanism of a blockchain allows the network to agree on a single version of history. There are many approaches to achieving consensus."
permalink: /technology/advanced/consensus-mechanisms/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
---

The distributed network of a blockchain comprises many thousands of participants - some of them altruistic, others rational, and some of them malicious.

In this challenging environment, one has to solve a crucial problem to make digital money work:

_All nodes need to agree on a single history of transactions._

Without _consensus_ on who owns what, the network would be worthless.

The consensus mechanism of a blockchain allows the network to agree on a single version of history. The history in the case of a blockchain for cryptocurrencies is the order in which the transactions on the network happened. When a network participant creates a transaction, the transaction is broadcast to the entire network. Each node records the transaction and adds it to their version of the ledger.

The different versions kept by different nodes look slightly different. If you are in the _US_ and broadcast a transaction, the nodes that are closest to you will receive it earlier than a node based in _Asia_. What you get is a set of slightly different versions of the same transaction history. Eventually, all network participants need to agree on a given order and this is what the consensus mechanism of a blockchain does.

There are many approaches to achieving consensus in a distributed network but the two most commonly used are the **Proof of Work** (_PoW_) and **Proof of Stake** (_PoS_) algorithms. The generalization **_Demiro Massessi_** has formulated applies to both:

> “_The main difference between consensus mechanisms is the way in which they delegate and reward the verification of transactions. (…) In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control._” - _Demiro Massessi_

![Consensus](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/consensus_D.jpg)
![Consensus](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/consensus_M.jpg)

## Proof of Work - PoW

Miners are the entities who work to achieve consensus within the network in a **Proof of Work** blockchain. They collect all transactions that are forwarded to them through the [P2P network](https://academy.horizen.io/technology/advanced/a-peer-to-peer-p2p-network/) and save them in their _mempool_ (memory pool). While they collect incoming transactions, they verify if the transactions are valid according to the protocol and add them to the block they are currently working on. **At the same time, they are solving a computationally expensive puzzle.**

The miner who solves the puzzle first broadcasts her block to the network and gets to extend the blockchain by one block. The miner receives newly created coins for his work and he gets to write the history of the blockchain for the past couple of minutes. In

In **Horizen**, this happens every **2.5 minutes** on average, in **Bitcoin**, every 10 minutes. The chance of solving a block is directly proportional to the computational power a miner has. If a miner had **10%** of the computing power of the network, she would solve every tenth block on average.

Computational power is the limited resource in a PoW-based blockchain. It takes real-world resources, namely _mining hardware and electricity_, to mine a cryptocurrency. It is a highly competitive environment, in which each miner constantly wants to increase his share of the computational power or **hash rate**. This competition is what keeps the chances of a single actor controlling the majority of hash rate low.

Miners require computational power because the problem they are trying to solve can only be solved through random guessing. PoW only works, because this puzzle is **optimization-free** and **approximation-free**. _Optimization-free_ means there is no shortcut to trying out a large number of different solutions until you find a valid one.

You cannot calculate a solution, you need to find it through a trial-and-error approach. _Approximation-free_ means that it is not possible to have a part of the solution or to “be close to solving the problem”. You either have a solution or not, making it a binary situation.

![POW](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/POW_D.jpg)
![POW](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/POW_M.jpg)

All nodes and miners verify the validity of a new block as soon as it is discovered and broadcast. If it is valid, they add it to their local copy of the blockchain and delete all transactions that are now already recorded on the blockchain from their mempool.

The _mempool_ only ever contains valid but unconfirmed transactions. Then they start working on the next block and the process is repeated. This is how the network agrees on a single version of the history of all transactions in a Proof of Work blockchain.

### The Longest Chain Rule

Now you can imagine a scenario in which two miners find a block at almost the same time. In this case, all the nodes and miners on the network save both versions of the block.

**This is a tie situation**: both blocks are valid at this point, but somehow the tie must be broken - we need a single version of the truth.

The miners will start building the next block on top of the block they received first. The tie is broken when the miners find the next block. The block that is built on top of will become accepted as the single truth by all miners and nodes. The other block is disregarded and called an _orphan block_. This procedure of breaking a tie between two concurring blocks is called the **_Longest Chain Rule_** or _Nakamoto Consensus_.

If **80%** of miners receive **block A** first and the other **20% block B**, then the chances of **block A** getting extended are **80%**, assuming all miners have the same computational power. In a way, the miners vote with their computational power on one version of the history. This aligns perfectly with our quote from the beginning of the article.

![Longest chain](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/longest_chain_D.jpg)
![Longest chain](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/longest_chain_M.jpg)

Proof of Work is one of the most secure consensus mechanisms but it is only secure if there is a sufficient amount of hash rate on the network. The **Bitcoin** protocol has proven how secure Proof of Work consensus can be for _over 10 years_.

**Game theory** is the study of mathematical models of strategic interactions between decision-makers. Miners are rational decision-makers in a PoW blockchain. The incentives to act according to the rules of the mining protocol are embedded in the protocol itself, and outweigh the potential gains of behaving maliciously. This is what makes a mature PoW blockchain so robust.

## Proof of Stake - PoS

In a **PoS blockchain**, there are also entities collecting transactions and creating new blocks. The process, as well as the terminology in this setting, is a little different though.

Whereas miners are mining blocks in PoW, _validators_ are _forging blocks_ in **PoS**. The chance of validating a new block is proportional to the stake a validator has. The stake refers to the number of coins a validator is willing to lock up for the time they want to be a validator.

To become a validator, a user needs to send funds in a special type of transaction. These funds are locked in a deposit called the _validator pool_ and only released if the validator acts according to the rules of the protocol. If the validator were to include fraudulent transactions in his block, he would lose his stake and the right to forge blocks in the future.

The scarce resource in a PoS environment is the native currency of the blockchain. The more money you stake on a PoS blockchain, the higher your chances of validating a new block. In most Proof of Stake blockchains, there is no block reward. The validator’s incentive to achieve consensus is solely based on collecting the transaction fees attached to each transaction.

![POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/POS_D.jpg)
![POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/POS_M.jpg)

## Comparing POW and POS

Skeptics question the overall security of the Proof of Stake consensus model because it doesn’t consume real-world resources to be a validator. There is no cost associated with building a new block on top of both branches when there is a temporary fork. This is referred to as the **Nothing at Stake** attack.

In PoW, there is a real-world cost, electricity, to every block that gets mined. It remains to be seen if PoS blockchains can provide the same security guarantees over an extended period of time that Bitcoin with its PoW blockchain has shown for over a decade now.

![Comparing POW and POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/compare_D.jpg)
![Comparing POW and POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/compare_M.jpg)

Another difference between PoW and PoS is that in a PoS blockchain each validating node needs to be identifiable. The staked coins must be held accountable for any malicious acts. In a PoW blockchain, there is no need to have miners or nodes identifiable. In fact, it is a feature that if a node receives a block, there is no information included about who the miner of the block was.

It might have been the node you just received the block from, or it might have been relayed several times before it reached you. It does not and it should not matter who the miner was. All that matters is that the block and all its transactions are valid. You only need to trust the math in order to trust Proof of Work.

Supporters of Proof of Stake refer to the high energy cost and limited throughput of PoW blockchains and thus consider the PoS consensus mechanism to be more sustainable. Right now there is no PoS blockchain available that can support the claim of being secure over an extended period of time while storing significant value.

Time will tell if PoS blockchains can deliver on their promise of being equally secure while more scalable than PoW blockchains.

## Consensus in Distributed Systems

When you want to create a global, censorship-resistant supply of digital money, you need to build it on a _distributed system_. Using a distributed system removes the need for a central party being in control. _Distributed computing_ is an area of computer science that specifically studies distributed systems. Although such distributed systems have many advantages, they also come with their very own challenges - one is reaching _consensus_ among its participants.

We want to show you what a distributed system does, what challenges it poses, and how these challenges are addressed. Bitcoin introduced the Nakamoto consensus, an innovative method allowing all peers on the network to agree on a single version of the blockchain.

### What is a Distributed System?

Let us first define a distributed system:

A **distributed system** is a set of processes, distributed across many locations, trying to achieve a common goal through coordination and communication via messages.

Now let’s take this apart

The set of processes are different participants of the network. Each computer - or _node_ - on the network that runs the client is a single process within the distributed system. The system’s common goal can be to exchange files (e.g. _BitTorrent_) or to enable a digital form of money (e.g. _Horizen_ or _Bitcoin_). The latter is what we will focus on.

The processes are separated and executed independently on each computer, but the system acts as one whole. In order to achieve one cohesive system, individual parts need to communicate and update each other. This is done via _messages_ that, in the context of a blockchain, are mostly transactions transferring money.

But why do we need a distributed system to run a blockchain? Firstly, most blockchains strive for global participation, and therefore require a communication network that can operate globally. Additionally, distributed systems are more reliable as they don’t have single points of failure.

## Challenges in Distributed Computing

While peer-to-peer networks come with unique advantages, they also have challenges that need to be addressed.

**The following criteria need to be addressed:**

- **Concurrency** means that the individual processes, running on the nodes of the network, simultaneously execute the same program. Some level of coordination is necessary for them to reach their shared goal.
- There is no **global clock** that can keep all participants in sync. A mechanism that allows the synchronization of nodes is needed.
- An **independent failure** of the constituents may occur. Servers can crash or the internet connection can temporarily break down. A mechanism to make the system _fault-tolerant_ is needed.
- Messages need to be passed around, to achieve coordination and synchronization. A **broadcasting mechanism** is needed to facilitate the necessary communication between nodes.

We will mostly be concerned with the last two challenges: _making the system fault-tolerant and having the processes communicate efficiently._

### Building a Fault-Tolerant Distributed System

Failures can broadly be categorized into one of the following three cases:

**_Crashes, Omission or Byzantine behavior_**

- In a **crash-fail**, a component of the system stops working completely. This might be because of an internet outage or because a node operator is restarting their machine.
- **Omission** means that a node sends a message which is not received by its peers.
- Lastly, **Byzantine** failures refer to random behavior that can be guided by malicious intentions or simply malfunctioning clients. They are the hardest failures to address as they are random by definition. Any malicious actor trying to attack the system by deviating from the [protocol](https://academy.horizen.io/technology/advanced/a-protocol-to-transfer-value/) would be an example of a Byzantine failure. Handling Byzantine behavior is difficult because parties can be online or offline and can lie, coordinate or act arbitrarily.

![Node Failure](/assets/post_files/technology/expert/2.4.1-distributed-consensus/node_failures_D.jpg)
![Node Failure](/assets/post_files/technology/expert/2.4.1-distributed-consensus/node_failures_M.jpg)

The system should be fault-tolerant, in that it continues to work regardless of failures in its components. Depending on which type of failures it can handle, the distributed system can be classified as either **simple fault tolerant** or **Byzantine Fault-Tolerant**.

A _simple fault tolerant_ system handles the first two types of failures, crash and omission. A _Byzantine Fault-Tolerant_ system handles all three types of failures and keeps functioning even in the presence of malicious actors trying to disrupt it through Byzantine behavior.

### Accounting for Different Levels of Network Robustness

When designing a distributed system, one has to make certain assumptions about the components. When it comes to broadcasting mechanisms, spreading messages across the network, one has to account for the reliability of the underlying Peer-to-Peer Network.

The system needs to be robust enough to handle communication failure. If you assume a stable network, designing the system will be a lot easier, but the result won’t be very robust in the real world. If you base your system design on the assumption that certain components won’t work as planned, the system design becomes much more challenging, but the result will be robust - or even better - _antifragile._

There are three standard models for how well the message propagation works, which affect the system design to a great extent.

![Network Failure](/assets/post_files/technology/expert/2.4.1-distributed-consensus/network_failures_D.jpg)
![Network Failure](/assets/post_files/technology/expert/2.4.1-distributed-consensus/network_failures_M.jpg)

- When you assume **synchronous** message propagation, all messages are received within some fixed and known amount of time by the receiver.
- If message propagation is **partially synchronous**, messages are assumed to be delivered in bounded time, so within a fixed timeframe, but the bound is unknown.
- **Asynchronous** message delivery assumes that messages might never reach their destination, are duplicated, or are received in a different order than sent.

As you can imagine, building a distributed system, which relies on communication, on an asynchronous network poses the greatest challenge. Mastering this challenge will yield a highly robust network.

To recap: We want to use a distributed system for its resilience and lack of single points of failure. Our system needs to handle the individual components failing, through either crash, omission or Byzantine behavior.

It also needs to handle the communication in an unreliable environment, so at least a _partially synchronous_ network, where delivery time is bound, but unknown or - even better - an _asynchronous_ environment, where one cannot be sure if messages ever arrive.

### Different Assumptions Lead to Different Designs

Depending on which assumptions one uses to design a system, the result can display different levels of fault-tolerance. If the system assumes that all nodes either function and follow the protocol or crash-fail, the system is _Simple Fault-Tolerant_. Depending on the context, this might be a sufficiently safe assumption. In a permissioned network, e.g. within the production line of a factory, one rarely has to account for malicious behavior.

A system that can also handle the random and malicious behavior of a Byzantine participant, is called _Byzantine Fault-Tolerant_ (BFT). We want blockchains to be permissionless infrastructure for value transfer, which anybody can join at will. Hence, we have to account for malicious actors that will try to game the system. This means we do require a BFT consensus mechanism.

### Byzantine, Rational, and Altruistic Actors

Sometimes you might also hear the term **BAR-FT** - _Byzantine-Altruistic-Rational Fault Tolerance_. The _BAR_ part refers to the different actors one can find in an open network. Peers in a permissionless network can be one of three things: _Byzantine, rational, or altruistic._

- We defined **Byzantine behavior** earlier as random behavior that deviates from the protocol. This term is mostly used to describe the actions of an attacker.
- **Rational actors** will follow the protocol, as long as it is the most profitable strategy for them. If deviation from the protocol is more profitable, they will deviate to maximize their profit.
- _Altruistic_ or **honest actors** will do what is best for the network, even if a different strategy would mean a personal advantage for the individual.

As we said before, building a system under the assumption that communication between nodes works flawlessly makes things significantly easy. The same goes for assumptions on the network participants: assuming honest behavior for all peers will make system design a lot easier, but the system won’t last very long in the real world.

The holy grail of consensus mechanisms is to achieve consensus in a group that includes malicious actors, built on an unreliable network. Using the terminology we just introduced, this is described as building a _Byzantine Fault-Tolerant_ system in an _asynchronous environment_.

## Defining Consensus

Before we move on, we need to define what “achieving consensus” means. Although you might have an intuition for what consensus is, let’s create an exact definition so that we can evaluate potential candidates for a suitable consensus mechanism.

To establish a clear definition let’s start with a simplified blockchain - the **_finite state machine_**. It is a mathematical model of computation that removes the complexity of the blockchain and reduces the functionality to the core.

### The Replicated State Machine

A **_finite state machine_** starts in an initial state and can only be in a single state at any given time. A **_state transition_** happens in response to some external event. The _state transition logic_ defines how a new state is computed based on a given external event. An event, a message, or a transaction in this model is **atomic**: it either succeeds or fails. In the context of distributed systems, one speaks of replicated state machines when all nodes on the network are identical copies of one another.

A blockchain is similar to a replicated state machine in that it also starts with an initial state - the _genesis block_. The external events in a blockchain are mostly transactions between users. State transitions happen in intervals - one transition with each new block.

### The Safety and Liveness Criterion

Consensus among the individual nodes of a replicated state machine is defined via two properties: _liveness_ and _safety_.

- **Liveness** (or _termination_) means that all non-faulty nodes eventually compute a new state according to the state transition logic when an external event happens. In simple terms it means, the system doesn’t halt, and always reacts to events.
- **Safety** (or _agreement_) means that all non-faulty nodes transition to the same state after a given external event. This means, all nodes will be in sync eventually.

All non-faulty nodes reach a new state eventually (liveness), and all nodes agree on a new block (safety). With this new terminology, we can refine our definition of the holy grail of consensus mechanisms:

Building a _Byzantine Fault-Tolerant_ consensus mechanism that works in an _asynchronous environment_ and can guarantee _safety_ as well as _liveness_ is the holy grail in distributed computing.

Alright, now we know what consensus means and what kind of failures a robust consensus mechanism has to tolerate. But how do we get there?

## The Early Days of Distributed System Design

While one might think all this is cutting edge stuff from the 21st century, people have been studying distributed consensus for decades! A milestone in the exploration of distributed computing was a paper from 1985 written by **Fischer, Lynch and Paterson** with the title “[_Impossibility of Distributed Consensus with One Faulty Process_](https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf)”.

It concluded that a single faulty process can make it impossible to reach deterministic _consensus_ in an asynchronous environment. We already know that asynchronous refers to the network being unreliable. But what does deterministic mean in this context?

**Deterministic consensus** means every state transition has instant _finality_:

_When nodes compute a new state (liveness) and agree on it (safety) they can be 100% certain the new state is final and will never change again._

The findings of Fischer, Lynch and Paterson hold, meaning one has two options to reach Byzantine Fault-Tolerance:

_One can either assume a synchronous network or one can pursue a non-deterministic form of consensus._

### Paxos

One of the early attempts to reach distributed consensus was the **Paxos protocol family**. _Paxos_ achieves consensus in an asynchronous setting, but can not handle Byzantine behavior. Transitioning from one state to another requires a lot of communication overhead. The transition logic happens in three steps comprising a _preparation phase_, an _accepting phase_, and lastly a _learning phase_.

If a transition fails or halts, there is a timeout mechanism after which the system restarts. Because of the multi-step process of state transitions, Paxos is hard to understand and hard to implement.

### Raft

[**Raft**](https://raft.github.io/?source=post_elevate_sequence_page) is another consensus mechanism published in 2013. It set out to be easier to understand and implement than _Paxos_. It also uses timeouts in case a state transition fails and can therefore handle asynchronous environments. But just like Paxos, it fails to achieve consensus with Byzantine actors and is only simple fault-tolerant.

What we can learn from Paxos and Raft is that handling Byzantine behavior in an asynchronous environment is a hard problem.

![Paxos and Raft](/assets/post_files/technology/expert/2.4.1-distributed-consensus/paxos-raft_D.jpg)
![Paxos and Raft](/assets/post_files/technology/expert/2.4.1-distributed-consensus/paxos-raft_M.jpg)

### The Byzantine Generals Problem

The challenge of handling Byzantine actors is widely researched. It is referred to as the [**_Byzantine Generals Problem_**](https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf) in a paper by **_Lamport, Shostak and Pease_**. A major contribution of their work was precisely defining the number of Byzantine Nodes a system can handle while still being able to reach consensus.

The result is less than a third of all nodes _n_: \\(\frac{(n-1)}{3}\\)

![Calculating the Maximum Number of Byzantine Actors](/assets/post_files/technology/expert/2.4.1-distributed-consensus/maximum-byzantine-actors_D.jpg)
![Calculating the Maximum Number of Byzantine Actors](/assets/post_files/technology/expert/2.4.1-distributed-consensus/maximum-byzantine-actors_M.jpg)

The argumentation for getting this result is straight-forward:

1. If **_x_** is the number of _Byzantine nodes_, the system must work in case they are unresponsive, so with **_(n-x)_** nodes.
2. Now it is possible that the unresponsive nodes suffered from crash-faults and all **_x_** Byzantine nodes are still live. In this case **_(2x)_** nodes are either not responsive or Byzantine.
3. Because a majority of honest nodes is required to achieve consensus, we need a total of **_n = 3x + 1_** nodes, which in turn means a maximum of \\(x = \frac{(n-1)}{3}\\) nodes can be Byzantine for the system to keep working.

What we have learned from looking at the Byzantine Generals problem is that the threshold for the maximum share of Byzantine participants on the network is rather low, clocking in at one third of the total node count.

### DLS

When we talked about the different assumptions for the network reliability, we mentioned the _partially synchronous_ model, where messages are assumed to be delivered in **bounded time**, but the _bound_ is unknown. This model was introduced with the [_DLS algorithm_](https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf) after **Dwork, Lynch and Stockmeyer**. It also introduced the terms liveness and safety that we already talked about. Liveness is the property of the system continuing to work in case of failures, while safety is the agreement of the network on a single state.

The _DLS algorithm_ contributed greatly to the development of consensus research, in that it established a new network model (partial synchrony) and achieved safety and liveness in a Byzantine environment. However, it failed to do so in an asynchronous setting. It also came with a non-starter that prevented it from being implemented in a meaningful way.

It assumed a synchronized clock between all nodes, an assumption that is not realistic in a permissionless system.

![Dwork, Lynch and Stockmeyer Consensus](/assets/post_files/technology/expert/2.4.1-distributed-consensus/dls_D.jpg)
![Dwork, Lynch and Stockmeyer Consensus](/assets/post_files/technology/expert/2.4.1-distributed-consensus/dls_M.jpg)

### pBFT - Practical Byzantine Fault-Tolerance

In 1999, yet another consensus algorithm was published - [_practical Byzantine Fault-Tolerance_](http://pmg.csail.mit.edu/papers/osdi99.pdf) (pBFT) by **Castro and Liskov**.

It got pretty close to achieving the final goal:

_handling malicious actors in an unreliable network while ensuring safety and liveness._

![Practical Byzantine-Fault Tolerance](/assets/post_files/technology/expert/2.4.1-distributed-consensus/pBFT_D.jpg)
![Practical Byzantine-Fault Tolerance](/assets/post_files/technology/expert/2.4.1-distributed-consensus/pBFT_M.jpg)

pBFT can guarantee safety under all circumstances (assuming a maximum of \\(x = \frac{(n-1)}{3}\\) Byzantine nodes), but it relies on the synchronous model to achieve liveness. Put differently, in an unreliable communications network the system might halt.

**pBFT also suffers from scalability issues:**

The number of messages needed to keep the network in sync grows exponentially with the number of nodes. It is therefore impractical for public blockchains.

## Changing the Definition of Consensus

The problem of achieving consensus reliably has obviously been solved, otherwise we wouldn’t be here. But how did Satoshi do this?

The important leap was moving away from a deterministic definition of consensus. While some might argue this is moving goalposts, in practice it is what makes public blockchains work - _a non-deterministic definition of consensus_.

Using determinism means, that each new state is decided on by all nodes in a binary fashion: _correct or false._ The consensus mechanism therefore had nodes agreed on some fixed new state.

In the non-deterministic model, the consensus mechanism lets all nodes agree on the probability of a new state being the global state. Remember that a new state in a blockchain is reached when a new block is added to the chain. When a new, valid block is proposed, nodes can be fairly certain that it will stay valid, but they do not know for sure. With each additional state transition - in our context each new block or confirmation - the probability of the state being _safe_ slowly but surely approaches **1**.

![Nakamoto Consensus](/assets/post_files/technology/expert/2.4.1-distributed-consensus/nakamoto_consensus_D.jpg)
![Nakamoto Consensus](/assets/post_files/technology/expert/2.4.1-distributed-consensus/nakamoto_consensus_M.jpg)

It is important to note, that the _Nakamoto Consensus_ cannot provide finality. Although the probability of a block being reversed approaches **0** the more confirmations it has, it _never actually equals_ **zero**.

In practice, this property leads to the receiver of a transaction waiting for a few confirmations, until the funds are considered received. It also limits the possible approaches to scalability. **_Sharding_** is an approach from the traditional database world where the data is partitioned into several _shards_. Without finality, this tactic becomes infeasible.

### Nakamoto Consensus

But wait, _how does the Nakamoto consensus actually achieve consensus?_ In the mechanisms we outlined above you can break down the process of achieving consensus to a **_proposer_** suggesting a state transition and a group of **_acceptors_** coordinating to either accept or decline the proposed state. This coordination displays characteristics of a ballot. A shortened _Demiro Massessi_ quote reads:

> _“In one way or another, […] consensus algorithms boil down to some kind of vote […].” - Demiro Massessi_

Nakamoto consensus with [Proof-of-Work](https://academy.horizen.io/technology/expert/proof-of-work/) (PoW) does not require a leader (proposer) selection of any kind. Anybody is free to start mining and thereby proposing blocks. The consensus is based on who can find a nonce, that [hashed](https://academy.horizen.io/technology/advanced/hash-functions/) together with the proposed block header, yields a block hash below the current target value. The chance of finding such a nonce is proportional to the relative hash power - or computing power - a given miner controls. This means state transitions are voted on with computational power, and the state transition logic is defined by the target a valid block hash has to meet.

At this point, we would like to quote Demiro in full:

“The main difference between consensus mechanisms is the way in which they delegate and reward the verification of transactions. […] In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control.” - Demiro Massessi

The limited resource in the case of the traditional Nakamoto Consensus using Proof-of-Work is computing power.

The genius part was adding an incentive system on top of the consensus mechanism. Participants spend real world resources (computations = electricity) on achieving consensus within the network. By rewarding the miner of each block with the block subsidy, there is an incentive for rational actors to perform this task. Once the native currency of the network has a value greater than zero, the network can pay for its own maintenance without anybody being in charge.

### PoW + Longest Chain Rule = Consensus

The consensus mechanism is composed of two parts. One is the [Proof-of-Work](https://academy.horizen.io/technology/expert/proof-of-work/) component that facilitates a type of voting and is _Sybil-resist_. The other part is the **longest chain rule** or _heaviest chain rule_, both describing the chain with the most cumulative computational work.

The longest chain rule is applied in case two miners find valid blocks at roughly the same time - a tie because both blocks are valid according to the [protocol](https://academy.horizen.io/technology/advanced/a-protocol-to-transfer-value/).

The other miners start building on the block they received first, but keep the second candidate in memory. Different miners can have different views on which block came first, depending on their geographical location and their connectivity in the network graph. The tie is broken once the next block is found.

![Longest Chain Rule](/assets/post_files/technology/expert/2.4.1-distributed-consensus/longest_chain_D.jpg)
![Longest Chain Rule](/assets/post_files/technology/expert/2.4.1-distributed-consensus/longest_chain_M.jpg)

The resulting chain of state transitions - _the blockchain_ - does not only entail the chronological order of events, but also proves that it came from the largest pool of computing power.

Nakamoto Consensus not only attempts to solve the Byzantine Generals Problem, but also raises the bar for Byzantine tolerance. Instead of being able to handle roughly a third of participants being Byzantine, it can handle almost half of the network being malicious.

Sometimes, this is referred to as (**2x + 1) resilience** in the case of _Nakamoto consensus_ vs. **(3x + 1) resilience** in _most other cases_. This share is defined via the amount of computational power rather than nodes on the network.

PoW and its relatives can be seen as **Sybil-resistance mechanisms**. In a _Sybil Attack_, a malicious party creates a large number of centrally controlled identities and tries to achieve certain, mostly malicious, goals by exerting influence through these fake identities. Online voting is the most intuitive example of a situation, where many fake identities can be used to game the results.

Sybil-resistance mechanisms prevent this by tying an entity's voting power to a scarce resource that is harder to obtain than fake user-accounts or IP-addresses. In the case of PoW, this scarce resource is computing power. The longest chain rule is the “actual consensus mechanism” that has nodes agree on a single version of truth in case several candidate versions exist.

## Summary

In **Proof of Work** consensus, _miners_ are voting on a version of the history with the weight of the computational power they control. In **Proof of Stake**, _validators_ are voting on a version of the history with the amount of coins they stake on the blockchain. While **PoW** has proven secure for over a decade, the security of **PoS** blockchains remain to be proven.

We looked at the challenges of achieving consensus in a distributed setting. The consensus mechanism has to tolerate malicious actors (**_Byzantine fault tolerance_**) and it needs to handle a network providing unreliable communication (_asynchronous network_).

We defined _liveness_, as the property of all nodes eventually computing a new state based on external events. Put differently, the system doesn’t stall. In the context of blockchains, liveness means that all valid transactions will eventually end up in the blockchain. This is closely related to the property of _censorship resistance_.

Next we defined _safety_ as all non-faulty nodes agreeing on new states. We learned that _Nakamoto Consensus_ does not provide finality, but rather an increasing probability of a state being final with a growing number of confirmations. Therefore safety is closely related to the immutability property of blockchains. With every new block, a blockchain demonstrates liveness, and safety is achieved after a few confirmations.

Nakamoto Consensus is brilliant in that it defined consensus in a novel way: _non-deterministic_. A new block isn’t necessarily agreed upon by all nodes at the time it is mined, but the more blocks are built on top of it, the more certain all participants can be that it will stay.
