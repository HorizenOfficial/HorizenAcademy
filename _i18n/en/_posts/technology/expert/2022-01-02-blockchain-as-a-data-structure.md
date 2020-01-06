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

The first and until today most dominant use case of blockchain technology is digital money. In order to have a monetary system without central control one needs a special and sophisticated way to handle all the data that is produced with every transfer of money. Imagine every person could excess and modify the databases kept by banks storing account balances. It would be a disaster.

An important step to make decentralized money a reality was to understand that a very simple but effective method of accounting could be used - the [UTXO model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}), sometimes also referred to as *triple-entry accounting*. By storing all transactions in a digital ledger, every account balance can be computed at any time.
A digital ledger used for digital money needs a set of properties, that were not achievable before blockchain came along. In this article, we will look at how this translates to the way data is handled on a blockchain.

## Common Data Structures

Before we look at the blockchain itself, lets try to develop an understanding of data structures by looking at some of the most common ones.

#### Arrays

*Arrays* are one of the most simple forms to store data. Arrays are useful, when you know how many data elements you need to store, and how large each data element will be. From those inputs, your computer will calculate the total storage needed and set it aside so no other program can access this partition of your memory. If you want to expand the array by an element later on, the reserved partition in memory might be to small so the entire array is moved to a different location.

Each element of an array has an *index*, starting with 0. If you are looking for an element and know where you stored it, you can instantly access and modify it. If you don't know an elements location, you need to do a *sequential lookup*. This means you check the elements one by one, starting at index 0, until you find it. Arrays are useful for their simplicity and *instant access* property.

![Array](/assets/post_files/technology/expert/1.1-data-structure/array_D.jpg)

#### Linked List

When a program uses a *linked list* to store data, it doesn't have to know how many data elements you want to store beforehand, but it needs to know what each element consists of. The data elements of a linked list are called *nodes*. Each node can contain several objects of different types. The first element of a linked list is called the *head*, the last one is called the *tail*. If you were to store information about cars in a linked list, you could define a node as the set of information about the brand, model, year produced, and license plate.

![Array](/assets/post_files/technology/expert/1.1-data-structure/linked_list_D.jpg)

Besides the actual data each node contains a *pointer* to the next node. The *pointer* tells your computer where the next node is located in memory. This allows you to expand a linked list easily because the data doesn't have to be in a single, continuous location in memory.

![Array vs. Linked List](/assets/post_files/technology/expert/1.1-data-structure/array_vs_list_D.jpg)

While a linked list gives you more flexibility compared to an array in terms of expanding the list later on by adding new nodes, it doesn't give you instant access. When you look for a piece of data your computer will check the *head* of the linked list first. If it's not there, it will look at the pointer, go to the location in memory where the second node is stored and so on, until it finds the desired data. This is what we called *sequential lookup* earlier.

#### Hash Table

The last data structure we want to look at before we move on to the blockchain is the *hash table*. The data elements you are storing in a *hash table* are called *keys*. To store a *key* it is first hashed using a hash function that produces an identifier for every key. We [introduce hash functions]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}) in our Advanced Level and cover hash functions in detail in a [later article]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}). For now all you need to know is that a hash function uses an *argument* of variable length as an input and produces an output of fixed length. In the example below the output is a three-digit number.

The *keys* are mapped to buckets by their hash value, e.g. if "Alice" hashes to 152 it is stored in this bucket. The buckets can be stored in an array because the output space of the hash function and therefore the number of elements is known and each bucket can instantly be accessed.

A hash table is useful when you need to store many related data elements, like in a customer database. Initially you could create a customer ID by hashing the customers name. Now there is a dedicated location to store purchases, refunds or contact information. Whenever you need to access the customer data, your computer would hash the name you are looking for to find the bucket efficiently and add, change or delete data.

The hash functions used for hash tables are usually not *collision resistant*. This means two *keys* might produce the same hash and would consequently be mapped to the same bucket - that's why the name bucket was chosen in the first place.

To store several keys within a single bucket a linked list within the hash table is used. In the example below bucket 152 stores a pointer to Alice's data in the first node, which in turn points to the second node containing Dave's data.

If the hash table is well-dimensioned, the *cost* (or number of instructions/computations) for each lookup is independent of the total number of elements stored in the table. Hash tables give you *instant access* without even knowing the location of every element in memory. The location is defined through the data itself, which makes is convenient for systems that have to store large amounts of data and access them repeatedly.

![Hash Table](/assets/post_files/technology/expert/1.1-data-structure/hash_table_D.jpg)

There are many different data structures, each of them comes with some trade-offs and depending on the use case one might choose one over the other. Sophisticated data structures often leverage several more simple concepts in combination to achieve the set of desired properties. We chose the three examples above to show how an array and a linked list can be used to build a hash table.

The blockchain is a rather sophisticated data structure, made up of many sub-structures. It gives us a set of properties which are paramount to building a decentralized ledger for digital money.

#### The Blockchain

The data within a blockchain is split into subsets, the *blocks*, which are similar to the nodes of a linked list. Each block contains several elements, generally seperated into the *block header* and its transactions which comprisemost of the data. The header contains important metadata about each block, like a timestamp, the *block height*, so the position of the block within the chain and the *nonce*, which represents the *Proof of Work*.

The main difference between a blockchain and a linked list is that the *references* in a blockchain are cryptographically secured and therefore *tamper evident* whereas the *pointers* in a linked list can be changed at any time without effecting the integrity of the data. The secured references establish an order throughout the blocks and effectively make the blockchain an *append only* data structure where new data can only be added with new blocks.

![Blockchain](/assets/post_files/technology/expert/1.1-data-structure/blockchain_D.jpg)

The hash value of the previous block header is included in the next block serving as the reference, and because the *block hash* depends on the data of a block, even changing a single character in one of the transactions would invalidate the reference.

The secured links are constantly checked for validity. If you were to insert a malicious block in the middle of a blockchain or change data in an existing block, e.g. between Block 1 and 3 in the graphic below, you could include a reference to its predecessor (Block 1), but it would be infeasible to make block 3 reference your newly inserted block.

![Blockchain Broken](/assets/post_files/technology/expert/1.1-data-structure/blockchain_broken_D.jpg)

Each new block built on top of an existing block is commonly called a *confirmation*. The older a block gets, the more confirmations it will have. Each confirmation makes tampering with the data in a block more difficult as you have to create additional new valid references. Block 2 in the graphic below has one confirmation. To tamper with its data, you would have to recreate one valid reference. With each additional confirmation, you also have to recreate an additional reference. The older the block, the more certain you can be that no changes to the block will ever occur.

**continue**

It is important to note, that it is not the data structure that makes data on the blockchain immutable. By itself the structure is *tamper evident* only. Changes are easy to detect, but if there are no strong consensus rules in place and a sufficiently large number of nodes on the network there is no *immutability*. The incentives need to be structured so that the majority of participants will follow the *protocol* and reject any invalid blocks. We will come back to this relationship between the data structure, the [protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}) and the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}) in later articles. The interplay of these parts is what makes the blockchain a powerful tool for building trustless digital money.

### The Properties of Blockchain

Before we take a closer look at the data within a block lets take a look at the properties that a blockchain can offer. In the following elaboration we assume a decentralized setting without central authority and a strong consensus mechanism. It is appropriate to issue certain caveats first.

Firstly, development of a blockchain is stricter and slower compared to traditional databases. A bug that corrups the integrity of data makes the entire construction useless, hence development must be done very carefully. In a centralized setting a bug might be easy to fix, but in a distributed environment without central authority this becomes very difficult.

Second, incentive design is an integral part of building a blockchain. There is always a cost associated with adding data to a blockchain. This cost must be high enough to prevent large amounts of useless data being added, but at the same time it needs to be low enough to not become prohibitive. Once deployed, fixing is not easily done for the same reason as above.

Maintaining a blockchain is also orders of magnitude more expensive than a traditional database. Data is not recorded once but thousands of times. Data is also verified by every full node on the network, thousands of times in parallel. Additionally, the transmission of data is inefficient by design, causing the cost of maintenance to rise. This redundancy in every step of using a blockchain makes it hard to scale. We will look at several concepts to make blockchain scale later on, such as **payment channels**, **proof systems** and **sidechains**. But most of them are based on the idea to use the blockchain as little as possible rather than actually increasing the throughput of the chain itself.

All of this overhead can only be justified through its utility. Having a global money, a predictable inflation schedule and trustless transactions without central control and single points of failure is arguably utility enough to use a blockchain. For many other use cases time will tell if blockchain poses a suitable solution. Just as with the immutability attribute, it's important to note that the shortcomings of public blockchain result from being run in a distributed fashion, rather than the data structure, protocol or consensus mechanism. While a high level of redundancy makes the data secure, it is inefficient by definition.

In turn you can get some special properties with a blockchain, that if needed for the specific use case make it invaluable. The main thing distinguishing a blockchain from a normal database is that there are specific rules about how to add data to the database. This set of rules, or *protocol*, can achieve the following traits:

- *Consistency*: Newly added data cannot conflict with data already in the database.

- *Tamper Evidence*: Append only data structure that makes it immediately apparent if data has been changed. Coupled with a strong consensus mechanism that incentivises rejection of invalid blocks this results in immutability.

- *Ownable*: Data can be attributed to a sole owner. It is publicly visible but only the owner can make changes to it. In the context of cryptocurrencies, this means everybody can see the transactions, but only with the correct private key one can spend a UTXO.

- *Distributed*: The database can be kept consistent without a central party acting as a gatekeeper. This results from the protocol enforcing correct behavior, the incentive system rewarding correct behavior and the consensus mechanism that makes creating valid (according to the protocol) changes prohibitively costly. It is the holy grail of distributed systems that Bitcoin achieved for the first time in history.


The key takeaway from this first section should be the following: You get **immutability** of data only if there is a **strong consensus mechanism** in place that makes the network participants decline invalid blocks, otherwise a blockchain is only **tamper-evident**. We will come back to this in our next article on **blockchain protocols** and later on when talking about **consensus mechanisms**.


After we looked at the properties that result from the design, lets take a look at how it actually is constructed. First, we look at the blocks themselves. Next, we introduce a concept that allows us to create an efficient summary of all transactions - the *merkle tree*. Lastly, we look at the transactions themselves that make up the majority of data in a block.

### What does a Block look like?

Blocks consist of a header which contains important data about the block - a sort of summary. Some applications only require the block headers to interact with the blockchain. The largest part of a block in terms of storage usually (depending on network activity) comprises the transactions.


![Block](/assets/post_files/technology/expert/1.1-data-structure/block_D.jpg)


#### The Block Header

The block header contains the most important information about a block. 

- The *Version*  indicates which software version was used by the miner of the block and which set of block validation rules was followed. When [soft forks](https://www.mycryptopedia.com/uasf-user-activated-soft-fork-explained/) occure, incrementing the version number by one to signal support for the new set of rules used to be the standard. 

-  The previous block headers hash *hashPrevBlock* serves two purposes. First, it establishes an order throughout the chain of blocks and second, it ensures no previous block can be changed without affecting the current and all subsequent blocks. **verify if I should name it differently and edit graphic accordingly**

- The Merkle Root Hash *hashMerkleRoot* represents a summary of all transactions included in the block.

- The *Time* is the [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time) when the miner started hashing the header for the mining process.

- The *Bits* or *nBits* are an encoded version of the target threshold the block's header hash must be less than or equal to. It is a different way to express the current difficulty of finding a new block. The target is the actual threshold the block hash must meet, while the difficulty is a measure of the current threshold relative to the lowest threshold possible.

- The *Nonce* - or *n*umber used *once* - is the variable that miners change to modify the block headers hash in order for its value to eventually become smaller than or equal to the target. This process is covered in detail in our article on **mining**.

Merkle Trees play an important role in ensuring the integrity of data in the blockchain but are also used in other systems such as IPFS - the InterPlanetary File System, or several implementations of NoSQL databases. Let's take a look at how they work and what they do before we continue with what a transaction looks like from a data perspective.

#### Merkle Trees

A *merkle tree* is a data structure in and off itself, which is used within blocks. The transactions in a block make up the *leaves* of the merkle tree. The *merkle root* a summary of all transactions is included in the block header.

Constructing a merkle tree goes like this: The *coinbase transaction* is placed first, followed by all other transactions in the block. First, each leave, or transaction, is hashed. Next, the hashes of two transactions are concatenated and hashed again. If the number of transactions is odd, the last transactions hash is concatenated with a copy of itself.This process continous until only a single hash is left - the merkle root.

![Merkle Tree](/assets/post_files/technology/expert/1.1-data-structure/merkle_tree_D.jpg)

While most merkle trees are binary, one can also think of non-binary merkle trees concatenating more than two hashes per step, but the idea remains the same. Trying to change a single transaction in an already confirmed block results in a different merkle tree and as a consequence a different header. This is one mechanism that ensures tamper evidence.\\

From a computer scientists perspective it also poses an efficiency improvement: transactions can be audited in [logarithmic time instead of linear time](https://en.wikipedia.org/wiki/Time_complexity).

Another advantage resulting from the use of merkle trees is a reduction in the communication necessary to verify a transaction. We leverage merkle trees in our **sidechain construction** for that reason. Nodes on a sidechain won't need to monitor the mainchain to verify cross-chain transactions. All they need to know is the *cross-chain transaction* itself, together with its *merkle path* and the block header including the merkle root.

The *merkle path* is simply the set of transactions needed to reconstruct the entire tree. The *merkle path* for transaction$_K$ consists of the hash of transaction L $H_L$ it is first concatenated with and the combined hashes $H_{IJ}$, $H_{MNOP}$ and lastly, $H_{ABCDEFGH}$.

![Merkle Path](/assets/post_files/technology/expert/1.1-data-structure/merkle_path_D.jpg)

The sidechain node can reconstruct the merkle tree with this limited set of information and verify that it matches the root included in the mainchain block header. It is all it needs to know in order to be sure a given *cross-chain transaction* is valid according to the mainchain consensus rules. This method efficiently reduces the communication between mainchain and sidechain nodes without sacrificing security.

### What does a Transaction look like?

We introduced the **UTXO model in our Advanced Technology Section** and will cover it in more detail later in the Expert Section. If you are not familiar with it you might want to catch up before you continue reading.

**TL;DR**: Every transaction (except for the coinbase transaction) has at least one input and one output. When you create a transaction you are spending UTXOs - unspent transaction outputs - using them as inputs to the newly created transaction. At the same time you create one or more new UTXOs that are then spendable by the payee - the new owner.

To be precise with our language we introduce a new concept here: *outpoints*. An *outpoint* is a data structure characterizing a particular transaction output. It includes the *transaction id* the output was created in, as well as the *output index* identifying a specific output among potentially many created in the transaction. The *outpoint* is therefore just a more distinct way of referring to what is generally known as an *output*.

A transaction can be understood as a message to the network informing it about a transfer of money. This message is standardized and composed of the following pieces of information:

- *Version*: just as every block indicates the software version it was created with, every transaction includes this information as well.

- *tx\_ in count*: Is the number of Inputs used, so the number of UTXOs consumed.

- *tx\_ in*: Each input used is characterized by four data points: the outpoint it spends, the size of the *signature* required to spend that outpoint, the signature itself and the *sequence number*. The *sequence number* can be used to modify the *spending conditions* of an outpoint, but we are getting ahead of ourselves.

- *tx\_ out count*: Is the number of outputs created in the transaction.

- *tx\_ out*: Transaction outputs. Each Output is characterized by three data points: the amount it spends, the size of the *spending condition*, and the spending condition itself that can be satisfied with a valid **digital signature** based on the private key that corresponds to the public key used to receive the output.

- *lock\_ time*: Is the unix epoch time or block number after which the outputs are spendable.

Each transaction is broadcast in a serialized byte format called raw format. It is then SHA256(SHA256()) hashed to create its transaction ID - TXID - which as you already know is used to create the merkle tree. Therefore the transaction format is part of the consensus rules in a blockchain.

Ok, that was a lot. We hope you're still with us. This passage referred to many concepts already introduced in our Advanced Section. To develop a thorough understanding of blockchain technology, and this is what the Expert Section is aiming for, we need to bring the individual concepts together and understand their relation.

Transactions, being the basic building block of a blockchain, are an example of this. 
First, an understanding of the **UTXO model** is necessary that makes up the accounting scheme used in most cryptocurrencies. 
Second, to understand the *ownable* part of the data on a blockchain one needs to understand the basic principles of **public-key cryptography**: private keys, public keys, addresses and digital signatures. Each *tx\_ in* includes a signature that authorizes spending and each newly created output *tx\_ out* includes information about what a signature needs to look like in order to authorize its spending later on. We will take an in depth look at generating and verifying digital signatures in our **chapter on PKC**.
In the last chapter of the Expert Section we will also take a look at *Script* which is a simple scripting system that is used by the bitcoin client to handle transactions and data in general. 

### Summary

**TKKG**

We would like to end this section with a tweet that distilled the implications of the properties of blockchain technology in the context of data structures.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Blockchains don’t guarantee truth; they preserve truth &amp; lies from later alteration, allowing one to securely analyze them and be more confident in uncovering the lies. Typical computers are computational etch-a-sketch, while blockchains are computational amber.&quot; - <a href="https://twitter.com/NickSzabo4?ref_src=twsrc%5Etfw">@NickSzabo4</a></p>&mdash; Jameson Lopp (@lopp) <a href="https://twitter.com/lopp/status/1059227449232445440?ref_src=twsrc%5Etfw">November 4, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
