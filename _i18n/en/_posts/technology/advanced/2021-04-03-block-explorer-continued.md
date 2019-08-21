---
layout: post
type: article
title: "The Block Explorer"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you will learn how a block explorer lets you browse the data on a blockchain and the kind of data you will find."
permalink: /technology/advanced/block-explorer-continued/
topic: technology
level: advanced
chapter: "Transactions"
---

The block explorer is a graphical tool to view and explore data on the blockchain. There is a block explorer available for almost every public blockchain out there. It allows you to browse the history of a given chain. It might be most interesting to go to the very start of blockchain technology and have a look at Bitcoin in this example.

If you know how to navigate one block explorer, you will know how to navigate all of them. It is quite intuitive and helps to understand how a blockchain is structured and how it works. To really appreciate this article you should be familiar with the basics of a blockchain, transactions, and mining. You can always skip back to one of our previous articles covering these topics if you are unsure about something. If you are familiar with how a blockchain works, this article should help you to connect a lot of the dots that might still be all over the place.

### What You Will Find in a Block Explorer

The information that you will find in a block explorer is structured either by the blocks, by addresses or individual transactions. Let's look into a first example to make all this more tangible.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/block-explorer-continued/latest_blocks.png" alt="Latest blocks">
</div>

There are a number of block explorers out there, often times several versions for the same blockchain. Since we want to go all the way back to the beginning of cryptocurrencies in this example we will look at Bitcoin and use one of the most popular explorers [out there](https://www.blockchain.com/explorer) .

You will see an overview of the most recently created blocks on the landing page. Let's go through what we see here:

 - **Height**: the height is the number the block carries. The very first block created was block #0, after that came block #1 and then block #2. As you can see at the time of writing there have been quite a few blocks mined.
 - **Age**: Is the age of the block. It's self-explanatory, but there is a piece of interesting information between the lines: you might know that the block time, the interval in which new blocks are mined, is 10 minutes with Bitcoin. How come it took only 6 minutes to mine block 539.772 and only 9 minutes for block 539.771? This is because the block time is an average. There will always be blocks created slower and a few that will be produced a lot faster, but on average it will take 10 minutes. In our article about [mining]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}), we explain to you how the block time is adjusted.
 - **Transactions**: the number of transactions included in this block. This means that in the 6 minutes it took to mine block 539.772 about 1500 transactions were conducted.
 - **Total Sent**: The 1547 transactions that took place add up to almost 4700 Bitcoins sent.
 - **Relayed By**: The miner (or mining pool) that solved the block and earned the block reward.
 - **Size**: the amount of storage a given block takes up
 - **Weight**: another metric that refers to the size of a block. It is a more technical metric but as you can see: the more transactions in a block and the bigger the file size of a block, the bigger the weight.

### The Genesis Block

Let's have a look at a single block. The height of the very first block is 0 as we said before. If we want to look at the very first bitcoin block that was ever mined, we can use the search function and enter "0". If you haven't opened the site yet [this link](https://www.blockchain.com/fr/btc/block-height/0) will take you directly to the genesis block, that is what the very first block of a given chain is always called.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/block-explorer-continued/genesis_block.png" alt="The Genesis Block">
</div>

Let us go through the information we can find here. It might seem overwhelming at first, but going through the information step by step you will see that it is quite simple to make sense of.

The genesis block contains only one transaction. This is the minimum amount you will see since every block has a so-called coinbase transaction, the transaction that is used to issue new bitcoins to the miner that solved the block.

The reward for mining Bitcoin, in the beginning, was 50 BTC. The block reward reduces by half every four years (more precisely every 210,000 blocks). This has happened twice so far. A miner today receives 12.5 BTC per block.

Other than the transaction that rewarded the miner (Satoshi Nakamoto himself in this case) there is no transaction in this block, that is why the estimated transaction volume is 0. Today there is a transaction fee attached to most transactions, but this wasn't always the case, especially when the network was still in its infancy. 

We have talked about the height before so we will get to the timestamp now. The first bitcoin was mined on the 3rd of January 2009, the birthday of the very first cryptocurrency.

The "Relayed By" field shows who mined the block. Today's mining pools and their reward addresses are mostly known. This is how the block explorer "knows" who mined the block: it compares the address that received the newly generated coins (1A1zP1...) in the coinbase transaction with a number of known addresses from mining pools. In this case, we do know who the miner was, although the block explorer doesn't tell us: Satoshi Nakamoto himself.

We talk about the _difficulty_ in our [mining article]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}) in more detail. The difficulty describes how hard the puzzle the miners need to solve is. It refers to the number of leading zeros in the block hash. As you can see on the right, the Genesis Block hash had 10 leading zeros. Today (as of the time of writing) blocks like block 539.772 need to have at least 18 leading zeros. The more leading zeros required, the harder the puzzle.

Bits, Size, and Weight all refer to the size of the data of a given block, not too spectacular. Version refers to the software that ran at the time the block was created.

Now we get to another interesting information: the Nonce. When miners try to solve a block, what they are doing is putting different values in the Nonce (**N**umber used **once**) field and calculate the hash of the block. If the result doesn't have the minimum amount of leading zeros required (most often it will have none at all) they try another random value for the nonce and hash the block again. This is repeated until a miner finds a nonce that produces a hash with a sufficient number of leading zeros. In the case of the very first block, Satoshis computer tried more than 2 Billion values (if he started at 0) before he found a value that produced the desired result. He received the very first 50 Bitcoin as a block reward for this. 

### The First Bitcoin Transaction

What you will most likely use a block explorer for is checking a transaction status. You can find a given transaction either by searching for one of the addresses involved (the sending and receiving addresses) or by the transaction ID (hash). Most wallets will show you the transaction ID for all of your transactions. (This is the long sequence of characters in the gray boxes below, b1fea... and f4184...)

If we want to look at the very first cryptocurrency transaction ever done we need to go to Block #170, where the first bitcoin transaction from Satoshi Nakamoto to Hal Finney is included.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/block-explorer-continued/transactions.png" alt="Bitcoin Transaction">
</div>

It is the first block on the bitcoin blockchain that contains more than one transaction. We can find the coinbase transaction on the very top. Below is the first transaction as you would expect it. One person sending coins to another one.

We hope this article helps you navigate the block explorers of this world. We encourage you to play around with this for a bit. I know it helped me a lot with understanding how the information in a blockchain is organized.
