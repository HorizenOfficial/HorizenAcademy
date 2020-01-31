---
layout: post
type: article
title: "State/Payment Channels"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/state-payment-channels/
topic: technology
level: expert
chapter: "Transactions"
published: false
---

https://medium.com/coinmonks/till-its-lightning-fast-uncover-the-lightning-network-transactions-f3180e467857

\url{* https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791}

\textbf{read counterfactual 4.3 again before writing!}

Data on blockchain is expensive, blockchain itself has limited scalability if decentralization is to be maintained.

"State channel networks allow execution of arbitrary complex smart contracts." So arbitrary exchange of data off chain. - state paper

Payment channels allow off chain transactions between users, even several hops. special case of state channel.

Very basic idea: "both parties can commit to signing a transaction and not broadcasting this transaction." - lightning paper... "Therefore, it is possible in bitcoin to devise a bitcoin script whereby all old transactions are invalidated, and only the new transaction is valid."

Channels are implemented using **smart contracts**. 

**TODO: Update -> little explanation for each box**

![Channel Hierarchy](/assets/post_files/technology/expert/4.2-state-and-payment-channels/channel_hierarchy_D.jpg)

### State Channels

one of several techniques for moving state modifications off-chain, relocating the required operations to a secondary environment. performed at lower cost. Differentiator between those off-chain solutions is if they require modifications to consensus rules/additional consensus assumptions. (for implementation).

Sidechains are an example that require consensus changes. Plasma is "Proof of Authority" (side?)chain. Horizen has delegated PoS-style sidechain, but also allows other consensus mechanisms to be run on a sidechain.

With sidechains funds can be lost if sidechains consensus mech. fails. With State channels the state can be restored on blockchain even if off-chain state modification mechanism fails.

This property is based on the principle of *total consent*. For every modification of the state within a state channel requires explicit cryptographic consent or proof from all parties involved. While this has the advantage of all state changes (most recent ones) being broadcastable to the blockchain at all times, it requires all parties to keep records of the changes and be responsive at all times.

as always: tradeoff. Sidechain you can loose data records as long as keys are kept safe and state is safe as long as sidechain works. Channels you must keep data and keys, but system can go down without risk.

"Examples of use cases for state channels are manifold and include contracts for digital content distribution, online gaming or fast decentralized token exchanges." - state paper

"Parties are prevented from submitting old messages by their counterparties: if Alice submits an old state, Bob is given an opportunity to “rebut” it by broadcasting a more recent state. This design allows participants to treat updates within a state channel as “final”, despite taking place entirely off-chain." $\to$ instant finality (UX improvement). finality based on Liveness and Persistence assumption (recap of the two)

more research in payment channels so far. best known general state channel project is *Raiden* on Ethereum

"two parties create a ledger state channel ($\delta$) by deploying a state channel contract, (SCC), in which each party locks some amount of coins."

state paper: "our general state channel construction allows two parties to have a virtual state channel whose opening does not require any interaction with the blockchain." (assuming ledger state channel exists before 

construction of network a "modular recursive approach" used, "virtual state channels are built recursively on top of ledger or other – already constructed – virtual state channels."

"The key observation that enables this recursion is that the state channels $\alpha$ and $\beta$ that are used to build $\gamma$ are accessed in a “black-box” way. In other words, the only property of $\alpha$ and $\beta$ needed in the construction of $\gamma$ is that one can execute off-chain contracts in them. This “black-box” property guarantees that our virtual state channel construction works also if the channels $\alpha$ and $\beta$ are virtual (not ledger), or in case one of them is virtual, and the other one is ledger."

**TODO**
![State Channel Construction](/assets/post_files/technology/expert/4.2-state-and-payment-channels/state_channel_construction_D.png)
{%
  include blocks/image_caption.html
  image="/assets/post_files/technology/expert/4.2-state-and-payment-channels/state_channel_construction_D.jpg"
  image2="/assets/post_files/technology/expert/4.2-state-and-payment-channels/state_channel_construction_M.jpg"
  caption="Graphic from State Channel Paper: Virtual State Channels \\(\gamma_i\\) constructed by combining Ledger State Channels \\(P_i\\) with each other and lastly by combining both, virtual and ledger state channels as in the construction of \\(\gamma_3\\)."
%}



\textbf{one or sentences explaining what a commitment scheme in general is}

Do I want to cover commitment scheme, state of contract like the online casino example? initial state $G_0$, G1 when alice deposits, G2 when Bob deposits, Alice "opens commitment" and G3 is computed. Payout according computed state. finally, termination of contract instance. steps via function calls.

"Since the first move of the game is done by Alice, she locally computes the new state $G_1$ and sends it to Bob together (with her commitment to $r_A$ and)[...] her signature on ($G_1$,1). Then Bob replies with his signature on ($G_1$,1)."

"the interaction of the parties with the contract instance is always “local”, i.e., the parties themselves compute the new states of $G$ and then just exchange signatures."

"A locked coin cannot be used for any other contract instance in $\delta$. Once the contract instance terminates, the coins are unlocked and distributed back to the channel $\delta$ according to the rules of \texttt{C}."

"To deploy $G$ both parties agree on the initial state $G_0$ of $G$. The parties then exchanging **signatures** on ($G_0$ , 0). The rest of the execution is done by exchanging signatures on further states of $G$ together with indices $w$ that denote the *version numbers.*"

Can do this forever, if however one party cheats (e.g. refuse communication) other party can ask state channel contract SCC to terminate and broadcast most recent state to chain. Version number $w$ used to identify most recent state. If a party submits old state the other party can overwrite with newer state $G$ if it has been signed and has higher version number.

Creating a virtual state channel via \textit{intermediary} Ingrid. Alice proposes opening an intance $\nu_{\alpha}$ of \texttt{VSCC} in channel $\alpha$. It is basically a copy of of the VSC $\gamma$ where Bob is replaced by Ingrid. Bob proposes $\nu_{\beta}$ of \texttt{VSCC}, also a copy of $\gamma$ with Ingrid taking Alice's role.

If they agreed on Alice locking 1 Coin and Bob locking 5 Coins, than Alice locks 1 and Ingrid 5 in $\nu_{\alpha}$ first, and second Ingrid locks 1 and Bob 5 in $\nu_{\beta}$.

Important that Ingrid can never lose coins.

**TODO**
![Virtual State Channel Construction](/assets/post_files/technology/expert/4.2-state-and-payment-channels/virtual_state_channel_construction_D.png)
{%
  include blocks/image_caption.html
  image="/assets/post_files/technology/expert/4.2-state-and-payment-channels/virtual_state_channel_construction_D.jpg"
  image2="/assets/post_files/technology/expert/4.2-state-and-payment-channels/virtual_state_channel_construction_M.jpg"
  caption="Graphic from State Channel Paper)."
%}

"An important property of our construction and our model is that we support full concurrency. That is, we allow several virtual state channels to be created simultaneously over the same ledger state channels, and allow parties to be involved in several concurrent executions of (possibly complex) contracts. This is possible because our ledger state channels can store and execute several contracts “independently” (i.e., these are multi-contract state channels)." Otherwise no SCC and VSCC simultaneously.

cross chain possible

incentives for intermediaries needed

"our system is only as secure as the contract that the user run in the channel". **oracle problem** might apply in some use cases

A use case specific implementation: \textit{Game Channels} for online gaming/casinos/gambling (ethereum, accound model) \url{https://eprint.iacr.org/2019/362.pdf}

Modification of Signidice for random number generation within game channel (important for casinos) \url{https://github.com/gluk256/misc/blob/master/rng4ethereum/signidice.md}

### Counterfactual

"We describe \textit{generalized} state channels, a construction that allows users to install new functionality in an existing channel without touching the blockchain, using \textit{counterfactual instantiation} of contracts within a channel."

"propose to build a generalized framework where state is deposited once, and can then be utilized by any application compliant to the framework."

"Similarly, participants in a state channel should be able to counterfactually instan- tiate smart contracts within a state channel, installing new functionality9 into the state channel without any on-chain action."




### Payment Channels

Different implementations. Even Satoshis was talking about this technique early in bitcoins life. \url{https://en.bitcoin.it/wiki/Payment_channels}

Can be build on UTXO as well as Account-based blockchains. Lightning vs. Raiden.

also channel is Smart contract. "parties that want to open a channel deploy a special “channel contract” on the blockchain and lock a certain amount of coins in it." - state. update channel's balance as many times as the user likes. Next interaction with ledger only when closing the channel.

Extension: payment network, e.g. lightning. Network of channels, payments can be routed through several "hops". further reduction of on chain TXs because less channels need to be opened.

Lightning uses *hash-locked transactions* to connect $P_1$ and $P_3$ via an intermediary $P_2$. Alternative technique is *channel virtualization*.

"virtual payment channels have the advantage that the intermediary $P_2$ does not need to confirm each transaction routed via him." paper only describes single hop and leaves multi hop as open research problem

### Lightning Network

{% include blocks/tweet.html id="11135763551166054401" %}


As above, channel is one thing. Network of channels is another challenge.

Precursor: \textit{Hash-locked Transaction}. $H$ is a fixed hash function. Alice wants to send Bob 1 coin via intermediary Ingrid.

Additional timelock in case of unresponsive counterparties, combination - **HTLCs or Hashed Time-Locked Contracts** - covered in seperate article.

In BTC required malleability fix in soft fork. "ensures transactions can be spent from before it is signed by all parties, as transactions would need to be signed to get a transaction ID without new sighash flags."

Process: 

\begin{enumerate}
\item A Parent Transaction or Funding Transaction is created, but neither signed, nor broadcasted
\item Next, both parties sign and exchange an initial Commitment Transaction. The Commitment TX spends from the 2-of-2 Output of the Funding TX (parent)
\item
\end{enumerate}

Security: two measures. Fraud proof if party tries to cheat and a fidelity bond type construction that actually creates incentives not to cheat. Proof only doesn't help much if non enforceable.

use "posting stale state" to mix things up

Fidelity bond construction = Revocable Delivery Transaction

proof of violation = Breach Remedy Transaction

\textbf{Breach Remedy Transaction}: When the participants of a payment channel agree upon updating their balance with a new Commitment Transaction, invalidating any prior commitments, they sign and exchange signatures for that new commitment. The invalidation of the prior commitments is done by having both parties sign a *Breach Remedy Transaction*.

\begin{figure}[H]
\begin{center}
\includegraphics[width=12cm]{images/breach_remedy.png}
\caption{Make this easier!}
\end{center}
\end{figure}

The Breach Remedy TX will send all funds contained in the channel to one party, if the other party broadcasts an old commitment transaction. If you try to cheat by broadcasting an old balance, you will lose all of your funds. All this has to happen within a previously agreed upon time period, defined by a number of blocks.

"When either party wishes to close out a channel cooperatively, they will be able to do so by contacting the other party and spending from the Funding Transaction with an output of the most current Commitment Transaction directly with no script encumbering conditions."

channel can go both directions and stay open indefinitely. If either party becomes malicious or unresponsive the other party can close the channel at any time by broadcasting the current state (latest commitment) to the blockchain. Fidelity bond construction ensures that if a party violates the terms, the other one gets all funds, provided the proof of violation is entered to blockchain in a timely manner.

If partys are cooperative they can have a channel for years. "This type of construction is only possible because adjudication occurs programatically over the blockchain as part of the Bitcoin consensus, so one does not need to trust the other party. As a result, one’s channel counterparty does not possess full custody or control of the funds."

In order to create a network of channels and additional construction is needed: HTLCs. We will cover those in our next article.

Obviously there are many edge cases that need to be handled. Premise: trustless system, nobody can steal funds. Worst case waiting period until refund. Intricacies covered in paper and we refer to it for further information.

### Bolt - Anonymous Payment Channels

\textbf{Bolt paper in resources}

[*Bolt: Anonymous Payment Channels for Decentralized Currencies*](\footnote{\url{https://eprint.iacr.org/2016/701.pdf}}) is a network proposed by Matthew Green and Ian Miers in 2016. Bolt stands for *Blind Off-chain Lightweight Transactions*. It is currently [being considered](\footnote{\url{https://github.com/ZcashFoundation/libbolt}}) for the Zcash protocol by the Zcash foundation.

Privacy is achieved by leveraging [*blind signatures*] and [*zero knowledge*] proofs. To make privacy guarantees even stronger, channel opening can be done with [*shielded transactions*]. The authors not only plan to build Bolt on Zcash, but also retrofit it to offer a private payment channel option on Bitcoin and Litecoin.

How does it work now?

“This initial implementation is based on CL signatures and very standard techniques for blind signatures and zero-knowledge proofs, and so it is a very basic construction that has been well known to cryptographers for a couple of decades now,” Akinyele said.

### Fee Market

Having a TX mined can be seen as buying a portion of block space. will become more expensive over time

"On-chain, block space is premium, hence transactions are charged for the space it takes to register the transfer. Off-chain, liquidity is premium, hence transactions are charged for the amount being transferred over the channels (as it requires rebalancing)" ... "There is a crossover point where high value transactions cost more to use on Lightning than Layer 1." dan, security is fine

The Lightning Network, or in more general terms, second layer payment networks are also interesting from an economic perspective.

On chain fees based on TX data size as data storage is limited resource. Off chain fees (if routed through hubs) based on transaction volume, as liquidity is the limited resource. Inflection point where transactions of large volume are cheaper to conduct on chain than off-chain. Where this inflection point will be is an open question as of now. The more adoption LN will see, the less hubs will be able to charge for routing and the higher the overall liquidity. Inflection point at higher value TXs.

"The fees pay for the time-value of money for consuming the channel for a determined maximum period of time, and for counterparty risk of non-communication." - lightning paper

“\textit{The adoption of quantum resistant techniques will also result in larger (and more expensive) transactions. Post-quantum crypto algorithms require larger key sizes, which in turn increase the size of non-witness data in a transaction.}” - Lucas Nuzzi

Since profitability of mining is closely correlated with the overall security of the network (hash rate) fee market does effect security, especially when block subsidy is much lower than today. interesting analysis by Dan Held: security is fine \url{https://blog.picks.co/bitcoins-security-is-fine-93391d9b61a8}

### Risks

"Forced expiration of many transactions may be the greatest systemic risk when using the Lightning Network. If a malicious participant creates many channels and forces them all to expire at once, these may overwhelm block data capacity, forcing expiration and broadcast to the blockchain. The re- sult would be mass spam on the bitcoin network. The spam may delay transactions to the point where other locktimed transactions become valid."

Keys must be stored in hot wallets, especially for intermediary nodes always online.

"If all transactions using Bitcoin were conducted inside a network of micropayment channels, to enable 7 billion people to make two channels per year with unlimited transactions inside the channel, it would require 133 MB blocks (presuming 500 bytes per transaction and 52560 blocks per year)."

"\textit{Griefing} is the ability of a participant to deviate from the protocol in order to disrupt participant interaction without directly violating the security of the protocol." (game channel paper)

counterfactual: "griefing is the ability of a participant to deviate from protocol-specified behaviour, possibly at some cost to themself, in order to harm another par- ticipant, without directly benefiting the griefer"

-> Two strategies: the first aims to force the counterparty to close the channel and thereby covering the fees for the channel closing TX on the blockchain. Not too bad.

-> Second: posting expired channel states during dispute if attacker believes counterparty is unavailable. fidelity bond cannot work in this scenario

### Summary

Many patches, state channel paper construction of state channel network. Channel virtualization no confirmations needed from intermediaries. COMIT focusing on multi asset. Lightning by far largest adoption at time of writing. So much promising shit, no way it will not eventually be figured out.

"Another challenge in building and maintaining complex channel networks is the fact that parties have to continuously watch what happens on the blockchain regarding the state of their channels. This problem can be addressed using so-called watchtowers [25, 20], to which users can outsource the task of watching the blockchain." - state, centralization?

Micro transactions will enable new businesses e.g. wifi sharing.

First time in writing academy content that I feel I need to include an opinion, because it extends past pure tech and has many social implications: critical for humanity to strengthen sharing economy. reduce resource consumption. most tangible example mobility: car sharing, different models. Can be group of people in a sort of private "club" sharing a fleet. 

E.g. Indonesia with traffic. need micro trans to enable public transport there. If it's 1\$ a day to rent a scooter (for tourists) it needs to be very cheap.

Media landscape is suffering from free online "information", quality newspapers with research standards need money to operate. Monthly subscription not the best, paying for individual articles way better.



\subsubsection*{FR}

Raiden 101 \url{https://raiden.network/101.html}

lightning proposed here: \url{https://lightning.network/lightning-network-paper.pdf}

specified here: \url{https://www.youtube.com/watch?v=L8V3rp6gvO8}

State channels: \url{https://eprint.iacr.org/2018/320.pdf}

COMIT - Cryptographically-secure Off-chain Multi-asset Instant Transaction Network \url{https://arxiv.org/pdf/1810.02174.pdf}

Counterfactual: lacks formal definitions and security proofs, but includes several useful features for practical implementation \url{https://l4.ventures/papers/statechannels.pdf}

Usecase Game Channels (paper in folder) \url{https://eprint.iacr.org/2019/362.pdf}

Lightning Ingenious. double on top of triple.

\url{https://hackernoon.com/10-state-channel-projects-every-blockchain-developer-should-know-about-293514a516fd}

Sidechains on Ethereum: Plasma. Basically Plasma is a sidechain with "Bitcoin-esque" UTXO style transaction model \url{https://plasma.io/plasma.pdf}

\url{https://medium.com/l4-media/making-sense-of-ethereums-layer-2-scaling-solutions-state-channels-plasma-and-truebit-22cb40dcc2f4}

"off-chain channel system that offers a new method for connecting channels that is more efficient than the existing technique of "routing transactions'' over multiple channels. To this end, Perun introduces a technique called "virtual payment channels'' that avoids involvement of the intermediary for each individual payment." Perun \url{https://eprint.iacr.org/2017/635}
