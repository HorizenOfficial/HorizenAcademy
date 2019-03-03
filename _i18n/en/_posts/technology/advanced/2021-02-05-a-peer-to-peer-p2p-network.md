---
layout: post
type: article
title: "A Peer-to-Peer (P2P) Network"
permalink: /technology/advanced/a-peer-to-peer-p2p-network/
topic: technology
level: advanced
chapter: "How does a Blockchain work?"
---

The Internet that we are experiencing today is highly centralized. Most data that we as the users of the internet produce, end up in the hands of a few large corporations. But there are a number of truly distributed systems out there living on the internet. Although not exactly the same, for the purpose of this article, we will use the term distributed network and Peer-to-Peer network interchangeably.

![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/central-distri.jpg)

One example of a truly distributed system on the internet is BitTorrent. Like any other technology, Peer-to-Peer networks have enabled legitimate use-cases, such as the reliable exchange of open source software. They also have illegitimate use-cases, such as pirating music and movies. Distributed systems have some major advantages over their more centralized counterparts, most notably their robustness. Peer-to-Peer networks have a high level of redundancy built in. Single points of failure are missing and the system can survive even if a majority of the network shuts down. We’ve seen the tremendous difficulty that authorities have had taking some of these networks offline with services like BitTorrent or Napster. That is due to the fault tolerance you get from a peer-to-peer architecture.

But there are some downsides compared to centralized systems. The high level of redundancy and the need for communication as well as coordination between peers comes at the cost of efficiency. Taking a look at data storage is the most obvious example here. Many nodes, in case of the Horizen network more than 25,000, store a copy of the blockchain. This is not very storage efficient but makes the maintained ledger highly resilient against attacks of any kind and gives it its immutability.

In computer science, the CAP theorem describes that the cost of a robust and scalable distributed network is the time it takes for the network to reach consistency. It takes some time for an event (like a transaction with a cryptocurrency) to be broadcast to every single node on the network. In a second step, all the nodes that have received the event have to reach consensus on the order in which the events happened. In our next article covering Consensus Mechanisms, we will introduce you to the two main methods to achieve consensus in distributed networks.

We have found a simple yet great visualization of a distributed system that demonstrates the process of new peers joining a network and syncing with all the other nodes. It lets you add and delete random nodes to show the robustness of the overall system. With a Peer-to-Peer network architecture, every node is equal to every other node. Every node in a P2P network acts as both a client and a server unlike traditional client-server models. While a server can experience down-times during which the clients cannot access its data, in a P2P network you just connect to a different peer if one goes offline.

### Variations

The variations of distributed networks mostly regard the data structure that is being maintained and the broadcasting mechanism or message propagation that nodes use to communicate and exchange data. The two most commonly used spreading protocols are flooding and diffusion. With flooding, nodes propagate a message with a constant or deterministic transmission delay. Diffusion is a refined version of flooding. In networks using diffusion, such as Bitcoin and most other cryptocurrencies the nodes propagate messages with a random transmission delay. This makes it harder for an eavesdropper to determine the origin of a message and therefore identifying nodes real-world location and possibly owner.

![Spreading](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/spreading.jpg)

Many distributed systems are built with an append-only data structure and blockchains are an example of this. The blocks in a blockchain are cryptographically connected data containers in an append-only log. It is infeasible to change or delete data from the past. In other distributed networks it can be desirable to delete data, for storage efficiency or to maintain only relevant information. In the case of blockchains, especially the ones for cryptocurrencies this would be considered a devastating bug. If the transaction ledger were to change this would destroy the use-case of a digital currency, because it would imply changing balances. This is clearly not desirable for a censorship-resistant form of global money.

Most distributed networks use a variation of diffusion for message propagation. A peer that receives a message broadcasts it to all his peers, which in turn broadcast it to all their peers. Within a few rounds of propagation, the entire network will receive the message as it spreads exponentially among peers. The communication protocol needs to fulfill a set of desirable properties, such as low latency, fairness (all nodes experience roughly the same latency) and anonymity. Anonymity in this context should prevent an adversary from learning the IP address a message originated from through monitoring the network over time.

### Incentive

In order for a distributed network to function all network participants need some form of incentive to act according to the rules or protocol of the given network. With a blockchain for cryptocurrencies, the incentives are monetary rewards. The miners are rewarded with an economically valuable token for verifying transactions and reaching consensus across the network. Horizen also incentivizes node operators financially because running a node is also a form of work. It takes time to set up, a server must host the node, and the node operator has to update the software occasionally. The miners receive 60% of the total block reward (12.5 ZEN). The other 40% is split between Secure Node operators (10%), Super Node operators (10%) and our non-profit organization (20%). On a permissioned blockchain that a consortium of companies is keeping, e.g. to track a supply chain, the incentive to maintain the ledger is to have access to valuable business data without having to trust a third party.

We believe that the Web 3.0 will benefit largely from the emergence of distributed networks and that we will see a transition from centralized services to decentralized ones.

### Summary

Peer-to-Peer networks offer great robustness or fault tolerance at the expanse of efficiency. Every node is performing the same task on the network and acts as a client and a server at the same time. If one of your peers goes offline you connect to another one. If you run a node and happen to go offline for a while, you need to reconnect at some point to get updated by your peers on the blocks that you missed to become fully functional again.

In the next two articles, we will introduce you to the two most common mechanisms to reach consensus on a history of events in a distributed setting. You have probably come across the term Proof-of-Work and mining before. We will explain what Proof-of-Work and Proof-of-Stake are about and after that look into the mining process in detail including the puzzle that the miners solve.
