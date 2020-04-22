---
layout: post
type: article
title: "State and Payment Channels"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/state-and-payment-channels/
topic: technology
level: expert
chapter: "Transactions"
further_reads: [mastering_lightning, till_its_lightning_fast, general_state_channel_networks, counterfactual, lightning_network, raiden_network, bolt]
---

## Introduction

A common criticism of blockchain tech is that it doesn't scale in a decentralized setting and therefore won't be able to support mainstream adoption. Now there are different ways to scale blockchains and increase their throughput, but what if we can create more interaction leveraging the security of blockchain with the capacity we already have available? Meet layer-two transactions on payment or state channels.

![Scaling](/assets/post_files/technology/expert/1.5-DAGs/scaling_dag_D.jpg)

We already talked about scalability in several of our previous articles. We introduced [sidechains]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-expanding-blockchain-with-sidechains %}) as a scaling approach that allows to spread the workload otherwised performed by a single set of nodes on the mainchain to several sets of nodes, each responsible for their own sidechain.

We also talked about [Directed Acyclic Graphs (DAGs)]({{ site.baseurl }}{% post_url /technology/expert/2022-01-06-a-relative-the-dag %}) that hold the potential to dynamically adjust the on-chain (or "on-DAG") throughput by introducing a new type of data structure supporting two-dimensionality in an otherwise one-dimensional blockchain world.

Here, we will cover another highly promising approach to make blockchains security promise accessible to a larger user-base - payment and state channels. The general idea is as follows: two users place funds in a channel. Now the participants can send funds back and forth by exchanging signed transactions which are NOT broadcast to the blockchain, although they would be considered valid transactions. Only when participants are done transacting do they use the blockchain to settle their current balances. That way, they can exchange an arbitrary amount of transactions while placing only two of them on-chain: the channel-opening and closing transaction.

Payment channels are no trivial topic and there are many different projects working on them. In order to cover the process from opening a channel, to updating its balance and lastly closing it we will, for the most part of this article, focus on the best-known and most active payment channel implementation: the Lightning Network. Afterward we will give a glimpse into the rest of the state channel world.

### Payment Channels

Before we look into how several payment channels can be combined to form a network such as Lightning, let's consider an example where two users, Alice and Bob want to use a payment channel to save on transaction fees as they frequently send money back and forth.


Building Blocks: https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791

- Regular Transactions
- P2SH Addresses, more specifically MultiSig Addresses
- Timelocks
- Hash Functions

A payment channel is a 2-2 multisig Address, more generally P2SH Address. A simple smart contract if you will, whose code defines spending conditions more complex than the regular P2PKH transaction.

The blockchain on its own, it has no way of knowing whether this is the most recent state or not. It's just acting on behalf of its users instructions after all.

This property is based on the principle of *total consent*. For every modification of the state within a state channel requires explicit cryptographic consent or proof from all parties involved. While this has the advantage of all state changes (most recent ones) being broadcastable to the blockchain at all times, it requires all parties to keep records of the changes and be responsive at all times.

*All Commitment Transactions are valid on-chain transactions and will be valid until their input is spend elsewhere. This means, there needs to be a strong incentive to act honestly, or, put differently, a strong disincentive to cheat.

--> " Parties are prevented from submitting old messages by their counterparties: if Alice submits
an old state, Bob is given an opportunity to “rebut” it by broadcasting a more recent state. This
design allows participants to treat updates within a state channel as “final”, despite taking place
entirely off-chain."

privacy. high in bidirectionl channel. Nobody will ever know about intermediary balances and payments as only the final state is broadcast on-chain. Even when routing a payment through several channels privacy is generally better compared to eternally recorded on-chain transactions, although relayers might get information....

"the interaction of the parties with the contract instance is always “local”, i.e., the parties themselves compute the new states of $G$ and then just exchange signatures."

Payment channel networks are built from multiple separate channels that can be coupled when needed. The most popular implementations of the approach are The Lightning Network for Bitcoin [15] and The Raiden Network for Ethereum. Can be build on UTXO as well as Account-based blockchains. Lightning vs. Raiden.

## Lightning Network

Essentially, transactions made in the lightning network can legitly be broadcasted into the Bitcoin network, which means the layer-two transaction can be viewed as a specialized layer-one transaction.

"A Lightning Network channel uses funds locked in a funding transaction, a multisignature
UTXO created and owned by the parties in the channel. Balance updates are done by signing
two assymetrical commitment transactions, each of which spends the funding transaction,
immediately releases remote funds to the counterparty, and start a challenge period after which
the broadcaster receives the remaining local funds"

stack of cheques that they could deposit whenever they want.

open/close: cross-layer transaction as it’s interacting with both networks

If the transaction is meant to stay in the lightning network, then it’s called the layer-two transaction

RSMC, Revocable Sequence Maturing Contract

focus on bidirectional payment channels. connecting them to a network of channels (Lightning Network) via HTLCs out of scope

Lightning paper 3.5: fidelity bond and breach remedy transaction

### Opening a Payment Channel - Cross-Layer Transaction

#### Bilateral Funding

3 transactions in total:

Alice funds channel with 1 coin. outputs locking script based on both, Alice's and Bob's signatures

Bob funds channel with 2 coins. outputs locking script based on both, Alice's and Bob's signatures

Both are not signed.

Now Commitment Transaction. Inputs are the two outputs above. Outputs refund participants.

not possible yet, new sighash flag needed to allow users spending outputs not yet confirmed.

SIGHASH explained https://raghavsood.com/blog/2018/06/10/bitcoin-signature-types-sighash

"For instance, Alice creates the commitment transaction, signs it, sends it to Bob, and Bob will send it back with his signature. Or they could exchange their signatures for this particular transaction. Either way, the result is that they both have the same spendable commitment transaction."

#### Unilateral Funding

Alice funds channel.



### Updating Channel Balance - Layer-Two Transaction

transactions in the lightning network are no more than a chain of commitment transactions spending the outputs in the funding transaction

the commitment transaction always references the funding transaction.

the Bitcoin network makes sure every transaction output can only be spent once, although the locking script provides two possible scenarios.

### Closing a Payment Channel - Cross-Layer Transaction

#### Mutually Closing a Channel

agreement

#### Unilaterally Closing a Channel

via timeout or payment hash. participants have to wait, hence suboptimal

#### Revokation

ugly, cheater got caught

use "posting stale state" to mix things up


### Building a Network with HTLCs

"A technique that can allow payments to be securely routed across multiple payment channels.[citation needed] For example, if Alice has a channel open to Bob and Bob has a channel open to Charlie, Alice can use a HTLC to pay Charlie through Bob without any risk of Bob stealing the payment in transit"

Idea: Carol creates secret and passes it's hash to Bob and Alice.

Alice creates TX sending 1 Coin to Bob.

Bob creates TX sending 1 Coin to Carol.

To claim the coin, Carol must use her secret. Bob learns about this secret and uses it to spend Alice's TX.

Hash lock to ensure one participant after the other can claim TX. Hashlock in case someone becomes inactive and participants can reclaim their money after some time.

### Implications for the Fee Market

-> Security is fine

The Lightning Network, or in more general terms, second layer payment networks are also interesting from an economic perspective.

On chain fees based on TX data size as data storage is limited resource. Off chain fees (if routed through hubs) based on transaction volume, as liquidity is the limited resource. Inflection point where transactions of large volume are cheaper to conduct on chain than off-chain. Where this inflection point will be is an open question as of now. The more adoption LN will see, the less hubs will be able to charge for routing and the higher the overall liquidity. Inflection point at higher value TXs.

"The fees pay for the time-value of money for consuming the channel for a determined maximum period of time, and for counterparty risk of non-communication." - lightning paper

“\textit{The adoption of quantum resistant techniques will also result in larger (and more expensive) transactions. Post-quantum crypto algorithms require larger key sizes, which in turn increase the size of non-witness data in a transaction.}” - Lucas Nuzzi


## Expanding on Payment Channels

now there is more that you can with blockchain besides "simple" payments. Smart contracts allow for more complex logic, e.g. games running on decentralized infrastructure. But does it really make sense to have each move of your virtual chess game processed and verified by thousands of nodes all around the world?

There are different approaches to expanding payment channels, so state updates can be exchanged off-chain, until they are settled. Generally, these more flexible constructions are referred to as state channels, and they come in different flavors, focusing on several use-cases.

### State Channels

general idea: data off-chain in second communications network

Can be payments, but can also be other stuff (data)

State channels are the more general form of payment channels — they can be used not only for payments, but for any arbitrary “state update” on a blockchain — like changes inside a smart contract.

State channels rely on availability

can use state channels on top of sidechains/shards/plasma chains

construction of network a "modular recursive approach" used, "virtual state channels are built recursively on top of ledger or other – already constructed – virtual state channels."

### Counterfactual

Goal is to make state channels accessible to projects/developers who are not state channel experts themselves



"We describe \textit{generalized} state channels, a construction that allows users to install new functionality in an existing channel without touching the blockchain, using \textit{counterfactual instantiation} of contracts within a channel."

"propose to build a generalized framework where state is deposited once, and can then be utilized by any application compliant to the framework."

"Similarly, participants in a state channel should be able to counterfactually instan- tiate smart contracts within a state channel, installing new functionality9 into the state channel without any on-chain action."

### Game Channels

For instance, Funfair has built state channels (which they call “Fate channels”) for their decentralized gambling platform, Spankchain has built one-way payment channels for adult performers (they also used a state channel for their ICO), and Horizon Games is using state channels in their first ethereum-based game.

### Perun

Perun channels have three innovations compared to other payment channels which are shared by our approach: first, their technique for routing-through-intermediaries, which they call virtual channels, is very similar to ours in that the virtual channel is “noninteractive” and
does not require cooperation from the intermediary for every payment.

### Bolt - Anonymous Payment Channels

[*Bolt: Anonymous Payment Channels for Decentralized Currencies*](\footnote{\url{https://eprint.iacr.org/2016/701.pdf}}) is a network proposed by Matthew Green and Ian Miers in 2016. Bolt stands for *Blind Off-chain Lightweight Transactions*. It is currently [being considered](\footnote{\url{https://github.com/ZcashFoundation/libbolt}}) for the Zcash protocol by the Zcash foundation.

Privacy is achieved by leveraging [*blind signatures*] and [*zero knowledge*] proofs. To make privacy guarantees even stronger, channel opening can be done with [*shielded transactions*]. The authors not only plan to build Bolt on Zcash, but also retrofit it to offer a private payment channel option on Bitcoin and Litecoin.

## Summary

"Layer 2 solutions share a common insight: once we have the hard kernel of certainty provided by a public blockchain, we can use it as an anchor for cryptoeconomic systems that extend the usefulness of blockchain applications.
Now that we’ve surveyed some examples, we can be more specific about how layer 2 solutions apply this insight. The economic mechanisms used by layer 2 solutions tend to be interactive games: they work by creating incentives for different parties to compete against or “check” one another. A blockchain application can assume that a given claim is likely true, because we’ve created a strong incentive for another party to provide information showing it to be false.
In state channels, this is how we confirm the final state of the channel — by giving parties a chance to “rebut” each other. In Plasma, it’s how we manage fraud-proofs and withdrawals. In Truebit, it’s how we ensure that solvers’ tell the truth — by giving an incentive to verifiers to prove the solver wrong."


layers built “on top” of ethereum won’t always have the same guarantee as on-chain operations. But they can still be sufficiently final and secure to be very useful — especially when that slight decrease in finality lets us perform operations much faster or with lower overhead costs.








##### Revocable Sequence Maturing Contract - RSMC

##### Hashed Time Lock Contract - HTLC



## FR's 

Mastering Lightning - https://github.com/lnbook/lnbook

https://medium.com/swlh/till-its-lightning-fast-uncover-the-development-of-the-lightning-network-fbd01bc0ea80#

https://medium.com/@yyforyongyu/till-its-lightning-fast-uncover-the-lightning-network-transactions-f3180e467857

Rene Pickard Lighning Deck https://upload.wikimedia.org/wikipedia/commons/b/b7/Introduction_to_the_Lightning_Network_Protocol_and_the_Basics_of_Lightning_Technology_%28BOLT_aka_Lightning-rfc%29.pdf

Bitcoin Magazine 3 Part Series https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791

Bolt: Anonymous Payment Channels https://eprint.iacr.org/2016/701.pdf

Game Channels: State Channels with integrated PRNG https://eprint.iacr.org/2019/362.pdf

Raiden Network 101 https://raiden.network/101.html

Lightning Paper: https://lightning.network/lightning-network-paper.pdf

General State Channel Networks https://eprint.iacr.org/2018/320.pdf

Counterfactual: Generalized State Channels https://l4.ventures/papers/statechannels.pdf

State Channels on Eth https://medium.com/l4-media/making-sense-of-ethereums-layer-2-scaling-solutions-state-channels-plasma-and-truebit-22cb40dcc2f4
