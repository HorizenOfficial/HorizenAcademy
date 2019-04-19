---
layout: post
type: article
title: "Block Explorer Introduction"
description: "A block explorer lets you find information on a blockchain, like a browser lets you access information on the internet."
permalink: /technology/beginner/block-explorer-introduction/
topic: technology
level: beginner
chapter: "Transactions"
---

A block explorer is a tool that lets you browse the blockchain, like how a web browser lets you access the information on the internet. You can see how many coins are available on a given address. You can see how many coins it has currently. You can also see how many coins the address has ever had by reviewing the transaction history for that address. It is useful when you create a transaction and would like to monitor the status of your transaction. Let's have a look at a real-life example:

This is what you can expect when you are searching for an address with a block explorer. Most block explorers function similarly. The address that was looked up for this example on a Horizen block explorer is at the top: znf7... Let's say this is Bob's address.

<div class="my-4">
    <img src="/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_summary.png" alt="Explorer address summary">
</div>

On the top of the page, you will find a summary of the addresses activity. The information provided here will include the total amount received and sent from this address, as well as the current balance. The address we are looking at received a total of 42 ZEN. Bob hasn't sent any ZEN to other addresses yet and therefore still has a balance of 42 ZEN.

<div class="my-4">
    <img src="/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_tx.png" alt="Explorer address tx">
</div>

You will find all the transactions that involved this address below the address summary. This address was only part of a single transaction thus far. A transaction is characterized by its transaction ID - the cryptic blue string at the top of the grey box (a46f...). 

The transaction we are looking at had one input (left) and two outputs (right). The input is what is sent, and the output(s) is what is received.

Let's say Bob received his funds from Alice. Alice' address is next to the input on the left, znd3...

Alice had 46.6 ZEN in her address, but only wanted to send 42 to Bob. Alice did this by using her entire balance of 46.6 ZEN as an input (left) and creating two outputs: one with the 42 ZEN she wanted to send to Bob, and one with the remaining 4.6 ZEN going back to her own address. This is like how you pay $45 in a shop if you only have a $50 bill. You hand over the $50 bill and expect $5 change. The part of the transaction that sends 4.66 ZEN back to where they came from is also called the change in crypto lingo.

We will discuss the concept of inputs and outputs in the next level with the introduction of the UTXO (Unspent Transaction Output) model.
There are three pieces of information left:

 - The sender added a transaction fee of 0.0001 ZEN. Transaction fees are a measure to prevent spam.
 - The number of confirmations tells you how old and a transaction is. Every block that is created (mined) after a transaction is included in the blockchain is called a confirmation of that transaction. 
 - There is the total volume of the transaction.

We encourage you to go to our [block explorer](https://explorer.zen-solutions.io/) and start playing around with it. The landing page will show you the latest transactions in real time if you do not have an address yet to start exploring. Just pick one by clicking on it and you will see the associated addresses. You can start exploring from there.
