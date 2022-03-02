---
layout: post
type: article
title: "Hash Functions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you learn why hash functions are an important part in every blockchain because they are used to verify the integrity of data."
permalink: /technology/advanced/hash-functions/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
further_reads: [hash_functions_explained_with_emojis]
canonical_link: "/technology/expert/hash-functions/"
---

Blockchains are a way to record data in an immutable way. For this to be a valuable feature, the data written to the blockchain better be correct. Verifying what data gets added makes a lot of sense, especially as storage on the blockchain is limited. One tool in the toolbox used to verify data is the *hash function*.

Hash functions are an integral part of blockchain technology and serve many purposes. A hash function is a mathematical function that takes an input of any length and produces an output of fixed length. The output is often called a *hash value*, *(hash) digest*, or simply *hash*.

There are [many hash functions](https://en.wikipedia.org/wiki/List_of_hash_functions) and just as many online "calculators" for hash functions such as [this one](https://www.fileformat.info/tool/hash.htm). The tool allows you to hash any input with different hash functions at the same time. The size of the input can range from a single digit to entire files, but the size of the output will always be the same.

A cryptographic hash function must fulfill the following set of criteria to be viable for use in a blockchain:

- *One-wayness* - It has to be easy to calculate an output from a given input but impossible to calculate the input from a given output.
- *Pseudorandom* - A change in the input must result in an unforeseeable change of the output. If the hash value of the input *2* was *4*, the hash of *3* better not be *6*.
- *Collision-resistant* - It should be hard (read impossible) to find two inputs to a hash function producing the same output.
- *Deterministic* - A given input always needs to produce the same output

![Hash function](/assets/post_files/technology/advanced/2.2-hash-functions/hash_function_D.jpg)
![Hash function](/assets/post_files/technology/advanced/2.2-hash-functions/hash_function_M.jpg)

The most frequently used hash function today is *SHA-256*. SHA is an acronym for *Secure Hash Algorithm*. The number indicates the length of the output in bits, e.g. there are four different lengths of outputs in the SHA family: 224, 256, 384 or 512 bits. Another type of hash functions relevant in blockchain tech is the RIPEMD family. *RIPEMD160* is used in many cryptocurrencies and as you might have guessed produces an output of 160 bits.

Hash values are used for many purposes in cryptocurrencies and blockchains. The most notable use case is the process of chaining together the blocks, thus creating the blockchain. We call a hash value a fingerprint of data for its property of being collision-resistant.
Each set of data used as an input can be easily identified by the unique hash that it generates. It is nearly impossible to find two inputs to the hash function, that result in the same output (cause a collision). It would take all the supercomputers on earth combined several thousands of years to create a collision. This is because there is no way to "calculate" a collision. The only way to find one is through a brute-force approach, where you try different inputs until you get a collision by chance.

This works because the *output space* of a 256 hash function is incredibly huge. The output space describes the set of all possible hash values from 0 to \\(1.1579 \cdot 10^{77}\\) which can be written out as

<center>
115792089237316195423570985008687907853269984665640564039457584007913129639936
</center>

### Summary

Hash Functions are the first cornerstone of blockchain technology. A hash of a file is like a fingerprint. It is easy to detect if two files are identical by comparing their hashes. Blocks are "chained" together by including the hash of the last block in each new block. You cannot change data from previous blocks without breaking the chain of references.

In our next article, we will look at public-key cryptography - the second cornerstone of blockchain technology and the concept that makes ownership on the blockchain possible.
