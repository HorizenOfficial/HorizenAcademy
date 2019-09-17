---
layout: post
type: article
title: "Consensus in Distributed Systems"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/consensus-in-distributed-systems/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

## Consensus in Distributed Systems

When you want to create a system for a global, censorship resistant digital money, there is no way around building it on a *distributed system*. Only this design choice allows you to build a strong network or system, without any central party being in control. *Distributed computing* is an area in *computer science* that specifically studies distributed systems. Although such distributed systems have many advantages, they also come with their very own challenges - one of them being reaching *consensus* among its participants.

In this article we want to show you what a distributed system does, what challenges it poses, and how these challenges have been addressed. Bitcoin introduced an innovation to the area of distributed computing, namely the *Nakamoto consensus* that has all peers on the network agree on a single version of the blockchain.

I'm not sure if one ever fully understands consensus. There are so many intricacies and it's as multidisciplinary as it can get. This is not meant to discourage you from trying to understand it. On the contrary, it is meant to encourage you to learn about it and not to get frustrated if it feels like a lot - or evene too much at times. We'll do our best to provide you with a good basis to understand distributed systems and distributed consensus over the next few minutes.

### What is a Distributed System?

Let us first define what a distributed system is. 

A distributed system is a set of *processes*, distributed across many locations, trying to achieve a common goal through coordination and communication via *messages*. 

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

![Node Failure](/assets/post_files/technology/expert/2.4.1-distributed-consensus/node_failures_D.jpg)

The system should be fault tolerant, in that it continues to work regardless of the different types of failures occuring or not. Depending on which type of failures it can handle, it can be classified as either *simple fault tolerant* where it handles the first two failures, crash and omission, or *Byzantine Fault-Tolerant* where it can handle all three types of failures.

When designing the system, one has to make certain assumptions on the different components. When it comes to [*broadcasting mechanisms*] or *message propagation protocols* one has to account for the reliability of this moving part of the [Peer-to-Peer Network]. Ideally, you want your system to be robust, even if communication fails once in a while. If you assume everything will always work just fine, designing the system will be a lot easier, but the result won't be very robust out in the real world. If you base your system design on the assumption that certain components won't work as planned, the system design becomes much more challenging, but the result will be robust - or even better - [*antifragile*](https://en.wikipedia.org/wiki/Antifragile).

There are three models for how well the message propagation works, which effect the system design to a great extent.

- When you assume *synchronous* message propagation, all messages are received within some fixed and known amount of time by the receiver. 
- If message propagation is *partially synchronous* messages are assumed to be delivered in *bounded time*, so within a fixed timeframe, but the *bound* is unknown.
- *Asynchronous* message delivery assumes that messages might never reach their destination, are duplicated or received in a different order than sent. 

![Network Failure](/assets/post_files/technology/expert/2.4.1-distributed-consensus/network_failures_D.jpg)

As you can imagine, building a distributed system (which relies on communication!) around an asynchronous message passing model poses the greatest challenge. But if one manages to make the system work based on this assumption, it will be highly robust!

To recap: We want to use a distributed system for its resilience and lack of single points of failure. Our System needs to handle the individual components failing, through either crash, omission or Byzantine behavior. It also needs to handle the communication in an unreliable environment, so at least a *partially sychronous* message propagation, where delivery time is bound, but unknown or - even better - a  *asynchronous* environment, where one cannot be sure if messages ever arrive, or in which order they will arrive.

#### The Different Levels of "Fault-Tolerance"

Depending on which assumptions one uses to design a system, the result can display different levels of fault-tolerance. If the system assumes that all nodes either function and follow the protocol or crash-fail, the system is *Simple Fault-Tolerant*. Depending on the context, this might be a sufficiently safe assumption. In a permissioned network, e.g. with the production line of a factory, one does not have to account for malicious behavior.

A system that can also handle the random and malicious behavior of a *byzantine* participant, is called *Byzantine Fault-Tolerant*. Because we want blockchains to be permissionless so that anybody can join the network at will, we have to account for malicious actors that will try to game the system. This means we do require a BFT consensus mechanism.

Sometimes you might also hear the term BAR-FT - *Byzantine-Altruistic-Rational Fault Tolerance*. Participants in a permissionless network can be one of three things: 

- byzantine or malicious
- altruistic or honest
- or rational 

Rational means that they will follow the protocol, as long as it is the most profitable strategy for them. If deviation from the protocol is more profitable for them, they will deviate. In the context of blockchains this is addressed via the incentive design, rather then the consensus mechanism. The two are closely related and connected and therefore can't be viewed in isolation.

As we said before, building a system under the assumption that communication between nodes works flawlessly makes things significantly more easy. Therefore, the level auf fault-tolerance a system achieves has to be evaluated based on the underlying assumption for the message propagation model. 

The holy grail of consensus mechanisms is to achieve consensus in an environment with malicious actors and an unreliable message propagation protocol. Using the terminology we just introduced, this means achieving consensus in a  *Byzantine Fault-Tolerant* system in an *asynchronous* environment.

### What is Consensus?

Before we move on it is time to precisely define what "achieving consensus" actually means. Although most of you might have an intuition for what consensus is by now, from this point onwards it will be handy to have an exact definition, so that we can evaluate potential candidates for a suitable consensus mechanism objectively. To establish a clear definition it helps to introduce a simplified model of a blockchain - the *finite state machine*. It is a mathematical model of computation. It does does away with the complexity of the blockchain and reduces the functionality to the core.

A *finite state machine* starts in a *initial state* and can be in one state at any given time. A state *transition*  happens in response to some external event. The *state transition logic* defines how a new state is computed based on a given external event. An event, a message or a transaction is an *atomic event*: It either succeds, or it fails completely. In the context of distributed systems, one speaks of a *replicate state machine* if all nodes on the network are ident copies of each other.

Consensus between the different nodes of a replicate state machine can be defined via two properties: *liveness* and *safety*.

- *Liveness* (or *termination*) means that all non-faulty nodes eventually compute a new state according to the state transition logic when an external event happens. In simple terms it means, the system doesn't halt and reacts to events.

- *Safety* (or *agreement*) means that all non-faulty nodes transition to the same state after a given external event. This means, all nodes will be in synch eventually. 

A blockchain can be viewed a replicate state machine in that it also starts with an initial state - the genesis block. The external events in a blockchain are transactions between users. State transitions happen in intervals - one transition with each new block. All non-faulty nodes reach a new state eventually (liveness), and all nodes agree on a new block (safety). With this new terminology, we can refine our definition of the holy grail of consensus mechanisms:

**Building a Byzantine Fault-Tolerant consensus mechanism, that works in an asynchronous environment, and can guarantee safety as well as liveness is the holy grail in distributed computing.**

Alright, now we know what consensus means and what kind of failures a robust consensus mechanism has to tolerate. But how do we get there?

### Designing Consensus Mechanisms

While one might think all this is cutting edge stuff from the 21st century, people have been studying distributed consensus for decades! A milestone in the exploration of distributed computing was a paper from 1985 written by Fischer, Lynch and Paterson with the title “*Impossibility of Distributed Consensus with One Faulty Process*”.

It concluded that a single faulty process can make it impossible to reach *deterministic consensus* in an asynchronous environment. We already know that asynchronity refers to the network being unreliable in terms of consistent message propagation. But what does deterministic mean in this context?

Deterministic consensus means every state transition has instant finality. When nodes compute a new state (liveness) and agree on it (safety) they can be 100% certain that this state is final and won't change anymore.

#### Assuming Synchrony

The findings of Fischer, Lynch and Paterson hold, so one has two options to reach Byzantine Fault-Tolerance in a distributed system: One can use synchrony assumptions or one can follow a non-deterministic approach to consensus. In first attempts to solve the dilemma, researcherd tried to work with synchrony assumptions.

##### Paxos

One of the early attempts to reaching distributed consensus was the [*Paxos* protocol family](https://en.wikipedia.org/wiki/Paxos_(computer_science)?source=post_elevate_sequence_page). Paxos achieves consensus in an asynchronous settings, but can not handle Byzantine behavior. Transitioning from one state to another requires a lot of communication overhead. The transition logic happens in three steps comprising a preparation phase, and accepting phase, and lastly a learning phase.

If a transition fails or halts, there is a timeout mechanism after which the process restarts. Because of the multi-step process of state transitions, Paxos is hard to understand as well as hard to implement.

##### Raft

[*Raft*](https://raft.github.io/?source=post_elevate_sequence_page) was another consensus mechanism published in 2013. It set out to be more easy to understand and implement than Paxos. It also uses timeouts in case a state trasition fails and can therefore handle asynchrocnous environments. But just like Paxos it fails to achieve consensus with Byzantine actors and is only simple fault-tolerant. Handling Byzantine bahivor is so much more difficult, because parties can not only be live or offline, but can also lie, coordinate or act arbitrarily.

The challenge of handling Byzantine actors is widely researched. It is referred to as [*The Byzantine Generals Problem*](https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf?source=post_elevate_sequence_page) in a paper by Lamport, Shostak and Pease. A major contribution of their work was precisely defining the number of Byzantine Nodes a system can handle and still reach consensus. This calculation comes down to less than a third of the nodes: *(n-1)/3* where *n* is the total number of nodes.

The argumentation is easy. If *x* is the number of byzantine nodes, the system must work if they are unresponsive, so with *(n-x)* nodes. But it's possible that the unresponsive nodes suffered from crash-faults and all *x* byzantine nodes are live. In this case *(2x)* nodes are not unresponsive or byzantine. Because a majority of honest nodes is required to achieve consensus we need a total of *n = 3x + 1* nodes, which in turn means *(n-1)/3* nodes can be byzantine.

What we have learned from looking at Paxos, Raft and the Byzantine Generals problem is that handling byzantine behavior in a asynchronous environment is a hard problem. Furthermore, we learned that the threshold for the maximum share of byzantine participants on the network is rather low at one third of the total node count.


++++ graphic paxos_raft

##### DLS

When we talked about the different assumptions for the network reliability, we mentioned the *partially synchronous* model, where messages are assumed to be delivered in *bounded time*, but the *bound* is unknown. This model was introduced with the [*DLS algorithm*](https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf) after Dwork, Lynch and Stockmeyer. It also introduced the terms liveness and safety that we already introduced. Liveness is the property of the system working and not coming to a halt in case of failures, while safety was the agreement of the network on a single current state.


The DLS algorithm contributed greatly to the development of consensus research, in that it established a new network model (partial synchrony) and achieved safety and liveness in a byzantine environment. It however failed to do so in an asynchronous setting and it also came with a non-starter that led to it never being implemented in a meaningful way. It assumed a synchronized clock between all nodes, an assumption that is just not realistic in a permissionless system.

![Dwork, Lynch and Stockmeyer Consensus](/assets/post_files/technology/expert/2.4.1-distributed-consensus/dls_D.jpg)

#### pBFT

In 1999 yet another consensus algorithm was published - [*practical Byzantine Fault-Tolerance*](http://pmg.csail.mit.edu/papers/osdi99.pdf) (pBFT) by Castro and Liskov. It got pretty close to achieving the end goal: handling malicious actors in an unreliable communication network while ensuring safety and liveness. We used the distinction between *consensus* and *liveness and safety* deliberately in this case. While pBFT can guarantee safety under all circumstances (assuming a maximum of *(n-1)/3* byzantine nodes), it relies on the synchronous model to achieve liveness. Put differently, in an unreliable communication network the system might halt. pBFT also suffers scalibility issues: the number of messages needed to keep the network in synch grows exponentially with the number of nodes. It is therefore impractical for public blockchains.

++++ Graphic pBFT

### Changing the Definition of Consensus

Obviously the problem of achieving consensus reliably has been solved, otherwise we wouldn't be here. But how did Satoshi do this?

The important leap was moving away from a deterministic definition of consensus. While some might argue this sounds like moving goalposts, in practice this is what makes public blockchains work - a non-deterministic definition of consensus. Using determinism means, that each new state is decided on by all nodes in a binary or boolean fashion: correct or false.
The consensus mechanism therefore had nodes agreed on some fixed new state.

In the non-deterministic model, the consensus mechanism lets all nodes agree on the probability of new state being the global state. Remember that the state in a blockchain is a new block. When a new block is proposed, nodes can be fairly certain, that it will stay valid, but they cannot know for sure! But with each additional state transition - in our context each new block or *confirmation* - the probability of the state being *safe* surely but slowly approaches 1.

![Nakamoto Consensus](/assets/post_files/technology/expert/2.4.1-distributed-consensus/nakamoto_consensus_D.jpg)

It is important to note, that *Nakamoto Consensus* cannot provide finality. Although the probability of a block being reversed approaches 0 the more confirmations it has, it never actually equals zero. In practice, this property leads to the receiver of a transaction usually waiting for a few confirmations, until the funds are considered received. It also limits the possible approaches to scalability. *Sharding* is an approach to partition the ledger into individual *shards*. Without finality, this becomes practically infeasible.

##### Nakamoto Consensus

But wait, how does the Nakamoto consensus actually achieve consensus? In the mechanisms we outlined above you can break down the process of achieving consensus to a *proposer* suggesting a state transition and a group of *acceptors* coordinating to either accept or decline the proposed state. This coordination displays characteristics of a ballot. A shortened Demiro Massessi quote reads:

> "In one way or another, [...] consensus algorithms boil down to some kind of vote [...].”

Nakamoto consensus with [Proof-of-Work] (PoW) does not require a leader (proposer) selection of any kind. Anybody is free to start mining and to start proposing blocks. The consensus is based on who can find a nonce, that [hashed]hm together with the proposed block header, yields a block hash below the current target value. The chance of finding such a valid nonce is proportional to the relative hash power - or computing power -  a given miner controls. This means state transitions are voted on with hash power, and the state transition logic is defined by the target a valid block hash has to be smaller than or equal to.

At this point, we would like to quote Demiro in full:

> “The main difference between consensus mechanisms is the way in which they delegate and reward the verification of transactions. […] In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control.” - Demiro Massessi

The limited resource in the case of the traditional Nakamoto Consensus using Proof-of-Work is computing power. The genius part is adding an incentive system to the consensus mechanism. Participants have to do work and spend real world resources (electricity) on achieving consensus on the network. By rewarding the miner of each block with the block subsidy, there is an incentive for rational actors to perform this task. 

#### PoW + Longest Chain Rule = Consensus

The consensus mechanism is composed of two parts. One is the Proof-of-Work component that facilitates a type of voting as well as Sybil resistance, the other part is the *longest chain rule* or *heaviest chain rule* (both describing the chain with the most cumulative computational work).

The longest chain rule is applied in case two miners find valid blocks at roughly the same time - a tie situation because both blocks are valid according to the [protocol]. Miners start building on the block they received first, but keep the second one in memory. Different miners can have different vies of which block came first, depending on their geographical location and their connectivity in the network graph. The tie is broken once the next block is found and the winner is the block that was build on top of.

![Longest Chain Rule](/assets/post_files/technology/expert/2.4.1-distributed-consensus/longest_chain_D.jpg)

The resulting chain of state transitions - the blockchain - does not only entail the chronological order of events, but also proves that it came from the largest pool of computing power. This means, that on it's way to solving one of the more difficult problems in computer science, the Byzantine Generals Problem, Nakatomo Consensus also raised the bar for byzantine tolerance. Instead of being able to handle rougly 33% of participants being byzantine, it can handle 49%, although this is defined via the share of hash power rather than nodes on the network.

**TKKG** \\((2*f* + 1)\\) resilience vs \\((3*f* + 1)\\) resilience.

This last part of the sentence is very important. PoW and it's relatives can be seen as Sybil-resistance mechanisms. In a **Sybil Attack**, a malicious party creates a large number of centrally controlled (online) identities and tries to achieve certain, mostly malicious, goals by exerting influence through these fake identities. Online voting is the most intuitive example of a situation, where many fake identities can be used to game the results.

Sybil-resistance mechanism prevent this by tying an entities voting power to a scarce resource, that is harder to obtain than fake user-accounts or IP-addresses. In the case of PoW, this is computing power.

The longest chain rule is the "actual consensus mechanism" that has nodes agree on a single version of truth.

#### An Immutable Ledger

A key takeaway from this article should be the following: You get *immutability* of data only if there is a strong consensus  **and** incentive mechanism in place. It makes its participants agree on a state (safety), enforces the rules of the [protocol] and has the network decline invalid blocks. Without consensus, a blockchain is merely *tamper-evident*, which means alterations are easy to detect. Only because the rules are enforced through strong consensus and a set of well thought-out incentives, we get the immutability property.

### Summary -  Blockchains

Holy, that was a lot... Let's do a quick recap of what just happened.

First we looked at the challenges of achieving consensus in a distributed setting. The consensus mechanism has to tolerate malicious actors  - be byzantine fault tolerant - and it needs to handle unreliable communication - the asynchrony assumtion.

We defined liveness, as the property of all nodes eventually computing a new state based on some external input. Put differently, the system doesn't stall. In the context of blockchains, liveness means that all transactions originating from an honest account will eventually end up in the blockchain of all other honest participants. This is closely related to the property of censorship resistance.

Next we defined safety as all non-faulty nodes agreeing on new states. We learned that Nakamoto Consensus does not provide finality, but rather an increasing probability of a state being final with a growing number of confirmations. Therefore safety is closely related to the immutability property of blockchains.

Every *x* minutes a blockchain demonstrates liveness and every *k * x* minutes it demostrates safety.

A key takeaway from this article should be that without strong consensus and incentives the blockchain is only tamper-evident, and those mechanisms ensure immutability.

In our next article, we will look at Proof-of-Work, the mechanisms that provides Sybil resistance and an incentive system all in one.




## FR

https://hackernoon.com/consensus-mechanisms-as-detailed-and-concise-as-possible-b3da79f85f66
bitcoins security is fine

https://medium.com/untitled-inc/decentralized-consensus-technology-enabling-the-world-of-networks-3c3ac06824a0


