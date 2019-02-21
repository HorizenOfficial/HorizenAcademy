---
layout: post
type: intro
title: "Summary Beginner Level"
permalink: technology/beginner/summary-beginner-level/
topic: technology
level: beginner
chapter: "Summary"
---

### Summary

This is the last article of our technology series for beginners. We hope that the previous articles have helped you understand what a blockchain is, how it works, and how to use it. Here we would like to summarize what we have covered in the technology section for beginners.

A blockchain is a [method to store data]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-02-blockchain-as-a-data-structure %}) just like you store information in lists and tables. The special method of handling data allows you to transfer value without involving a central entity.

![List table chain](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/list_table_chain.jpg)

We made the comparison of blockchain being a [protocol to transfer value]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-03-a-protocol-to-transfer-value %}) with the internet being a protocol that enables you to transfer information. We also compared blockchain to the post being a "protocol" to send physical goods. The protocol is run on a large number of computers all around the world. Because the data on a blockchain is so secure and all the nodes communicate in a predefined way no middlemen are needed to ensure safe transactions with digital currencies.

![Mail protocol](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/mail_protocol.jpg)

[Miners]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) are the bookkeepers of a blockchain. They collectively make decisions on what happened in the past, allowing the network to reach consensus on the current state. Miners require special hardware and electricity to solve a computationally hard puzzle. The miners are in a competition to find the next block the fastest. In turn, they receive newly created coins if they finish the task first. This is how a decentralized cryptocurrency protocol can pay for its own maintenance.

![Miner](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/miner.jpg)

The [nodes]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) make up the infrastructure of the network itself. Full nodes maintain a copy of the blockchain and verify all the transactions on the network, as well as new blocks. Light Nodes only store a pair of keys. Most mobile and desktop wallets are light nodes. If you want to conduct a transaction with a wallet on your phone, your wallet will connect to a full node first, which will forward the transaction to all other nodes. This is like how your phone needs to connect to a cell phone tower to connect to the internet.

![Nodes](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/nodes.png)

Your public key is like your address on the blockchain and your private key is the password to access your address and the funds within. You use your public key to receive funds and your private key to authorize transferring your funds. As a pair, they represent your [identity on a blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}). The key pairs are part of an encryption scheme called public key cryptography or asymmetric cryptography, which is one of the main pillars of blockchain technology.

![Asymmetric](/assets/post_files/technology/beginner/identity-in-blockchain/asymmetric.png)

[Wallets]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) simplify handling your keys and the encryption that is happening (in the background). Wallets are a user-friendly interface to create transactions and act as a keychain. They can generate and manage keys for you, show you your balance by finding all the transactions you received on the blockchain, and create new transactions. You never store any funds in a wallet, but only the keys that let you access your funds which are recorded on the blockchain.

![Wallet does](/assets/post_files/technology/beginner/wallets/wallet_does.jpg)

A simple way to think of a [transaction]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-intro-to-transactions-basic %}): Imagine a grid of mailboxes. Each address on the blockchain is a single mailbox in this grid. If you wish to send a transaction you must unlock your funds (mailbox) with your private key and find the recipient's mailbox using their address. The transaction ends up as a statement like "Alice send Bob 5 ZEN". This statement is what represents Bob's coins.

![Sent](/assets/post_files/technology/beginner/intro-to-transactions-basic/T3_sent.jpg)

To access the information stored on the blockchain you can use the [block explorer]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-03-block-explorer-introduction %}). Like how a web browser lets you access information on the internet, the block explorer lets you access information on the blockchain. You can look up addresses, transactions, or entire blocks.

![Explorer address summary](/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_summary.png)

While cryptocurrencies are not anonymous by default, some of them offer features that allow you to transact privately. To increase the level of privacy, you should use different addresses for every incoming transaction. This makes it harder for an adversary to track your transaction history. Most wallets will do this automatically for you. You can use cryptocurrencies with enhanced privacy features, like Horizen that offers Zero-Knowledge Proofs, to transact completely private. This is done by using a different address type within the same wallet (z-Addresses).

![zkproof](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof.jpg)

### Final Remarks

Cryptocurrencies and blockchain are not an easy topic. In this line of articles, we were trying to explain it in intuitive ways without sacrificing too much accuracy. It took all of us a while to understand blockchain technology when we started. I read articles multiple times until they clicked with me. You can always come back to re-read these articles. It will make a lot more sense reading it a second time with a little break in between.

If you feel comfortable about everything you have read and would like to keep learning: there is more! Move up one level and see our more advanced articles. We have structured them in the same way, but added more detail to all topics and split them up to look at the individual components more closely. We designed the content in a way where you can either read it from top to bottom (which we can only recommend) or jump to articles that you are especially interested in.

We hope you enjoyed this series of articles. Please let us know if there is anything that you find confusing. The content provided is and will be work in progress for a while. We are always open to suggestions and constructive feedback so drop us a message at [academy@horizen.global](mailto:academy@horizen.global) if you want to share your thoughts with us.

**Your Horizen Team**
