---
layout: post
type: article
title: "Expanding Blockchain with Sidechains"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/expanding-blockchain-with-sidechains/
topic: technology
level: expert
chapter: "What is a Blockchain?"
further_reads: [zendoo]
---

Blockchain technology offers some unique properties, such as achieving consensus among a group of unknown actors, given a strong incentive mechanism is in place. Building applications on blockchain technology can be challenging, though. Spinning up a small, application specific blockchain defies the argument that it is a secure and trustless technology. For that to hold true, you need a large number of shareholders in the system. The larger the group of network participants, the more secure the network.

Building directly on top of a public blockchain comes with other challenges. First, blockchains are not well suited for handling large amounts of data and/or transactions. Second, to deploy a new feature, which might be necessary for a single application, would require consensus building among the community of stakeholders and if only a small subset of participants might benefit from the feature, it is unlikely to ever be implemented. The risk of an unsecure implementation would simply outweight the benefit provided for most users.

This is why sidechains are a promising technology. On the one hand, sidechains benefit from the decentralization and security of the underlying main blockchain. On the other hand, they can be highly domain specific and developed with a special use case in mind. Adding and removing features does not depend on community consensus, as it only effects the users of the sidechain and not the overall network.

# Use Cases for Sidechains

To illustrate the above-mentioned benefits, let's look at some tangible use cases for sidechain constructions. Summarizing the section above, two major roadblocks to working with public blockchains are the scalability of public blockchain networks and the governance processes that make introducing new functionality challenging.

## Scalability

Use cases for sidechains include data- or transaction-heavy applications. An example of a transaction intensive use case would be an in-game payment system where users can earn and spend tokens in real time. If every reward was paid on the mainchain and the application had several thousand users at a given time a traditional blockchain would not be suited to handle the load. A sidechain with short block intervals and a more centralized consensus mechanism to verify transactions poses a solution.

One example of a data-intensive use case would be a supply chain tracking system. If such a system was used by several interacting parties, including producers, logistic companies as well as retailers, the amount of data would soon exceed the limits a public blockchain was able to handle reliably. A dedicated sidechain would probably include new types of transactions with additional data fields where identifiers of goods and other metadata could be stored. The blocksize would likely be increased, in order to store larger amounts of data per time unit.

## Governace

Another reason for deploying a sidechain would be to circumvent the consensus building process on a public network needed to launch a new feature and limit the risk when deploying it. If the technology deployed on a sidechain had a bug, only the sidechain would be effected but the mainchain would keep functioning as usual (given the underlying sidechain protocol is secure).

One possible use case in this context is the deployment of custom tokens using some form of token standard, similar to the ERC token family on Ethereum. While Horizen's mainchain does not support custom tokens, a sidechain could do so. Any developer could build such a sidechain without permission and without the risk of "breaking" things on the main network.

Some of the first sidechains we want to develop at Horizen include dedicated sidechains that support advanced smart contract logic, a sidechain for near instant payment settlement and a sidechain handling the treasury funds of the Zen Blockchain Foundation.

![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_D.jpg)
![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechains_M.jpg)

We consider sidechains an important technological step to expand the capabilities of distributed ledgers and make it suitable for a wider range of use cases. Hence, we are working hard on developing this technology and making it available to the broader market.

# History of Sidechains

Sidechains are a concept people have been looking into for years. The first proposal of sidechains was in 2014 and several teams are working on implementing them right now. When a blockchain is enabled to communicate with other blockchains, e.g. sidechains, or even non-blockchain systems, the transfer of data and assets can be moved off-chain, reducing stress on the system.

## Pegged Sidechains

The first mention of sidechains came from Adam Back et al. in a paper release in 2014. "[Enabling Blockchain Innovations with Pegged Sidechains](https://blockstream.com/sidechains.pdf)" introduced the technological concept of *pegged* sidechains that allow the transfer from on chain to another. The paper consequently also introduced much of the terminology still in use today when talking about sidechain constructions.

### Symmetric vs. Asymmetric Peg

One distinction the authors draw, is between *symmetric* and *asymmetric pegs*. In a symmetrically pegged sidechain construction, the mainchain monitors the sidechain and vice versa. Because both systems are aware of each other, the transfer mechanism from the mainchain to a sidechain and back are the same - they are symmetric.

In an asymmetric two-way peg the situation is different, in that sidechains monitor the mainchain, but the mainchain does not track events on the sidechains. In consequence, the transfer mechanisms are *asymmetric*, depending on the direction of asset transfer. In this scenario the transfer of assets from main- to sidechain, a forward transfer, is simple because the sidechains monitor the mainchain and can verify the transactions themselves. The transfer of assets back to the mainchain, a backward transfer, is more complex because the mainchain needs to "be told" about these incoming transfers. One of the conclusions of the paper reads as follows:

> "The key observation is that any enhancement to Bitcoin Script can be implemented externally by having a trusted federation of mutually distrusting functionaries evaluate the script and accept by signing for an ordinary multisignature script."

In other words, this means an asymmetric sidechain can support most conceivable applications and internal transactions, as long as a group of validators forwards relevant transactions to the mainchain on behalf of the sidechain.

An asymmetric sidechain construction is desirable, because it allows the deployment of many different sidechains for different purposes without requiring consensus of the community, one of the reasons sidechains are useful in the first place. In a symmetric design, the mainchain would need to be updated with the deployment of every sidechain, rendering the reduced governance benefit useless.

## Ethereum Proof of Authority Sidechains

A notable sidechain construction based on the Ethereum blockchain is being built by the [POA Network](https://www.poa.network/) team. The authors Barinov, Baranov and Khahulin "[propose an open, permissioned network based on Ethereum protocol with Proof of Authority consensus by independent validators.](https://hackmd.io/@F67-rdJCQ0yHlzTN8AoRfw/HkV8Vw7_-?type=view)". The general design is asymmetric: sidechains monitor the mainchain but not vice versa. Deploying sidechains on top of a smart contract enabled blockchain is simpler compared to a Bitcoin-like blockchain, as forward as well as backward transfers can be handled through smart contracts instead of the core protocol.

Nonetheless, each sidechain in the POA Network does rely on a group of individuals, which verify backward transfers and broadcast them to the Ethereum mainchain.

> "Each project deploying the bridge must account for its own validators. It’s absolutely necessary for the project(s) to identify the set of individuals/nodes assigned to validate the bridge transactions. It’s important to note validators are required as part of any bridge launch." - [POA Network, Introducing the ERC20 to ERC20 TokenBridge](https://medium.com/poa-network/introducing-the-erc20-to-erc20-tokenbridge-ce266cc1a2d0)

## Other Sidechain Constructions

There is a range of other sidechain constructions being worked on. Drivechains are sidechains built on the Bitcoin network. Here, the verification of transactions from drive- to mainchain is performed by mainchain miners. The largest number of sidechain protocols builds on top of the Ethereum network. Besides the aforementioned POA network, Plasma is another noteworthy example. It was [presented](http://plasma.io/plasma-deprecated.pdf) by Jospeh Poon and Vitalik Buterin in 2017. It is based on smart contracts deployed on the Ethereum main net.

The sidechain constructions mentioned above assume one of two things: either the mainchain needs to monitor all sidechains to verify backward transfers, or the mainchain relies on some sort of certifiers to broadcast incoming backward transactions from the sidechains to mainchain. A [first iteration of Horizen's sidechain construction](https://www.horizen.global/assets/files/Horizen-Sidechains-Decoupled-Consensus-Between-Chains.pdf) relied on certifiers to sign backward transfers batched in withdrawal certificates.

# The Zendoo Protocol

Horizen's sidechain implementation, the [Zendoo protocol](https://www.horizen.global/assets/files/Horizen-Sidechain-Zendoo-A_zk-SNARK-Verifiable-Cross-Chain-Transfer-Protocol.pdf) was released early in 2020. It introduces "a standardized mechanism to register and interact with separate sidechain systems. By interaction, we mean the cross-chain transfer protocol, which enables sending a native asset to a sidechain and receiving it back in a secure and verifiable way without the need to know anything about the internal sidechain construction or operations."[^1]

In more general terms, the Zendoo protocol allows a Bitcoin-based blockchain protocol to interoperate with domain-specific blockchains or blockchain-like system. The [blockchain protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}) is only upgraded once to introduce the mechanism used to deploy a new sidechain and to enable cross-chain transfers.

The innovation introduced with Zendoo is that backward transfers can be verified by the mainchain without involving external validators or certifiers to bridge both chains. This is although the mainchain does not monitor sidechains (asymmetric peg) and also doesn't know anything about their internal structure. This is achieved through recursive proofs generated for each state transition of the sidechain, but more on that later.

## Main Components

The overall system in Zendoo comprises three key elements:

- The Mainchain Consensus Protocol - MCP
- The Cross-Chain Transfer Protocol - CCTP
- The Sidechain Consensus Protocol - SCP

![Horizen Sidechain Construction](/assets/post_files/technology/expert/4.2-cross-chain-transactions/sidechain-elements.jpg)

### The Mainchain Consensus Protocol - MCP

The mainchain consensus protocol in the case of Horizen comprises the [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) and Nakamoto consensus algorithm, the [UTXO balance model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) and transparent as well as shielded transactions. The Zendoo specific parts of the MCP are the deployment of new sidechains via special transactions, a transaction to transfer assets to one of the sidechains as well as the verification of incoming transactions from sidechains.

### The Cross-Chain Transfer Protocol - CCTP

The cross-chain transfer protocol is the bridge between main- and sidechain and is unified and fixed by the mainchain consensus protocol. It's two main components are forward and backward transfers. In forward transfers ZEN is sent from the mainchain to one of the sidechains. In backward transfers ZEN is returned to the mainchain. Because sidechains monitor the mainchain they can verify forward transfers themselves and the mechanism is straight forward (pun not intended). The mainchain on the other hand doesn't monitor sidechains. To be able to verify incoming backward transactions a more complex mechanism compared to forward transactions is needed. Withdrawal certificates are introduced, which are standardized containers that can hold a set of backward transfers. They are used to inform the mainchain of withdrawal requests.

### The Sidechain Consensus Protocol - SCP

The sidechain consensus protocol includes all parameters of the sidechain. Typically, the consensus algorithm would describe the mechanism to agree on a single version of history. In this context, we also consider other parameters of the sidechain part of the consensus protocol.

A sidechain in Zendoo can run a different [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}), [accounting model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) or [data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) than the mainchain. It doesn't even have to be a blockchain at all. As long as the system adheres to the cross-chain transfer protocol it is interoperable with the main blockchain.

possibly tokens, as well as the withdrawal certificate genertion and the SNARK circuit used.

## Modifications of the Mainchain Protocol

In order to allow the deployment and use of sidechains a few modifications to the mainchain protocol are necessary.

* First, and most importantly, a mechanism to verify incoming *Withdraw Certificates* is needed.
* Second, a special type of transaction is introduced to deploy a sidechain.
* Third, a new data field in the mainchain block header is introduced, where a Merkle root of all sidechain related transactions is recorded.
* Fourth, a *forward transfer* is defined as a transaction sending assets to a sidechain.
* Lastly, *Withdraw Certificates* are introduced that allow the mainchain to process incoming backward transactions.

In the following sections we will go through the mainchain modifications that allow deploying and using sidechains. In the [chapter on transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-04-01-transactions %}), we dedicate an entire article to [cross-chain and sidechain-internal transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-cross-chain-transactions %}).

Understanding how the verification of sidechain transactions on the mainchain works without tracking them directly is crucial for understanding all other mainchain protocol changes, hence we will look at this mechanism first.

### Verification of Backward Transfers

As we said before, most sidechain protocols including our own first iteration rely on some kind of certifiers or validators that act as a bridge for backward transfers. These entities monitor one or more sidechains, collect all backward transactions and broadcast them on the mainchain. These validators can either be a trusted group of centralized actors, or a decentralized group of network participants that are incentivized, usually via transaction fees, to behave honestly. The common assumption is an honest majority amoing verifiers, but despite strong incentives for honest behavior it remains an assumption.

Ideally, backward transfers are objectively verifiable without the need to rely on intermediaries. This is the reason we build a backward transfer mechanism which relies on a proof system rather than human entities.

#### Proof Systems

On the highest level a proof system allows a verifier to prove to a validator, that a given statement is true, e.g. a computation was performed correctly. Instead of having to provide the verifier with the input and output to redo the computation and verify the result, the verifier can generate a proof and provide this proof instead. A proof comprises a set of values that the verifier uses to compute a binary output: true or false. When the verification function returns true the computation was performed correctly, if it returns false it wasn't.

Getting more concrete, one application for a proof system is the verification of state transitions in a given system. A [blockchain is a state machine](https://academy.horizen.global/technology/expert/utxo-vs-account-model/#the-blockchain-is-a-state-machine) in the sense that with every block new transactions are recorded in the ledger and the state of the system transitions to the next state. Nodes verify each block before they add it to their version of the ledger. They check if transactions have valid [digital signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) attached, if only previously [unspent transaction outputs]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) are spent and if the [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) attached to the block meets the current [difficulty](https://academy.horizen.global/technology/expert/proof-of-work/#finding-a-nonce). With a proof system, a miner could generate a proof that the state transition (new block) was perfomed according to the protocol. All other nodes would simply have to verify if the proof is correct and could save themselves from verifying each part of the block individually.

Zero-Knowledge proofs such as zkSNARKs are best known for their application in privacy preserving cryptocurrencies. Horizen, Zcash and other protocols utilize zkSNARKs to enable the private transfer of money. When proofs are used for the private transfer of money, the following happens: A user will create a transaction according to the protocol of the blockchain. Instead of broadcasting this transaction in plaintext to the network, the user generates a proof that the transaction is valid according to the rules and broadcast this proof instead. The proof entails all the necessary information about the transaction: the previously unspent inputs, the valid digital signature(s) satisfing the spending conditions of the inputs and the transaction outputs being the most important parameters.

Once broadcast, nodes will verify the proof, instead of the plaintext transaction which remains private. For this to work, an important property of the proof system comes down to *soundness*. *Soundness* refers to the property of a proof system that generating a proof that evalutes to true, although a statement was false is negligible. In simple terms: you cannot fake a proof from a mathematical standpoint.

In Zendoo, each sidechain is generating a proof for its subsequent state transitions. When a Withdraw Certificate is submitted to the mainchain a proof of correct state transitions is attached. Miners on the mainchain will verify this proof before including the Withdraw Certificate in a mainchain block and in turn accepting incoming backward transfers. This is, on a high level, how certifiers can be replaced through an algorithm. But how exactly are proofs for state transitions generated? Recursively!

#### Recursion

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

![Recursively Calculating the Faculty of any Number](/assets/post_files/technology/expert/4.2-cross-chain-transactions/recursive-faculty.jpg)

In the example above, calculating the factorial of 5, the recursive function will start with the first recursive case \\(5! = 5 \cdot 4!\\). When this instance of the function is executed, it will open another instance of the function that computes the factorial of 4 - and so on. This continues until the *base case* is reached. The base case is the factorial of the number 2, which equals 2. Now, the different instances of the function are closed subsequentially after returning their result to the next highest instance of the same function. The base case returns 2 to the next highest instance, which will use the result to compute *3!* and so on. In a last step, the final result, 120, is returned and the highest instance of the function is closed now that is has finished it's job.

In C, the function calculating the factorial can elegantly be written as follows. You can see how the function `factorial` is used within the function itself (`factorial(n-1)`).

```
long factorial(int n)
{
  if (n == 0) // Base case
    return 1;
  else
    return (n*factorial(n-1));
}
```

What we want to achieve in the context of our sidechains is having a proof of the statement that a series of state transitions (transactions and subsequently blocks) led to a given final state. But how does recursion apply to this scenario?

#### State Transition Proofs

Just like in the case of calculating the factorial of a number, the state transition logic of a blockchain can be seen as a function that takes the current state (\\s_i\\) and the most recent set of transactions (\\t_i\\) as an input and returns the next state (\\s_{i+1}\\). In the context of sidechains, each state can be represented, as a list of [UTXOs]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) while transitions are groups of transactions included in a block. Let us make this more tangible with a concrete example:

A sidechain starts in state 1 (\\s_1\\). The first transition, comprising all transactions to be included in the first block, is transition 1 (\\t_1\\). The transition function `update` takes these two parameters, the initial state (the Genesis Block) and the first transition instruction (read: transactions) and computes the next state (\\s_2\\)

$$
s_2 = update(t_1, s_1)
$$

The same logic applies for the second state transition. Based on state (\\s_2\\) and the second transition (\\t_2\\) the `update` function computes the third state (\\s_3\\).

$$
s_3 = update(t_2, s_2)
$$

Now, the current state of the sidechain can always be computed from the initial state (\\s_1\\) and all transitions (\\t_i\\) the system underwent. It allows one to subsequently compute every state the system was in. In our example, the third state (\\s_3\\) can be computed as

$$
s_3 = update(t_2, update(t_1, s_1)).
$$

We simply replaced (\\s_2\\) from the second formula in this section with the right term of the first formula. Do you recognize the recursive pattern explained before?

![Recursive State Transitions](/assets/post_files/technology/expert/4.2-cross-chain-transactions/recursive-state.jpg)

The function `update` calls itself subsequently  and opens new instances of the same function until the base case is reached. The base case here is the first state transition resulting in state \\(s_2\\). Once this base case is reached, the different instances of the `update` function are returning their result to the next highest instance of the same function until finally, the current state is returned and all instances of the function are closed.

The general mathematical expression for this principle is

$$
s_{n+1} = update(t_{n}, s_{n}) = update(t_{n}, update (t_{n-1}, s_{n-1})
$$

This construction is of great value for verifiable sidechains. Not only can states be computed recursively, but so can proofs for each state and in turn each state transition. What is needed for the Zendoo protocol is a proof of the statement: 

<center>
"There was a series of state transitions \\((t_1, ..., t_n\\))
</center>


we would like to have a succinct proof of the following statement: “there exist such (t1, ..., tn) so that update(tn, update(tn−1, update(..., update(t1, s1)))) = sn+1”.

- Setup: proofing and verifying key are created
- Prove: proof *pi* is constructed based on the input si, si+1 and ti
- Verify: based on vk_Base,(si,si+1),π Base it is evaluated if the proof is true or false








Base is a SNARK for a single transition that proves the existence of such t so that si+1 = update(t, si ). It is defined by a triplet (Setup, Prove, Verify)




#### Snarks

When we use snarks, we don't need to care about states and transitions. 

Mainchain doesn't need to know about transactions and the resulting blocks. All it cares about is that the sidechain was working as intended and all blocks are valid according to the specific sidechain implementation.



### Sidechain Deployment

A new sidechain in Zendoo needs to registered with the mainchain in a special type of transaction that any user can submit. This transaction defines a unique identifier for the sidechain and a number of other parameters.



### Sidechains Transactions Commitment

Addition: Merkle tree of sidechain related transactions. Sidechain Transactions Commitment (SCTxsCommitment). All TXs or outputs sidechain related. include BTR, WCert and FTs. One tree for all SCs. branches sorted by sidechains

Having SCTxsCommitment in the MC block header allows SC nodes to synchronize and verify SC-related transactions without the need to transmit the entire MC block. Also, it allows the construction of a SNARK proving that all SC-related transactions of the specific MC block have been processed correctly.

### Withdrawal Safeguard

protection against bug in sidechain

no inflation of total supply

no more backward transfers than forward transfers




# Summary








# FR

https://medium.com/poa-network/introducing-the-erc20-to-erc20-tokenbridge-ce266cc1a2d0

https://blockstream.com/sidechains.pdf











### Recursion


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