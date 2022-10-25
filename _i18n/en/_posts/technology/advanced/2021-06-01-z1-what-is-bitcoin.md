---
layout: post
type: intro
title: "What is Bitcoin? A Bitcoin Glossary"
description: "Bitcoin is the first form of money to rely solely on a transparent and globally distributed network of nodes abiding by a unified set of protocols"
permalink: /technology/advanced/what-is-bitcoin/
topic: technology
level: advanced
chapter: "Bitcoin Glossary"
---

## Bitcoin Terminology

To understand how Bitcoin works, it is important to first define each of the key terms and components that make up the Bitcoin network:

### Blockchain

A decentralized ledger, or record book, that is shared across a distributed network of computers, or nodes.

### Bitcoin

A decentralized, peer-to-peer digital currency that runs on a global network of distributed nodes bound by a consensus mechanism called proof of work.

### Nodes

A computer that operates the software of the Bitcoin blockchain. The main function of most nodes is to store and validate blockchain transaction data in order to earn newly issued cryptocurrency from the network, also known as mining or block rewards.

**There are 3 types of nodes on the Bitcoin network**: _Full nodes_, _Light nodes_, and _Mining nodes_.

### Full Nodes

Full nodes store the complete history of transactions on the Bitcoin network so that they can easily be retrieved by anyone who wants to verify the Bitcoin blockchain. Full nodes do not earn mining rewards for storing blockchain data.

### Light Nodes

Light nodes are similar to full nodes, except they do not hold a complete history of a blockchain. Instead, they store and provide just the necessary data to accommodate daily activities or faster transactions.

### Miner Nodes

Miner nodes are responsible for creating new blocks by solving the computational problems required to validate transactions and win the block rewards.

Miner nodes must run a full node, meaning they must hold a copy of the entire blockchain ledger in order to mine blocks and earn rewards.

### Consensus Mechanism - Consensus Protocol

A set of programmable rules that nodes abide by in order to achieve consensus on the current state of the Bitcoin network. In other words, the latest record of token transfers and account balances reflected on the blockchain ledger.

### Block

A collection of transactions that have been recorded within a period of time. Each block in the Bitcoin blockchain is capable of storing up to 1MB of data.

### Block Time

The amount of time it takes to add a new block of transactions to the Bitcoin blockchain. Bitcoin’s block time is 10 minutes.

### Block Confirmation

The number of times a transaction has been added to a block in the Bitcoin blockchain.

The Bitcoin blockchain normally requires at least 6 confirmations before a transaction can be considered confirmed and the receiver of the funds is allowed to spend them.

### Miner

A person or entity that runs a Bitcoin node and validates transactions in order to earn new bitcoin from the network.

### Block Reward

The amount of bitcoin rewarded to miners per block. The current mining reward is 6.25 bitcoin per block. The reward cuts in half every 4 years in an event called the ‘halving’.

### Transaction Fee - Miner Fee

A fee paid to miners in order to incentivize them to add a transition to the next block.

Transaction fees are separate from block rewards. Unlike block rewards which are consistent, transaction fees tend to go up or down depending on the level of congestion on the network.

### Nonce Value

A specified number of zeros on the header of a block that Bitcoin miners must perform complex calculations that require computing power in order to guess correctly.

Correctly guessing the nonce value equates to ‘solving the block’ which grants the miners node the right to validate the next block and earn the 6.25 BTC reward.

The more zeros in the nonce value, the more difficult it is to solve the block. This difficulty adjusts every 2016 blocks based on the hash rate of the network.

### 21 Million

The total supply of bitcoin that will ever exist.

### Inflation Rate - Issuance Rate

The rate of new bitcoin that is regarded to miners every year for validating transactions on the network.

### Merkle Tree

A binary tree where each transaction represents a leaf of the tree.

### Mempool

A database where transactions that are unconfirmed or pending are kept until a node picks them up and adds them to the next block.

### Proof of Work

A consensus mechanism used on the Bitcoin network that requires miners to solve mathematical puzzles using computing power in order to earn the right to add transactions to the next block in the chain and receive newly issued bitcoin from the network known as the block reward.

### Double Spend

A flaw in digital currencies that allow a user to spend the same coins they have in their wallet multiple times. This flaw has historically made it difficult to successfully launch a digitally native currency because there was no mechanism to permanently enforce updates to the database when a coin was spent.

Blockchains solve this problem by introducing the proof of work and later proof of stake consensus mechanism. These consensus mechanisms eliminate the double spend by first requiring nodes to contribute computing power or stake a certain amount of tokens before they can validate transactions.

Transactions must also go through multiple block confirmations before the receiver is able to spend the funds, ensuring that any possible errors can be spotted before the transaction is permanently embedded into the network.

### Hash

A sequence of numbers and letters that represents a snapshot of any size of data. A hash is uniquely linked to another piece of data such that altering a single piece of the linked data will also alter the hash.

### Hash Function

A mathematical function that takes a data input of arbitrary length and size and produces an output of a fixed length and size. Any changes made to the input produces an entirely new output.

The Bitcoin blockchain uses a special type of Hash function called SHA-256.

SHA-256 plays a key role in the recording of transactions and the mining process on the Bitcoin blockchain.

Every Bitcoin block contains the hash of the previous block within its block-header. This previous block hash links the blocks together to create an immutable chain.

### Hash Rate

The measure of how much computing power is collectively being contributed by miners to validate transactions and secure the Bitcoin network.

### Private Key - Seed Phrase

A series of letters and numbers that authorizes the owner of wallet to access and spend their cryptocurrencies.

A seed phrase is made up of 12 words that represent a private key.

### Public Key - Wallet Address

A series of letters and numbers that the owner of a wallet can share with anyone to receive crypto, like an email address.

A public key corresponds to a private key which is used to authorize the owner of the public key to spend the funds on their wallet.

### Elliptical Curve Digital Signature Algorithm - ECDSA

An encryption algorithm that is used to confirm that a transaction was signed using the private key that is linked to the same public key that the receiver shared with a sender in a transaction.

### Digital Signature

A unique number that is produced from the signer's private key and is used as verification that the signer has permission to spend the funds in a wallet.

## Bitcoin Facts

In **2008**, a pseudo-anonymous individual or group named _[Satoshi Nakamoto](https://www.horizen.io/blockchain-academy/history/satoshi-nakamoto/)_ invented Bitcoin, the first decentralized peer-to-peer digital currency.

Bitcoin was the first use case of blockchain technology, as well as the first form of money to rely solely on a transparent and globally distributed network of nodes abiding by a unified set of protocols, rather than the policies of a government or central bank.

- Bitcoin is a cryptocurrency that is used to [transfer](https://www.horizen.io/blockchain-academy/technology/advanced/a-protocol-to-transfer-value/) and store value digitally.
- Bitcoin sits on top of the Bitcoin blockchain, which is a public blockchain network that tracks the ownership of Bitcoin held in digital [wallets](https://www.horizen.io/blockchain-academy/technology/advanced/types-of-wallets/) and also validates all Bitcoin transactions that occur on the network.
- In order for transactions on the Bitcoin blockchain to be validated, [consensus](https://www.horizen.io/blockchain-academy/technology/advanced/consensus-mechanisms/) must be achieved between the nodes that operate the network.
- A consensus mechanism is the backbone of a blockchain. It is the process by which nodes come to an agreement on the state of the ledger.
- The Bitcoin blockchain is operated by [miners](https://www.horizen.io/blockchain-academy/technology/advanced/mining/), who are individuals or entities that run nodes that are responsible for either validating transactions that occur on the network, or storing a history of transactions that occur on the network.
- Miners coordinate with each other to achieve consensus on whether a transaction that occurred on the network was correct, that it went to the right person and the correct amount was exchanged.
- This method of consensus is called ‘[proof of work](https://www.horizen.io/blockchain-academy/technology/expert/proof-of-work/)’
- For helping to validate transactions, miners are rewarded with newly issued bitcoin from the network.
- Anyone can confirm exactly how much bitcoin will ever exist in the world and who owns each bitcoin by simply reading the blockchain.
- There is a total of 21 million bitcoin, with 18.7 million currently in circulation.
- Every 10 minutes, 6.25 new bitcoin is rewarded to miners for validating transactions.
- The 6.25 newly mined bitcoin, the block reward, is added to the circulating supply
- Every 4 years, the bitcoin reward is decreased by half, an event known as the ‘halving’
- In 2012 the reward was 25 BTC, in 2016 it was 12.5 BTC, in 2020 it was 6.25 BTC, and in 2024 it will be 3.125 BTC
- Based on the rate at which new bitcoin is mined, it will take until the year 2140 for all 21 million bitcoin to be in circulation.
- A single ‘block’ on a blockchain contains information about recorded transactions, in addition to timestamp and details about the previous block that it is linked to. In this way it forms a ‘chain’.
- When a new block is added to the Bitcoin blockchain, a cryptographic [hash function](https://www.horizen.io/blockchain-academy/technology/advanced/hash-functions/) is used to link it to the previous block.
- Cryptographic hash functions convert transaction data into a unique text string or ‘hash’. These hash values cannot be altered without changing the previous block's hash value and the entire history of the blockchain. This link between different blocks is why blockchains are considered to be immutable. In making this the Bitcoin network's history public and verifiable, it can be said that bitcoin is the first form of money to have a tamper proof system of memory.
- Bitcoin is considered “digital gold'' because like gold, it is a scarce asset that cannot be replicated beyond 21 million fixed supply.
- While gold's scarcity is enforced by physical limitations, Bitcoin's scarcity is enforced by permanent rules imprinted into computer code.
- The term “mining bitcoin” is compared to mining gold because it requires significant “work” for miners to be rewarded bitcoin for validating transactions on the network.
- Under the proof of work consensus mechanism, miners compete to solve complex mathematical puzzles in order to win the right to validate the next block of transactions and earn the 6.25 newly issued bitcoin from the network, the block reward.
- This process requires significant hardware and energy requirements just to generate enough computing power to operate competitively as a miner.
- The mathematical puzzles that miners must solve are artificial hurdles that exist to make it difficult for new bitcoin to come into circulation, which thereby reinforces its scarcity.
- The energy requirements also ensure that security of the network is upheld, as it would require a bad actor to generate more computing power than 50% of all the miners on the Bitcoin network in order to possibly manipulate transactions on the network. The most recent estimates show that a [51% attacks](https://www.horizen.io/blockchain-academy/technology/advanced/51-attacks/) would cost over $13 billion.
- The value of Bitcoin is derived from the power of blockchain technology, which allows Bitcoin to achieve the highest level of security, transparency and decentralization of any asset that exists today. These properties are also what ultimately makes it the ideal store of value.
- The Bitcoin blockchain doesn't just provide a secure means of payment, it keeps track of the history of bitcoin transactions dating all the way back to the genesis block that was mined by Satoshi in 2009. Readable on the Bitcoin blockchain is a tamper proof history of everything that has ever happened on the network.

## How a Bitcoin Transaction Works - A Step-by-step Walkthrough

### Create and Sign a Transaction

The first step of a bitcoin transaction is when a sender wishes to send a certain amount of BTC from their public key to a receiver's public key. In this, let’s say John wants to send Mary 1 BTC.

What essentially happens at the beginning is that a specific set of data is created that communicates John’s intent to send Mary 1 BTC from a source (the input) to a destination (the output).

This data includes all of the information required to process a transaction, including the destination address and the amount of bitcoin to be sent.

No private keys or other types of confidential information are included in this information used to process the transaction.

Upon creating the transaction, John must provide a [digital signature](https://www.horizen.io/blockchain-academy/technology/expert/digital-signatures/) that will authorize his wallet (the input) to spend 1 BTC.

### Broadcast the Signed Transaction to the Network

Once the transaction has been signed by John, it must be broadcast throughout the Bitcoin network so that all nodes, including, full, light and mining does light nodes, can verify it.

Unless a signed transaction is broadcast to the network, it remains invisible and cannot be added to the block.

### Propagate the Transition to All Nodes

To propagate simply means to spread widely.

Propagating a signed transaction to all nodes on the network is an essential part of how consensus is achieved on the Bitcoin blockchain.

The first node to receive John's signed transaction will verify the transaction information, input/output, timestamp, etc, and also verify the transaction signature against the public key of the sender to confirm that they possess the private keys that allows them to authorize this transaction.

Once verified, the transaction will be shared to other nodes that the first node is connected to. These nodes will perform the same process of verifying the signed transaction.

Each node will share the signed transaction to other nodes until all nodes on the network have received and verified the signed transaction.

On the Bitcoin network, all nodes must independently verify each signed transaction before the transaction goes on to be validated by a mining node and added to the next block. This process allows the network to be resistant to denial-of-service (DDoS) [attacks](https://www.horizen.io/blockchain-academy/technology/advanced/attacks-on-blockchain/).

### Record the transaction on the next block

Once John's signed transaction has been propagated throughout the network and verified by all nodes, the mining node that has correctly guessed the nonce value for the block header will be granted the right to validate the transaction and add it to the next block of transactions in the chain.

For performing this act, the Bitcoin mining node would be rewarded with 6.25 BTC, the block reward.

John's transaction must be recorded in at least 6 blocks in order for it to be confirmed as final and for the receiver Mary to be allowed to spend her 1 BTC.

## Frequently Asked Questions - Bitcoin FAQs

### How Did Bitcoin Start?

Bitcoin was started in 2009 by the pseudo-anonymous developer Satoshi Nakamoto.

### What Unit is Used to Describe the Smallest Amount of Bitcoin?

Satoshis or ‘sats’.

### Is Bitcoin Money?

Bitcoin is the first form of money to rely solely on a transparent and globally distributed network of nodes abiding by a unified set of protocols. Due to the immutable nature of blockchains, bitcoin is also considered to be the first form of money to have a tamper proof system of memory.

### Is Bitcoin Cryptocurrency?

Bitcoin is a cryptocurrency that is used to transfer and store value digitally.

### What is the Difference Between Bitcoin and Cryptocurrency?

Cryptocurrencies are digital assets used primarily to compensate miners or validators for confirming and adding new transactions to the blockchain. Bitcoin is the first cryptocurrency. There are many different forms of cryptocurrency that each serve as the primary asset for rewarding validators on their respective blockchains.

### Is Bitcoin Safe to Send Money?

Bitcoin is generally a safe method for sending money because the network is transparent and immutable, and any BTC held in the user's wallet is controlled by them through their private key, which is required for approving funds to be spent from that wallet.

The Bitcoin blockchain also requires at least 6 block confirmations, the number of times a transaction has been added to a block by a minor, before a transaction can be considered confirmed and the receiver of the funds is allowed to spend them.

### How is Bitcoin Stored?

Bitcoin is stored in digital or hardware wallets, which are secured by public/private key cryptography. With public/private key cryptography, a wallets public key, which is used like an email address to receive funds, corresponds to a private key which is used to authorize the owner of the public key to spend the funds in their wallet.

### At What Price Did Bitcoin Start?

Bitcoin’s initial starting price when it launched was $0.

### How does Bitcoin Hold Value?

Bitcoin is traded on the open market like any other financial asset. Bitcoin's value is based on the level of supply and demand of BTC at any given time. With a fixed supply of 21 million, bitcoin has seen a drastic rise in value over the years as many investors purchase the asset as a way to hedge against inflation and the debasement of fiat currencies.

### Where Can I Buy Bitcoin?

Bitcoin can be purchased on centralized exchanges like Binance, Coinbase and FTX. You can also buy bitcoin on the Ethereum network in the form of Wrapped Bitcoin or WBTC. Bitcoin can also be bought using over the counter (OTC) transactions through certain financial institutions, or simply in person, peer to peer.

### What is the Purpose of Bitcoin?

Bitcoin’s purpose is to serve as a digital medium of exchange and store of value that is secure, transparent and censorship resistant.

### Who owns bitcoin?

Bitcoin, like the internet, is not owned by anyone. It is an asset that exists on top of a permissionless network.

### What is Bitcoin Cash?

Bitcoin cash is a fork of the Bitcoin blockchain that emerged in 2017 as a result of a split in the Bitcoin community over whether Bitcoin should increase its block size limit in order to scale the number of transactions that can be stored in each new block.

Bitcoin cash chose to increase their block size and forked the chain to create a new network with this change implemented.

### What Can You Buy with Bitcoin?

Bitcoin is accepted as a currency by certain vendors to pay for basic goods and services. You can also purchase other cryptocurrencies with bitcoin by conducting a trade on any popular crypto exchange.

### Who Owns the Most Bitcoin?

Satoshi Nakamoto is the largest known bitcoin holder, with about 1.1 million BTC in a wallet that supposedly belongs to this pseudo-anonymous person or group. These funds have not moved from Satoshi’s wallet for over 10 years, which has led many to believe that Satoshi is either dead or the private keys to the wallet have been lost.

### How Long Does it Take to Mine one bitcoin?

This depends on how successful a miner is in solving the proof of work puzzle that grants them the right to produce the next block. A new block is mined every 10 minutes and awards the block producing miner with 6.25 BTC. Therefore, the least amount of time it can take to mine one bitcoin is 10 minutes.

### How Many Satoshis in a Bitcoin?

There are 100 million satoshis in one bitcoin.

### What is Bitcoin SV?

Bitcoin Satoshi’s Vision, or SV, is another fork of Bitcoin, this time forking from Bitcoin Cash in 2018.

### What is Wrapped Bitcoin?

Wrapped Bitcoin or WBTC is an ERC20 token on the Ethereum blockchain that represents bitcoin that has been wrapped in a smart contract. WBTC exists to enable hodlers of bitcoin to use their BTC on the Ethereum network for lending, borrowing, yield farming, etc.
