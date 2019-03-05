---
layout: post
type: intro
title: "How Does a Blockchain Work?"
permalink: /technology/advanced/how-does-a-blockchain-work/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
---

In this chapter of our Advanced Level about blockchain technology, we will introduce you to the most important ideas, elements, and entities of a public blockchain starting with an [overview]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-02-the-elements-of-a-blockchain %}).

The two technical concepts in this chapter are hash functions and public-key cryptography. [Hash functions]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}) are used to verify the integrity of data on a blockchain. [Public-key cryptography]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography %}) is used to verify ownership on the blockchain. Because we have tools to ensure data integrity and ownership we are equipped to have a currency on a blockchain.

![How it works](/assets/post_files/technology/advanced/public-key-cryptography/how_it_works.jpg)

In the third article, we will talk about the infrastructure that is running a blockchain. Many servers, or nodes are connected in a distributed [peer-to-peer or P2P network]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-05-a-peer-to-peer-p2p-network %}). The architecture of this network is what helps provide the benefits, that blockchain technology offers and what makes the technology so robust.

![P2P network](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/central-distri.jpg)

If you have a large number of nodes running a currency, they not only need to communicate about events such as transactions. They also need to agree on what happened periodically. There are different ways to achieve that kind of agreement among the network participants. The method of coming to an agreement is called [consensus mechanism]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) and we will look at two examples of these mechanisms.

The most used kind of consensus mechanism, Proof-of-work, requires miners that support the network with computing power. How contributing to the network with computational power helps to protect the data on a blockchain will be covered in our last article on [mining]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}).

![Mining](/assets/post_files/technology/advanced/mining/miner.jpg)
