---
layout: post
type: article
title: "The P2P Network"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/the-p2p-network/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

There are many ways to classify and differentiate between blockchains. One of them is to differentiate between public and permissioned blockchains. Permissioned blockchains are meant for a defined group of people, often times a consortium of companies wanting to share data. Public blockchains are commodidies, a digital good that anyone with an internet connection can access. Nobody owns these commodities, so there is no central provider for their infrastructure. Instead, the infrastrucuture is provided by many independent peers, spread all over the globe. Because the nodes of the network are run independently from one another the infrastructure as a whole - the distributed *Peer-to-Peer* (P2P) network is highly resilient.

![DAG](/assets/post_files/technology/expert/2.5-p2p/central-distri_D.jpg)
![DAG](/assets/post_files/technology/expert/2.5-p2p/central-distri_M.jpg)

In the article on the blockchain as a protocol to transfer value we looked at the protocol at the [*application layer*](https://en.wikipedia.org/wiki/Application_layer). In this article, we focus on the protocol of a blockchain at the [*network and transport layer*](https://en.wikipedia.org/wiki/Network_layer).

At the application layer tasks like transaction management, blockchain processing, and mining are handeled. On this layer, nodes are identified using public keys and addresses.
At the network layer peers are identified by their IP addresses. It handles the communication between nodes which happens via inter-node TCP connections - read: the internet. It is desirable to keep IP addresses and publik keys unlinkable for privacy reasons.

### The Purpose of P2P Networks

**Note**: When we use the term *nodes* in this article, we refer to *full nodes* storing a copy of the entire blockchain. We will use the term *light nodes* whenever we explicity talk about them. Light nodes don't store a copy of the blockchain but only a key pair. They need to connect to a full node before they can interact with the blockchain and are basically *clients* that connect to one of the full nodes that act as a *server* at that moment.

First and foremost, the P2P network serves the communication between nodes.
Data on a blockchain is secure, because many copies of it exist. Those copies need to be in synch, otherwise having a large number of copies would not make much sense. In order for all nodes to stay in synch they need to communicate constantly to update each other on events, such as new transactions or blocks that are found.

The communication between nodes usually happens entirely via [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol), a main protocol of the internet protocol suite at the transport layer. Additionally, the communication between noden can be secured using [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) a cryptographic protocol at the application layer to provide private and secure communication. The communication between [Secure Nodes](https://www.horizen.global/securenodes/) and [Super Nodes](https://www.horizen.global/supernodes/) on the Horizen blockchain is secured using TLS.

P2P network protocols are designed to efficiently discover content stored with one of its nodes. The protocol should ensure, that querying a small fraction of nodes (e.g. logarithmic to the total node count) is enough to find information stored on a subset of all nodes. With blockchains the situation is slightly different. All nodes store a copy of the blockchain. This is the second main purpose of the P2P network: maintaining a large number of independent copies of the same data.

Because every node stores a copy of the blockchain, *peer discovery* is more important than *content discovery* in terms of what to optimize the network protocol for.

### Properties of P2P Networks

When you put yourself into the position of somebody wanting to launch a distributed system - like a blockchain - running it on a P2P network is the obvious choice for a few reasons.

First, it doesn't require many resources. The P2P network can be spun up with only a handful of nodes at near zero cost. Once the network gains traction new nodes can be added seamlessly.

Second, it provides a high level of resilience and the more people join the network, the more resilient it becomes. One of the stated goals of Bitcoin from the very beginning was to be able to withstand state level actors trying to attack the network. In the very beginning, when there were only a few nodes this was not the case, but at the same time the incentives for potential attackers to target the network were very small or even non-existant. The more people joined the network and the more value it accrued, the higher the incentives to target the network but at the same time the more resilient the network. You could say the robustness of a P2P network naturally scales proportional to the potential attackers incentives to actually perform an attack.

A similar development could be observed with the [BitTorrent protocol](https://en.wikipedia.org/wiki/BitTorrent) used for P2P filesharing. Although there was much interest in shutting the network down by the entertainment industry, all attempts failed. Simon Morris wrote [a very interesting and insightful piece](https://medium.com/@simonhmorris/why-bittorrent-mattered-bittorrent-lessons-for-crypto-1-of-4-fa3c6fcef488) on the history of Bittorrent that is definitely worth a read.

The two aforementioned reasons for using P2P networks to run public blockchains are compelling, and there are not many alternatives (if any), but distributed systems do come with a trade-off. While security benefits from the redundancy of many copies being maintained simultaneously, this comes at the cost of performance. In order to achieve a high level of decentralization the minimal requirements to run a node should not pose a high barrier to entry for any participant. This, in turn, means, that the least performant nodes (in terms of bandwidth and/or computational power) limit the network as a whole.

### Graph Construction

To illustrate a distributed network we use a *graph*. This term sounds very simple at first but there is a bit more to it. The field of *graph theory* is a mathematical discipline studying the [different types of graphs](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)). We touched on graph theory before in our article on [*Directed Acyclic Graphs*]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-a-relative-the-dag %}) or DAGs. There we talked about graphs in the context of data structures - namely how blocks can be interconnected at the application layer. Here the graph describes the connectivity between nodes at the network layer.

++++ Graph-distributed-network

A graph \\(G = (V, E)\\) defined as set of vertices $V$ and edges $E$. Each edge connects two vertices and has a time delay $d$ it takes a message to travel along that path. The graph of a distributed network changes constantly. This happens when nodes go offline and their peers reconnect to different nodes, or when new nodes join the P2P network. The rate of change can vary, and this has implications on the privacy of each node.

There are two extremes when it comes to the dynamicity of the network graph. A fully static graph never changes, which means an adversary can learn the entire graph over time. This means he is in a good position to link IP addresses to public keys.
A fully dynamic graph changes at a rate that prevents an adversary from learning the graph structure and in turn link IP addresses to public keys. He will only ever know his local graph environment.




When we talked about [distributed consensus]({{ site.baseurl }}{% post_url /technology/expert/2022-02-051-consensus-in-distributed-systems %}) we introduced two types of malfunctions at the network layer: *node failures* and *network failures*. Not only does the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-050-consensus-mechanisms %}) have to account for *node failures* and *network failures*, but so does the P2P network itself.

+++ node failure
one sentence about node failures

++++ network failures
one sentence about it

Go online, node connects to first node.. what happens next -> node discovery story

### Broadcasting mechanism

As we shall see momentarily, a node’s IP address and public key should re- main unlinkable for privacy reasons." Dandelion Paper p. 2


Desirable Properties: 

- Low Latency: maximum time for a message to reach all nodes should be bounded and small. If not, risk of reaching inconsistent state.
- Fairness: All nodes should experience roughly the same latency
- Anonymity: a potential adversary should be unable to link transaction messages and therefore the associated public keys to the ip address the message originated from. 

Mixing as well as "new address for each incoming TX" doesn't help if messages can be linked to ip address. Even with simple techniques and minimal knowledge of P2P graph structure up to 30% accuracy in linking messages to ip addresses. [[1]](#sources)

"Precision and recall are natural performance metrics. Recall is simply the probability of detection, a common anonymity metric that captures completeness of the estimator, whereas precision captures the exactness." - dandelion paper

broadcasting mechanism effects the order in which peers receive messages. 
It's efficiency determines the message propagation time.

message propagation time in decentralized networks affects network security through data consistency. The faster a message propagates throughout the network the faster a consistent state is reached and the lower the stale rate. less wasted pow. 

\url{https://twitter.com/lopp/status/1077587277990244353?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1077587277990244353&ref_url=https%3A%2F%2Fmedium.com%2Fmedia%2F694c69b73e31a4f020bf123fd01bdc45%3FpostId%3D9d58e9ab4bf0}

{% include blocks/tweet.html id="1077587277990244353" %}


- important step, affects global consistency of network


To assess security properties one assumes there are two types of nodes: honest ones and colluding, adversarial ones trying to deanonymize  users.


![Spy vs. Eavesdropper](/assets/post_files/technology/expert/2.5-p2p/spy_based_eavesdropper_D.jpg)

Flooding, diffusion, Dandelion (completely rebuilt networking stack.)

![Broadcasting Mechanism](/assets/post_files/technology/expert/2.5-p2p/broadcasting_D.jpg)

### Flooding

propagation delay deterministic along edges (longer edge, longer delay) and constant delay in nodes.

"if node v is the source, then the adversarial nodes receive all messages from v in a deterministic timing pattern. Moreover, the adversary can predict this pattern from the structure of the graph, due to the fixed nature of flooding."

- currently diffusion in most currencies

### Diffusion

in 2015 BTC changed propagation from trickle propagation (fixed 200 ms delay) to diffusion with random delay - dan.++

"Diffusion is a natural successor to flooding; instead of us- ing deterministic delays, it uses random ones"

"All of these results rely on the intuition that diffusion spreads con- tent symmetrically. Because of this, the source node appears at the center of the adversary’s observed spreading pattern, and can be identified. Diffusion is therefore not a satisfac- tory solution to this problem.
Lesson: Random forwarding delays are not powerful enough to provide anonymity against spreading protocols that spread content symmetrically."

improvement: diffusion by proxy. First just send message to random node who then runs diffusion.


### Dandelion

"Dandelion spreading forwards each message on a randomly-selected line before diffusing it to the rest of the network."

"Dandelion consists of two phases. In the first phase, each transaction is propagated on a random line; that is, each relay passes the message to exactly one (random) node for a random number of hops. In the second phase, the mes- sage is broadcast as fast as possible using diffusion."

first phase anonymity phase. "We subsequently assume that the spreading phase can be fully deanonymized; i.e., the node that launches the diffusion process can be identified. As such, we only need to analyze the precision and recall of the anonymity phase."

" The core idea behind our proposed networking stack is moving-target defense: we harness randomness in both the graph structure and the spreading protocol, thus making it difficult for adversaries to infer the source of a transaction. The key is to do so without harming latency and fairness guarantees." - dandelion plusplus

\url{https://arxiv.org/pdf/1701.04439.pdf}
dandelion used in beam/grin

### Communication Standards

Learned about topology of network, about how data is passed along. but what data is being passed

Communication via Messages

In the article on **Blockchain as a Data Structure** we already introduced some conventions that effect the communication between peers. Most messages on a P2P network of a blockchain are transactions. Also blocks

What a message or transaction needs to look like was covered in the aforementioned article. Here we will explain how peers exchange those standardized messages.

- Start String to indicate if the message is originating from Mainnet/Testnet/Regtest
- Header: start string, command name, payload size (max. 32 MiB), checksum (first 4 bytes SHA256)

Data messages, requesting info from other nodes, e.g. most recent block.

"Bitcoin’s “headers first” feature, in which block propagation was split into two separate messages, Block and Header. Nodes only ask for Block after Header passes the PoW checks AND it is a longest (or longer) chain." - \url{https://medium.com/@dsl_uiuc/fake-stake-attacks-on-chain-based-proof-of-stake-cryptocurrencies-b8b05723f806}

- GetBlocks: requesting block header hashes (inv-message/inventory). Node that was off-line needs headers to request rest of data
- GetData: can request a TX, a Block or some other types.

### Incentivizing Infrastructure

Bitcoin basically no incentive except for verifying instead of trusting. Full Node only needed to securely receive TX. 
Light client enough to safely send funds.
no financial incentive
Payment channel networks like lightning where a fee is charged based on volume of the transaction not data size might change this. But not every lightning node is a bitcoin full node and vice versa. (payment routing fees)

### Secure and Super Nodes

Secure/Super Nodes not for the sake of masternodes but to achieve network stability. 
minimum requirements, TLS, blabla

also just fair, takes time and cost (VPS)

market should find an equilibrium between network security/stability and incentive by number of nodes and coin price
opt-in/out to support dapps, model needs to be evaluated

fair, building a business or dapp on public infrastructure, one should have to pay for it in some form or another.

### Summary


### Sources

[1]: A. Biryukov, D. Khovratovich, and I. Pustogarov. Deanonymisation of clients in bitcoin p2p network. In *Proceedings of the 2014 ACM SIGSAC Conference on Computer and Communications Security*, pages 15–29. ACM, 2014.

\subsubsection*{FR}
\url{https://bitcoin.org/en/developer-reference#p2p-network}
\url{https://en.wikipedia.org/wiki/CAP_theorem}
\url{https://arxiv.org/pdf/1701.04439.pdf} dandelion
