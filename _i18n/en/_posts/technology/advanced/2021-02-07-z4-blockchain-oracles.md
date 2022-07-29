---
layout: post
type: intro
title: "What are Oracles in Blockchain?"
description: "An Oracle is a decentralized protocol that transmits data from external sources into smart contracts to help them execute according to predefined conditions."
permalink: /technology/advanced/blockchain-oracle/
topic: technology
level: advanced
chapter: "Blockchain Oracles"
---

## The Oracle Problem

**The primary objective of a blockchain** is to ensure that transactions that occur within the network are correctly validated and recorded based on a set of protocols executed by the network's nodes.

**This sophisticated system** has enabled millions of users to _securely_ and _transparently_ record _billions of dollars_ in transactions _without_ the need of a **centralized intermediary**.

While there are many obvious benefits to this technology, **one major flaw in the design** of blockchains is that they are unable to pull in data from or push data out to any external system.

**This means** that a blockchain on its own is essentially just an isolated network, similar to a computer with no internet connection.

Blockchain [consensus mechanisms](https://academy.horizen.io/technology/advanced/consensus-mechanisms/) are predicated on the assumption that any external data that is inputted into the blockchain **must** be correct, otherwise, any transactions that are validated and recorded based on false data will remain _permanently_ embedded into the blockchain as truth.

**In order for blockchains to exist** as more than siloed systems and to be adopted for real world use cases, there needs to be a _trustless_, _tamper proof_ solution for feeding correct data from the external environment into the blockchain through smart contracts. **Thereby**, enabling it to execute lending agreements, call outcomes in prediction markets and track the price of synthetic assets based on timely and accurate information.

This solution is called an **Oracle**, and it is a critical piece of technology that powers the entire blockchain ecosystem, particularly **decentralized finance** or _DeFi_.

## Key Takeaways - Blockchain Oracles

- An **Oracle** is a decentralized protocol that transmits data from external sources into _smart contracts_ in order to help them execute according to their predefined conditions.
- Oracles exist to **solve the problem** of blockchain being unable to pull in data from or push data out to any external system. This means that a blockchain on its own is essentially just an isolated network, similar to a computer with no internet connection.
- Oracle networks can be applied to a variety of **use cases**, including defi, NFTs, gaming, insurance and enterprise blockchains.

## What Is a Blockchain Oracle?

**Before defining** what oracles are, it is essential that we explain what **smart contracts** are and how they work.

**A [smart contract](https://academy.horizen.io/technology/advanced/guaranteed-execution-with-smart-contracts/)** is a computer program that automatically executes a set of functions based on predefined rules or conditions set by the developer.

_With smart contracts_, users can conduct all kinds of agreements that involve anywhere from **two** individuals to **several thousands** of people _without_ the need of an intermediary.

**For example**, smart contracts can be used to manage **loan transactions** between 2 anonymous parties, where one issues _collateral_ in exchange for a _loan_.

Depending on whether or when the loan is repaid, or if the value of the collateral remains at a certain level that does not put the lender at risk, the collateral will either be liquidated and sent to the lender or returned to the borrower.

> **_An Oracle is a decentralized protocol that transmits data from external sources into smart contracts in order to help them execute according to their predefined conditions._**

_In the lending example above_, let's say **Person A** wishes to _borrow_ **$6,000** from the _lender_, **Person B**. In order to receive the loan, Person A must put **3 ETH** (equal to **$9,000** at current prices) in a smart contract as collateral.

The terms of the loan states that it must be repaid with interest in **60 days** and that if the price of ETH _falls_ below **$2,000** then the contract will be terminated and the collateral will automatically be liquidated and sent to the lender.

**In order for the smart contract to know whether to release the collateral to the lender**, they must have a way of tracking the price of ETH in real time in order to determine whether it is still above $2,000.

**The job of an oracle network** is to take important data from outside of the blockchain (such as the current price of ETH trading on centralized exchanges) and feed it into the smart contract so that it knows exactly what the value of the collateral is at all times, and can therefore make decisions without the need of a trusted 3rd party.

## What is a Blockchain Oracle?

A **Blockchain Oracle** is a piece of _middleware_ implemented within a computer node that enables blockchains to communicate with any off-chain system.

**These off-chain systems can include**:

- Data Providers
- Enterprise Backends
- Web APIs
- IoT Devices
- Cloud Providers
- Payment Systems
- Other Blockchains

## What do Blockchain Oracles Do?

**The functions are blockchain oracles include:**

- **Listen**: Monitoring the blockchain for incoming requests from users or smart contracts for off-chain data
- **Extract**: Retrieving data from one of multiple systems that are external to the blockchain, such as off-chain APIs hosted on 3rd party servers
- **Format**: Converting data from an external API into a readable blockchain format (i.e an input) or make it compatible with an external API (i.e an output)
- **Validate**: Using [digital signatures](https://academy.horizen.io/technology/expert/digital-signatures/) or zero-knowledge proofs to create a cryptographic proof that confirms the performance of a data oracle
- **Compute**: Performing secure computations off-chain in order to calculate variables such as the median result from multiple oracle data submissions.
- **Broadcast**: In a similar way to how nodes sign and broadcast transactions on a blockchain so that all other nodes can verify them, oracle nodes sign and broadcast data along with corresponding proofs to the blockchain so that they can be consumed by smart contracts
- **Output**: In certain cases, oracles will send data from a smart contract to an external system in order for that system to take actions that correspond to actions taken within the blockchain network. **For example**, a smart contract might be used to trigger a transaction to occur between participants using an off-chain payment system or a smart contract on a different blockchain.

**Oracles can be applied in many other situations**, such as:

- In prediction markets where betters need real time information on the score of a game in order for the smart contract to determine the odds of a bet and who won or lost
- For creating assets on the blockchain that are meant to mirror the price of a stock or a token on a different blockchain
- Or even for creating payment contracts that are based on the delivery of goods from one location to another

**Oracles help keep blockchains in sync with the real world.**

By combining accurate and real time information from the real world with tamper proof and decentralized protocols, oracles and blockchains can bring greater efficiency, transparency and security to the traditional economy.

## Decentralized Oracles

In order for this system to work in a way that ensures that the data is accurate and transparently sourced, hundreds to thousands of independent nodes coordinate to form a **decentralized oracle network** or _DON_.

### Architecture

On Chainlink, the transmission of external off-chain data from DONs to on-chain users and smart contracts is enabled by a marketplace where Chainlink nodes carry out data delivery jobs that are managed and coordinated by special oracle smart contracts, or simply **Oracle Contracts**, on the ChainLink network.

The jobs are called On-chain ‘Service agreements’, and they are created between a requesting smart contract (e.g a Dapp) and an oracle node provider.

These agreements specify how much of the Chainlink token (_LINK_) will be rewarded for successfully delivering high quality data that can be enforced through smart contracts.

The oracle node will also need to stake a certain amount of LINK token as collateral before they can engage in a service agreement, _which acts as a deterrent against falsifying data or accepting a job that they cannot complete._

**Service agreements** are supported by a _reputation system_, which allow requesting smart contracts to review the reputation of an oracle node by checking the history of data that a node has sent to the network based on the digital signatures they must include in every transmission.

The **benefit** of a decentralized oracle system is that it introduces _token incentives_ as well as market competition through service agreements that nodes must bid for and can only continue to earn by maintaining a good reputation overtime.

**To reduce the risk of centralized data sources**, decentralized oracles will often aggregate multiple data sources and compute averages amongst them in order to provide the most accurate information possible.

## Centralized Oracles

**By contrast**, with centralized oracles, all data is transmitted to a network through a **single node** that is owned by a corporation or some other centralized entity. Without a reputation system, market competition or token incentives, users in the network simply have to trust that the centralized oracle is gathering data from the correct sources and is not censoring or manipulating the data before submitting it to the network.

### Security

In addition, like any centralized system, a centralized oracle is also less secure because it has a **single point of failure**. This increases the risk that a bad actor could successfully hack the oracle and influence the data transmitted to the blockchain network.

**For these reasons**, decentralized oracles offer a much more reliable and secure method for submitting off-chain data to on-chain smart contracts.

## Blockchain Oracle Use Cases

### Decentralized Finance (DeFi)

Thus far, the **primary use case** for blockchain oracles has been in the DeFi space. Oracles have served as the cornerstone for _stablecoin markets, lending protocols, cross-chain bridges_ and _liquidity pools_ to leverage external data from centralized sources or other blockchain networks to help tokenized assets maintain their peg, or alert smart contracts of when to liquidate funds.

**As one of the largest oracle networks**, ChainLink has served as the primary growth engine behind the Defi ecosystem, which currently has over [$200B](https://www.coindesk.com/business/2022/02/17/bofa-says-chainlink-likely-driver-for-defis-tvl-growth-to-203b/) in total value locked (TVL).

### Dynamic NFTs and Gaming

**NFTs** and **GameFi** are 2 of the largest sectors outside of Defi that oracles are currently penetrating.

**Many NFT projects and play-to-earn games** leverage the same mechanics that users are exposed to in the Defi sector, including:

- **Collateralizing** NFTs to take out loans
- **Fractionalizing** NFTs in order to produce fungible units that can be traded on a decentralized exchange or DEX
- Forming **liquidity pools** to trade in-game assets

All of these systems require oracles to provide real time price feeds that are essential for maintaining pegs and managing smart contract liquidations.

### Insurance

Decentralized Insurance protocols can leverage oracles to transmit data to a smart contract insurance pool that will allow it to decide whether to pay out funds to insured customers if a claim is filed.

**For example**, a peer-to-peer insurance pool that is setup to underwrite various smart contract loans in case the contracts are exploited or they fail to liquidate the collateral in time to avoid heavy losses.

The insurance contract would be able to receive data regarding the value of the collateral relative to the outstanding loan, as well as P&L statements for each individual loan contract to determine the size of the losses and how much it needs to pay out.

### Enterprise

Enterprise shipping companies adopting blockchain technology can use oracles to provide real time information about weather patterns or delays at shipping ports. This information can be used to calculate estimated time to arrival or set prices for shipments.

### Sustainability

Carbon credit schemes can be set up on the blockchain that rely on oracle networks to submit data from external sources that track emissions in order to determine how to reward credits based on sustainability targets.

**In conclusion**, _oracles_ can best be described as the connective tissue that holds the blockchain space together. They bear the important responsibility of transmitting the world's data into smart contracts in order to inform them about the current state of reality as it exists outside of the siloed blockchains that they operate within.

In performing this critical function, **oracle networks** serve as the primary information highway for the crypto markets and the driving force behind the movement of _billions of dollars of capital_ that exists across thousands of Dapps, tokens and DAOs within the blockchain ecosystem.

## Frequently Asked Questions - Blockchain Oracles

### What is the Job of an Oracle?

The job of an oracle network is to take important data from outside of the blockchain and feed it into the smart contract so that it can make decisions without the need of a trusted 3rd party.

### How are Oracle Networks Decentralized?

In order for this system to work in a way that ensures that the data is accurate and transparently sourced, hundreds to thousands of independent nodes coordinate to form a decentralized oracle network or DON.

On popular Oracles networks like Chainlink, the transmission of external off-chain data from DONs to on-chain users and smart contracts is enabled by a marketplace where oracle nodes carry out data delivery jobs that are managed and coordinated by special oracle smart contracts on the blockchain.

### What Applications Use Oracles?

Oracles are utilized for several blockchain applications, including decentralized exchanges, lending protocols, insurance protocols, some NFT marketplaces, games and enterprise blockchain applications such as supply chain tracking.
