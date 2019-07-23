---
layout: post
type: article
title: "What is a Hash Function?"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you learn about hash functions in a simple, understandable way."
permalink: /eli5/what-is-a-hash-function/
topic: eli5
further_reads: [hashing]
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-a-hash-function/Hash.jpg" alt="Cryptocurrency"></td>
        <td>
            A hash function is something that we use to create a fingerprint of a file. You can use a hash function to create a fingerprint for every type of file you can imagine.
        </td>
    </tr>
</table>   

Let's say I want to send you a text file and don't want you to change it. I could use a hash function to create a fingerprint of the text before I send it to you. 

When you send the text file back to me, I could use the hash function again to create a second fingerprint. If both fingerprints match, you have not changed anything about the file. If the fingerprints don't match, I know that you changed the text in some way.

In a blockchain, we use hash functions to create a fingerprint of the transaction history. If somebody cheats the system and changes the transaction record after the fact, everybody would notice because the fingerprints of the transaction history before and after the manipulation don't match anymore

We explain hash functions in our [Advanced Technology section]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}).

