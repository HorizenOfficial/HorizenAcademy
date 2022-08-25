---
layout: post
type: article
title: "Guaranteed Execution with Smart Contracts"
description: "Smart contracts can not only be used to govern the transfer of digital assets such as cryptocurrencies, they could govern many other types of value transfer."
permalink: /technology/advanced/guaranteed-execution-with-smart-contracts/
topic: technology
level: advanced
chapter: "What is a Blockchain?"
---

A blockchain can do more than simply storing data; it can also execute applications. Programs on a blockchain are called smart contracts and need to be written in a specific language defined by the [protocol](https://academy.horizen.io/technology/advanced/a-protocol-to-transfer-value/). In general, a contract is an agreement between parties that binds them to something happening in the future.

The term **_“smart”_** comes from the automatic execution of these digital contracts. Simply speaking they consist of many _“if, then”_ statements that are written in and enforced by code. The contract executes automatically if the contract conditions are met.

![Smart Contract]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/smart_contract_D.jpg)
![Smart Contract]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/smart_contract_M.jpg)

## What is a Smart Contract

Smart contracts are most often discussed in the context of decentralized applications or _dApps_. A **dApp** can be pretty much everything, from a decentralized exchange to an auctioning platform or games. You can find an extensive overview of what is on the market today on [State of the dApps](https://www.stateofthedapps.com/).

Most crypto tokens are issued on the Ethereum blockchain using the [_Ethereum Request for Comment_ (ERC-20) standard](https://eips.ethereum.org/EIPS/eip-20). A token is issued within a smart contract that defines the total supply and the conditions for token transfers, among other things. The _ERC-20 token standard_ is a smart contract template that allows for easy issuance and integration with different wallets and exchanges.

Other use cases of smart contracts that are oftentimes omitted, are [payment and state channels](https://academy.horizen.io/technology/expert/state-and-payment-channels/), as well as [HTLCs](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts) - _Hashed Timelock Contracts_ - which enables atomic swaps. In most general terms, they allow for interaction happening off-chain to be just as trustless, as if they were to happen on-chain. The most popular payment channel network is arguably the [Lightning Network](https://lightning.network/) on Bitcoin.

The term **smart contract** can have two meanings. It can refer to static code in a given language or a _contract instance_, a dynamic object that executes the code. There is a similar distinction between programs and processes in operating systems.

> "_One can think of a smart contract instance as a trusted third party to which users can send coins, and that can distribute coins between the parties, according to conditions written in its static code._" - **Dziembowski, Faust, Hostáková**, [_State Channel Paper_](https://eprint.iacr.org/2018/320.pdf)

![Smart Contract]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/smart_contract_D.jpg)
![Smart Contract]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/smart_contract_M.jpg)

## The Promise of Smart Contracts

Smart contracts promise to significantly reduce the need for middlemen, such as lawyers or notaries, and thereby reduce the cost of transacting. Most importantly, they save participants time by disposing of intermediaries. Disposing of middlemen can also save a lot of time. You don’t have to wait for opening hours or through banking holidays.

Smart contracts can not only be used to govern the transfer of digital assets such as cryptocurrencies, they could govern many other types of value transfer, such as trading of shares and other traditional financial instruments, or even transactions involving physical property like real estate. Many use cases can be constructed that achieve just that.

### Rental Agreements

A **landlord** and a **tenant** could use a smart contract to govern a _rental agreement_. The smart contract could automatically lock the tenant out of the apartment if the tenant fails to pay rent. The if-then statement, in this case, could look like this:

_If the contract address receives amount **X** by the **3rd of each month** from **address Y**, then grant **Y** access to the apartment. If payment fails for **2 consecutive months**, then revoke the right of **Y** to unlock the apartment._

### Ticketing

Imagine a **sports club** and its _ticketing process_. Instead of having a third party involved that takes fees, it only takes one open-source implementation of a ticketing platform to render many ticketing services obsolete. The informal, high-level description of an algorithm is called _pseudocode_. As an example, here is what the pseudocode for a ticketing smart contract could look like:

```
program Ticketing
while (number of tickets sold <= max. amount of tickets available for the event)
{
	if only personalized tickets can be issued
	{
		ask buyer for personal details
    	safe personal details
		link details to address and put address on a whitelist
   	}
	if amount x is received from address Y
  	{
		if there is a whitelist && Y is not on the whitelist
    		{
      			refund address Y
      			end program
    		}
		send Y the correct amount of tickets as per the amount of money received
		increment "number of tickets sold"
  	}
	if address Y sends message "I want to sell"
  	{
		refund address Y
		invalidate ticket
		decrement "number of tickets sold"
  	}
}
```

Not only could the sale and refund for tickets be realized with smart contracts, but so could an automated secondary market with self-enforcing rules be built. While this is obviously an overly simplified example, it should give you an idea of the kind of logic used in smart contracts.

The execution of certain actions by a smart contract is triggered by _messages_. These messages can be transactions transferring money, but they could also be messages only transferring data.

### A Decentralized Marketplace

Another potential use case for smart contracts would be a decentralized **eBay**-like platform. One can construct a smart contract with an expiry date defining the time period of the auction and a starting bid. The highest bidder would receive the item at the end of the auction period in exchange for their money. The losing bidders would automatically be refunded by the smart contract.

Such a decentralized version of eBay would be considered a **_dApp_**, or _decentralized App_. When a set of conditions is combined to enable an application, this collection of smart contracts is called a dApp. The line separating simple, smart contracts and dApps is somewhat blurry.

## Decentralized Applications - dApps

A dApp - or decentralized application - is a more sophisticated use case for smart contracts. They allow their users to perform a group of coordinated functions, tasks, or activities, just like any other application you are used to. Most traditional applications and websites use **API’s** - _application programming interfaces_ - to communicate with their various components, such as social media integrations or underlying databases. A well-written API makes it easier for developers to offer a service by defining the communication between the various components of a system.

A dApp uses one or more smart contracts to communicate with its underlying blockchain. Imagine a future with smart contract libraries that hold a large number of template contracts that can be used for various purposes. We are already seeing such developments with smart contract platforms like **Ethereum**.

![dApp]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/dapp_D.jpg)
![dApp]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/dapp_M.jpg)

The smart contracts can be used to detect incoming payments from users, issue payments to its users, to serve as an escrow, or to trigger an action based on some form of submitted data. We are still in the early stages of decentralized applications. There have been and will be many growing pains such as bugs that cause loss of funds and inefficient usage of on-chain transactions.

While well developed and audited smart contract libraries will make the development of smart contracts easier and more secure, scaling methods like [state channels](https://academy.horizen.io/technology/expert/state-and-payment-channels/) will allow the communication of smart contracts off-chain. **Smart contract platforms** are specifically designed to enable not just money on the blockchain, but also the deployment of smart contracts and dApps.

## Smart Contract Platforms

There are many smart contract platforms out there besides Ethereum, which is the most popular one today and has the most developer activity around it. Other platforms include _Lisk, NEM_ and _Hyperledger_, a modified version of Ethereum designed for corporate use.

Few people know that Bitcoin-based blockchains also allow for the deployment of smart contracts. Bitcoin has a built-in scripting language called **Script**. It is a rudimentary language compared to Solidity, which is used to write smart contracts on Ethereum. Solidity is a **Turing-complete** programming language that enables more complex contracts compared to Bitcoins Script. The cost of being more complex comes at being harder to write, analyze and secure.

Security in the context of smart contracts means considering every possible way in which a contract could execute and to account for each of these scenarios. Smart contracts on **Bitcoin**-based blockchains (such as **Horizen**) written in _Script_ allow for less complexity compared to ones written in Solidity on Ethereum. This limits their potential use cases but makes the possible states of the contract (or program) easier to enumerate, examine, and account for, resulting in easier to secure contracts.

It is interesting to note, that the most commonly used smart contract templates on Ethereum, namely the **ERC-20 standard** used to issue tokens, does not require _Turing completeness_. Almost all tokens deployed on the Ethereum blockchain are using this standard, as it allows for easy integration with different wallets and exchanges.

### The Digital Economy

The digital world seems to favor winner-takes-all or at least winner-takes-most scenarios - think **Google, Meta,** or **Amazon**. It is conceivable that the market for smart contract platforms will develop in a similar direction. Better tech attracts better developers, which build better tools and libraries, which make it easier for projects to use the platform, which in turn brings in more developers.

Not only does this make the platform itself more attractive. It is easier to integrate tokens into existing wallet implementations; listing on exchanges is simplified with widely accepted standards, and the interoperability between dApps is increased. All this might play out very differently, and there is a lot of debate in the space about it. But from today’s perspective, a winner-takes-most scenario definitely has to be accounted for with a non-zero probability.

**But there might be an important differentiator to the centralized web of today**: Users can own their data on the underlying blockchain. Lock-in effects are reduced, and switching from one dApp to another might come at a lower cost than today. The [Fat Protocol thesis](https://www.usv.com/writing/2016/08/fat-protocols/), proposed by **Joel Monegro** in 2016, describes this effect of value being captured in the protocol layer, rather than the application layer. Today, most people oppose the thesis, but it still holds some water and is regularly discussed.

We wanted to include this little excursion to account for the multidisciplinary nature of blockchain technology. It’s not just technology, it’s a mix of economics, socio-economics, game theory, computer science, and much more. In order to consider yourself an “expert” in the field, you should at least be aware of some of the discussions and thought experiments that go beyond the tech itself.

## Scaling with Smart Contracts

Smart contracts put an additional burden on the limited throughput of a blockchain. Not only does it need to store transactions and data clearly visible to the user. Many “hidden” transactions are used for communication between smart contracts. The launch of **CryptoKitties** put a lot of stress on the Ethereum blockchain, resulting in a sharp rise in transaction costs and long confirmation times.

There are two different balance or accounting systems in blockchains - the [UTXO model and the Account-Based Model](https://academy.horizen.io/technology/expert/utxo-vs-account-model/). The following quote helps to differentiate between them.

> “The first model is a directed graph of assets moving between users, the second is a database with the current network state.I” - Dmitry Mishunin

The account model is used by most smart contract platforms because it makes it easier to develop smart contracts and allows for better scalability. There can be two types of accounts: _private key controlled user_ accounts and _contract-code controlled_ accounts. Each has its own balance, storage, and code-space for calling other accounts or addresses.

On top of the **protocol-layer** efficiency gain achieved by the account model, _layer 2_ technologies like state channels are a promising approach to make smart contract platforms scale.

They are one of several techniques for moving state modifications off-chain, relocating the required operations to a secondary environment where they can be performed at a lower cost. Only the opening and closing of a state channel between two parties requires an on-chain transaction. After that, the two parties can interact indefinitely without broadcasting to the blockchain.

> “[T]he interaction of the parties with the contract instance is always “local”, i.e., the parties themselves compute the new states […] and
> then just exchange signatures [on it].” - **Dziembowski, Faust, Hostáková**, State Channel Paper

Another scaling approach is using [sidechains](https://academy.horizen.io/horizen/advanced/sidechains/). While sometimes referred to as a second-layer technology as well, it is actually an approach based on parallelization. A **sidechain** is a blockchain in itself with the ability to communicate with the mainchain. This communication can comprise the exchange of data or assets.

A dApp can be launched on a _sidechain_, possibly even running a different [consensus mechanism](https://academy.horizen.io/technology/advanced/consensus-mechanisms/) than the _mainchain_. Depending on the specific construction, incentives might have to be provided in order for nodes to run sidechains, in a PoS sidechain model, or for miners to perform merged mining in a PoW sidechain model.

![Scaling]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/scaling_contracts_D.jpg)
![Scaling]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/scaling_contracts_M.jpg)

There are many approaches to enable scalable smart contract platforms, oftentimes also combining different methods. But besides creating systems with sufficient throughput to enable large scale adoption of smart contracts and dApps, there is another problem to solve: the **oracle problem**.

## The Oracle Problem

The promise of smart contracts is to allow trustless execution with automatically enforced rules without the need for middlemen. But can they actually live up to this promise?

Most assets are subject to the local jurisdiction you are in. This means a contract, no matter if smart or not, requires additional trust in the jurisdiction besides the trust put in the contract itself. Possession in a smart contract does not equal possession in the real world. Just as with regular contracts, the terms can be subject to changing circumstances and interpretation thereof. An illegal contract is not legally binding.

One must consider that writing traditional contracts takes years of studying the legal framework regulating the different areas of contractual law. Writing smart contracts is even more difficult, as one also needs to understand the technical dimension behind them. We will need to see an entirely new generation of tech-savvy lawyers emerge to enable a meaningful adoption of legally binding smart contracts.

The other major challenge to overcome is called the oracle problem. A smart contract needs to learn about real-world events, depending on the use case, in order for it to function and execute. An oracle is an entity submitting data to a smart contract. The trust problem that comes with this role is referred to as the oracle problem.

Imagine a smart contract running a betting platform in a supposedly trustless environment. The oracle needs to submit the result of a game in order to have the smart contract distribute funds to the winners. Because the oracle determines what a smart contract sees, it also controls what it does.

![Oracles]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/oracle_D.jpg)
![Oracles]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/oracle_M.jpg)

_Centralized oracles_ are not considered a solution to the oracle problem. No matter what the actual implementation looks like, the incentives to untruthfully submit data might outweigh the benefits of acting honestly in some cases. And what is the point of having trustless execution on the basis of information provided by a trusted third party? As **Jimmy Song** puts it: “A smart contract that trusts a third party removes the killer feature of trustlessness.”

No matter if centralized or decentralized, an oracle will always come at a cost. Acting honestly must always be the most profitable strategy, and therefore strong incentives need to be in place for submitting truthful data. This is a problem that needs a game-theoretic evaluation and incentive design.

## Prediction Markets

A decentralized approach to solving the oracle problem is using prediction markets. A prediction market generally works by first creating a market for a specific event. Let’s assume an event with a binary outcome: does team **X** or team **Y** win the Super Bowl. A participant buys in for **$1** and gets **two futures contracts**, _one for each outcome_. The futures contract whose outcome materialized pays **$1**, the other one **$0**.

![Prediction Markets]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/prediction_markets_D.jpg)
![Prediction Markets]({{site.baseurl}}/assets/post_files/technology/expert/1.4-smart-contracts/prediction_markets_M.jpg)

With an equally likely outcome, a participant wouldn’t know which contract to keep and which to sell. Both should trade at around **$0.50**. If a participant has high confidence in out outcome, let’s say team **X** wins, he will sell the contract that pays in case **Y** wins. If many people think alike, this creates an increasing demand for **contract X** and increasing supply for **contract Y**. Futures contract **X** rises in price, while **Y** gets cheaper, for example, _$0.70 vs. $0.30_. The price of the futures contracts can be interpreted as the likelihood of the respective event happening, in this case, a **70%** chance of team **X** winning.

Projects such as [Augur](https://www.augur.net/) and [Gnosis](https://gnosis.io/) are working on decentralized solutions to the oracle problem via prediction markets. Before these prediction markets gain serious adoption, they will remain easy to game. And since prediction markets have the potential to influence the outcome of an event, it remains to be seen if they can become a solution.

Before solving the problem of creating legally binding smart contracts, and the oracle problem, the use of smart contracts will be limited. The creation of tokens is definitely a use case, independent of the aforementioned current shortcomings. Another example of a potential use case would be in-game payments triggered by certain achievements that are objectively verifiable by code.

## Summary

Before we can see widespread adoption of smart contracts we have to overcome some hurdles: Regulators will have to create a framework to allow the deployment of legally binding smart contracts and decentralized and trustless oracles need to be developed.

Smart Contracts can ensure objective execution on the basis of mutually agreed-upon terms enforced by code. They have the potential to reduce middlemen and thereby reduce cost and save time. They will most likely foster a closer connection between software developers and the judicial system.

The creation of tokens and the deployment of [state and payment channel networks](https://academy.horizen.io/technology/expert/state-and-payment-channels/) are the most common use cases for smart contracts. Before we can see widespread adoption, we have to overcome some hurdles. Scaling issues have to be addressed because smart contracts running entirely on-chain put a lot of stress on their underlying blockchain. Second layer technologies such as state channels or parallelization approaches like [sidechains](https://academy.horizen.io/horizen/advanced/sidechains/) could solve this.

For many use cases, smart contracts need to learn about real-world events through oracles. Centralized solutions remove the killer feature of smart contracts - trustlessness - while _prediction markets_ might create incentives around the probability of an event in a problematic fashion. There is a long way to go before we see the broad use of smart contracts across different domains, but they are most definitely a concept worth exploring.
