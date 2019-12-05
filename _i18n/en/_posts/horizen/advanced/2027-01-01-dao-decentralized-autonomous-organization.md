---
layout: post
type: article
title: "DAO - Decentralized  Autonomous Organization"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. Over time our foundation will become a Decentralized Autonomous Organization (DAO). We discuss this technology at an advanced level in this article."
permalink: /horizen/advanced/dao-decentralized-autonomous-organization/
topic: horizen
level: advanced
---

Horizen has the long-term goal of moving its organizational structure towards a DAO. A DAO, or Decentralized Autonomous Organization, is software that acts as an organization with a number of predefined rules and procedures.


The rules and procedures that govern the organization are written in code when the DAO is created. The main goal of our DAO is to decentralize the decision making regarding how we spend the funds of our non-profit organization. All community members will be able to submit proposals to receive funding. For example, this could be for developing a new feature for a wallet or covering the cost of attending a conference.

![DAO](/assets/post_files/horizen/advanced/dao/DAO.jpg)

For this decentralized decision making, there needs to be a voting system in place. This voting system needs to be reliable, and we decided to implement it on a dedicated sidechain which will run in parallel with our main blockchain. We will talk more about sidechains in a [dedicated article]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-03-sidechains %}).

For an effective voting system, one should leverage the expertise of individual experts without disenfranchising the "regular" user. If you are a developer, that expertise will make you more likely to cast a vote for a programming proposal, because you have a better understanding of that environment. At the same time, you may not be very experienced in  the marketing arena, and feel that other people should make decisions regarding which conferences to attend and events to support. A marketing expert will want to decide which conferences to attend, but might not have a strong opinion about what code-based projects to implement.

Liquid democracy is a concept that promises to solve this problem in a fair and efficient way.

### Liquid Democracy

The two most common forms of democracy are representative democracy and direct democracy. The first forms of democracy were direct democracies. They offered their participants fairness, accountability, and control, but they didn't scale well with an increasing number of participants. With a growing number of issues arising, voting on every single one becomes unfeasible for most participants. Most democracies evolved into representative democracies over time for this reason. While they allow a large number of voters to participate in the decision-making process, there are issues in regards to the transparency of representatives' votes and decisions, the accountability of representatives, and high barriers to entry for participants wanting to get involved in the decision-making process.

Liquid Democracy is a dynamic hybrid of the two established branches of democracy, direct and representative. Liquid democracy combines many of the upsides of each while doing away with most of their weaknesses. With liquid democracy, you have the option of delegating your vote to an expert who represents your views. Alternatively, you can decide to vote on any given issue yourself. This means you can freely choose your level of involvement and there is a low barrier to entry if you wish to function as a delegate.

In liquid democracy, there are no election terms. You can delegate your vote to an expert or withdraw it at any time. This holds experts accountable.

![liquid_democracy](/assets/post_files/horizen/advanced/dao/liquid_democracy.jpg)

### Entities

The different entities in our treasury system are the following:

 - _Project Owners_ - The people who have submitted a proposal to be funded. Anybody can submit a proposal but has to pay a little fee in order to reduce the likelihood of spam.
 - _Voting committees_ - Stakeholders that are willing to help with the voting process. They help with the voting process, e.g. during the tally phase, where votes are counted.
 - _Voters_ - Each voter locks a certain amount of their stake to participate. Their vote is weighted according to their locked-up stake.
 - _Experts_ - An expert is a special type of voter who has expertise in some field. Anybody can register as an expert. More on that when we get to how to register as one of the entities.

To register as one of the entities mentioned above, a user will need to submit a special type of transaction that includes all the necessary information, such as the amount of locked up stake and the address to send the rewards for voting.

### Rewards

Each of the voters, experts, and committee members receives a reward for participating in the governance of the protocol. There is a phenomenon called _rational ignorance. Rational ignorance is refraining from acquiring knowledge when the cost of educating oneself on an issue exceeds the potential benefit that the knowledge would provide._

We aim to reduce rational ignorance by providing incentive to encourage voters to participate in the decision-making process. It is a problem in today's democracies all over the world. The time and effort it takes to acquire all the information needed to make the best possible decision in an election exceeds the benefit of being able to cast a single vote. This issue results in voter apathy. To tackle the issue of voter apathy, people who participate in the governance process receive rewards for their efforts. This creates an incentive to become informed and partake in the process. Voters will get rewarded proportionally to their stake, and experts will receive a proportional reward to the number of delegations they have, or in other words, the degree of trust placed in them and their decision-making abilities.

### Summary

In the first step towards becoming a DAO, we want to decentralize the decision making about our treasury funds. Users will be able to submit proposals, and the community will vote on which proposals should receive funding. The infrastructure for the voting process and the distribution of funds will be built on a sidechain. The voting mechanism we are implementing is a liquid democracy-based system, where a voter can choose to vote on issues directly, or they can delegate their vote to an expert. To combat voter apathy, we plan to incentivize participation in the decision-making process with financial rewards.

For a detailed explanation of our planned treasury system, please refer to this article at the [expert level]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-01-dao-decentralized-autonomous-organization %}).
