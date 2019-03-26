---
layout: post
type: article
title: "Guaranteed Execution with Smart Contracts"
permalink: /technology/advanced/guaranteed-execution-with-smart-contracts/
topic: technology
level: advanced
chapter: "What is a Blockchain?"
further_reads: [the_oracle_problem, the_truth_about_smart_contracts]
---

We have looked at blockchain in two different ways. First as a data structure and second as a protocol to transfer value. For the last article of this chapter about what a blockchain is we want to talk about smart contracts. Besides AI, IoT, and blockchain, smart contracts have been one of the hottest topics over the last two years in the tech world. They are software on the blockchain.

A blockchain can not only host simple data like transactions, but also small programs. We call these programs smart contracts. Smart contracts are essentially software running on the blockchain. A contract, in general, is an agreement between parties that binds them to an agreement. The "smart" comes from the automatic execution of these digital contracts. They consist of many "if, then" statements that are written in and enforced by code. The contract executes automatically if the contract conditions are met.

![Smart Contract](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/smart_contract_D.jpg)
![Smart Contract](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/smart_contract_M.jpg)

### The Promise of Smart Contracts

Smart contracts promise to eliminate the need for middlemen, such as lawyers or notaries, and thereby reduce the cost of transactions. Most importantly they save participants time by disposing of middlemen. Smart contracts could not only govern the transfer of digital assets such as cryptocurrencies in the future, but they could govern everything of value, such as equity bonds and physical property (like real estate).

For example, a landlord and a tenant could use a smart contract to govern the rental agreement. The smart contract could automatically lock the tenant out of the apartment if the tenant fails to pay rent. The if-then statement, in this case, would look something like:

*If the contract address receives amount X by the 3rd of each month from address Y, grant Y access to the apartment. If payment fails for 2 consecutive months, revoke the right of Y to unlock the apartment.*

Another potential use case for smart contracts would be a decentralized eBay. One could construct a smart contract with an expiry date defining the time period of the auction and a starting bid. The highest bidder would receive the item at the end of the auction period in exchange for their money. The losing bidders would be automatically refunded by the smart contract. Such a decentralized version of eBay would be considered a dApp or decentralized App.

### dApps

A decentralized application or dApp is a more sophisticated use case for smart contracts. Most apps and websites use API's (application programming interfaces) to communicate with their underlying database. A well-written API makes it easier for developers to offer a service by defining the communication between the various components of a system such as the operating system, a database or a software library.

Dapps use smart contracts to communicate with the underlying blockchain. Imagine a future where smart contract libraries with a large number of template contracts that can be used for various purposes. We are already seeing a trend towards this scenario with smart contract platforms such as Ethereum.

![dApp](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/dapp_D.jpg)
![dApp](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/dapp_M.jpg)

### Smart Contract Platform

There are many smart contract platforms out there besides Ethereum, which is the most popular one today and has the most developer activity on top of it. Other platforms include Lisk, NEM and Hyperledger, a modified version of Ethereum designed for corporate use.

Few people know that Bitcoin also allows the deployment of smart contracts. Bitcoin has a built-in programming language called Script. It is a rudimentary programming language compared to Solidity, which is used to write smart contracts on Ethereum. Solidity is a Turing-complete programming language, that enables more complex contracts compared to Bitcoins Script. The cost of being more complex comes at being harder to write, analyze and secure.

Security in the context of smart contracts means considering every possible way in which a contract could execute and to account for each of these scenarios. Smart contracts on Bitcoin written in Script allow for less complexity compared to ones written in Solidity on Ethereum. This limits their potential use cases but makes the possible states of the contract (or program) easier to enumerate, examine, and account for resulting in easier to secure contracts.

It is interesting to note, that the most commonly used smart contract templates on Ethereum, namely the ERC20 and ERC721 standard, do not require Turing completeness. Almost all tokens deployed on the Ethereum blockchain use one of these two standards, as they allow for easier integration with different wallets and exchanges.

### Are They Really Trustless?

The promise of smart contracts is to allow trustless execution with automatically enforced rules. But can they actually live up to this promise?

Almost all types of assets are subject to the local jurisdiction you are in. This means a contract, no matter if smart or not, requires additional trust in the jurisdiction besides the trust put in the contract itself. Possession in a smart contract does not equal possession in the real world. Just as with regular contracts, the terms can be subject to changing circumstances and interpretation thereof. An illegal contract is not legally binding.

One must consider that writing traditional contracts takes years of studying the framework regulating the different areas of contractual law. Writing smart contracts is even more difficult, as one needs to understand the technical dimension behind them. We will need to see an entirely new generation of tech-savvy lawyers emerge to enable a meaningful adoption of legally binding smart contracts.

There is another major challenge to overcome. The digital world needs to learn about real-world events in order for a smart contract to function and execute. An oracle is an entity submitting data to a blockchain or smart contract. The trust problem is referred to as the Oracle Problem. Imagine a smart contract running a betting platform in a trustless environment. An oracle needs to submit the result of a game in order to have the smart contract distribute funds to the winners. Because an Oracle determines what a smart contract sees, it also controls what it does.

![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/oracle_D.jpg)
![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/oracle_M.jpg)

Centralized Oracles are not considered a solution to the Oracle Problem. No matter what the actual implementation looks like, the incentives to untruthfully submit data might outweigh the benefits of acting honestly in some decisions. No matter if centralized or decentralized, an oracle will always come at a cost. Acting honestly must always be the most profitable strategy and therefore strong incentives must be in place. This is another problem that needs game theoretic evaluation and incentive design, just like the incentives for miners that we talked about in our **last article**.

Projects such as Augur and Gnosis are working on decentralized solutions to the Oracle Problem via prediction markets. Before these prediction markets gain serious adoption they will remain easy to game. And since prediction markets have the potential to influence the outcome of an event as Dan Finley suggests it remains to be seen if they can become a solution.


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Maybe/Theory: Since decentralized prediction markets can influence the incentives around an event’s probability, they are never just prediction tools, and should always be treated as incentivization tools.</p>&mdash; Dan Finlay (@danfinlay) <a href="https://twitter.com/danfinlay/status/1089550845698396167?ref_src=twsrc%5Etfw">January 27, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Before solving the problem of creating legally binding smart contracts and the Oracle Problem, the use of smart contracts will be limited to small experimental fields with low risk involved. An example of a potential use case would be in-game payments triggered by certain achievements that are objectively verifiable by code.

As Jimmy Song puts it: "A smart contract that trusts a third party removes the killer feature of trustlessness." There is a long way to go before we will see the broad use of trustless smart contracts across different domains, but they are most definitely a concept worth exploring.

### Summary

You should have a good idea of what a blockchain is. We looked at it as a data structure and as a set of rules. A blockchain can store data reliably due to the distributed nature of the ledger. Anybody can participate in the network without any permission or registration as long as he follows the rules of the protocol. This makes public blockchains censorship-resistant, permissionless, trustless, and valuable. It can not only store pieces of data but also programs running in a distributed fashion.  
Smart Contracts can ensure objective execution on the basis of mutually agreed upon terms enforced by code. They have the potential to reduce middleman and thereby reduce cost and safe time. They will most likely foster a closer connection between software developers and the judicial system. Before we can see widespread adoption we have to overcome some hurdles. Regulators have to create a framework to allow deployment of legally binding smart contracts and decentralized oracles need to be developed.

This was the last article in the chapter on what a blockchain is and what it can do. In the next chapter, we will take a look at how blockchains work.

