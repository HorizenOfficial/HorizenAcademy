---
layout: post
type: article
title: "The Components of a Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/the-components-of-a-blockchain/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
published: false
---

This article should provide you with a general overview of what the articles in this chapter are all about and how the different topics **are related** to one another. It is a high level description not focused on details but on giving a rough picture before each topic is covered on a more granular basis.

### Hash Functions

The verification of data is an important aspect when building a data structure on a decentralized network. Participants need a way to reliably distinguish between valid data and malicious information.

[Hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) are mathematical one-way functions used to verify data in blockchains. They are applied in several important steps from creating an address, to proving ownership and verifying the integrity of the blockchain itself. The first notable property of all hash functions is that they consume inputs of variable length and produce an output of fixed length called *hash value*.

Other key properties are being irreversible one-way functions, being pseudo random in that they produce seemingly random outputs from two similar inputs, having a small likelyhood of producing the same output for two different inputs and lastly, being deterministic in that they always produce the same output from a given input.

![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_D.jpg)
![Hash Function Properties](/assets/post_files/technology/expert/2.2-hash-functions/hash_function_M.jpg)

### Public-Key Cryptography

A major building block of digital money - as the name cryptocurrency suggests - is cryptography: namely [public-key cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %}). While it can be used to secure the exchange of sensitive information through encryption it is also the basis for establishing ownership in the digital realm. Without a concept of ownership digital money would be useless.

#### Elliptic Curve Cryptography

There are many different public-key cryptography schemes but blockchain technology mostly relies on [elliptic curve cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}) (ECC) is used. Cryptography mostly relies on one-way functions and multiplication on an elliptic curve is the second one-way function we introduce after the previously explained hash functions. We show how this special type of *discrete math* works and why it is a well suited tool to build a concept of ownership on a distributed perr-to-peer network.

![Finite Field Addition](/assets/post_files/technology/expert/2.3.1-ecc/finite_addition.gif)

#### Generating Keys and Addresses

Money or data sent to a public key can only be accessed by someone who has knowledge of the corresponding private key. With the basics of elliptic curve cryptography understood, we show how it is applied to create a public key from a private key. At this point, you already understand why the derivation of a public key from a private key cannot be reversed, which is the single most important attribute of PKC.

When you transfer cryptocurrencies you will barely ever use a public key, but rather an *address* that was generated from a *public key*. This step relies on the one-wayness of hash functions that we introduced before.

![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_D.jpg)
![From Private Key to Address](/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_M.jpg)

#### Digital Signatures



![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature.png)
