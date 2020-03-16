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

Every blockchain, no matter if it uses the UTXO or account model, follows this scheme. The user interactions, mostly transactions, are broadcast to the network and with each new block a set of them is permanently recorded. The balances of the transacting parties are updated when the system transitions to the new state. The difference between the UTXO and account model lies in the way the state is recorded and how the system transitions from one state to another.

### Recording the State

The first major difference between the two balance models is how the state of the system is recorded. In the UTXO model the movement of assets is recorded as a *directed acyclic graph* (DAG) between addresses, whereas the account model maintains a database of network states.

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-balance-state.jpg)

A *graph* is defined as a set of nodes or *vertices* that are connected by *edges*. In a directed graph, each edge has a direction, usually indicated through arrows. *Directed acyclic graphs* don't allow circular relationships beween nodes. We take a more detailed look at graphs in a dedicated article that you can find [here](https://academy.horizen.global/technology/expert/a-relative-the-dag/#what-is-a-dag).

The graphic above shows a *directed acyclic graph* of the UTXO model on the left. Each state represents a block in the blockchain, each transaction output comprises a node in the DAG and each transaction is represented by one or more edges originating from a transaction output. Hence, an *unspent* transaction output does not have an edge originating from it. In the example above the transaction outputs 3, 5, 6, and 7 are unspent.

On the right, the graphics shows a representation of the different states in the account model. With each new block the state of the system is updated, according to the transactions that are contained in the block. The number of accounts remains constant independent of the number of transactions conducted, as long as the number of users or [smart contracts]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-guaranteed-execution-with-smart-contracts %}) remains constant.

The conceptual difference is, that the account model updates user balances globally. The UTXO model on the other hand only records transaction receipts and the account balances are calculated on the client side by adding up the available unspent transaction outputs (UTXOs).

## The UTXO Model

The UTXO model does not have a concept of accounts or wallets on the protocol level. It is entirely based on individual transactions, grouped in blocks. A comparison with cash holds suprisingly well. A user that holds 50 ZEN might be in controll of a single UTXO worth this amount, or any arbitrary combination of UTXOs that add up to 50 ZEN. If he had $50, he might hold a single bill or a combination of smaller denominations.

Transaction outputs must be spent as a whole because the records in previous blocks cannot be edited after the fact, in other words the amount of these outputs cannot be reduced. When a transaction is created spending a UTXO but the user doesn't want to transfer the entire amount the excess money is sent to a self-controlled address as change. This is analogous to a payer receiving change from the payee if he "overpays" with his $50 bill, because the banknote cannot be divided.

There are two important difference though. Where the payer relies on its counterparty to return the change in case of a cash payment they create the change output in the UTXO model; it is part of the spending transaction they create themselves. The other difference is that cash exists in defined, *discrete* denominations, whereas transaction outputs can have arbitrary values.

Since there is no concept of accounts or wallets on the protocol level the "burden" of maintaining a user's balance is shifted to the client side. Wallets maintain a record of all addresses derived from the generated private key(s) and monitor the blockchain for all associated transactions. The sum of all unspent transaction outputs it can controll is the current balance.

### State Transitions in the UTXO Model

In the UTXO model each transaction can transition the system to a new state, but because transitioning to a new state with each transaction is infeasible they are batched into blocks and each new block presents a state transition of the system. In the example below we look at a state transition in the UTXO model and for simplicity we consider only a single transaction taking place.

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-state-transition-utxo.jpg)

Alice wants to transfer eight ZEN to Bob and controls a single UTXO worth ten ZEN. The transaction she creates consumes her previously unspent transaction output as an input. To spend a UTXO it needs to be unlocked. The spending conditions are defined in the [Pubkey Script](https://bitcoin.org/en/glossary/pubkey-script) included in each transaction output. The data necessary to satisfy this script is provided with the spending transaction and includes the [digital signature]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) of the owner - in this case Alice.

Next she defines what should happen with her money by creating the transaction outputs. Since she wants to transfer eight ZEN to Bob she creates two outputs with her transaction: one paying Bob and another returning the excess money to a self controlled address. Note how the sum of both outputs doesn't equal the entirety of the input consumed. The difference between outputs and inputs is defined as the transaction fee in the protocol. In this case the fee is 0.001 ZEN.

The size of the transaction fee is estimated by the wallet based on the amount of data recorded on-chain. This is because miners can only place a limited amount of data within a block, and by using the metric money per amount of data they can determine the transactions that when included give them the most bang for the buck.

## The Account Model

The account-based transaction model, as used by smart contract platforms like Ethereum represents assets as balances within accounts, similar to bank accounts. There are two different types of accounts:

- private key controlled user accounts and
- contract code controlled accounts.

When you create an ether wallet and receive a transaction for the first time a private key controlled account is created and its state is stored across all nodes on the network. Deploying a smart contract leads to the creation of a code controlled account. Smart contracts can hold funds themselves, which they might redistribute according to their logic at some point, based on the conditions defined in the contract logic. Every account in Ethereum has a balance, storage and code-space for calling other accounts or addresses.

A transaction in the account-based model triggers nodes to decrement the balance of the senders account by the transferred amount and increment the receivers account balance accordingly.

Transaction fees also work differently in the account based model. They are not defined as the difference between inputs and outputs but rather based on the number of computations the state transition requires. Ethereum set out to be a world computer. Hence paying fees based on computational resources consumed rather than storage capacity taken was the method of choice for the fee market.

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

high level computational view: "The cell model is derived from the UTXO model and is thus a verification model. The account model, in contrast, is a computational model. Current Layer 2 solutions such as the Lightning Network, utilize a proof submission and verification mechanism when assets return to Layer 1 from Layer 2. With Layer 1 playing a verification role, rather than a computation role, we can see that a UTXO or cell model is the proper approach for these kind of constructions."


both have merits and shortcomings.

In the end depending on use case which one is better suited for the job

below strength and weaknesses of each model

one difference is that UTXO allows for different on-chain metrics through chain analysis. if this is a positive or negative is up for everyone to decide.

Examples include the [Spent Output Profit Ratio (SOPR)](https://academy.glassnode.com/indicators/sopr/sopr-spent-output-profit-ratio) and [Coin Days Destroyed (CDD)](https://academy.glassnode.com/indicators/coin-days-destroyed/cdd-coin-days-destroyed).

On the other hand other on-chain metrics available in account model. (Really? which ones? so far made up claim)



### Scalability

How it effects second layer development
?: while in UTXO a full node only has to add a new TX to the ledger, in Account setting each node has to find the account of the payee as well as the payer and edit both.??

#### UTXO
Allows using multi-threading for computations. Multiple UTXOs can be processed at the same time. "Transactions can be processed in parallel since they all refer to independent inputs"

More easily scaled through sharding, but finality needed.

disadvantage in storage economy. Storing several UTXOs requires more memory than a single account balance. So do TXs require more space.

"The cell model is derived from the UTXO model and is thus a verification model. The account model, in contrast, is a computational model. Current Layer 2 solutions such as the Lightning Network, utilize a proof submission and verification mechanism when assets return to Layer 1 from Layer 2. With Layer 1 playing a verification role, rather than a computation role, we can see that a UTXO or cell model is the proper approach for these kind of constructions."


#### Account

Light clients can analyze the states more easily

More efficient storage usage

scalability -> transactions can be smaller (e.g. 100 bytes in Ethereum vs. 200–250 bytes in Bitcoin) because every transaction requires to make only a single reference, signature and to produce just one output. Also because the final state is not explicitly specified in TX.

account state smaller than UTXO set.

"an account model makes it easier to bring new servers up. The number of accounts will generally be much less than the number of UTXOs in a comparably sized system. This means less data needed to bring on new nodes"


### Security
#### UTXO

#### Account
"One drawback for the Account/Balance Model is the exposure to double spending attacks(Anm. Ich: more precisely: replay attacks). An incrementing nonce can be implemented to counteract this type of attack. In Ethereum, every account has a public viewable nonce and every time a transaction is made, the nonce is increased by one. This prevents the same transaction being submitted more than once."

Light Client is equivalent to SPV in UTXO model. Allows for "light nodes processing about 1KB of data per 2 minutes to receive data from the network about the parts of the state that are of concern to them, and be sure that the data is correct provided that the majority of miners are correctly following the protocol, and perhaps even only provided that at least one honest verifying full node exists."


### Wallets
#### UTXO

Wallets for assets on a UTXO blockchain always need to keep track of several UTXO's each of which can be associated with a different address. Remember: you can [derive many different addresses from a single private key]({{ site.baseurl }}{% post_url /technology/expert/2022-03-01-wallets-expert %})

#### Account

Light clients can analyze the states more easily
they just need to look at the current state to get the users balance.

"Because the result of a transaction depends on the input state, care must be taken when executing transactions in parallel. Generally, transactions affecting the same account will need to be executed one after another."

### Privacy
#### UTXO
Complete transparency of asset movements in case no privacy preserving techniques applied.

On the other hand a higher degree of privacy compared to the account model can be achieved when change addresses are used consequently. for new addresses, the coin does not have an owner.

#### Account
higher degree of fungibility (build in mixer of sorts) (that tweet from vitalik \url{https://twitter.com/kendricktrh/status/1146386323449606144?s=21}
Users of Ethereum perform transactions using client remote procedure calls which make tracking internal transactions across the Ethereum ledger much more challenging

Account models encourage address reuse which is generally a detriment to privacy, since the account itself links transactions together to a single owner.


### Smart Contracts
#### UTXO
Hard to work with smart contract states

If you had UTXOs, how would a contract pick which coins to use when sending from a contract’s value to an address? Additional logic needed.

internal transactions between contracts which would normally be carried out in the VM by just adjusting the balances of the contract in question
How do you model those in a UTXO model where all spending transactions must be explicitly recorded?

"UTXO’s stateless model would force transactions to include state information, and this unnecessarily complicates the design of the contracts."


#### Account

account better for smart contracts

logic is more intuitive and makes it easier for developers to create transactions that require state information or involve multiple parties.

Need to store all accounts states
More efficient storage usage


Every transaction in the account model only needs to make one reference and signature that produces one output, contrary to UTXO design -> just by avoiding change outputs one can reduce the average transaction size

"Constant light client reference. Light clients can at any point access all data related to an account by traversing the state tree in a specific direction. In a UTXO paradigm, the references change with each transaction, which is a particularly burdensome issue for long-running DApps that try to use the above mentioned state-root-in-UTXO propagation mechanism."

"Every account in Ethereum has its own balance, storage and code-space for calling other accounts or addresses. A transaction is valid if a sending account has enough balance to pay for it. If the receiving account has code, the code runs, changing anything from internal storage to creating additional messages that may have subsequent effects on debits and credits to other accounts. Due to this, every newly generated block can potentially affect the state of all other accounts."


![Comparing the UTXO and Account-based Transaction Model](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-comparison-utxo-account.jpg)






gas fee refund. in eth overestimated, not consumed gas refunded.

### Hybrid Systems

![Hybrid Accounting Model, as used in QTUM](/assets/post_files/technology/expert/4.1-utxo-vs-account/TODO-comparison-utxo-account.jpg)

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


You can shoehorn most applications into one or the other balance model. The question is if you should do this, and why you would want to do this.

"Within cryptocurrency platforms, there are a diverse set of design concepts and technical mechanisms that go into the platform being able to function as a viable, secure, and usable system. The transaction models used by such platforms employ the use of cryptography to verify ownership of tokens across the network. The UTXO scheme works superbly for Bitcoin, while the Account Based model used in Ethereum is geared to supporting its more complex application and contract needs."


How the client handles this data -> programming blockchain


### FR



"As just mentioned, MimbleWimble collapses all transactions within a block into a single block-wide transaction. The structure and transaction boundaries are removed. "












refresh, outputs have pukey scripts (in code scriptPubKey) attached in order to be used.

Signature Scripts (in code scriptSig) used to satisfy spending condition.

++++++ graphic pubkey script / signature script compare lock/key