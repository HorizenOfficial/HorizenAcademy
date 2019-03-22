---
layout: post
type: intro
title: "Intro to Privacy on the Blockchain"
permalink: /technology/beginner/intro-to-privacy-on-the-blockchain/
topic: technology
level: beginner
chapter: "Privacy"
---

It is a common misconception that Bitcoin and other cryptocurrencies are an anonymous means of payment. In fact, they are not anonymous, but pseudonymous. 

To be anonymous, there can't be any information about the sender and receiver of a transaction. You need an address to transact on a blockchain. Because this address doesn't carry any information about their owner and anybody can generate as many addresses as they wish, we call them pseudonymous. Your address acts like a pseudonym, similar to how you might pick a username in an online forum.

Through increasingly more powerful data analysis, it is possible to link real-world identities to cryptocurrency addresses. The more transactions you have received and send, the more metadata there is. This metadata can include the IP address a transaction originated from or frequent transaction partners. Exchanges might also log the addresses you use to withdraw funds and can thereby link your addresses to your identity.

### Why Privacy

There are many legitimate reasons to create private financial transactions. If you have a medical condition and need to purchase your prescriptions on a regular basis you have good reason to conduct these transactions privately. If you have a business, you don't want to reveal your revenue streams to your competition and if you are buying a present for your spouse, you might not want him or her to see it before they actually get the present. There are many good reasons to transact privately, and we believe that privacy is and should be treated as a basic human right. 
In our privacy section we also take a look at the "I've got nothing to hide" argument.

### How to Reclaim Your Privacy

The first step towards increased privacy is the use of a new address for every transaction you receive. Most wallets will automatically generate a new address for you every time you click "receive". This makes it significantly harder for an adversary to group your payments and ultimately link them to your identity.

If you wish to transact with absolute privacy, you should use a cryptocurrency providing special privacy features. Horizen offers the strongest privacy possible through the use of Zero-Knowledge Proofs.

A Zero-Knowledge Proof lets you prove to a verifier that you know something, without revealing that knowledge. An intuitive, non-digital example of what this might look like can be constructed with a seeing person as the prover, a blind person as the verifier and two balls of different color.

The seeing person (prover) wants to convince the blind person (verifier) that the two balls are of different colors, without revealing the colors. They sit down at a table and the blind person shows the prover one of the balls. The blind person continues to put both balls under the table and chooses to show one ball in a second round - either the same one as before or the other one. If he chooses to show the same ball, the prover knows because he sees the same color and he tells the blind person. If the blind person were to show the other ball, the prover could tell with certainty that the verifier (blind person) switched the balls under the table.

![zkproof](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof_D.jpg)
![zkproof](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof_M.jpg)

In the second round, the prover would have a fifty-fifty chance of getting the right answer if he had to guess. He would have to guess in case the claim that he is trying to prove (the balls are of a different color) was false. At this point, the blind person cannot be sure if the claim is correct, or if the prover got lucky.

If they repeat the game several times, the chance of getting the answer right every time through guessing decreases exponentially. After just ten rounds of the game, the chance of calling the right ball every time through pure luck has decreased to 0.1%. The blind person can be sure the two balls are indeed of different colors although the prover has not shared any information about the colors themselves.

The idea of using Zero-Knowledge Proofs for cryptocurrency transactions is the following: You construct a proof that the transaction you want to send would be considered valid by a verifying node, without revealing any of the actual transaction data. This allows the sender, receiver as well as the amount to be kept private. Another use-case that is perfect for the application of zk-Proofs is identity verification. E.g. you can prove to an entity that you are of a certain age without revealing any personal data like your DOB. 

To use private transactions with Horizen, you will use a different address type. In your wallet, you can either generate t-Addresses (transparent Addresses) or z-Addresses (shielded Addresses). When you sent funds to a z-Address, the amount and sender are recorded on the blockchain, but not the receiving address. If you forward the funds to a second z-Address no information about the transaction gets recorded, neither the sender, receiver nor the amount. If you want to try this feature, you can download our Flagship App Sphere by Horizen (Link to wallet download). Make sure to activate full mode in the settings otherwise, you won't be able to generate z-Addresses.

### Summary

While cryptocurrencies are not anonymous by default, some of them offer features that allow you to transact privately. To increase the level of privacy, you should use different addresses for every incoming transaction. This makes it harder for an adversary to track your transaction history. Most wallets will do this automatically for you. You can use cryptocurrencies with enhanced privacy features, like Horizen, to transact completely private. This is done by using a different address type (z-Addresses).

In our advanced section, we will look at a few more privacy conserving concepts.

{%
  include further_reading.html
  title="How Zcoin's Privacy Technology Compares to the Competition"
  summary="An extensive comparison of different privacy mechanisms on the blockchain used by different Cryptocurrencies"
  author="Reuben Yap, Zcoin"
  url="https://zcoin.io/zcoins-privacy-technology-compares-competition/"
  image="https://zcoin.io/wp-content/uploads/2018/01/privacy_comparison2-01.jpg"
%}
