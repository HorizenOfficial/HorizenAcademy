---
layout: post
type: article
title: "Intro to Transactions (Basic)"
permalink: /technology/beginner/intro-to-transactions-basic/
topic: technology
level: beginner
chapter: "Transactions"
---

In the first article of our tech category, [What is a Blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-02-blockchain-as-a-data-structure %}), we said that the blockchain is a public ledger that keeps track of all the transactions that ever happened on the network. The article about [identity on a blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}) explained that every user is characterized through an individual key pair. In the last article, we stated that [a wallet is a program]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}), that helps you with managing your keys and creating transactions. 

This article should give you a nice concept to keep in mind when thinking about what a cryptocurrency transaction is and how it works. 

We want to break this down into an analogy that sacrifices a bit of accuracy in favor of understandability.

![Mailboxes](/assets/post_files/technology/beginner/intro-to-transactions-basic/mailboxes.png)

You can think of a blockchain as a grid of mailboxes that you would find in a multi-party house. Our "mailboxes" have a few additional features.

First of all, there is not just one version of it, but a large number of copies all around the globe. All those mailboxes are identical, not only in their structure but also the content of each individual box. Anything added to one version will be added to all the other versions. You can even have a copy at home if you choose to run a full node.

The lockers are accessible from anywhere, at any time, as long as you have access to an internet connection. So this grid of mailboxes is representing our blockchain or ledger. 

### An Address as a Mailbox

Now let us consider each individual mailbox in this grid. We explained that identity on a blockchain is a pair of keys: a public and a private key in the article about identity on the blockchain. These keys always come as a set. In this analogy, each individual mailbox is a visual representation of a key pair.

![Empty](/assets/post_files/technology/beginner/intro-to-transactions-basic/T1_empty.jpg)


The corresponding key pair identifies the individual mailboxes in our grid instead of numbers. You can find a given mailbox or account with the public key or address, as the identifier. You can open it with the corresponding private key.

**Note**: There is a slight difference between an address and a public key, but for now, we can consider them to be the same. We will get to this difference in the **intermediate section**.

To make this analogy work imagine the door to your mailbox is transparent. Nobody other than the owner of the key pair can open the mailbox, but everybody can see what's inside. We will get back to this property when we talk about the block explorer. To sum up what we have so far, once using more familiar terminology and once using blockchain lingo:

The **address** lets you find a given **mailbox** in the grid and lets you **put something inside**.

The public key lets you find a given **account** on the **blockchain** and lets you **send a transaction** to it.

### Your First Transaction

You will be on the receiving side of your first cryptocurrency transaction, otherwise, you wouldn't have any funds to spend. So let's look at this transaction through the lens of our analogy.

The transaction that you receive your first funds with is a message sent out to the network and recorded in every copy of the ledger. From now on there is a new mailbox in the grid with a message inside that represents the ownership of some funds. If you have created a new key pair in your wallet, and your public key is "AbC1" you would pass this key, or address, to somebody that is going to send you your first funds. This somebody might be an exchange, where you bought your first ZEN and now you would like to transfer those to your wallet or a friend sending you some coins.

The following process should be straightforward if you have read the introduction:

Your **address** will be used to **create a new mailbox** in the **grid of mailboxes**. Then **your first transaction is slipped** inside the mailbox.

The transaction is visible to everybody, but only the owner of the corresponding private key can access the funds.

![Received](/assets/post_files/technology/beginner/intro-to-transactions-basic/T2_received.jpg)

### Your First Time Creating a Transaction

You may want to spend or transfer the funds you now have on the blockchain to another address. First, you will need the public key or address of the recipient. Let's say this address is XyZ9.

To send funds to this address the following things will happen:

 - Your public key locates your mailbox.
 - Your wallet will now use your private key to unlock your mailbox with your first transaction.
 - The wallet locates the mailbox of the recipient using his address (or public key).
 - Your wallet slips the newly created transaction inside.

![Sent](/assets/post_files/technology/beginner/intro-to-transactions-basic/T3_sent.jpg)

Every participant can now see (or validate) that you transferred your funds to another party. Only this party can access the transferred funds with the corresponding private key. Once you send the transaction there is no way for you to change or reverse it. This means you should always double check the addresses that you are sending any funds to. If possible, you should always use the copy - paste function instead of typing an address manually and check the first and last few digits. If you send funds to the wrong address by accident there is no way to revert the transaction.

We'd like to go back to a statement from our article about wallets for a moment. We said: "You never actually store any funds in your wallet, just the keys to access them!". We hope by now this statement makes more sense. The blockchain stores all the transactions. If you own 5 ZEN, this means that there is an entry in the blockchain that says "user X sent 5 ZEN to your address". Coins are entries in the ledger. This is why you cannot store any funds in your wallet. You only store the keys that let you find your funds and create a transaction, to send them to somebody else. Hence the idea to think of your wallet as a keychain, rather than a real-life wallet.

### Summary

In conclusion, the blockchain itself is a record of all the transactions that have ever happened on it, stored publicly by many participants. A transaction is a single entry in this record. To receive a transaction you need to give your public key (or address) to the sender. You must unlock your funds with your private key if you would like to spend them.

In our analogy the individual mailboxes are transparent. Everybody can see what is inside a given mailbox. You can not only see what is inside a given mailbox at the time but also what used to be in there.

In our next article, we will summarise all the previous articles shortly and introduce you to the block explorer. A block explorer is the blockchain equivalent of a web browser. It lets you access all the information that is publicly stored on the blockchain. If you are the hands-on type, try out [this neat demo](https://coindemo.io/), that lets you do test transactions and much more.
