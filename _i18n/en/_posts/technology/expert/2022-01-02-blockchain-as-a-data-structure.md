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

The first use case for blockchain technology is digital money. To have a monetary system without central control you must have a special and sophisticated way to handle all the data produced with each transfer. Imagine if every person could access and modify the databases kept by banks. It would be a disaster.

In order to make decentralized money a reality a method of accounting had to be developed - the [UTXO model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}), also referred to as *triple-entry accounting*. Every account balance can be computed at any time by storing all transactions in a digital ledger. 

A digital ledger used for digital money requires a set of properties that were not achievable before blockchain came along. In this article, we will look at how this translates to the way data is handled on a blockchain.

## Common Data Structures

Let’s develop an understanding of data structures before we look at blockchain itself. Here are some of the most common data structures:

### Arrays

*Arrays* are one of the simplest forms to store data. Arrays are useful when you know how many data elements you need to store and how large each data element will be. Your computer will calculate the total storage needed from those inputs and set it aside preventing other programs from accessing this partition of your memory. The drawback to partitioning memory is that reserved memory may be too small for future expansion. In this case, the entire array must be moved to a different location.

Each element of an array has an *index* that starts at 0. You can instantly access and modify an element if you know where you stored it. If you don't know an element's location you must do a *sequential lookup*. This means you check the elements one by one (starting at index 0) until you find it. 

Arrays are useful for their simplicity and *instant access* property.

![Array](/assets/post_files/technology/expert/1.1-data-structure/array_D.jpg)
![Array](/assets/post_files/technology/expert/1.1-data-structure/array_M.jpg)

### Linked List

Programs that use a *linked list* to store data don't have to know how many data elements you want to store beforehand, but the linked list does need to know what each element consists of. The data elements of a linked list are called *nodes*. Each node can contain several objects of different types. 

For example, If you were to store information about cars in a linked list, you could define a node as the set of information about the brand, model, year produced, and license plate.

The first element of a linked list is called the head and the last one is called the tail. 

![Array](/assets/post_files/technology/expert/1.1-data-structure/linked_list_D.jpg)
![Array](/assets/post_files/technology/expert/1.1-data-structure/linked_list_M.jpg)

Each node also contains a *pointer* to the next node. The *pointer* tells your computer where the following node is located in memory. This allows you to expand a linked list easily because the data doesn't have to be in a single, continuous location in memory.

![Array vs. Linked List](/assets/post_files/technology/expert/1.1-data-structure/array_vs_list_D.jpg)
![Array vs. Linked List](/assets/post_files/technology/expert/1.1-data-structure/array_vs_list_M.jpg)

When searching for a piece of data your computer will check the *head* of the linked list first. If it's not there, it will look at the pointer, go to the location in memory where the following node is stored and continue following pointers until it finds the desired data. This is called a *sequential lookup*.

Using a linked list gives you more flexibility in terms of expanding the list later on by adding new nodes, but unlike arrays, it doesn't give you instant access. 

### Hash Table

The last data structure we want to look at before we move on to the blockchain is the *hash table*. The data elements you are storing in a *hash table* are called *keys*. To store a *key* it is first hashed using a hash function that produces an identifier for every key. We [introduce hash functions]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}) in our Advanced Level and cover hash functions in detail in a [later article]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}). For now, all you need to know is that a hash function uses an *argument* of variable length as an input and produces an output of fixed length. In the example below the output is a three-digit number.

The *keys* are mapped to buckets by their hash value, e.g. if "Alice" hashes to 152 it is stored in this bucket. The buckets can be stored in an array because the output space of the hash function and therefore the number of elements is known and each bucket can instantly be accessed.

A hash table is useful when you need to store many related data elements, like in a customer database. Initially, you could create a customer ID by hashing the customer's name. Now there is a dedicated location to store purchases, refunds or contact information. Whenever you need to access the customer data, your computer would hash the name you are looking for to find the bucket efficiently and add, change or delete data.

The hash functions used for hash tables are usually not *collision-resistant*. This means two *keys* might produce the same hash and would consequently be mapped to the same bucket - that's why the name bucket was chosen in the first place.

To store several keys within a single bucket a linked list within the hash table is used. In the example below bucket 152 stores a pointer to Alice's data in the first node, which in turn points to the second node containing Dave's data.

If the hash table is well-dimensioned, the *cost* (or the number of instructions/computations) for each lookup is independent of the total number of elements stored in the table. Hash tables give you *instant access* without even knowing the location of every element in memory. The location is defined through the data itself, which makes it convenient for systems that have to store large amounts of data and access them repeatedly.

![Hash Table](/assets/post_files/technology/expert/1.1-data-structure/hash_table_D.jpg)
![Hash Table](/assets/post_files/technology/expert/1.1-data-structure/hash_table_M.jpg)

There are many different data structures, each of them comes with some trade-offs and depending on the use case one might choose one over the other. Sophisticated data structures often leverage several more simple concepts in combination to achieve the set of desired properties. We chose the three examples above to show how an array and a linked list can be used to build a hash table.

The blockchain is a rather sophisticated data structure, made up of many sub-structures. It gives us a set of properties that are paramount to building a decentralized ledger for digital money.

### The Blockchain

Blockchain organizes data by splitting it into subsets, referred to as *blocks*. Blocks are similar to the nodes of a linked list. Each block contains several elements. The elements of a block are generally separated into the *block header* and its transactions. While the transactions in a block account for most of the data; the block header contains important metadata about each block such as a timestamp and *block height*. 

The main difference between a blockchain and a linked list is that the *references* in a blockchain are cryptographically secured and therefore *tamper-evident* whereas the *pointers* in a linked list can be changed at any time without affecting the integrity of the data. The secured references establish an order throughout the blocks and effectively make the blockchain an *append-only* data structure where new data can only be added with new blocks.

![Blockchain](/assets/post_files/technology/expert/1.1-data-structure/blockchain_D.jpg)
![Blockchain](/assets/post_files/technology/expert/1.1-data-structure/blockchain_M.jpg)

The hash value of the previous block header is included in the following block as a reference, because the *block hash* depends on the data of a block, even changing a single character in one of the transactions would invalidate the reference.

The secured links are constantly checked for validity. If you were to insert a malicious block in the middle of a blockchain or change data in an existing block (For example: between Block 1 and 3 in the graphic below) you could include a reference to its predecessor (Block 1), but it would be infeasible to make block 3 reference your newly inserted block.

![Blockchain Broken](/assets/post_files/technology/expert/1.1-data-structure/blockchain_broken_D.jpg)
![Blockchain Broken](/assets/post_files/technology/expert/1.1-data-structure/blockchain_broken_M.jpg)

Each new block built on top of an existing block is called a *confirmation*. The older a block gets, the more confirmations it will have. Each confirmation makes tampering with the data in a block more difficult because you have to recreate additional valid references.. Block 2 in the graphic below has one confirmation. You would have to recreate a single valid reference to tamper with the data of Block 2. You also have to recreate a valid reference with each new confirmation. The older the block, the more certain you can be that no changes to the block will ever occur.

It is important to note that it is not the data structure that makes data on the blockchain immutable. The data alone is *tamper-evident* only. Changes are easy to detect. here is no *immutability* if there are no strong consensus rules in place and a sufficiently large number of nodes on the network. The incentives need to be structured so the majority of participants will follow the *protocol* and reject invalid blocks.

We will come back to this relationship between the data structure, the [protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}) and the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}) in later articles. The interworking of these parts is what makes the blockchain a powerful tool for building trustless digital money.

## The Properties of Blockchains

Let's take a look at the properties that a blockchain offers before we take a closer look at the data within a block. We will assume a decentralized setting without central authority and a strong consensus mechanism for this article.

### Current Shortcomings

It is appropriate to issue certain caveats first. The development of a blockchain is stricter and slower compared to traditional databases. A bug that corrupts the integrity of data makes the entire construction useless, hence development must be done very carefully. In a centralized setting, a bug might be easy to fix, but in a distributed environment without a central authority this becomes very difficult.

Second, incentive design is an integral part of building a blockchain. There is always a cost associated with adding data to a blockchain. This cost must be high enough to prevent large amounts of useless data being added, but at the same time, it needs to be low enough to not become prohibitive. Once deployed, fixing is not easily done for the same reason as above.

Maintaining a blockchain is also orders of magnitude more expensive than a traditional database. Data is not recorded once but thousands of times. Data is also verified by every full node on the network, thousands of times in parallel. Additionally, the transmission of data is inefficient by design, causing the cost of maintenance to rise. This redundancy in every step of using a blockchain makes it hard to scale. We will look at several concepts to make blockchain scale later on, such as [sidechains](https://academy.horizen.global/horizen/expert/sidechains/) and [payment channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-state-and-payment-channels %}). Most of them are based on the idea to move data off the blockchain rather than actually increasing the throughput of the chain.

### Benefits of Using Blockchain

All of this overhead can only be justified through utility. Having a global money, a predictable inflation schedule and trustless transactions without central control and single points of failure is arguably enough utility to use a blockchain for this purpose. For many other use cases, time will tell if blockchain poses a suitable solution. Just as with the immutability attribute, it's important to note that the current shortcomings of public blockchains result from being run in a distributed fashion, rather than the data structure. While a high level of redundancy makes the data secure, it is inefficient by definition.

In turn, you can get some special properties with a blockchain, that if needed for the specific use case make it invaluable. The main factor distinguishing a blockchain from a normal database is that there are specific rules about how to add data to the database. This set of rules, or *protocol*, can achieve the following traits:

- *Consistency*: Newly added data cannot conflict with data already in the database.
- *Tamper Evidence*: Append only data structure that makes it immediately apparent if data has been changed. Coupled with a strong consensus mechanism that incentivizes rejection of invalid blocks this results in immutability.
- *Ownable*: Data can be attributed to a sole owner. The data is publicly verifiable but only the owner can make changes to it. In the context of cryptocurrencies, this means everybody can see the transactions, but only with the owner can spend a UTXO.
- *Distributed*: The database is consistent without a central party acting as a gatekeeper. This results from the protocol incentivizing correct behavior. Consensus and fault-tolerance are the holy grail of distributed systems that Bitcoin achieved for the first time in history.

The key takeaway from this first section should be the following: You get **immutability** of data only if there is a **strong consensus mechanism** in place that makes the network participants decline invalid blocks. Otherwise a blockchain is only **tamper-evident**.

After we looked at the properties that result from the design, let's take a look at how it actually is constructed. First, we look at the blocks themselves. Next, we introduce a concept that allows us to create an efficient summary of all transactions - the *Merkle tree*. Lastly, we look at the transactions themselves that make up the majority of data in a block.

## What does a Block look like?

Blocks consist of a header which contains important data about the block - a sort of summary. The largest part of a block in terms of storage comprises the transactions.

![Block](/assets/post_files/technology/expert/1.1-data-structure/block_D.jpg)
![Block](/assets/post_files/technology/expert/1.1-data-structure/block_M.jpg)

### The Block Header

The block header contains the most important information about a block.

- The *Version* indicates which software version was used by the miner of the block and which set of block validation rules was followed.
- The previous block headers hash *hashPrevBlock* serves two purposes. First, it establishes an order throughout the chain of blocks and second, it ensures no previous block can be changed without affecting the current and all subsequent blocks.
- The Merkle Root Hash *hashMerkleRoot* represents a summary of all transactions included in the block.
- The *Time* is the [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time) when the miner started hashing the header for the mining process.
- The *Bits* or *nBits* are an encoded version of the **current difficulty** of finding a new block.
- The *Nonce* - or *n*umber used *once* - is the variable that miners change to modify the block headers hash in order for its value to meet the difficulty. This process is covered in detail in our article on [mining]({{ site.baseurl }}{% post_url /technology/expert/2022-02-07-mining %}).

Merkle Trees play an important role in ensuring the integrity of data in the blockchain but are also used in other systems such as IPFS - the InterPlanetary File System and several implementations of NoSQL databases. Let's take a look at how they work and what they do before we continue with what a transaction looks like from a data perspective.

### Merkle Trees

A *Merkle tree* is a data structure used within blocks. The transactions in a block make up the *leaves* of the Merkle tree. The resulting *Merkle root* serves as a summary of all transactions and is included in the block header.

Constructing a Merkle tree goes like this: The *coinbase transaction* rewarding the miner with new coins is placed first, followed by all other transactions in the block. First, each leave (transaction) is hashed. Next, the hashes of two transactions are concatenated and hashed again. If the number of transactions is odd, the last transactions hash is concatenated with a copy of itself. This process continues until only a single hash is left - the Merkle root.

![Merkle Tree](/assets/post_files/technology/expert/1.1-data-structure/merkle_tree_D.jpg)
![Merkle Tree](/assets/post_files/technology/expert/1.1-data-structure/merkle_tree_M.jpg)

While most Merkle trees are binary, one can also think of non-binary Merkle trees concatenating more than two hashes per step, but the idea remains the same. Trying to change a single transaction in an already confirmed block results in a different Merkle root and as a consequence a different header. This is one mechanism that ensures tamper evidence.

From a computer scientist's perspective it also poses an efficiency improvement: transactions can be audited in [logarithmic time instead of linear time](https://en.wikipedia.org/wiki/Time_complexity).

### The Merkle Path

The *Merkle path* is simply the set of hash values needed to reconstruct the entire tree. The *Merkle path* for transaction *K* consists of the hash of transaction L (\\(H_L\\)) it is first concatenated with and the combined hashes \\(H_{IJ}\\), \\(H_{MNOP}\\) and lastly, \\(H_{ABCDEFGH}\\). Those four hashes together with the original transaction allow a verifier to check the tree's integrity.

![Merkle Path](/assets/post_files/technology/expert/1.1-data-structure/merkle_path_D.jpg)
![Merkle Path](/assets/post_files/technology/expert/1.1-data-structure/merkle_path_M.jpg)

## What does a Transaction look like?

We introduce the [UTXO model]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-02-the-utxo-model %}) in our Advanced Technology Section and will cover it in more detail later in this level. If you are not familiar with it already you might want to catch up before you continue reading.

**TL;DR**: Every transaction (except for the coinbase transaction) has at least one input and one output. When you create a transaction you are spending UTXOs - unspent transaction outputs - using them as inputs to the newly created transaction. At the same time, you create one or more new UTXOs that are then spendable by the payee - the new owner.

To be precise with our language we introduce a new concept here: *outpoints*. An *outpoint* is a data structure characterizing a particular transaction output. It includes the *transaction id* the output was created in, as well as the *output index* identifying a specific output among potentially many outputs created in the transaction. The *outpoint* is therefore just a more distinct way of referring to what is generally known as an *output*.

A transaction is a message to the network informing it about a transfer of money. This message is standardized and composed of the following information:

- *Version*: just as every block indicates the software version it was created with, every transaction includes this information.
- *tx\_ in count*: Is the number of Inputs used - so the number of UTXOs consumed.
- *tx\_ in*: Each input used is characterized by four data points: the outpoint it spends, the size of the *signature* required to spend that outpoint, the signature itself and the *sequence number*. The *sequence number* can be used to modify the *spending conditions* of an outpoint, but we are getting ahead of ourselves.
- *tx\_ out count*: Is the number of outputs created in the transaction.
- *tx\_ out*: Transaction outputs. Each Output is characterized by three data points: the amount spent, the size of the *spending condition*, and the spending condition itself that can be satisfied with a [digital signature]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) based on the new owners private key.
- *lock\_ time*: Is the unix epoch time or block number after which the outputs are spendable. This is optional.

Each transaction is broadcast in a serialized byte format called raw format. It is then hashed twice (*SHA256(SHA256())*) to create its transaction ID - TXID - which as you already know is used to create the Merkle tree.

Ok, that was a lot. This passage referred to many concepts already introduced in our Advanced Level. To develop a thorough understanding of blockchain technology, and this is what the Expert Level is aiming for, we need to bring the individual concepts together and understand their relation.

Transactions, being the basic building block of a blockchain, are an example of this:

First, an understanding of the UTXO accounting model is necessary.
Second, to understand the *ownable* part of the data on a blockchain one needs to understand the basic principles of [public-key cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %}): private keys, public keys, addresses, and digital signatures. Each transaction input includes a signature that authorizes spending and each newly created output includes information about what a signature needs to look like in order to authorize its spending. Lastly, the overall structure of the blockchain needs to be understood.

## Summary

The blockchain in itself is a data structure that stores transactions. It is similar to a linked list in that the data is split into containers - the blocks. Each block is connected with its predecessor with a cryptographically secured reference. This makes the data structure tamper-evident, changes to old blocks are easy to detect and dismissed. Development and maintenance of a public blockchain are expansive but certain use cases such as digital money can justify this overhead.

A block consists of a header, and the transactions contained. Inside the block, a Merkle tree is used to create a 256 bit summary of all transactions, the Merkle root, which is included in the block header.

A transaction is a message to the network about what unspent transaction outputs (UTXOs) are being spent in a transaction and which new UTXOs are being created.

We would like to end this section with a tweet that distilled the implications of the properties of blockchain technology in the context of data structures.

{% include blocks/tweet.html id="1059227449232445440" %}
