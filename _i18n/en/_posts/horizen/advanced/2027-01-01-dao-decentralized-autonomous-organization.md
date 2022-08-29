---
layout: post
type: article
title: "DAO - Decentralized  Autonomous Organization"
description: "A DAO, or Decentralized Autonomous Organization, is software that acts as an organization with a number of predefined rules and procedures."
permalink: /horizen/advanced/dao-decentralized-autonomous-organization/
topic: horizen
level: advanced
---

**Horizen** has the long-term goal of moving its organizational structure towards a _DAO_. A **DAO**, or **Decentralized Autonomous Organization**, is software that acts as an organization with a number of predefined rules and procedures.

## Introducing DAOs

**The rules and procedures** that govern the organization are written in _code_ when the DAO is created by the founders. This code primarily lives on a _blockchain_ where it is not possible for an individual to tamper with the rules. No single party has the ability to change the DAO. A **DAO** can adapt to changes over time but requires a majority of the DAO members to approve the change.

The DAO _founders_ define the criteria for allowing a change in the _beginning_ and will code them into the organization. You could set it up so that in order to change rule **X**, you need a **majority** of more than **50%** of the members to support the change, while it takes a **supermajority**, more than **66%**. to change rule **Y**.

**Horizen** determines how to spend their budget on a monthly basis. The budget allows us to pay for _developing_ our protocol, _marketing_ efforts, and many other things. We plan to open the budget determinations to our community when we release the Horizen DAO. **The main goal of our DAO** is to decentralize the decision making regarding how we spend the funds of our non-profit organization. _Any member_ of the community can submit a proposal of what they would like to contribute to the DAO and how much funds would be needed for the proposal.

**The _community_ can review the proposal,** which can range from translating the website to another language, creating a video for marketing purposes, building an app on top of Horizen, developing a new feature for a wallet, or covering the cost of attending a conference. E*very month* there will be a voting period. The community can cast votes on whether a proposal should be funded or not within this period. After the tally phase, the approved proposals will automatically receive the allocated funds, and the community members that have submitted the proposal can begin working.

![DAO]({{site.baseurl_root}}/assets/post_files/horizen/advanced/dao/DAO.jpg)

_For this decentralized decision making_, there needs to be a voting system in place. This _voting system_ needs to be reliable, we decided to implement it on a dedicated **sidechain** which will run in parallel with our main blockchain.

**For an effective voting system**, one should leverage the expertise of individual **experts** without disenfranchising the **_regular_** user. If you are a _developer_, that expertise will make you more likely to cast a vote for a programming proposal, because you have a better understanding of that environment. At the same time, you may not be very experienced in the marketing arena, and feel that other people should make decisions regarding which conferences to attend and events to support. A _marketing_ expert will want to decide which conferences to attend, but might not have a strong opinion about what code-based projects to implement.

**IOHK’s** _Roman Oliynykov_ published a paper in cooperation with _Bingsheng Zhang_ and _Hamed Balogun_ from **Lancaster University** describing a treasury system that could be deployed on various cryptocurrencies _regardless_ of the consensus mechanism used. A prototype has been implemented in **Scala** over the **Scorex 2.0** framework. **Horizen** is working towards implementing the proposed treasury system to decide upon and distribute our treasury funds in a decentralized fashion.

## Exploring the Future Horizen Treasury System

**Building a cryptocurrency requires many things. It requires:**

- **Developers** willing to commit their time to the project.
- **Marketing**. Not only to make your coin attractive to potential users but also to attract developers willing to commit their time to the project.
- A **legal team** - Since regulators are watching the crypto space more closely. The legal team will make sure all endeavors are compliant with the existing regulation and will be compliant with future regulations.

Many things could be added to this list but most of them have one thing in common: They require some sort of funding.

This funding should be sustainable long term. **There are three main sources of funding identified in the paper, namely:**

- **Patron** organizations and donations
- An **ICO**
- Hair-cut/tax/founders **reward** (part of the miners reward)

Other people included transaction fees in this list before, but the total amount of **TX** fees outside the major projects like **Bitcoin** and **Ethereum** is not nearly sufficient for continuous development.
Donations are not a reliable long term solution. An ICO does not provide sustainable funding over years and has become a legally challenging option. The third option has been identified to be the most promising means of funding.

**Mining rewards** earned with Proof-of-Work cryptocurrencies offers a longer-term solution to funding issues. This solution can resolve the difficulty of finding new sources of funding. The funding issue will turn into a problem that generations to come have to deal with until the end of issuance. With currencies that adopted the Bitcoin issuance schedule, roughly till 2140.

### Decentralization is Key

**Decentralization** does not just avoid single points of failure, it also helps to improve _privacy_. A powerful central party will always be able to gather more information on a given user than a peer in a truly distributed system would. Another area, besides the network architecture, that should be as decentralized as possible is the _funding_ of development and maintenance and the decision making regarding what the funds at hand are used for. _This is where the treasury model enters the scene._ The treasury system proposed does not really care where the funds are coming from. **It ensures an inclusive and fair funding process for all participants.**

### Voting System

> _“The core component of a treasury system is a decision-making system that allows members of the community to collectively reach some conclusions/decisions.”_

**Every member of the community will be able to submit proposals to fund projects.** The community will collaboratively come to a decision on which projects to fund. This could be anything from the development of a new feature for a wallet, a developer getting paid for his work, a community member traveling to a conference to raise awareness of the project or even sponsoring an event.

**Two different categories of voting schemes are viable in this context:** _preferential_ or _ranked voting_ and _approval voting_.

The **preferential voting system** allows voters to rank the given options. The highest ranked options will receive funding. Ranking can be very time consuming and difficult and require voters to compare apples to oranges when casting their vote. It’s hard to decide on which features, conferences, and events are the most important by itself. Comparing a feature to an event does not make it easier.

**Approval voting** with a _Yes-No-Abstain_ scheme simplifies the decision making process a lot, and is the option the team around **Bingsheng**, **Roman**, and **Hamed** chose for the treasury system. A score for each proposal can easily be calculated from the difference in **Yes** and **No** votes at the end of the voting period. The highest scoring proposals will receive funding in turns until the treasury pool is depleted for the month.

As previously stated, If you are a **developer**, you will likely cast a vote for all proposals regarding new code. You might not be very knowledgeable when it comes to marketing and feel that others should make decisions regarding which events to support and attend. A **marketing** expert make the call on which events to attend, but may not have an opinion about what code to implement. Now how do you leverage the expertise of certain individuals most effectively? **The answer is liquid democracy.**

### Liquid Democracy

The two existing forms of democracy are **representative democracy** (_RD_) and **direct democracy** (_DD_). The first forms of democracy were _direct democracies_. They offered their participants _fairness_, _accountability_, and _control_, but they don’t _scale_ well with an increasing number of participants.

Most democracies evolved into _representative democracies_ over time for this reason. While they allow a large number of voters to participate in the decision-making process, there are issues in regards to the _transparency_ of representatives’ votes and decisions, the _accountability_ of representatives, and _high barriers to entry_ for participants wanting to get involved in the decision-making process.

**Liquid Democracy** (_LD_) is a dynamic hybrid of the two established branches of democracy, _direct_ and _representative_. Liquid democracy combines many of the upsides of each while doing away with most of their weaknesses. **With liquid democracy**, you have the option of delegating your vote to an expert that represents your views. _Alternatively_, you can decide to vote on any given issue yourself. This means you can freely choose your level of involvement and there is a low barrier to entry if you wish to function as a _delegate_.

**As a delegate**, you can entrust your vote to whomever you like, and you can withdraw your delegation at any given time - making the whole process liquid. This reduces the barrier to entry and keeps delegates accountable because they can lose delegations at any time. This holds experts accountable. **In liquid democracy,** there are no election terms

![liquid_democracy]({{site.baseurl_root}}/assets/post_files/horizen/advanced/dao/liquid_democracy.jpg)

### The Different Entities

Getting closer to describing the voting process itself, it is necessary to introduce the **entities** partaking.

- **Project Owners** (_O_) - The _people_ that have submitted a proposal. Anybody can submit a proposal but must pay a little fee to avoid spam.
- **Voting committees** (_C_) - _Stakeholders_ that are willing to help with the voting process. They are responsible for generating a voting public key together and announcing the voting result once a voting epoch ends.
- **Voters** (V) - Each _voter_ locks a certain amount of their stake to participate. Their vote is weighted according to their locked up stake.
- **Experts** (E) - An **expert** is a special type of voter who has expertise in some field. Anybody can register as an expert.

To _register_ as one of the entities mentioned above, a user will need to submit a special type of transaction that includes all the necessary information, such as the _amount_ of locked up stake and the _address_ to send the rewards for voting.

**Anybody can submit a proposal for funding and become a project owner.** Anybody that owns a stake can register as a voter or an expert. Some of the voters will randomly get the option to become a voting committee member.

### Treasury System Epochs

_There are **three epochs** in each treasury period._ During the **pre-voting** epoch all the project owners have time to submit their encrypted proposals. All proposals will be decrypted at once when the proposing stage ends. This increases fairness and prevents tactical timing of proposal submissions. _During the pre-voting epoch_, the community members also have time to register as a voter or an expert by submitting a special kind of transaction.

![Treasury System Epochs]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/treasury_epochs_D.jpg)
![Treasury System Epochs]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/treasury_epochs_M.jpg)

During the **voting epoch**, the voting committee is selected, a voting key is set up, and the ballot is held. For the committee selection, a set of voting committees will be randomly selected from the registered voters who are willing to be considered for the committee selection. The probability of being selected is proportional to their locked stake.

The key setup stage is where a _public voting key_ for the treasury epoch is generated and used as an address that all the casted votes are sent to. The votes are cast _privately_ and only the end result will be _public_. It should be possible for a voter to express their opinion privately, that’s why there are voting cabinets in analog polls. The protocol ensures that the end result does indeed represent the sum of all votes.

**Voting in private** is achieved by all voters and experts encrypting their vote with the public voting key. Only the voting committee members can decrypt the casted votes in the tally stage. _“Once all the committees have opened the tally, any party can read the tally”._

The _voters_ and _experts_ cast their votes during the ballot casting stage. Each vote is represented as a **vector**. Since there are three possible votes — *Yes, No, Abstain* — there are three possible vectors that can be submitted.

![yes no abstain]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/yes_no_abstain_D.jpg)
![yes no abstain]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/yes_no_abstain_M.jpg)

**The concept works like this:** In the example _below_ there are **4** votes, **2** voted Yes on the proposal, 1 No and **1** Abstain.

![votes]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/votes_D.jpg)
![votes]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/votes_M.jpg)

If you are familiar with the concept of vector addition, it is easy to tell the sum of those four vectors. **One** of the _Yes_ votes is canceled out by the **No** vote. The _remaining_ **Yes** vote added together with the **Abstain** vote yields the diagonal vector shown below. For the tally, only the **x-axis** is considered. The final result of this proposal revealed in the **tally stage** would be a _Yes_.

![votes sum]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/votes_sum_D.jpg)
![votes sum]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/votes_sum_M.jpg)

More specifically, a _score_ for each proposal will be calculated by taking the number of **Yes** votes minus the number of **No** votes. The resulting difference has to account for at least **10%** of all the votes submitted to be considered for funding. If **100** votes are cast, not including **Abstain** votes, there have to be at least **55** **Yes** votes to reach that threshold. **The highest scoring proposals will be funded until the treasury is depleted for the month.**

![score]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/score_D.jpg)
![score]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/score_M.jpg)

The **post-voting** epoch consists of the _tally_ stage and _execution_ stage. Note that each vector is submitted in an encrypted fashion and only in the **tally stage** the committee jointly reveals all the casted votes. The score for each proposal will be calculated and the proposals ranked according to their score.

During the **execution stage** the committee jointly signs off on the transactions funding the approved proposals.

### Rewards

**The last feature** we want to talk about is the _reward_ the voters, experts, and committee members receive for participating in the governance of the protocol. There is a phenomenon called _rational ignorance_. **Rational ignorance** is refraining from acquiring knowledge when the cost of educating oneself on an issue exceeds the potential benefit that the knowledge would provide.

We aim to reduce rational ignorance by incentivizing voters to participate in the decision making progress. It is a problem in today’s democracies all over the world. **The time and effort it takes to acquire all the information needed to make the best possible decision in an election exceeds the benefit of being able to cast a single vote.** This issue results in voter apathy.

To tackle the issue of voter apathy, people that participate in the governance process get rewarded for their efforts. This creates an incentive to be informed and partake in the process. Voters will get rewarded proportionally to their stake and experts will get rewarded proportionally to the number of delegations they have, or in other words the trust that was placed in them and their decision making.

### The Horizen Voting System Implementation Plan

We plan to integrate the treasury system on a sidechain. [Sidechains](https://academy.horizen.io/horizen/advanced/sidechains/) are one of the major protocol upgrades that **Horizen** is working on. It will enable different dApps to each run on their own sidechain with decoupled security guarantees. _Even if something goes wrong on a sidechain,_ **the mainchain will stay unaffected.**

The user interface and user experience of such a system are very important factors. The best treasury system does not help if it is hard to partake in. **One challenge** will be to come up with a structured and informative governance-central. We mean a go-to place, may it be a website or functionality embedded in a wallet, where the _proposal_, _voter_, _expert_, and _committee-registration_ is happening. The registration is formally a transaction, therefore it would be practical to have a function implemented in a wallet to make it easy for every stakeholder to participate in the governance.

**Next**, there needs to be a place where all the experts are listed, where their past decisions are visible and displayed in a comprehensive way. They should be able to create a profile and add a biography that you get to know who you are delegating your vote to. They will define their domain of expertise and the entirety of the provided information makes them accountable for future decisions. **Don’t forget** that you can revoke your delegation at any time if you do not agree with an expert any longer. This should be just as easy as delegating your vote to an expert in the first place.

## Summary

Our **treasury system** serves the purpose of distributing treasury funds to different projects within **Horizen** and to legitimize the decision making process in a decentralized way. **Every** stakeholder will be able to submit proposals. Users will be able to vote on the different proposals either directly or by choosing a delegate to cast a vote on their behalf. This hybrid of direct and representative democracy is called **liquid democracy.**

The _voter registration_, the _voting process_, and _project funding_ will be built on a sidechain, a separate blockchain that is interoperable with our existing main blockchain. To combat voter _apathy_, we plan to incentivize participation in the decision-making process with financial rewards. A user-friendly interface will be built to make participation easy and intuitive.
