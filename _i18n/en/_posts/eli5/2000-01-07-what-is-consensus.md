---
layout: post
type: article
title: "What is Consensus?"
permalink: /eli5/what-is-consensus/
topic: eli5
---

The [blockchain]({{ site.baseurl }}{% post_url /eli5/2000-01-01-what-is-a-blockchain %}) records all the transfers of money. If you have only 1 ZEN and create two transactions at the same time spending the same coin twice, the network needs to agree on which of the two transactions was first and therefore is the valid one.

The consensus mechanism makes sure, that the entire network agrees on the order of transactions. Every few minutes, when a new block is added to the blockchain the network agrees on the order of the most recent transactions. This way nobody can cheat the system and spend more than they have.

There are different ways to come to a consensus in a [Peer-to-Peer network]({{ site.baseurl }}{% post_url /eli5/2000-01-06-what-is-a-peer-to-peer-network %}). On the Horizen blockchain, people vote with their computational power on the order of transactions. If your computer is twice as fast as mine then the chance of you deciding on the order of transactions is twice as high as me deciding on it.

### Further Reading

{%
  include further_reading.html
  title="Consensus for Kids"
  summary="This article is taking a look at the three most common consensus mechanisms: Proof-of-Work, Proof-of-Stake and delegated Proof-of-Stake in simlpe terms."
  author="Lisk Academy"
  url="https://lisk.io/academy/blockchain-basics/blockchain-for-kids/consensus-for-kids"
  image="https://lisk.io/content/5-academy/2-blockchain-basics/3-blockchain-for-kids/2-consensus-for-kids/59-eli5-consensus-protocols-dpos.jpg"
%}
