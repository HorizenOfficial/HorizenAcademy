---
layout: post
type: intro
title: "Advanced Summary"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. We end the advanced level of our blockchain technology section with a summary of the previous chapters."
permalink: /technology/advanced/summary/
topic: technology
level: advanced
chapter: "Summary"
---

In this last article of our advanced Technology Section, we want to summarize what topics and concepts we covered throughout this level.

### What is a Blockchain?

In our first chapter - "What is a Blockchain" - we looked at it from three different perspectives. First, we looked at it as a computer scientist and described the [blockchain as a data structure]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-02-blockchain-as-a-data-structure %}). A blockchain is like a linked list, a common data structure with the difference that the references that link the individual blocks are cryptographically secured. This makes it infeasible to tamper with the data recorded on a blockchain.

![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/blockchain_broken_D.jpg)
![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/blockchain_broken_M.jpg)

Second, we looked at the blockchain as a [protocol to transfer value]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-03-a-protocol-to-transfer-value %}). There are many different network protocols that allow devices to communicate in standardized ways. Without those standards, it would be hard for developers and engineers to build interoperable software and hardware. Blockchains are a new class of protocols that standardizes the way people can exchange value over the internet without any intermediaries such as banks or other payment providers like PayPal.

![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/protocols_D.jpg)
![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/protocols_M.jpg)

Lastly, we introduced you to [Smart Contracts]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-04-guaranteed-execution-with-smart-contracts %}). Smart Contracts are software stored and running on the blockchain. They ensure objective execution on the basis of mutually agreed-upon terms enforced by code. They have the potential to reduce middleman which in turn reduces cost and saves time. Before we can see widespread adoption we have to overcome some hurdles, like solving the Oracle Problem that describes the challenge of reliably submitting real-world data to the blockchain.

![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/oracle_D.jpg)
![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/oracle_M.jpg)

### How Does a Blockchain Work?

In the second chapter, we provided an [overview]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-02-the-elements-of-a-blockchain %}) of the different elements of a blockchain first, before we looked at each element more closely. The first two concepts we covered were hash functions and public-key cryptography. While [hash functions]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}) are used to verify the integrity of data [public-key cryptography]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography %}) is used to verify ownership.

![How it works](/assets/post_files/technology/advanced/public-key-cryptography/how_it_works_D.jpg)
![How it works](/assets/post_files/technology/advanced/public-key-cryptography/how_it_works_M.jpg)

Next, we talked about distributed [Peer-to-Peer networks]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-05-a-peer-to-peer-p2p-network %}). There are thousands of nodes that maintain a copy of a blockchain, in the case of our node network more than 25,000. Together with the cryptographically secured data structure, this is the reason blockchains are so robust. If one of your peers goes offline you just connect to another one. If you run a node and happen to go offline for a while, you can reconnect at any time to get updated by your peers on the blocks that you missed and become fully functional again shortly.

![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/central-distri_M.jpg)

The [consensus mechanism]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) of a blockchain allows the network to agree on a single version of history. The history in the case of a blockchain for cryptocurrencies is the order in which the transactions on the network happened. The two most commonly used consensus mechanisms are Proof-of-Work (PoW) and Proof-of-Stake (PoS). Both have in common that the voting power is tied to a limited resource. For PoW blockchains this limited resource is computational power, for PoS blockchains it is ownership of the native currency. While PoW has demonstrated robustness over an extended period of time with Bitcoin, PoS is yet to prove this robustness.

![Comparing POW and POS](/assets/post_files/technology/advanced/consensus-mechanisms/compare_D.jpg)
![Comparing POW and POS](/assets/post_files/technology/advanced/consensus-mechanisms/compare_M.jpg)

For the last article in the chapter on how blockchains work, we talked about [mining]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}). Miners work to secure the blockchain against attacks and protect the history recorded up to that point against changes. Adding a block to the blockchain requires a large number of random guesses to find a nonce that will produce a valid block hash. The block hash must satisfy the current difficulty requirement on the network. This makes it extremely difficult to tamper with data on the blockchain. If somebody wanted to change the record, he would have to redo the work by himself. Not only would he need to do the work, but also at a faster pace than all honest miners combined.

The miners are in a competition and their chance of finding the next valid block is proportional to the amount of computational power they control. Miners receive newly created coins as a reward for their efforts. It is one of the great innovations introduced with Bitcoin that a distributed network can pay its participants for its own maintenance.

![Miner](/assets/post_files/technology/advanced/mining/miner_D.jpg)
![Miner](/assets/post_files/technology/advanced/mining/miner_M.jpg)

### Wallets

We dedicated the third chapter to [cryptocurrency wallets ]({{ site.baseurl }}{% post_url /technology/advanced/2021-03-01-types-of-wallets %}) and the different types there are. A wallet is an app to generate, manage, and store a pair of cryptographic keys for you. You can check your balance, receive, and send funds with a wallet. Usually, there is a trade-off between convenience and security. Funds on a mobile wallet are convenient to spend but not very secure, just like cash in your pocket. Large amounts of money stored on a hardware wallet are less convenient to spend but very secure. The most important question when considering the safety of a wallet is where the keys are stored? If you don't control your keys, you don't control your funds. You authorize the spending of your funds with your private key in a step called signing a transaction and you have to keep your private key safe at all times.

![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/signing_hardware_wallet_D.jpg)
![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/signing_hardware_wallet_M.jpg)

### Transactions

In the fourth chapter, we talked about transactions. With the first article, we introduced you to the [UTXO (Unspent Transaction Output) Model]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-02-the-utxo-model %}). It is the accounting method that is used in most blockchains. The blockchain does not maintain a balance for every address. Instead, your wallet goes through the transaction history on the blockchain and takes all the incoming transactions that you haven't spent yet - your UTXOs - and adds them together in order to generate your available balance.

![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_D.jpg)
![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_M.jpg)

In the next article on transactions, we talked about the [block explorer]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-03-block-explorer-continued %}), a graphical tool to view and explore data on the blockchain. There is a block explorer available for almost every public blockchain out there. It allows you to browse the history of a given chain with all the transactions that ever happened, sorted by addresses or blocks.

![Bitcoin Transaction](/assets/post_files/technology/advanced/block-explorer-continued/transactions.png)

We also showed you a very special kind of transaction in this chapter, an [Atomic Swap]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-04-atomic-swaps %}) that allows users the trustless exchange of two different cryptocurrencies between to separate blockchains. At its heart, Atomic Swaps rely on Hashed Time-Locked Contracts or HTLCs. Atomic Swaps present an alternative to centralized exchanges used today. At no point is there a third party involved that has access to a user's funds. The exchange process is entirely trustless and depending on the users can be almost instant.

![swaps](/assets/post_files/technology/advanced/atomic-swaps/swap_1_test.png)

### Privacy on the Blockchain

The human right to privacy is one of Horizen's core values. We looked at different methods to preserve your [privacy on the blockchain]({{ site.baseurl }}{% post_url /technology/advanced/2021-05-01-intro-to-privacy-on-the-blockchain %}). We started with simple methods such as using different addresses for every new transaction and coin mixing protocols that combine a number of transactions from different users to obfuscate the link between sender and recipient. A more advanced technique to achieve private transactions is the use of Ring Signatures. With Ring Signatures, a group of people signs a transaction and the verifier will know for sure that one of the group members sent the transaction but he won't be able to tell which one.

The last privacy-preserving technology we talked about were Zero-Knowledge Proofs. It is the technology Horizen uses for its shielded transactions. Simply speaking, a Zero-Knowledge Proof enables you to prove to a verifier that you know something, without revealing that knowledge. We used the example of a seeing person convincing a blindfolded one that two balls are of a different color, without revealing the colors.

![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/zkproof_D.jpg)
![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/zkproof_M.jpg)

### Attacks on Blockchain

The last article in our advanced level covered different [attacks on blockchains]({{ site.baseurl }}{% post_url /technology/advanced/2021-06-01-attacks-on-blockchain %}). We introduced you to the Byzantine Generals Problem, a thought experiment where a number of generals want to coordinate an attack without a reliable means of communication. Blockchains pose a solution to the general's problem because they allow a group of untrusted individuals to achieve consensus - even when communication can be faulty.

Next, we talked about DDOS attacks, where an attacker tries to slow down or even halt a service by sending a large number of fraudulent requests to the network.

In a Sybil Attack, an attacker creates a large number of fake identities. These fake network participants can be used to manipulate the communication between peers.

Lastly, we talked about the most common type of attack, the 51%  or block reordering attack. A miner controlling a significant share of the total hash power of a network can attempt to perform such an attack. The malicious miner creates a transaction on the honest chain spending his funds. In the meantime, he mines blocks privately, meaning the miner doesn't broadcast the blocks to the network. Once the chain, which does not include the transaction spending the malicious miner's funds becomes the longest chain he broadcasts it and according to the longest chain rule it will be recognized by all miners as the new valid chain. The attacker managed to gain control of the funds once again and can now spend them a second time.

![51% Attack](/assets/post_files/technology/advanced/attacks-on-blockchain/percent.gif)

### Final Remarks

We covered many concepts in the Advanced Level and we hope you have learned a lot. If you like what you have found here, please go ahead and share your knowledge as well as our website with your friends and family. If you had trouble following along at some point, don't worry! It is a complex topic and took all of us a while to wrap our heads around. You can always come back to re-read these articles. It will make a lot more sense reading it a second time with a little break in between.

If you feel comfortable about everything you have read and would like to keep learning, there is more! Move up one level and check out our Expert Content. We have structured it the same way, but added more detail to the topics and split some of them up to look at the individual components more closely. We designed the content in a way where you can either read it from top to bottom (which we can only recommend) or jump to articles that you are especially interested in.

We hope you enjoyed this series of articles. Please let us know if there is anything that you find confusing. The content provided is and will be work in progress. We are always open to suggestions and constructive feedback so drop us a message at academy@horizen.global if you want to share your thoughts with us.

**Your Horizen Team**
