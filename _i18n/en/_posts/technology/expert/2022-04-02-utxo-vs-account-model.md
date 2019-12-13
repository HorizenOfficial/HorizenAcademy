---
layout: post
type: article
title: "UTXO vs Account Model"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/utxo-vs-account-model/
topic: technology
level: expert
chapter: "Transactions"
---

\url{https://hackernoon.com/utxo-and-account-model-comparison-v-2-cdf9669c6c0d}
\url{https://www.mycryptopedia.com/bitcoin-utxo-unspent-transaction-output-set-explained/}
\url{https://blockonomi.com/utxo-vs-account-based-transaction-models/}
\url{https://hackernoon.com/lessons-learned-from-bitcoins-and-ethereum-s-programming-models-f9fdbe1a3fdb}

Transferring money

transaction is message to network - Transactions data level (what data included etc. -> Data Structure Article)

signing and verifying TX in PKC

How the client handles this data -> programming blockchain

Introduced the UTXO model in our Advanced Level, assume knowledge

Here accounting or balance models compared



+++++ advanced utxo graphic

### State Machine

generally state machine. ref consensus

both are stateful systems... "a system is described as stateful if it is designed to remember preceding events or user interactions;[1] the remembered information is called the state of the system."

both system transition to a new state with every new block. Balances of transacting parties change

state transition logic differently

++++ graphic utxo-vs-account

state transition in UTXO: additional transactions, thereby utxos added to ledger
state transition in Account: accounts updated.


"Currently, two popular balance models are: Unspent Transaction Output (UTXO) and the Account Model. The first model is a directed graph of assets moving between users, the second is a database with the current network state." \url{https://medium.com/hashex-blog/utxo-and-account-model-comparison-c4098a9bc119}

### How does the UTXO Model work?

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/utxo_D.jpg)

balance calculated based on unspend transaction outputs.

A transaction output can have one of two distinct states: it can either be *spent* or *unspent*.

spend as a whole as records cannot be changed. -> change outputs, excess returned to self-controlled address


No need to maintain states for each wallet or address.

refresh, outputs have pukey scripts (in code scriptPubKey) attached in order to be used.

Signature Scripts (in code scriptSig) used to satisfy spending condition.

++++++ graphic pubkey script / signature script compare lock/key

"A user’s wallet keeps track of a list of unspent transactions associated with all addresses owned by the user, and the balance of the wallet is calculated as the sum of those unspent transactions."


 UTXO model allows for SPV (?)

 Hard to work with smart contract states

> If you had UTXOs, how would a contract be able to pick which coins to use when sending from a contract’s value to an address?
And what about internal transactions between contracts which would normally be carried out in the VM by just adjusting the balances of the contract in question?
How do you model those in a UTXO model where all spending transactions must be explicitly recorded?



 Allows using multi-threading for computations
 Complete transparency of asset movements
 Higher degree of privacy for new addresses, the coin does not have an owner. 
\end{itemize}

### How does the Account Model work?

"shared state across all the nodes using a database and transactions simply update the database when needed. It allows for complex data structures and allows for general computing."

"The Account/Balance Model, on the other hand, keeps track of the balance of each account as a global state. The balance of an account is checked to make sure it is larger than or equal to the spending transaction amount." -> where in UTXO you check if the output is spent or unspent

tx -> state transition. 

not feasible to transition after every single tx, especially as the execution of a smart contract can involve a large number of atomic transitions.

transitions in block intervalls.

++++  graphic state transition in figma academy graphics.

 two types of accounts, private key controlled user accounts and contract-code controlled accounts (smart contracts)

 Every account in Ethereum has its own balance, storage and code-space for calling other accounts or addresses

 Need to store all accounts states
 More efficient storage usage

 Light clients can analyze the states more easily

 Every transaction in the account model only needs to make one reference and signature that produces one output, contrary to UTXO design -> just by avoiding change outputs one can reduce the average transaction size

 higher degree of fungibility (build in mixer of sorts) (that tweet from vitalik \url{https://twitter.com/kendricktrh/status/1146386323449606144?s=21}
 Users of Ethereum perform transactions using client remote procedure calls which make tracking internal transactions across the Ethereum ledger much more challenging

 scaling and designing logis around account model more difficult

 The state of an account is not stored on the blockchain in Ethereum, it is computed and stored in a local database on the node. (?)
 Light Client is equivalent to SPV in UTXO model. Allows for "light nodes processing about 1KB of data per 2 minutes to receive data from the network about the parts of the state that are of concern to them, and be sure that the data is correct provided that the majority of miners are correctly following the protocol, and perhaps even only provided that at least one honest verifying full node exists."
\end{itemize}

"One drawback for the Account/Balance Model is the exposure to double spending attacks(Anm. Ich: more precisely: replay attacks). An incrementing nonce can be implemented to counteract this type of attack. In Ethereum, every account has a public viewable nonce and every time a transaction is made, the nonce is increased by one. This can prevent the same transaction being submitted more than once."

### Comparison

account better for smart contracts

* gas fee refund. in eth overestimated, not consumed gas refunded.

scalability -> transactions can be smaller (e.g. 100 bytes in Ethereum vs. 200–250 bytes in Bitcoin) because every transaction requires to make only a single reference, signature and to produce just one output.

fungibility


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



\subsubsection*{FR}

\url{https://medium.com/hashex-blog/utxo-and-account-model-comparison-c4098a9bc119}


"As just mentioned, MimbleWimble collapses all transactions within a block into a single block-wide transaction. The structure and transaction boundaries are removed. "