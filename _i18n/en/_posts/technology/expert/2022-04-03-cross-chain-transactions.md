---
layout: post
type: article
title: "Cross-Chain Transactions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/cross-chain-transactions/
topic: technology
level: expert
chapter: "Transactions"
further_reads: []
---

Intro

- use horizen expert article

motivation: The need to introduce sidechains in a general payment-based blockchain system comes from the need to allow the creation of different blockchain applications that use the same mainchain asset.

![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_M.jpg)

"The mainchain is a blockchain system based on the Bitcoin backbone protocol model [11], which maintains a public ledger of asset-transfer transactions. Additionally, the mainchain supports a standardized mechanism to register and interact with separate sidechain systems. By interaction, we mean the cross-chain transfer protocol, which enables sending a native asset to a sidechain and receiving it back in a secure and verifiable way without the need to know anything about the internal sidechain construction or operations."

The sidechain is a separate system attached to the mainchain by means of a cross-chain transfer protocol.
Speaking informally, we consider the mainchain to be a blockchain platform that supports basic payment functionality with some native asset Coin (e.g. Bitcoin [20], Horizen [26], etc.). Then, the sidechain is an attached domain-specific platform that also uses the Coin asset (but not limited to it). In our model, we consider a single mainchain with many sidechains attached to it.



## Horizen Sidechains - The Zendoo Protocol

differnt types, mainchain can work with them without knowing their internal structure, e.g. consensus....

doesn't even have to be a blockchain, any system that uses communication method



### The Three Main Components

MCP
CCTP
SCP

![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechain-elements.jpg)

The CCTP is naturally a bridge between them and is unified and fixed by the mainchain consensus protocol

We consider the SCP as a generalized notion that encom- passes all the details about a particular sidechain construction such as consensus algorithm, accounting system, types of supported transactions, incentives mechanism, a protocol for with- drawal certificate generation,

### Using zkSNARKS 

zkSNARKs. Proof system.

mostly proof of coin ownership. But this is from context. Proof that computation was executed correctly. in case of UTXO ownership this means, that a previously unspent UTXO was used as an inputnand the spending conditions were satisfied.

Also possible to construct proof for correct state transitions of the system - new blocks. State *s*, transition *t*.


- Setup: proofing and verifying key are created
- Prove: proof *pi* is constructed based on the input si, si+1 and ti
- Verify: based on vk_Base,(si,si+1),π Base it is evaluated if the proof is true or false

### Recursion

> "Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.[1] Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time. At the opposite, recursion solves such recursive problems by using functions that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science."


![Recursively Calculating the Faculty of any Number](/assets/post_files/technology/expert/4.2-cross-chain-transactions/recursive-faculty.jpg)

function calling itself until base case is reached. GIF?!


we would like to have a succinct proof of the following statement: “there exist such (t1, ..., tn) so that update(tn, update(tn−1, update(..., update(t1, s1)))) = sn+1”.

common example faculty, easy to understand.




![Recursive State Transitions](/assets/post_files/technology/expert/4.2-cross-chain-transactions/recursive-state.jpg)


$$
update(t_n, s_n) = update (t_n, updated(t_{n-1}, s_{n-1}))
$$

By applying this to blockchain, we will be able to provide succinct proofs of transition between some states si and sj (i < j). The state can be represented, for instance, as a list of unspent transaction outputs while transitions are regular blockchain transactions that spend some outputs and create new ones. This construction is of great value for verifiable sidechains.

Base is a SNARK for a single transition that proves the existence of such t so that si+1 = update(t, si ). It is defined by a triplet (Setup, Prove, Verify)



## Cross-Chain Transactions

Why crucial, can't monitor each sidechain.

Explain components/primitives used to build cctp

forward easy

backward hard.

first paper: decentralized certifiers. that were registering themselves in the MC and were responsible for signing withdrawal certificates.

In Zendoo, we avoid direct reliance on certifiers or any other special type of actors assigned to validate withdrawal certificates. Instead, we are going to leverage SNARKs [6, 7, 19] to provide means for the mainchain to effectively validate withdrawals.

### Forward Transactions

### Backward Transactions

## Summary






### FR

https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf













### Using zkSNARKS 

zkSNARKs. Proof system.

mostly proof of coin ownership. But this is from context. Proof that computation was executed correctly. in case of UTXO ownership this means, that a previously unspent UTXO was used as an inputnand the spending conditions were satisfied.

Also possible to construct proof for correct state transitions of the system - new blocks. State *s*, transition *t*.

Transition function \\(update (t_i, s_i)\\)

System starts in state 1 (\\s_1\\). First transition is transition 1 (\\t_1\\). The transition function takes these two parameters, the initial state and the first set of transition instructions (read: transactions) and computes the next state (\\s_2\\)

$$
update(t_1, s_1) = s_2
$$

The same logic applies for the second state transition. Based on (\\s_1\\) and the second transition (\\t_1\\) the third state (\\s_2\\) is computed.

$$
update(t_2, s_2) = s_3
$$

Now, the current state can always be computed by taking the initial state and all transitions (\\t_i\\) that have happened since. It allows one to subsequently compute every state the system was in. In our example, the third state (\\s_3\\) can be computed via

$$
update(t_2, update(t_1, s_1)) = s_3
$$

simply replaced (\\s_2\\) from the second formula with the left term of the first formula.

Recursive.

The general expression for this principle would be 

$$
update(t_n, update(t_{n-1}, update(..., update(s_1, t_1)))) = s_{n+1}
$$

### Recursion

> "Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.[1] Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time. At the opposite, recursion solves such recursive problems by using functions that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science."


![Recursive State Transitions](/assets/post_files/technology/expert/4.2-cross-chain-transactions/recursive-state.jpg)

$$
update(t_n, s_n) = update (t_n, updated(t_{n-1}, s_{n-1}))
$$

we would like to have a succinct proof of the following statement: “there exist such (t1, ..., tn) so that update(tn, update(tn−1, update(..., update(t1, s1)))) = sn+1”.

By applying this to blockchain, we will be able to provide succinct proofs of transition between some states si and sj (i < j). The state can be represented, for instance, as a list of unspent transaction outputs while transitions are regular blockchain transactions that spend some outputs and create new ones. This construction is of great value for verifiable sidechains.

Base is a SNARK for a single transition that proves the existence of such t so that si+1 = update(t, si ). It is defined by a triplet (Setup, Prove, Verify)

- Setup: proofing and verifying key are created
- Prove: proof *pi* is constructed based on the input si, si+1 and ti
- Verify: based on vk_Base,(si,si+1),π Base it is evaluated if the proof is true or false



## Cross-Chain Transactions

Why crucial, can't monitor each sidechain.

Explain components/primitives used to build cctp

forward easy

backward hard.

first paper: decentralized certifiers. that were registering themselves in the MC and were responsible for signing withdrawal certificates.

In Zendoo, we avoid direct reliance on certifiers or any other special type of actors assigned to validate withdrawal certificates. Instead, we are going to leverage SNARKs [6, 7, 19] to provide means for the mainchain to effectively validate withdrawals.