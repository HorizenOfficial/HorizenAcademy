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

A common criticism of blockchain tech is that it doesn't scale in a decentralized setting and therefore won't be able to support mainstream adoption. Now there are different ways to scale blockchains and increase their throughput, but what if we can create more interaction leveraging the security of blockchain with the capacity we already have available? Meet layer-two transactions on payment or state channels.

![Scaling](/assets/post_files/technology/expert/1.5-DAGs/scaling_dag_D.jpg)

We already talked about scalability in several of our previous articles. We introduced [sidechains]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-expanding-blockchain-with-sidechains %}) as a scaling approach that allows to spread the workload otherwised performed by a single set of nodes on the mainchain to several sets of nodes, each responsible for their own sidechain.

We also talked about [Directed Acyclic Graphs (DAGs)]({{ site.baseurl }}{% post_url /technology/expert/2022-01-06-a-relative-the-dag %}) that hold the potential to dynamically adjust the on-chain (or "on-DAG") throughput by introducing a new type of data structure supporting two-dimensionality in an otherwise one-dimensional blockchain world.

Here, we will cover another highly promising approach to make blockchains security promise accessible to a larger user-base - payment and state channels. The general idea is as follows: two users place funds in a channel. Now the participants can send funds back and forth by exchanging signed transactions (TXs) which are NOT broadcast to the blockchain, although they would be considered valid transactions. Only when participants are done transacting do they use the blockchain to settle their current balances. That way, they can exchange an arbitrary amount of transactions while placing only two of them on-chain: the channel-opening and closing transaction.

Payment channels are no trivial topic and there are many different projects working on them. In order to cover the process from opening a channel, to updating its balance and lastly closing it we will, for the most part of this article, focus on the best-known and most active payment channel implementation: the Lightning Network. Afterward we will give a glimpse into the rest of the state channel world.

### Payment Channels

Before we look into how several payment channels can be combined to form a network such as Lightning, let's consider an example where two users, Alice and Bob want to use a payment channel to save on transaction fees as they frequently send money back and forth.

The primitives used to build a payment channel are mostly familiar if you have read the previous articles in the Expert Level of the Academy:

- Regular Transactions in the [UTXO model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}),
- P2SH Addresses and more specifically MultiSig Addresses that we covered in our [article on wallets]({{ site.baseurl }}{% post_url /technology/expert/2022-03-01-wallets-expert %}),
- [Cryptographic hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}), and
- Timelocks

The premise is the construction being trustless by design: you must not have to rely on your counterparty to transact securely. Whereas the underlying blockchain derives it's security from the computational power of its miners in [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) blockchains it is derived from economic disincentives in the case of payment channels. Namely, when one party tries to cheat, the other party will be granted all the money within the bilateral channel. This allows participants to consider updates to the channel "final" although only computed locally.

#### Payment Channels are MultiSig Addresses

Simply speaking a payment channel is 2-of-2 MultiSig account, or more generally speaking a [Pay to Script Hash (P2SH)](https://bitcoin.org/en/glossary/p2sh-address) address. This can be understood as a simple [smart contract]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-guaranteed-execution-with-smart-contracts %}) controlling funds (the channel balance) and defining the conditions under which these funds can be spent.

![Spending from a P2SH Multi-Signature Address](/assets/post_files/technology/expert/3.0-wallets/multi-sig-spending_D.jpg)
![Spending from a P2SH Multi-Signature Address](/assets/post_files/technology/expert/3.0-wallets/multi-sig-spending_M.jpg)

The spending conditions for MultiSig account are defined in the [*redeem script*](https://bitcoin.org/en/glossary/redeem-script). The hash of the redeem script functions as the address - a *Pay to Script-Hash* (P2SH) address. This address and the information contained in the redeem script comprises the locking script of UTXO sent to the P2SH address.

#### Exchanging Signed Transactions

The general idea of a payment channel is the following: two frequently transacting parties deposit money via a *funding transaction* in a 2-of-2 MultiSig account, opening the channel. Both parties need to sign off any TX, that spends from this account. Now both parties exchange signed transactions whenever they transact.

![The Concept of Payment Channels](/assets/post_files/technology/expert/4.3-state-and-payment-channels/payment-channel-concept.jpg)

These *commitment transactions* updating the channel state are, although valid on-chain transactions, never broadcast but only kept locally by participants. They serve as verifiable receipts of channel state modifications. Only when participants want to close the channel, they will broadcast the final channel update via a *closing transaction* to the blockchain.

This allows them to perform an infinite number of bilateral transactions while only broadcasting two transactions: the funding TX opening the channel, and the closing TX settling the current balance on-chain.

#### Payment Channel Implementations

Payment channel networks are built from multiple separate channels that can be coupled when needed. There are several payment channel networks built on top of differnt blockchain protocols, some even making different protocols interoperable.

[Raiden](https://raiden.network/101.html) is a payment channel network build on Ethereum.

[Bolt](https://eprint.iacr.org/2016/701.pdf) is an anonymous payment channel network

The [Lightning Network](https://lightning.network/lightning-network-paper.pdf) is a payment channel network built on top of the Bitcoin protocol, but also deployed on Litecoin. It is the second-layer network that has seen the most activity in terms of development as well as [transacted volume](https://1ml.com/). We use the lightning network as an example to lead you through the creation of a payment channel, updating its balance and finally closing it. While the different implementations of second-layer payment networks differ, the general idea remains and by focusing on a single example we can take a more in-depth look at the technology.

## Lightning Network

There are two systems to be focused on here, one is the original Bitcoin network, the other is the lightning network. Both systems are circulating bitcoins by making different types of transactions, depending on where the money flows, they can be categorized into,

"Any blockchain with the necessary characteristics can plug into the Lightning Network, which means intermediary nodes are able to process transfers between users holding different assets in a non-custodial manner. For example, a node connected to both the Bitcoin and Litecoin networks can route a payment from a Litecoin user to a Bitcoin user via the Lightning Network."

Essentially, transactions made in the lightning network can legitly be broadcasted into the Bitcoin network, which means the layer-two transaction can be viewed as a specialized layer-one transaction.

immediately releases remote funds to the counterparty, and start a challenge period after which
the broadcaster receives the remaining local funds"

stack of cheques that they could deposit whenever they want.

open/close: cross-layer transaction as it’s interacting with both networks

Later on, as we will see, the cross-layer transaction is essentially a layer one transaction, with the lightning network as an individual entity of the blockchain.

If the transaction is meant to stay in the lightning network, then it’s called the layer-two transaction

RSMC, Revocable Sequence Maturing Contract

focus on bidirectional payment channels. connecting them to a network of channels (Lightning Network) via HTLCs out of scope

Lightning paper 3.5: fidelity bond and breach remedy transaction

### Opening a Payment Channel - Cross-Layer Transaction

A single participant, usually the one paying the other for some reason, opens the channel by creating a funding transaction. In our example Alice wants to open a channel with Bob who might have an online shop that she uses regularly. As we already know, a payment channel is 2-of-2 MultiSig account. The first thing we need to ensure is that Alice doesn't loose her money when Bob becomes unresponsive and the money gets stuck in the account. This doesn't even have to be due to bad intentions; Bob could simply loose the key needed to sign of any spending from the MultiSig.

#### Unilateral Funding

At this point the Lightning network only supports unilateral channel funding. One of the participants, in our example Alice, is funding the channel. To do so, she creates the funding transaction, signs it but does NOT broadcast it. She uses the transaction identifier (TXID) as well as the relevant output number to create a first commitment transaction refunding her and signs it. She also passes the [outpoint](https://bitcoin.org/en/glossary/outpoint) to Bob, who will create his version of the same transaction and sing it. The partially signed commitment transactions are now exchanged and stored locally. Soon we will see why we need two different versions of the same TX.

![Unilateral payment channel funding and opening](/assets/post_files/technology/expert/4.3-state-and-payment-channels/channel-opening.jpg)

Only at this point is Alice safe to broadcast her funding transaction. She knows she can reclaim the money at any point as she already has a commitment transaction signed by Bob spending her funding TX and refunding her. She also knows Bob cannot spend her money as both of their signatures are required to consume the funding UTXO and the transaction she signed is refunding her. The worst-case scenario at this point is her spending transaction fees for sending her money on a round-trip.

The established payment channel now consists of a signed and broadcast funding transaction and a first commitment transaction serving as an insurance for Alice. This commitment transaction is signed by both participants but ideally it is never broadcast, although it is a valid on-chain transaction.

![Established payment channel between Alice and Bob](/assets/post_files/technology/expert/4.3-state-and-payment-channels/open-channel.jpg)

### Updating Channel Balance - Layer-Two Transaction

Now Alice wants to make the first transaction paying for some item she bought in Bob's shop. The idea is to create a new commitment transaction, updating the channel balance. It's important to note that all commitment transactions spend the same UTXO created in the funding transaction. This also means that all commitment transactions need to be signed by both participants as these are the spending conditions defined when the channel was established.

Alice wants to send Bob 0.2 BTC of the 1 BTC total she deposited in the channel. She does so by creating a new commitment TX which now has two outputs instead of one: the first output acting as a change output paying her the remaining 0.8 BTC and a second output paying Bob. She can sign this TX and send it to Bob for him to keep. Bob creates a TX with the same outputs, signs it, and gives it to Alice. Now there are two versions of the same commitment transaction, each paying the participants the same amount of money. We'll get to the *why* in a moment.

![Updated commitment transaction modifying the channel state](/assets/post_files/technology/expert/4.3-state-and-payment-channels/first-channel-update.jpg)

At this point there is a first incentive for one of the participants to cheat. A few days after both parties agreed on the updated commitment TX, Alice has received the good she paid for. It would now be in her best interest to broadcast the first commitment TX sending her the entire money. Bob, on the other hand, has an interest in the more recent state hitting the chain.

![Updated commitment transaction modifying the channel state](/assets/post_files/technology/expert/4.3-state-and-payment-channels/commitment-overview.jpg)

All commitment TXs are valid Bitcoin transactions. Although they are meant to stay on the Lightning Network, they can be broadcast on-chain at any time. Blockchain nodes are agnostic of payment channels and have no way to verify whether a broadcast transaction represents a recent or old state.

The Lightning Network has strong incentives in place for payment channels participants to act honestly. If Alice was to broadcast an old state, Bob would be credited the entire balance of the channel and vice versa. How does that work?

#### Preventing Participants from Broadcasting old States

Here, we finally get to answer why Alice and Bob needed to create two versions of the same transaction earlier.

The tools we have at our disposal for preventing Alice from submitting the old state are the spending conditions of the outputs commitment transaction. The idea is to give Bob time to notice that Alice broadcast an old state and to provide him with a tool to claim the entire channel balance when it happens. We combine two different mechanisms to guarantee said behavior: timelocks and one-time private keys. Let's give Bob some time to react to Alice's cheating attempt first.

#### Using Timelocks in the Spending Condition

We need to make sure Alice cannot spent the UTXO of the first commitment transaction right away if she broadcasts it. Miners will accept the old commitment TX as soon as it is submitted on-chain. We cannot prevent this using the spending conditions. What we can prevent though, is Alice spending the UTXO right away. Therefore, we place a timelock in it.

Bitcoin and most other Bitcoin-based protocols support essentially two different types of timelocks: absolute and relative. The absolute timelock `CheckLockTimeVerify` makes funds spendable at a defined time, e.g. 10 pm tomorrow night. The relative timelock `CheckSequenceVerify` starts a countdown as soon as a transaction is confirmed. The time unit for relative timelocks is a number of blocks, e.g. the output might become spendable in 100 blocks. When a timelock is placed in a transaction output, it basically adds another item to the checklist nodes will go through when validating a transaction. Besides checking whether the UTXO was previously unspent and valid signature was presented



Bitcoin supports essentially two ways to lock funds for some time, using relative or absolute timelocks.

** spin: when output is spent, nodes will check (besides the usual stuff like valid sig) if the time constrain is satisfied



The relative timelock `CheckSequenceVerify` starts a countdown as soon as a transaction is confirmed. For relative timelocks a number of blocks is used as the unit to provide the locktime in.

Timelock in TX 002A: 10 days before alice can spend funds. Remember, this TX served as an insurance for her in case bob becomes unavailable. It would return her money.

![Securing transaction outputs using timelocks](/assets/post_files/technology/expert/4.3-state-and-payment-channels/timelock.jpg)

But this is also the transaction she would try to broadcast in order to steal Bob’s 0.2 BTC.

Modified spending conditions to give Bob time to react, but not sufficient as he could just steal all the money now. Could pretened to be unavailable so she broadcasts it and pooof, all the money is gone. Next protection for Alice.

#### Generating One-Time Keys

Only requring a single sig from Bob is not enough, so we expand on the second spending condition and make it a multisig.

And we use a little trick: different private keys for different ComTXs. sk used to create sig. Will consider private keys and valid signatures as equivalent.

With each channel update both, Alice and Bob generate a new private key and derive an address from it.

![Generating One-Time Keys for each Commitment Transaction](/assets/post_files/technology/expert/4.3-state-and-payment-channels/commitment-keys.jpg)

Alice1 and used in funding TX. Alice2 and Bob2 used in first commitment TX spending condition. Once they agree on the updated channel state where Bob receives 0.2 BTC, the keys Alice2 and Bob2 are exchanged.

Now Bob can be sure the transaction he already signed (002A) can’t be broadcast and spent immediately by Alice. Alice can be sure that if Bob becomes unresponsive, she is save to broadcast the TX, as she has not shared the key Alice2 yet.

Since Bob has no interest in broadcasting the first TX, a single spending condition is sufficient here.

![Generating One-Time Keys for each Commitment Transaction](/assets/post_files/technology/expert/4.3-state-and-payment-channels/multisig-output-protection.jpg)

To protect the outputs in the second channel update in which Alice pays Bob 0.2 BTC, a new key is generated by both parties, Alice3 and Bob3. and so on















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






This property is based on the principle of *total consent*. For every modification of the state within a state channel requires explicit cryptographic consent or proof from all parties involved. While this has the advantage of all state changes (most recent ones) being broadcastable to the blockchain at all times, it requires all parties to keep records of the changes and be responsive at all times.



privacy. high in bidirectionl channel. Nobody will ever know about intermediary balances and payments as only the final state is broadcast on-chain. Even when routing a payment through several channels privacy is generally better compared to eternally recorded on-chain transactions, although relayers might get information....


#### Bilateral Funding

3 transactions in total:

Alice funds channel with 1 coin. outputs locking script based on both, Alice's and Bob's signatures

Bob funds channel with 2 coins. outputs locking script based on both, Alice's and Bob's signatures

Both are not signed.

Now Commitment Transaction. Inputs are the two outputs above. Outputs refund participants.

not possible yet, new sighash flag needed to allow users spending outputs not yet confirmed.

SIGHASH explained https://raghavsood.com/blog/2018/06/10/bitcoin-signature-types-sighash

"For instance, Alice creates the commitment transaction, signs it, sends it to Bob, and Bob will send it back with his signature. Or they could exchange their signatures for this particular transaction. Either way, the result is that they both have the same spendable commitment transaction."