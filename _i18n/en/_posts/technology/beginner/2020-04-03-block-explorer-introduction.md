---
layout: post
type: article
title: "Block Explorer Introduction"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, we introduce block explorers at a beginner level."
permalink: /technology/beginner/block-explorer-introduction/
topic: technology
level: beginner
chapter: "Transactions"
---

An often-cited benefit of blockchain technology is the transparency it offers. Transactions, blocks, and addresses are publicly auditable and the tool you use for that job is called the block explorer.

A block explorer lets you browse the blockchain, like how a web browser lets you access the information on the internet. You can review the transaction history of a given address, the set of transactions in a block as well as the status of transactions. Let's take a look at a real-life example:

![Explorer address summary](/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_summary.png)

This is what you can expect when you are searching for an address with a block explorer. Block explorers usually work the same, no matter what blockchain you are looking at. The address that was looked up for this example on a Horizen block explorer is at the top: znf7... Let's say this is Bob's address.

On the top of the page, you will find a summary of the addresses activity. The information provided here will include the total amount received and sent from this address, as well as the current balance. The address we are looking at received a total of 42 ZEN. Bob didn't send any ZEN to other addresses yet and therefore still has a balance of 42 ZEN.

![Explorer address tx](/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_tx.png)

You will find all the transactions that this address was involved in below the address summary. This particular address was only part of a single transaction thus far. Every transaction is characterized by its identifier - the transaction ID - which is the blue string at the top of the grey box. The transaction we are looking at had one input (left) and two outputs (right). The input is what is sent, and the output(s) is what is received. If inputs and outputs are new to you, you can find out about them in our last article explaining [transactions]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-intro-to-transactions %}).

Let's say Bob received his funds from Alice. Alice's address is next to the input on the left, znd3...
Alice had an output of 46.6 ZEN in her address, but only wanted to send 42 to Bob. Alice did this by using her entire balance of 46.6 ZEN as an input (left) and creating two outputs: one output of 42 ZEN she wanted to send to Bob, and one with the remaining 4.6 ZEN going back to her own address as change.

We will take an in-depth look at inputs and outputs in the Advanced Level with a dedicated article about the [*UTXO model*]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-02-the-utxo-model %}) (Unspent Transaction Output model).

Now there are three pieces of information left uncommented:

- The sender added a transaction fee of 0.0001 ZEN. Transaction fees are a measure to prevent spam. When sending only a few transactions the fee is negligible. If you were to send large amounts of spam transactions though, the cost would quickly add up and become prohibitive.
- The number of confirmations is a measure of how old a transaction is. Every block that is created after a transaction is included in the blockchain is called a confirmation of that transaction.
- There is the total volume of the transaction.

We encourage you to go to our [block explorer](https://explorer.zen-solutions.io/) and start playing around with it yourself. The landing page will show you the latest blocks in real-time. If you do not have an address yet, that you can use as a starting point to explore the blockchain, you can pick a recent block, choose a transaction and take it from there.

### Summary

The block explorer does for the blockchain what a web browser does for the internet - it lets you access the data. The things you are likely to look up in a block explorer are your addresses and your transactions. Additionally, you can open entire blocks and see all transactions contained.
When you send a transaction to a merchant or exchange and don't get a notification right away about them receiving your funds, it can feel a bit scary. By using the block explorer to look up your transaction you can verify that it is on its way and everything worked out.

Do you want to try it with your own coins? You can install our flagship app [Sphere by Horizen](https://www.horizen.global/wallets/), create a wallet and go to our [Faucet](https://getzen.cash/) where you will receive some free ZEN to test it. Within a few minutes, you will have your own active wallet and your first ZEN to find in the [block explorer](https://explorer.zen-solutions.io/).
