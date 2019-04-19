---
layout: post
type: article
title: "Blockchain as a Data Structure"
description: "In the first article of this chapter, we will look at how a bockchain stores data and why this makes the data secure."
permalink: /technology/beginner/blockchain-as-a-data-structure/
topic: technology
level: beginner
chapter: "What is a Blockchain?"
---

Welcome to the very first article in the technology section of our Horizen Academy. The first two articles aim to explain to you what a blockchain actually is. If you have read up on Bitcoin, blockchain, and cryptocurrencies before you may know there is a distinction between:

<ul class="lead">
    <li>Blockchain technology in general</li>
    <li>A protocol (the rules) of a specific blockchain</li>
    <li>The currency that is running on top of this blockchain (if there is one)</li>
</ul>

This article provides an introduction to what a blockchain is, and what it allows us to do. You can look at it in many different ways, depending on the context, but we want to focus on two very general approaches. On one hand, it is a way to store data and on the other hand a "language", or protocol to transfer value.

### The Blockchain is a Type of Data Structure

A blockchain is a data structure in the eyes of a computer scientist. This structure stores information reliably regardless of being in a trustless environment. A data structure may sound technical at first, but its function is exactly that. It structures your data. Lists or tables are familiar types of data structures. You likely use one of these two methods any time you write down information on paper. There are many types of data structures in the digital world, including blockchain. The term blockchain comes from the structure that stores your data. All data becomes separated into blocks. Every block states which block came before it creating a "chain" of blocks. Stating which block came previously is commonly referred to as referencing.

![List table chain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/list_table_chain_D.jpg)
![List table chain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/list_table_chain_M.jpg)


##### A Database: Efficient but Centralized
A database is a highly efficient data structure. Databases are an excellent way to store large amounts of data but are usually operated by a central entity. Your bank, your favorite social network, or online merchant, use databases to store your data.

This entity decides who can add data to the database and who can access it, but it also has the power to change or delete data. You can edit your social media profile. Your friends can see that information, but if you violate the terms of agreement they can delete your post. The central entity has the last say in what stays on the platform. This can be both good and bad when it comes to a social network, but this would not be a good feature when looking at data structures that store your money


##### A blockchain: Less Efficient, but Decentralized
Many different entities, or peers, operate a blockchain. These peers don't know or trust each other (therefore "trustless"). The good thing is that they don't need to trust each other. Many peers keep a copy of the data and no single peer has the power to change or censor the data. Participants (or nodes in technical terms) communicate constantly to keep each other updated on new events. Events on the blockchain are most commonly transactions.

There is no centralized entity, like a bank or clearinghouse responsible for accepting and processing new transactions. Cryptocurrencies are permissionless because every individual abiding the rules of the protocol can create a wallet an send a transaction without needing to sign up to use the service. The transaction is then broadcast to the network and every participant (or node, or peer) keeps a copy of it. A node can be an individual person, a store accepting crypto, or a bank. It makes no difference who you are. The amount of copies makes a blockchain slower than a database, but more secure.

![Decentralised clearing](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/decentralised_clearing_D.jpg)
![Decentralised clearing](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/decentralised_clearing_M.jpg)


##### Where does the term Blockchain come from?
The blockchain does not keep data in a single huge continuous ledger but separates the data into blocks. These blocks are then connected to each other like individual pages in a book. That is how the term blockchain came to be. Imagine a bookie recording entries using single pages instead of one large book. Every few minutes he takes a new piece of paper and writes "the last page I used was page X, this is page Y". The notes that he includes "chain" the pages together. He can easily arrange the pages if he ever drops them because each page references its predecessor.


![Book blockchain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/book_blockchain_D.jpg)
![Book blockchain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/book_blockchain_M.jpg)


One of these single pages represents a block in this comparison, the pile of the pages he already used represent the blockchain. The reference that page X came before page Y is what "chains" the blocks together. Instead of one bookkeeper, there are many of them working simultaneously. Miners are the bookkeepers of a blockchain and we will explain their role in the section about how a blockchain works.

### Summary

The blockchain is simply a way to store information like lists and tables are. Public blockchains come with useful features that were not achievable until now. It is impossible to change information after the fact. The information is immutable and highly secure. That is why blockchain is perfect for supporting digital currencies.

Another way we can look at blockchain is as a [protocol to transfer value]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-03-a-protocol-to-transfer-value %}), as the internet is a protocol to transfer information. We will look at blockchain from this perspective in our next article.
