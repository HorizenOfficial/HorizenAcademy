---
layout: post
type: intro
title: "Intro to Privacy on the Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, we introduce privacy and how it works on the blockchain at a beginner level."
permalink: /technology/beginner/intro-to-privacy-on-the-blockchain/
topic: technology
level: beginner
chapter: "Privacy"
further_reads: [how_zcoin_privacy_technology_compares_to_the_competition]
---

It is a common misconception that Bitcoin and other cryptocurrencies are an anonymous means of payment. In fact, they are anything but. The blockchain is a public, fully transparent ledger. Anybody can browse the data of a blockchain using a [block explorer]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-03-block-explorer-introduction %}) and see which addresses transferred how much money at what time.

While this generally holds true for most blockchains, there are several ways to achieve financial privacy - even on a fully transparent ledger.
To transact privately, there can't be any information about the sender and receiver of a transaction. You need an address to transact on a blockchain. Because this address doesn't carry any information about their owner, we say they are pseudonymous. Your address acts like a pseudonym, similar to how you pick a username in a forum.

Through increasingly more powerful data analysis, it is possible to link real-world identities to cryptocurrency addresses. The more transactions you have received and send, the more metadata there is. This metadata can include the IP address a transaction originated from or frequent transaction partners. Exchanges also log the addresses you use to withdraw funds and can thereby link your addresses to your identity.

### Why Privacy

There are many legitimate reasons to create private financial transactions. If you have a medical condition and need to purchase your prescriptions regularly, you have good reason to conduct these transactions privately. If you have a business, you don't want to reveal your revenue streams to your competition, and if you are buying a present for your spouse, you might not want him or her to see it before they actually get the present. There are many good reasons to transact privately, and we believe that privacy is and should be treated as a basic human right.
In our privacy section, we take a close look at the ["I've got nothing to hide"]({{ site.baseurl }}{% post_url /privacy/beginner/2023-01-01-the-nothing-to-hide-argument %}) argument.

### How to Reclaim Your Privacy

The first step towards increased privacy is the use of a new address for every transaction you receive. Most wallets will automatically generate a new address for you every time you click "receive". This makes it significantly harder for an adversary to group your payments and ultimately link them to your identity.

If you wish to transact with absolute privacy, you should use a cryptocurrency providing special privacy features. Horizen offers one of the most robust privacy tools possible - Zero-Knowledge Proofs.

A Zero-Knowledge Proof lets you prove to a verifier that you know something, without revealing that knowledge. When you create a private transaction, you generate proof that you show to the [nodes and miners]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) instead of sending them the actual transaction data.

An intuitive, non-digital example of what this might look like can be constructed with a seeing person as the prover, a blindfolded person as the verifier, and two balls of different colors.
The seeing person (prover) wants to convince the blind person (verifier) that the two balls are of different colors, without actually revealing the colors.
They sit down at a table, and the blind person shows the prover one of the balls. The blind person continues to put both balls under the table and chooses to show one ball in a second-round - either the same one as before or the other one. If he chooses to show the same ball, the prover knows because he sees the same color, and he tells the blind person. If the blind person were to switch them under the table and show the other ball, the prover could tell with certainty that the verifier (blind person) switched the balls.

![zkproof](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof_D.jpg)
![zkproof](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof_M.jpg)

In the second round, the prover would have a fifty-fifty chance of getting the right answer if he had to guess. He would have to guess in case the claim that he is trying to prove (the balls are of a different color) was false. At this point, the blind person cannot be sure if the claim is correct, or if the prover got lucky.

If they repeat the game several times, the chance of getting the answer right every time through guessing decreases exponentially, after just ten rounds of the game, the chance of calling the right ball every time through pure luck has decreased to 0.1%. The blind person can be pretty sure the two balls are indeed of different colors, although the prover has not shared any information about the colors themselves.

The idea of using Zero-Knowledge Proofs for cryptocurrency transactions is the following: You construct a proof that the transaction you want to send would be considered valid by a verifying node, without revealing any of the actual transaction data. This allows the sender, receiver as well as the amount to be kept private. Another use-case that is perfect for the application of zk-Proofs is identity verification. You can, for example, prove to an entity that you are of a certain age without revealing any personal data like your date of birth.

To use private transactions with Horizen, you will use a different address type. In your wallet, you can either generate t-Addresses (transparent Addresses) or z-Addresses (shielded Addresses). When you sent funds to a z-Address, the amount and sender are recorded on the blockchain, but not the receiving address. If you forward the funds to a second z-Address, no information about the transaction gets recorded, neither the sender, receiver, nor the amount. If you want to try this feature, you can download our Flagship App [Sphere by Horizen](https://www.horizen.global/wallets/). Make sure to activate full mode in the settings; otherwise, you won't be able to generate z-Addresses.

### Summary

While cryptocurrencies are not anonymous by default, some of them offer features that allow you to transact privately. To increase the level of privacy, you should use different addresses for every incoming transaction. This makes it harder for an adversary to track your transaction history. Most wallets will do this automatically for you.
You can also use cryptocurrencies with enhanced privacy features, like Horizen, to transact completely private.
