---
layout: post
title:  "Intro to Privacy on the Blockchain"
permalink: technology/beginner/intro-to-privacy-on-the-blockchain/
topic: technology
level: beginner
chapter: "Privacy"
---

It is a common misconception that Bitcoin and other cryptocurrencies are an anonymous means of payment. In fact, they are not anonymous, but pseudonymous. 

To be anonymous, there can't be any information about the sender and receiver of a transaction. You need an address to transact on a blockchain. Because this address doesn't carry any information about their owner and anybody can generate as many addresses as they wish, we call them pseudonymous. Your address acts like a pseudonym, similar to how you might pick a username in an online forum.

Through increasingly more powerful data analysis, it is possible to link real-world identities to cryptocurrency addresses. The more transactions you have received and send, the more metadata there is. This metadata can include the IP address a transaction originated from or frequent transaction partners. Exchanges might also log the addresses you use to withdraw funds and can thereby link your addresses to your identity.

### Why Privacy

There are many legitimate reasons to create private financial transactions. If you have a medical condition and need to purchase your prescriptions on a regular basis you have good reason to conduct these transactions privately. If you have a business, you don't want to reveal your revenue streams to your competition and if you are buying a present for your spouse, you might not want him or her to see it before they actually get the present. There are many good reasons to transact privately, and we believe that privacy is and should be treated as a basic human right.

### How to Reclaim Your Privacy

The first step towards increased privacy is the use of a new address for every transaction you receive. Most wallets will automatically generate a new address for you every time you click "receive". This makes it significantly harder for an adversary to group your payments and ultimately link them to your identity.

If you wish to transact with absolute privacy, you should use a cryptocurrency providing special privacy features. Horizen offers the strongest privacy possible through the use of Zero-Knowledge Proofs.

A Zero-Knowledge Proof lets you prove to a verifier that you know something, without revealing that knowledge. An intuitive, non-digital example of what this might look like can be constructed with a seeing person as the prover, a blind person as the verifier and two balls of different color.

The seeing person (prover) wants to convince the blind person (verifier) that the two balls are of different colors, without revealing the colors. They sit down at a table and the blind person shows the prover one of the balls. The blind person continues to put both balls under the table and chooses to show one ball in a second round - either the same one as before or the other one. If he chooses to show the same ball, the prover knows because he sees the same color and he tells the blind person. If the blind person were to show the other ball, the prover could tell with certainty that the verifier (blind person) switched the balls under the table.

![zkproof](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof.jpg)

In the second round, the prover would have a fifty-fifty chance of getting the right answer if he had to guess. He would have to guess in case the claim that he is trying to prove (the balls are of a different color) was false. At this point, the blind person cannot be sure if the claim is correct, or if the prover got lucky.

If they repeat the game several times, the chance of getting the answer right every time through guessing decreases exponentially. After just ten rounds of the game, the chance of calling the right ball every time through pure luck has decreased to 0.1%. The blind person can be sure the two balls are indeed of different colors although the prover has not shared any information about the colors themselves.

The idea of using Zero-Knowledge Proofs for cryptocurrency transactions is the following: You construct a proof that the transaction you want to send would be considered valid by a verifying node, without revealing any of the actual transaction data. This allows the sender, receiver as well as the amount to be kept private. Another use-case that is perfect for the application of zk-Proofs is identity verification. E.g. you can prove to an entity that you are of a certain age without revealing any personal data like your DOB. 

To use private transactions with Horizen, you will use a different address type. In your wallet, you can either generate t-Addresses (transparent Addresses) or z-Addresses (shielded Addresses). When you sent funds to a z-Address, the amount and sender are recorded on the blockchain, but not the receiving address. If you forward the funds to a second z-Address no information about the transaction gets recorded, neither the sender, receiver nor the amount. If you want to try this feature, you can download our Flagship App [Sphere by Horizen](https://www.horizen.global/spherebyhorizen/). Make sure to activate full mode in the settings otherwise, you won't be able to generate z-Addresses.

### Summary
This is the last article of our technology series for beginners. We hope that the previous articles have helped you understand what a blockchain is, how it works, and how to use it. Here we would like to summarize what we have covered in the technology section for beginners.

A blockchain is a [method to store data]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-01-blockchain-as-a-data-structure %}). This method of handling data allows you to transfer value without involving a central entity. We made the comparison of blockchain being a [protocol to transfer value]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-02-a-protocol-to-transfer-value %}) with the internet being a protocol that enables you to transfer information. We also compared blockchain to the post being a "protocol" to send physical goods.


[Miners]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-01-the-elements-of-a-blockchain %}) are the bookkeepers of a blockchain. They collectively make decisions on what happened in the past, allowing the network to reach consensus on the current state. Miners require special hardware and electricity. In turn, they receive newly created coins for the work they do. The [nodes]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-01-the-elements-of-a-blockchain %}) make up the infrastructure of the network itself. If you want to conduct a transaction with a wallet on your phone, for example, your wallet will connect to a full node first, which will forward the transaction to all other nodes. This is like how your phone needs to connect to a cell phone tower to connect to the internet.

Your public key is like your address on the blockchain and your private key is the password to access your address and the funds within. As a pair, they represent your [identity on a blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-identity-in-blockchain %}). The key pairs are part of an encryption scheme called public key cryptography which is one of the main pillars of blockchain technology.

[Wallets]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) simplify handling your keys and the encryption that is happening (in the background). Wallets are a user-friendly interface to create transactions and act as a keychain. They can generate and manage keys for you, show you your balance by finding all the transactions you received on the blockchain, and create new transactions. You never store any funds in a wallet, but only the keys that let you access your funds which are recorded on the blockchain.

A simple way to think of a [transaction]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-01-intro-to-transactions-basic %}): Imagine a grid of mailboxes. Each address on the blockchain is a single mailbox in this grid. If you wish to send a transaction you must unlock your funds (mailbox) with your private key and find the recipient's mailbox using their address. The transaction ends up as a statement like "Alice send Bob 5 ZEN". This statement is what represents Bob's coins.
To access the information stored on the blockchain you can use the [block explorer]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-block-explorer-introduction %}). Like how a web browser lets you access information on the internet, the block explorer lets you access information on the blockchain. You can look up addresses, transactions, or entire blocks.
While cryptocurrencies are not anonymous by default, some of them offer features that allow you to transact privately. To increase the level of privacy, you should use different addresses for every incoming transaction. This makes it harder for an adversary to track your transaction history. Most wallets will do this automatically for you. You can use cryptocurrencies with enhanced privacy features, like Horizen, to transact completely private. This is done by using a different address type (z-Addresses).

In our advanced section, we will look at a few more privacy conserving concepts.

Final Remarks
Cryptocurrencies and blockchain are not an easy topic. In this line of articles, we were trying to explain it in intuitive ways without sacrificing too much accuracy. It took all of us a while to understand blockchain technology when we started. I read articles multiple times until they clicked with me. You can always come back to re-read these articles. It will make a lot more sense reading it a second time with a little break between.

If you feel comfortable about everything you have read and would like to keep learning: there is more! Move up one level and see our more advanced articles. We have structured them in the same way, but added more detail to all topics and split them up to look at the individual components more closely. We designed the content in a way where you can either read it from top to bottom (which we can only recommend) or jump to articles that you are especially interested in.

We hope you enjoyed this series of articles. Please let us know if there is anything that you find confusing. The content provided is and will be work in progress for a while. We are always open to suggestions and constructive feedback so drop us a message at [academy@horizen.global](mailto:academy@horizen.global) if you want to share your thoughts with us.

**Your Horizen Team**
