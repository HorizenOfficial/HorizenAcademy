---
layout: post
type: article
title: "A Protocol to Transfer Value"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/a-protocol-to-transfer-value/
no_alternate: true
topic: technology
level: expert
chapter: "What is a Blockchain?"
---

While this section of the Horizen Academy is focused on the technology, we want to account for the multidisciplinary nature of the blockchain and cryptocurrency space with this article. Without the right incentive system and economic considerations global digital money cannot work. Without building a cognitive bridge between the technology and the monetary aspects one is left with an incomplete picture of what blockchain can be.

Before Bitcoin, digital scarcity didn't exist. Digital goods were infinitely copyable, so their natural value was (theoretically) zero, as you have an unlimited supply and limited demand. Today the exchange of value works similarly to the exchange of information pre-Internet; from point-to-point, involving middleman and third parties. Cryptocurrencies present an innovation to value transfer, just like the internet revolutionized the exchange of information; from peer-to-peer with highly reduced need for a middleman.

{% include blocks/tweet.html id="1130885906938753025" %}

A well designed system for a global exchange of value also enables greater *social scalability*. When we say system, we implicitly say protocol, as the protocol defines the system. The term *social scalability* refers to the ability of large groups to cooperate effectively, or as Nick Szabo, who coined the term, puts it in one of [his best known essays](https://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html):

> "Social scalability is the ability of an institution - a relationship or shared endeavor, in which multiple people repeatedly participate, and featuring customs, rules, or other features which constrain or motivate participants' behaviors - to overcome shortcomings in human minds and in the motivating or constraining aspects of said institution that limit who or how many can successfully participate." - Nick Szabo

A blockchain can be separated into two layers: the *application layer* and the *network layer*.

> "The application layer handles tasks like transaction management, blockchain processing, and mining. [...] The network layer handles communication between nodes, which occurs over a P2P network of inter-node TCP connections. - [Dandelion Paper](https://arxiv.org/pdf/1701.04439.pdf)

In this article, we focus on the protocol of a blockchain at the application layer. In the article on [P2P networks]({{ site.baseurl }}{% post_url /technology/expert/2022-02-06-the-p2p-network %}) we look at the network layer.

## Network Protocols

Spoken languages, the internet, and blockchains can be understood as network protocols. Each has a set of rules, so they can serve their purpose without the need for a middleman and each is used within a group of participants - the network. All have in common, that abiding the rules yields greater benefit to an individual than breaking the rules.

You could invent your own language in case you don't want to follow the rules of an existing one, but you wouldn't have anybody to talk to. One could also argue that the TCP/IP protocol could be replaced by a more efficient protocol. But if you were the only one using the new protocol it would be pointless without anybody to exchange information with. The increase in utility with a growing number of participants is called the *network effect*.

With cryptocurrencies, we have a similar situation. Cryptocurrencies can be viewed as money, and therefore as information. Money is a very specific kind of information, but it can be understood as such. Andreas Antonopoulos [tells this story best](https://www.amazon.com/Internet-Money-Andreas-M-Antonopoulos/dp/1537000454), but in short:

> "At its very basic level, money isn't value. Money represents an abstraction of value; It's a way of communicating value. It's a language." - Andreas M. Antonopoulos

In order to communicate information, all participants need a set of rules that they collectively abide. What does a given word mean? How do you request information from a server? And what does a transaction look like? This set of rules is what we mean by the protocol of a blockchain. It covers everything from how the data is handled, over how the peers communicate in the peer-to-peer network to how the network reaches consensus on a single history of transactions.

You can distinguish between several broad types of networking protocols. Some examples include:

- Network communication protocols like TCP/IP (transmission control protocol/internet protocol)
- Network security protocols like HTTPS and SSL (hypertext transfer protocol secure/secure sockets layer) and
- Network management protocols such as SNMP and ICMP (simple network management protocol/internet control message protocol)
- Value transfer protocols such as Horizen or Bitcoin

{%
  include image_caption.html
  image="/assets/post_files/technology/expert/1.2-protocol/network_protocols_D.jpg"
  image2="/assets/post_files/technology/expert/1.2-protocol/network_protocols_M.jpg"
  caption="Overview of network protocols, including TCP/IP, HTTP, VOIP, Bitcoin, and Horizen."
%}

Above you see a collection of protocols, many of which you use every day. The TCP/IP protocol specifies how to break data down into packets, address the packets, and route them through across the world wide web.
SSL (Secure Sockets Layer) is a standard protocol used to establish encrypted links between a web server and a client (like your computer) in online communication and is used for the secure transfer of data. The Simple Network Management Protocol (SNMP) is a set of protocols supported by network devices such as routers, servers or printers and takes care of them interoperating seamlessly (sometimes). Protocols like Bitcoin or Horizen enable the digital transfer of value from peer to peer.

## What are the Rules?

Now let's take a look at what the protocol of a blockchain looks like. What are the rules? What needs to be standardized and regulated in order for the system to work?

The main goal is to maintain a consistent ledger of all transactions and there are several rules in place to achieve that. First of all we need certain standards on what the data like transactions and blocks needs to look like. Which order the data for a valid transaction is provided in, what formats are used and which structures are used within a block was covered in our last article on the [blockchain as a data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}). All the conventions we covered in this article are defined by the protocol.

When a common language for the software to exchange information is established, we need rules on how new data is added to the blockchain. Adding data comes at a cost. This cost must be high enough to prevent large amounts of useless data being added, but at the same time it must not be prohibitively expensive.

First, all miners and full nodes maintain the so-called *mempool*, which contains new and unconfirmed transactions. Once a transaction is included in a finalized block, it is removed from the mempool.

The *consensus mechanism* determines how the process of adding new blocks to the chain works and how the network agrees on a single version of history. The *longest chain rule* or *Nakamoto Consensus* determines which block is valid in case two miners find two valid blocks shortly after another, creating a tie situation.

{%
  include image_caption.html
  image="/assets/post_files/technology/expert/1.2-protocol/longest_chain_D.jpg"
  image2="/assets/post_files/technology/expert/1.2-protocol/longest_chain_M.jpg"
  caption="Longest chain rule applied to a fork of the blockchain."
%}

To keep the growth of the blockchain stable with regards to the number of blocks added per time unit, a *difficulty adjustment* is in place. The more miners support a network with their hashpower, the faster they would find blocks on average if there was no countermeasure in place. If the total hashrate increases, the block difficulty does, too. The average *block time* is kept more or less constant through this mechanism.

Lastly, the monetary policy is defined in the protocol. Most cryptocurrencies have a maximum circulating supply defined with their inception. By cutting the *block subsidy* in half regularly (with Horizen every 840,000 blocks, with Bitcoin every 210,000 blocks, both roughly equal to 4 years) the total circulating supply asymptotically approaches its limit but never crosses it.

{%
  include image_caption.html
  image="/assets/post_files/technology/expert/1.2-protocol/supply_D.jpg"
  image2="/assets/post_files/technology/expert/1.2-protocol/supply_M.jpg"
  caption="Graph of the disinflationary supply schedule and the declining block subsidy over time."
%}

This type of monetary schedule is referred to as [*disinflationary*](https://www.investopedia.com/terms/d/disinflation.asp). As per Investopedia:

> "Unlike inflation and deflation, which refer to the direction of prices, disinflation refers to the rate of change in the rate of inflation. Although sometimes confused with deflation, disinflation is not considered as problematic because prices do not actually drop, and disinflation does not usually signal the onset of a slowing economy."

The predictable monetary supply is one of the greatest differentiators between government-issued fiat currencies controlled by central banks. Covering all the rules of a given protocol would blow the scope of this article. The key takeaway should be that the somewhat abstract term protocol is a set of rules that defines a given blockchain and all of its bits and pieces.

## How to change the rules of a Blockchain?

The initial set of rules for a blockchain is defined with the genesis block. Any changes to it need to be approved by the majority of network participants. In a distributed environment without central control, a consensus has to be built around each proposed change to the protocol. In this respect blockchain development is not too different from many other open source projects. We would like to differentiate between:

- the process of suggesting changes
- the process of deciding on those changes 
- and lastly the process of implementing those changes.

To suggest changes, most large blockchain projects have an *improvement proposal* system. Anybody is able to look at the code on GitHub and suggest improvements, usually by presenting the according code. Within the developer community, the suggested improvements will be discussed, refined and if the majority considers them to be beneficial and not negatively affecting the security they might be implemented.

Deciding upon changes is referred to as the [governance]({{ site.baseurl }}{% post_url /technology/expert/2022-02-08-blockchain-governance %}) of a protocol. Often times this is only a loosely formulated set of guidelines, but it can be more structured. In a later article, we will talk more about governance. Jameson Lopp has put together a [very insightful piece](https://medium.com/@lopp/who-controls-bitcoin-core-c55c0af91b8a) on the governance process within Bitcoin, that we can only recommend reading.

Implementing changes can happen via soft forks or hard forks, where soft forks are downward compatible updates and hard forks are downward incompatible. If changes to the protocol can be implemented with soft forks, there are two ways of how this transition can be handled. In a [User Activated Soft Fork](https://www.mycryptopedia.com/uasf-user-activated-soft-fork-explained/) (UASF) the changes are being enforced by the node network. Node operators update their software at a specific flag date and will accept or reject a miner's block based on the new set of consensus rules. Miners have a strong incentive to adhere to the new rules as they risk mining invalid blocks otherwise.

A Miner Activated Soft Fork (MASF) does not require the changes to be tied to a specific flag date. Miners can signal readiness for a MASF by changing the [*version bits*](https://bitcoincore.org/en/2016/06/08/version-bits-miners-faq/) in their blocks headers. Once a certain percentage of produced blocks have signaled readiness to update, full nodes can enforce the rule changes accordingly.

## The Great Innovations Introduced with Bitcoin

Even if a perfectly designed set of rules is in place, it still has to be enforced somehow. Without a central authority, external enforcement is not possible. The protocol, therefore, presents a self-enforcing agreement. [Game theory](https://en.wikipedia.org/wiki/Game_theory) is the study of models that describe and predict the strategic interaction between different parties. Evaluating a protocol and its inherent incentives fall into this category:

In game theory, games in which cooperative behavior can only be enforced through [self-enforcing agreements](https://www.jstor.org/stable/2352355?seq=1#page_scan_tab_contents) are called non-cooperative games, whereas games allowing strategies relying on external enforcement are called cooperative games.

This is one of the great innovations introduced with Bitcoin; a self-enforcing agreement on a global scale between unknown entities that don't trust each other. This is only possible because of an incentive system that makes honest behavior more profitable than fraudulent behavior.

### Decentralized Consensus

Before Bitcoin it was not possible to achieve consensus in an environment with untrusted participants showing malicious, or *Byzantine*, behavior and an unreliable *asynchronous* network. We cover the [evolution of distributed consensus]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-1-consensus-in-distributed-systems %}) in great detail later in this chapter.  

### Self-Enforcing Agreement

One of the most important incentives in Proof-of-Work blockchains is to have miners spend real resources (electricity and mining equipment) on securing the ledger and rewarding them with the native currency on that blockchain. This builds a thermodynamic layer of security around the ledger, that is only vulnerable to an entity that is willing to acquire a large amount of computing power and spend large amounts of electricity to break it.

As Satoshi Nakamoto formulated it in his [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf):

> "If a greedy attacker is able to assemble more CPU power than all the honest nodes, he would have to choose between using it to defraud people by stealing back his payments, or using it to generate new coins. He ought to find it more profitable to play by the rules, such rules that favour him with more new coins than everyone else combined, than to undermine the system and the validity of his own wealth."

The attacker now has to balance the cost of an attack on the blockchain: the likelihood of the attack being successful and its potential upside versus the benefit of spending the same amount of electricity on honest mining and collecting the block rewards. The key takeaway is the following: the protocol of a blockchain is self-enforcing, as long as the incentives are set correctly. This is what lets rational agents decline invalid blocks and transactions and secure the network with their computing power.

### Digital Scarcity

Bitcoin was the first technology that solved the double-spend problem. Before it was not possible to verify if a digital object existed only once. When you transfer a unit of cryptocurrency, you hand over the ownership of a digital object and the receiver can be sure she is the new, sole owner of that digital object. The property of being double-spend-resistant is also called digital scarcity.

### Triple Entry Bookkeeping

Over time accounting has evolved in three steps. First single-entry accounting was used, double-entry bookkeeping sparked the first revolution in trade, and Bitcoin introduced triple-entry bookkeeping in 2009, which might spark another revolution in commerce, trade, and accounting.

*Single-entry bookkeeping* is what you use for your personal finance. You record incoming and outgoing transactions as positive or negative transactions and can calculate your current balance at any time. It does not work for commerce though, as you can't trust another entity's ledger. It is easy to create fraudulent activities while they are hard to detect.

*Double-entry bookkeeping* posed a revolution in commerce. Each participant creates two entries per transaction in their books: a debit and a credit. Any credit to yourself has to match a debit from another party. Frauds are easy to detect, once you compare the books of interacting parties, but you have to rely on a third party acting as a validator to actually audit the books. It is still possible to cheat the system, but you have to create a whole history of fake transactions in order to do so.

*Triple-entry bookkeeping* now makes it impossible to create funds out of thin air, assuming the overall network is controlled by a majority of honest participants. Each transaction comes with three entries: a credit to the recipient, a debit to the payer, and a public receipt, the recorded transaction on the ledger. Because everyone can keep a copy of the entire transaction history, no actor can create a fraudulent credit for themselves. You can trust *the system itself* instead of having to trust a third party like auditors or banks.

{%
  include image_caption.html
  image="/assets/post_files/technology/expert/1.2-protocol/tripple_entry_D.jpg"
  image2="/assets/post_files/technology/expert/1.2-protocol/tripple_entry_M.jpg"
  caption="Schematic of the triple-entry bookkeeping principle."
%}

Triple-entry bookkeeping still comes with a downside: the total transaction throughput is limited, as it has to be processed by all participants of the network. We would like to refer to Todd Kronenberg's article ["Why Bitcoin’s Lightning Network is Ingenious"](https://medium.com/coinmonks/why-bitcoins-lightning-network-is-the-ingenious-10dc1ad9ccae) that the section above borrowed from to learn about the upsides and downsides of triple entry accounting and the "ingenious" mitigation strategy of having a double-entry bookkeeping system on top of the blockchain - a second layer solution like the [Lightning Network]({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-state-and-payment-channels %}).

### Separation of Money and State

Historically, it is the exception to have central banks making monetary policies with the scope it's done today. We don't want to start an economic discussion, as this is a topic in and of its own, but it surely can't hurt to have a decentralized, permissionless and independent form of money as an alternative to the legacy financial system. Competition is always good for service, and we believe we will see cryptocurrencies compete with state-issued fiat currencies soon.

Each of the ideas above is worth its own book and this brief overview doesn't do justice to the relevance and intricacies of cryptocurrencies. We wanted to mention a few aspects nonetheless, to give you an orientation and a basis to research the different aspects you are interested in. None of the concepts above work in isolation. They are interrelated and can be approached from different angles. When we extend the scope of blockchain beyond cryptocurrencies, we can find more interesting developments.

## Non-Financial Incentives to Maintain a Blockchain

While financial applications in the form of digital money and digital proxies of traditional assets were the first and still are the most talked about use case, blockchain can be considered a tool to achieve other means.

When many parties that do not trust each other want to maintain a shared and consistent dataset, blockchain can be an option. The different entities can decide to run a node each and spin up a network amongst each other. Adding the right incentive structures and making sure that all actors in the system cannot abuse or corrupt the database is a large consideration, just as it is with any public blockchain. If miners and nodes had no incentive to maintain the data in a consistent way, the blockchain would be useless. Usually, these incentives are of a direct financial nature.

But incentives can also be of a non-financial nature. If, for example, a group of businesses evaluate a shared database. Supply chain management is a good example: the producers want to prove they have sent a good in time, the logistics company wants to prove when it received and delivered a shipment, and the customer wants to see if and when his goods changed hands. When every handoff is signed by the two directly interacting parties, it becomes easier to ascribe the responsibility in case of a late delivery. One could argue that the underlying incentive is of a financial nature, but this benefit results from efficiency improvements rather than direct monetary benefits.

## Summary

In this article, we looked at the protocol of a blockchain at the application layer and defined it as a value transfer protocol. Some examples of the rules that comprise the protocol we mentioned are the longest chain rule that applies when there is a temporary chain split, the difficulty adjustment to keep the block production rate constant and the disinflationary monetary schedule.

Next, we touched on blockchain governance and continued by listing the major innovations blockchain technology introduced: the self-enforcing agreement between network participants, digital scarcity, triple-entry bookkeeping, and the separation of money and state. Lastly, we gave an example of incentives to maintain a blockchain for a different purpose than digital money like a shared dataset.
