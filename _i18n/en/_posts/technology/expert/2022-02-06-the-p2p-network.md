---
layout: post
type: article
title: "The P2P Network"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/the-p2p-network/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
further_reads: [why_bittorrent_mattered, anonymity_properties_of_the_bitcoin_P2P_network, dandelion_paper, bitcoin_developer_reference]
---

There are many ways to classify and differentiate between blockchains. One of them is to differentiate between public and permissioned blockchains. Permissioned blockchains are meant for a defined group of people, often times a consortium of companies that wants to share a consistent database. 

Public blockchains are commodidies, a digital good that anyone with an internet connection can access. Nobody owns these commodities, so there is no central provider for their infrastructure. Instead, the infrastrucuture is provided by many independent peers, spread all over the globe. Because the nodes of the network are run independently from one another the infrastructure as a whole - the distributed *Peer-to-Peer* (P2P) network is highly resilient.

![DAG](/assets/post_files/technology/expert/2.5-p2p/central-distri_D.jpg)
![DAG](/assets/post_files/technology/expert/2.5-p2p/central-distri_M.jpg)

In the article on blockchain as a [protocol to transfer value]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}), we looked at the protocol at the [*application layer*](https://en.wikipedia.org/wiki/Application_layer). Here, tasks like transaction management, blockchain processing, and mining are handeled and nodes are identified by their public keys or addresses.

In this article, we focus on the protocol of a blockchain at the [*network layer*](https://en.wikipedia.org/wiki/Network_layer). At the network layer, peers are identified by their IP addresses. It handles the communication between nodes via inter-node TCP connections - read: the internet. It is desirable to keep IP addresses and public keys unlinkable for privacy reasons.

## The Purpose of P2P Networks

**Note**: When we use the term *nodes* in this article, we refer to *full nodes* storing a copy of the entire blockchain. We will use the term *light nodes* whenever we explicity talk about them. Light nodes don't store a copy of the blockchain but only a key pair. They do not verify other transactions or blocks and need to connect to a full node before they can interact with the blockchain. They are basically *clients* that connect to one of the full nodes that act as a *server* at that moment.

First and foremost, the P2P network serves the communication between nodes.
Data on a blockchain is secure, because many copies of it exist. Those copies need to be in synch, otherwise having a large number of copies would not make much sense. In order for all nodes to stay in synch, they need to communicate constantly to update each other on events, such as new transactions or blocks.

The communication between nodes happens via [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol), a key part of the internet protocol suite at the transport layer. Additionally, the communication between noden can be secured using [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security), a cryptographic protocol at the application layer to provide private and secure communication. The communication between [Secure Nodes](https://www.horizen.global/securenodes/) and [Super Nodes](https://www.horizen.global/supernodes/) on the Horizen blockchain is secured using TLS.

Most P2P network protocols are designed to efficiently discover content stored with one of its nodes. The protocol should ensure, that querying a small fraction of nodes (e.g. logarithmic to the total node count) is enough to find information stored on a subset of all nodes. With blockchains the situation is slightly different. All nodes store a copy of the blockchain. This is the second major purpose of the P2P network: maintaining a large number of independent copies of the same data.

Because every node stores a copy of the blockchain, *peer discovery* is more important than *content discovery* in terms of what to optimize the network protocol for.

## Properties of P2P Networks

When you put yourself into the position of someone wanting to launch a distributed system - like a blockchain - running it on a P2P network is the obvious choice for at least two reasons.

First, it doesn't require many resources to bootstrap. The P2P network can be spun up with only a handful of nodes at near zero cost. Once the network gains traction new nodes can be added seamlessly.

Second, it provides a high level of resilience. The more people join the network, the more resilient it becomes. One of the stated goals of Bitcoin is to be able to withstand state-level actors trying to attack the network. In the very beginning, when there were only a few nodes this was not the case, but at the same time the incentives for potential attackers to target the network were small. The more people joined the network and the more value it accrued, the higher the incentives to target the network but at the same time the more resilient it is. You could say the robustness of a P2P network scales with the incentives to actually perform an attack.

A similar development could be observed with the [BitTorrent protocol](https://en.wikipedia.org/wiki/BitTorrent) used for P2P filesharing. Although there was much interest in shutting the network down by the entertainment industry, all attempts failed. Simon Morris wrote [a very interesting and insightful piece](https://medium.com/@simonhmorris/why-bittorrent-mattered-bittorrent-lessons-for-crypto-1-of-4-fa3c6fcef488) on the history of Bittorrent that is worth a read.

The two aforementioned reasons for using P2P networks to run public blockchains are compelling, and there are not many alternatives (if any), but distributed systems do come with trade-offs.

While the overall security benefits from the redundancy of many copies being maintained simultaneously, this comes at the cost of performance. In order to achieve a high level of decentralization the minimal requirements to run a node should not pose a high barrier to entry for any participant. This, in turn, means, that the least performant nodes (in terms of bandwidth and/or computational power) limit the network as a whole.

### The Network Graph

To illustrate distributed networks we use *graphs*. This term sounds very simple at first but there is a bit more to it. The field of *graph theory* is a mathematical discipline studying the [different types of graphs](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)). We touched on graph theory before in our article on [*Directed Acyclic Graphs*]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-a-relative-the-dag %}) or DAGs. There we talked about graphs in the context of data structures - namely how blocks can be interconnected at the application layer. Here the graph describes the connectivity between nodes at the network layer.

![The Graph of a Distributed Peer-2-Peer (P2P) Network](/assets/post_files/technology/expert/2.5-p2p/graph-distributed-network_D.jpg)
![The Graph of a Distributed Peer-2-Peer (P2P) Network](/assets/post_files/technology/expert/2.5-p2p/graph-distributed-network_M.jpg)

A graph \\(G = (V, E)\\) defined as set of vertices $V$ and edges $E$. Each edge connects two vertices and has a time delay $d$ it takes a message to travel along that path. The graph of a distributed network changes constantly. This happens when nodes go offline and their peers reconnect to different nodes, or when new nodes join the P2P network. The rate of change can vary, and this has implications on the privacy of each node.

There are two extremes when it comes to the dynamicity of the network graph. A fully static graph never changes, which means an adversary can learn the entire graph over time. This means he is in a good position to link IP addresses to public keys.
A fully dynamic graph changes at a rate that prevents an adversary from learning the graph structure and in turn link IP addresses to public keys. He will only ever know his local graph environment.

### Node and Network Failures

When we talked about [distributed consensus]({{ site.baseurl }}{% post_url /technology/expert/2022-02-051-consensus-in-distributed-systems %}) we introduced two types of malfunctions at the network layer: *node failures* and *network failures*.

![Node Failures in a Distributed Peer-2-Peer (P2P) Network](/assets/post_files/technology/expert/2.5-p2p/node_failures_D.jpg)
![Node Failures in a Distributed Peer-2-Peer (P2P) Network](/assets/post_files/technology/expert/2.5-p2p/node_failures_M.jpg)

Nodes can crash or go offline, they can have trouble receiving or processing messages or they can display *Byzantine* behaviour. When nodes act Byzantine, this means they act randomly and derive from the protocol. Usually the term is used to refer to malicious behaviour.

![Network Failures in a Distributed Peer-2-Peer (P2P) Network](/assets/post_files/technology/expert/2.5-p2p/network_failures_D.jpg)
![Network Failures in a Distributed Peer-2-Peer (P2P) Network](/assets/post_files/technology/expert/2.5-p2p/network_failures_M.jpg)

Network failures are not classified by the reason that led to the failure but rather to the effect on message propagation. Usually one of the following models is assumed, and other design decision regarding the network architecture are based on this assumption.

- In the *synchronous* model, all messages arrive with a known and bounded delay.
- In the *partially synchronous* model, messages arrive with a bounded delay, but the bound is not known.
- In the *asynchronous* model, the message delay is unknwon and unbound. This makes the asynchronous model the "hardest assumption" to build a reliable system on.

Not only does the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-050-consensus-mechanisms %}) have to account for *node failures* and *network failures*, but so does the P2P network itself. What does a node do in case one of it's peers goes offline? And how does it find a set of nodes to connect to in the first place?

## Peer Discovery

As we said before, peer discovery is more important than content discovery in a blockchain protocol. Let's assume you set up a node for the very first time. As soon as you are done, your node needs to connect to other nodes in order to start downloading the blockchain and to become functional.

When your node goes live for the first time, the client determines it's own IP address. Next it needs the IP addresses of some peers on the network to get started. There are two ways for a node to get an initial set of addresses:

The client contains a list of host names for DNS addresses that contain a list of IP addresses for some seed nodes. The client issues a DNS request and receives a list of peer nodes in return.
If this should fail for any reason, the client usually contains a list of hard coded IP addresses of some well-known nodes. All IP addresses a node receives are being timestamped.

Once the client has connected to an initial set of nodes, either via a DNS request or the hard-coded seed addresses, it can request more addresses by sending out a *getaddr* request. When a node receives a *getaddr* request, it determines how many addresses it currently maintains that have a recent timestamp. The client selects those addresses, up to a maximum of 2500, and returns them in an *addr* message.
An *addr* message may also arrive unsolicitated, for instance when a node advertises its own address to its peers about every 24 h.

When your node has been offline for a while it tries to connect to the peers it still has in its "address book". Even if only a few nodes remain active, the client can request new peer addresses by using the *getaddr* message.
A single node stores multiple IP addresses of other nodes once it is in synch. This means a single peer going offline does not pose a problem and will be replaced shortly.

If you want your node to connect to a specific peer, e.g. because you run several nodes and you want them to talk directly to each other, you can manually specify those connections via the *addnode* command line argument.

## Communication Standards

After taking a look at the topology of network and how connections between different peers are established let's talk about how data is being transmitted.

Communication generally happens via messages. In the article on [the data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) of a blockchain, we already introduced some conventions that effect the communication between peers. Most messages on a P2P network of a blockchain are transactions.
What a message or transaction needs to look like at the application layer was covered in the aforementioned article. Here we will explain how peers exchange those standardized messages. Just like a block - each message is essentially a container that holds some data.

The first part of each message is a header that contains some metadata about the message. It begins with a *start string* to indicate if the message originates from the mainnet or a testnet. After that the *command name* specifies what type of message this is. The next field - *payload size* - indicates how much data the message carries. In a last step, a checksum is added.

There are some messages that don't have any payload. The *getaddr* message used to request IP addresses from another peers inventory does, for example, not have any payload. It's entire purpose is to notify a peer about the request for addresses.

### Synchronizing a Node

To get back to the example used in the previous section, imagine you just set up a node. After the peer discovery stage you have a bunch of IP addresses but still need to get in synch with all other nodes. This means you have to download all blocks of the blockchain.
In order to do so, the client will send a *getheaders* message to your peers. This triggers the receiving node to reply with a list of block header hashes - up to 2,000 in one message. A block header hash is much smaller in size than a full header, let alone a full block. In order to reduce communication overhead, peers always exchange the identifiers (hashes) of data objects first, before sending the actual data.

Next your node will compare the list of headers with its existing inventory. Since your node just got started, there is no inventory so the client proceeds with requesting the actual blocks.

To do so, it sends *getblocks* messages. The receiving node will reply with its inventory of block header hashes. After comparing the list with its empty inventory, your node will request all blocks to get up to speed. This is done by sending a *getdata* message that requests one or more specific data objects from another node - in this case the actual block data.

The *getdata* message can not only be used to request blocks, but also transactions and other objects. All of them have an identifier - their hash - by which they can be requested specifically after they were identified as missing in a nodes inventory.

## Broadcasting Mechanism

After a node is in synch with the network, the main influx of information happens via unsolicited messages. Freshly created transactions need to be broadcast to all nodes in as little time as possible, just like new blocks.

The basic function of the broadcasting mechanism is to define a set of rules for how messages are distributed among the nodes of the network. As we said earlier, the main purpose of the P2P network is to facilitate the communication between peers. In a network that is not centrally planned but organically grown, a somewhat flexible broadcasting mechanism needs to be in place, that ensures messages reach all nodes within some time period. The broadcasting mechanism effects the order in which peers receive messages and the time it takes nodes to receive messages.

It is desirable for the broadcasting mechanism to display the following properties:

- *Low latency* - The maximum time for a message to reach all nodes should be bounded and small. This in turn effects the overall network security as data consistency among nodes is crucial. The lower the latency of the broadcasting mechanism the lower the risk of reaching an inconsistent state. A low latency spreading mechanism also means a lower [stale rate](https://bitcoin.org/en/glossary/stale-block) and less wasted [PoW]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}).
- *Fairness* - All nodes should experience roughly the same latency, assuming they have the same bandwidth.
- *Anonymity* - A potential adversary should be unable to link transaction messages and therefore the associated public keys to the IP address the message originated from.

There are three broadcasting mechanisms we want to introduce you to in this article: flooding, diffusion, and the Dandelion protocol.

![Broadcasting Mechanism - Flooding, Diffusion, and Dandelion](/assets/post_files/technology/expert/2.5-p2p/broadcasting_expert_D.jpg)
![Broadcasting Mechanism - Flooding, Diffusion, and Dandelion](/assets/post_files/technology/expert/2.5-p2p/broadcasting_expert_M.jpg)

### Flooding

Lets consider a node creating a new transaction: it wants to broadcast it to the network so it is included in the next block. In a first step, it sends it to all its peers. In the flooding model, each of those receiving nodes forwards this transaction with a constant time delay. Once forwarded a message travels along an edge with a deterministic delay. This means the longer the edge, the greater the time delay. A message sent from New Zealand to Austria takes longer than a message sent from SF to San Diego. Although information travels with the speed of light, over long distances these differences become noticeable.

What all this implies, is that flooding produces the most predictable spreading pattern. An adversarial node will receive all messages from a given node in a deterministic timing pattern. Knowledge of these timing patterns together with knowledge of the graph structure allows a Byzantine actor to link IP addresses to public keys - a potential attack vector.

### Diffusion

Diffusion is a refined version of flooding. The time it takes a message to travel along an edge is still deterministic - physics work either way - but the transmission delay is random. This means a node that receives a message doesn't forward it to all its peers simultaneously at a constant speed but adds random delays to it.

Currently, diffusion is used in most public blockchains. In 2015 BTC changed the propagation mechanism from a propagation with a fixed 200 ms delay to diffusion with random delays.

While diffusion makes it harder to derive information from the timing pattern of messages it still follows a simple intuition: If you imagine a very large graph with thousands of nodes and the source of a message at the center, the message still spreads point-symmetric around its origin. With sophisticated chain analysis tools and a realistically rather static than dynamic graph topology, an adversary can derive at least some information from timing and spreading patterns of messages. This holds especially true for nodes that create a large number of transctions and therefore a lot of data to analyze.

A logical thing for one of these active nodes would be to use a proxy to broadcast messages - *diffusion by proxy*. But there is another iteration of broadcasting mechanisms: welcome Dandelion.

### Dandelion

Instead of using a single node as a proxy to forward messages, in Dandelion spreading happens in two phases: the *anonymity phase* and the *spreading phase*.

During the anonymity phase a message is forwarded via a randomly-selected line on the network graph. Each relayer passes the message to exactly one of its randomly selected peers. The amount of hops in the anonymity phase is also random. When the anonymity phase is over and the spreading phase beginns, the message is broadcast to the entire network using diffusion.

> "The core idea behind our proposed networking stack is moving-target defense: we harness randomness in both the graph structure and the spreading protocol, thus making it difficult for adversaries to infer the source of a transaction. The key is to do so without harming latency and fairness guarantees." - Viswanath, Redesigning P2P Networking Stack of Cryptocurrencies for Anonymity.

Dandelion is implemented in Beam and Grin, two different implementations of the [MimbleWimble](https://github.com/mimblewimble/docs/wiki/A-Brief-History-of-MimbleWimble-White-Paper) protocol.

## Privacy and Security

Most privacy preserving techniques are not effective, if messages can be linked to IP address. Even with simple techniques and minimal knowledge of P2P graph structure up to 30% accuracy in linking messages to IP addresses. [[1]](#sources) In order to quantify the level of *anonymity* a spreading mechanism provides two metrics can be applied:

> *"Precision and recall are natural performance metrics. Recall is simply the probability of detection, a common anonymity metric that captures completeness of the estimator, whereas precision captures the exactness."* - [Bojja, Fanti, Viswanath - Dandelion: Redesigning the Bitcoin Network for Anonymity](https://arxiv.org/pdf/1701.04439.pdf)

To assess the security and privacy properties of the broadcasting mechanism, one assumes there are two types of nodes: honest ones and colluding, adversarial ones trying to deanonymize users. An attacker can apply two different techniques to deanonymize users: *eavesdropping* or the *spy-based approach*:

![Spy vs. Eavesdropper](/assets/post_files/technology/expert/2.5-p2p/spy_based_eavesdropper_D.jpg)
![Spy vs. Eavesdropper](/assets/post_files/technology/expert/2.5-p2p/spy_based_eavesdropper_M.jpg)

The eavesdropper connects to as many nodes as possible using a highly performant node. This node can establish several connections to a single honest server, with each connection coming from a different IP address. The honest node doesn't realize that more than one of its connections originates from the same node. The eavesdropper node listens to all relayed messages on the network without relaying any content itself, hence the name. The attacker running the eavesdropper node thus gets information about the network topology and learns its graph over time.

The spy-based adversary corrupts a fraction of nodes and observes the timetamps on brodcast messages.

> "This is different from the eavesdropper adversary because the eavesdropper only observes delayed timestamps, and it does so for all nodes, including the source [of the message]. Precise analysis of the spy-based adversary has not appeared in the literature."  - [Giulia Fanti, Pramod Viswanath, Anonymity Properties of the Bitcoin P2P Network](https://arxiv.org/pdf/1703.08761.pdf)

## Incentivizing Infrastructure

Most blockchains provide little to no incentive to run nodes on the network. In the early days of Bitcoin, most nodes where also mining and therefore regularly collected the block reward. Since mining has become a highly competitive business few nodes compared to the total count are mining today.

Another good reason to run a node is to safely accept payments. Most wallets are actually light nodes. They connect to a full node in order to "speak" with the blockchain. This means they have to trust the full node operator to feed them truthful information.
By running a full node yourself, you don't have to trust anybody - you can verify for yourself. Still, few people transact regularly enough to run a full node themselves and the technical barrier to entry is quite high.

#### Secure and Super Nodes

Horizen decided to incentivize node operators for facilitating the infrastructure of its ecosystem. Rewarding node operators seems fair when you consider that setting up a node up as well as maintaining it takes some time, and running it on a VPS comes at a cost.

Secure and Super Node operators receive a share of the mining reward that would usually go to the miners entirely. Each node class is incentivized with 10% of the total block subsidy.

Because Horizen wants not just many, but also capable and robust nodes, a node has to fulfull a set of minimum requirements in order to be eligible to receive the node rewards. Each node needs a valid TLS certificate, needs to be up and running for at least 92% of time and meet certain requirements regarding memory and computational power. You can find out more about the requirements for [Secure Nodes](https://horizenofficial.atlassian.net/wiki/spaces/ZEN/pages/136872258/Secure+Node+Criteria+and+Reward+Eligibility) and [Super Nodes](https://horizenofficial.atlassian.net/wiki/spaces/ZEN/pages/136872071/Super+Node+Criteria+and+Reward+Eligibility) here.

Those computational requirements are verified using an interactive challenge-response protocol - a type of Proof of Work if you will. Nodes receive computational challenges on a regular basis and by monitoring the time it takes them to respond to these challenges, one can derive an estimate on their capabilities. Nodes need to meet a certain target with their response time, otherwise they are not considered eligible for node reward payments.

Secure and Super Nodes are not just a means to create some sort of *masternodes*, they will be crucial for our [Sidechain model](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf). Node operators will be able to choose whether they want to support sidechains, and if so, which ones. We expect to see some interesting economic models with dApps build on our sidechains. dApps should incentivize node operators to support their sidechain, just like they would usually pay for the infrastructure their service is build on.

## Summary

Let's recap what we learned in this article: two compelling reasons for running a blockchain on a public P2P network are the the low cost of bootstrapping the system and the high level of resilience such a distributed infrastructure can offer.

The P2P network can be represented with a graph, where nodes comprise the vertices of the graph and the connections between peers are the edges connecting nodes. The main purpose of the network is to facilitate the communication between the different network participants.

While other distributed infrastructures are often optimized for content discovery as in the case of BitTorrent used for file sharing, P2P networks used for blockchains are optimized with regards to peer-discovery because all nodes store the same content anyways.

The broadcasting mechanism used to distribute messages across the network affects the level of privacy a node experiences. When attackers are able to link public keys to their originating IP addresses this opens the door to various attack vectors. We talked about flooding where messages are forwarded with a constant time delay, diffusion, where the time delay is random and Dandelion, where broadcasting happens in two stages: the anonymity phase and the spreading phase.

Lastly, we explained why we incentivize node operators on the Horizen network and to what conditions these incentives are tied.

### Sources

[1]: A. Biryukov, D. Khovratovich, and I. Pustogarov. Deanonymisation of clients in bitcoin p2p network. In "*Proceedings of the 2014 ACM SIGSAC Conference on Computer and Communications Security*", pages 15–29. ACM, 2014.
