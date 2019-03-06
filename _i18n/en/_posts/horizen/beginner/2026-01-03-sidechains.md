---
layout: post
type: article
title: "Sidechains"
permalink: /horizen/beginner/sidechains/
topic: horizen
level: beginner
---

One of the major challenges in making blockchain technology ready for mass adoption is scalability. Today most blockchains can only handle a handful of transactions per second, while payment networks like VISA support several thousand transactions per second.

There are many different approaches to making blockchains scale. Horizen is looking into two of those possible solutions. The last article covered our efforts to build a Block-DAG protocol, this article is about our Sidechain construction.

![Sidechains](/assets/post_files/horizen/beginner/sidechains/sidechains.jpg)

When you enable sidechains, you allow a number of different blockchains to run in parallel. A sidechain is a blockchain in and of itself with the added feature of being interoperable with the mainchain. The interaction with a blockchain facilitating a cryptocurrency, such as our current Horizen blockchain, will mostly be concerned with transactions. The most important part of building our sidechain construction is the cross-chain transfer protocol. The cross-chain transfer protocol will allow ZEN to be sent from the mainchain to one of the sidechains and vice versa.

The illustration above shows that Horizen is planning to dedicate one sidechain to the treasury funds of the DAO. ZEN is added to the treasury sidechain with every mined block. The funds are automatically released to the people who submitted the approved projects once the community votes on and approves the submitted projects each month. Casting a vote for the treasury system is similar to a regular transaction, but has additional data. Moving the entire voting process to a sidechain saves capacity on the mainchain for other transactions.

### Summary

You can run several blockchains simultaneously with a sidechain construction. Each chain is interoperable with the other ones. You can tweak the features of a single chain to satisfy your needs, without affecting the other chains. This allows for the deployment of purpose-specific chains tailored just as you need them for a treasury system, a decentralized App (dApp) or any other use case.
