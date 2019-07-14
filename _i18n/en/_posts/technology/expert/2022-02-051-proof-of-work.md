---
layout: post
type: article
title: "Consensus in Distributed Systems"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/proof-of-work/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
published: false
---

## Consensus in Distributed Systems

Def distributed Systems:

set of processes/computers trying to achieve common goal through coordination and communication. The gommon goal can be facilitating a system to exchange files or to enable a global digital form of money.

Processes separated but the system acts as one

Why distributed? resilience, etc.

### Challenges

need to be addressed in all distributed systems:

- concurrency, simultaneous execution across machines/computers/peers. Needs coordination
- no global clock, mechanism to synch nodes needed
- independent failure of constituents
- Message passing

Failure can be one of three things: crash, omission, Byzantine (+ rational?). system should be "fault-tolerant"

There are three models for message passing: synchronous, partially synchronous or asynchronous. bound vs. bound-but-unknown vs. unbound

#### Different tiers of "Fault-Tolerance"

* (Simple) Fault-Tolerance: Nodes work or crash
* Byzantine Fault-Tolerance: Nodes may display byzantine or malicious behavior but the system still achieves it's goal
* Byzantine-Altruistic-Rational Fault-Tolerance (some count it in, but addressed via incentives rather than system design)

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







