---
layout: post
type: article
title: "Guaranteed Execution with Smart Contracts"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you learn why cryptocurrencies are sometimes referred to as programmable money."
permalink: /technology/advanced/guaranteed-execution-with-smart-contracts/
topic: technology
level: advanced
chapter: "What is a Blockchain?"
further_reads: [the_oracle_problem, the_truth_about_smart_contracts]
canonical_link: "/technology/expert/guaranteed-execution-with-smart-contracts/"
---

We have looked at blockchain in two different ways. First as a [data structure]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-02-blockchain-as-a-data-structure %}) and second as a [protocol to transfer value]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-03-a-protocol-to-transfer-value %}). For the last article of this chapter about what a blockchain is we want to talk about *smart contracts*. Besides AI, IoT, and blockchain, smart contracts have been one of the hottest topics over the last two years in the tech world. They are software on the blockchain.

A blockchain can not only host simple data like transactions, but also small programs. We call these programs smart contracts. A contract, in general, is an agreement between parties that binds them to something happening in the future. The "smart" comes from the automatic execution of these digital contracts. Simply speaking they consist of many "if, then" statements that are written in and enforced by code. The contract executes automatically if the contract conditions are met.

![Smart Contract](/assets/post_files/technology/advanced/1.3-smart-contracts/smart_contract_D.jpg)
![Smart Contract](/assets/post_files/technology/advanced/1.3-smart-contracts/smart_contract_M.jpg)

### The Promise of Smart Contracts

Smart contracts promise to reduce the need for middlemen, such as lawyers or notaries, and thereby reduce the cost of transacting. Disposing of middlemen can also save a lot of time. You don't have to wait for opening hours or through banking holidays. Smart contracts can not only be used to govern the transfer of digital assets such as cryptocurrencies, but they could govern many other types of value transfer, such as trading of shares and other traditional financial instruments or even transactions involving physical property (like real estate).

A landlord and a tenant could use a smart contract to govern a rental agreement. The smart contract could automatically lock the tenant out of the apartment if the tenant fails to pay rent. The if-then statement, in this case, could look like this:

*If the contract address receives amount X by the 3rd of each month from address Y, then grant Y access to the apartment. If payment fails for 2 consecutive months, then revoke the right of Y to unlock the apartment.*

Another potential use case for smart contracts would be a decentralized eBay-like platform. One can construct a smart contract with an expiry date defining the time period of the auction and a starting bid. The highest bidder would receive the item at the end of the auction period in exchange for their money. The losing bidders would automatically be refunded by the smart contract. Such a decentralized version of eBay would be considered a *dApp* or decentralized App.

### dApps

A decentralized application or dApp is a more sophisticated use case for smart contracts. Apps and websites usually use APIs (application programming interfaces) to communicate with their underlying database and other services. A well-written API makes it easier for developers to offer a service by defining the communication between the various components of a system.

Dapps use smart contracts to communicate with their underlying blockchain. Imagine a future with smart contract libraries that hold a large number of template contracts that can be used for various purposes. We are already seeing such developments with smart contract platforms like Ethereum.

![dApp](/assets/post_files/technology/advanced/1.3-smart-contracts/dapp_D.jpg)
![dApp](/assets/post_files/technology/advanced/1.3-smart-contracts/dapp_M.jpg)

### Smart Contract Platform

There are many smart contract platforms out there besides Ethereum, which is the most popular one today and has the most developer activity around it. Other platforms include Lisk, NEM and Hyperledger, a modified version of Ethereum designed for corporate use.

Few people know that Bitcoin-based blockchains also allow for the deployment of smart contracts. Bitcoin has a built-in scripting language called *Script*. It is a rudimentary language compared to *Solidity*, which is used to write smart contracts on Ethereum. Solidity is a *Turing-complete* programming language, that enables more complex contracts compared to Bitcoins Script. The cost of being more complex comes at being harder to write, analyze and secure.

Security in the context of smart contracts means considering every possible way in which a contract could execute and to account for each of these scenarios. Smart contracts on Bitcoin-based blockchains (such as Horizen) written in Script allow for less complexity compared to ones written in Solidity on Ethereum. This limits their potential use cases but makes the possible states of the contract (or program) easier to enumerate, examine, and account for, resulting in easier to secure contracts.

It is interesting to note, that the most commonly used smart contract templates on Ethereum, namely the *ERC-20* standard used to issue tokens, does not require Turing completeness. Almost all tokens deployed on the Ethereum blockchain are using this standard, as it allows for easy integration with different wallets and exchanges.

### Are They Really Trustless?

The promise of smart contracts is to allow trustless execution with automatically enforced rules without the need for middlemen. But can they actually live up to this promise?

All types of assets are subject to the local jurisdiction you are in. This means a contract, no matter if smart or not, requires additional trust in the jurisdiction besides the trust put in the contract itself. Possession in a smart contract does not equal possession in the real world. Just as with regular contracts, the terms can be subject to changing circumstances and interpretation thereof. An illegal contract is not legally binding.

One must consider that writing traditional contracts takes years of studying the legal framework regulating the different areas of contractual law. Writing smart contracts is even more difficult, as one also needs to understand the technical dimension behind them. We will need to see an entirely new generation of tech-savvy lawyers emerge to enable a meaningful adoption of legally binding smart contracts.

There is another major challenge to overcome. The digital world needs to learn about real-world events in order for a smart contract to function and execute. An *oracle* is an entity submitting data to a smart contract. The trust problem that comes with this role is referred to as the *oracle problem*. Imagine a smart contract running a betting platform in a trustless environment. The oracle needs to submit the result of a game in order to have the smart contract distribute funds to the winners. Because an oracle determines what a smart contract sees, it also controls what it does.

![Oracle](/assets/post_files/technology/advanced/1.3-smart-contracts/oracle_D.jpg)
![Oracle](/assets/post_files/technology/advanced/1.3-smart-contracts/oracle_M.jpg)

Centralized oracles are not considered a solution to the oracle problem. No matter what the actual implementation looks like, the incentives to untruthfully submit data might outweigh the benefits of acting honestly in some decisions. And what is the point of having trustless execution on the basis of information provided by a trusted third party?

No matter if centralized or decentralized, an oracle will always come at a cost. Acting honestly must always be the most profitable strategy and therefore strong incentives must be in place. This is another problem that needs game-theoretic evaluation and incentive design, just like the incentives for miners that we talked about in our [last article]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-03-a-protocol-to-transfer-value %}).

Projects such as Augur and Gnosis are working on decentralized solutions to the oracle problem via *prediction markets*. Before these prediction markets gain serious adoption they will remain easy to game. And since prediction markets have the potential to influence the outcome of an event - as Dan Finley suggests - it remains to be seen if they can become a solution.

{% include blocks/tweet.html id="1089550845698396167" %}

Before solving the problem of creating legally binding smart contracts and the oracle problem, the use of smart contracts will be limited to small experimental fields with low risk involved. An example of a potential use case would be in-game payments triggered by certain achievements that are objectively verifiable by code.

As Jimmy Song puts it: ["A smart contract that trusts a third party removes the killer feature of trustlessness."](https://medium.com/@jimmysong/the-truth-about-smart-contracts-ae825271811f) There is a long way to go before we will see the broad use of trustless smart contracts across different domains, but they are most definitely a concept worth exploring.

### Summary

By now you should have a good idea of what a blockchain is. We looked at it as a data structure and as a set of rules, a protocol. A blockchain can store data reliably due to the distributed nature of the ledger. Anybody can participate in the network without any permission or registration as long as they follow the rules of the protocol. This makes public blockchains censorship-resistant, permissionless, trustless, and valuable. It can not only store pieces of data but also programs running in a distributed fashion.

Smart Contracts can ensure objective execution on the basis of mutually agreed-upon terms enforced by code. They have the potential to reduce middlemen and thereby reduce cost and save time. They will most likely foster a closer connection between software developers and the judicial system.

Before we can see widespread adoption of smart contracts we have to overcome some hurdles: Regulators will have to create a framework to allow the deployment of legally binding smart contracts and decentralized and trustless oracles need to be developed.

This was the last article in the chapter on what a blockchain is and what it can do. In the next chapter, we will take a look at [how blockchains work]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-01-how-does-a-blockchain-work %}).
