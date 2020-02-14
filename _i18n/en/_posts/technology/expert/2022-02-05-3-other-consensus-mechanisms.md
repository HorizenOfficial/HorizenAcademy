---
layout: post
type: article
title: "Other Consensus Mechanisms"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/other-consensus-mechanisms/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

A blockchain shows it's strength when out in the wild, living on a permissionless, distributed [peer-to-peer network]({{ site.baseurl }}{% post_url /technology/expert/2022-02-06-the-p2p-network %}). The biggest challenge when designing such a multi-agent system is achieving *consensus* among its participants. This means all nodes on the network need to periodically agree on a single version of history.

> "All blockchains are fundamentally a deterministic state machine acted upon by transactions. Consensus is the process of agreeing on a deterministic order of transactions and filtering invalid transactions." - Dan Larimer

A global, digital money only works, if all participants agree on *who* owns *what* at any given time - they need to reach consensus. Once computations are performed on top of a blockchain via [*smart contracts*]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-guaranteed-execution-with-smart-contracts %}), achieving consensus on the order of events becomes even more critical compared to a blockchain purely meant for digital payments.

## Recapping Distributed Consensus and Proof of Work

In our last two articles, we first looked at [consensus in distributed systems]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-1-consensus-in-distributed-systems %}) in general and afterward at Nakamoto Consensus and [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) (PoW) as the first mechanism to achieve a network resilient against attackers build on an unreliable communicatiosn network.

Byzantine behavior technically refers to random behavior but is commonly used to describe malicious actors diverging from the protocol. An asynchronous environment means the protocol is run on a network, where the delay in message delivery is unknown. Messages can take an arbitrary time to reach their destination or can be dropped altogether.

## The Goal of a Consensus Mechanism

The goal of a consensus mechanism is to achieve *liveness* and *safety* in a byzantine and asynchronous environment.

We defined liveness, as the property of all nodes eventually computing a new state based on some external input. Put differently, the system doesn’t stall. In the context of blockchains, liveness means that all transactions originating from an honest account will eventually end up in the blockchain of all other honest participants. This is closely related to the property of censorship resistance.

Next, we defined safety as all non-faulty nodes agreeing on new states - the blocks. Therefore, safety is closely related to the immutability property of blockchains. **TKKG** add stuff

Proof of Work uses a probabilistic leader election process to determine who gets to mine the next block. The probability of becoming the next leader is directly proportional to the relative computational power an entity is contributing to the network. PoW has the longest track record of working in an adversarial environment because it is used by Bitcoin, the oldest blockchain in existence.

### Criticism of Proof of Work

An often cited criticism of PoW is its high energy consumption and while Bitcoins PoW seems to be [incentive compatible](https://en.wikipedia.org/wiki/Incentive_compatibility) it comes with certain limitations regarding throughput. An increase in throughput of PoW blockchains can be achieved in various ways. Second layer technologies like [state and payment channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-state-payment-channels %}) move signed transactions off-chain and parallelization via [sidechains]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) moves data to parallel, interoperable blockchains. [DAGs]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-a-relative-the-dag %}) introduce an entirely new data structure to distributed ledgers and require modifications to the consensus mechanism.

![Scaling](/assets/post_files/technology/expert/1.4-dags/scaling_dag_D.jpg)

### Scaling with Different Consensus Mechanisms

In this article, we will look at an additional option to increase the throughput of a distributed ledger - changing the consensus mechanism. Many *Proof of X* schemes, Proof of Stake being the most commonly discussed alternative, have been proposed over the last decade. They aim to improve upon PoW in several ways but most notably transaction throughput, energy consumption, and finality.

Here, we want to give a comprehensive overview of the state of consensus mechanisms, with a slight focus on PoS as it is the most researched and talked about alternative to PoW. We cannot do justice to every consensus mechanism, as this would fill an entire book in and off itself. But we do hope that after reading this article you will have a general orientation in the vast space of consensus research. The paper ["SoK: Consensus in the Age of Blockchains"](https://arxiv.org/pdf/1711.03936.pdf) will be interesting to those willing to deep dive into the topic.

**Note**: We will focus on consensus mechanisms designed to work in permissionless systems here. A wide range of additional consensus mechanism exist, that can be used to reach consistency in distributed but permissioned databases such as those run by software giants like Google, Facebook or Amazon. Open systems require a much more robust way to reach consensus and we will focus on those.

## Proof of Stake - PoS

Proof of Stake (PoS) is a type of consensus algorithm for distributed networks that depends on the economic stake a participant has in the network.

> "The main difference between consensus mechanisms is the way in which they delegate and reward the verification of transactions. (...) In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control." - Demiro Massessi

In PoS the participants producing - or *forging* - new blocks are called validators. In their function, they are analogous to miners in PoW blockchains. The number of votes a participant has in PoS is proportional to the number of coins the participant has *staked*.

### Staking

> "In PoS-based public blockchains (e.g. Ethereum's upcoming Casper implementation), a set of validators take turns proposing and voting on the next block, and the weight of each validator's vote depends on the size of its deposit (i.e. stake)." - [Ethereum Proof of Stake FAQ](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ)

Staking is a very loose term that comes in many different flavors. Today, the most common understanding of staking (in the PoS context) is placing funds in a type of escrow for the time a user wants to act as a validator. This allows for the implementation of penalties in case a validator was to display malicious behavior - more on that later.
Validators are incentivized to produce blocks by collecting the transaction fees of all included transactions and depending on the protocol by a block subsidy.

The first Proof of Stake-based blockchain protocol, [PPCoin](https://www.semanticscholar.org/paper/PPCoin%3A-Peer-to-Peer-Crypto-Currency-with-King-Nadal/0db38d32069f3341d34c35085dc009a85ba13c13), was proposed as an academic paper by Sunny King in 2012. This first iteration of the back-then new consensus algorithm considered all participants owning a stake in the protocol as potential validators. Locking up a stake was not foreseen. It didn't take long until projects such as Peercoin, PIVX, and Reddcoin implemented a variant of PoS to achieve consensus on transaction validity and ordering.

### Chain-Based vs. Byzantine Fault-Tolerant PoS

A first differentiation between the many different implementations of PoS can be achieved by classifying them as either *chain-based PoS* or *Byzantine-Fault-Tolerant (BFT) PoS*. While in chain-based PoS validators are assigned the right to create new blocks directly, BFT PoS separates the process of proposing a new block and adding it to the ledger after some sort of (mostly) multi-round voting procedure.

In our previous articles, we already drew a distinction between *[Sybil-resistance mechanisms](https://en.wikipedia.org/wiki/Sybil_attack)* and consensus mechanisms. While some might argue this is a negligible differentiation, we would like to touch on the topic nonetheless, as it helps to understand the design decisions behind all Proof of X schemes.

### Sybil-Resistance

In a public blockchain the cost of creating an identity (read: [key pair]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %})) is effectively zero. In a naive implementation of a consensus mechanism, this would allow participants to create many identities to manipulate the voting procedure on new blocks. To prevent malicious - or *Byzantine* - actors from creating multiple [*Sybil*]({{ site.baseurl }}{% post_url /technology/expert/2022-06-04-ddos-sybil-eclipse %}) identities to manipulate the voting procedure on new blocks, an "artificial cost" of voting needs to be added.

In PoW this cost comprises the electricity needed to perform the computationally expensive [hashing]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) of data and the necessary hardware.

In Proof of Stake, the cost comes at acquiring the native currency of the protocol. Other Proof of X schemes incure different costs. For instance, *Proof of Capacity* requires participants to store large amounts of data and therefore derives the cost from buying hard drives. The *X* in Proof of X mostly refers to the source of cost to participate in the decision making process. This cost is meant to prevent [Sybil attacks]({{ site.baseurl }}{% post_url /technology/expert/2022-06-04-ddos-sybil-eclipse %}).

Consensus - or agreement - is based on another rule, commonly the *longest chain rule*. It is applied to determine which fork is valid in case of a chain split. In BFT-style PoS the longest chain rule is replaced by some form of voting.

## Benefits of PoS

### Energy Consumption

First, Proof of Stake has a significantly lower energy consumption compared to PoW. This is a common criticism of the *Nakamoto Consensus* using Hashcash Proof of Work.

### Lower Rate of Inflation

Second, Validators are required to own a share of the protocols native currency to participate in the decision-making process. This can be considered an *internal cost*. Additionally, validators don't spend their coins to participate, they only deposit them for a certain period. Because no external cost is involved as in PoW, the financial incentives for acting as a validator can be significantly lower, whilst remaining attractive. The block subsidy can be lower, allowing for a lower rate of inflation. Some PoS protocols eliminate the block subsidy all together and validators are incentivized through transaction fees only.

### Finality

Third, Proof of Stake can provide real *finality*. This means that once a block has enough block producers vouch for it - usually two-thirds of all validators - it is guaranteed that the history of blocks up to this checkpoint will not change.
PoW can only ever provide *probabilistic finality*. The overarching idea is that as a block gets buried under more and more blocks, the likelihood of that block getting reversed asymptotically approaches zero - but never actually reaches it. It practice this proved to be a sufficient security assumption. In different terminology, PoS can provide *deterministic consensus* and PoW can only provide [*non-deterministic consensus*](https://academy.horizen.global/technology/expert/consensus-in-distributed-systems/#changing-the-definition-of-consensus).

Deterministic consensus allows for a scaling approach called [*sharding*](https://github.com/ethereum/wiki/wiki/Sharding-FAQ). Sharding is not a blockchain-native technique. A database can be partitioned into individual *shards* that will share some of their data while storing other, less frequently used data only in a single shard or a small subset of shards. Sharding is one of the reasons why Ethereum wants to transition to its PoS based [Casper Protocol](https://github.com/cbc-casper/cbc-casper-paper/blob/master/cbc-casper-paper-draft.pdf).

### Less Economies of Scale

Lastly, PoS eliminates economies of scale from affecting the block production process. Although we concluded in our last article that Proof of Work algorithms are *amortization free* - meaning they do not offer an advantage to miners operating on a large scale, this only holds theoretically. While the algorithm itself does not allow for economies of scale, the entirety of the mining process always will. The more mining equipment you buy, the better the price you will get. Cooling, housing, and electricity are also subject to economies of scale. This is an inherent caveat to introducing external, real-world costs to the block production process.

## Challenges with Proof of Stake

All of the above sounds very compelling, but some downsides and challenges with PoS protocols remain. Most notably, it remains to be seen if a PoS based network capturing significant value will be as robust as the largest PoW blockchains. By adding an external cost to creating blocks, one can prevent even state-level adversaries from successfully attacking the consensus mechanism.

### The Nothing-At-Stake Problem

We already mentioned that PPCoin, the first proposed PoS protocol did not require network participants to lock their coins - possession of funds was considered to be sufficient proof of having a stake in the network. The need to lock coins in some form of escrow quickly became clear.

In a naive implementation of PoS, block producers witnessing a chain split are incentivized to add a block on both chains. Unlike in PoW, there is no opportunity cost to voting on all chains. This is referred to as the *nothing-at-stake problem*.

Adding a block on both sides of the fork hedges the block producers bets and they will collect their reward no matter which chain endures. This may prevent the network from converging on a singular consensus. Many PoS implementations combat this behavior with *slashing*. Slashing refers to punishing block producers willfully voting on both sides of the fork.

This attack seems very obvious in theory but was rarely observed in practice. [This article](https://hackernoon.com/thoughts-about-nothing-at-stake-b93b13bb5d6e) takes a close look at the nothing-at-stake problem and concludes that its low likelyhood doesn't disqualify PoS consensus for application on a large scale.

### Long Range Attacks

incentive alignment by being part of the network - attack on network, coins worth less

In the early part of the stake distribution there can be a few people that get their hands on an overwhelimngly high stake. You can bribe them to make a really long chain and because you can bribe them they just sign everything.






## A Variation: delegated Proof of Stake - dPoS

"Delegated Proof of Stake is a specialized form of PoS. The difference is that the majority of owners in dPoS are expected to delegate their responsibility. By limiting the number of participants, latency becomes less of a problem and consensus speeds up." - on consensus\\

The DPOS algorithm is divided into two parts: electing a group of block producers and scheduling production.


 First it requires some kind of synchronisation between the peers as it splits time into slots, timing is critical in this algorithm. Then it selects a number of peers among those that have stake (theirs or delegated) and schedules them into those slots in a specific manner. Some are scheduled from the top stake and some from the rest of the witnesses probabilistically according to their amount of stake. Finally that set of delegates is updated every some interval. So now we have time slots and assigned block producers for each of those. The producers emit blocks on their slot and the chain with the less missed blocks is the main.

Like proof of work, the general rule is that longest chain wins.

Under normal operation block producers take turns producing a block every 3 seconds. Producer can only produce in his slot. Producer shuffling, random order. Security based on assumption that leader election is truly random.

(3f +1) resilience up to a third of nodes can be byzantine. 3 block producers, 1s block time: 6 vs 3.

network fragmentation -> largest minority produces longest chain. tie possible, tie broken when small partitions rejoin.

last irreversible block -> 2/3 +1 conf.d

block producers are periodically updated. 

"Existing DPOS chains select a set of unlikely to collude entities by approval voting and then schedule them in a pseudorandom order. This shuffling is not really needed because once each of them participates a single block a 2/3+ consensus can be determined. This is why EOS will be removing the random shuffle all together." Dan


Liquid POS, Tezos. Lisk also dpos style. I don't want to upset anybody hear. But a voting on block based on stake, with a set (fixed or not) of validators belongs in the dPOS corner.
Same with ouroboros.


### Hybrid as in Decred



first mining: 60 miners/30 PoS Voters, 10 Dev fund

staking as a governance mechanism. vote on proposed changes.
voter can vote a block invalid - veto
incentivize community participation by share of reward

deposit needed.


all stakers buy a ticket, each ticket worth a vote.

lottery

each block contains 5 tickets and the associated votes. Votes cast on last block. majority 3/5 needed.

prev. block not approved? only voters but not miners rewarded. expiration date for tickets, deposit released.

ticket price + ticket fee. higher fee, more likely for miners to include. max 20tickets/clock.

waiting period 256 blocks for ticket to mature and go into lottery pool.

ticket target 40960, price adjusted 144 blocks.

voting on protocol changes requires majority of both, miners and voters. In the case of Decret this is 95\% of miners and 75\% of voters. in a first step and 75 total 



difference staking / secure nodes: incentive to provide infrastructure with capable full nodes.



### POI - NEM

importance: mix of stake and activity

harvesting, collect tx fees

pseudo randomly chosen, proportional to importance score

min. 10,000 vested XEM.

POS 10\% of stake, get 10\% of rewards. incentive to save instead of spend

importance score based on vested amount, # of tx partners and size of tx in last 30 days.

### And many more...

Po Capacity

Elapsed time

e.g. GHOST SPECTRE. They utilize a different data structure than regular blockchains. In order to achieve the same properties as POW blockchain they have to come up with modified or entirely new consensus mechanism to agree on the state of the blockchain/graph $G$. Ref. to DAG.

subtrees vs. longest chain

### Summary}

"Methods for keeping a computer network or a blockchain in agreement can only work if their human users agree on the method of consensus." on consensus\\





## FRs


## Anti PoW

read first!! -> https://medium.com/logos-network/why-proof-of-work-is-not-viable-in-the-long-term-dd96d2775e99


## PoS

https://medium.com/@abhisharm/understanding-proof-of-stake-through-its-flaws-part-2-nothing-s-at-stake-8d12d826956c
How nothing at stake is addressed. Also read part 3.

https://medium.com/@hugonguyen/proof-of-stake-the-wrong-engineering-mindset-15e641ab65a2 incorporate this.

https://blog.ethereum.org/2014/07/05/stake/

https://blog.positive.com/rewriting-history-a-brief-introduction-to-long-range-attacks-54e473acdba9

## dPOS

https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper

## PoI

https://www.mycryptopedia.com/proof-of-importance/
https://nem.io/wp-content/themes/nem/files/NEM_techRef.pdf

## Hybrid - Decred

\url{https://www.mycryptopedia.com/decred-mining-explained/}

Hybrid

2013 Mackenzie MEMCoin$_2$ https://decred.org/research/mackenzie2013.pdf

2014 proposed as PoA by Bentov, Lee, Mizrahi and Rosenfeld https://decred.org/research/bentov2014.pdf

## Other

["SoK: Consensus in the Age of Blockchains"](https://arxiv.org/pdf/1711.03936.pdf)

P + $\epsilon$ Attack by VB: setting new schelling point by promising reward. At the end no need to pay. https://blog.ethereum.org/2015/01/28/p-epsilon-attack/

algorand https://arxiv.org/abs/1607.01341
