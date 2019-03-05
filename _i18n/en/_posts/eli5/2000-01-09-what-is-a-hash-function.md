---
layout: post
type: article
title: "What is a Hash Function?"
permalink: /eli5/what-is-a-hash-function/
topic: eli5
---

A hash function is something that we use to create a fingerprint of a file. You can use a hash function to create a fingerprint for every type of file you can imagine.  

Let's say I want to send you a text file and don't want you to change it. I could use a hash function to create a fingerprint of the text before I send it to you. 

When you send the text file back to me, I could use the hash function again to create a second fingerprint. If both fingerprints match, you have not changed anything about the file. If the fingerprints don't match, I know that you changed the text in some way.

In a blockchain, we use hash functions to create a fingerprint of the transaction history. If somebody cheats the system and changes the transaction record after the fact, everybody would notice because the fingerprints of the transaction history before and after the manipulation don't match anymore

We explain hash functions in our [Advanced Technology section]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}).

### Further Reading

{%
  include further_reading.html 
  title="Hashing" 
  summary="This article is starting with a gentle introduction of what a hash function is. The video in this article does a great job of explaining this." 
  author="Lisk Academy" 
  url="https://lisk.io/academy/blockchain-basics/how-does-blockchain-work/what-is-hashing" 
  image="https://lisk.io/content/5-academy/2-blockchain-basics/4-how-does-blockchain-work/5-what-is-hashing/11a-hashing.gif"
%}
