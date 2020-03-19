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

![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_M.jpg)


## Horizen Sidechains - The Zendoo Protocol

differnt types, mainchain can work with them without knowing their internal structure, e.g. consensus....

doesn't even have to be a blockchain, any system that uses communication method

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




## Cross-Chain Transactions

Why crucial, can't monitor each sidechain.

Explain components/primitives used to build cctp

### Forward Transactions

### Backward Transactions

## Summary






### FR

https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf