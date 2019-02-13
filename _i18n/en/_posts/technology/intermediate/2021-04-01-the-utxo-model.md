---
layout: post
title:  "The UTXO Model"
permalink: technology/intermediate/the-utxo-model/
topic: technology
level: intermediate
chapter: "Transactions"
---

Before we get into how transactions (TX's) on a blockchain work and what different types there are, we need to introduce you to the UTXO (Unspent Transaction Output) model.

When you think about how your bank does the accounting for your bank account it is pretty intuitive. You hold a certain amount of funds in your account which has an account number. If you receive an incoming transaction the amount is added to your balance. If you spend money, then the amount you spend gets subtracted from your balance. With cryptocurrencies, the accounting works a little different.

The blockchain does not create an "account" for you to maintain a balance. There is no final balance stored on the ledger. The blockchain only stores individual transactions and to check your balance, there is an additional step involved. For this step, you are going to use your wallet, which does this automatically whenever you open it and it shows you your balance, or you can do it manually using the block explorer. What happens in the background when you use either of these tools is that they search the ledger for all transactions, that involve your address(es). The wallet (or explorer) then adds all incoming transactions together and subtracts all outgoing transactions to derive your current balance.

![wallet](/assets/post_files/technology/intermediate/the-utxo-model/wallet.jpg)

Each transaction on the blockchain has one or more inputs and one or more outputs. Let's have a look at an actual example throughout a series of four transactions:

Usually, a block explorer will show you the most recent transactions first. We will go through the transactions for this example the other way around: start with the oldest TX and see what happened with the particular address step by step.

**An Example**

![TX](/assets/post_files/technology/intermediate/the-utxo-model/TX1.png)

We created this simple example, only involving two different addresses. We shortened the addresses for better readability. The address we are concerned with here is the grey one: znRwe...  Let's say this is Bob and the other one (blue), is Alice.

In the first TX (above), Bob's address is funded when he receives 10.2 ZEN. The individual TX has one input and two outputs. The first output (10.2 ZEN) is what Alice actually wanted to transfer to Bob, the second output is called the change. The input that Alice was using, was an output of a transaction she received before. When she still had her funds untouched, it was an Unspent Transaction Output (UTXO). If a transaction output is spent is indicated by the <span class="text-danger">(S)</span>. If the transaction is unspent it is indicated with the <span class="text-success">(U)</span> following the amount. But we will get back to this in a minute. Alice didn't have a UTXO that was exactly 10.2 ZEN so she used one that was larger and sent the remaining ZEN back to herself, just as you would receive change in a store if you were to pay $ 45 with a $ 50 bill.

![TX](/assets/post_files/technology/intermediate/the-utxo-model/TX2.png)

In the second transaction, Bob uses his UTXO of 10.2 ZEN to create a TX where he spends 5 ZEN and sends the change of 5.1999 ZEN back to his own address. The difference between inputs and outputs is consumed as the transaction fee. He now owns 5.1999 ZEN on his znRwe... address.

![TX](/assets/post_files/technology/intermediate/the-utxo-model/TX3.png)

In a third transaction, Bob receives another 2 ZEN, increasing his balance to 7.1999 ZEN. He now has two UTXO's at his disposal for further transactions: one of 5.1999 ZEN and another one of 2 ZEN. If he were to open his wallet at that point, it would show him a balance of 7.1999 ZEN by looking at all transactions on the blockchain, filtering out the ones that involve his address and then adding up all incoming TX's and subtracting all outgoing TX's.

![TX](/assets/post_files/technology/intermediate/the-utxo-model/TX4.png)

In the last transaction of this example, Bob wants to spend 6 ZEN. Neither of the two UTXO's he has at that point is sufficient for that purpose. Although the block explorer shows only one input for the last transaction the wallet actually used two inputs when creating it. It combined both remaining UTXO's worth 7.1999 and created two outputs with it: the 6 ZEN output he actually wanted to spend and an additional output for the change of 1.1998 (1.1999 minus the transaction fee).

You can see that both TX outputs are spent, indicated by the (S) next to them in the second and third screenshot.

### Summary

Most blockchains use the UTXO model for accounting. There are a few exceptions, such as Ethereum, which actually uses an account model. The output of a transaction addressed to you is what you will use as an input to create an outgoing transaction.

When people ask, what a ZEN or Bitcoin actually is, this would be the accurate answer. An unspent transaction output or UTXO that you can unlock with your private key IS your coin. There is no abstraction on top of this. It might take a moment or a second read to get familiar with this, but it's a neat and simple concept and we hope the example above helped you understand what the UTXO model is. If you have fully understood the UTXO model it will help a lot with understanding the following articles.

The next article covers the block explorer, a tool that allows you to access information on a blockchain, like how a web browser lets you access information on the internet. It is what we took the screenshots above with. We encourage you to play around with it as it helps with understanding the UTXO model and blockchains in general if you browse through a few transactions yourself.
