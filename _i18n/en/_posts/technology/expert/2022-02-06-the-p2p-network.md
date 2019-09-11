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

read bottom part here on gossip \url{https://medium.com/s/story/lets-take-a-crack-at-understanding-distributed-consensus-dad23d0dc95}

Infrastructure. Communication protocol.

p2p network protocols mostly designed to efficiently discover content stored with one of its nodes. The protocol should ensure, that querying a small fraction of nodes (logarithmic to node count or similar) is enough to find this information stored on a subset of all nodes. With blockchains, there is only one piece of data that you care about: the blockchain, and it is stored with every full node. Peer discovery is more important than content discovery in terms of what to optimize the protocol for. (sinngemäß Ethereum Eclipse paper)

In the article on the blockchain as a Protocol to transfer value we looked at the \textbf{application layer}. \textbf{Here we focus on the protocol of a blockchain at the network layer.

### Properties of P2P Networks

resilient, robust, example filesharing, hard to take down
redundand, not the most performant

graph structure/dynamicity: "We assume that the network can change the graph at varying rates to control the adversary’s ability to learn it. We consider two extremes on this spectrum: static graphs and dynamic graphs. In static graphs, the network never changes the graph, so the adversary learns it fully over time. In dynamic graphs, the graph is changed at a rate such that the adversary only knows its local neighborhood at any given point in time."

### Graph Construction


Graph $G = (V, E)$ defined as set of vertices $V$ and edges $E$. Each edge has a time delay $d$

Nodes are vertices and edges are peer connections.

++++ Graph graphic

similar to dag article. there it referred to data structure at application layer. Here it refers to network structure at network layer.

Go online, node connects to first node.. what happens next -> node discovery story

### Broadcasting mechanism

Desirable Properties: 

- Low Latency: maximum time for a message to reach all nodes should be bounded and small. If not, risk of reaching inconsistent state.
- Fairness: All nodes should experience roughly the same latency
- Anonymity: a potential adversary should be unable to link transaction messages and therefore the associated public keys to the ip address the message originated from. 

Mixing as well as "new address for each incoming TX" doesn't help if messages can be linked to ip address. Even with simple techniques and minimal knowledge of P2P graph structure up to 30\% accuracy in linking messages to ip addresses. 
\footnote{A. Biryukov, D. Khovratovich, and I. Pustogarov. Deanonymisation of clients in bitcoin p2p network. In Proceedings of the 2014 ACM SIGSAC Conference on Computer and Communications Security, pages 15–29. ACM, 2014.}

"Precision and recall are natural performance metrics. Recall is simply the probability of detection, a common anonymity metric that captures completeness of the estimator, whereas precision captures the exactness." - dandelion paper

broadcasting mechanism effects the order in which peers receive messages. It's efficiency determines the message propagation time.

message propagation time in decentralized networks affects network security through data consistency. The faster a message propagates throughout the network the faster a consistent state is reached and the lower the stale rate. less wasted pow. 

\url{https://twitter.com/lopp/status/1077587277990244353?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1077587277990244353&ref_url=https%3A%2F%2Fmedium.com%2Fmedia%2F694c69b73e31a4f020bf123fd01bdc45%3FpostId%3D9d58e9ab4bf0}

{% include blocks/tweet.html id="1077587277990244353" %}


- important step, affects global consistency of network
- cryptocurrency can be abstracted into two layers: application and networking layer
- "The application layer handles tasks like transaction management, blockchain processing, and mining. Nodes are identified by their public keys in the application layer. The network layer handles communication between nodes, which occurs over a P2P network of inter-node TCP connections. In the network layer, nodes are identified by their IP addresses. As we shall see momentarily, a node’s IP address and public key should re- main unlinkable for privacy reasons." Dandelion Paper p. 2
- currently \textit{diffusion} in most currencies


To assess security properties one assumes there are two types of nodes: honest ones and colluding, adversarial ones trying to deanonymize  users.


![Spy vs. Eavesdropper](/assets/post_files/technology/expert/2.5-p2p/spy_based_eavesdropper_D.jpg)

Flooding, diffusion, Dandelion (completely rebuilt networking stack.)

![Broadcasting Mechanism](/assets/post_files/technology/expert/2.5-p2p/broadcasting_D.jpg)

### Flooding

propagation delay deterministic along edges (longer edge, longer delay) and constant delay in nodes.

"if node v is the source, then the adversarial nodes re- ceive all messages from v in a deterministic timing pattern. Moreover, the adversary can predict this pattern from the structure of the graph, due to the fixed nature of flooding."




### Diffusion

in 2015 BTC changed propagation from trickle propagation (fixed 200 ms delay) to diffusion with random delay - dan.++

"Diffusion is a natural successor to flooding; instead of us- ing deterministic delays, it uses random ones"

"All of these results rely on the intuition that diffusion spreads con- tent symmetrically. Because of this, the source node appears at the center of the adversary’s observed spreading pattern, and can be identified. Diffusion is therefore not a satisfac- tory solution to this problem.
Lesson: Random forwarding delays are not powerful enough to provide anonymity against spreading protocols that spread content symmetrically."

improvement: diffusion by proxy. First just send message to random node who then runs diffusion.

"We subsequently assume that the spreading phase can be fully deanonymized; i.e., the node that launches the diffusion process can be identified. As such, we only need to analyze the precision and recall of the anonymity phase."


### Dandelion

"Dandelion spreading forwards each message on a randomly-selected line before diffusing it to the rest of the network."

"Dandelion consists of two phases. In the first phase, each transaction is propagated on a random line; that is, each relay passes the message to exactly one (random) node for a random number of hops. In the second phase, the mes- sage is broadcast as fast as possible using diffusion."

" The core idea behind our proposed networking stack is moving-target defense: we harness randomness in both the graph structure and the spreading protocol, thus making it difficult for adversaries to infer the source of a transaction. The key is to do so without harming latency and fairness guarantees." - dandelion plusplus

\url{https://arxiv.org/pdf/1701.04439.pdf}
dandelion used in beam/grin

### Communication Standards

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
lightning might change this (payment routing fees)

### Secure and Super Nodes

Secure/Super Nodes not for the sake of masternodes but to achieve network stability

also just fair, takes time and cost (VPS)

market should find an equilibrium between network security/stability and incentive by number of nodes and coin price
minimum requirements, TLS, blabla
opt-in/out to support dapps, model needs to be evaluated

fair, building a business or dapp on public infrastructure, one should have to pay for it in some form or another.

### Summary

\subsubsection*{FR}
\url{https://bitcoin.org/en/developer-reference#p2p-network}
\url{https://en.wikipedia.org/wiki/CAP_theorem}
\url{https://arxiv.org/pdf/1701.04439.pdf} dandelion

