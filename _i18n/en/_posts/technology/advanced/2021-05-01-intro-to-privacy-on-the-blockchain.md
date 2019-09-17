---
layout: post
type: intro
title: "Privacy on the Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, we introduce you to the different technologies that enable private transactions on a public blockchain."
permalink: /technology/advanced/privacy-on-the-blockchain/
topic: technology
level: advanced
chapter: "Privacy"
further_reads: [how_zcoin_privacy_technology_compares_to_the_competition]
---

One of the great value propositions of blockchains is the transparency that such public ledgers offer. There are many cases though where it is desirable to conduct private transactions. In this article, we want to introduce you to four concepts that aim to increase the level of privacy for transactions on public blockchains. It is a common misconception that cryptocurrencies are anonymous. Most of them are pseudonymous, meaning that real-world identities are represented by addresses. Addresses and identities can be connected through ongoing data analysis.

### Why Privacy?

There are many legitimate reasons to create private transactions on a blockchain. If you have a medical condition and need to purchase your prescriptions on a regular basis you have good reason to do these transactions privately. If you have a business, you don't want to reveal your revenue streams to your competition and if you are buying a present for your spouse, you might not want him or her to see it before they actually get the present. There are many good reasons to wish to transact privately, and we believe that privacy is and should be treated as a basic human right.

For this article, we assume that you are familiar with the [UTXO model]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-02-the-utxo-model %}) that many blockchains use for accounting. If you are not, feel free to check out our article on it before you continue reading.

### Change Addresses

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/privacy-on-the-blockchain/change_address_0.png" alt="Change Addresses">
</div>

*Change addresses* were introduced so people you are transacting with don't have access to your entire transaction history just by looking up the address you used for transacting with them. Most wallets automatically generate change addresses for you when you create a transaction. In the example above of a regular bitcoin transaction, you can see one input and two outputs to the transaction. The first output went to a different address and is the amount, the user wanted to spend. The remainder of the UTXO went back to the same address the funds originated from.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/privacy-on-the-blockchain/change_address_1.png" alt="Change Addresses">
</div>

A wallet that supports change addresses will generate a new address, every time you are receiving funds, no matter if they are change or regular transactions. The example above shows a transaction with the exact same amounts as before, but this time the change went back to a newly created change address. This feature improves privacy by making it harder to trace the transaction history of a given user.

### Coin Mixing

Coin mixing protocols like SharedCoin, TumbleBit or CoinJoin (used by Dash) were the next evolutionary step to improve privacy. Several inputs are mixed by creating a single transaction from them, oftentimes during several intermediary transactions.

![Coin Mixing](/assets/post_files/technology/advanced/privacy-on-the-blockchain/coinjoin_D.jpg)
![Coin Mixing](/assets/post_files/technology/advanced/privacy-on-the-blockchain/coinjoin_M.jpg)

Coin mixing doesn't require any changes to the basic blockchain protocol. In the graphic above you can see the schematics of a coin mixing transaction. A number of inputs are combined in a mixing pool (center) and later distributed to their destination addresses. A coin mixing transaction makes it harder for an attacker to figure out who was sending money to whom.

The level of privacy provided by mixing services is far better than using regular transactions, but one can link input addresses to output addresses by monitoring the amounts of coins in a mixing transaction. There are tools available online to do this kind of chain analysis. Another downside of coin mixing is that many mixing services are centralized and run by a third party. CoinJoin based techniques solve this issue - they have no central party.

By now there are many iterations of coin mixing protocols that improved upon the privacy promise step by step. With CoinJoin for example, every user has to send the same amount to the mixing pool, which makes amount tracking significantly harder. Introducing [Confidential Transactions](https://medium.com/@ecurrencyhodler/a-primer-to-confidential-transactions-e6ab3dd2bf1e) will improve privacy even more by hiding the amounts transacted.

### Ring Signatures

Ring Signatures were first introduced by Rivest, Shamir, and Taumann in 2001 and the general idea has been used for a number of privacy protocols since then. We will use the White House Leak Dilemma to demonstrate the value proposition of their concept.

Imagine a high ranking White House official (Alice) wanting to leak a secret to the press about the president. She needs to make sure, the journalists who receive the leak have a way to verify the source of the information without revealing her identity. A potential solution would be using a Ring Signature scheme to sign the message. To construct the ring signature all she needs is her private key and the public keys of some other officials, e.g. other members of the cabinet (Bob and Carol).

![Ring Signatures](/assets/post_files/technology/advanced/privacy-on-the-blockchain/ring_sig_D.jpg)
![Ring Signatures](/assets/post_files/technology/advanced/privacy-on-the-blockchain/ring_sig_M.jpg)

The verifier (journalist) can verify that the message was indeed signed by a high ranking official, but he cannot determine who constructed the signature - Alice, Bob or Carol.

In the context of cryptocurrencies, a user can collect a bunch of public keys, create a transaction and sign it using his private key. The set of verifiers, being the nodes on the network can verify that the transaction is valid and that one of the group members has signed the message. They cannot tell who signed the transaction, which makes Ring Signatures great for private transactions. Monero is the most notable cryptocurrency making use of Ring Signatures which are part of the CryptoNote protocol that Monero is built on.

### Zero-Knowledge Proofs

Zero-Knowledge Proofs (zk-Proofs) were known long before blockchain technology emerged but with distributed ledgers, a whole new set of possible use-cases came around. Simply speaking, a Zero-Knowledge Proof lets you prove to a *verifier* that you know something, without revealing that knowledge. A non-digital example of what this can look like can be constructed with a seeing person as the *prover*, a blindfolded person as the verifier, and two balls of a different color. Other than the color the balls are identical - same haptic, same weight, same size.

The seeing person (prover) wants to convince the blindfolded person (verifier) that the two balls are of different colors, without revealing the colors. They sit down at a table and the blind person shows the prover one of the balls. The blind person puts both balls under the table now and shows one ball in a second round - either the same one as before or the other one. If she chooses to show the same ball, the prover will know because of the color. If she were to switch balls under the table and show the other ball, the prover could tell with certainty.

![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/zkproof_D.jpg)
![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/zkproof_M.jpg)

In the second round, the prover would have a fifty-fifty chance of getting the right answer if he had to guess. He would have to guess in case the claim that he is trying to prove (the balls are of a different color) was false. At this point, the blind person cannot be sure if the claim is correct, or if the prover just got lucky.

If they repeat the game several times, the chance of getting the answer right every time through guessing decreases exponentially. After just ten rounds of the game, the probability of the prover calling the right ball every time through luck has decreased to 1 in 1024 (1 / 2^10). The blind person can be pretty sure by now, that the two balls are indeed of different colors although the prover has not shared any information about the colors themselves.

The idea of using Zero-Knowledge Proofs for cryptocurrency transactions is the following: You construct a proof that the transaction you want to send would be considered valid by a verifying node without revealing any of the actual transaction data. This allows the sender, receiver, and the amount to remain private. Another use-case that is perfect for the application of zk-Proofs is identity verification. E.g. you could prove to an entity that you are of a certain age without revealing any personal data like your DOB. Horizen uses zkSNARKs for it's shielded transactions. zkSNARKs are a special type of Zero-Knowledge Proofs, namely _Zero-Knowledge Succinct Non-interactive ARguments of Knowledge_.

 - *Succinct*: refers to the proofs being short in the sense of easy to compute and verify.
 - *Non-interactive*: means that the prover and verifier don't have to be online at the same time. With the ball-example above, the prover and verifier have to go back and forth several times before the verifier actually has proof of the claim. With non-interactive proofs, the prover can construct the proof entirely on his own without the need for communication in the process. This proof can be written to the blockchain to be verified at any time.
 - *Arguments of knowledge*: describes the proof being computationally sound, i.e. no adversary can construct a false proof even if he has access to huge computational resources.

To use private transactions with Horizen, you will just use a different address type. In your wallet, you can either generate t-Addresses (transparent Addresses) or z-Addresses (shielded Addresses). When you send funds to a z-Address, the amount and sender are recorded on the blockchain, but not the receiving address. If you transact between two z-Addresses, no information about the transaction gets publicly recorded - neither the sender, receiver nor the amount. If you want to try this feature, you can download our flagship app [Sphere by Horizen](https://www.horizen.global/spherebyhorizen/). Make sure to activate full mode in the settings otherwise, you won't be able to generate z-Addresses.

### Summary

There are many ways to reclaim your privacy on a public blockchain. The approaches like Change Addresses and Coin Mixers don't provide strong privacy, but they help make it harder to trace transactions to their origin and link real-world identities to addresses on the blockchain. Ring Signatures and Zero-Knowledge Proofs are more advanced concepts, that actually allow you to transact entirely private, even on fully open and public blockchains. Horizen offers what we call selective privacy - depending on what address type you use, you can decide if you want to transact transparently or privately.
