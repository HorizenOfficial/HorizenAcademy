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

For digital money to be useful, it needs to be transferable. The transfer of money on a blockchain is initiated by the owner creating a transaction that informs the network of how much money has changed hands and who the new owner is.

So far we've explained [what data comprises a transaction]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) when we looked at the blockchain as a data structure. When we talked about [public key cryptography]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-0-public-key-cryptography %}) we covered how ownership is proven and verified on a blockchain, a key aspect of enabling secure transactions.

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/utxo_D.jpg)
![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/utxo_M.jpg)

In this article we will look at the accounting/balance models used in blockchains. We've already introduced the commonly used *UTXO model* in our Advanced Level and assume basic knowledge of it for this article. The second method to track user balances, for instance applied in Ethereum, is the *account model*.

We will start by looking at their similarities and then dive deep into each model individually. Lastly, we will compare the two models and briefly show how they can be combined.

## The Blockchain is a State Machine

Before we get into the different balance models, it makes sense to take a step back and look at the blockchain in more general terms - as a *state machine*.

Per Wikipedia "a system is described as stateful if it is designed to remember preceding events or user interactions; the remembered information is called the state of the system." Hence, a blockchain clearly qualifies as a stateful system. It's entire purpose is to record past events and user interactions. With each new block the system undergoes a *state transition* that happens according to the *state transition logic* defined in its [protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}).

Every blockchain, no matter if it uses the UTXO or account model, follows this scheme. The user interactions, mostly transactions, are broadcast to the network and with each new block a set of them is permanently recorded. The balances of the transacting parties are updated when the system transitions to the new state. The difference between the UTXO and account model lies in the way the state is recorded and how the system transitions from one state to another.

### Recording the State

The first major difference between the two balance models is how the state of the system is recorded. In the UTXO model, the movement of assets is recorded as a *directed acyclic graph* (DAG) between addresses, whereas the account model maintains a database of network states.

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-dag-vs-database.jpg)

A *graph* is defined as a set of nodes or *vertices* that are connected by *edges*. In a directed graph, each edge has a direction, usually indicated through arrows. *Directed acyclic graphs* don't allow circular relationships beween nodes. We take a more detailed look at graphs [here](https://academy.horizen.global/technology/expert/a-relative-the-dag/#what-is-a-dag).

The graphic above shows a *directed acyclic graph* of the UTXO model on the left. Each state represents a block in the blockchain, each transaction output comprises a node in the DAG, and each transaction is represented by one or more edges originating from a transaction output. Hence, an *unspent* transaction output does not have an edge originating from it. In the example above the transaction outputs 3, 5, 6, and 7 are unspent.

On the right, the graphic shows a representation of the different states in the account model. With each new block, the state of the system is updated according to the transactions contained in the block. The number of accounts remains constant and independent of the number of transactions conducted, as long as the number of users or [smart contracts]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-guaranteed-execution-with-smart-contracts %}) remains constant.

The conceptual difference is that the account model updates user balances globally. The UTXO model only records transaction receipts. In the UTXO model, account balances are calculated on the client side by adding up the available unspent transaction outputs (UTXOs).

## The UTXO Model

The UTXO model does not incorporate accounts or wallets at the protocol level. The model is based entirely on individual transactions, grouped in blocks. We can compare this to people holding certain amounts of cash. A user that holds 50 ZEN might be in control of a single UTXO worth 50 ZEN, or a combination of UTXOs that add up to 50 ZEN. Comparing it to cash, if a user has $50, he might hold a single $50 bill, or a combination of smaller denominations.

Transaction outputs must be spent as a whole because the records in previous blocks cannot be edited after the fact, in other words the amount of these outputs cannot be reduced. When a transaction is created spending a UTXO but the user doesn't want to transfer the entire amount the excess money is sent to a self-controlled address as change. This is analogous to a payer receiving change from the payee if he "overpays" with his $50 bill, because the banknote cannot be divided.

However, there are two important differences. Where the payer relies on its counterparty to return the change in case of a cash payment they create the change output in the UTXO model; it is part of the spending transaction they create themselves. The other difference is that cash exists in defined, *discrete* denominations, whereas transaction outputs can have arbitrary values.

Since there is no concept of accounts or wallets on the protocol level, the "burden" of maintaining a user's balance is shifted to the client side. Wallets maintain a record of all addresses derived from the generated private key(s) and monitor the blockchain for all associated transactions. The sum of all unspent transaction outputs it can control is its current balance.

### State Transitions in the UTXO Model

Each transaction in the UTXO model can transition the system to a new state, because transitioning to a new state with each transaction is infeasible. As a result, transactions are batched into blocks, and each new block presents a system state transition. In the example below, we look at a UTXO state transition with only a single hypothetical transaction.

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-state-transition-utxo.jpg)

Alice wants to transfer eight ZEN to Bob, and she controls a single UTXO worth ten ZEN. The transaction she creates consumes her previously unspent transaction output as an input. To spend a UTXO it needs to be unlocked. The spending conditions are defined in the [Pubkey Script](https://bitcoin.org/en/glossary/pubkey-script) included in each transaction output. The data necessary to satisfy this script is provided with the spending transaction and includes the [digital signature]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) of the owner - in this case Alice.

Next she defines what should happen with her money. She does this by creating the transaction outputs. Since she wants to transfer eight ZEN to Bob, she creates two outputs with her transaction: one paying Bob and another returning the excess money to a self controlled address. Note how the sum of both outputs doesn't equal the entirety of the input consumed. The difference between outputs and inputs is defined as the transaction fee in the protocol. In this case the fee is 0.001 ZEN.

The size of the transaction fee is estimated by the wallet based on the amount of data recorded on-chain. Miners can only place a limited amount of data within a block, and by using the metric 'money per amount of data', miners can determine which transactions to include in the block. They will typically pick the transactions with the highest fees. 

## The Account Model

The account-based transaction model represents assets as balances within accounts, similar to bank accounts. Ethereum uses this transaction model. There are two different types of accounts:

- private key controlled user accounts
- contract code controlled accounts.

When you create an ether wallet and receive your first transaction, a private key controlled account is created, and the new account's state is stored across all nodes on the network. Deploying a smart contract leads to the creation of a code controlled account. Smart contracts can hold funds themselves, which they might redistribute according to conditions defined in the contract logic. Every account in Ethereum has a balance, storage, and code-space for calling other accounts or addresses.

A transaction in the account-based model triggers nodes to decrement the balance of the sender's account and increment the balance of the receiver's account. 

To prevent replay attacks, each transaction in the account model has a nonce attached. A replay attack is when a payee broadcasts a fraudulent transaction in which they get paid a second time. If the fraudulent transaction were to be successful, the transaction would be executed a second time - it is replayed - and the sender would be charged twice the amount they actually wanted to transfer. To combat this behavior, each account in Ethereum has a public viewable nonce that is incremented by one with each outgoing transaction. This prevents the same transaction being submitted more than once.

Transaction fees also work differently in the account based model. They are not defined as the difference between inputs and outputs but rather based on the number of computations required to complete the state transition. Ethereum set out to be a world computer. Hence they decided that fees should be based on computational resources consumed rather than storage capacity.

The account model keeps track of all balances as a global state. This state can be understood as a database of all accounts, private key and contract code controlled and their current balances of the different assets on the network.

### State Transitions in the Account Model

In a very simple model a transaction presents an event that triggers a state transition of the blockchain subject to the state transition logic. Just like in the UTXO model it is infeasible to transition to a new state with every transaction and so they are also batched into blocks. With each new block the system transitions to a new state.

Just like we did before, we consider a simple example where a single transaction transitions the system to a new state below.

![Account model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-state-transition-account.jpg)

The example is generally the same: Alice wants to transfer 8 ZEN to Bob. Instead of picking a UTXO to use her wallet will create a transaction that defines the spending account, the receiving account and the amount to transfer. This transaction is then signed with Alice's private key. When the system transitions to a new state (n+1) with the next block, Alice's account balance will globally be reduced to 2 ZEN whereas Bob's balance will be increased to 9 ZEN.

Pubkey- and Signature Script do not exist in account based blockchains. The verification of [signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) in account-based blockchain, Ethereum for example, is based on three parameters, *r*, *s*, and *V* provided by the sender. These three values comprise the signature. Solidity, the programming language used in ethereum provides a method, [ecrecover](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethsign) that returns an address given these parameters. If the returned address matches the senders address, the signature and in return the transaction is valid.

Where in the UTXO model part of the verification process is checking if a transaction output in *unspent*, nodes in the account model check if the senders balance is larger than or equal to the spending transactions amount. This is true for the native asset of the chain, e.g. ETH, as well as all other tokens on the network.

A transaction in the account-based model is an instruction for how to transition two or more accounts to the next state, the actual transition is then executed by the nodes. Because the final state is not specified in the transaction, the resulting transaction size in the account model is a lot smaller than in the UTXO model.

The balance, or state, of accounts in Ethereum is not stored on the blockchain but computed and stored in a local database on the node. The blockchain only stores the instructions (transactions) for how the system should transition from one state to another.

## Comparison

Below, we want to look at the strengths and weaknesses of the UTXO and account model. Before we compare them with regards to scalability, privacy, smart contract capabilities and other aspects, its interesting to compare them from a high level computational view.

The UTXO model is a *verification model*. Users submit transactions that specify the reslut of the state transition: new transaction outputs spendable by the receiver(s). Nodes verify if the consumed inputs were previously unspent and if the signature(s) satify the spending conditions.

The account model on the other hand is a *computational model*. Users submit transactions that instruct nodes on what the state transition should look like and the network computes the new state based on these instructions.

This comes with certain implications with regards to the way these systems can scale using layer two solutions like state channels and sharding.

### Scalability

There are several approaches to comparing the UTXO and account model with regards to scalability. One way to look at it is focusing on the overall storage requirements of each system. Another way is to consider which model is better suited for the deployment of second layer technologies on top of the main blockchain.

![Account model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-scaling-utxo-account.jpg)

One second layer technology, [state- and payment channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-state-and-payment-channels %}) moves the exchange of data from the blockchain to a dedicated trustless network of bidirectional communication channels.

The other approach that can arguably be referred to as a second layer technology is sharding. Sharding is a term originating from the traditional database world. It describes partitioning a database into several shards in order to keep each individual partition and in turn the entire system more performant. [Sidechains]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) in Horizen can be considered a sharding mechanism.

In order to compare both accounting methods we will assume systems with the same amount of users and transactions.

#### Size of the Blockchain

The account model is more efficient in terms of memory usage. Storing a single account balance saves memory compared to storing several UTXOs the comprise a users total transferrable balance. Transactions in the account model are also smaller in size as they mainly need to specify the receiving address, the amount to transfer and a single digital signature. Just by doing away with change outputs a lot of data can be saved in the account model.

On a conceptual level this becomes very intuitive: because a UTXO transaction specifies the state after the transition (the newly generated transaction outputs) it needs to include more data than an account transaction. It may also consume several UTXOs as inputs, whereas the account transaction only specifies which account balance to deduct the transferred amount from.

To give you an idea: an average transaction in Ethereum's account model takes about 100 bytes, whereas a UTXO transaction in Horizen takes about 200-300 bytes.

This also implies that is is easier to get new nodes online in the account model. The number of accounts will generally be much smaller than the total UTXO set in a comparably sized system. This means less data is needed to get new nodes in synch.

#### State- and Payment Channel Constructions

The currently most advanced payment channel construction is the [Lightning Network](https://lightning.network/) on Bitcoin. It uses a proof submission and verification mechanism when assets move into and out of the second layer. As we mentioned above, the UTXO model is essentially a verification model whereas the account model is a computational model. Hence, a UTXO construction is more suitable for these types of scalabilty approaches.

#### Sharding

Partitioning a blockchain into shards or sidechains is also easier using the UTXO model. Here a user adds a new transaction to one of the sidechains or shards. Aggregating spendable transaction outputs and defining the outputs happens on the client side. In the account model each node has to localize the senders and receivers account across the different shards and edit both. Of course there is more to sharding then these rather straight forward modifications, and using one balance model over the other comes with more second and third-order effects.

### Privacy

When it comes to privacy there are merits to both, the UTXO and account model. The UTXO model has advantages when it comes to making transactions hard to link together whereas the account model provides better fungibility.

When change addresses are consequently used in the UTXO model it makes tracking the ownership of coins harder compared to the account model. A newly generated address doesn't have a known owner and only through advanced chain analysis different addresses can be linked to a single user. The account model implicitly encourages address reusage and hence makes creating a transaction history for a single user easier.

With regards to fungibility the account model offers better privacy. In the UTXO model there is complete transparency in the movement of UTXOs (read assets) when no privacy preserving techniques are applied. The account model comes with a build in coin mixer of sorts. When an account is funded with several transactions the result is a single balance and when a payment from this account is made an observer cannot determine which of the incoming coins is being spent. Consider the example of the account model above where Alice sends 8 ZEN to Bob and his new balance is 9 ZEN. When he spends 0.5 ZEN nobody can determine if this half a hypothetical "account-ZEN" stems from Alice or a previous payment. This is obviously a very simplified view. Even when assets cannot reliably be assigned to a funding transaction, analytic tools can determine if coins are [tainted](https://bitcoin.stackexchange.com/questions/7966/what-are-tainted-coins-exactly) or not.

### Smart Contract Capabilities

When it comes to enabling smart contracts the account model offers clear advantages. First of all the logic is more intuitive. Adding and subtracting balances makes it easier for developers to create transactions that require state information or involve multiple parties. A signed transaction is valid as long as the sending account has a sufficient balance to pay for its execution. Especially for code controlled accounts that interact with other smart contracts this makes development simpler. Internal transactions between contracts can be carried out in the virtual machine by just adjusting the balances of the contracts in question. In the UTXO model where all spending transactions must be explicitly recorded this creates quite some overhead.

In the UTXO model, a contract would also need to include a logic for choosing which outputs to use when sending assets and it would need even more logic for handling change outputs. Because the UTXO model is inherently stateless it forces transactions to include state information, which complicates the overall design.

This also comes with implications for light clients interacting with smart contracts or dApps. A light client in the account model can access all account related data by traversing the state tree backward in time. In the UTXO model the references to available transaction outputs change with every transaction.

### Other Differences

One benefit of the UTXO model in the context of smart contract capabilities is that it allows for the simpler parallelization of transactions. Multiple UTXOs used in different transactions can be processed at the same time since they all refer to independent inputs.

Because the result of a transaction depends on the input state in the account model executing transactions in parallel must be handled carefully. Generally, transactions affecting the same account should be executed one the other.

### Hybrid Systems

![Hybrid Accounting Model, as used in QTUM](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-comparison-utxo-account.jpg)

A takeaway from the above section is that when it comes to simple transactions and processing many of them the UTXO model shows its strength. When it comes to more complex logic the account model offers benefits as designing the contract logic becomes simpler. Hence a popular trend with current smart contract platforms is using a hybrid model where the UTXO model is used for balances and the account model with states is used for contracts. QTUM is one example of a blockchain that utilizes a hybrid system of UTXOs and accounts.

> "Early on when Qtum was first being designed, the thought process was to build a business-ready blockchain that was versatile yet secure. To accomplish these motivations, Qtum chose the underlying UTXO (Unspent Transaction Output) model that Bitcoin is built on over the Accounts model that Ethereum style blockchains are built on." - [Dev Bharel](https://blog.qtum.org/qtums-utxo-design-decision-d3cb415a3a6e)

The decision to use the UTXO model as the basis for the overall architecture was made because the it was viewed as "significantly securer" at the time of conception. On top of this UTXO layer QTUM enables "creating and executing smart contracts using the accounts model offered by Ethereum" through a construction they call the [*Account Abstraction Layer* (AAL)](https://blog.qtum.org/qtums-account-abstraction-layer-aal-explanation-143cb06cf08)

One paradigm that is applied in the AAL is combining UTXOs for a given contract in a new transaction as soon as there is more than one of them available to the contract code. Using the UTXO model as a base layer QTUM was also able to implement [BlackCoin's Proof of Stake Protocol](https://blackcoin.org/blackcoin-pos-protocol-v2-whitepaper.pdf) which requires parallel proofs and requires UTXO activity.

### Summary

To finish off this article, let us recap what we covered. We started by pointing out the similarities between the UTXO and account model. The blockchain can be considered a state machine independetly of the accounting scheme used. In both cases transactions trigger state transitions which happen in batches - with each new block added to the blockchain.

In the UTXO model the movement of assets is recorded in the form of a directed acyclic graph made of transaction outputs. New outputs are added with each additional block.
In the case of the account model balances are stored as a global state of accounts, kept by each node and updated with every block. This is more similar to a database.

Transactions in the UTXO model are larger in size and place more burden on the user and its wallet compared to the simpler instructions for how to transition to the new state in the account model. A general difference lies in the UTXO model being a verification model compared to a computational model when accounts are used.

In terms of blockchain size account based systems offer benefits, because the state as well as transactions are smaller. The UTXO paradigm on the other hand makes scaling solutions like state- and payment channel constructions as well a sharding simpler.

When it comes to the privacy gurantees provided by each scheme both have pros and cons. On the one hand, linking transactions to a single user is often times easier in account based systems, which on the other hand offers better fungibility of assets.

Because the account model offers clear advantages when smart contracts should be supported by the blockchain in question many new smart contract platforms use hybrid models where UTXOs are used for balances and accounts are used for the contracts.

In the end it depends on the use case which model is better suited for the job. You can shoehorn most applications into one or the other balance model. The question is if you should do this, and why you would want to do this in the first place. Because we could not phrase it much better we want to finish this article with a quote:

> "Within cryptocurrency platforms, there are a diverse set of design concepts and technical mechanisms that go into the platform being able to function as a viable, secure, and usable system. The transaction models used by such platforms employ the use of cryptography to verify ownership of tokens across the network. The UTXO scheme works superbly for Bitcoin, while the Account Based model used in Ethereum is geared to supporting its more complex application and contract needs." - [Brian Curran](https://blockonomi.com/utxo-vs-account-based-transaction-models/)

### FR

Cell model: https://medium.com/nervosnetwork/https-medium-com-nervosnetwork-cell-model-7323fca57571

[*Account Abstraction Layer* (AAL)](https://blog.qtum.org/qtums-account-abstraction-layer-aal-explanation-143cb06cf08)

https://hackernoon.com/getting-deep-into-ethereum-how-data-is-stored-in-ethereum-e3f669d96033
