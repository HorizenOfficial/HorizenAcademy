---
layout: post
type: intro
title: "Privacy on the Blockchain"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/privacy-on-the-blockchain/
topic: technology
level: expert
chapter: "Privacy"
---

Digital privacy has been a concern for a long time in many circles. The Cypherpunks stated in their **Manifesto** that the need for privacy is what motivates them to develop cryptographic tools for the general public. Many ideas that were later implemented in Bitcoin originated from this group of activists.

There are several approaches to achieve truly private transactions on public blockchains and in this chapter we will take a close look at them.

1/ We start with a high-level overview of the different methods to conduct private transactions. Their general concepts are explained succinctly before we go into detail on them individually.

2/ The first privacy enhancing technique we cover is coin mixing. By creating one large transaction with several inputs and outputs from many simpler transactions, one can make tracking funds significantly harder.

3/ Ring Signatures are the next concept we cover. A group of people sign a transaction and a verifier can be certain that the rightful owner was among them, but he cannot tell which of the signing parties it is.

4/ Confidential transactions are based on cryptographic proofs. Plaintext UTXO's as they are used in most cryptocurrencies are replaced by Pederson Commitments. They allow a user to prove that the inputs and outputs of a transaction add up without actually revealing them.

5/ zkSNARKs - zero knowledge succinct non-interactive arguments of knowledge - are the technology used on the Horizen blockchain to enable private - or as we call them - shielded transactions.
