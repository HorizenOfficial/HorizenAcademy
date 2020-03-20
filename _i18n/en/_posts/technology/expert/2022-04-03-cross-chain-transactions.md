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

**shorten intro! talk more about transactions! otherwise siidechain article rather than CCT article**

In this article we will take a close look at transactions that move assets between different blockchains - more specifically sidechains. Sidechains are blockchains which are interoperable with an existing mainchain. In order to transfer assets from one chain to another a special type of transaction is needed - the cross-chain transaction.

But why sidechains you might ask. While blockchain technology can be applied in various ways and has the potential to solve many real world problems that could not be solved with traditional web 2.0 tools, it comes with certain challenges. Transaction throughput is limited and development on public networks is slow because network participants need to reach consensus on improvements before they can be deployed. Sidechains are an elegant way to overcome current limitations regarding scalability, interoperability, and governance in the blockchain ecosystem.

Sidechains are a concept people have been looking into for years. The first proposal of sidechains was developed by Back et al. in 2014 and several teams are working on implementing them. When a blockchain is enabled to communicate with other blockchains, e.g. sidechains, or even non-blockchain systems, the transfer of data and assets can be moved off-chain, reducing stress on the system. Deploying a sidechain also does away with the need to reach consensus on a given feature or application among all nodes.

![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_M.jpg)

Use cases for sidechains include data- or transaction-heavy applications. An example of a transaction intensive usecase would be an in-game payment system where users can earn and spend tokens in real time. If every reward was conducted on the main chain and the application had several thousand users at a given time a traditional blockchain would not be suited to handle the load.

An example of a data-intensive use case would be a supply chain tracking system. If such a system was used by several interacting parties, including producers, logistic companies as well as retailers the amount of data would soon exceed the limits of public blockchains.

Another reason for deploying a sidechain would be to circumvent the consensus building process on a public network needed to launch a new feature and limit the risk when deploying it. If the technology deployed on a sidechain had a bug, only the sidechain would be effected but the mainchain would keep functioning as usual, given the initial sidechain protocol is secure.

We consider sidechains an important technological step to expand the capabilities of blockchain technology and make it suitable for a wider range of use cases. This is why we built Zendoo.

## Horizen Sidechains - The Zendoo Protocol

Horizen's sidechain implementation, the [Zendoo protocol](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf) was released early in 2020. The Horizen mainchain is based on the Bitcoin protocol maintaining a public ledger of transactions. With the introduction of the Zendoo protocol "the mainchain supports a standardized mechanism to register and interact with separate sidechain systems. By interaction, we mean the cross-chain transfer protocol, which enables sending a native asset to a sidechain and receiving it back in a secure and verifiable way without the need to know anything about the internal sidechain construction or operations."[^1]

In more general terms, the Zendoo protocol allows a Bitcoin-based blockchain protocols to interoperate with domain-specific blockchains or blockchain-like system. The [blockchain protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}) only needs to be upgraded once to introduce the mechanism used to deploy a new sidechain and to enable cross-chain transfers.

The innovation introduced with Zendoo is that the mainchain does not have to know anything about the internal structure of the sidechain. It can run a different [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}), [accounting model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) or [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) and doesn't even have to be a blockchain at all. As long as the system adheres to the cross-chain transfer protocol it is interoperable with the main blockchain.

### The Three Main Components in Zendoo

The overall system in Zendoo comprises three key elements:

- The Mainchain Consensus Protocol - MCP
- The Cross-Chain Transfer Protocol - CCTP
- The Sidechain Consensus Protocol - SCP

![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechain-elements.jpg)

#### The Mainchain Consensus Protocol - MCP

The mainchain consensus protocol in the case of Horizen comprises the [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) consensus algorithm, the [UTXO balance model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) and transparent as well as shielded transactions. The Zendoo specific parts of the MCP are the deployment of new sidechains via special transactions, a transaction to transfer assets to one of the sidechains as well as the verification of incoming transactions from sidechains.

#### The Cross-Chain Transfer Protocol - CCTP

The cross-chain transfer protocol is the bridge between main- and sidechain and is unified and fixed by the mainchain consensus protocol. It's two main components are forward and backward transfers. In forward transfers ZEN is sent from the mainchain to one of the sidechains. In backward transfers ZEN is returned to the mainchain. Because sidechains monitor the mainchain they can verify forward transfers themselves and the mechanism is straight forward (pun not intended). The mainchain on the other hand doesn't know anything about the sidechain except for it's existence. To be able to verify incoming backward transactions a more complex mechanism is needed. We introduce withdrawal certificates, standardized containers that can hold a set of backward transfers, which are used to inform the mainchain of withdrawal requests.

Many sidechain constructions rely on some sort of validators or certifiers to authorize backward transfers. In fact, a [first iteration of our sidechain construction](https://www.horizen.global/assets/files/Horizen-Sidechains-Decoupled-Consensus-Between-Chains.pdf) relied on certifiers to sign backward transfers batched in withdrawal certificates.

#### The Sidechain Consensus Protocol - SCP

The sidechain consensus protocol includes all parameters of the sidechain. Typically the consensus algorithm would describe the mechanism used to have all network participants agree on a single version of history. In this context we also consider the accounting system, the types of supported transactions and possibly tokens, as well as the withdrawal certificate genertion and the SNARK circuit used.

## Verification with SNARKS instead of Validators

As we said before, most sidechains including our first iteration rely on some kind of certifiers or validators that act as a bridge for backward transfers. These entities monitor one or more sidechains, collect all backward transactions and broadcast them on the mainchain. These validators can either be a trusted group of centralized actors, or a decentralized group of network participants that are incentivized, usually via transaction fees, to behave honestly. Despite strong incentives being in place, a common assumption in these decentralized validator settings is an honest majority.

Ideally, backward transfers are objectively verifiable without the need to rely on intermediaries. This is the reason we build a backward transfer mechanism which relies on a proof system - namely SNARKs: Succinct Non-Interactive Arguments of Knowledge.

### Proof Systems

Zero-Knowledge proofs such as SNARKs are best known for their application in privacy preserving cryptocurrencies. Horizen, Zcash and other protocols utilize zkSNARKs to enable the private transfer of money. But to really understand zero knowledge proofs we need to take a step back and look at them from a high level first.

On the highest level a proof system allows a verifier to prove to a validator, that a given statement is true, e.g. computation was performed correctly. Instead of having to provide the verifier with an input and an output for him to redo the computation and verify the result, the verifier can generate a proof and provide it. This proof comprises a set of values that the veri

Getting more concrete, one application for a proof system is the verification of state transitions. A [blockchain is a state machine](https://academy.horizen.global/technology/expert/utxo-vs-account-model/#the-blockchain-is-a-state-machine) in the sense that with every block new transactions are recorded on the ledger and the state of the system transitions according to the state transition logic. Nodes verify each block before they add it to their version of the ledger. They check if transactions have valid [digital signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) attached, if only previously [unspent transaction outputs]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) are used as inputs and if the Proof of Work attached to the block meets the current [difficulty](https://academy.horizen.global/technology/expert/proof-of-work/#finding-a-nonce). With a proof system, the miner could generate a proof that the state transition (new block) was perfomed according to the protocol. All other nodes would simply have to verify if the proof is correct and could save themselves from verifying each part of the block individually.

When zero knowledge proofs are used for the private transfer of money, what happens is the following: A user will create a transaction according to the protocol of the blockchain. Instead of broadcasting this transaction in plaintext to the entire network, the users generates a proof that the transaction is valid according to the rules. The prove entails all the necessary information about the transaction: the inputs where previously unspent, the digital signatures satisfy the spending conditions defined in the Pubkey Script and sum of the outputs is less than or equal to the sum of the inputs. All nodes will verify the proof, instead of the transaction itself. In order for this to work, an important property of the proof system comes down to *soundness*.

*Soundness* refers to the property that generating a proof that evalutes to true, although a statement was false is negligible. In simple terms: you cannot fake a proof from a mathematical standpoint.



m


Also possible to construct proof for correct state transitions of the system - new blocks. State *s*, transition *t*.

- Setup: proofing and verifying key are created
- Prove: proof *pi* is constructed based on the input si, si+1 and ti
- Verify: based on vk_Base,(si,si+1),π Base it is evaluated if the proof is true or false

we would like to have a succinct proof of the following statement: “there exist such (t1, ..., tn) so that update(tn, update(tn−1, update(..., update(t1, s1)))) = sn+1”.

### Recursion

> "Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.[1] Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time. At the opposite, recursion solves such recursive problems by using functions that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science."

common example faculty, easy to understand.

function calling itself until base case is reached. GIF?!

![Recursively Calculating the Faculty of any Number](/assets/post_files/technology/expert/4.2-cross-chain-transactions/recursive-faculty.jpg)

lead through faculty example

we would like to have a succinct proof of the following statement: “there exist such (t1, ..., tn) so that update(tn, update(tn−1, update(..., update(t1, s1)))) = sn+1”.

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

ledgerId amount
−
−
def
FT = (ledgerId, receiverMetadata, amount),
a unique identifier of a previously created and active sidechain to which coins are transferred;
a number of coins to transfer;
some metadata for receiving sidechain B (e.g., a receiver’s address); its structure is not fixed in the mainchain and can consist of different variables of predefined types depending on a sidechain’s construction; its semantic meaning is not known to the mainchain.

UTXO-based blockchain system (e.g. Bit- coin or Horizen), we can consider FT as a special unspendable transaction output in a regular multi-input multi-output transaction

### Backward Transactions

## Summary



## Footnotes

[^1]: Garoffolo, Kaidalov, Oliynykov, [Zendoo: a zk-SNARK Verifiable Cross-Chain Transfer Protocol Enabling Decoupled and Decentralized Sidechains](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf)


### FR














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