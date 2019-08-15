---
layout: post
type: article
title: "Atomic Swaps"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you will learn about atomic swaps at an advanced level."
permalink: /technology/advanced/atomic-swaps/
topic: technology
level: advanced
chapter: "Transactions"
further_reads: [atomic_swaps_the_interoperability_revolution_in_cryptos, everything_you_need_to_know_about_atomic_swaps_and_how_komodo_is_advancing_the_technology, atomic_swap_compatibility_of_different_cryptocurrencies]
---

The last transaction type that we would like to talk about is the Atomic Swap. It is a type of transaction that touches on the topics of scalability and interoperability at the same time.

If you want to exchange one cryptocurrency for another one you will most likely go to one of the centralized exchanges. You transfer your funds to their address, which requires you to trust the exchange as a third party. Once you have deposited your funds you have to see, if the exchange offers the trading pair that you are interested in. Most exchanges offer BTC and ETH pairs. To swap two more exotic cryptocurrencies or tokens, you will have to buy Bitcoin first which you will then convert into the desired crypto.

Atomic Swaps are a technology that allows you to trade Peer-to-Peer without a third party. They also do away with the trust required for you to arrange a swap with an unknown user. Someone would have to send their funds first, and the counterparty could decide to not fulfill their side of the deal. Atomic Swap enable peers to do a trustless exchange of different currencies according to predefined conditions that they agreed upon without having to fear losing their funds.

### The Technology Behind Atomic Swaps

Hashed Timelock Contracts (HTLCs) enable atomic swaps. To understand HTLCs we must take a couple steps back to look at state channels.  
A state channel is a two-way communication channel that allows interaction that would usually happen on-chain, to occur off-chain.  
One specific type of state channel is the payment channel. As the name suggests, a payment channel is a state channel that deals with payments. You may have heard about payment channels in the context of the lightning network or other so-called second layer solutions. An HTLC (Hashed Time Lock Contract) is a specific type of payment channel that enables the exchange of two different crypto assets off-chain.

![channel hierarchy](/assets/post_files/technology/advanced/atomic-swaps/channel_hierarchy_D.jpg)
![channel hierarchy](/assets/post_files/technology/advanced/atomic-swaps/channel_hierarchy_M.jpg)

The "Hashed" part of HTLC means, that a hash can serve as a lock for the contract, to protect it from a third party accessing it. The "Timelock" part refers to the contract being able to have an expiration date. We will explain what this means to the user after outlining how you would conduct an Atomic Swap.

You must meet two conditions to perform an atomic swap between two assets: Both assets and their underlying blockchain need to support the same hashing algorithm, like SHA-256 in the case of Bitcoin and both blockchains need to support some kind of programmability, that allows an HTLC to be deployed.

### The Process

You can create an HTLC once you meet both conditions. The process of an Atomic Swap would generally look like the following. Let's assume Alice has some BTC and Bob has some ZEN. Both agree to swap a certain amount of their assets

 1. Alice generates an HTLC that has an address on the Bitcoin blockchain. Smart Contracts generally have an address so you can interact with them and a Hashed Timelock Contract is no exception.
 2. Alice generates a key (a random number) and derives a hash lock from her key by hashing the random number (key). That way the key fits the lock. This step is similar to generating a private key and deriving an address from it as we explained in our article on <a href="{{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography.md %}">public-key cryptography</a>.
 3. She now deposits the agreed upon amount of BTC in the HTLC.
 4. Alice locks her funds with the hash lock she created and sends a copy of her lock to Bob.
 5. Bob creates an HTLC with an address on the Horizen blockchain using Alice's hash lock.
 6. Bob deposits the agreed upon amount of ZEN in the contract address and locks them up.

    At this point, both participants have locked up the funds they agreed to exchange. Because both blockchains are public, each of them can verify the amounts deposited. Only Alice has the key to unlock the funds on both chains right now. In case she does not proceed the Timelock would release the funds back to their original owners after a certain period of time. That way she can't trick Bob into losing his funds by locking them up and never receiving the key to unlock them. If she proceeds the next two steps happen almost simultaneously.

 7. Alice uses the key to unlock Bob's ZEN and transfers them to an address that she controls. Bob learns about the key when Alice unlocks the funds by monitoring his HTLC.
 8. Bob uses the key he just learned to unlock Alice's Bitcoin and transfers them to a Bitcoin address he controls.
 9. Both parties have now successfully exchanged their funds without having to trust each other.

Since this is an automated process steps 7 and 8 happen at the same time and there is no trust required from either party. Either both or none of them get the funds of the other.

![swaps](/assets/post_files/technology/advanced/atomic-swaps/swaps_D.jpg)
![swaps](/assets/post_files/technology/advanced/atomic-swaps/swaps_M.jpg)

### Atomic Swaps Today

There are few wallets or decentralized exchanges that enable users to do Atomic Swaps. So far there have been only a small number of Atomic Swaps, here is a short history:

 - The first on-chain Atomic Swap was done on September 20th, 2017 between Litecoin and Decred
 - The first off-chain Atomic Swap occurred November 2017 between Litecoin and Bitcoin on the Lightning Network
 - A detailed explanation of an Ethereum - Bitcoin Atomic Swap can be found [here](https://medium.com/coblox/connect-all-the-blockchains-atomic-swap-78b38fff42e)
 - Most recently on the 7th of December 2018 TenX showcased an ERC20 to Bitcoin Lightning Atomic Swap using their open-source software COMIT

The technology is very promising, but to achieve adoption wallets as well as exchanges will have to build a user-friendly interface to use Atomic Swaps. 

### Summary

Atomic Swaps present an alternative to centralized exchanges used today once they are available between the majority of cryptocurrencies. At no point is there a third party involved that has access to a users funds. The exchange process is entirely trustless and almost instant. Hashed Timelock Contracts are the heart of Atomic Swaps. I suspect that it won't take long until Atomic Swap compatibility will be a necessary feature for a blockchain to gain adoption.

This was the last article on transactions in the advanced section. To learn more about how transactions work and what types of transactions there are you can visit our expert level. On the advanced level, we will continue with an introduction to privacy-preserving techniques on the blockchain.

