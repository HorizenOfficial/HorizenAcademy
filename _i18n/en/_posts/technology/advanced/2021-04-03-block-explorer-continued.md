---
layout: post
type: article
title: "The Block Explorer"
description: "In this article, you will learn how a block explorer lets you browse the data on a blockchain and the kind of data you will find."
permalink: /technology/advanced/block-explorer-continued/
topic: technology
level: advanced
chapter: "Transactions"
---

An often-cited benefit of blockchain technology is the _transparency_ it offers. **Transactions**, **blocks**, and **addresses** are publicly auditable, and the tool you use for that job is called the **block explorer**.

The **block explorer** is a graphical tool to view and explore data on the blockchain, like how a web browser lets you access the information on the internet.

There is a block explorer available for _almost_ every public blockchain. If you know how to navigate one block explorer, you will know how to navigate all of them. It is quite intuitive and aids in understanding of how a blockchain is structured and how it works.

It allows you to browse the history of a given chain. You can review the transaction history of a given address, the set of transactions in a block, as well as the status of transactions.

**Let’s take a look at a real-life example:**

## Horizen's Block Explorer

![Explorer address summary](/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_summary.png)

This is what you can expect when you are searching for an address with a block explorer. The _address_ that was looked up for this example on a **Horizen** block explorer is at the top: **znf7…** Let’s say this is _Bob’s_ address.

On the top of the page, you will find a summary of the addresses _activity_. The information provided here will include the total amount _received_ and _sent_ from this address, as well as the current _balance_. The address we are looking at received a total of **42** ZEN. Bob didn’t send any ZEN to other addresses yet, and therefore still has a balance of **42** ZEN.

![Explorer address tx](/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_tx.png)

You will find all the transactions that this address was involved in below the **address summary**. This particular address was only part of a _single_ transaction thus far. Every transaction is characterized by its _identifier_ - the **transaction ID** - which is the blue string at the top of the gray box. The transaction we are looking at had one input (left) and two outputs (right). The _input_ is what is _sent_, and the _output(s)_ is what is _received_.

Let’s say Bob received his funds from _Alice_. Alice’s address is next to the input on the left, **znd3…** Alice had an output of **46.6** ZEN in her address, but _only_ wanted to send **42** to Bob. Alice did this by using her entire balance of **46.6** ZEN as an input (left) and creating two outputs: _one_ output of **42** ZEN she wanted to send to Bob, and _one_ with the remaining **4.6** ZEN going back to her own address as change.

**Now there are three pieces of information left uncommented:**

- The _sender_ added a _transaction fee_ of **0.0001** ZEN. **Transaction fees** are a measure to prevent spam. When sending only a _few_ transactions, the fee is negligible. If you were to send _large_ amounts of spam transactions, the cost would quickly add up and become prohibitive.
- The _number_ of confirmations is a measure of how _old_ a transaction is. Every block that is created after a transaction is included in the blockchain is called a **confirmation** of that transaction.
- There is the total **volume** of the transaction.

Let’s explore the beginning of blockchain technology and have a look at **Bitcoin** in this next example.

## A Bitcoin Block Explorer

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/4.2-block-explorer-continued/latest_blocks.png" alt="Latest blocks">
</div>

There are a number of block explorers out there, _oftentimes_ several versions for the same blockchain. Since we want to go all the way back to the beginning of cryptocurrencies in this example, we will look at one of the most popular Bitcoin [explorers](https://www.blockchain.com/explorer) out there.

You will see an overview of the most recently created blocks on the landing page. **Let’s go through what we see here:**

- **Height**: the _height_ is the number the block carries. The very first block created was block **#0,** after that came block **#1** and so on.
- **Age**: Is the _age_ of the block. While self-explanatory, there is a piece of interesting information between the lines: you might know that the block time, the interval in which new blocks are mined, is **10** minutes with _Bitcoin_. How come it took only **6** minutes to mine block **539.772** and **9** minutes for block **539.771**? This is because the block time is an _average_. There will always be blocks created _slower_ and a few that will be produced a lot _faster_, but on _average_ it will take 10 minutes.
- **Transactions**: The number of _transactions_ included in this block.
- **Total Sent**: The **1547** transactions that took place add up to almost **4700** Bitcoins sent.
- **Relayed By**: The _miner_ or _mining pool_ that solved the block and earned the block reward.
- **Size**: The amount of storage the block takes up
- **Weight**: A metric that refers to the _size_ of a block. It is a more technical metric but as you can see, the _more_ transactions in a block and the _bigger_ the file size of a block, the _bigger_ the weight.

### The Genesis Block

Let’s have a look at a single _block_. The height of the very first block is **0** as we said before. If we want to look at the very _first_ Bitcoin block, we can use the search function and enter “**0**”. The very first block of a given chain is usually called the **genesis block**.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/4.2-block-explorer-continued/genesis_block.png" alt="The Genesis Block">
</div>

The genesis block contains only _one_ transaction. This is the minimum amount you will see since every block has a so-called **coinbase transaction**, the transaction that is used to issue new bitcoins to the miner that solved the block to reward them for their efforts.

The reward for mining **Bitcoin**, in the beginning, was **50** BTC. The block reward reduces by half every **four years**, or more precisely, every 210,000 blocks. This has happened three times so far. A miner today receives **6.25** BTC per block.

Other than the transaction that rewarded the miner, **Satoshi Nakamoto** himself in this case, there is _no_ transaction in this block, that is why the estimated transaction volume is **0**. Today there is a transaction fee attached to most transactions, but this wasn’t always the case, especially when the network was still in its infancy.

We have talked about the height before, so we will get to the timestamp now. **The first bitcoin was mined on the 3rd of January 2009**, the birthday of the very first cryptocurrency.

The “_Relayed By_” field shows who mined the block. Today’s mining pools and their reward addresses are mostly known. This is how the block explorer “_knows_” who mined the block: it compares the address that received the newly generated coins (**1A1zP1…**) in the coinbase transaction with a number of known addresses from mining pools. In this case, we do know who the miner was, although the block explorer doesn’t tell us: _Satoshi Nakamoto_ himself/herself/themself/themselves.

The **difficulty** describes the threshold the block hash has to be smaller than or equal to in order to be considered valid. _It can be interpreted as the number of leading zeros the block hash must have._ As you can see on the right, the genesis block hash had **10** leading zeros. Looking forward to block **539.772**, it needed to have at least **18** leading zeros.

_Bits_, _Size_, and _Weight_ all refer to the size of the data of a given block, not too spectacular. _Version_ refers to the software that was run at the time the block was created.

Now we get to another interesting information: the _Nonce_. When miners try to solve a block, what they are doing is putting different values in the **Nonce** (_Number used once_) field and calculate the _hash_ of the block. If the result doesn’t have the minimum amount of leading zeros required (most often it will have none at all), they increment the nonce and hash the block again.

This is repeated until a miner finds a nonce that produces a hash below the target. In the case of the very first block, _Satoshi's_ computer tried more than **2 Billion** values (if he started at 0) before he found a value that produced the desired result. He received the very first **50** bitcoin as a block reward for this.

### The First Bitcoin Transaction

What you will most likely use a block explorer for is checking a _transaction status_. You can find a given transaction _either_ by searching for one of the addresses involved, the _sending_ or _receiving_ address, or by the _transaction ID_ (**TXID**). Most wallets will show you the transaction ID for all of your transactions.

If we want to look at the very first cryptocurrency transaction ever done, we need to go to Block **#170**, where Satoshi Nakamoto sent **Hal Finney** **10** BTC.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/4.2-block-explorer-continued/transactions.png" alt="Bitcoin Transaction">
</div>

It is the _first_ block on the Bitcoin blockchain that contains _more_ than one transaction. We can find the coinbase transaction on the very top. Below is the first transaction as you would expect it. One person sending coins to another one.

## Summary

The **block explorer** does for the blockchain what a web browser does for the internet - it lets you _access the data_. The things you are likely to look up in a block explorer are your _addresses_ and your _transactions_. Additionally, you can open entire _blocks_ and see _all_ transactions contained.

When you send a transaction to a _merchant_ or _exchange_ and don’t get a notification right away about them receiving your funds, it can feel a bit scary. By using the block explorer to look up your transaction, you can verify that it is on its way, and everything worked out.`
