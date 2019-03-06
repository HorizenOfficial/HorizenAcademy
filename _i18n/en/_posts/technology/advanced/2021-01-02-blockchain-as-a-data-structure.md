---
layout: post
type: article
title: "Blockchain as a Data Structure"
permalink: /technology/advanced/blockchain-as-a-data-structure/
topic: technology
level: advanced
chapter: "What is a Blockchain?"
---

One can explain Blockchain technology in many different ways. Looking at blockchain through the lens of cryptocurrencies has been the dominant narrative until recently. Bitcoin is the first thing most people will associate with blockchain technology but facilitating cryptocurrency transactions is only one use case out of many. We would like to take a step back and look at blockchain in more general terms from the perspective of a computer scientist in this article.

### The Blockchain is a Data Structure

A data structure, in the context of computer science, is a way to store, organize, and manage data. A data structure enables you to access, add, modify and search the data contained within it. Some of the most common and basic data structures include arrays and linked lists. An array is a number of enumerated elements. These elements can be numbers, letters, words or even files. The indices allow you to access any element individually, so if you want to change some entry in an array and you know it's location, you have instant access.

![Array](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/array.png)

_Nodes_ are the data elements in a linked list. A node includes at least one piece of data (any type) and a pointer to the next element. This pointer's function is to tell your computer where to find the next element of the list.

If you look at the first piece of data on the list and wish to access the second one, you will look at the pointer that directs you to that element. It is easier to add data to a linked list through expanding it by one node than it is to add data to an array by increasing the number of elements. What you don't have with a linked list is _instant access_. If you are searching for a specific piece of data in your linked list you will look at the first _node_, the _head_ of the linked list. If it is not the element you were looking for, you follow the link or pointer, that will lead you to the next node. If this node does not contain the data you were looking for either, you continue by following the links throughout all nodes until you find the desired data.

![Linked List](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/linked_list.jpg)

The blockchain is like a linked list in the context of data structures. The blockchain also separates the data into containers - the _blocks_. The _blocks_ are quite analogous to _nodes_ in a linked list. Each _block_ contains a _reference_, which is the hash of the preceding block. This serves as a link to the preceding block and establishes the order throughout the chain of blocks.

![Blockchain data](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/blockchain_data.jpg)

The key difference between a blockchain and a linked list is that each reference in a blockchain is cryptographically secured. You may hear the term _append-only data structure_ describing blockchains. This means you can only add data to a blockchain by appending it to the front. The secured links are constantly checked for validity. If you were to insert a malicious block in the middle of a blockchain, e.g. between Block 1 and 3 in the graphic below, you could include a reference to its predecessor (Block 1), but it would be very hard (read: infeasible) to make the next block (3) reference your newly inserted block.

Each new block built on top of an existing block is commonly known as a _confirmation_. The older a block gets, the more confirmations it will have. Each confirmation makes tampering with the data in a block more difficult. Block 2 in the graphic below has one confirmation. To tamper with its data, you would have to recreate one valid reference. With each confirmation, you have to recreate an additional reference. The older the block, the more certain you can be that it no changes to the block will occur.

![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/blockchain_broken.jpg)

The references between blocks don't just depend on the order of blocks, but also on the data contained within each block. It is not possible to easily add or delete data from a block in the blockchain. This property is the foundation of the trust people put in the data stored in a blockchain.

At the same time, it is easy to add data in a new block to the chain. For example, you could add a new transaction on a cryptocurrency blockchain. The transaction is easy to verify because all the preceding transactions recorded on the network are immutable. This makes verification simple. You can verify if Address Y wants to spend amount X, it has received at least amount X in earlier transactions and not spend that amount yet.

Cryptocurrencies are only one specific use case of blockchain technology. The blockchain is rapidly becoming one of the greatest ways to track supply chain, fleet management, and more.

### Summary

The blockchain is a method to store data in the context of computer science. The elements (or blocks) of a blockchain are cryptographically linked. It is not feasible to change data after it once recorded to the block. This is why there is value in blockchain. It is an immutable ledger that stores data reliably in a trustless environment.

We would like to end this section with a tweet that distilled the implications of the properties of blockchain technology in the context of data structures.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Blockchains don’t guarantee truth; they preserve truth &amp; lies from later alteration, allowing one to securely analyze them and be more confident in uncovering the lies. Typical computers are computational etch-a-sketch, while blockchains are computational amber.&quot; - <a href="https://twitter.com/NickSzabo4?ref_src=twsrc%5Etfw">@NickSzabo4</a></p>&mdash; Jameson Lopp (@lopp) <a href="https://twitter.com/lopp/status/1059227449232445440?ref_src=twsrc%5Etfw">November 4, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
