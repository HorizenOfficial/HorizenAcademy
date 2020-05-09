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

A common criticism of blockchain technology is that it doesn't scale in a decentralized setting and therefore won't be able to support mainstream adoption. Now there are different ways to scale blockchains and increase their throughput, but what if we can allow for more interaction leveraging the security of blockchain with the capacity we already have available? Meet layer-two transactions on payment or state channels.

![Scaling](/assets/post_files/technology/expert/4.3-state-and-payment-channels/scaling_dag_D.jpg)

We already talked about scalability in several of our previous articles. We introduced [sidechains]({{ site.baseurl }}{% post_url /technology/expert/2022-01-04-expanding-blockchain-with-sidechains %}) as a scaling approach that allows to spread the workload otherwised performed by a single set of nodes on the mainchain to several sets of nodes, each responsible for their own sidechain.

We also talked about [Directed Acyclic Graphs (DAGs)]({{ site.baseurl }}{% post_url /technology/expert/2022-01-06-a-relative-the-dag %}) that hold the potential to dynamically adjust the on-chain (or "on-DAG") throughput by introducing a new type of data structure supporting two-dimensionality in an otherwise mostly one-dimensional blockchain world.

Here, we will cover another highly promising approach to make blockchains security promise accessible to a larger user-base - payment and state channels. The general idea is as follows: two users place funds in a channel. Now the participants can send funds back and forth by exchanging signed transactions (TXs) which are NOT broadcast to the blockchain. Only when participants are done transacting do they use the blockchain to settle their current balances. That way, they can exchange an arbitrary amount of transactions while placing only two of them on-chain: the channel opening and closing transaction.

Payment channels are no trivial topic and there are many different projects working on them. In order to cover the process from opening a channel, to updating its balance and lastly closing it we will, for the most part of this article, focus on the best-known and most active payment channel implementation: the Lightning Network. Afterward we will give a glimpse into the rest of the state channel world.

## Payment Channels

Before we look into how several payment channels can be combined to form a network such as Lightning, let's consider an example where two users, Alice and Bob want to use a payment channel to save on transaction fees as they frequently send money back and forth.

The primitives used to build a payment channel are mostly familiar if you have read the previous articles in the Expert Level:

- Regular Transactions in the [UTXO model]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}),
- P2SH Addresses and more specifically MultiSig Addresses that we covered in our [article on wallets]({{ site.baseurl }}{% post_url /technology/expert/2022-03-01-wallets-expert %}),
- [Cryptographic hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}), and
- Timelocks

One premise is the construction being trustless by design: you must not have to rely on your counterparty to transact securely. Whereas the underlying blockchain derives it's security from the computational power of its miners in [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) blockchains it is derived from economic (dis)incentives in the case of payment channels. Namely, when one party tries to cheat, the other party will be granted all the money within the bilateral channel. This allows participants to consider updates to the channel "final" although only computed locally.

### Payment Channels are MultiSig Addresses

Simply speaking a payment channel is 2-of-2 MultiSig account, or more generally speaking a [Pay to Script Hash (P2SH)](https://bitcoin.org/en/glossary/p2sh-address) address. This can be understood as a simple [smart contract]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-guaranteed-execution-with-smart-contracts %}) controlling funds (the channel balance) and defining the conditions under which these funds can be spent. A 2-of-2 MultiSig account is based on two private keys, both of which need to sign a transaction for it to be valid.

![Spending from a P2SH Multi-Signature Address](/assets/post_files/technology/expert/4.3-state-and-payment-channels/multi-sig-spending_D.jpg)

The spending conditions for MultiSig account are defined in the [*redeem script*](https://bitcoin.org/en/glossary/redeem-script). The hash of the redeem script functions as the address - a *Pay to Script-Hash* (P2SH) address. This address and the information contained in the redeem script comprises the locking script of UTXO sent to the P2SH address.

### Exchanging Signed Transactions

The general idea of a payment channel is the following: two frequently transacting parties deposit money via a *funding transaction* in a 2-of-2 MultiSig account, opening the channel (`TX 001` in example below). Both parties need to sign off on any TX, that spends from this account. Both parties exchange signed transactions repeatedly spending from the same funding transaction whenever they transact (`TX 002` - `TX n`).

![The Concept of Payment Channels](/assets/post_files/technology/expert/4.3-state-and-payment-channels/payment-channel-concept.jpg)

These *commitment transactions* updating the channel state are, although valid on-chain transactions, never broadcast but kept locally by the channel participants. They serve as verifiable receipts of channel state modifications. Only when participants want to close the channel, they will broadcast a final channel update via a *closing transaction* on the blockchain (`TX (n+1)`).

This allows a practically unlimited number of bilateral transactions to occure, while only broadcasting two transactions: the funding TX opening the channel, and the closing TX settling the current balance on-chain.

### Payment Channel Implementations

Payment channel networks are built from multiple separate channels that can be coupled when needed. There are several payment channel networks built on top of differnt blockchain protocols, some even making protocols interoperable.

The best known payment channel protocol built on Ethereum is [Raiden](https://raiden.network/101.html). It supports the transfer of ether, as well as ERC20 tokens off-chain.

[Bolt](https://eprint.iacr.org/2016/701.pdf) is a network proposed by Matthew Green and Ian Miers in 2016. Bolt stands for *Blind Off-chain Lightweight Transactions*. It is currently [being considered](\footnote{\url{https://github.com/ZcashFoundation/libbolt}}) for the Zcash protocol by the Zcash foundation but could also be deployed on top of other blockchain protocols. Bolt achieves high privacy guarantees by leveraging *blind signatures* and *zero knowledge proofs*. To make privacy guarantees even stronger, channel opening can be done with *shielded transactions*. The authors not only plan to build Bolt on Zcash, but also retrofit it to offer a private payment channel option on Bitcoin and Litecoin.

The [Lightning Network](https://lightning.network/lightning-network-paper.pdf) is a payment channel network built on top of the Bitcoin protocol, but also deployed on Litecoin. It is the second-layer network that has seen the most activity in terms of development as well as [transacted volume](https://1ml.com/). We use the lightning network as an example to lead you through the creation of a payment channel, updating its balance and finally closing it.

Implementations of second-layer payment networks differ in their details but the general idea remains and by focusing on the primitives of Lightning as a single example we can take a more in-depth look at the technology in general.

## Lightning Network

When you think about the Lightning network there are two systems to consider. One is the original Bitcoin network, the other is the Lightning network. Both systems are circulating bitcoin by making different types of transactions. But Lightning is not limited to Bitcoin.

> "Any blockchain with the necessary characteristics can plug into the Lightning Network, which means intermediary nodes are able to process transfers between users holding different assets in a non-custodial manner. For example, a node connected to both the Bitcoin and Litecoin networks can route a payment from a Litecoin user to a Bitcoin user via the Lightning Network." - [Kyle Torpey](https://en.longhash.com/news/litecoins-role-in-the-development-of-bitcoins-lightning-network)

The Lightning network relies on two differnt types of "contracts". Simple bilateral payment channels are realized using *Revocable Sequence Maturity Contracts* (RSMCs). Connecting payment channels to a network happens based on *Hashed Time Lock Contracts* (HTLCs). We will pick the terms up later in the article, at a time where they will make a lot more sense to you. In the following sections we will mostly focus on bilateral payment channels. A detailed description of payment channel networks is not in scope for this article.

### Opening a Payment Channel - The Funding Transaction

A single participant, usually the one paying the other, opens the channel by creating a funding transaction. In our example Alice wants to open a channel with Bob who might have an online shop that she uses regularly. As we already know, a payment channel is 2-of-2 MultiSig account. The first thing we need to ensure is that Alice doesn't loose her money when Bob becomes unresponsive and the money gets stuck in the channel. This doesn't even have to be due to bad intentions; Bob could simply loose the key needed to sign of any spending from the MultiSig.

At the time of writing the Lightning network only supports unilateral channel funding. Bilateral funding will be available as soon as spending from unsigned transcations is supported with the implementation of a new [SIGHASH flag](https://raghavsood.com/blog/2018/06/10/bitcoin-signature-types-sighash)(SIGHAS_NOINPUT).

One of the participants, in our example Alice, is funding the channel. To do so, she creates the funding transaction, signs it but does NOT broadcast it yet. Next, she uses the transaction identifier (TXID) as well as the relevant output number to create a first commitment transaction (`TX 002`) refunding her and signs it. She also passes the [outpoint](https://bitcoin.org/en/glossary/outpoint) to Bob, who will create his version of the same transaction and sing it. The partially signed commitment transactions are now exchanged and stored locally. Soon we will see why we need two different versions of the same TX.

![Unilateral payment channel funding and opening](/assets/post_files/technology/expert/4.3-state-and-payment-channels/channel-opening.jpg)

Only at this point is Alice safe to broadcast her funding transaction. She knows she can reclaim the money at any point as she already has a commitment transaction signed by Bob spending her funding TX and refunding her. She also knows Bob cannot spend her money as both of their signatures are required to consume the funding UTXO and the transaction she signed and passed to Bob is refunding her. The worst-case scenario at this point is Alice paying for transaction fees sending her money on a round-trip.

![Established payment channel between Alice and Bob](/assets/post_files/technology/expert/4.3-state-and-payment-channels/open-channel.jpg)

The established payment channel now consists of a signed and broadcast funding transaction and a first commitment transaction serving as an insurance for Alice. This commitment transaction is signed by both participants but ideally it is never broadcast, although it is a valid on-chain transaction.

### Updating the Channel Balance - Commitment Transactions

Now Alice wants to make a first transaction paying Bob, maybe because she bought something in his shop. The idea is to create a new commitment transaction, updating the channel balance. It's important to note that all commitment transactions spend the same UTXO created in the funding transaction. This also means that all commitment transactions need to be signed by both participants as these are the spending conditions defined when the channel was established.

Alice wants to send Bob 0.2 BTC of the 1 BTC total. She does so by creating a new commitment TX which now has two outputs instead of one: the first output acting as a change output paying her the remaining 0.8 BTC and a second output paying Bob. She can sign this TX and send it to Bob for him to keep. Bob creates a TX with the same outputs, signs it, and gives it to Alice. Now there are two versions of the same commitment transaction, each paying the participants the same amount of money. We'll get to the *why* in a moment.

![Updated commitment transaction modifying the channel state](/assets/post_files/technology/expert/4.3-state-and-payment-channels/first-channel-update.jpg)

At this point there is a first incentive for one of the participants to cheat. A few days after both parties agreed on the updated commitment TX, Alice has received the good she paid for. It would be in her best interest to broadcast the first commitment TX sending her the entire money in tha channel. Bob, on the other hand, has an interest in the more recent state hitting the chain.

![Updated commitment transaction modifying the channel state](/assets/post_files/technology/expert/4.3-state-and-payment-channels/commitment-overview.jpg)

All commitment TXs are valid Bitcoin transactions. Although they are meant to stay on the Lightning Network, they can be broadcast on-chain at any time. Blockchain nodes are agnostic of payment channels and have no way to verify whether a broadcast transaction represents the most recent channel state or an old one.

In the Lightning Network strong incentives were put in place for payment channels participants to act honestly. If Alice was to broadcast an old state, Bob would be credited the entire balance of the channel and vice versa. How does that work?

#### Preventing Participants from Broadcasting old States

Here, we finally get to answer why Alice and Bob needed to create two versions of the same transactions earlier.

The tools we have at our disposal for preventing Alice from submitting an old state are the spending conditions of the commitment transaction outputs. The idea is to give Bob time to notice that Alice cheated by broadcasting an old state and to provide him with a tool to claim the entire channel balance. We combine two different mechanisms to guarantee said behavior: timelocks and one-time private keys. Let's give Bob some time to react to Alice's cheating attempt first by introducing a timelock.

#### Using Timelocks in the Spending Condition

We need to make sure Alice cannot spent the UTXO of the first commitment transaction right away if she broadcasts it. Miners will accept the old commitment TX as soon as it is submitted on-chain. We cannot prevent this using the spending conditions. What we can prevent though, is Alice actually spending the money. Therefore, we place a timelock in it.

Bitcoin and most other Bitcoin-based protocols support essentially two different types of timelocks: absolute and relative ones. The absolute timelock `CheckLockTimeVerify` makes funds spendable at a defined time, e.g. 10 pm tomorrow night. The relative timelock `CheckSequenceVerify` starts a countdown as soon as a transaction is confirmed. The time unit for relative timelocks is a number of blocks, e.g. the output might become spendable in 100- blocks time. When a timelock is placed in a transaction output, it basically adds another item to the checklist nodes will go through when validating a transaction. Besides checking whether the UTXO was previously unspent and a valid signature was presented nodes check if the absolute time has been crossed or if the specified amount of blocks has been passed.

The output we modify to prevent Alice from cheating is the one in the first commitment transaction: the one she would broadcast to steal Bob's 0.2 BTC. There are to versions of this transaction: one created and signed by Alice and sent to Bob, the other created and signed by Bob and shared with Alice. We denote the version signed by Bob as TX 002**A**, as Alice is the one that can broadcast it (her signature is missing).

Let's assume Alice and Bob agreed to provide each other with a 10 day rebuttal-period. If one were to cheat, the other had 10 days to react. In reality, this would mean a relative timelock of 1440 blocks in Bitcoin or 5760 blocks in Horizen. For the sake of simplicity, we will simply pretend we can use 10 days as a time unit.

![Securing transaction outputs using timelocks](/assets/post_files/technology/expert/4.3-state-and-payment-channels/timelock.jpg)

Remember this transaction initially served as an assurance for Alice that she would get refunded in case Bob becomes unresponsive. By placing a timelock in the output, we have now ensured Bob has time to react in case Alice were to cheat. As soon as Alice broadcasts the transaction, she has to wait for 10 days before the output becomes spendable with her signature. If Bob notices he can go ahead and spend the money immediately using his signature.

The timelock achieved our first objective: Bob has tiome to notice the cheating attempt and react. At the same time it introduced a new weakness. If you look at the transaction above, Bob can take the money as soon as the transaction hits the blockchain. If he was sneaky, he would have Alice fund the channel and pretend to be unresponsive until she would finally decide to broadcast the transaction in an attempt to get refunded. Now Bob could go ahead and spend the UTXO right away. It's time to apply the second mechanism ensuring honest behavior: one-time private keys.

#### Using One-Time Keys to Prevent Theft

**Note**: For the sake of simplicity we consider [private keys]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-2-generating-keys-and-addresses %}) and [digital signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) as "equivalent" in this article. Digital signatures are generated using a private key and a message. During the verification, the signature, public key and message are taken as inputs and the produced output is binary: either the signature is valid or not.

Requring Bob to simply sign-off on the TX does not protect Alice, so we expand on the second spending condition and make it a MultiSig account. Instead of using the initially used private keys `Alice1` and `Bob1` in the spending condition, we use a new pair of keys generated by each participant respectively.

These keys are generated when the first commitment TXs (TX 002A and 002B) are created and the public keys derived from them are exchanged and placed in the spending condition. When participants agree on the first channel update, here Alice paying Bob 0.2 BTC (TX 003), the one-time keys `Alice2` and `Bob2` used in the original commitment transaction's spending condition are exchanged.

![Generating One-Time Keys for each Commitment Transaction](/assets/post_files/technology/expert/4.3-state-and-payment-channels/commitment-keys.jpg)

At this point, Bob can be sure the transaction he already signed (`TX 002A`) can’t be broadcast and spent immediately by Alice due to the timelock. Alice can be sure that if Bob becomes unresponsive, she is save to broadcast the transaction because she has not shared the key `Alice2` yet and Bob can't steal the money.

This explains why it was important that Alice and Bob generated two versions of the same transaction. Remember that `TX 002A` was created by Bob. He placed the timelock in Alice's spending condition to protect himself from Alice boradcasting an old state. Without including the second MultiSig condition, Alice would not have agreed to fund the channel in the first place. Since Bob has no interest in broadcasting the first commitment TX it is sufficient for Alice to place a single spending condition her version's output.

![Generating One-Time Keys for each Commitment Transaction](/assets/post_files/technology/expert/4.3-state-and-payment-channels/multisig-output-protection.jpg)

Above you can see the two different versions of the initial commitment TX refunding Alice. The green signature indicates which party has created and already signed it. Going forward both, Alice and Bob will each generate a new one-time private key with every channel update and exchange the one-time keys used in the previous transaction.

Before we explained how trustlessness is ensured we were already one step further. Alice had agreed to pay Bob 0.2 BTC and the keys `Alice2` and `Bob2` were exchanged. The level of security we wanted to achieve is now guaranteed: Bob has time to react (10 days) when Alice tries to cheat and he can claim the entire channel balance because he can provide `Alice2`, `Bob2` and `Bob1`.

One of the innovations introduced with blockchain technology was solving the double spend problem without a central point of control. This property is also crucial in this context, as it ensures the output in `TX 002A` is only spent once: either by satisfiying the first spending condition - Alice timelock - or the second spending condition - Bob's MultiSig.

#### The Second Commitment Transaction

The last set of transactions we need to look at are the ones paying Bob 0.2 BTC. While we looked at the, schematically, we didn't consider the spending conditions placed in their outputs yet.

![The first channel update happening in the second commitment transaction](/assets/post_files/technology/expert/4.3-state-and-payment-channels/second-commitment-transaction.jpg)

The first version signed by Bob and broadcastable by Alice uses the same spending conditions in Alice's output of 0.8 BTC as the previous commitment TX did. It serves the same function: if Alice made a second payment to Bob she would again be incentivized to broadcast an old state once she received the good. The only difference is the updated set of one-time keys (`Alice3` and `Bob3`) needed to satisfy the MultiSig output.

This time, Alice also secured Bob's output in `TX 003B` with a timelock and a MultiSig based spending condition. If the next transaction (`TX 004`) was paying Alice, Bob would thereafter have an incentive to broadcast an old state and Alice is protecting herself against this.

### Closing a Payment Channel

The bilateral payment channel between Alice and Bob can be closed in three different ways, two of which we have covered at least indirectly. If no dispute occures, both parties will agree on closing the channel mutually. When one party becomes unresponsiven, the other party might unilaterally close the channel. If one party tries cheating the other and gets caught, claiming the entire channel balance via the revocation mechanism is the third and last option to close a channel.

#### Mutually Closing a Channel

Let's assume Alice and Bob realize that they won't use their channel any more. Both are happy with the current state of the channel paying Bob 0.2 BTC and Alice the remaining 0.8 BTC.

![The first channel update happening in the second commitment transaction](/assets/post_files/technology/expert/4.3-state-and-payment-channels/mutual-channel-closing.jpg)

They will cooperatively create and sign a closing transaction, with both outputs spendable immediately by either participant. This is the best case scenario: no party has their money locked.

#### Unilaterally Closing a Channel

The second best scenario is one of the participants broadcasting the current channel state. The commitment transaction being broadcasted in this scenario is the one we modified in two steps: using a time lock first and adding a MultiSig output next to prevent Bob from stealing Alice's money.

This scenario is good in that both parties get the amount of money that they rightfully own. The only caveat is that the party broadcasting the commitment transaction has their funds locked for whatever time period was agreed upon when the transacion was created.

#### Revokation

The worst case scenario, at least for one of the channel participants is the revocation mechanism. If Alice tried to cheat Bob and he notices in time, he will claim the entire channel balance by fulfilling the MultiSig spending condition.

### Lightning Terminology

Commitment transactions are sometimes referred to as *Revocable Sequence Maturity Contracts* (RSMCs).

- Commitment transactions are *revocable* as they can be replaced with more recent channel updates.
- *Sequence* refers to the sequence of blocks used in the relative timelock
- *Maturity* refers to those outputs only becoming spendable after the relative lock time has passed - the contract has matured.

The transaction granting one party the entire channel balance in case the other was cheating is called the *Breach Remedy Transaction*.

- *Breach* as in breach of a contract, in which both parties agreed on only ever broadcasting recent channel states on-chain
- *Remedy* as in compensating the cheated party for said breach of contract.

While even this relatively simple composition of established features and functionalities supported by bitcoin-based protocols allows for a very useful construction, the truly interesting stuff happens, when you connect several payment channels to a network of channels - such as Lightning. In order to do so, we need another type of "contract" that extends the functionality of RSMCs - the *Hashed Time Lock Contract* or HTLC.

### Hashed Time Lock Contracts - HTLCs

Let's consider a situation where Alice and Bob want to transact using the Lightning network but don't have an open payment channel, yet. Both do have a channel with an intermediary person, let's call her Ingrid. Instead of opening a new channel, can't we just route a payment from Alice through Ingrid to Bob? It turns out we can and what we need to do so is a Hashed Time Lock Contract.

But does it make sense to worry about this construction if Alice and Bob can just create their own payment channel? You can consider each participant in the Lightning network a node *n*, that has a number of connections *e* (from *edges* as they are called in graph theory) to other nodes. The number of edges needed to connect a set of nodes individually can be computed as

$$
e = \frac{n(n-1)}{2}
$$

To connect three nodes, you need three edges, for five nodes you need ten edges, and for 5000 nodes you need 12,497,500 edges. In other words: individual connections don't scale well.

As the name suggests, HTLCs rely on cryptographic [hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) and for the most part on two of their key properties: being preimage resistant one-way functions and mapping inputs to a large output space making them collision resistant. In other words, you can't reverse a hash function and it's practically impossible to find two different inputs producing the same output.

#### Building a Network with HTLCs

The general idea of routing a payment through several payment channels is the payee creating a secret and passing the secrets hash to the payer as well as all the intermediaries. If Alice were to pay Bob through Ingrid, Bob would create a secret and provide its hash to Alice and Ingrid. Alice creates a (commitment) transaction paying Ingrid and Ingrid creates a (commitment) transaction paying Bob. The hash is part of the spending condition in each of those transactions and revealing its preimage (the secret) allows a a participant to claim the money. Once all transactions are set up, Bob reveals his secret and claims his money from Ingrid. Ingrid learns the secret in the process and uses it to unlock Alice's transaction paying her.

![Routing a payment through an intermediary from Alice to Bob using HTLCs](/assets/post_files/technology/expert/4.3-state-and-payment-channels/payment-routing.jpg)

What needs to be ensured by design is that the intermediaries are never at risk of losing money and that funds can be retrieved from the payment route in case one of the parties becomes inactive.

The time lock part comes into play as all participants need to responsive in order to route the payment through the hops. Once the chain of transactions is set up Bob has *x* days to claim his money from Ingrid. She in turn has *x-y* days to claim her money from Alice. This decreasing time lock construction ensures participants can reclaim their money if it gets stuck somewhere on the route.

If you would like to learn more about the details of constructing a network of payment channels we would like to refer you to the original [Lightning Network paper](https://lightning.network/lightning-network-paper.pdf). It is quite easy to digest if you approach it with the knowledge gained from reading this article and describes in depth how a trustless concatenation of payment channels is constructed.

### Implications for the Fee Market

The Lightning Network or, in more general terms, second layer payment networks are also interesting from an economic perspective. The transactions fees for on-chain transactions are calculated based on the amount of data a transaction takes up in the blockchain. Blocks are limited in size, hence miners select the transactions they want to include based on a "money per data" basis. It doesn't matter if you are transferring 1 Billion dollars or a single cent as long as the transaction takes up the same amount of storage capacity.

Transaction fees in a payment channel network are based on the volume of a transaction. Liquidity is the limiting factor in such a network, hence tying up liquidity is what intermediaries will base their fees on. In economic terms, they charge the time-value of money plus an amount for the counterparty risk of becoming unresponsive. Transactions of a few cents or dollars come at almost no cost, while transferring large amounts of money will come with premiums for the provided liquidity.

Currently, transacting in second-layer networks is mostly cheaper than on-chainn, but once payment channel networks will see more adoption, there should be an inflection point at which transactions over a certain amount of value will be cheaper to conduct on-chain where fees are based on data size. Where this equilibrium will establish is anyones guess today, but it will certainly be interesting to watch unfold.

## State Channels

Now there is more that you can with blockchain besides "simple" payments. Smart contracts allow running more sophisticated logic on a blockchain and you can even run simple games on a decentralized infrastructure using these constructions. But does it really make sense to have each move of your virtual chess game processed and verified by thousands of nodes all around the world? Scalability is an issue in blockchain-land.

With regards to throughput it suffices to look at the events around the launch of [CryptoKitties](https://www.cryptokitties.co/) on the Ethereum network in November 2017. It was the first decentralized Application, or dApp, that gained significant traction. At some point the dApp accounted for around 105 of total traffic on the Ethereum blockchain, causing transaction confirmation to take much longer than usual and increasing transaction fees significantly.

Many dApps don't just rely on the transfer of token, but also the transfer of data. This data, sent to a smart contract, updates the contracts state to represent the most recent contract interactions. The idea behind more generalized state channel constructions is moving these data transfers off-chain into state channel networks where they can be performed at lower financial and computational cost. Just like with payment channels, only the channel opening and closing happen on chain, while participants can transact money and data almost indefinitely while the channel is established. State channels are designed in a way that makes channel updates broadcastable on the underlying blockchain, just like commitment transactions in payment channels represent valid on-chain transactions when broadcast. State channels can also be combined to form networks, similar to the Lightning network.

Some notable examples of state channel projects include [Counterfactual](https://www.counterfactual.com/) and [Perun](https://www.perun.network/).

Counterfactual provides, besides a library for off-chain applications and a set of smart contracts, a [generalized state channel protocol](https://l4.ventures/papers/statechannels.pdf). The protocol aims to become a generalized framework, that application developers can use to leverage the benefits of state channels without developing them themselves. The protocol allows installing new functionalities into existing state channels without requiring on-chain transactions.

Perun channels introduces the concept of *virtual payment channels* over intermediaries. These channels are non-interactive in that they don't rely on intermediaries responsiveness. The general idea is construct virtual channels based on a number of already exisiting channels, that in the end work similar to a bilateral channel.

## Summary

Let's recap: payment channels allow you to transfer cryptocurrecies in a secondary environment, built on top of the blockchain. They are constructed by cleverly using well known primitives: Pay to Script Hash addresses, [hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) and time locks.

Payment channels are trustless by design. Whereas the underlying blockchain derives it's security guarantees from the computational power supporting the network, the counterparty risk in payment channels is eliminated through strong economic incentives to behave honestly.

A bilateral payment channel is simply a 2-of-2 MultiSig account, an output of the funding transaction that both participants need to sign off in order to spend from. Channel updates happen by exchanging signed commitment transaction, all of them spending from the same initial funding transaction and basically replacing one another subsequentially.

Both parties are prevented from broadcasting old states, by a time lock that only lets them spend "their" funds after some period of time. If an old state is broadcast by Alice, Bob can use this time to broadcast a breach remedy transaction crediting him the entire channel balance. Because the risk of losing all the funds in the channel is so high, channel participants usually opt for one of two other closing mechanisms. In a mutual close both parties sign a transaction granting both of them instant access to their share of the channel balance. In case one party becomes inactive, the other party will broadcast the most recent commitment transaction with the only caveat of having their funds locked for some time.

Payments can be routed through several existing payment channels using hashed time lock contracts (HTLCs). Connecting individual channels is the basis for forming payment channel networks like Lightning, Raiden or Bold.

State channels expand on payment channels in that they not only allow the transfer of money but also the transmission of state updates, e.g. to move the interaction with a [smart contract] or dApp into a secondary environment.

It's worth noting that layers built on top of existing blockchain protocols won't always provide the same level of security guarantees as the underlying blockchain, but the level of security is still high enough to make the highly useful for several use cases.
