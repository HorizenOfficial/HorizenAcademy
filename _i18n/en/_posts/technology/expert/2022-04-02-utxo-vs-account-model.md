---
layout: post
type: article
title: "UTXO vs Account Model"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/utxo-vs-account-model/
topic: technology
level: expert
chapter: "Transactions"
further_reads: []
---

For digital money to be useful, it needs to be transferable. The transfer of money on a blockchain is initiated by the owner creating a transaction that informs the network about how much money has changed hands and who the new owner is.

So far we explained [what data comprises a transaction]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) when we looked at the blockchain as a data structure. When we talked about [public key cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %}) we covered how ownership on a blockchain is proven and verified, a key aspect of enabling secure transactions.

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/utxo_D.jpg)
![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/utxo_M.jpg)

Here we want to look at the accounting or balance models used in blockchains. We already introduced the commonly used *UTXO model* in our Advanced Level and assume basic knowledge of it for this article. The second method to track user balances, for instance applied in Ethereum, is the *account model*.

First, we will look at their similarities before we take a closer look at each model individually. Lastly, we will compare the two models and briefly show how they can be combined.

## The Blockchain is a State Machine

Before we get into the different balance models, it makes sense to take a step back and look at the blockchain in more general terms - as a *state machine*.

Per Wikipedia "a system is described as stateful if it is designed to remember preceding events or user interactions; the remembered information is called the state of the system." Hence, a blockchain clearly qualifies as a stateful system. It's entire purpose is to record past events and user interactions. With each new block the system undergoes a *state transition* that happens according to the *state transition logic* defined in its [protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}).

Every blockchain, no matter if it uses the UTXO or account model, follows this scheme. The user interactions, mostly transactions, are broadcast to the network and with each new block a set of them is permanently recorded. The balances of the transacting parties are updated when the system transitions to the new state.
The difference between the UTXO and account model lies in the way the state is recorded and how the system transitions from one state to another.

### Recording the State

The first major difference between the two balance models is how the state of the system is recorded. In the UTXO model the movement of assets is recorded as a *directed acyclic graph* (DAG) between addresses, whereas the account model maintains a database of network states.

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-balance-state.jpg)

A *graph* is defined as a set of nodes or *vertices* that are connected by *edges*. In a directed graph, each edge has a direction, usually indicated through arrows. *Directed acyclic graphs* don't allow circular relationships beween nodes. We take a more detailed look at graphs in a dedicated article that you can find [here](https://academy.horizen.global/technology/expert/a-relative-the-dag/#what-is-a-dag).

The graphic above shows a *directed acyclic graph* of the UTXO model on the left. Each state represents a block in the blockchain, each UTXO comprises a node in the DAG and each transaction is represented by one or more edges originating from a UTXO.
On the right, the graphics shows a representation of the different states in the account model. With each new block the state of the system is updated, according to the transactions that are contained in the block.

The conceptual difference is, that the account model updates user balances globally. The UTXO model on the other hand only records transaction receipts and account balances are calculated on the client side by adding up the available unspent transaction outputs (UTXOs).









## The UTXO Model

no accounts or wallets. TX consumes existing UTXOs and creates new ones.

cash analogy: user has $50 USD, can have a single 50 bill or a combination of other bills. User with balance of 50 ZEN same story.

Transaction outputs must be spent as a whole because the records in old blocks cannot be edited after the fact. When you create a transaction using a UTXO but only want to spend parts of the amount, you will transfer the excess amount of money to a self-controlled address.

Cash analogy: spend bills and get change, bill cannot be divided.

difference: where you rely on the counterparty to return change you create change in UTXO model yoursewlf. It is part of the spending transaction you create yourself.

Difference to cash is TX fee and discrete values. UTXO can have an arbitrary value.

In the UTXO model a users wallet calculates the current balance based on the available unspent transaction outputs. A transaction output can have one of two distinct states: it can either be *spent* or *unspent*.

No need to maintain states for each wallet or address. -> client side

"A user’s wallet keeps track of a list of unspent transactions associated with all addresses owned by the user, and the balance of the wallet is calculated as the sum of those unspent transactions."

### State Transitions in the UTXO Model



![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-state-transition-utxo.jpg)

in utxo the record of the transaction being added to the ledger is itself a state transition.









## The Account Model

account-based chains (such as the Ethereum and EOS blockchains) represent coins as balances within an account.

two types of accounts, private key controlled user accounts and contract-code controlled accounts.. popular for SC platforms

similar to nak accounts - tx triggers system to decrement the senders account balance and increment receivers account balance

"shared state across all the nodes using a database and transactions simply update the database when needed. It allows for complex data structures and allows for general computing."

"The Account/Balance Model, on the other hand, keeps track of the balance of each account as a global state. The balance of an account is checked to make sure it is larger than or equal to the spending transaction amount." -> where in UTXO you check if the output is spent or unspent

### State Transitions in the Account Model

simple model tx -> state transition

not feasible to transition after every single tx, especially as the execution of a smart contract can involve a large number of atomic transitions.

transitions in block intervalls.

Easy example: assume only a single transaction is included in the block

![Account model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-state-transition-account.jpg)

tx in account instructs nodes to substract 8 from alice and add them two bob. tx is an instruction for how to transit, actual transition executed by nodes.


Every account in Ethereum has its own balance, storage and code-space for calling other accounts or addresses

Need to store all accounts states
More efficient storage usage

Light clients can analyze the states more easily

The state of an account is not stored on the blockchain in Ethereum, it is computed and stored in a local database on the node. (?)
Light Client is equivalent to SPV in UTXO model. Allows for "light nodes processing about 1KB of data per 2 minutes to receive data from the network about the parts of the state that are of concern to them, and be sure that the data is correct provided that the majority of miners are correctly following the protocol, and perhaps even only provided that at least one honest verifying full node exists."









### Comparison

both have merits and shortcomings.

In the end depending on use case which one is better suited for the job

below strength and weaknesses of each model

one difference is that UTXO allows for different on-chain metrics through chain analysis. if this is a positive or negative is up for everyone to decide.
Examples include the [Spent Output Profit Ratio (SOPR)](https://academy.glassnode.com/indicators/sopr/sopr-spent-output-profit-ratio) and [Coin Days Destroyed (CDD)](https://academy.glassnode.com/indicators/coin-days-destroyed/cdd-coin-days-destroyed)

### Pros and Cons of the UTXO Model

Hard to work with smart contract states

> If you had UTXOs, how would a contract be able to pick which coins to use when sending from a contract’s value to an address?
And what about internal transactions between contracts which would normally be carried out in the VM by just adjusting the balances of the contract in question?
How do you model those in a UTXO model where all spending transactions must be explicitly recorded?

Allows using multi-threading for computations
Complete transparency of asset movements

Higher degree of privacy for new addresses, the coin does not have an owner. 

### Pros and Cons of the Account Model

Need to store all accounts states
More efficient storage usage

Every transaction in the account model only needs to make one reference and signature that produces one output, contrary to UTXO design -> just by avoiding change outputs one can reduce the average transaction size

Light clients can analyze the states more easily

The cell model is derived from the UTXO model and is thus a verification model. The account model, in contrast, is a computational model. (?) https://hackernoon.com/lessons-learned-from-bitcoins-and-ethereum-s-programming-models-f9fdbe1a3fdb

account better for smart contracts

* gas fee refund. in eth overestimated, not consumed gas refunded.

scalability -> transactions can be smaller (e.g. 100 bytes in Ethereum vs. 200–250 bytes in Bitcoin) because every transaction requires to make only a single reference, signature and to produce just one output.

higher degree of fungibility (build in mixer of sorts) (that tweet from vitalik \url{https://twitter.com/kendricktrh/status/1146386323449606144?s=21}
Users of Ethereum perform transactions using client remote procedure calls which make tracking internal transactions across the Ethereum ledger much more challenging

scaling and designing logis around account model more difficult

"One drawback for the Account/Balance Model is the exposure to double spending attacks(Anm. Ich: more precisely: replay attacks). An incrementing nonce can be implemented to counteract this type of attack. In Ethereum, every account has a public viewable nonce and every time a transaction is made, the nonce is increased by one. This can prevent the same transaction being submitted more than once."

How it effects second layer development
?: while in UTXO a full node only has to add a new TX to the ledger, in Account setting each node has to find the account of the payee as well as the payer and edit both.??

### Hybrid Systems

"However, a popular trend nowadays is to use a hybrid paradigm. It is reasonable to consider a hybrid model with UTXO being used for balances and States for contracts." (same source as intro)

Tron UTXO+account



QTUM UTXO + Account Abstraction Layer (AAL) https://blog.qtum.org/qtums-account-abstraction-layer-aal-explanation-143cb06cf08

QTUM [states](https://blog.qtum.org/qtums-utxo-design-decision-d3cb415a3a6e) it chose the UTXO model as it was considered "significantly securer".

> "Early on when Qtum was first being designed, the thought process was to build a business-ready blockchain that was versatile yet secure. To accomplish these motivations, Qtum chose the underlying UTXO (Unspent Transaction Output) model that Bitcoin is built on over the Accounts model that Ethereum style blockchains are built on." - Dev Bharel

EVM compliant interface on a base of UTXO transactions

> "And finally, using the UTXO model, we can implement Proof-of-Stake consensus on a protocol level, and not just as a smart contract application on top of the chain. The modified Blackcoin Proof-of-Stake algorithm that we use makes use of parallel proofs and requires UTXO activity, something that we couldn’t do in an accounts model."

>  any time more than one UTXO exists for a contract, a new tx is created combining and condensing them into one UTXO.

refunding gas via coinbase tx, added consensus rule

> "The UTXO transaction is parsed then converted into an EVM transaction. This EVM transaction is then processed, resulting in possibly new UTXO transaction based on if the contract makes any calls. AAL then processes all these EVM transactions to update the global state and adding the Qtum UTXO transactions to the new block." https://blog.qtum.org/qtums-account-abstraction-layer-aal-explanation-143cb06cf08


### Summary






How the client handles this data -> programming blockchain


### FR



"As just mentioned, MimbleWimble collapses all transactions within a block into a single block-wide transaction. The structure and transaction boundaries are removed. "












refresh, outputs have pukey scripts (in code scriptPubKey) attached in order to be used.

Signature Scripts (in code scriptSig) used to satisfy spending condition.

++++++ graphic pubkey script / signature script compare lock/key