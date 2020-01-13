---
layout: post
type: article
title: "Guaranteed Execution with Smart Contracts"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/guaranteed-execution-with-smart-contracts/
topic: technology
level: expert
chapter: "What is a Blockchain?"
---

A blockchain can not only store data, it can also execute programs. Programs on a blockchain are called smart contracts and need to be written in a specific language defined by the [protocol]({{ site.baseurl }}{% post_url /technology/expert/2022-01-03-a-protocol-to-transfer-value %}). A contract, in general, is an agreement between parties that binds them to something happening in the future. The term "smart" comes from the automatic execution of these digital contracts.

While the first cryptocurrency, Bitcoin, already supported rudimentary logic to be run on top of it using a scripting system called *Scrypt*, more complex smart contracts are enabled by sophisticated smart contract languages like *Solidity* on smart contract platforms such as [Ethereum](https://www.ethereum.org/).

There is a tradeoff between simple scripting systems and more sophisticated, [*turing-complete*](https://stackoverflow.com/questions/7284/what-is-turing-complete) ones. While the former does not allow for complex logic, it is easier to write programms and secure them. More feature-rich languages allow for more complex smart contracts, but they are more error prone and harder to secure.

Security in the context of smart contracts means considering every possible way in which a contract could execute and to account for each of these scenarios. Simple smart contract languages have fewer potential use cases but make the possible states of the contract easier to enumerate, examine, and account for resulting in easier to secure contracts.

### What is a Smart Contract

Smart contracts are most often discussed in the context of decentralized applications or dApps. A dApp can be pretty much everything, from a decentralized exchange to an auctioning platform or a games. You can find an extensive overview on [State of the dApps](https://www.stateofthedapps.com/) of what is on the market today.

Most crypto tokens are issued on the Ethereum blockchain using the [*Ethereum Request for Comment* (ERC-20) standard](https://eips.ethereum.org/EIPS/eip-20). A token is issued within a smart contract which defines the total supply and the conditions for token transfers among other things. The ERC-20 token standard is a smart contract template, that allows for easy issuance and integration with different wallets and exchanges. If you would like to take a closer look at the process of issuing a token or even try it out for yourself, [here](https://medium.com/coinmonks/6-steps-to-erc20-tokens-and-ico-smart-contracts-e90523afafa1) is an easy to follow guide for you.

Other use cases of smart contracts that are often times omitted, are  [payment and state channels](({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-state-payment-channels %})) as well as [HTLCs](({{ site.baseurl }}{% post_url /technology/expert/2022-04-04-htlcs %})) - Hashed Timelock Contracts - which enable atomic swaps. In most general terms, they allow for interaction happening off-chain to be just as trustless, as if they were to happen on-chain. The most popular payment channel network is arguably the [Lightning Network](https://lightning.network/) on Bitcoin.

The term smart contract can have two meanings. It can either refer to static code in a given language or a  *contract instance*, a dynamic object that executes the code. There is a similar distinction between programs and processes in operating systems.

> "One can think of a smart contract instance as a trusted third party to which users can send coins, and that can distribute coins between the parties, according to conditions written in its static code." - Dziembowski, Faust, Hostáková, [State Channel Paper](https://eprint.iacr.org/2018/320.pdf)

![Smart Contract](/assets/post_files/technology/expert/1.3-smart-contracts/smart_contract_D.jpg)
![Smart Contract](/assets/post_files/technology/expert/1.3-smart-contracts/smart_contract_M.jpg)

### The Promise of Smart Contracts

Smart contracts promise to significantly reduce the need for middlemen, such as lawyers or notaries, and thereby reduce the cost of transacting. Most importantly they save participants time by disposing of middlemen. Many use cases can be constructed that achieve just that.

Imagine a sports club and their ticketing process. Instead of having a third party involved that takes fees it only takes one open source implementation of a ticketing platform to render many ticketing services obsolete. The informal, high-level description of an algorithm is called *pseudocode*. As an example, here is what the pseudocode for a ticketing smart contract could look like:

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
		if Y is not on the whitelist
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

Not only could the sale and refund for tickets be realised with smart contracts, but so could an automated secondary market with self-enforcing rules be built. While this is obviously an overly simplified example, it should give you an idea of the kind of logic used in smart contracts. 

The execution of certain actions by a smart contract is triggered by *messages*. These messages can be transactions transferring money, but they could also be messages only transferring data. We will get back to smart contracts getting triggered by data later. When a set of conditions is combined to enable an application this collection of smart contracts is called a dApp. The line seperating simple smart contracts and dApps is somewhat blurry.

### Decentralized Applications - dApps

A dApp - or decentralized application - allows its users to perform a group of coordinated functions, tasks, or activities, just like any other application you are used to. Most traditional applications use API's  - application programming interfaces - to communicate with their various components, such as social media integrations or underlying databases.

A dApp uses one or more smart contracts to communicate with it's underlying blockchain. The smart contracts can be used to detect incoming payments from users, issue payments to its users, to serve as an escrow or to trigger an action based on some form of submitted data.

![dApp](/assets/post_files/technology/expert/1.3-smart-contracts/dapp_D.jpg)
![dApp](/assets/post_files/technology/expert/1.3-smart-contracts/dapp_M.jpg)

Currently we are still in the early stages of decentralized applications. There have been and will be many growing pains such as bugs that cause loss of funds and inefficient usage of on-chain transactions. While well developed and audited smart contract libraries will make the development of smart contracts easier and more secure, scaling methods like [state channels]({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-state-payment-channels %}) will allow the communication of smart contracts off-chain. Smart contract platforms are specifically designed to enable not just money on the blockchain, but also the deployment of smart contracts and dApps.

### Smart Contract Platforms

The digital world seems to favour winner-takes-all or at least winner-takes-most scenarios - think Google, Facebook or Amazon. It is conceivable that the market for smart contract platforms will develop in a similar direction. Better tech attracts better developers, which build better tools and libraries, which make it easier for projects to use the platform, which in turn brings in more developers.

Not only does this make the platform itself more attractive. It is easier to integrate tokens into existing wallet implementation, listing on exchanges is simplified with widely accepted standards and the interoperability between dApps is increased. All this might play out very differently, and there is a lot of debate in the space about it. But from today's perspective a winner-takes-most scenario definitely has to be accounted for with a non-zero probability.

But there might be an important differentiator to the centralized web of today: Users can own their data on the underlying blockchain. [Lock-in effects](https://en.wikipedia.org/wiki/Vendor_lock-in) are reduced and switching from one dApp to another might come at a lower cost than today. The [*Fat Protocol thesis*](https://www.usv.com/blog/fat-protocols), proposed by Joel Monegro in 2016 describes this effect of value being captured in the protocol layer, rather than the application layer. Today, most people oppose the thesis, but it still holds some water and is regularly [discussed](https://medium.com/coinmonks/fat-protocol-and-value-capture-over-time-part-1-of-2-51c7e7d0ca34).

We wanted to include this little excursion to account for the multi-disciplinary nature of blockchain technology. It's not just technology. It's a mix of economics, socio-economics, game theory, computer science and much more. In order to consider yourself an "expert" in the field, you should at least be aware of some of the discussions and thought experiments that go beyond the tech itself. But for now let's move on.

### Scaling with Smart Contracts

Smart contracts put an additional burden on the limited throughput of a blockchain. Not only does it need to store transactions and data clearly visible to the user. Many "hidden" transactions are used for the communication between smart contracts. The launch of [CryptoKitties](https://www.cryptokitties.co/) put a lot of stress on the Ethereum blockchain, resulting in a sharp rise in transaction costs and long confirmation times.

There are two different balance or accounting systems in blockchains - the UTXO model and the Account-based Model. We dedicate [an entire article]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) in the transactions chapter to them. For now the following quote should suffice to differentiate between them.

> "The first model is a directed graph of assets moving between users, the second is a database with the current network state." - Dmitry Mishunin

The account model is used by most smart contract platforms because it makes it easier to develop smart contracts and allows for better scalibility. There can be two types of accounts: private key controlled user accounts and contract-code controlled accounts. Each has its own balance, storage and and code-space for calling other accounts or addresses.

On top of the protocol-layer efficiency gain achieved by the account model, second-layer technologies like state channels are a promising approach to make smart contract platforms scale. They are one of several techniques for moving state modifications off-chain, relocating the required operations to a secondary environment where they can be performed at lower cost. Only the opening and closing of a state channel between two parties requires an on-chain transaction. After that, the two parties can interact indefinitely without broadcasting to the blockchain.

> "[T]he interaction of the parties with the contract instance is always “local”, i.e., the parties themselves compute the new states [...] and then just exchange signatures [on it]." - Dziembowski, Faust, Hostáková, [State Channel Paper](https://eprint.iacr.org/2018/320.pdf)

Another scaling approach besides moving interactions off-chain to a second layer is using  **sidechains**. While sometimes referred to as a second-layer technology as well, it is actually an approach based on parallelization. A sidechain is a blockchain in itself with the ability to communicate with the mainchain. This communication can comprise the exchange of data or assets.

A dApp can be launched on a sidechain, possibly even running a different [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}) than the mainchain. Depending on the specific construction, incentives might have to be provided in order for nodes to run sidechains (in a PoS sidechain model) or for miners to perform merged mining (in a PoW sidechain model).

![Scaling](/assets/post_files/technology/expert/1.3-smart-contracts/scaling_contracts_D.jpg)
![Scaling](/assets/post_files/technology/expert/1.3-smart-contracts/scaling_contracts_M.jpg)

There are many approaches to enable scalable smart contract platforms, often times also combining different methods. But besides creating systems with sufficient throughput to enable large scale adoption of smart contracts and dApps, there is another problem to solve: the *oracle problem*.

### The Oracle Problem

The promise of smart contracts is to allow trustless execution with automatically enforced rules. But can they actually live up to this promise?

Most assets are subject to the local jurisdiction you are in. This means a contract, no matter if smart or not, requires additional trust in the jurisdiction besides the trust put in the contract itself. Possession in a smart contract does not equal possession in the real world. Just as with regular contracts, the terms can be subject to changing circumstances and interpretation thereof. An illegal contract is not legally binding. We will need to see an entirely new generation of tech-savvy lawyers emerge to enable a meaningful adoption of legally binding smart contracts.

The other another major challenge to overcome is called the oracle problem. A smart contract needs to learn about real-world events (depending on the use case) in order for it to function and execute. An oracle is an entity submitting data to a smart contract. The trust problem that comes with this is referred to as the oracle problem.

Imagine a smart contract running a betting platform in a supposedly trustless environment. An oracle needs to submit the result of a game in order to have the smart contract distribute funds to the winners. Because the oracle determines what a smart contract sees, it also controls what it does.

![Oracles](/assets/post_files/technology/expert/1.3-smart-contracts/oracle_D.jpg)
![Oracles](/assets/post_files/technology/expert/1.3-smart-contracts/oracle_M.jpg)

Centralized oracles are not considered a solution to the oracle problem. No matter what the actual implementation looks like, the incentives to untruthfully submit data might outweigh the benefits of acting honestly in some cases. And what is the point of having trustless execution on the basis of information provided by a trusted third party? As Jimmy Song puts it: “A smart contract that trusts a third party removes the killer feature of trustlessness.”

No matter if centralized or decentralized, an oracle will always come at a cost. Acting honestly must always be the most profitable strategy and therefore strong incentives need to be in place for submitting truthfull data. This is a problem that needs game theoretic evaluation and incentive design.

### Prediction Markets

A decentralized approach to solving the oracle problem is using [*prediction markets*](https://www.getsmarter.com/blog/wp-content/uploads/2017/07/mit_prediction_markets_report.pdf). A prediction market generally works by first creating a market for a specific event. Let's assume an event with a binary outcome: does team X or team Y win the Superbowl. A participant buys in for $1 and gets two *futures contracts*, one for each outcome. The futures contract whose outcome materialized pays $1, the other one $0.

![Prediction Markets](/assets/post_files/technology/expert/1.3-smart-contracts/prediction_markets_D.jpg)
![Prediction Markets](/assets/post_files/technology/expert/1.3-smart-contracts/prediction_markets_M.jpg)

With an equally likely outcome, a participant wouldn't know which contract to keep and which to sell. Both should trade at around $0.50. If a participant has high confidence in out outcome, let's say team X wins, he will sell the contract that pays in case Y wins. If many people think alike, this creates increasing demand for contract X and increasing supply for contract Y. Futures contract X rises in price, while Y gets cheaper, e.g. $0.70 vs. $0.30. The price of the futures contracts can be interpreted as the likelyhood of the respective event happening, in this case a 70% chance of team X winning.

Projects such as [Augur](https://www.augur.net) and [Gnosis](https://gnosis.io/) are working on decentralized solutions to the oracle problem via prediction markets. Before these prediction markets gain serious adoption they will remain easy to game. And since prediction markets have the potential to influence the outcome of an event as Dan Finley suggests it remains to be seen if they can become a solution.

{% include blocks/tweet.html id="1089550845698396167" %}

Before solving the problem of creating legally binding smart contracts and the oracle problem, the use of smart contracts will be limited. The creation of tokens is definitely a use case, independent of the aforementioned current shortcomings. Another example of a potential use case would be in-game payments triggered by certain achievements that are objectively verifiable by code.

### Summary

Smart Contracts can ensure objective execution on the basis of mutually agreed upon terms enforced by code. They have the potential to reduce middleman and thereby reduce cost and save time. They will most likely foster a closer connection between software developers and the judicial system.

Currently the creation of tokens and the deployment of state- and payment channel networks are the most common use cases for smart contracts. Before we can see widespread adoption, we have to overcome some hurdles. Scaling issues have to be addressed because smart contracts running entirely on-chain put a lot of stress on their underlying blockchain. [*Second layer technologies*]({{ site.baseurl }}{% post_url /technology/expert/2022-04-03-state-payment-channels %}) such as state channels or parallelization approaches like [*sidechains*]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) could solve this. 

For many use cases smart contracts need to learn about real world events through *oracles*. Centralized solutions remove the killer feature of smart contracts - trustlessness - while *prediction markets* might create incentives around an events probability in a problematic fashion. There is a long way to go before we will see the broad use of smart contracts across different domains, but they are most definitely a concept worth exploring.
