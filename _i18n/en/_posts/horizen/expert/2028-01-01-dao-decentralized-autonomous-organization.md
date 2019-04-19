---
layout: post
type: article
title: "DAO - Decentralized  Autonomous Organization"
description: "Over time our foundation will become a DAO - a Decentralized Autonomous Organization. Find out what this means here."
permalink: /horizen/expert/dao-decentralized-autonomous-organization/
topic: horizen
level: expert
---

IOHK’s Roman Oliynykov published a paper in cooperation with Bingsheng Zhang and Hamed Balogun from Lancaster University describing a treasury system that could be deployed on various cryptocurrencies regardless of the consensus mechanism used. A prototype has been implemented in Scala over the Scorex 2.0 framework. You can find a detailed presentation here. Rob Viglione explained the implications in a short video on Twitter. Horizen is working towards implementing the proposed treasury system to decide upon and distribute our treasury funds in a decentralized fashion.

We summarize the paper and provide some context in this article.

![DAO](/assets/post_files/horizen/expert/dao/DAO_D.jpg)
![DAO](/assets/post_files/horizen/expert/dao/DAO_M.jpg)

### Introduction

Building a cryptocurrency requires many things. It requires:

 - Developers willing to commit their time to the project.
 - Some marketing. Not only to make your coin attractive to potential users but also to attract developers willing to commit their time to the project.
 - A legal team - Since regulators are watching the crypto space more closely. The legal team will make sure all endeavors are compliant with the existing regulation and will be compliant with future regulations.

Many things could be added to this list but most of them have one thing in common: They require some sort of funding.

This funding should be sustainable long term. There are three main sources of funding identified in the paper, namely:

 - Patron organizations and donations
 - An ICO
 - Hair-cut/tax/founders reward (part of the miners reward)

Other people included transaction fees in this list before, but the total amount of TX fees outside the major projects like Bitcoin and Ethereum is not nearly sufficient for continuous development.

Donations are not a reliable long term solution. An ICO does not provide sustainable funding over years and has become a legally challenging option. The third option identified to be the most promising means of funding. Mining rewards earned with Proof-of-Work cryptocurrencies offers a longer-term solution to funding issues. This solution can resolve the difficulty of finding new sources of funding. The funding issue will turn into a problem that generations to come have to deal with until the end of issuance (with currencies that adopted the Bitcoin issuance schedule roughly till 2140).

### Decentralization is Key

Decentralization does not just avoid single points of failure, it also helps to improve privacy. A powerful central party will always be able to gather more information on a given user than a peer in a truly distributed system would. Another area, besides the network architecture, that should be as decentralized as possible is the funding of development and maintenance and the decision making regarding what the funds at hand are used for. This is where the treasury model enters the scene. The treasury system proposed does not really care where the funds are coming from. It ensures an inclusive and fair funding process for all participants.

### Voting System

> “The core component of a treasury system is a decision-making system that allows members of the community to collectively reach some conclusions/decisions.”

Every member of the community will be able to submit proposals to fund projects. The community will collaboratively come to a decision on which projects to fund. This could be anything from the development of a new feature for a wallet, a developer getting paid for his work, a community member traveling to a conference to raise awareness of the project or even sponsoring an event.

Two different categories of voting schemes are viable in this context: preferential or ranked voting and approval voting.

The preferential voting system allows voters to rank the given options. The highest ranked options will receive funding. Ranking can be very time consuming and difficult and require voters to compare apples to oranges when casting their vote. It’s hard to decide on which features, conferences, and events are the most important by itself. Comparing a feature to an event does not make it easier.

Approval voting with a Yes-No-Abstain scheme simplifies the decision making the process a lot and is the option the team around Bingsheng, Roman, and Hamed chose for the treasury system. A score for each proposal can easily be calculated from the difference in Yes and No votes at the end of the voting period. The highest scoring proposals will receive funding in turns until the treasury pool is depleted for the month.

If you are a developer, you will likely cast a vote for all proposals regarding new code. At the same time, you might not be very experienced when it comes to marketing and feel that other people should make decisions regarding which conferences to attend and events to support. A marketing expert will want to decide on which conferences to attend but might not have a strong opinion about what code to implement… you get the idea. Now how do you leverage the expertise of certain individuals most effectively? The answer is liquid democracy.

### Liquid Democracy

The two existing forms of democracy are representative democracy (RD) and direct democracy (DD). The first forms of democracy were direct democracies. They offered their participants fairness, accountability, and control, but they don't scale well with an increasing number of participants. Most democracies evolved into representative democracies over time for this reason. While they allow a large number of voters to participate in the decision-making process there are issues in regards to the transparency of representatives' votes and decisions, the accountability of representatives, and high barriers to entry for participants wanting to get involved in the decision-making process.

Liquid Democracy (LD) can be understood as a dynamic hybrid of the two established branches of democracy, direct and representative. Liquid democracy combines many of the upsides of each while doing away with most of their weaknesses. With liquid democracy, you have the option of delegating your vote to an expert that represents your views. Alternatively, you can decide to vote on any given issue yourself.

A key difference is, that you can delegate your vote to whomever you like, be it your brother that is really knowledgable on a given topic or anybody else and you can withdraw your delegation at any given time - making the whole process liquid. This reduces the barrier to entry and keeps delegates accountable because they can lose delegations at any time.

![Liquid Democracy](/assets/post_files/horizen/expert/dao/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/horizen/expert/dao/liquid_democracy_M.jpg)

### The Different Entities

Getting closer to describing the voting process itself it is necessary to introduce the entities partaking.

 - _Project Owners {O}_ are the people that have submitted a proposal. Anybody can submit a proposal but must pay a little fee to avoid spam.
 - _Voting committees {C}_ are stakeholders that are willing to help with the voting process. They are responsible for generating a voting public key together and announcing the voting result once a voting epoch ends.
 - _Voters {V}_ lock an amount of their stake to participate. Their vote is weighted according to their locked up stake.
 - _Experts {E}_ are a special type of voters that have expertise in some field. Anybody can register as an expert.

Anybody can submit a proposal for funding and become a project owner. Anybody that owns a stake can register as a voter or an expert. Some of the voters will “randomly” get the option to become a voting committee member.

### Treasury System Epochs

There are three epochs in each treasury period. During the **pre-voting epoch** all the project owners have time to submit their encrypted proposals. All proposals will be decrypted at once when the proposing stage ends. This increases fairness and prevents tactical timing of proposal submissions. During the pre-voting epoch, the community members also have time to register as a voter or an expert by submitting a special kind of transaction.

![Treasury System Epochs](/assets/post_files/horizen/expert/dao/treasury_epochs_D.jpg)
![Treasury System Epochs](/assets/post_files/horizen/expert/dao/treasury_epochs_M.jpg)

During the **voting epoch** the voting committee is selected, a voting key is set up and the ballot is held. For the **committee selection** “…a set of voting committees will be randomly selected from the registered voters who are willing to be considered for the committee selection. The probability of being selected is proportional to their locked stake.”

The **key setup stage** is where a public voting key for the treasury epoch is generated (used as an address that all the casted votes are sent to). The votes are cast privately and only the end result will be public. It should be possible for a voter to express their opinion privately, that's why there are voting cabinets in “analog” polls. The protocol ensures that the end result does indeed represent the sum of all votes.

Voting in private is achieved by all voters and experts encrypting their vote with the public voting key. Only the voting committee members can decrypt the casted votes in the tally stage. “Once all the committees have opened the tally, any party can read the tally”.

The voters and experts cast their votes during the **ballot casting stage**. Each vote is represented as a vector. Since there are three possible votes — Yes, No, Abstain — there are three possible vectors that can be submitted.

![yes no abstain](/assets/post_files/horizen/expert/dao/yes_no_abstain_D.jpg)
![yes no abstain](/assets/post_files/horizen/expert/dao/yes_no_abstain_M.jpg)

The concept works like this: In the example below there are 4 votes, 2 voted Yes on the proposal, 1 No and 1 Abstain.

![votes](/assets/post_files/horizen/expert/dao/votes_D.jpg)
![votes](/assets/post_files/horizen/expert/dao/votes_M.jpg)

If you are familiar with the concept of vector addition it is easy to tell the sum of those four vectors. One of the Yes votes is canceled out by the No vote. The remaining Yes vote added together with the Abstain vote yields the diagonal vector shown below. For the tally, only the x-axis is considered. The final result of this proposal revealed in the **tally stage** would be a Yes.

![votes sum](/assets/post_files/horizen/expert/dao/votes_sum_D.jpg)
![votes sum](/assets/post_files/horizen/expert/dao/votes_sum_M.jpg)

More specifically, a score for each proposal will be calculated by taking the number of Yes votes minus the number of No votes. The resulting difference has to account for at least 10% of all the votes submitted to be considered for funding. If 100 votes are cast (without Abstain votes), there have to be at least 55 Yes votes to reach that threshold. The highest scoring proposals will be funded until the treasury is depleted for the month.

![score](/assets/post_files/horizen/expert/dao/score_D.jpg)
![score](/assets/post_files/horizen/expert/dao/score_M.jpg)

The **post-voting** epoch consists of the tally stage and execution stage. Note that each vector is submitted in an encrypted fashion and only in the **tally stage** the committee jointly reveals all the casted votes. The score for each proposal will be calculated and the proposals ranked according to their score.

During the **execution stage** the committee jointly signs off on the transactions funding the approved proposals.

### Rewards

The last feature we want to talk about is the reward the voters, experts, and committee members receive for participating in the governance of the protocol. There is a phenomenon called _rational ignorance. Rational ignorance is refraining from acquiring knowledge when the cost of educating oneself on an issue exceeds the potential benefit that the knowledge would provide._

We aim to reduce rational ignorance by incentivizing voters to participate in the decision making progress. It is a problem in today's democracies all over the world. The time and effort it takes to acquire all the information needed to make the best possible decision in an election exceeds the benefit of being able to cast a single vote. This issue results in voter apathy. To tackle the issue of voter apathy, people that participate in the governance process get rewarded for their efforts. This creates an incentive to be informed and partake in the process. Voters will get rewarded proportionally to their stake and experts will get rewarded proportionally to the number of delegations they have, or in other words the trust that was placed in them and their decision making.

### The Horizen Voting System Implementation Plan

We plan to integrate the treasury system on a sidechain. [Sidechains]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) are one of the major protocol upgrades that Horizen is working on. It will enable different dApps to each run on their own sidechain with decoupled security guarantees. Even if something goes wrong on a sidechain, the mainchain will stay unaffected.

The user interface and user experience of such a system are very important factors. The best treasury system does not help if it is hard to partake in. One challenge will be to come up with a structured and informative “governance-central”. We mean a go-to place, may it be a website or functionality embedded in a wallet, where the proposal-, voter-, expert-, and committee-registration is happening. The registration is formally a transaction, therefore it would be practical to have a function implemented in a wallet to make it easy for every stakeholder to participate in the governance.

Next, there needs to be a place where all the experts are listed, where their past decisions are visible and displayed in a comprehensive way. They should be able to create a profile and add a biography that you get to know who you are delegating your vote to. They will define their domain of expertise and the entirety of the provided information makes them accountable for future decisions. Don’t forget that you can revoke your delegation at any time if you do not agree with an expert any longer. This should be just as easy as delegating your vote to an expert in the first place.

### Summary

Our treasury system serves the purpose of distributing funds to different projects within Horizen and to legitimize the decision making process in a decentralized way. Every stakeholder will be able to submit proposals. Users will be able to vote on the different proposals either directly or by choosing a delegate to cast a vote on their behalf. This hybrid of direct and representative democracy is called liquid democracy. The voter registration, the voting process, and project funding will be built on a sidechain (a separate blockchain that is interoperable with our existing main blockchain). Users will be incentivized to partake in the governance process and a user-friendly user interface will be built to make participation easy and intuitive.
