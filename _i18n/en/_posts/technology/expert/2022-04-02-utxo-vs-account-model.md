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

\url{https://hackernoon.com/utxo-and-account-model-comparison-v-2-cdf9669c6c0d}\\
\url{https://www.mycryptopedia.com/bitcoin-utxo-unspent-transaction-output-set-explained/}\\
\url{https://blockonomi.com/utxo-vs-account-based-transaction-models/}\\
\url{https://hackernoon.com/lessons-learned-from-bitcoins-and-ethereum-s-programming-models-f9fdbe1a3fdb}\\

Transactions data level (what data included etc. -> Data Structure Article)\\

signing and verifying TX in PKC\\

How the client handles this data -> programming blockchain script article\\

Here Models used compared\\

"As just mentioned, MimbleWimble collapses all transactions within a block into a single block-wide transaction. The structure and transaction boundaries are removed. "\\

"Currently, two popular balance models are: Unspent Transaction Output (UTXO) and the Account Model. The first model is a directed graph of assets moving between users, the second is a database with the current network state." \url{https://medium.com/hashex-blog/utxo-and-account-model-comparison-c4098a9bc119}\\


### How does the UTXO Model work?

![UTXO model](/assets/post_files/technology/expert/4.1-utxo-vs-account/utxo_D.jpg)

Accounting system. No need to maintain states for each wallet or address.
refresh, outputs have pukey scripts (in code scriptPubKey) attached in order to be used.
Signature Scripts (in code scriptSig) used to satisfy spending condition.\\

"A user’s wallet keeps track of a list of unspent transactions associated with all addresses owned by the user, and the balance of the wallet is calculated as the sum of those unspent transactions."\\


\begin{itemize}
\item UTXO model allows for SPV (?)
\item Hard to work with smart contract states
\item Allows using multi-threading for computations
\item Complete transparency of asset movements
\item Higher degree of privacy for new addresses, the coin does not have an owner. 
\end{itemize}

### How does the Account Model work?

"The Account/Balance Model, on the other hand, keeps track of the balance of each account as a global state. The balance of an account is checked to make sure it is larger than or equal to the spending transaction amount." -> \\

tx -> state transition. 

not feasible to transition after every single tx, especially as the execution of a smart contract can involve a large number of atomic transitions.

transitions in block intervalls.

++++  graphic state transition in figma academy graphics.


\begin{itemize}
\item two types of accounts, private key controlled user accounts and contract-code controlled accounts (smart contracts)
\item Every account in Ethereum has its own balance, storage and code-space for calling other accounts or addresses
\item Need to store all accounts states
\item More efficient storage usage
\item Light clients can analyze the states more easily
\item Every transaction in the account model only needs to make one reference and signature that produces one output, contrary to UTXO design -> just by avoiding change outputs one can reduce the average transaction size
\item higher degree of fungibility (build in mixer of sorts) (that tweet from vitalik \url{https://twitter.com/kendricktrh/status/1146386323449606144?s=21}
\item Users of Ethereum perform transactions using client remote procedure calls which make tracking internal transactions across the Ethereum ledger much more challenging
\item scaling and designing logis around account model more difficult
\item The state of an account is not stored on the blockchain in Ethereum, it is computed and stored in a local database on the node. (?)
\item Light Client is equivalent to SPV in UTXO model. Allows for "light nodes processing about 1KB of data per 2 minutes to receive data from the network about the parts of the state that are of concern to them, and be sure that the data is correct provided that the majority of miners are correctly following the protocol, and perhaps even only provided that at least one honest verifying full node exists."
\end{itemize}

"One drawback for the Account/Balance Model is the exposure to double spending attacks(Anm. Ich: more precisely: replay attacks). An incrementing nonce can be implemented to counteract this type of attack. In Ethereum, every account has a public viewable nonce and every time a transaction is made, the nonce is increased by one. This can prevent the same transaction being submitted more than once."\\

### Comparison

account better for dapps? \\
scalability\\
How it effects second layer development\\
?: while in UTXO a full node only has to add a new TX to the ledger, in Account setting each node has to find the account of the payee as well as the payer and edit both.??\\

### Summary

"However, a popular trend nowadays is to use a hybrid paradigm. It is reasonable to consider a hybrid model with UTXO being used for balances and States for contracts." (same source as intro)\\

\subsubsection*{FR}

\url{https://medium.com/hashex-blog/utxo-and-account-model-comparison-c4098a9bc119}\\
