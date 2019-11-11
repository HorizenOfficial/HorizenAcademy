---
layout: post
type: intro
title: "Wallets Advanced"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/wallets-advanced/
topic: technology
level: expert
chapter: "Wallets"
---

By now you most likely know what a wallet is and what it does. A wallet generates a random private key *sk*, derives your public key *pk* in a first step using [*elliptic curve cryptography*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}) and derives your address(es) from you public key, mainly using two different [*hash functions*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}). It furthermore stores your private key and takes care of [*signing* transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}).

In case this is completely new to you, please take a look at the [Beginner]() or [Advanced]() level articles on wallets. You can simply do so by adjusting the level in the top left corner.

In this article, we want to introduced some of the more advanced technical details that are applied in modern wallets.






main function, generate sk, derive pk and addresses, manage those. pkc article. Also interface with blockchain.

### Advanced Concepts Used in Wallets

\url{https://privatekeys.org/2017/09/12/key-derivation-in-bitcoin-wallets-as-defined-in-bip-0032/}

Different derivation paths

BIP0032

mnemonic phrases

ways to generate randomness

### SPV - Simple Payment Verification

Maybe move this section to transactions?

"It is possible to verify payments without running a full network node. A user only needs to keep
a copy of the block headers of the longest proof-of-work chain, which he can get by querying
network nodes until he's convinced he has the longest chain, and obtain the Merkle branch
linking the transaction to the block it's timestamped in." - BTC Whitepaper


### Deterministic Wallets 

\url{https://en.bitcoin.it/wiki/Deterministic_wallet}
receiving and spending essential feature. can be two programs, one for distributing pub keys and one for signing/spending.

Need to interact with P2P network to receive info and broadcast transactions. this part can also be outsources. three separable parts: a public key distribution program, a signing program, and a networked program

deriving many addresses from a single private key.
How does Multi-currency wallet do it for e.g. BTC and ETH on single seed?
generating addresses without access to private key

\textbf{Type1 deterministic/Type2 HD} explain

### Hierarchical Deterministic Wallets

![Hierarchical Deterministic Wallet - HD Wallet](/assets/post_files/technology/expert/3.0-wallets/hd_wallet_D.jpg)


BIP0032 - \url{https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki}


### MultiSig Tech

Whats is MultiSig

++++ multi sig graphic

What it is used for

Casa 3-of-5 explained: Mobile App and desktop (easy access), one in office and one in bank (medium access), one with casa.


### Summary

\subsubsection*{FR}

BIP0032 \url{https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki}


