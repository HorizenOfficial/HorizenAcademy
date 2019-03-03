---
layout: post
type: article
title: "Sidechains"
permalink: /horizen/advanced/sidechains/
topic: horizen
level: advanced
---

A sidechain is a blockchain in and of itself with the added feature of being interoperable with the main blockchain. Transactions are the most common interaction with a blockchain facilitating a cryptocurrency, such as our current Horizen blockchain. The Engineering team at Horizen, led by Alberto Garoffolo, has proposed a sidechain construction based on proof-of-stake principles. The main innovation is a new backward transfer protocol that allows transactions from one of the possibly many sidechains back to the mainchain, without the mainchain having to track the sidechain and without introducing a centralized federation of validators. While a reference implementation of a sidechain consensus protocol will be provided, a wide range of sidechain consensus protocols will be possible.

Sidechains are a concept that people have been looking into for a while now. The first proposal of sidechains was developed by Back et al. in 2014 and a number of different teams are working on implementing them as a solution to the problems of scaling and interoperability.

### What is a Sidechain and Why Would You Want One?

When Back et al. introduced the concept of sidechains in 2014 they provided the following definition along with it:

_"A sidechain is a blockchain that validates data from other blockchains. […] A pegged sidechain is a sidechain whose assets can be imported from and returned to other chains; that is, a sidechain that supports two-way pegged assets."_ A. Back et al. — Enabling blockchain innovations with pegged sidechains, 2014

In other words, a sidechain is a blockchain in and of itself, but with the capability to communicate and interoperate with one or more other chains. When you hear the term sidechain today, people are mostly talking about pegged sidechains, which allow you to transfer assets back and forth between chains.

![sidechains](/assets/post_files/horizen/advanced/sidechains/sidechains.jpg)

### So What is the Benefit of This Technology?

Most blockchains facilitating cryptocurrencies use the proof-of-work consensus algorithm and have incorporated the core functionalities of the Bitcoin protocol. Therefore they inherited a lot of the constraints from the code created by Satoshi Nakamoto. This includes limited throughput, high latency, and a limited ability to scale. Sidechains present an option to help overcome some of these technological shortcomings, but besides just opening doors to potential technical leaps, they touch on the topic of governance in a way.

As debates across the recent years have shown, making changes to the codebase in decentralized projects tends to be a cumbersome process. This is arguably a feature, not a bug. Stability (not in regards to price, but code) is crucial, especially for projects such as Bitcoin, and the overall security of the protocol benefits greatly from the careful consideration of every change applied to the system.

Sidechains offer a mechanism to implement features on top of a first layer protocol without compromising the security or stability of said protocol. After an initial fork that includes the capability to deploy sidechains and introduces a way to transfer assets from the mainchain to the sidechain and vice versa, a number of parallel chains can be built, each serving a different purpose, without having to build consensus for each individual feature.

It is important to note that the initial change to the codebase enabling the deployment of sidechains and cross chain transfers has to be done carefully and possible solutions should be evaluated with great caution. If a project manages to deploy those features then developers can start playing around and build on top of projects where changes to the protocol traditionally required consensus building for months and even years. Ideally the sidechain implementation will give developers on the sidechain many degrees of freedom while eliminating the possibility to compromise mainchain security. If a user has no need to use a particular sidechain, he doesn’t have to care.

### What Can You Do with a Sidechain?

As we said earlier many teams are looking into the technology of sidechains for a variety of purposes. The team behind Rootstock is working on a way, to provide smart contract functionality on top of Bitcoin. They are referring to their sidechains as secondary chains. Polkadot, naming its sidechains Parachains aims to connect permissioned and public blockchains. The general idea of Plasma is also based on sidechains, or child blockchains and here the main goal is scaling. Drivechains are meant to enable BTC to be moved to other software applications, like different public blockchains.

You could make a case of distinguishing between sidechains and drivechains as discussed in this paper by Rootstock. We will pick up on their distinction shortly when talking about how sidechains work.

The general idea is the same though and satisfies the broad definition of a pegged sidechain that Back et al. provided about four years ago.

Critics of the sidechain concept like to point out, that most sidechain implementations currently rely on a set of validators to facilitate cross-chain transactions. Sidechain constructions are often times called trust-minimized instead of trustless. The risk comes down to the ability of the trusted validators to censor transactions from main- to sidechain and vice versa. Our protocol addresses this issue in an elegant way.

### Why Does Horizen Look at Sidechains?

The Horizen blockchain project has set itself ambitious goals. We plan on including features such as developing a treasury system for the [DAO]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-01-dao %}) in cooperation with IOHK, a decentralized solution for tracking Secure and Super Nodes and handling their rewards, as well as developing a [Block-DAG]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-02-block-dag %}) protocol to increase transaction throughput.

You can probably see the benefits of developing a sidechain first as some of these functionalities would require significant modifications of the core client if implemented directly into the existing codebase.  Building new features and making changes to the protocol, even if they are small, is not just challenging from the aspect of building consensus around them, but it also comes with security risks. Every addition has to be considered carefully.

The idea is to develop a robust sidechain implementation once and being able to simplify building new features that expand the Horizen ecosystem afterward. Sidechain implementations will be completely decoupled from the mainchain and can, for example, run an entirely different consensus algorithm.

That way, it would be possible to run the sidechains facilitating the treasury and node tracking system with a [Proof-of-Stake]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) like consensus protocol, while maintaining the mainchain with “traditional” [Proof-of-Work]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}).

### How Does It Work Now?

The construction of the sidechain model consists of two parts:

 1. The _sidechain consensus protocol_ — SCP
 2. The _cross-chain transfer protocol_ or 2-way peg — CCT

The _sidechain consensus protocol_ governs how the network agrees on new blocks and therefore on the history of transactions. The _cross-chain transfer protocol_ determines how assets can be sent from the mainchain to a sidechain and vice versa. We will look at these two protocols in our [sidechain article in the expert section]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}).

![SCP_CCT](/assets/post_files/horizen/advanced/sidechains/SCP_CCT.jpg)

### Summary

Sidechains can be an elegant way to overcome current limitations regarding scalability and governance in the blockchain ecosystem. While you can increase the throughput, so the number of transactions per second (TPS) with sidechains, they also allow experimentation without compromising the security of the main blockchain.

The ability to deploy sidechains will dramatically enhance the possibilities of building on top of existing public blockchains. One of the first use-cases of a sidechain for the Horizen project will likely be the Treasury, moving the organization a step closer to becoming a decentralized autonomous organization (DAO). 

We will continue this article on [article on sidechains in the Expert Section]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}). We will look at how the proposed solution works on a technical level and examine the _sidechain consensus protocol_ and the _cross-chain transfer protocol_.
