---
layout: post
type: article
title: "Hash Functions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/hash-functions/
topic: expert
level: advanced
chapter: "How Does a Blockchain Work?"
further_reads: [the_state_of_hashing_algorithms]
---

The verification of data is an important aspect when building a [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) on a decentralized network. Participants need a way to reliably distinguish between valid data and malicious information.

Hash functions are one-way mathematical functions used to verify data in blockchains. They are applied in several important ways such as creating an address, proving ownership, and verifying the integrity of the blockchain itself.

The use cases of hash functions extend beyond blockchain technology though. In our article on the data structure of the blockchain we talked about other common data structures, such as *hash tables*. As the name suggests, those would not work without hash functions.

## Table of Contents

- [Properties of Hash Functions](#properties-of-hash-functions)
- [Different Types of Hash Functions](#different-types-of-hash-functions)
  * [Non-Cryptographic Hash Functions](#non-cryptographic-hash-functions)
  * [Cryptographic Hash Functions](#cryptographic-hash-functions)
- [Where are Hash Functions Used?](#where-are-hash-functions-used-)
  * [Mining](#mining)
  * [Block and Transaction Identifiers](#block-and-transaction-identifiers)
  * [Merkle Trees](#merkle-trees)
  * [Creating Addresses](#creating-addresses)
  * [HTLCs](#htlcs)
- [Hardware for Large-Scale Hashing](#hardware-for-large-scale-hashing)
- [Attack Vectors](#attack-vectors)
  * [Length Extension Attack](#length-extension-attack)
  * [Birthday Attack](#birthday-attack)
- [Summary](#summary)

## Properties of Hash Functions

The first notable property of all hash functions is that they consume inputs of variable length and produce an output of fixed length called *hash value*, *hash digest* or simply *hash*. The output length, usually denoted in bits, varies depending on the specific hash function. The output length is oftentimes part of the name of a hash function. The most notable hash function, SHA-256 produces 256-bit outputs.

![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_D.jpg)
![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_M.jpg)

Hash functions are mathematical one-way functions. This property is also called *preimage resistance*. While it is computationally easy to perform a hash operation, it is computationally infeasible to derive an input (the *preimage*) from a given output. The established hash functions like SHA-256 are battle-proven for nearly two decades (the SHA-2 family was published in 2001).

Cryptographic hash functions are *pseudo-random*. This means one cannot predict the change in the output from a change of the input. Furthermore, a good hash function should map inputs as evenly as possible over its output range. To give you a visual representation: the actual output range of the SHA-256 hash function are the values from 0 to $1.1579 \cdot 10^{77}$ which can be written out as:

115792089237316195423570985008687907853269984665640564039457584007913129639936

The easiest way to imagine the dimension of this number is to play with this [interactive scale of the universe](https://scaleofuniverse.com/) and paying attention to the dimensions in the bottom right corner.

Because of the enormous output range, hash functions are almost *collision-resistant*. It is infeasible to find an input *x'* that maps to the same output as another input *x*. The only strategy would be a brute-force approach, which would take even the most advanced supercomputers thousands of years.

Lastly, hash functions must be *deterministic*. Hashing a given input must always yield the same output.

## Different Types of Hash Functions

Not all hash functions are the same. One differentiator is the output space which affects the collision resistance. If the output space was only 10-bit, performing 1024 hash operations would statistically suffice to find a second input *x'* mapping to the same output as *x*.

The required properties vary depending on what a hash function is used for. When a hash function is used in a [*hash table*](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#hash-table) for mapping *keys* to *buckets*, collisions are acceptable. If a hash function does not meet all previously mentioned requirements the hash function is called *non-cryptographic*.

### Non-Cryptographic Hash Functions

Some common types of non-cryptographic hash functions are:

- *Perfect hash functions* map each valid input to a different hash value. The output space must be larger than the input space. This does not imply collision resistance as the property is defined based on the input space. If inputs are limited to a small range (e.g. Customer IDs in a database) one might still be able to find collisions easily by using other inputs. Perfect hash functions are useful for hash tables.
- *Minimal perfect hash functions* are defined over a given input range and map the *n* possible inputs to exactly *n* possible outputs. These are the most useful for hash tables because they provide a single-step lookup and don't leave any empty buckets.
- Hash Functions displaying continuity map similar inputs to similar outputs. These functions would be considered a critical bug in cryptographic hash functions. They can be practical for certain applications such as *nearest neighbor searches* in hash tables.

Cryptographic hash functions must possess all properties described in the last section, one-wayness, pseudo-randomness, collision resistance and determinism. The functions require a large output space in order to achieve all the described properties.

### Cryptographic Hash Functions

Besides differing in their output size, [cryptographic hash functions](https://en.wikipedia.org/wiki/Comparison_of_cryptographic_hash_functions) inner workings also vary widely. They have different internal state sizes, different padding schemes and vary in the rounds of computing performed.

The SHA-2 - Secure Hash Algorithm 2 - A set of hash functions is built using the [*Merkle–Damgård construction*]. It uses a *one-way compression function* at its core. This compression function consumes two inputs of fixed length and produces a single output of fixed length.

In order for a hash function to consume variable-length inputs, shorter inputs are *padded* to the fixed-length by adding data until the required number of bits is achieved. The amount of data added depends on the compression function and the type of data added depends on the hash function.

Larger inputs are split and the compression function is applied to the fragments in sequence.

In cryptocurrencies SHA-256 (Secure Hash Algorithm 256), RIPEMD 160 (RACE Integrity Primitives Evaluation Message Digest 160), the BLAKE family and *Keccak* (which is the basis for the SHA-3 family) are the most common hash functions.

In Bitcoin and related protocols, such as Horizen, [addresses are obtained]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-2-generating-keys-and-addresses %}) through performing a combination of SHA256 and RIPEMD160 protocols on a given public key. One can only [speculate](https://bitcoin.stackexchange.com/questions/16543/why-was-the-ripemd-160-hash-algorithms-chosen-before-sha-1) why Satoshi made that choice, but most likely he did so to mitigate the risk of one function becoming vulnerable (e.g. one-wayness is broken).

## Where are Hash Functions Used?

Hash functions are used for various purposes in blockchains and the examples below are not a complete list.

### Mining

Hash functions are most often talked about in the context of cryptocurrency [mining]({{ site.baseurl }}{% post_url /technology/expert/2022-02-07-mining %}). This is not necessarily because it is the most important (though a very important) application of hash functions from a technical perspective. It's also because by now an entire industry has been build around performing hash operations on a large scale.

Miners continuously hash the block header of new blocks, together with a variable, the *nonce*. The goal is to find a nonce that when hashed together with the rest of the header produces a hash below a certain threshold, the *target*. When that happens, they broadcast the block to the network and it's attached to the blockchain.

Using hash functions makes for a good [Proof-of-Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) because finding a hash below the target is an optimization and approximation free problem.

- *Optimization free* means there is no shortcut to using a trial-and-error approach.
- *Approximation free* means there is no "being close" to solving a block. It's a binary situation, either a solution is found, or not.

Being approximation free has the benefit that miners will drop their current block and start working on a new candidate block once the chain is extended by a different miner. The chance of solving the current block within the next minute does not change meaningfully by switching to another block regardless of how long they have been working on the previous candidate.

### Block and Transaction Identifiers

Another use case for hash functions is creating short, data saving identifiers for blocks or transactions. Block hashes or transaction hashes, usually called Transaction IDs (or TXIDs), can be exchanged for actual blocks or transactions, e.g. when a node is requesting updates from its peers; by only transmitting the TXID first, one saves bandwidth, but only if the requesting node does not have the block in its blockchain already. If the requesting node does have the block in its blockchain the actual data of that block will be transferred.

### Merkle Trees

Hash functions are also used in [*Merkle trees*](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#merkle-trees), a construction used to create a succinct (256-bit) summary of all transactions in a block. This summary is then included in the block header.

Transactions are first hashed and then combined pairwise until a single hash, the *Merkle root*, is obtained. If there is an odd number of transactions in a given round, the last transaction is interlinked with itself, as you can see with *H(C)* in the graphic below.

![Merkle Tree](/assets/post_files/technology/expert/2.2-hash-functions/merkle_tree_D.jpg)
![Merkle Tree](/assets/post_files/technology/expert/2.2-hash-functions/merkle_tree_M.jpg)

### Creating Addresses

Hash functions are also an important step in the [creation of addresses]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-2-generating-keys-and-addresses %}) and in the authorization of spending funds via [digital signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}). We have dedicated an article to each of those two use cases and will save the description of them for later.

### HTLCs

Hash functions are integral to Hash-Locked Contracts (HLCs) and [Hash Time Locked Contracts (HTLCs)]({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-htlcs %}). The idea is to place a lock on a [UTXO]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) that is based on a hash value. In order to unlock the UTXO, one has to prove knowledge of the preimage of the hash. Only the rightful owner can choose to reveal the preimage and have another party unlock the UTXO because hash functions are preimage resistant.

There are many other use cases, like privacy features such as *Pederson Commitments*, which rely on hash functions. Throughout the Expert section, you will come across many more examples. 

## Hardware for Large-Scale Hashing

An entire industry has formed around performing hash functions as efficiently as possible - the mining industry. Not only did the operations actually mining increase in size, but so did their hardware suppliers. To have a competitive advantage one seeks to minimize the electricity consumption per performed hash operation - or rather per quadrillion hash operations - a Terahash.

Specialized hardware optimized for performing hash operations with a single specific hash function only, such as SHA256, are available on the market. These specialized processors are called ASICs (Application Specific Integrated Circuits).

Processors display trade-offs between versatility and efficiency. While CPUs (Central Processing Units) can handle many tasks at low efficiency. GPUs (Graphical Processing Units) are more efficient at certain tasks at the cost of overall versatility. At the other end of the scale, there are ASICs, which are only useful for one specific task, but are highly efficient.

![Different Hardware for Hashing](/assets/post_files/technology/expert/2.2-hash-functions/cpu_asic_D.jpg)
![Different Hardware for Hashing](/assets/post_files/technology/expert/2.2-hash-functions/cpu_asic_M.jpg)

We have an article dedicated to [mining]({{ site.baseurl }}{% post_url /technology/expert/2022-02-07-mining %}) at the end of this chapter. We will go into more detail on the intricacies of the mining process from a technical as well as economical perspective.

## Attack Vectors

Hash functions have been battle-tested for many years by now. During those years certain attack vectors have been discovered but they can be mitigated quite easily. We want to give a glimpse into those attack vectors and their mitigation strategies. Note that these attacks do not affect the security of blockchains but only the hash functions in isolation and some outdated applications of them.

### Length Extension Attack

In a [*length extension attack*](https://en.wikipedia.org/wiki/Length_extension_attack) an attacker can use the hash of a message *m*, *hash(m)*, and the length of *m* to calculate *hash(m|m')*, where *m'* is a message of the attacker. He doesn't need to know what *m* is, just it's length. The SHA-2 family is vulnerable to this type of attack. There are no known exploits of this vulnerability in cryptocurrencies, but in order to protect against potential threats, most operations that involve hashing are performed twice in a row. An example would be constructing Merkle trees. In the graphic used earlier, you can see that the hash function *H* is denoted as the double hash, *SHA256(SHA256())*.

### Birthday Attack

Another known attack on hash functions is the [*Birthday Attack*](https://en.wikipedia.org/wiki/Birthday_attack). It exploits the mathematics behind the [*birthday problem*](https://academy.horizen.global/technology/expert/proof-of-work/#the-generalized-birthday-problem) in probability theory to find collisions in hash functions more efficiently. The birthday problem describes an interesting property regarding a group of people and their birthdays. In a group of 367 people, the probability of two of those people sharing a birthday is 1, as there is one more person than days in a leap year. However, with just 23 people in the group, the chance of two of them sharing a birthday is already at 50\%, while it reaches 99.9\% with just 70 people.

![The Birthday Problem](/assets/post_files/technology/expert/2.2-hash-functions/birthday-problem_D.jpg)
![The Birthday Problem](/assets/post_files/technology/expert/2.2-hash-functions/birthday-problem_M.jpg)

This relates to hash functions in that finding collisions in hash functions efficiently opens up potential exploits. The Birthday Attack reduces the number of required hash operations to find a collision (two inputs producing the same output).

We would like to address the concern that quantum computers could one day break the security of hash function-based cryptographic schemes. We quote a section of a well-written article on [the state of hashing algorithms](https://medium.com/@rauljordan/the-state-of-hashing-algorithms-the-why-the-how-and-the-future-b21d5c0440de) by Raul Jordan to address the quantum-threat:

>  "What quantum computation will be able to break are those problems which have rigorous, underlying mathematical structure founded by neat tricks and theory such as RSA encryption. Hashing algorithms, on the other hand, have less formal structure in their internal constructs."

> "Quantum computers do give an increased speed up in the computation of unstructured problems such as hashing, but at the end of the day, they would still be brute forcing an attack the same way a computer today would attempt to do so."

For the foreseeable future, hash functions will continue to present a useful cryptographic primitive that more advanced applications can be built upon.

## Summary

Hash functions take different length inputs and compute fixed-length outputs. There are many use cases for hash functions but to be useful for cryptographic applications they need to be collision-resistant, preimage-resistant and pseudo-random.

Hash functions play an integral part in blockchain technology. They are the basis of the mining algorithm used to create new blocks, are used to create succinct transaction and block identifiers and are applied when deriving addresses from public keys.

Because mining has become an entire industry, Application Specific Integrated Circuits (ASICs) for performing hash operations on a large scale have been developed.

While there are attack vectors, these are mitigated by using the same hash function sequentially or using two different hash functions after another.

In our next three articles, we will take an in-depth look at [public-key cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %}).
