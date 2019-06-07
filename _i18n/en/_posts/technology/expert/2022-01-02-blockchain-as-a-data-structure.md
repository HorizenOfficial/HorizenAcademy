---
layout: post
type: article
title: "Blockchain as a Data Structure"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/blockchain-as-a-data-structure/
topic: technology
level: expert
chapter: "What is a Blockchain?"
---

{% include tech-not-available.md %}

The first and until today most dominant use case of blockchain technology is digital money. In order to have a monetary system without central control one needs a special and sophisticated way to handle all the data that is produced with every transfer of money. Imagine every person could excess and modify the databases kept by banks storing account balances. It would be a disaster.

A first step to make decentralized money a reality was to understand that a very simple but effective method of accounting could be used. By storing all transactions that ever happened in a digital ledger, every account balance could be computed at any time. The digital ledger used to facilitate a digital currency needs a set of properties, that were not achievable before blockchain came along. In this article we will look at what features this digital ledger - the blockchain - needs to make decentralized money possible and how this translates to the way data is handled on a blockchain.

## Common Data Structures

Before we look at the blockchain itself, lets try to develop an understanding of data structures by looking at some of the most common ones used.

#### Array

*Arrays* are one of the most simple forms to store data. Arrays are useful, when you know how many data elements you need to store, and how large each data element will be. From those inputs, your computer will calculate the total storage needed and set it aside so no other program can access this partition of your hard drive or RAM. If you want to expand the array by an element later on, the reserved partition in memory might become to small so the entire array is moved to a different location in memory.

Each element has an index, starting with 0. If you are looking for an element and know where you stored it, you can instantly access and modify it. If you don't know an elements location, you need to do a *sequential lookup*. This means you check the elements one by one, starting at index 0, until you find it. Arrays are useful for their simplicity and *instant access* property.

![Array](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/array_D.jpg)
![Array](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/array_M.jpg)

#### Linked List

When a program uses a *linked list* to store data, it doesn't have to know how many data elements you want to store beforehand, but it needs to know what each element consists of. The data is stored in *nodes* which can contain several data elements of different types each. The first element of a linked list is called the *head*, the last one is called the *tail* If you need to store information about cars, you could define a node as the set of information: brand, model, year produced and license plate.

![Linked List](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/linked_list_D.jpg)
![Linked List](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/linked_list_M.jpg)

Each node contains, besides the actual data, a *pointer* to the next node. The *pointer* tells your computer where the next node is located in memory. This allows you to expand a linked list easily because the data doesn't have to be in a single, continuous location in memory.

**insertgraphic array vs list**
