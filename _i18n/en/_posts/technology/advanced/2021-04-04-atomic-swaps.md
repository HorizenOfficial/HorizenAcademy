---
layout: post
type: article
title: "Atomic Swaps"
description: "Atomic Swaps are a technology that allows you to trade Peer-to-Peer without a third party. Learn about atomic swaps at an advanced level."
permalink: /technology/advanced/atomic-swaps/
topic: technology
level: advanced
chapter: "Transactions"
---

If you want to exchange one cryptocurrency for another one, you will most likely go to one of the _centralized exchanges_. **First**, you have to check whether the exchange offers the trading pair that you are interested in. **Then** you transfer your funds to their address, which requires you to trust the exchange as a third party. Most exchanges offer **BTC** and **ETH** pairs. To swap two lesser-known cryptocurrencies or tokens, you will oftentimes have to buy bitcoin first which you will then convert into the desired cryptocurrency.

A special transaction type that we would like to talk about in this article is the _Atomic Swap_. It is a type of transaction that touches on the topics of scalability and interoperability at the same time.

**Atomic Swaps** are a technology that allows you to trade Peer-to-Peer without a third party. They also do away with the trust required for you to arrange a swap with an unknown user. Someone would have to send their funds first, and the counterparty could decide to not fulfill their side of the deal. **Atomic Swaps enable peers to do a trustless exchange of different currencies according to predefined and agreed upon conditions without having to fear losing their funds.**

## The Technology Behind Atomic Swaps

A valid transaction requires a **signature**. This signature can only be created by the person that has access to the private key. When you send a transaction you usually sign it and broadcast it to the network afterward.
**HTLCs** are based on a technology called **state channels**. All you need to know is that they allow you to exchange signed transactions securely. Only once the participants decide they are done transacting, the final _state_ is broadcast to the blockchain.

The "Hashed" part of _HTLC_ means that a hash serves as a lock for the contract, to protect it from a third party accessing it. The "Timelock" part refers to the contract having an expiration date.

**Two conditions must be met to perform an Atomic Swap between two crypto assets:** Both assets and their underlying blockchain need to support the same hashing algorithm, like **SHA-256** in the case of **Bitcoin** and both blockchains need to support some kind of programmability that allows an HTLC to be deployed.

### The Process

The process of an Atomic Swap would generally look like the following. Let's assume **Alice** has some **BTC** and **Bob** has some **ZEN**. Both agree to swap a certain amount of their assets.

![swaps](/assets/post_files/technology/advanced/4.3-atomic-swaps/atomic_swaps_1_D.jpg)
![swaps](/assets/post_files/technology/advanced/4.3-atomic-swaps/atomic_swaps_1_M.jpg)

**First**, **Alice** creates an HTLC on the **Bitcoin Blockchain** that we will simply call a _contract_. The contract comes with an address, otherwise, you could not interact with it. **Next**, Alice generates or picks a secret - in this example her secret is **XYZ**. Using a [hash function](https://academy.horizen.io/technology/advanced/hash-functions/) she generates a lock, here: **1b9f...**, which is simply the hash of the secret.
Now she deposits the amount of bitcoin she and **Bob** agreed to exchange in the contract where they are locked. **Lastly**, she sends the lock to Bob.

**The contract can enforce two outcomes:**

- If nothing happens for some time, say **24** hours, the money is returned to **Alice**. This is necessary, so she doesn't lose her money in case Bob never responds. It is the **timelock** component of the HTLC.
- If **Bob** can provide the secret, the contract will automatically transfer the bitcoin to his address. Because hash functions are one-way functions, Bob doesn't know the secret yet, although he knows its hash.

**Now it's Bob's turn.**

![swaps](/assets/post_files/technology/advanced/4.3-atomic-swaps/atomic_swaps_2_D.jpg)
![swaps](/assets/post_files/technology/advanced/4.3-atomic-swaps/atomic_swaps_2_M.jpg)

**Bob** also creates a Hashed Timelock Contract, but this time on the **Horizen** blockchain. His contract also has an address, _BCD_ in this example. **Alice** sent him a lock, the same one she used, so he goes ahead and locks his contract with the same lock. **Lastly**, he deposits the amount of **ZEN** the two agreed to exchange. **Just like the contract Alice created, Bob's contract can execute in two ways**: Either Bob gets refunded after a timeout period or Alice provides the secret and the funds are distributed to her address.

**Now, both contracts are set up on their respective blockchain**. Alice has to take the next step within the locking period, otherwise, both are refunded as nothing happened at all.

![swaps](/assets/post_files/technology/advanced/4.3-atomic-swaps/atomic_swaps_3_D.jpg)
![swaps](/assets/post_files/technology/advanced/4.3-atomic-swaps/atomic_swaps_3_M.jpg)

Alice will now use the secret she chose earlier to unlock the _hashlock_ of Bob's contract on the **Horizen** blockchain and the **ZEN** will be released to her. **This is a public operation, auditable on the blockchain**. Bob can, therefore, see the secret now, and uses it to unlock the bitcoin locked up in Alice's contract. By providing the secret the HTLC will automatically release the funds to Bob's previously specified Bitcoin address.

Without having to trust each other Alice and Bob have now successfully exchanged their coins, **without having to involve a middleman**. At no point could one of the two steal the other's money. When Bob receives the lock from Alice, he can verify that she used the same lock by looking at the **Bitcoin** blockchain. If Alice would not redeem her **ZEN**, then both of them would automatically get refunded. And Alice cannot claim Bob's **ZEN** without Bob learning the secret.

### Atomic Swaps Today

There are few wallets that enable users to do Atomic Swaps, yet. So far there have been only a small number of Atomic Swaps completed. **Here is a short list:**

- The first on-chain Atomic Swap was done on **September 20th, 2017** between **Litecoin** and **Decred**
- The first off-chain Atomic Swap occurred **November 2017** between **Litecoin** and **Bitcoin** on the **Lightning Network**
- Most recently on the **7th** of **December 2018, TenX** showcased an **ERC20** to **Bitcoin** Lightning Atomic Swap using their open-source software **COMIT**

The technology is very promising, but to achieve adoption wallets will have to build a user-friendly interface to use Atomic Swaps. This will take a while, but the technology is very promising and could very well enable a new class of use cases for cryptocurrencies.

## Summary

**Atomic Swaps** present an alternative to the centralized exchanges used today. **At no point is there a third party involved that has access to a user's funds.** The exchange process is entirely trustless and almost instant. **Hashed Timelock Contracts** are the heart of Atomic Swaps. I suspect that it won't take long until Atomic Swap compatibility will be a necessary feature for a blockchain to gain serious adoption.
