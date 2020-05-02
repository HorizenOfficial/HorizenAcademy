---
layout: post
type: article
title: "Sidechains"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article we explain what sidechains are and how they can improve blockchain ecosystems at an expert level."
permalink: /horizen/expert/sidechains/
topic: horizen
level: expert
---

In our [Advanced Section]({{ site.baseurl }}{% post_url /horizen/advanced/2027-12-31-horizen-advanced %}) we talked about why sidechains are an elegant way to overcome current limitations regarding scalability, interoperability, and governance in the blockchain ecosystem. This article is the second part to our advanced take on the topic. If you are not familiar with the concept of sidechains you might want to catch up on it before starting with this article

![sidechains](/assets/post_files/horizen/expert/sidechains/sidechains_D.jpg)
![sidechains](/assets/post_files/horizen/expert/sidechains/sidechains_M.jpg)

Having the ability to deploy sidechains will dramatically enhance the possibilities of building on top of existing public blockchains. One of the first use-cases of a sidechain for the Horizen project will be the Treasury (Whitepaper), moving the organization a step closer to its goal of becoming a [decentralized autonomous organization or DAO]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-01-dao-decentralized-autonomous-organization %}).

### How Does It Work Now?

The construction of the sidechain model consists of two parts:

 1. The _sidechain consensus protocol_ — SCP
 2. The _cross-chain transfer protocol_ or 2-way peg — CCT

The _sidechain consensus protocol_ governs how the network agrees on new blocks and therefore on the history of transactions. The _cross-chain transfer protocol_ determines how assets can be sent from the mainchain to a sidechain and vice versa.

The CCT consists of two sub-protocols that we want to introduce shortly.

The first sub-protocol deals with _forward transactions_, which are transactions from mainchain to sidechain. The second sub-protocol deals with _backward transactions_, which are transactions from sidechain to mainchain.

![SCP_CCT](/assets/post_files/horizen/expert/sidechains/SCP_CCT_D.jpg)
![SCP_CCT](/assets/post_files/horizen/expert/sidechains/SCP_CCT_M.jpg)

The first design decision to make is whether the mainchain should be aware of the sidechains. The team led by Alberto Garoffolo decided to develop the SCP and CCT independently of each other.

> The CCT protocol is to be unified and fixed by the mainchain logic so that all sidechains will use the same CCT protocol. The SCP protocol will be completely decoupled from the CCT and mainchain logic in general so that a sidechain developer is free to choose the SCP protocol depending on the needs.

Although a number of different sidechain consensus protocols are possible, we will outline the proposed reference implementation of the SCP that is based on Ouroboros. It is a Proof-of-Stake consensus protocol that makes use of the concept of delegation. After that, we will talk about the Cross-Chain Transfer Protocol.

### Prerequisites

For this article, you should have an understanding of blockchain technology concepts such as:

 - [Block structure]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-02-blockchain-as-a-data-structure %}) (Header, Block Hash, Merkle trees…)
 - [POW/POS]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %})
 - [Sidechains]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-03-sidechains %})

### The Sidechain Consensus Protocol - SCP

The proposed SCP is based on the Ouroboros Protocol developed by IOHK for the Cardano project with some slight modifications. It is a Proof-of-Stake based consensus protocol that makes use of the concept of delegation and generally works like this:

 - Time is divided into epochs of k slots. It is not specified yet, but let’s assume k will be 8 for the sake of the argument (and matching the graphic below).
 - Each slot represents the opportunity to create a sidechain block within a certain period of time. Research suggests 20 seconds is a reasonable amount of time to allow network synchronization across the globe. During an epoch up to k blocks will be forged.
 - There is a slot leader for each slot. The slot leader is authorized to generate a block within this time period.
 - Before an epoch begins, there is a Slot Leader Selection Procedure that assigns one slot leader per slot for the next epoch (in our example 8 slot leaders will be selected per selection procedure/epoch).
 - If a slot leader misses their time slot to forge a block, the next slot leader will include the transactions that weren’t included previously.

![epoch](/assets/post_files/horizen/expert/sidechains/epoch_D.jpg)
![epoch](/assets/post_files/horizen/expert/sidechains/epoch_M.jpg)

#### Modifications of the Ouroboros Protocol

The security of software is usually evaluated under certain assumptions. Consensus protocols are no different.

POW consensus is based on the assumption of an honest majority in hashing power. The core assumption the Ouroboros POS protocol security is based on is a random Slot Leader Selection Procedure. No party should be able to predict who will be the assigned slot leader during a given time period.

To achieve this goal, a source of randomness is needed and creating true randomness is harder than one might think. The original Ouroboros POS protocol introduced a coin-tossing protocol based on verifiable secret sharing to generate randomness. The proposed (modified) solution leverages the POW mainchain for this. It is a simple, yet effective solution.

The randomness is derived from the smallest block hash on the mainchain in a given period of time. For this to work, the set of eligible certifiers will be fixed, before the randomness generation period starts. A significant share of hashing power would be needed to corrupt this mechanism. Under the assumption of an honest majority in hashing power on the mainchain, this should be infeasible and economically unprofitable. A formal analysis of such an attack will be conducted separately.

Another modification to the original Ouroboros implementation regards the references to the mainchain included in the sidechain blocks. We will talk about this in the context of the Cross-Chain Transfer Protocol when introducing the concept of full referencing.

#### Liveness and Persistence

Garay, Kiayias & Leonardos say that the standard procedure of proving blockchain consensus protocol security requires demonstrating the ability of the protocol to satisfy two fundamental properties of a distributed ledger: liveness and persistence.

> “Persistence states that once a transaction goes more than k blocks “deep” into the blockchain of one honest player, then it will be included in every honest player’s blockchain with overwhelming probability, and it will be assigned a permanent position in the ledger.” — Garay, Kiayias & Leonardos, 2014

Persistence is closely related to the property of immutability.

> “[…]Liveness says that all transactions originating from honest account holders will eventually end up at a depth more than k blocks in an honest player’s blockchain, and hence the adversary cannot perform a selective denial of service attack against honest account holders.” — Garay, Kiayias & Leonardos, 2014

This is closely related to the property of censorship resistance.

(Note that this is a different k from the one describing the number of blocks per epoch.)

Properties like liveness and persistence are proven under a set of assumptions such as an honest majority among participants. An exhaustive list of these assumptions and their definitions can be found in the original Ouroboros paper.

#### Enabling Different SCP’s

The motivation behind developing the SCP and CCT separately was to enable a variety of possible SCP’s. Although the following description of the Cross-Chain Transfer Protocol takes up on a few concepts of the adapted Ouroboros protocol described above, it can be combined with a number of other consensus mechanisms. Horizen is currently looking into a Block-DAG (Directed Acyclic Graph) structure. The interoperability between another POW sidechain or a Block-DAG mainchain and the CCT protocol will be subject to additional research.

### The Cross-Chain Transfer Protocol - CCT

> The CCT protocol is the most important part of the sidechain construction since it defines the overall structure of the communications between MC and SC. - Sidechain Whitepaper ; Garoffolo, Viglione

We already mentioned the two sub-protocols of the CCT:

The first sub-protocol deals with forward transactions, which are transactions from mainchain to sidechain.

The second sub-protocol deals with backward transactions, which are transactions from sidechain to mainchain.

#### Forward Transactions and Full Referencing

It is the goal to enable cross-chain transfers, so there must be a form of communication between chains. The sidechain needs to be aware of all transactions on the mainchain that are sending assets to an address on the sidechain (forward). There needs to be a mechanism for the mainchain to verify incoming backward transactions.

The enablement of forward transactions is achieved through full referencing. It solves two problems at once: enabling transfers from the main- to the sidechain in a straightforward fashion and dealing with finality (or lack thereof).

![full referencing](/assets/post_files/horizen/expert/sidechains/full_referencing_D.jpg)
![full referencing](/assets/post_files/horizen/expert/sidechains/full_referencing_M.jpg)

> Full referencing implies that the sidechain blocks contain the full chain of the mainchain block references. Even if some block forger missed his opportunity to include a reference to the newly generated MC [mainchain] block, some of the following block forgers will include the missed mainchain reference. - Sidechain Whitepaper; Garoffolo, Viglione

So how does full referencing achieve the goals mentioned above? The references can be one of two things:

 - If the mainchain block contains no transaction to the sidechain under consideration only the block hash is used as a reference.
 - If there are one or more forward transactions in the last block, the entire block header, the forward transaction(s) and the Merkle path off the transaction(s) are used as a reference.

Sidechain nodes can easily verify the transfers by including the block header and Merkle path of forward transactions. You could think of the two ledgers, sidechain and mainchain, as two separate books. Since the sidechain bookkeepers constantly monitor the main(chain) book, they can easily add cross chain transactions to their book. By including the transactions together with their Merkle paths and the corresponding block header, every entity on the sidechain will be able to verify the transaction is valid for themselves without having to check in with the mainchain.

![forward](/assets/post_files/horizen/expert/sidechains/forward_D.jpg)
![forward](/assets/post_files/horizen/expert/sidechains/forward_M.jpg)

Enabling the forward transfer protocol implies making changes to the current mainchain logic. A new type of transaction needs to be introduced, that burns coins and provides a set of metadata which allows the user to claim the same amount (minus the TX fee) of newly created coins on the sidechain. The same goes for backward transactions: coins on the sidechain are burned and an equivalent amount minus TX fees created on the mainchain. A construction with a locking and unlocking procedure is also feasible.

The other problem that is solved relates to the finality issue with POW chains using Nakamoto consensus. It is possible for a valid forward transaction to be included in a mainchain block at first, but the block containing the transaction to be forked out and becoming orphaned shortly after. This could create the opportunity to double spend (once on the mainchain and once on the sidechain) if the transaction was already added to the sidechain ledger. The binding eliminates such a situation. In case of a fork in the mainchain, the sidechain blocks that refer to the forked out mainchain block will also be reverted.

#### Backward Transactions and Certifiers

Now for the most interesting part. How can the mainchain verify incoming backward transactions if it doesn’t keep track of the sidechain(s)? Using the bookkeeper analogy from before the following problem has to be solved: the mainchain bookkeepers need to add incoming transactions from the sidechains to their book, but can never look at the other books around them.

I would like to go back to the differentiating factor of sidechains and Drivechains that I mentioned earlier. For a pegged sidechain construction there are two operational modes which concern the execution of backward transactions: synchronous and asynchronous.

> The synchronous mode implies that both main and sidechains are aware of each other and can verify transfer transactions directly, while the asynchronous mode relies on validators to process transfers. - Sidechain Whitepaper; Garoffolo, Viglione

We decided on developing the SCP and CCP independently of each other. Since it is a stated goal to enable a variety of different SCP’s, it is not feasible for the mainchain to track every sidechain, for it would have to know each individual consensus protocol. This implies that strictly speaking the proposed implementation qualifies as a drivechain rather than a sidechain, for its operational mode is asynchronous: the mainchain doesn’t keep track of the sidechains.

#### Getting Transaction Data from Sidechain to Mainchain

From a data point of view, to make all of this work there needs to be a transfer mechanism, initiated on the sidechain, that informs the mainchain of incoming backward transactions. This is done by introducing a new type of data container called Cross-Chain Certificates (CCCert’s).

![CCCert](/assets/post_files/horizen/expert/sidechains/CCCert_D.jpg)
![CCCert](/assets/post_files/horizen/expert/sidechains/CCCert_M.jpg)

The CCCert contains basic information, such as the sidechain identifier (SCid) and the CCCert ID as a header. The Backward Transfer List  collects all cross-chain transactions. The last three data fields concern the **certifiers** that fulfill the role of the validators mentioned in the quote above.

The mainchain bookkeepers can’t look at the other books (sidechains) but have to know when something that relates to their book is happening. Somebody must tell communicate this to them in a standardized way. Certifiers are the ones to tell the mainchain bookkeepers about incoming transactions, and the standardized communication method is via the Cross-Chain Certificates.

Certifiers register on the mainchain via a special type of transaction, that includes the sidechain ID of the chain that they are registering for and a deposit that gets locked. This stake has a role in preventing fraud, but more about that in a minute. Every stakeholder on the mainchain is eligible to become a certifier. A subset of all certifiers verifies the backward transactions on the sidechain, collects them in the Backward Transfer List, signs the resulting CCCert with an aggregated signature and sends it to the mainchain.

Facilitating backward transactions is a form of work. There needs to be an incentive to do this work. Additionally, the incentive must be designed, so that honest behavior is encouraged and malicious behavior must not be profitable. One of the main objectives was to design the protocol in a way, that would decentralize the process of cross-chain verification.

Certifiers receive incentive through collecting the transaction fees of all transactions they are processing. If they submit fraudulent certificates they will not be able to unlock their stake. A group of certifiers that have a combined deposit X locked up on the mainchain is only allowed to sign a CCCert that has a combined total of 0.5X. This is called the maximum certificate amount (MAX_CERT_AMOUNT).

If the amount per certificate was not capped it would be possible to lock up a deposit, sign a fraudulent CCCert worth more than the deposit itself, sending it to a self-controlled address on the mainchain and live happily with losing one's stake.

### Reporting Fraud

Enforcing this measure is based on the assumption of an honest majority. As you might have noticed there is a data field contained within the CCCert named Fraud Reports List. This field would be used the following way in case fraud was to occur:

 - A fraudulent certificate CCCert(i) is created privately and signed by the majority of certifiers in the group(i).
 - The fraudulent certificate CCCert(i) is then sent to the mainchain and included into a block(i). The mainchain is not able to verify the certificate and detect the fraud itself.
 - The fraudulent certificate syncs back into the sidechain (see Full Referencing).
 - The next group of certifiers(i+1) verify the previous CCCert(i) on the sidechain, detect the fraud and include a Fraud Report in their certificate CCCert(i+1).
 - Ones the mainchain receives CCCert(i+1) containing the fraud report, the group of malicious certifiers(i) will not be able to unlock their deposit.
 - If the group(i+1) does not include a fraud report, the group after them(i+2) will and both fraudulent groups from before (i and i+1) will lose their deposit.

By not reporting a detected fraud a group would risk losing their deposit, as well as the originally malicious group. It’s also important to note that it is not possible by protocol design to have one certifier in a certifier group back-to-back.

The actual inner workings of a backward transfer are a little bit more complex. If you would like to read more on this subject be sure to check out the original source. (Whitepaper)

To protect the mainchain from inflation should all else go wrong there is a last line of defense. The safeguard is a mechanism on the mainchain, which tracks the total amount of assets that have been transferred to each individual sidechain. It’s impossible to withdraw more coins from a sidechain than the amount that has been moved there in the first place, therefore preventing inflation.

### Summary

Sidechains could be an elegant way to overcome current limitations regarding scalability and governance in the blockchain ecosystem. The main contribution of our team is providing a new backward transfer protocol that does not rely on a centralized group of validators. Every stakeholder is eligible to become a certifier if he likes to, introducing decentralization to the process of cross-chain verification.

From a security perspective, the most important thing is to design the implementation in a way, that no sidechain can possibly harm the mainchain.

The SCP must have a guaranteed truly random assignment of slot leaders. Additionally liveness and persistence must be guaranteed.

The CCT security is enforced by adding references to the mainchain with every block (full referencing), introducing a cap on the total amount a group of certifiers can sign for (_MAX_CERT_AMOUNT_) and the safeguard tracking the total amount that has been transferred to a given sidechain and can be withdrawn.

Having the ability to deploy sidechains will dramatically enhance the possibilities of building on top of existing public blockchains. There will be a lot of work from here, to actually having a first sidechain deployed on the Horizen main-net. This includes rigorous security testing and further evaluation of the sidechain consensus protocol.

One of the first use-cases of a sidechain for the Horizen project will most likely be a sidechain facilitating the treasury, moving the project a step closer to becoming a truly [decentralized autonomous organization]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-01-dao-decentralized-autonomous-organization %}).
