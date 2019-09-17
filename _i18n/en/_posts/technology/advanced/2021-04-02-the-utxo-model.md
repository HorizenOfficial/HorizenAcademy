---
layout: post
type: article
title: "The UTXO Model"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you will learn about the UTXO (Unspent Transaction Output) Model and how to track a user's funds with the UTXO model."
permalink: /technology/advanced/the-utxo-model/
topic: technology
level: advanced
chapter: "Transactions"
---

Before we get into how transactions (TXs) on a blockchain work we want to introduce you to the UTXO (Unspent Transaction Output) model that we already talked about this in the Beginner Level article on transactions

When you think about how your bank does the accounting for your bank account it is pretty intuitive. You hold a certain amount of money in your account which has an account number. If you receive money the amount is added to your balance. If you spend money, then the amount you spend gets subtracted from your balance. With cryptocurrencies, the accounting works a little different.

The blockchain does not create an "account" for you to maintain a balance. There is no final balance stored on the ledger. The blockchain only stores individual transactions and to check your balance, there is an additional step involved. Your wallet does this automatically whenever you open it. What happens in the background is that your wallet scans the ledger for all transactions to your address(es) and adds them up.

![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_D.jpg)
![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_M.jpg)

Each transaction on the blockchain has one or more inputs and one or more outputs. Let's have a look at an actual example throughout a series of four transactions:

Usually, a [block explorer] will show you the most recent transactions first. For this example, we will go through the transactions as they happened - in chronological order.
We created this simple example, only involving two different addresses. We shortened the addresses for better readability. The address we are concerned with here is the grey one: znRwe...  Let's say this is Bob and the other one (blue), is Alice.

### Bob Receives His First Transaction

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/the-utxo-model/TX1.png" alt="TX">
</div>

In the [first TX](https://explorer.zensystem.io/tx/bbbd1fb01998eec8c3ca99236f9b6a2c92e12533ab3e15b7544dcd3228988c34) (above), Bob's address (znRwe) is funded when he receives 10.2 ZEN. The TX has one input and two outputs. The first output (10.2 ZEN) is what Alice actually wanted to transfer to Bob, the second output is called the *change output*. The input that Alice was using, was an output of a transaction she received before. When she still had her money untouched, it was an *Unspent Transaction Output* (UTXO). A spent transaction output is indicated by the <span class="text-danger">(S)</span>, a UTXO is indicated with a <span class="text-success">(U)</span> following the amount. But we will get back to this in a minute. Alice didn't have a UTXO that was exactly 10.2 ZEN so she used one that was larger and sent the remaining ZEN back to herself, just as you would receive change in a store if you were to pay $45 with a $50 bill.

### Bob Sends His First Transaction

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/the-utxo-model/TX2.png" alt="TX">
</div>

In the [second transaction](https://explorer.zensystem.io/tx/62be1b18d6048194fc45209dc727fa932ab4a426072372f6d8cf537fe1f221ee), Bob spends his UTXO of 10.2 ZEN and creates a transaction with two new UTXOs: one of 5 ZEN to a different address and one of 5.1999 ZEN back to his own address - the change output. The difference between inputs and outputs - 0.0001 ZEN - is consumed as the transaction fee. He now owns 5.1999 ZEN on his znRwe... address.

### Another UTXO

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/the-utxo-model/TX3.png" alt="TX">
</div>

In a [third transaction](https://explorer.zensystem.io/tx/315a5e96d92cb19e7529a78e05bcfc3ffb3b5f1fdeaf2b22c582663464219c27), Bob receives another 2 ZEN, increasing his balance to 7.1999 ZEN. He now has two UTXO's at his disposal for further transactions: one of 5.1999 ZEN and another one of 2 ZEN. If he were to open his wallet at that point, it would show him a balance of 7.1999 ZEN by looking at all transactions on the blockchain, filtering out the ones that involve his address and then adding up all unspent outputs.

### Spending Two UTXOs at Once

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/the-utxo-model/TX4.png" alt="TX">
</div>

In the [last transaction](https://explorer.zensystem.io/tx/14f8bc13c9d125558830e4c1cdc5c8bea6d01d224ced153c234471f107d63aa1) of this example, Bob wants to spend 6 ZEN. Neither of the two UTXO's he has at that point is sufficient for that purpose. Although the block explorer shows only one input for the last transaction there were clearly two inputs used: the 5.1999 ZEN and 2 ZEN one from the two examples above.

Combined both UTXO's are worth 7.1999. Bob created two outputs with it: the 6 ZEN output he actually wanted to spend and an additional output for the change of 1.1998 (1.1999 minus the transaction fee of 0.0001). You can see that by now both TX outputs are spent, indicated by the (S) next to them in the second and third screenshot.

### Summary

Most blockchains use the UTXO model for accounting. There are a few exceptions, such as Ethereum, which actually uses an account model. The output of a transaction addressed to you is what you will use as an input to create an outgoing transaction.

When people ask, what a ZEN or Bitcoin actually is, "a UTXO" would be the accurate answer. An unspent transaction output or UTXO that you can unlock with your private key IS your coin. There is no abstraction on top of this. It might take a moment or a second read to get familiar with this, but it's a neat and simple concept and we hope the example above helped you understand what the UTXO model is. If you have fully understood the UTXO model it will help a lot with understanding the following articles.

The next article covers the [block explorer]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-03-block-explorer-continued %}), a tool that allows you to access information on a blockchain, like how a web browser lets you access information on the internet. It is the tool we took the screenshots above with.
