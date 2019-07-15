---
layout: post
type: article
title: "Consensus in Distributed Systems"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/consensus-in-distributed-systems/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
published: false
---

## Consensus in Distributed Systems

When you want to create a system for a global, censorship resistant digital money, there is no way around building it on a *distributed system*. Only this design choice allows you to build a strong network or system, without any central party being in control. *Distributed computing* is an area in *computer science* that specifically studies distributed systems. Although such distributed systems have many advantages, they also come with their very own challenges - one of them being reaching *consensus* among its participants.

In this article we want to show you what a distributed system does, what challenges it poses, and how these challenges have been addressed. Bitcoin introduced an innovation to the area of distributed computing, namely the *Nakamoto consensus* that has all peers on the network agree on a single version of the blockchain.

I'm not sure if one ever fully understands consensus. There are so many intricacies and it's as multidisciplinary as it can get. This is not meant to discourage you from trying to understand it. On the contrary, it is meant to encourage you to learn about it and not to get frustrated if it feels like a lot - or evene too much at times. We'll do our best to provide you with a good basis to understand distributed systems and distributed consensus over the next few minutes.

### What is a Distributed System?

Let us first define what a distributed system is. 

> A distributed system is a set of *processes*, distributed across many locations, trying to achieve a common goal through coordination and communication via *messages*. 

Ok, now let's take this apart, shall we? 

The set of *processes* are the different participants of the network. Each computer - or *node* -  on the network that is running the *client* is a single *process* within the distributed system. The gommon goal can be facilitating a system to exchange files or to enable a global digital form of money. The latter is what we will focus on. The processes are separated and are executed on each computer independently, but the system is described as one and acts as a whole. In order to behave that way, the individual parts have to communicate and update each other on recent events. This is done via *messages* that in the context of a blockchain are mostly transactions transferring money, or new blocks.

But why do we need a distributed system to run a blockchain? Firstly, by it's very nature it should enable people across the globe to interact with it. Therefore a communication network that connects the different participants globally is a fundamental requirement. Additionally, distributed systems are more reliable as they don't have a single point of failure. 

### Challenges

So we need a distributed system for a global, digital money. While they come with advantages that no other type of underlying system can provide, they also have their very own challenges that need to be addressed:

- *Concurrency* means that the individual processes, the nodes of the network, simultaneously execute the same program. Some level of coordination is necessary for them to reach their shared goal.
- Ther is no *global clock* that can keep all participants in synch. A mechanism to synchronize nodes is needed.
- An *independent failure* of the constituents may occur. Computers can crash or their internet connection can temporarily go down. A mechanism to make the system *fault-tolerant* is needed.
- Messages need to be passed around, to achieve coordination and synchronization. A *broadcasting mechanism* is needed to facilitate the necessary communication between nodes.

We will mostly be concerned with the last two challenges: making the system fault-tolerant and have the system handle different models of passing messages around. Failures can be broadly categorized into on of the following three cases: *crashes*, *omission* or *byzantine behavior*.

- In a *crash-fail*, a component of the systems stops working completely. This might be because of an internet outage or simply, because a node operator is restarting their machine.
- *Omission* means that a node sends a message, which is not received by its peers for some reason.
- Lastly, *Byzantine* failures are the hardest to address. They refer to radom bahavior that can be guided by malicious intentions or simply malfunctioning clients. Any malicious actor trying to attack the system by deviating from the [*protocol*] in one way or another would be an example of a Byzantine failure. This could happen through not forwarding or altering messages, or any other means.

+++ Graphic node_failures

The system should be fault tolerant, in that it continues to work regardless of the different types of failures occuring or not. Depending on which type of failures it can handle, it can be classified as either *simple fault tolerant* where it handles the first two failures, crash and omission, or *Byzantine Fault-Tolerant* where it can handle all three types of failures.

When designing the system, one has to make certain assumptions on the different components. When it comes to [*broadcasting mechanisms*] or *message propagation protocols* one has to account for the reliability of this moving part of the [Peer-to-Peer Network]. Ideally, you want your system to be robust, even if communication fails once in a while. If you assume everything will always work just fine, designing the system will be a lot easier, but the result won't be very robust out in the real world. If you base your system design on the assumption that certain components won't work as planned, the system design becomes much more challenging, but the result will be robust - or even better - [*antifragile*](https://en.wikipedia.org/wiki/Antifragile).

There are three models for how well the message propagation works, which effect the system design to a great extent.

- When you assume *synchronous* message propagation, all messages are received within some fixed and known amount of time by the receiver. 
- If message propagation is *partially synchronous* messages are assumed to be delivered in *bounded time*, so within a fixed timeframe, but the *bound* is unknown.
- *Asynchronous* message delivery assumes that messages might never reach their destination, are duplicated or received in a different order than sent. 

+++ graphic network failure

As you can imagine, building a distributed system (which relies on communication!) around an asynchronous message passing model poses the greatest challenge. But if one manages to make the system work based on this assumption, it will be highly robust!

To recap: We want to use a distributed system for its resilience and lack of single points of failure. Our System needs to handle the individual components failing, through either crash, omission or Byzantine behavior. It also needs to handle the communication in an unreliable environment, so at least a *partially sychronous* message propagation, where delivery time is bound, but unknown or - even better - a  *asynchronous* environment, where one cannot be sure if messages ever arrive, or in which order they will arrive.

#### Different tiers of "Fault-Tolerance"

* (Simple) Fault-Tolerance: Nodes work or crash
* Byzantine Fault-Tolerance: Nodes may display byzantine or malicious behavior but the system still achieves it's goal
* Byzantine-Altruistic-Rational Fault-Tolerance (some count it in, but addressed via incentives rather than system design)

consensusnode_failure

### Replicated State Machine

Many types of hardware and Software architectures for distributed computing. Most common model: *Replicated State Machine*

- defined by what it does, not by how it is achieved (?)
- deterministic, each state transition has finality
- TX is atomic operation. It either succeeds or fails.
- transactions/messages cause state transition defined by *state transission logic*
- each process computes new state
- all of them must agree (safety)
- must accept state transitions (linevess)
- challenges from above apply

Definition of consensus: *Agreement* (same state) and *Termination* (state transition eventually happens).
Sometimes also validity: all processes decide on a value that is valid given the process’s input value

**Byzantine Tolerant consensus mechanism, that works in an asynchronous environment, and can guarantee agreement/safety as well as termination/liveness is holy grail in distributed computing**

"In their 1985 paper “Impossibility of Distributed Consensus with One Faulty Process,” researchers Fischer, Lynch, and Paterson (aka FLP) show how even a single faulty process makes it impossible to reach consensus among deterministic asynchronous processes."

Approach 1: change synchrony assumptions
Approach 2: use non-determinism

#### Approach 1: change synchrony assumptions

- Paxos/Raft: consensus in asynchronous environment (through timeout and a sort of restart) but not Byzantine.
- DLS: Byzantine and in *partially synchronous* environment

DLS introduced safety/liveness

Safety if all non-faulty processes agree on the same output/agrees on a new global state, system stays in synch. A violation means more than one valid chain. Chain split/network segregation

Liveness simple explanation: system doesn't stall. Every non-faulty process eventually decides on some output/eventually computes a new state.

#### pBFT

https://blockonomi.com/practical-byzantine-fault-tolerance/
http://pmg.csail.mit.edu/papers/osdi99.pdf

"It requires a lot of communication overhead between participants, so it is only practical for small groups." - on consensus

"Since the participants must be identified, pBFT is not open and permissionless, but rather a permission based system."

Asynchronous and Byzantine Fault Tolerant for security
Liveness only under sychrony assumptions

#### Approach 2: use non-determinism

Instead of using sychrony assumptions one can define consensus differently. 

moving goalposts?

Consensus not defined in a deterministic, in this case binary fashion: agreed or not.

Rather high probability when state transition happens. Every additional state transition increases confidence.

before the consensus mechanism had nodes agreed on some fixed new state.
now the consensus mechanism lets all nodes agree on the probability of new state being the global state.

### Nakamoto Consensus

PoW + longest chain rule.

State transition voted on with hash power. 

PoW actually a sybil resistance mechanism and a means to keep block production time constant.
sybil resistance to add cost to creating byzantine identities. One can have many, but little computing power.
block time in a range so network synch can be achieved with overwhelming likelihood.

"PoW and it's realtives are actually Sybil-resistance mechanisms. In a **Sybil Attack**, a malicious party creates a large number of centrally controlled (online) identities and tries to achieve certain, mostly malicious, goals by exerting influence through these fake identities. Online voting is the most intuitive example of a situation, where many fake identities can be used to game the results. \\

Sybil-resistance mechanism prevent this by tying an entities voting power to a scarce resource, that is harder to obtain than fake user-accounts or IP-addresses. \\"


Longest chain rule actual consensus mechanism that has nodes agree on a single version of truth. Actually not longest but heaviest chain rule.

This simple mechanism only sufficient, because PoW ensures network sink and Sybil Resistance.

Longest chain, proves sequence of blocks and came from the largest pool of CPU power. Byzantine tolerance from (n-1)/3 to (n-1)/2.



for POW article: PoW brilliant for a number of reasons..

- Sybil resistance
- together with the simple longest chain rule consensus in byzantine environment under asynchronous message propagation assumption.
- incentive system, rational players act honestly. best payoff. Game theory. reg BAR Fault Tolerant.
- Real world resource consumed, adds external cost, even better alignment of incentives.

### For Blockchains

While we kept it more general before, let's apply some more of this to blockchains. Processes become nodes, messages transactions and states become blocks. 

\item liveness 2: Liveness means that all transactions originating from an honest account will eventually end up in the blockchain of all other honest participants and an adversary cannot perform a selective denial of service attack against honest account holders. This is closely related to the property of censorship resistance.

\item persistence 2: Persistence states that once a transaction is more than $k$ blocks "deep" into the blockchain of a single honest participant, then it will also be included in all other honest participants versions of the blockchain with overwhelming probability and therefore have a permanent position in the ledger. Persistence is closely related to the property of immutability (if not the same).\footnote{kubyshka paper}

The key takeaway from this list should be the following: You get **immutability** of data only if there is a **strong consensus mechanism** in place that makes the network participants decline invalid blocks, otherwise a blockchain is only **tamper-evident**. We will come back to this in protocol and consensus article.\\

\item liveness (me): results from miners accepting new blocks and mining on top of them. because PoW approximation free, doesn't alter their chance of finding valid block. there is no "being close to" solving a block.

\item security (me): results from aggregate computational work not easily being caught up with after a few confirmations.

"Every 10 minutes (BTC) liveness is demonstarted and every $k \cdot 10$ minutes safety (prob. persistence is demonstarted" (?) \textbf{think about this one}\\




FR

https://hackernoon.com/consensus-mechanisms-as-detailed-and-concise-as-possible-b3da79f85f66



