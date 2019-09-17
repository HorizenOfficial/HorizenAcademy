---
layout: post
type: article
title: "Blockchain as a Data Structure"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy.  In this chapter, you will learn how a blockchain stores data and why this makes it suitable to transfer value at a beginner level."
permalink: /technology/beginner/blockchain-as-a-data-structure/
topic: technology
level: beginner
chapter: "What is a Blockchain?"
---

Welcome to the very first article in the technology section of our Horizen Academy. The first two articles aim to explain what a blockchain actually is. If you have read up on Bitcoin, blockchain, and cryptocurrencies before you may know there is a distinction between:

- Blockchain technology in general
- A protocol (the rules) of a specific blockchain
- The currency that is running on top of this blockchain (if there is one)

This article provides an introduction to what a blockchain in general is, and what it allows us to do. You can look at it in many different ways, depending on the context, but we want to focus on two very general approaches. On one hand, it is a way to store data and on the other hand a "language", or protocol to transfer value.

### The Blockchain is a Type of Data Structure

A blockchain is a data structure in the eyes of a computer scientist. This structure stores information reliably regardless of being in a trustless environment. A data structure may sound technical at first, but its function is exactly that. It structures your data. Lists or tables are familiar types of data structures. You likely use one of these two methods each time you write down information on paper. There are many types of data structures in the digital world, including blockchain. The term blockchain comes from the structure that stores your data. All data becomes separated into blocks. Every block states which block came before it creating a "chain" of blocks. Stating which block came previously is commonly referred to as referencing.

![List table chain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/list_table_chain_D.jpg)
![List table chain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/list_table_chain_M.jpg)

#### A Database: Efficient but Centralized

Most traditional databases use very efficient data structures. Databases are an excellent way to store large amounts of data but are usually operated by a central entity. Your bank, your favorite social network, or online merchant, uses databases to store your data.

This entity decides who can add data to the database and who can access it, but it also has the power to change or delete data. You can edit your social media profile. Your friends can see that information, but if you violate the site's Terms of Agreement they can delete your post. The central entity has the last say in what stays on the platform. This can be both good and bad when it comes to a social network, but this would not be a good feature when looking at data structures that store your money. Centralized databases are a lot more efficient not only because of the way they store data but mostly because the database is maintained by a single entity.

##### A Blockchain: Less Efficient, but Decentralized

Many different entities, or peers, operate a blockchain. These peers don't know or trust each other (therefore "trustless"). The good thing is that they *don't need to trust each other*. Many peers keep a copy of the data and no single peer has the power to change or censor the data. Participants (or nodes in technical terms) communicate constantly to keep each other updated on new events. Events on the blockchain are most commonly transactions.

There is no centralized entity, like a bank or clearinghouse, responsible for accepting and processing new transactions. Cryptocurrencies are permissionless because every individual abiding by the rules of the protocol can create a wallet and send a transaction without needing to sign up to use the service. The transaction is then broadcast to the network and every participant, or node, keeps a copy of it. A node can be operated by an individual person, a store accepting crypto or a bank. It makes no difference who you are. The amount of copies makes a blockchain slower than a database, but a more secure way to store data. For a global and secure type of money, this is a crucial set of traits.

![Decentralised clearing](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/decentralised_clearing_D.jpg)
![Decentralised clearing](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/decentralised_clearing_M.jpg)

##### Where does the term Blockchain come from?

The blockchain does not keep data in a single huge continuous ledger but separates the data into blocks. These blocks are then connected to each other like individual pages in a book. That is how the term blockchain came to be. Imagine a bookie recording entries using single pages of a book instead of one large scroll. Every few minutes he starts using a new page and adds a reference to the last page - "this page follows page x". The reference he includes "chains" the pages together. He can easily arrange the pages if he ever drops them because each page references its predecessor.

![Book blockchain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/book_blockchain_D.jpg)
![Book blockchain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/book_blockchain_M.jpg)

One of these single pages represents a block in this comparison and the pile of the pages he already used represent the blockchain.
Instead of one bookkeeper, there are many of them working simultaneously on a blockchain. *Miners* are the bookkeepers of a blockchain and we will explain their role in the chapter on [how a blockchain works]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-01-how-does-a-blockchain-work %}). For now, all you need to know is that they are the ones creating new blocks.

### Summary

The blockchain is simply a way to store information - just like lists and tables. Public blockchains come with powerful features that were not achievable before. It is impossible to change information after the fact. The information is immutable and highly secure. That is why blockchain is perfect for supporting digital money.

Another way we can look at blockchain is as a [protocol to transfer value]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-03-a-protocol-to-transfer-value %}), similar to how the internet is a protocol to transfer information. We will look at blockchain from this perspective in our next article.
