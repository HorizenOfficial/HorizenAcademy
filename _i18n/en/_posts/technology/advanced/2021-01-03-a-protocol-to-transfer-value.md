---
layout: post
type: article
title: "A Protocol to Transfer Value"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, we compare blockchains as protocols to transfer money with the internet as a protocol to transfer information at an advanced level."
permalink: /technology/advanced/a-protocol-to-transfer-value/
topic: technology
level: advanced
chapter: "What is a Blockchain?"
further_reads: [why_bitcoin_lightning_network_is_ingenious]
---

Money is one of the oldest "technologies" of humankind - a technology to communicate value. There have been many forms of money throughout several centuries and even millennia - from barter to bones, feathers to precious metals, gold-backed currencies to today's fiat currencies. Blockchain might be the technological advance that was needed to move to the next chapter in the history of monies: cryptocurrencies.
In this article, we will look at blockchain as a settlement network for financial transactions and the rules and conventions that make blockchain work.

> “[The] Bitcoin protocol and network today is [a] value transfer network. Beyond that, it is a core, backbone security service securing contracts, physical and digital property, equities, bonds, robot AI and an enormous wave of applications which have not yet been conceived." - Jeff Garzik, Bitcoin Core Developer

The protocol is the set of rules and standards that governs the overall workings of the blockchain. [Techopedia's definition](https://www.techopedia.com/definition/12938/network-protocols) of a network protocol goes as follows:

> "Network protocols are formal standards and policies comprised of rules, procedures and formats that define communication between two or more devices over a network. Network protocols govern the end-to-end processes of timely, secure and managed data or network communication."

The inception of the blockchain defines this set of rules, procedures, and formats. These rules can only be altered if a majority of network participants decide to do so. Public blockchains require consensus building, which in turn requires careful consideration of each change proposed. This desirable feature helps to create a robust foundation of trust for the users.

### Network Protocols

You can distinguish between several broad types of networking protocols. There are:

- Network communication protocols like TCP/IP (transmission control protocol/internet protocol)
- Network security protocols like HTTPS and SSL (hypertext transfer protocol secure/secure sockets layer)
- Network management protocols such as SNMP and ICMP (simple network management protocol/internet control message protocol) and
- Value transfer protocols such as Horizen or Bitcoin

Below you see a collection of protocols, many of which you use every day. For example, The TCP/IP Protocol specifies how to break data down into packets, address the packets, and route them through the network to their final destination. You are using the TCP/IP standard any time you go online to communicate with different servers to receive the information you want to access.  
SSL (Secure Sockets Layer) is a standard protocol used to establish encrypted links between a web server and a client (like your computer) in online communication. For example, when sending your payment details to an online shop you use SSL to establish an encrypted connection before you actually send your credit card information across the internet.

The Simple Network Management Protocol (SNMP) is a set of protocols supported by network devices such as routers, servers or printers. SNMP takes care of the different devices on a network interoperating seamlessly.

**update from expert**

![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/protocols_D.jpg)
![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/protocols_M.jpg)

Throughout the history of the internet, people have defined standards for the exchange of various types of data. It's important to note that it was not always the best protocol that gained mass adoption. People are unlikely to switch to a different protocol once they begin using it and building upon it. Developers become attracted to the increasing number of libraries and tools available for these protocols. This cycle repeats until a protocol eventually becomes the standard for a given use case.

Bitcoin is in a good position to become the agreed-upon standard for the storage and transfer of value across the internet. Bitcoins is a convention that specifies rules, procedures, and formats for the transfer of money online without intermediaries. Horizen aims to become the standard for private value and data transfer in the decentralized web 3.0.

People like to point out that the throughput (mostly referring to the number of transactions per second) blockchains can handle is not sufficient for mass adoption (yet). We believe that using [sidechains]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-03-sidechains %}) is a viable way to overcome those growing pains.

Scalability is a discussion in and of its own. We are confident in saying that a distributed ledger of some sort will become the agreed upon standard to transfer value in the future. Bitcoin has the greatest adoption of all cryptocurrencies today. Many projects and companies have started building upon the Bitcoin protocol. In the past, this kind of adoption was the first indicator of the success of a protocol. We at Horizen are building a blockchain protocol that offers privacy, is scalable and usable by developers, especially with the release of our sidechain implementation and the [HDE](https://medium.com/coinmonks/open-source-contributors-new-home-the-hde-a91a1b5376df) - the Horizen Developer Environment.

### What Are the Rules?

A protocol is a set of rules and conventions used for a given purpose. Let us take a look at what some of the conventions and rules for a blockchain look like.

One subset of the rules regards maintaining the ledger. Each node keeps a copy of the blockchain and verifies every transaction it receives. Once a transaction becomes verified it is then saved in the *mempool* (short for memory pool) with all the other transactions that are not yet included in a block. When a node receives a new block from its peers, it checks the validity of the block. If it is valid, then it is added to the local copy of the blockchain and all transactions included in the block are removed from the mempool. The mempool will only ever contain unconfirmed transactions.

Another subset of rules is concerned with the structure of a valid block. Remember that a block is just a container for data as we explained in our [last article]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-02-blockchain-as-a-data-structure %}). A block has a block header that contains information about the version of the client it was created with, a reference to it's preceding block (its hash), a summary of all transactions that are contained in the block (the *Merkle root*), a timestamp and some other metadata.
Following the block header, the block contains all the transactions that were included.

![Block](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/block_D.jpg)
![Block](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/block_M.jpg)

Now there needs to be a set of rules describing what an individual transaction must look like. We will talk about transactions in detail in a dedicated article but for now, it should suffice to know that a transaction needs to include the sender, the recipient, the amount to transfer, and a digital signature. The digital signature is a way to authorize the spending of your funds. The private key of a user creates this digital signature. We explain this process further in our article on [public-key cryptography]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography %}).

### The Great Innovation Introduced with Bitcoin

_Game theory_ is the study of mathematical models of strategic interaction between rational decision-makers. Miners, nodes, and users of cryptocurrencies are the (hopefully ;) rational decision-makers. Here rational means each person is trying to maximize their personal benefit. When [Satoshi Nakamoto]({{ site.baseurl }}{% post_url /history/2001-01-02-satoshi-nakamoto %}) published the bitcoin whitepaper, he introduced a system in which each participant is economically incentivized to follow the rules of the protocol. In other words, it is more profitable to play according to the rules, than to break them - we say Bitcoin is *incentive compatible*. This seems to hold true, even 10 years after the inception of the protocol. One cannot overestimate the foresight and thought that went into building such a system.

It can be difficult to see why we consider all this to be a groundbreaking innovation when we look at the different parts of a blockchain. It is true that most concepts that comprise Bitcoin have been around for years. Game theory is arguably the most important part of a public blockchain protocol. The design of the incentive-structure is the reason why Bitcoin was the first cryptocurrency that survived - few know that there have been many attempts to build a similar system before. They were either highly centralized or didn't provide the right incentives for their participants.

### Summary

The protocol of a blockchain is a set of rules that all participants must follow. It governs how to communicate data across the distributed network, what blocks and transactions have to look like and how participants are incentivized so that abiding the protocol is the most profitable strategy.

I would like to end this article the same way it began, with a quote from Jeff Garzik, one of Bitcoins better-known developers.

> "Do not try to stuff every feature into the Bitcoin protocol. Let it do what it does best. Build systems on top of Bitcoin which use its strengths... Putting all the world’s coffee transactions, and all the world’s stock trades, and all the world’s Internet of Things device samplings, on the Bitcoin blockchain seems misguided" - Jeff Garzik
