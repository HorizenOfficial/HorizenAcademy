---
layout: post
type: article
title: "A Peer-to-Peer (P2P) Network"
description: 'The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you learn about the peer-to-peer network, also known as, the physical infrastructure that blockchains run on.'
permalink: /technology/advanced/a-peer-to-peer-p2p-network/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
---

The Internet that we are experiencing today is highly centralized. Most data that we as the users of the internet produce, end up in the hands of a few large corporations. But there are a number of truly distributed systems out there living on the internet. Although not exactly the same, for the purpose of this article, we will use the term distributed network and Peer-to-Peer network interchangeably.

One example of a truly distributed system on the internet is BitTorrent. Like any other technology, Peer-to-Peer networks have enabled legitimate use-cases, such as the reliable exchange of open-source software as well as illegitimate use-cases, such as pirating music and movies. Distributed systems have some major advantages over their more centralized counterparts, most notably their robustness. Peer-to-Peer networks have a high level of redundancy built-in. Single points of failure are missing and the system can survive even if a majority of the network is shut down. We’ve seen the tremendous difficulty that authorities have had taking some of these networks offline with services like BitTorrent or Napster. That is due to the fault tolerance you get from a peer-to-peer architecture.

But there are some downsides compared to centralized systems. The high level of redundancy and the need for communication as well as coordination between peers comes at the cost of efficiency. Taking a look at data storage is the most obvious example here. Many nodes, in case of the Horizen network more than 25,000, store a copy of the blockchain. This is not very storage efficient but makes the blockchain highly resilient against attacks and gives it its immutability.

In computer science, the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem) describes the cost of a robust and scalable distributed network as the time it takes for the network to reach consistency. It takes some time for an event (like a transaction) to be broadcast to every node on the network. In a second step, all the nodes have to reach consensus on the order in which events happened. In our next article on [consensus mechanisms]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}), we will introduce you to the two main methods to achieve consensus in distributed networks.

![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/central-distri_M.jpg)

We have found [a simple yet great visualization](http://mg8.org/processing/bt.html) of a distributed system that demonstrates the process of new peers joining a network and syncing with all other nodes. It lets you add and delete random nodes to show the robustness of the overall system. With a Peer-to-Peer network architecture, every node is equal to every other node. Every node in a P2P network acts as both a client and a server opposed to traditional client-server models. While a server can experience downtimes during which the clients cannot access its data, in a P2P network you just connect to a different peer if one goes offline.

### Variations

The variations of distributed networks mostly regard the [data structure]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-02-blockchain-as-a-data-structure %}) that is being maintained and the *broadcasting mechanism* or message propagation that nodes use to communicate and exchange data. The two most commonly used spreading protocols are *flooding* and *diffusion*. 
With flooding, nodes propagate a message with a constant or *deterministic* transmission delay. 
Diffusion is a refined version of flooding. In networks using diffusion, such as Bitcoin and most other cryptocurrencies the nodes propagate messages with a random transmission delay. 
This makes it harder for an eavesdropper to determine the origin of a message and thereby identify a node's geographical location and possibly owner.

![Spreading](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/spreading_D.jpg)
![Spreading](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/spreading_M.jpg)

Many distributed systems are built with an append-only data structure and blockchains are an example of this. The blocks in a blockchain are cryptographically connected data containers in an append-only log. It is infeasible to change or delete data from the past.
In other distributed networks it can be desirable to delete data, for storage efficiency or to maintain only relevant information. In the case of blockchains, this would be considered a devastating bug. If the transaction ledger were to change this would destroy the use-case of digital currency, because it would imply changing balances. This is clearly not desirable for a censorship-resistant form of global money.

Most distributed networks use a variation of diffusion for message propagation. A peer that receives a message will broadcast it to all his peers, which in turn broadcast it to all their peers. Within a few rounds of propagation, the entire network will receive the message as it spreads exponentially among the nodes. The communication protocol needs to fulfill a set of desirable properties, such as low latency, fairness (all nodes experience roughly the same latency) and anonymity. Anonymity in this context should prevent an adversary from learning the IP address a message originated from through monitoring the network over time.

### Incentive

In order for a distributed network to function all network participants need some form of incentive to act according to the [protocol]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-03-a-protocol-to-transfer-value %}) of the network. With a blockchain for cryptocurrencies, the incentives are monetary rewards. The miners are rewarded with an economically valuable token for verifying transactions and achieving consensus across the network. Non-mining nodes are usually not incentivized.

#### Secure Nodes and Super Nodes

Horizen also incentivizes node operators financially because running a node comes at a cost. It takes time to set up, you need to set up or rent a server, and the node operator has to update the software occasionally. On the Horizen network, miners receive 60% of the total block reward (12.5 ZEN). The other 40% is used to fund the infrastructure (Secure Nodes 10% and Super Nodes 10%) and the non-profit Zen Blockchain Foundation (20%) for the development of the protocol. 

On a permissioned blockchain that a consortium of companies is running, e.g. to track a supply chain, the incentive to maintain the ledger is to have access to valuable business data without having to trust a third party. We believe that the Web 3.0 will benefit largely from the emergence of distributed networks and that we will see a transition from centralized services to decentralized ones.

### Summary

Peer-to-Peer networks offer great robustness or fault tolerance at the expanse of efficiency. Every node is performing the same task on the network and acts as a client and a server at the same time. If one of your peers goes offline you just connect to another one. If you run a node and happen to go offline for a while, you need to reconnect at some point to get updated by your peers on the blocks that you missed to become fully functional again.

In the next article, we will introduce you to the two most common mechanisms to reach consensus on a history of events in a distributed setting. You have probably come across the term Proof-of-Work and mining before. We will explain what Proof-of-Work and Proof-of-Stake are about and look at mining in detail for the last article of this chapter.
