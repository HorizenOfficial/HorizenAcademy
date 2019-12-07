---
layout: post
type: article
title: "Hash Functions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/hash-functions/
topic: expert
level: advanced
chapter: "How Does a Blockchain Work?"
---

The verification of data is an important aspect when building a [data structure] on a decentralized network. Participants need a way to reliably distinguish between valid data and malicious information. 
Hash functions are mathematical one-way functions used to verify data in blockchains. They are applied in several important steps from creating an address, to proving ownership and verifying the integrity of the blockchain itself.

The use cases of hash functions extent beyond blockchain technology though. In our article on the [data structure] of the blockchain we talked about other common data structures, such as  *hash tables*. As the name suggests, those would not work without hash functions.

### Properties of Hash Functions

The first notable property of all hash functions is that they consume inputs of variable length and produce an output of fixed length called *hash value*, *hash digest* or simply *hash*. The output length, usually denoted in bits, varies depending on the specific hash function. The output length is often times part of the name of a hash function. The most notable hash function, SHA-256 produces 256 bit outputs.

![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_D.jpg)
![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_M.jpg)

Hash functions are mathematical one-way functions. This property is also called *preimage resistance*. While it is computationally easy to perform a hash operation, it is computationally infeasible to derive an input, the *preimage* from a given output. While there is no mathematical proof for the one-wayness, the established hash functions like SHA-256 are battle proven for almost two decades now. The SHA-2 family was published in 2001.

Cryptographic hash functions are *pseudo random*. This means, one cannot predict the change in the output, from a change of the input. Furthermore, a good hash function should map inputs as evenly as possible over it's output range. To give you a visual representation: the actual output range of the SHA-256 hash function are the values 0 to  $1.1579 \cdot 10^{77}$ which can be written out as:

115792089237316195423570985008687907853269984665640564039457584007913129639936

The closest thing to understanding what this means is playing with this [interactive scale of the universe](https://scaleofuniverse.com/) and paying attention to the dimensions in the bottom right corner.

Because of the enormous output range, hash functions are practically *collision resistant*. It is infeasible to find an input *x'* that maps to the same output as another input *x*. The only strategy would be a brute-force approach, which would take even the most advanced super computers thousands of years.

Lastly, hash functions must be *deterministic*. Hashing a given input must always yield the same output.

### Different Types of Hash Functions

Not all hash functions are the same though. As we already said, one differentiator is the output space. As you can imagine this also effects properties such as collision resistance. If the output space was only 10 bit, performing 1024 hash operations would statistically suffice to find a second input *x'* mapping to the same output as *x*.

Depending on what a hash function is used for, the required properties vary. When a hash function is used in a [*hash table*] to map *keys* to *buckets*, collision are acceptable.

Some common types of non-cryptographic hash functions are:

- *Perfect hash functions* map each valid input to a different hash value. This does not imply collision resistance, as the property is defined based on the input space. If inputs are limited to a small range (e.g. Customer IDs in a database) one might still be able to find collisions easily by using other inputs. Perfect hash functions are useful for hash tables.
- *Minimal perfect hash functions* are defined on an input range and map the *n* possible inputs to exactly *n* possible outputs. These are the most useful for hash tables, because they provide single-step lookup and don't leave any empty buckets.
- Hash Functions displaying continuity map similar inputs to similar outputs. While this would be considered a critical bug in cryptographic hash functions, it can be practical for certain applications such as *nearest neighbor searches* in hash tables.

Cryptographic hash functions need to have all properties described in the last section, one-wayness, pseudo randomness, collision resistance and being deterministic. In order to achieve that they need to have a large output space. 

#### Cryptographic Hash Functions

Besides differing in their output size, [cryptographic hash functions](https://en.wikipedia.org/wiki/Comparison_of_cryptographic_hash_functions) inner workings also vary widely. They have different internal state sizes, different padding schemes and vary in the rounds of computing performed.

The SHA-2 - Secure Hash Algorithm 2 - set of hash functions are built using the [*Merkle–Damgård construction*]. It uses a *one-way compression function* at it's core. This compression function consumes two inputs of fixed length and produces a single output of fixed length. In order for a hash function to consume variable length inputs, shorter inputs are *padded* to the fixed length. This means adding data until the required number of bits is achieved. How much data needs to be added depends on the compression function and what kind of data is added depends on the hash function. Larger inputs are split and the compression function is applied to the fragments in sequence.

In cryptocurrencies SHA-256 (Secure Hash Algorithm 256), RIPEMD 160 (RACE Integrity Primitives Evaluation Message Digest 160), the BLAKE family and *Keccak* (which is the basis for the SHA-3 family) are used.

In Bitcoin and related protocols, such as Horizen, [addresses are obtained] through performing a combination of SHA256 and RIPEMD160 on a given public key. One can only [speculate](https://bitcoin.stackexchange.com/questions/16543/why-was-the-ripemd-160-hash-algorithms-chosen-before-sha-1) why Satoshi made that choice, but most likely he did so to mitigate the risk in case one function were to become vulnerable (e.g. break one-wayness).

### Where are Hash Functions Used?

Hash functions are used for various purposes in blockchains and the examples below are by no means a complete list.

Hash functions are most often talked about in the context of cryptocurrency **mining**. This is not necessarily because it is the most important (though a very important) application of hash functions from a technical perspective. It's also because by now an entire industry has been build around performing hash operations on a large scale.

Miners continuously hash the block header of new blocks, together with a variable, the *nonce*. The goal is to find a nonce that when hashed together with the rest of the header produces a hash below a certain threshold, the *target*. When that happens, they broadcast the block to the network and it's attached to the blockchain.

Using hash functions makes for a good **Proof-of-Work**, because finding a hash below the target is an optimization and approximation free problem. *Optimization free* means there is no shortcut to using a trial-and error approach. *Approximation free* means, there is no "being close" to solving a block. It's a binary situation, either a solution is found, or not. This has the benefit that miners who simultaneously work on blocks, can drop their blocks once they receive a valid block from the network and start working on the next one. The chance of finding a valid nonce within the next, say minute, does not change in a meaningful way by switching to another block, no matter how long they have been working on the previous candidate.

Another use case for hash functions is creating short, data saving identifiers for blocks, as well as transactions. Block hashes or transaction hashes, usually called Transaction IDs (or TXIDs), can be exchanged instead of the actual blocks or transactions, e.g. when a node is requesting updates from its peers. By only transmitting the TXID first, one can save a lot of bandwidth. Only if the requesting node does not have the block in its blockchain already, the actual data of the block is being transferred.

Hash functions are also used in *merkle trees*, a construction used to create a succinct (256 bit) summary of all transactions in a block, that is included in the block  header.
Transactions are first hashed and then combined pairwise, until a single hash, the *merkle root* is obtained. If there is an odd number of transactions in a given round, the last transaction is concatenated with itself, as you can see with *H(C)* in the graphic below.

![Merkle Tree](/assets/post_files/technology/expert/2.2-hash-functions/merkle_tree_D.jpg)

Hash functions are also an important step in the [**creation of addresses**] and in the authorization of spending funds via [**digital signatures**]. We have dedicated an article each to those use cases and will save a description of them for later.

Lastly, hash functions are integral to Hash-Locked Contracts (HLCs) and [Hash Time Locked Contracts (HTLCs)]. The general idea is to place a lock on a [UTXO] that is based on a hash value. In order to unlock the UTXO, one has to prove knowledge of the preimage of the hash. Because hash functions are preimage resistant only the rightful owner, who has placed the lock on the UTXO in the first place, can choose to reveal the preimage and have another party unlock the UTXO.

There are many other use cases, like privacy features such as *Pederson Commitments*, which rely on hash functions. Throughout the Expert section you will come across many more examples. For now this slection should suffice to understand the importance of the concept to blockchain technology.

### Hardware for Large-Scale Hashing

As we mentioned above, an entire industry has formed around performing hash functions as efficiently as possible - the mining industry. Not only did the operations actually mining increase in size, but also their hardware suppliers. To have a competitive advantage one seeks to minimize the electricity consumption per performed hash operation - or rather per quadrillion hash operations - a Terahash.

Specialized hardware is on the market which is optimized for performing hash operations with a single specific hash function only, such as SHA256. These specialized processors are called ASICs - application specific integrated circuits.

Processors display trade-offs  between versatility and efficiency. While CPUs - central processing units - can handle many tasks at low efficiency, GPUs - graphical processing units - are more specialized already at the cost of versatility. At the other end of the scale there are ASICs, which are only useful for one specific task, but highly efficient.

![Different Hardware for Hashing](/assets/post_files/technology/expert/2.2-hash-functions/cpu-asic.jpg)

We have an article dedicated to [mining] at the end of this chapter. There we will go into more detail on the intricacies of the mining process from a technical as well as economical perspective.

### Attack Vectors

Hash functions are battle tested for many years by now. During those years certain attack vectors have been discovered, but at the same time those can be mitigated quite easily. For the final part we want to give a glimpse on those attack vectors and their mitigation strategies. Note that these attacks do not effect the security of blockchains, but only the hash functions in isolation and some outdated applications of them.

In a [*length extension attack*] an attacker can use the hash of a message *m*, *hash(m)*, and the length of *m* to calculate *hash(m|m')*, where *m'* is a message of the attacker. He doesn't need to know what *m* is, just it's length. The SHA-2 family is vulnerable to this type of attack. There are no known exploits of this vulnerability in cryptocurrencies, but in order to protect against potential threats, most operations that involve hashing are performed twice in a row. An example would be constructing merkle trees. In the graphic used earlier you can see that the hash function *H* is denoted as the double hash, *SHA256(SHA256())*.

What would attack look like? **TKKG**

Another know attack on hash functions is the *Birthday Attack*. It exploits the mathematics behind the [*birthday problem*] in probability theory to find collisions in hash functions more efficiently. The birthday problem describes an interesting property regarding a group of people and their birthdays. In a group of 367 people, the probability of two of those people sharing a birthday is 1, as their is one more person than days in a leap year. However, with just 23 people in the group the chance of two of them sharing a birthday is already at 50\%, while it reaches 99.9\% with just 70 people.

This relates to hash functions, because finding collisions in hash functions efficiently might open up potential exploits. The Birthday Attack reduces the number of required hash operations to find a collision (two inputs producing the same output).

Lastly, we would like to address the concern that quantum computers could one day break the security of hash function based cryptographic schemes. We quote a section of a well written article on [the state of hashing algorithms] by Raul Jordan to address the quantum-threat:

>  "What quantum computation will be able to break are those problems which have rigorous, underlying mathematical structure founded by neat tricks and theory such as RSA encryption. Hashing algorithms, on the other hand, have less formal structure in their internal constructs."

> "Quantum computers do give an increased speed up in the computation of unstructured problems such as hashing, but at the end of the day, they would still be brute forcing an attack the same way a computer today would attempt to do so." - Source\footnote{\url{https://medium.com/@rauljordan/the-state-of-hashing-algorithms-the-why-the-how-and-the-future-b21d5c0440de}}

### Summary
