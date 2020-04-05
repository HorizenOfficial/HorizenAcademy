---
layout: post
type: article
title: "Expanding Blockchain with Sidechains"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/expanding-blockchain-with-sidechains/
topic: technology
level: expert
chapter: "What is a Blockchain?"
further_reads: [zendoo, blockstream_sidechains, zk_poker_a_simple_zk_snark_circuit, poa_erc20_token_bridge]
---

- [Use Cases for Sidechains](#use-cases-for-sidechains)
  * [Scalability](#scalability)
  * [Governace](#governace)
- [History of Sidechains](#history-of-sidechains)
  * [Pegged Sidechains](#pegged-sidechains)
    + [Symmetric vs. Asymmetric Peg](#symmetric-vs-asymmetric-peg)
  * [Ethereum Proof of Authority Sidechains](#ethereum-proof-of-authority-sidechains)
  * [Other Sidechain Constructions](#other-sidechain-constructions)
- [The Zendoo Protocol](#the-zendoo-protocol)
  * [Main Components](#main-components)
    + [The Mainchain Consensus Protocol - MCP](#the-mainchain-consensus-protocol---mcp)
    + [The Cross-Chain Transfer Protocol - CCTP](#the-cross-chain-transfer-protocol---cctp)
    + [The Sidechain Consensus Protocol - SCP](#the-sidechain-consensus-protocol---scp)
  * [Modifications of the Mainchain Protocol](#modifications-of-the-mainchain-protocol)
    + [Verification of Backward Transfers](#verification-of-backward-transfers)
      - [Proof Systems](#proof-systems)
      - [Recursion](#recursion)
      - [State Transition Proofs](#state-transition-proofs)
      - [Recursive State Transition Proofs](#recursive-state-transition-proofs)
      - [Using SNARKS - Succinct Non-Interactive Arguments of Knowledge](#using-snarks---succinct-non-interactive-arguments-of-knowledge)
      - [SNARK Usage in Latus Sidechain](#snark-usage-in-latus-sidechain)
    + [Sidechains Transactions Commitment](#sidechains-transactions-commitment)
    + [Withdrawal Safeguard](#withdrawal-safeguard)
    + [Sidechain Deployment](#sidechain-deployment)
- [Summary](#summary)

Blockchain technology offers some unique properties, such as achieving consensus among a group of unknown actors, given a strong incentive mechanism is in place. Building applications on blockchain technology can be challenging, though. Spinning up a small, application specific blockchain defies the argument that it is a secure and trustless technology. For that to hold true, you need a large number of shareholders in the system. The larger the group of network participants, the more secure the network.

Building directly on top of a public blockchain comes with other challenges. First, blockchains are not well suited for handling large amounts of data and/or transactions. Second, to deploy a new feature, which might be necessary for a single application, would require consensus building among the community of stakeholders and if only a small subset of participants might benefit from the feature, it is unlikely to ever be implemented. The risk of an unsecure implementation would simply outweight the benefit provided for most users.

This is why sidechains are a promising technology. On the one hand, sidechains benefit from the decentralization and security of the underlying main blockchain. On the other hand, they can be highly domain specific and developed with a special use case in mind. Adding and removing features does not depend on community consensus, as it only effects the users of the sidechain and not the overall network.

## Use Cases for Sidechains

To illustrate the above-mentioned benefits, let's look at some tangible use cases for sidechain constructions. Summarizing the section above, two major roadblocks to working with public blockchains are the scalability of public blockchain networks and the governance processes that make introducing new functionality challenging.

### Scalability

Use cases for sidechains include data- or transaction-heavy applications. An example of a transaction intensive use case would be an in-game payment system where users can earn and spend tokens in real time. If every reward was paid on the mainchain and the application had several thousand users at a given time a traditional blockchain would not be suited to handle the load. A sidechain with short block intervals and a more centralized consensus mechanism to verify transactions poses a solution.

One example of a data-intensive use case would be a supply chain tracking system. If such a system was used by several interacting parties, including producers, logistic companies as well as retailers, the amount of data would soon exceed the limits a public blockchain was able to handle reliably. A dedicated sidechain would probably include new types of transactions with additional data fields where identifiers of goods and other metadata could be stored. The blocksize would likely be increased, in order to store larger amounts of data per time unit.

### Governace

Another reason for deploying a sidechain would be to circumvent the consensus building process on a public network needed to launch a new feature and limit the risk when deploying it. If the technology deployed on a sidechain had a bug, only the sidechain would be effected but the mainchain would keep functioning as usual (given the underlying sidechain protocol is secure).

One possible use case in this context is the deployment of custom tokens using some form of token standard, similar to the ERC token family on Ethereum. While Horizen's mainchain does not support custom tokens, a sidechain could do so. Any developer could build such a sidechain without permission and without the risk of "breaking" things on the main network.

Some of the first sidechains we want to develop at Horizen include dedicated sidechains that support advanced smart contract logic, a sidechain for near instant payment settlement and a sidechain handling the treasury funds of the Zen Blockchain Foundation.

![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechains_M.jpg)

We consider sidechains an important technological step to expand the capabilities of distributed ledgers and make it suitable for a wider range of use cases. Hence, we are working hard on developing this technology and making it available to the broader market.

## History of Sidechains

Sidechains are a concept people have been looking into for years. The first proposal of sidechains was in 2014 and several teams are working on implementing them right now. When a blockchain is enabled to communicate with other blockchains, e.g. sidechains, or even non-blockchain systems, the transfer of data and assets can be moved off-chain, reducing stress on the system.

### Pegged Sidechains

The first mention of sidechains came from Adam Back et al. in a paper release in 2014. "[Enabling Blockchain Innovations with Pegged Sidechains](https://blockstream.com/sidechains.pdf)" introduced the technological concept of *pegged* sidechains that allow the transfer from on chain to another. The paper consequently also introduced much of the terminology still in use today when talking about sidechain constructions.

#### Symmetric vs. Asymmetric Peg

One distinction the authors draw, is between *symmetric* and *asymmetric pegs*. In a symmetrically pegged sidechain construction, the mainchain monitors the sidechain and vice versa. Because both systems are aware of each other, the transfer mechanism from the mainchain to a sidechain and back are the same - they are symmetric.

In an asymmetric two-way peg the situation is different, in that sidechains monitor the mainchain, but the mainchain does not track events on the sidechains. In consequence, the transfer mechanisms are *asymmetric*, depending on the direction of asset transfer. In this scenario the transfer of assets from main- to sidechain, a forward transfer, is simple because the sidechains monitor the mainchain and can verify the transactions themselves. The transfer of assets back to the mainchain, a backward transfer, is more complex because the mainchain needs to "be told" about these incoming transfers. One of the conclusions of the paper reads as follows:

> "The key observation is that any enhancement to Bitcoin Script can be implemented externally by having a trusted federation of mutually distrusting functionaries evaluate the script and accept by signing for an ordinary multisignature script."

In other words, this means an asymmetric sidechain can support most conceivable applications and internal transactions, as long as a group of validators forwards relevant transactions to the mainchain on behalf of the sidechain.

An asymmetric sidechain construction is desirable, because it allows the deployment of many different sidechains for different purposes without requiring consensus of the community, one of the reasons sidechains are useful in the first place. In a symmetric design, the mainchain would need to be updated with the deployment of every sidechain, rendering the reduced governance benefit useless.

### Ethereum Proof of Authority Sidechains

A notable sidechain construction based on the Ethereum blockchain is being built by the [POA Network](https://www.poa.network/) team. The authors Barinov, Baranov and Khahulin "[propose an open, permissioned network based on Ethereum protocol with Proof of Authority consensus by independent validators.](https://hackmd.io/@F67-rdJCQ0yHlzTN8AoRfw/HkV8Vw7_-?type=view)". The general design is asymmetric: sidechains monitor the mainchain but not vice versa. Deploying sidechains on top of a smart contract enabled blockchain is simpler compared to a Bitcoin-like blockchain, as forward as well as backward transfers can be handled through smart contracts instead of the core protocol.

Nonetheless, each sidechain in the POA Network does rely on a group of individuals, which verify backward transfers and broadcast them to the Ethereum mainchain.

> "Each project deploying the bridge must account for its own validators. It’s absolutely necessary for the project(s) to identify the set of individuals/nodes assigned to validate the bridge transactions. It’s important to note validators are required as part of any bridge launch." - [POA Network, Introducing the ERC20 to ERC20 TokenBridge](https://medium.com/poa-network/introducing-the-erc20-to-erc20-tokenbridge-ce266cc1a2d0)

### Other Sidechain Constructions

There is a range of other sidechain constructions being worked on. Drivechains are sidechains built on the Bitcoin network. Here, the verification of transactions from drive- to mainchain is performed by mainchain miners. The largest number of sidechain protocols builds on top of the Ethereum network. Besides the aforementioned POA network, Plasma is another noteworthy example. It was [presented](http://plasma.io/plasma-deprecated.pdf) by Jospeh Poon and Vitalik Buterin in 2017. It is based on smart contracts deployed on the Ethereum main net.

The sidechain constructions mentioned above assume one of two things: either the mainchain needs to monitor all sidechains to verify backward transfers, or the mainchain relies on some sort of certifiers to broadcast incoming backward transactions from the sidechains to mainchain. A [first iteration of Horizen's sidechain construction](https://www.horizen.global/assets/files/Horizen-Sidechains-Decoupled-Consensus-Between-Chains.pdf) relied on certifiers to sign backward transfers batched in withdrawal certificates.

Another promising approach to sidechains which relies on zk-SNARKs is [ZK Rollup](https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/zk-rollups/). It is based on Ethereum, utilizing [smart contracts]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-guaranteed-execution-with-smart-contracts %}) to enable cross-chain communication and transfers. While this approach has merits, it is limited in its application to blockchain protocols not supporting sophisticated smart contracts like most Bitcoin-based ledgers.

## The Zendoo Protocol

Horizen's sidechain implementation, the [Zendoo protocol](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf) was released early in 2020. It introduces "a standardized mechanism to register and interact with separate sidechain systems. By interaction, we mean the cross-chain transfer protocol, which enables sending a native asset to a sidechain and receiving it back in a secure and verifiable way without the need to know anything about the internal sidechain construction or operations."[^1]

In more general terms, the Zendoo protocol allows a Bitcoin-based blockchain protocol to interoperate with domain-specific blockchains or blockchain-like system. The [blockchain protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}) is only upgraded once to introduce the mechanism used to deploy a new sidechain and to enable cross-chain transfers.

The innovation introduced with Zendoo is that backward transfers can be verified by the mainchain without involving external validators or certifiers to bridge both chains. This is although the mainchain does not monitor sidechains (asymmetric peg) and also doesn't know anything about their internal structure. This is achieved through recursive proofs generated for each state transition of the sidechain, but more on that later.

### Main Components

Most sidechain constructions comprise three elements:

- The Mainchain Consensus Protocol - MCP
- The Cross-Chain Transfer Protocol - CCTP
- The Sidechain Consensus Protocol - SCP

![Horizen Sidechain Construction](/assets/post_files/technology/expert/1.3-sidechains/sidechain-elements.jpg)

These components can be highly dependent on one another, or highly decoupled. To provide maximum flexibility to sidechain developers the Zendoo protocol allows various degrees of freedom with regards to the SCP. The Cross-Chain Transfer Protocol serves as a bridge between MCP and all sidechain and is therefore fixed.

#### The Mainchain Consensus Protocol - MCP

The mainchain consensus protocol in the case of Horizen comprises the [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) and Nakamoto consensus algorithm, the [UTXO balance model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) and transparent as well as shielded transactions. The Zendoo specific parts of the MCP are the deployment of new sidechains via special transactions, a transaction to transfer assets to one of the sidechains as well as the verification of incoming transactions from sidechains.

#### The Cross-Chain Transfer Protocol - CCTP

The cross-chain transfer protocol is the bridge between main- and sidechain and is unified and fixed by the mainchain consensus protocol. It's two main components are forward and backward transfers. In forward transfers ZEN is sent from the mainchain to one of the sidechains. In backward transfers ZEN is returned to the mainchain. Because sidechains monitor the mainchain they can verify forward transfers themselves and the mechanism is straight forward (pun not intended). The mainchain on the other hand doesn't monitor sidechains. To be able to verify incoming backward transactions a more complex mechanism compared to forward transactions is needed. Withdrawal certificates are introduced, which are standardized containers that can hold a set of backward transfers. They are used to inform the mainchain of withdrawal requests.

#### The Sidechain Consensus Protocol - SCP

The sidechain consensus protocol includes all parameters of the sidechain. Typically, the consensus algorithm would describe the mechanism to agree on a single version of history. In this context, we also consider other parameters of the sidechain part of the consensus protocol.

A sidechain in Zendoo can run a different [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}), [accounting model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) or [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) than the mainchain. It doesn't even have to be a blockchain at all, as long as the system adheres to the cross-chain transfer protocol it is interoperable with the main blockchain.

A key component of the cross-chain transfer protocol are *withdraw certificate*. They are containers in which all backward transfers from a sidechain that happen within a given time period - the *withdraw epoch* - are grouped and broadcast to the mainchain collectively. Every sidechain needs a mechanism to generate valid withdraw certificates. Each sidechain also needs to define a proof system so the mainchain can verify incoming backward transfers. We'll get to proof systems shortly.

There is great freedom in the design of a Horizen-compatible sidechain. However, we do provided a reference implementation for a sidechain consensus protocol named Latus, based on IOHKs [Ouroboros protocl](https://eprint.iacr.org/2016/889.pdf) to make life easier on developers willing to build on Horizen. A detailed description of the Latus construction is out of scope for this article. We refer the interested reader to our [Zendoo paper](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf) to learn more about Latus.

### Modifications of the Mainchain Protocol

In order to allow the deployment and use of sidechains in a Bitcoin based blockchain, some modifications to the mainchain protocol are necessary.

- First, and most importantly, a mechanism to verify incoming *Withdraw Certificates* is needed.
- Second, a special type of transaction is introduced to deploy a sidechain.
- Third, a new data field in the mainchain block header is introduced, where a Merkle root of all sidechain related transactions is recorded.
- Fourth, a *forward transfer* is defined as a transaction sending assets to a sidechain.
- Lastly, *Withdraw Certificates* are introduced that allow the mainchain to process incoming backward transactions.

In the following sections we will go through the mainchain modifications that allow deploying and using sidechains. In the [chapter on transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-04-01-transactions %}), we dedicate an entire article to [cross-chain and sidechain-internal transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-cross-chain-transactions %}).

Understanding how the verification of sidechain transactions on the mainchain works without tracking them directly is crucial for understanding all other mainchain protocol changes, hence we will look at this mechanism first.

#### Verification of Backward Transfers

As we said before, most sidechain protocols including our own first iteration rely on some kind of certifiers or validators that act as a bridge for backward transfers. These entities monitor one or more sidechains, collect all backward transactions and broadcast them on the mainchain. These validators can either be a trusted group of centralized actors, or a decentralized group of network participants that are incentivized, usually via transaction fees, to behave honestly. A common assumption is an honest majority among verifiers, but despite strong incentives for honest behavior it remains just an assumption.

Ideally, backward transfers are objectively verifiable without the need to rely on intermediaries. This is the reason we built a backward transfer mechanism relying on a proof system rather than human entities.

##### Proof Systems

On the highest level a proof system allows a prover to prove to a validator, that a given statement is true, e.g. a computation was performed correctly. Instead of the validator having to redo the entire computation and verify the result, the prover can generate a proof and provide this instead. A proof comprises a set of values that the verifier uses to compute a binary output: true or false. When the verification function returns true the computation was performed correctly, if it returns false it wasn't.

Getting more concrete, one application for a proof system is the verification of state transitions in a given system. A [blockchain is a state machine](https://academy.horizen.global/technology/expert/utxo-vs-account-model/#the-blockchain-is-a-state-machine) in the sense that with every block new transactions are recorded in the ledger and the state of the system transitions to the next state. Nodes verify each block before they add it to their version of the ledger. They check if transactions have valid [digital signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) attached, if only previously [unspent transaction outputs]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) are spent and if the [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) attached to the block meets the current [difficulty](https://academy.horizen.global/technology/expert/proof-of-work/#finding-a-nonce). With a proof system, a miner could generate a proof that the state transition (new block) was perfomed according to the protocol. All other nodes would simply have to verify if the proof is correct and could save themselves from verifying each part of the block individually.

Zero-Knowledge proofs such as zkSNARKs are best known for their application in privacy preserving cryptocurrencies. Horizen, Zcash and other protocols utilize zkSNARKs to enable the private transfer of money. When proofs are used for the private transfer of money, the following happens: A user will create a transaction according to the protocol of the blockchain. Instead of broadcasting this transaction in plaintext to the network, the user generates a proof that the transaction is valid according to the rules and broadcast this proof instead. The proof entails all the necessary information about the transaction: the previously unspent inputs, the valid digital signature(s) satisfing the spending conditions of the inputs and the transaction outputs being the most important parameters.

Once broadcast, nodes will verify the proof, instead of the plaintext transaction which remains private. For this to work, an important property of the proof system comes down to *soundness*. *Soundness* refers to the property of a proof system that generating a proof that evalutes to true, although a statement was false is negligible. In simple terms: you cannot fake a proof from a mathematical standpoint.

In Zendoo, each sidechain is generating a proof for its subsequent state transitions. When a Withdraw Certificate is submitted to the mainchain a proof of correct state transitions is attached. Miners on the mainchain will verify this proof before including the Withdraw Certificate in a mainchain block and in turn accepting incoming backward transfers. This is, on a high level, how certifiers can be replaced through an algorithm. But how exactly are proofs for state transitions generated? Recursively!

##### Recursion

To understand the generation of state transition proof we need to introduce the concept of recursion. It is not only useful for understanding our sidechain implementation, but also one of the most important concepts in computer science in general.

> "Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem." - Wikipedia

The key idea when solving a problem recursively is, that the function solving the problem can call itself. This is best illustrated in an example. The most common and intuitive example is calculating the [factorial](https://en.wikipedia.org/wiki/Factorial) of a given number. A general expression for the factorial of a number is

$$
n! = n \cdot (n-1) \cdot (n-2) \cdot ... \cdot 1
$$

Hence, the factorial of 5 is

$$
5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120
$$

Writing a function that calculates the factorial of a given number is most elegantly achieved using recursion. The idea is that the factorial of the number 5 is equal to five times the factorial of the number 4: \\(5! = 5 \cdot 4!\\). The solution to the problem *5!* then depends on a smaller instance of the problem, *4!*.

![Recursively Calculating the Factorial of any Number](/assets/post_files/technology/expert/1.3-sidechains/recursive-factorial.jpg)

In the example above, calculating the factorial of 5, the recursive function will start with the first recursive case \\(5! = 5 \cdot 4!\\). When this instance of the function is executed, it will open another instance of the function that computes the factorial of 4 - and so on. This continues until the *base case* is reached. The base case is the factorial of the number 2, which equals 2. Now, the different instances of the function are closed subsequentially after returning their result to the next highest instance of the same function. The base case returns 2 to the next highest instance, which will use the result to compute *3!* and so on. In a last step, the final result, 120, is returned and the highest instance of the function is closed now that is has finished it's job.

In C, the function calculating the factorial can elegantly be written as follows. You can see how the function `factorial` is used within the function itself (`factorial(n-1)`). Even without a basic understanding of software development you might appreciate the simplicity of the function below. In just four lines of code computing the factorial is achieved. 

```C
long factorial(int n)
{
  if (n == 0)   //Base Case
    return 1;
  else          //Recursive Case(s)
    return (n*factorial(n-1));
}
```

What we want to achieve in the context of our sidechains is to have a proof of a state transitions. If the state transition is proven, the final state and hence all backward transfers are automatically proven as well. But how does recursion apply to this?

##### State Transition Proofs

The *state transition logic* of a blockchain can be seen as a function that takes the current state (\\s_i\\) and the most recent set of transactions (\\t_i\\) as an input and returns the next state (\\s_{i+1}\\). The factorial of five can be expressed as the number five times the result of the function for computing the factorial of four. The current state can also be computed based on the current transition and the result of the function for computing the most recent state. Let us look at a tangible example:

![States and State Transitions](/assets/post_files/technology/expert/1.3-sidechains/states-and-state-transitions.jpg)

A sidechain starts in state 1 (\\s_1\\) with it's genesis block. The first transition, comprising all transactions to be included in the first "real" block, is transition 1 (\\t_1\\). The transition function, let's call it `update`, takes these two parameters, the initial state (Genesis Block) and the first transition (read: transactions) and computes the next state (\\s_2\\) as long as the inputs constitute valid arguments to the `update`function.

$$
s_2 = update(t_1, s_1)
$$

The same logic applies for the second state transition. Based on state (\\s_2\\) and the second transition (\\t_2\\) the `update` function computes the third state (\\s_3\\).

$$
s_3 = update(t_2, s_2)
$$

Now, the current state of the sidechain can always be computed from the initial state (\\s_1\\) and all transitions (\\t_i\\) the system underwent. It allows one to subsequently compute every state the system went through. In our example, the third state (\\s_3\\) can be computed as

$$
s_3 = update(t_2, update(t_1, s_1)).
$$

We simply replaced (\\s_2\\) from the second formula in this section with the right term of the first formula.

##### Recursive State Transition Proofs

The construction shown above follows the same pattern we discussed when calculating the factorial. Do you recognize the recursive pattern? The function `update` calls itself subsequently and opens new instances of the same function until the base case is reached.

![Recursive State Transitions](/assets/post_files/technology/expert/1.3-sidechains/recursive-state.jpg)

The base case here is the first state transition resulting in state \\(s_2\\). Once this base case is reached, the different instances of the `update` function return their result to the next highest instance of the same function until finally, the current state is returned and all instances of the function are closed.

A general mathematical expression for this is

$$
s_{n+1} = update(t_{n}, s_{n}) = update(t_{n}, update (t_{n-1}, s_{n-1})
$$

This construction is of great value for verifiable sidechains. Not only can states be computed recursively, but so can proofs for each state and in turn each state transition. What is needed for the Zendoo protocol is a proof of the statement:

<center>

"There was a series of state transitions \\((t_1, ..., t_n\\)) and by applying these state transitions to the initial state \\(s_1\\) one after another the state \\(s_{n+1})\\ is reached.

</center>

We now understand how states can be computed recursively. But why do we want to compute a proof for each of those transitions? Remember that the mainchain cannot monitor all the different sidechains and verify the individual state transitions on each chain. What it can do though, is verify a proof submitted with each incoming Withdrawal Certificate. When validated, this proof will return `true` if the sidechain was operated as intended and `false` in case it didn't. Backward transfers included in a withdraw certificate are accepted by the mainchain, if and only if the attached proof evaluates to `true`.

##### Using SNARKS - Succinct Non-Interactive Arguments of Knowledge

So how does generating a proof work exactly for a given sidechain? First, there are a wide range of proof systems in existence. The proof system used for the Zendoo sidechain construction is a SNARK proof system - an acronym for *Succinct Non-Interactive Arguments of Knowledge*. Let's look at what this means:

- *Succinct* refers to the proofs being "short" in the sense of computationally inexpensive to compute and verify. 
- *Non-interactive* means that the prover and verifier don't have to be online at the same time. With the ball-example above, the prover and verifier have to go back and forth several times before the verifier actually has proof of the claim. With non-interactive proofs, the prover can construct the proof entirely on his own without the need for communication in the process. This proof can be written to the blockchain to be verified at any time.
- *Arguments of Knowledge* describes the proof being computationally sound, i.e. no adversary can construct a false proof even if he has access to huge computational resources.

SNARKs enable you to produce proofs of constant size for almost any type of computation, for instance an arbitrary number of state transitions in a stateful system. Here, they are leveraged to provide a means for the mainchain to effectively validate withdrawals. A SNARK proving system comprises a triplet of algorithms: *Setup*, *Prove*, and *Verify*.

When a SNARK system is setup, first a proving key \\(pk\\) and a verification key \\(vk\\) are generated for the system *C*.

$$
(pk, vk) \leftarrow Setup(C)
$$

To prove a computation was performed correctly, or in more general terms, a *statement*, a proof \\(\pi\\) is computed. Generating a proof for the correct state transition (\\t_1\\) from state (\\s_1\\) to the second state (\\s_2\\) happens based on four inputs:

$$
\pi \leftarrow Prove(pk, (s_1, s_2), t_1)
$$

- the proving key \\(pk\\)
- the initial state (\\s_1\\)
- the transition (\\t_1\\)
- and the resulting state (\\s_2\\).

Just like we computed states recursively, we can compute proofs recursively. The logic is exactly the same: starting from a base case (the first state transition) proofs are sequentially merged until a single proof for the state in question remains. This proof can now be broadcast to the mainchain to be verified.

Verifying a proof meant to prove a state n (\\s_n\\) was computed correctly happens based on four inputs:

$$
true/false \leftarrow Verify(vk, (s_1, s_n), \pi)
$$

- the verification key \\(vk\\)
- the initial state (\\s_1\\)
- the final state (\\s_n\\)
- and the proof \\(\pi\\)

![Proof Generation and Verification](/assets/post_files/technology/expert/1.3-sidechains/proof-generation-and-verification.jpg)

Proofs for the correct execution of the sidechain logic will be generated periodically, one for every withdrawal epoch. It's important to note that proof generation doesn't have to happen entirely trustless. A sidechain might just as well implement a Proof of Authority scheme were a group of trusted certifiers generates proofs.

Now that there is a basic understanding of what proof systems are, how recursion works, and how it is applied to generate proofs for any state (block) of the sidechain and in turn all withdrawals, we continue by looking at the remaining modifications to the mainchain which are needed to enable sidechains.

##### SNARK Usage in Latus Sidechain

It is ultimately up to a sidechain developer how proofs of state transitions are constructed and there is more than one way to do it. In Horizen's reference sidechain implementation, the Latus sidechain, proofs are first generated for individual transactions. These proofs are then merged pairwise to get a proof for the entire block.

Once a withdrawal epoch has ended, the proofs for all blocks contained in that epoch are merged. This yields a proof of the entire epoch and all transactions that have happened within it. This proof of the withdrawal epoch is now used to generate a final proof attached to the withdraw certificate for that epoch. This final proof does not only legitimize all backward transfers to the mainchain. It also proves all mainchain blocks of the epoch were referenced and all forward transfers were processed.

The entire process of key and proof generation as well as proof verification is quite sophisticated and this article aims to explain the general process without omitting relevant details. Some mechanisms described herein are simplified to convey the concept to a wider audience. Please read the full paper for a more detailed description.

#### Sidechains Transactions Commitment

The structure of the mainchain block headers was upgraded to enable sidechains. A new data field, the Sidechain Transactions Commitment (SCTxsCommitment) was introduced. The SCTxsCommitment is basically a Merkle root of an additional [Merkle tree](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#merkle-trees). Besides the regular Merkle root included in a block header serving as a summary of all transactions, this second Merkle tree comprises all sidechain-related transactions, namely:

- **Forwart Transfers** (FTs)sending assets from main- to sidechain
- **Withdrawal Certificates** (WCerts) communicating Backward Transfers to the mainchain
- **Backward Transfer Requests** (BTRs) initiating backward transfers from within the mainchain
- **Ceased Sidechain Withdrawals** (CSW) allowing a user to withdraw assets from a sidechain which has become inactive

All these sidechain-related transactions are placed into a merkle tree, grouped by sidechain identifiers in different branches, and the resulting Merkle tree root is placed in the mainchain block header as the Sidechain Transactions Commitment. Including this data in the [block headers](https://academy.horizen.global/technology/expert/blockchain-as-a-data-structure/#the-block-header) allows sidechain nodes to easily synchronize and verify sidechain related transactions (sidechain DO monitor the mainchain) without the need to transmit the entire mainchain block. Furthermore, it allows the construction of a SNARK proving that all sidechain-related transactions of a given mainchain block have been processed correctly.

#### Withdrawal Safeguard

One of the most devastating bugs a blockchain can suffer from is a bug that allows an uncontrolled inflation of the monetary supply. One has to consider an event where a malfunctioning sidechain is trying to transfer more assets to the mainchain than it initially received. This could be out of malicious intent, or simply an honest mistake.

In order to prevent this event, a withdrawal safeguard is implemented. The mainchain keeps track of how much money was transferred to a given sidechain and will only accept incoming backward transfers up to that amount. This way an uncontrolled inflation becomes impossible.

#### Sidechain Deployment

A new sidechain in Zendoo needs to be registered with the mainchain in a special type of transaction. Any user can build a new sidechain and submit this bootstrapping transaction wherein several important parameters of the sidechain are defined.

First, a unique identifier, the `ledgerId` for the sidechain is defined in the bootstrapping transaction. Next, it is defined from which mainchain block onward the sidechain will become active. The length of a withdrawal epoch, defined over a number of mainchain blocks, is also defined in this first transaction. One withdraw certificate per withdraw epoch is submitted to the mainchain, acompanied by the proof that all state transitions were valid.

The choice of the withdrawal epochs length depends on parameters such as the block time of a sidechain. If blocks are produced at a high frequency, for instance because the sidechain is build for near-instant in-game payments, the withdrawal epoch in terms of mainchain blocks might be short, so that each withdrawal certificate doesn't become too large in size due to the number of included backward transfers.

Next, a number of cryptographic keys are proclaimed for each sidechain, namely the verification keys needed to verify proofs generated on the sidechain. There is a verification key \\(vk_{WCert}\\) for withdraw certificate proofs, a verification key \\(vk_{BTR}\\) for [Backward Transfer Request](https://academy.horizen.global/technology/expert/cross-chain-transactions/#backward-transfer-requests) proofs and a verification key \\(vk_{CSW}\\) for [Ceased Sidechain Withdrawal](https://academy.horizen.global/technology/expert/cross-chain-transactions/#ceased-sidechain-withdrawals) proofs. Lastly, it is defined how the proof data will be provided from the sidechain to the mainchain (number and types of included data elements).

## Summary

This was a rather long read! Let us recap this article shortly, before we move on.

First, we laid out why sidechains are useful. They increase a systems scalability and allow the deployment of new experimental features without having to achieve consensus among all network participants.

Several sidechain implementations exist, some of them more advanced than others. A common shortcoming is that these constructions often times either rely on the mainchain keeping track of sidechains, or they require some sort of certifiers or validators to process backward transfers from side- to mainchain. The Zendoo protocol allows an asymmetric sidechain construction where the mainchain doesn't monitor sidechains but can rely on objectively verifiable proofs to validate backward transfers.

Zendoo comprises three main elements: the mainchain consensus protocol, the sidechain consensus protocol for which the Latus reference implementation is provided and the cross-chain tranfer protocol. MCP and CCTP are fixed, while there are many degrees of freedom with regards to the SCP.

Next, we looked at the necessary modifications to Horizen's mainchain protocol that allow the deployment of sidechains. In order to understand the recursive proof system that allows the verification of backward transfers without certifiers, we introduced proof systems in general. We showed how recursion can be used to elegantly solve mathematical problems such as computing the factorial of a number and how the same concept is useful for computing state transitions and proofs thereof.

Another modifications to the mainchain is the addition of the Sidechain Transactions Commitment (SCTxsCommitment) serving as a summary of all sidechain related transactions on the mainchain in the form of a Merkle tree. The withdrawal safeguard protects against unintended inflation originating from a buggy or malicious sidechain. Lastly, a special type of bootstrapping transaction is needed to allow the permissionless deployment of a sidechain.

In chapter four, covering [transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-04-01-transactions %}) we will come back to our sidechain construction again to take a close look at [cross-chain transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-cross-chain-transactions %}).


fr  


[19] Izaak Meckler and Evan Shapiro. Coda : Decentralized cryptocurrency at scale, 2018. https://cdn.codaprotocol.com/v2/static/coda-whitepaper-05-10-2018-0.pdf.