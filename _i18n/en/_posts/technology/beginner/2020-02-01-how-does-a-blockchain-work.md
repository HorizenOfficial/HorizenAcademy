---
layout: post
type: intro
title: "How does a Blockchain work?"
permalink: /technology/beginner/how-does-a-blockchain-work/
topic: technology
level: beginner
chapter: "How does a Blockchain work?"
---

After reading our first two articles about what a blockchain is, you know that in its most simple form it's a method to store data. This method of handling data allows you to transfer value without involving a central entity. We made the comparison of blockchain being a protocol to transfer value with the internet being a protocol that enables you to transfer information. We also compared blockchain to the post being a "protocol" to send physical goods.

##### In this chapter, we want to look at how all of this works:

Miners are the bookkeepers of a blockchain. They collectively make decisions on what happened in the past, allowing the network to come to an agreement on the current state. Miners require special hardware and electricity. In turn, they receive newly created coins for the work they do. The nodes make up the infrastructure of the network itself.

![Book blockchain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/book_blockchain.jpg)

Your public key is like your address on the blockchain and your private key is the password to access your address and the funds within. As a pair, they represent your identity on a blockchain. The key pairs are part of an encryption scheme called public key cryptography which is one of the main pillars of blockchain technology.

![Asymmetric](/assets/post_files/technology/beginner/identity-in-blockchain/asymmetric.png)

Wallets simplify handling your keys and the encryption that is happening (in the background). Wallets are a user-friendly interface to create transactions and act as a keychain. They generate and manage keys for you, show you your balance by finding all the transactions you received on the blockchain, and help you create new transactions. 

![Wallet does](/assets/post_files/technology/beginner/wallets/wallet_does.jpg)

A simple way to think of a transaction: Imagine a grid of mailboxes. Each address on the blockchain is a single mailbox in this grid. If you wish to send a transaction you must unlock your funds with your private key and find the recipient's mailbox using their address. The transaction ends up as a statement like "Alice send Bob 5 ZEN". This statement is what represents Bob's coins. Most blockchains are public and you can use a block explorer to access all the information saved on this public ledger.

![Sent](/assets/post_files/technology/beginner/intro-to-transactions-basic/T3_sent.jpg)
