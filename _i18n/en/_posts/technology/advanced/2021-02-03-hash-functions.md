---
layout: post
type: article
title: "Hash Functions"
description: "In this article, you learn why hash functions are an important part in every blockchain because they are used to verify the integrity of data."
permalink: /technology/advanced/hash-functions/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
---

The verification of data is an important aspect when building a [data structure](https://academy.horizen.io/technology/advanced/blockchain-as-a-data-structure/) on a decentralized network. Participants need a way to reliably distinguish between valid data and malicious information. Blockchains are a way to record data in an immutable way. For this to be a valuable feature, the data written to the blockchain must be accurate. Verifying what data gets added makes a lot of sense, especially as storage on the blockchain is limited.

Hash functions are one-way mathematical functions used to verify data in blockchains. They are applied in several important ways such as _creating an address, proving ownership_, and _verifying the integrity of the blockchain_ itself.

The use cases of _hash functions_ extend beyond blockchain technology. Previously, we talked about other common data structures, such as _hash tables_. As the name suggests, those would not work without hash functions.

**A cryptographic hash function must fulfill the following set of criteria to be viable for use in a blockchain:**

- **One-wayness** - It has to be easy to calculate an output from a given input but impossible to calculate the input from a given output.
- **Pseudorandom** - A change in the input must result in an unforeseeable change of the output. If the hash value of the input **2** was **4**, the hash of **3** better _not_ be **6**.
- **Collision-resistant** - It should be nearly impossible to find two inputs to a hash function producing the same output.
- **Deterministic** - A given input always needs to produce the same output

![Hash function]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.2-hash-functions/hash_function_D.jpg)
![Hash function]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.2-hash-functions/hash_function_M.jpg)

## What is a Hash Function?

<table class="table lead">
    <tr>
        <td class="icon"><img src="{{site.baseurl_root}}/assets/post_files/eli5/what-is-a-hash-function/Hash.jpg" alt="Cryptocurrency"></td>
        <td>
            A hash function is something that we use to create a fingerprint of a file. You can use a hash function to create a fingerprint for every type of file you can imagine.
        </td>
    </tr>
</table>

Let's say I want to send you a text file and don't want you to change it. I could use a hash function to create a fingerprint of the text before I send it to you.

When you send the text file back to me, I could use the hash function again to create a second fingerprint. If both fingerprints match, you have not changed anything about the file. If the fingerprints don't match, I know that you changed the text in some way.

In a blockchain, we use hash functions to create a fingerprint of the transaction history. If somebody cheats the system and changes the transaction record after the fact, everybody would notice because the fingerprints of the transaction history before and after the manipulation don't match anymore

## Properties of Hash Functions

The first notable property of all hash functions is that they consume inputs of variable length and produce an output of fixed length called the **_hash value_**, _hash digest_ or simply, _hash_. The _output length_, usually denoted in bits, varies depending on the specific hash function. The output length is oftentimes part of the name of a hash function. The most notable hash function, **SHA-256**, produces _256-bit_ outputs.

**SHA** is an acronym for _Secure Hash Algorithm_. The number indicates the length of the output in bits.

_There are four different lengths of outputs in the SHA family:_
224, 256, 384 or 512 bits.

Another type of hash functions relevant in blockchain tech is the **RIPEMD** family, _RACE Integrity Primitives Evaluation Message Digest_. _RIPEMD160_ is used in many cryptocurrencies and as you might have guessed produces an output of _160 bits_.

Hash functions are mathematical one-way functions. This property is also called _preimage resistance_. While it is computationally easy to perform a hash operation, it is computationally infeasible to derive an input (_the preimage_) from a given output. The established hash functions like SHA-256 are battle-proven for nearly two decades; the SHA-2 family was published in 2001.

Hash values are used for many purposes in cryptocurrencies and blockchains. The most notable use case is the process of chaining together the blocks, thus creating the blockchain. We call a hash value a fingerprint of data for its property of being _collision-resistant_. Each set of data used as an input can be easily identified by the unique hash that it generates. It is nearly impossible to find two inputs to the hash function that result in the same output, or cause a _collision_.

It would take all the supercomputers on earth combined thousands of years to create a collision. This is because there is no way to “calculate” a collision. The only way to find one is through a _brute-force approach_, where you try different inputs until you get a collision by chance. This works because the _output space_ of a 256 hash function is incredibly huge.

Cryptographic hash functions are _pseudo-random_. This means one cannot predict the change in the output from a change of the input. Furthermore, a good hash function should map inputs as evenly as possible over its output range.

**To give you a visual representation:** The actual output range of the SHA-256 hash function are the values from 0 to $1.1579 \cdot 10^{77}$ which can be written out as:

**115792089237316195423570985008687907853269984665640564039457584007913129639936**

Because of the enormous output range, hash functions are almost collision-resistant. Lastly, hash functions must be _deterministic_. Hashing a given input must always yield the same output.

## Different Types of Hash Functions

Not all hash functions are the same. One differentiator is the output space which affects the collision resistance. If the output space was only 10-bit, performing 1024 hash operations would statistically suffice to find a second input **x**’ mapping to the same output as **x**.

The required properties vary depending on what a hash function is used for. When a hash function is used in a hash table for mapping _keys to buckets_, collisions are acceptable. If a hash function does not meet all previously mentioned requirements the hash function is called _non-cryptographic_.

### Non-Cryptographic Hash Functions

Some common types of non-cryptographic hash functions are:

- **Perfect Hash Functions** map each valid input to a different hash value. The output space must be larger than the input space. This does not imply collision resistance as the property is defined based on the input space. If inputs are limited to a small range (e.g. Customer IDs in a database) one might still be able to find collisions easily by using other inputs. Perfect hash functions are useful for hash tables.
- **Minimal Perfect Hash Functions** are defined over a given input range and map the **n** possible inputs to exactly **n** possible outputs. These are the most useful for hash tables because they provide a single-step lookup and don’t leave any empty buckets.
- **Hash Functions displaying continuity map similar inputs to similar outputs.** These functions would be considered a critical bug in cryptographic hash functions. They can be practical for certain applications such as _nearest neighbor searches_ in hash tables.

Cryptographic hash functions must possess all properties described earlier, _one-wayness, pseudo-randomness, collision resistance and determinism_. The functions require a large output space in order to achieve all the described properties.

### Cryptographic Hash Functions

Besides differing in their output size, cryptographic hash functions and their inner workings also vary widely. They have different internal state sizes, different padding schemes and vary in the rounds of computing performed.

The **SHA-2** - _Secure Hash Algorithm 2_ - A set of hash functions is built using the _Merkle–Damgård construction_. It uses a _one-way compression function_ at its core. This compression function consumes two inputs of fixed length and produces a single output of fixed length.

In order for a hash function to consume variable-length inputs, shorter inputs are padded to the fixed-length by adding data until the required number of bits is achieved. The amount of data added depends on the compression function and the type of data added depends on the hash function.

Larger inputs are split and the compression function is applied to the fragments in sequence.

In cryptocurrencies **SHA-256** (_Secure Hash Algorithm 256_) and **RIPEMD 160** (_RACE Integrity Primitives Evaluation Message Digest 160_), the **BLAKE** family and **Keccak**, which is the basis for the _SHA-3_ family, are the most common hash functions.

In Bitcoin and related protocols, such as Horizen, [addresses are obtained](https://academy.horizen.io/technology/expert/generating-keys-and-addresses/) through performing a combination of **SHA-256** and **RIPEMD 160** protocols on a given public key. One can only speculate why Satoshi made that choice, but most likely they did so to mitigate the risk of one function becoming vulnerable (e.g. one-wayness is broken).

## Where are Hash Functions Used?

### Mining

Hash functions are most often talked about in the context of cryptocurrency [mining](https://academy.horizen.io/technology/advanced/mining/). This is not necessarily because it is the most important (though a very important) application of hash functions from a technical perspective. It’s also because by now an entire industry has been built around performing hash operations on a large scale.

Miners continuously hash the block header of new blocks, together with a variable, the nonce. The goal is to find a nonce that when hashed together with the rest of the header produces a hash below a certain threshold, the _target_. When that happens, they broadcast the block to the network and it's attached to the blockchain.

Using hash functions makes for a good [Proof-of-Work](https://academy.horizen.io/technology/expert/proof-of-work/) because finding a hash below the target is an optimization and approximation free problem.

- **Optimization free** means there is no shortcut to using a trial-and-error approach.
- **Approximation free** means there is no “being close” to solving a block. It’s a binary situation, either a solution is found, or not.

Being approximation free has the benefit that miners will drop their current block and start working on a new candidate block once the chain is extended by a different miner. The chance of solving the current block within the next minute does not change meaningfully by switching to another block regardless of how long they have been working on the previous candidate.

### Block and Transaction Identifiers

Another use case for hash functions is creating short, data saving identifiers for blocks or transactions. Block hashes or transaction hashes, usually called _Transaction IDs_ or **TXIDs**, can be exchanged for actual blocks or transactions. For example, when a node is requesting updates from its peers, by only transmitting the TXID first, one saves bandwidth, but only if the requesting node does not have the block in its blockchain already.

If the requesting node does have the block in its blockchain, the actual data of that block will be transferred.

### Merkle Trees

Hash functions are also used in _Merkle trees_, a construction used to create a succinct (256-bit) summary of all transactions in a block. This summary is then included in the block header.

Transactions are first hashed and then combined pairwise until a single hash, the _Merkle root_, is obtained. If there is an odd number of transactions in a given round, the last transaction is interlinked with itself, as you can see with **H ( C )** in the graphic below.

![Merkle Tree]({{site.baseurl_root}}/assets/post_files/technology/expert/2.2-hash-functions/merkle_tree_D.jpg)
![Merkle Tree]({{site.baseurl_root}}/assets/post_files/technology/expert/2.2-hash-functions/merkle_tree_M.jpg)

### Creating Addresses

Hash functions are also an important step in the [creation of addresses](https://academy.horizen.io/technology/expert/generating-keys-and-addresses/) and in the authorization of spending funds via [digital signatures](https://academy.horizen.io/technology/expert/digital-signatures/).

### HTLCs

Hash functions are integral to _Hash-Locked Contracts_ (**HLCs**) and [**_Hash Time Locked Contracts (HTLCs_**)](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts). The idea is to place a lock on a [UTXO](https://academy.horizen.io/technology/expert/utxo-vs-account-model/) that is based on a hash value. In order to unlock the UTXO, one has to prove knowledge of the preimage of the hash. Only the rightful owner can choose to reveal the preimage and have another party unlock the UTXO because hash functions are preimage resistant.

## Hardware for Large-Scale Hashing

An entire industry has formed around performing hash functions as efficiently as possible - the mining industry. Not only did the operations _actually_ mining increase in size, so did their hardware suppliers. To have a competitive advantage, one seeks to minimize the electricity consumption per performed hash operation - or rather per quadrillion hash operations - a _Terahash_.

Specialized hardware optimized for performing hash operations with a single specific hash function only, such as **SHA-256**, are available on the market. These specialized processors are called **ASICs** _(Application Specific Integrated Circuits)_.

![Flexibility - Efficiency Trade-Off in Mining Hardware: CPUs, GPUs, FPGAs and ASICs]({{site.baseurl_root}}/assets/post_files/technology/expert/2.2-hash-functions/cpu-asic_D.jpg)
![Flexibility - Efficiency Trade-Off in Mining Hardware: CPUs, GPUs, FPGAs and ASICs]({{site.baseurl_root}}/assets/post_files/technology/expert/2.2-hash-functions/cpu-asic_M.jpg)

Processors display trade-offs between versatility and efficiency. While **CPUs** (_Central Processing Units_) can handle many tasks at low efficiency. GPUs (_Graphical Processing Units_) are more efficient at certain tasks at the cost of overall versatility. At the other end of the scale, there are ASICs, which are only useful for one specific task, but are highly efficient.

## Attack Vectors

Hash functions have been battle-tested for many years by now. During those years, certain _attack vectors_ have been discovered, but they can be mitigated quite easily. We want to give a glimpse into those attack vectors and their mitigation strategies.

Note that these attacks do not affect the security of blockchains, but only the hash functions in isolation and some outdated applications of them.

### Length Extension Attack

In a **Length Extension Attack**, an attacker can use the hash of a message **m** and the length of **m** to calculate hash **(m, m’)**, where **m’** is a message of the attacker. He doesn’t need to know what **m** is, just its length. The _SHA-2_ family is vulnerable to this type of attack.

There are no known exploits of this vulnerability in cryptocurrencies, but in order to protect against potential threats, most operations that involve hashing are performed twice in a row. An example would be constructing Merkle trees. In the graphic used earlier, you can see that the hash function **H** is denoted as the double hash, **SHA256(SHA256())**.

### Birthday Attack

Another known attack on hash functions is the **Birthday Attack**. It exploits the mathematics behind the [_birthday problem_](https://academy.horizen.io/technology/expert/proof-of-work/#the-generalized-birthday-problem) in probability theory to find collisions in hash functions more efficiently. The birthday problem describes an interesting property regarding a group of people and their birthdays.

In a group of **367** people, the probability of two of those people sharing a birthday is **1**, as there is one more person than days in a leap year. However, with just **23** people in the group, the chance of two of them sharing a birthday is already at **50%**, while it reaches **99.9%** with just **70** people.

![The Birthday Problem]({{site.baseurl_root}}/assets/post_files/technology/expert/2.2-hash-functions/birthday-problem_D.jpg)
![The Birthday Problem]({{site.baseurl_root}}/assets/post_files/technology/expert/2.2-hash-functions/birthday-problem_M.jpg)

This relates to hash functions in that finding collisions in hash functions efficiently opens up potential exploits. The Birthday Attack reduces the number of required hash operations to find a collision (two inputs producing the same output).

### Post-Quantum Security

We would like to address the concern that _quantum computers_ could one day break the security of hash function-based cryptographic schemes. We quote a section of a well-written article on [The State of Hashing Algorithms](https://medium.com/@rauljordan/the-state-of-hashing-algorithms-the-why-the-how-and-the-future-b21d5c0440de) by **_Raul Jordan_** to address the quantum-threat:

> _“What quantum computation will be able to break are those problems which have rigorous, underlying mathematical structure founded by neat
> tricks and theory such as RSA encryption. Hashing algorithms, on the other hand, have less formal structure in their internal constructs.”_

> _“Quantum computers do give an increased speed up in the computation of
> unstructured problems such as hashing, but at the end of the day, they
> would still be brute forcing an attack the same way a computer today
> would attempt to do so.”_

For the foreseeable future, hash functions will continue to present a useful cryptographic primitive that more advanced applications can be built upon.

## Summary

Hash functions take _different length inputs_ and compute _fixed-length outputs_. There are many use cases for hash functions, but to be useful for cryptographic applications they need to be _collision-resistant, preimage-resistant and pseudo-random_.

A hash of a file is like a fingerprint. It is easy to detect if two files are identical by comparing their hashes. Blocks are “chained” together by including the hash of the last block in each new block. You cannot change data from previous blocks without breaking the chain of references.

Hash functions play an integral part in blockchain technology. They are the basis of the mining algorithm used to create new blocks, are used to create succinct transaction and block identifiers and are applied when deriving addresses from public keys.

Because mining has become an entire industry, _Application Specific Integrated Circuits_ (**ASICs**) for performing hash operations on a large scale have been developed.

While there are attack vectors, these are mitigated by using the same hash function sequentially or using two different hash functions after another.
