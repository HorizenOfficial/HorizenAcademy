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


By now know what a wallet is and what it does, if not -> beginner and advanced

here take a look at some of the most important concepts that make a wallet work.

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


