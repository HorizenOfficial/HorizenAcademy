---
layout: post
type: article
title: "What is Mining?"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you learn about cryptocurrency miners in a simple, understandable way."
permalink: /eli5/what-is-mining/
topic: eli5
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-mining/Mining.jpg" alt="Mining"></td>
        <td>
            Mining is a part of coming to a <a href="{{ site.baseurl }}{% post_url /eli5/2000-01-07-what-is-consensus %}">consensus</a> on a blockchain that uses the Proof-of-Work method to agree on the order transactions on the Horizen network.
        </td>
    </tr>
</table> 

A miner is system that records every transaction that takes place on a blockchain. Two different miners might have different opinions about the order in which some transactions happened. Every miner writes everything they recorded on the blockchain in a [block]({{ site.baseurl }}{% post_url /eli5/2000-01-01-what-is-a-blockchain %}). Since there are many miners on a blockchain, there are therefore many different opinions about transaction sequence.

All the miners have to solve a difficult computation that requires a lot of processing power. The miner that solves the problem first gets to add its block to the blockchain. The winning miner's opinion will become the truth accepted by everybody else on the network.

We explain this process in more detail in our [Technology section for Beginners]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) and again in the [Advanced section]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}).
