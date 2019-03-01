---
layout: post
type: article
title: "Hash Functions"
permalink: /technology/advanced/hash-functions/
topic: technology
level: advanced
chapter: "How does a Blockchain work?"
---

Hash functions are an integral part of blockchain technology and serve many purposes. A hash function is a mathematical function that takes an input of any given length and produces an output of fixed length. The output is often called a hash value, (hash) digest, or hash.

There are [many hash functions](https://en.wikipedia.org/wiki/List_of_hash_functions) and just as many online "calculators" for hash functions such as [this one](https://www.fileformat.info/tool/hash.htm). The calculators allow you to hash any input that you like with different hash functions at the same time. The size of the input can range from a single digit to entire files, but the size of the output will always be the same.

A cryptographic hash function must fulfill the following set of criteria to be viable for use in a blockchain:

 - One-wayness - It has to be easy to calculate an output from a given input but impossible to calculate the input from a given output. When we are talking about cryptocurrency mining later in this chapter, this will be an integral part.
 - Pseudo Random - A change in the input will produce an unforeseeable change in the output. If the hash value of the input "2" was "4", the hash of the input "3" better not be 6.
 - Collision resistant - It should be hard (read impossible) to find two inputs to a hash function resulting in the same output. 
 - Deterministic - The same input always needs to produce the same output

![Hash function](/assets/post_files/technology/advanced/hash-functions/hash_function.jpg)



The most frequently used hash functions today is SHA-256. SHA is an acronym for Secure Hash Algorithm. The number indicates the length of the output in bits, e.g. there are four different lengths of outputs in the SHA family: 224, 256, 384 or 512 bits. Another type of hash functions relevant in blockchain tech is the RIPEMD family. RIPEMD160 is often used in many cryptocurrencies and as you might have guessed produces an output of 160 bits.

Hash values are used for many purposes in cryptocurrencies and blockchains. The most notable use is the process of chaining together the blocks, thus creating the blockchain. We call a hash value a fingerprint of data for its property of being collision resistant. If you were sending a file to another person you can include the hash digest if you hash the file before sending it. The recipient can calculate the hash value for the file after receiving it and by comparing it to the hash value you provided they can check the integrity of the file.

Each set of data used as an input can be easily identified by the unique hash that it generates. It is nearly impossible to find two inputs to the hash function, that result in the same output (cause a collision). It would take all the supercomputers on earth combined several thousands of years to create a collision. This is because there is no way to "calculate" a collision. The only way to find one is through a brute-force approach, where you try different inputs until you get a collision by chance.

### Summary

Hash Functions are the first cornerstone of blockchain technology. A hash of a file is like a fingerprint. It is easy to detect if two files are identical or not by comparing their hashes. Hash functions "chain" blocks together. You cannot change data from the past without including the hash of the preceding block. If you attempt to change data the references or links will break.

In our next article, we will look at public-key cryptography. Public-key cryptography is the second cornerstone of blockchain tech and the concept that makes up your "identity" on the blockchain.

### Further Reading

{%
  include further_reading.html
  title="Hash functions explained with Emojis"
  summary="A playful approach at explaining hash functions and their importance for blockchains."
  author="Patrick Woodhead"
  url="https://medium.com/swlh/this-simple-yet-powerful-invention-is-changing-the-world-d04688c25f13"
  image="https://cdn-images-1.medium.com/max/1200/1*rONjogTs70KIuLyAO_oy_g.png"
%}
