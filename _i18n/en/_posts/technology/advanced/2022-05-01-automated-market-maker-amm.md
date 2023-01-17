---
layout: post
type: intro
title: "What is an AMM? Automated Market Maker"
description: "In DeFi, the traditional market maker is replaced by an Automated Market Maker, which is a set of rules written into code and executed via smart contracts."
permalink: /technology/advanced/automated-market-maker-amm/
topic: technology
level: advanced
chapter: "What is an AMM? Automated Market Maker"
image: assets/post_files/technology/advanced/automated-market-maker-amm/meta.jpeg
---

<p></p>

Automated Market Makers or **_AMMs_** are one of the defining innovations in decentralized finance.

AMMs, along with _smart contracts_, _liquidity pools_ and _oracles_, are the building blocks of any decentralized exchange, or _DEX_. These are critical features that enable investors and traders to exchange tokens at optimal prices in a manner that is transparent, trustless and secure.

Let’s take a look at what AMMs are, and how they enable decentralized exchanges to function.

## What is a Market Maker?

_First_, what exactly is a market maker? In traditional finance, a **market maker** is a person or entity whose role it is to enable buyers and sellers to exchange goods with one another at the best price possible.

_These goods can be:_

- Currencies
- Commodities
- Stocks
- Tokens

… or any type of goods that a large number of people want to buy and sell.

### What does a Market Maker Do?

The goal of a _market maker_ is to sit in the middle of both the _buyers_ and _sellers_ and determine what the optimal price of a good should be such that they can buy it from a seller for slightly below the market price, then turn around and sell it to a buyer at or slightly above the current market price.

This allows them to pocket the difference, also known as the **bid-ask spread**, as their profit.

#### Market Maker Example

Say I want to play the role of a market maker in a crowded marketplace where people are buying and selling _fruits_ and _vegetables_.

I notice that there is a wide variance in the prices that people are paying for oranges throughout the day:

- $4 in the morning
- $6 in the afternoon
- $3 in the evening

_On other days it’s the opposite:_

- $6 in the morning
- $3 in the afternoon
- $5 in the evening

The lack of consistency causes many unlucky buyers who happen to need oranges at a certain time to pay much higher prices and therefore lose more money.

If I deduce that the _average sale price_ for oranges in the past week is around $4.50, I can:

1. Step in as a market maker

2. Buy a large inventory of oranges for $4.25

3. Sell them consistently for $4.50

4. Netting $0.25 in profit per orange

This in turn gives both buyers and sellers better and more consistent pricing.

_Market makers_ serve an important role in not only creating markets but also sustaining them by providing a constant flow of liquidity.

### What is Liquidity?

**Liquidity** is a measure of how easily a person can buy or sell a good without having an impact on its price. This is primarily determined by how much supply is available to buy versus the current demand to buy.

When there’s not enough capital in the market to buy a certain quantity of an asset at a given price, the seller of the asset naturally must find a lower price point in which there is enough capital to purchase the quantity that needs to be sold.

_Using our oranges example:_

- Lack of liquidity in the orange market means that if someone were to attempt to sell a large quantity of oranges very quickly, they would need to accept a much lower price as there may not be enough cash available at the time for a buyer to make such a large purchase.
- Similarly, if someone attempted to buy a large order of oranges very quickly, they would need to pay a premium because there may not be enough supply available at the current moment.
- Therefore, sellers would demand more money in order to go and retrieve the extra supply of oranges from elsewhere.

This example extends to the stock market, where market makers operate as _centralized_ entities that provide liquidity and facilitate trades between buyers and sellers while capturing a small spread.

## How Does Market Making Work in DeFi?

In DeFi, the traditional market maker, which is often a centralized entity, is replaced by an **Automated Market Maker** which is a set of rules written into code and executed via _smart contracts_.

With _AMMs_, the price of the token is managed by a **pricing formula** that adjusts based on the amount of tokens that currently sits in a _liquidity pool_ as compared to the other coin that is its _trading pair_.

### What are Liquidity Pools?

**Liquidity pools** are pools of capital managed by smart contracts. The pools often contain two tokens that are used as trading pairs.

_For example_: ETH and DAI, or UNI and ETH

In the ETH/DAI example, a liquidity pool containing $100million in total reserve value should have approximately $50m worth of DAI and $50m worth of ETH in order for the pool to be balanced at the correct ratio.

The **AMM pricing formula** is **[x * y = k](https://docs.uniswap.org/contracts/v2/reference/smart-contracts/common-errors)**, where **X** and **Y** represent the reserve balances of the two tokens in the pool, and **K** represents the total of the reserves.

If the pool starts to contain a greater number of DAI than ETH, it means there is high demand for ETH relative to DAI, which is causing traders to want to buy more ETH and swap it with DAI.

The pricing formula will recognize this imbalance and may raise the price of ETH or reduce the price of DAI in accordance with the level of imbalance between the pairs.

Liquidity pools also leverage _decentralized data feeds_ or **[Oracles](https://www.horizen.io/blockchain-academy/technology/advanced/blockchain-oracle/)** to relay the current price of ETH from other exchanges to their smart contract. This information serves as a reference point to the AMM and informs its pricing formula of where the price of either ETH or DAI _should_ be.

At the same time, traders seeking to make a profit from _arbitrage_ opportunities will identify dislocations in the price of either asset and seek to exploit it.

#### Arbitrage

For example, a decline in the price of DAI to $0.98 due to increased supply in the pool will encourage traders to take DAI out of the pool and put ETH in with the knowledge that the price of DAI should return back to its normal place at $1, giving them a 2% profit on the DAI they bought at a discount.

The act of multiple profit seeking traders pursuing arbitrage opportunities ultimately helps bring the value of both ETH and DAI in the pool back to equilibrium.

## What is the Role of Liquidity Providers in the AMM Model?

While _AMMs_ are non-human protocols that operate based on a set of codified rules, they rely on human liquidity providers to fill the pool with the supply needed to ensure that the AMM can do its job of properly calibrating the price of a token pair.

**Liquidity providers** are individuals or entities that typically provide an equal amount of a token pair into the liquidity pool in order to ensure enough liquidity for other traders who wish to buy and sell between those pairs.

Basically, LPs are like a community of market makers whose only job is to contribute specific tokens to the pool.

In exchange for offering this service, LPs earn a portion of the transaction fees that the AMM charges for trades made from the pool. A typical trade on a liquidity pool costs 0.3% of the transaction amount

### Liquidity Pool Tokens

This portion of the pool's fees is divided amongst LPs based on the amount of capital they have contributed to the pool. LPs who issue tokens to the pool receive **LP tokens**, which are essentially like certificates or receipts that grant them the right to earn a portion of the fees and to also reclaim their tokens if they choose to do so at a later time.

LP tokens can be held by the original owner or sold on the market to a new owner. _Once an LP token is transferred to a new owner_, that owner now has a claim to their portion of the fees as well as the token pairs that were initially put into the pool.

## What is Impermanent loss?

**Impermanent loss** is simply the loss you incur when the price of any of the token pairs you submit to a liquidity pool rises or falls as you are earning fees from the pool.

This is because changes to the price also impact the change in the total supply of each token you put into the pool, which can ultimately impact how much you can redeem.

_Remember_ that a pool consists of a finite supply of tokens, and a liquidity provider is only entitled to a percentage of their pools fees and assets based on what they put in.

### Impermanent Loss Example

Let’s say you are a liquidity provider in an ETH/DAI pool and you deposit 1 ETH and 1,000 DAI in the pool.

Overtime, the price of ETH rises from 1,000 DAI to 4,000 DAI.

As the price rises, the ratio of ETH and DAI in the pool changes to where there is now _half_ as much ETH in the pool as before and _twice_ as much DAI. This would occur because more people were buying ETH, therefore taking it out of the pool, and replacing it with more DAI as the price went up.

If you initially deposited 1 ETH and 1,000 DAI in the pool, you may now only be able to redeem 0.5 ETH and 2,000 DAI.

The total combined value of the tokens you redeemed would be worth $4,000, which is more than what you put in initially. _However_, if you had just held onto your 1 ETH and 1,000 DAI and never put it in the pool, the combined value of those tokens would now be $5,000.

_In this example_, impermanent loss is the loss of $1,000 in additional profits that you would have made from not becoming an LP. Although you may have made some additional returns through LP fees, it may not have been enough compared to the $1,000 in lost potential profits.

## In Conclusion - Automated Market Makers

_AMMs_ are vital to the operation of decentralized exchanges like Uniswap, 1INCH, Sushiswap and others. They are an adaptation of the market maker role that is found in traditional finance.

What ultimately makes AMMs better than centralized market making firms is that they are:

- Open
- Transparent
- Accessible to anyone who wishes to participate in market making functions by becoming a liquidity provider
- Secured by decentralized protocols to ensure that billions of dollars a day in trades can be executed successfully _and_ at fair market prices
