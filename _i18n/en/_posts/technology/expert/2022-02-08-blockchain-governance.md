---
layout: post
type: article
title: "Blockchain Governance"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/blockchain-governance/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
further_reads: [zenip_process, a_cross_sectional_overview_of_cryptoasset_governance, who_controls_bitoin_core, zcash_placeholder_considerations, bitcoin_governance, zcash_and_the_founder_incentive_trilemma]
---

One of a blockchain protocol's most highly valued properties is its level of decentralization. There is usually intense scrutiny of the process for generating new blocks, but less focus on the process for changing a protocol's code. Governance is the keyword here.

While there is no deterministic way of assigning a "decentralization score" to a given project, some certainly seem to be goverened by a larger and more diverse group of people than others. Some may conclude that a large governing body means a more decentralized project.

There have been some attempts at quantifying decentralization. Metrics such as the [*minimum Nakamoto coefficient*](https://news.earn.com/quantifying-decentralization-e39db233c28e) based on the ideas of the [*Gini Coefficient*](https://en.wikipedia.org/wiki/Gini_coefficient) and [*Lorenz Curves*](https://en.wikipedia.org/wiki/Lorenz_curve) have been developed to measure decentralization objectively. The minimum Nakamoto coefficient is determined by assigning a decentralization score to the different subsystems of a blockchain (mining, clients, developers, exchanges, nodes and wallet distribution) and aggregating those scores into an overall score.

Lets define governance before we dive into the topic:

> *"Governance fundamentally consists of three questions: What should we do, who gets to decide, and how are the deciders chosen and held accountable?"* - [Sonya Mann, The new ZIP Process and Zcash Governance](https://www.zfnd.org/blog/new-zip-process/)

In order to address these question practically, they have to be approached in reverse order.

- First you need to determine how to choose the deciders,
- then choose them and
- lastly, have them make decisions.

This makes it sound rather straight forward, but in reality things are a little more complex. In this article, we want to give an overview of decision making mechanisms used in a decentralized environment and explain how Horizen thinks about governance.

## Choosing the Deciders

In a perfect world, every stakeholder has a say when it comes to how the deciders of a project are chosen. Ideally there would be some sort of "fair" vote - whatever "fair" means in this context.

Realistically there cannot always be a process to choose the deciders. Most projects in blockchain start with a few like-minded people with an idea of what their ideal cryptocurrency, dApp or blockchain platform should look like. Often times they find themselves already involved in a similar project. 

A project's founding team will then gravitate toward a development focal point. Most often this focal point is a GitHub repository or organization.

As people spend time contributing to a project, they will build a reputation - good or bad - and this reputation is usually how deciders emerge from the group. People that put in more time, more work, and have better ideas will naturally be recognized as the thought leaders. They will usually take on leading roles in the development process, become repository maintainers or admins.

Once a public open-source project gains momentum and people outside the initial group join, some of them will consequently get involved in the decision making. By supporting a given project, an individual is signalling support for the direction of the project and the project's approach to governance.

Some projects have a process in place for deciding who does and does not participate in decision making. When a form of delegated governance is used, a fixed number of validators or block producers is chosen. These entities take care of maintaining the blockchain, and have influence on decisions around the code, especially its consensus critical parts.

## Decisions in the Early Stages

In the early stages of open-source projects, people with the best reputation and largest social capital will get to make decisions. The people with the necessary backing can, at their discretion, introduce governance processes. Improvement proposal processes are one example we will look at more closely later on.

In the project's early days, these decisions are usually not very critical as the network has not accrued much real-world value. This is not to say that decisions made at the early stages of a blockchain project cannot be mission critical, but they don't effect an existing user base.

But what does decide mean anyways? What types of decisions typically have to be made in a blockchain project? There is a wide range of decisions with varying degrees of consequnces. Some design decisions include:

- the programming language of the client
- the consensus mechanism
- block production parameters like block time, block size, etc...
- support for smart contracts and if so, using which programming language
- native support for off-chain scaling solutions like [sidechains]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) or state channels
- and much more

### Chosing a Consensus Mechanism

An important design decision is the choice of the [consensus mechanism]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-0-consensus-mechanisms %}), and in case of [Proof of Work]({{ site.baseurl }}{% post_url /technology/expert/2022-02-05-2-proof-of-work %}) blockchains, the mining algorithm. These types of decisions effect the economies of the project, as well as the ecosystem around the protocol. When mining is involved, existing miners with specialized hardware can be approached. Conversely, projects can try to avoid ASICs and choose an algorithm better suited for general purpose hardware.

Most blockchain projects are fundamentally based on Bitcoin's code, and Horizen is no exception. After code is forked, it is modified according to new design decisions. Extending the core client with usefull libraries or APIs will increase the attractiveness for developers and users. Decision on how to extend and enhance the initial release code will mostly be made upon by those with social capital.

If a project is built from scratch, there are additional decisions to be made. For example, the blockchain client or deamon's language will influence the type of developers the project will attract.

The above decisions mostly effect new projects, but what about projects with an ecosystem and a history of performance? Discussing all types of decisions would blow the scope of this article, but one decision has challenged the decision makers of all projects: how do we scale?

### Deciding How to Scale

The best examples of this decision type are most likely the [block size limit controversy](https://en.bitcoin.it/wiki/Block_size_limit_controversy) in Bitcoin from 2015-2017 as well as the scalibility discussions in and around [Eth2.0](https://github.com/ethereum/eth2.0-specs).

As we said earlier, it is hard to create a "decentralization score" for a public blockchain, but can we come up with a desirable level of decentralization necessary for any public network? This is a tough question and the short answer is no. Depending on the use case, different levels of decentralization are required. For a network mainly providing verifiable scarcity of in-game artifacts, decentralization is arguably less important than a protocol providing a global *store of value*.

The robustness of a system is proportional to its points of control. A single point of control leads to a single point of failure and low robustness, whereas many distributed points of low influence lead to more robust systems. On the other hand, fewer points of control lead to faster decision making and greater adaptability to external stimuli. As I said above: the use-case will determine which properties are more desirable.

## Different Governance Models

Below we will look at three different categories of governance systems that range from company-like structures in the delegated governance model to the democracy inspired approach of a Decentralized Autonomous Organization (DAO).

### Delegated Governance

In a delegated governance model, users vote on a fixed number of delegates. To give you an idea, large projects using a delegated governance approach have between 21 and 50 delegates. On paper, delegated governance looks similar to representative democracies where the user casts a vote for their representatives, which in turn makes decisions on their behalf. They differ in that blockchain delegates do no have fixed terms, and the processes for chosing the delegates are not legally binding.

Effectively, projects using delegated governance models often resemble corporate structures more than they resemble community driven open-source projects. The relatively small number of delegates enables efficient collaboration, but also had drawbacks of centralization. Most delegated governance systems prefer performance over robustness. 

In the end, users vote with their time and attention on projects they find valuable. 

### Decentralized Governance

Before we talk about decentralized governance, we should take a stab at defining criteria for what decentralization means. As mentioned above, this won't yield a deterministic "decentralization score" but rather a common language and a framework we can use to discuss decentralization.

> *"Schneider[2013], responding to conceptual confusion in academia over political decentralization, finds that decentralization is political, administrative, and fiscal. Within the Bitcoin network, decisionmaking structures (chiefly orchestrated by Core developers) can be understood as political, nodes enforcing rulesets can be understood as administrators, and fiscal power is wielded by miners."* - Nic Carter, [A Cross-Sectional Overview of Cryptoasset Governance and Implications for Investors](https://coinmetrics.io/papers/dissertation.pdf)

This very interesting view was taken from Nic Carters dissertation on blockchain governance. It confirms our view, that decentralization can be assessed on different levels of a project structure.

Bitcoin is the prime example for decentralized governance because its ecosystem grew organically, it had the most time to evolve, and had minimal attention at launch. The Schelling point for Bitcoin development is the [Bitcoin Core GitHub repository](https://github.com/bitcoin/bitcoin). If we adhere to the classification suggested by Schneider, this makes the GitHub repositories of a blockchain project the *political* focal point.

Repository maintainers have to sign every contribution with their PGP keys. Only contributions signed by one of the trusted maintainers can be merged into the main code base. This prevents people with extended access to the repository, such as GitHub employees, to insert malicious code without being noticed.

> "Rather than base the integrity of the code off of GitHub accounts, Bitcoin Core has a continuous integration system that performs checks of trusted PGP keys that must sign every merge commit." - Jameson Lopp, [Who Controls Bitcoin Core](https://blog.lopp.net/who-controls-bitcoin-core-/)

While this process does not make the security system unfailable - PGP keys can be stolen - security is certainly enhanced.
Another principle used to increase the security of the "political process" is the *principle of least priviledge*, an important concept in computer security. It describes the practice of limiting each users acccess rights to the very minimum that is required for them to do their work.

Bitcoin does not have a *formal specification* because nobody has the authority to define what the system should do. Formal specifications are used to describe a system, to analyze its behavior, and to aid in its design by verifying key properties of interest. If one had to find the closest thing to a formal specification for Bitcoin, it would be the code of the Bitcoin Core repository.

#### Voting in Bitcoin

There are two types of voting mechanisms that have been used in the Bitcoin ecosystem thus far. The first and by now deprecated mechanisms used the *version* field in Bitcoin block headers, introduced with [BIP-0034](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki). It was used three times to upgrade the system from version 1 to version 4.

The function behind it is called *IsSuperMajority()* or *ISM* for short. Miners used the version data field to signal readiness for backward compatible code changes (soft forks). Once 950 out of the most recent 1000 blocks signaled acceptance for proposed changes by incrementing the version number the changes were activated. Going forward all blocks having a lower version number would be orphaned.

An updated process was implemented using *version bits*, described in [BIP-0009](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki). Version bits extends the idea of the version data field. The data field in the version bit system is interpreted as a bit vector instead of a simple integer. Each bit in it's bitwise representation signals the accepance of a soft fork, or lack thereoff. This allows up to 29 soft forks to be proposed concurrently.

If we were to apply Schneiders logic to this process, this would mean that "political" suggestions from developers are decided upon by the "fiscal power" of miners. Once a decision is made, the nodes on the network enforce the new rules in their role as the "administrators". Ascribing miners the role of wielding the "fiscal power" feels like an inaccurate comparison in this specific context.

Generally speaking, it can be very hard to apply terminology from existing governance processes to blockchain projects. They operate very differently from most systems we know, and hence it is necessary to come up with new processes to govern these systems and new terminology to describe the governance processes.

An innovative and to some extend experimental governance approach enabled through the birth of blockchain technology is the Decentralized Autonomous Organization (DAO).

### DAO - Decentralized Autonomous Organization

The Decentralized Autonomous Organization (DAO) is an entity governed by rules written in code. It acts predictable according to a predefined "constitution" and is controlled by its shareholders. Shareholders have the power to change the rules of the DAO, but only if making changes to them was foreseen and enabled at the DAO's inception. Rules might just as well be hardcoded, without the option to adapt them later on.

Interactions with a DAO are tracked with timestamps and [digital signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) recorded on-chain. The general concept was introduced as a *decentralized autonomous corporation* (DAC) in [an article](https://letstalkbitcoin.com/is-bitcoin-overpaying-for-false-security) by Dan Larimer in 2013. Vitalik Buterin went one step further and proposed that human management could be made obsolete if the smart contracts governing the DAO were written in a turing complete language.

Building a DAO is no simple endeavour. The code governing a DAO is public and anyone interested can review the code. This also means anyone can analyze the code to find potential vulnerabilities. Fixing the code after the fact is difficult, as any decision related to rule changes is subject to building consensus around it first.

The most notable attempt at creating a decentralized autonomous organization was [*The DAO*](https://en.wikipedia.org/wiki/The_DAO_(organization)) on the Ethereum blockchain. It was launched with US$150 million of assets under control in 2016 as a venture capital fund and immediately got hacked. About $50 M USD in cryptoassets were stolen by the hackers. The hack was reverted by reorganizing the Ethereum blockchain, which led to a chain split. The Ethereum Classic chain is the Ethereum chain where the hack was not reverted, while investors on the Ethereum chain were refunded their assets.

## Decision Making Processes

There are different processes the "decision makers" can follow to decide, and one of the most widely used processes is the Improvement Proposal. Proposal systems come in different flavors and vary to some degree, but the general idea remains the same.

### The Improvement Proposal Process

Improvement proposals processes are mainly a formalized way of suggesting changes and handling those suggestions from idea to activation. Many blockchain projects have developed their flavor of this process. Bitcoin's BIPs, Ethereum's EIPs, Zcash's ZIPs, and Horizen's ZenIPs are among them. Aragon, a platform specifically built to providing organizations with blockchain based governance tools calls their version *Aragon Governance Proposals* or AGPs.

Following the improvement proposal process is usually no requirement for suggesting changes to the project, but especially for contributors without an existing track record of valuable contributions, following the *X*IP process will increase the chances of the proposal being at least considered. We will explain the ZenIP process in more detail later.

## Making Decisions a Reality

Now, that we have covered our three initial questions of how deciders are chosen, who gets to decide, and what is done we need to look at how agreed upon changes can be implemented. The biggest consideration is if the changes can be implemented in a downward compatible upgrade, a *soft fork* or in a non-backward compatible upgrade, a *hard fork*.

### Soft Forks

Soft forks are backward compatible upgrades to a blockchain, think a WhatsApp update. Just because your friends run the latest version you can run an older one and still be able to chat with them. A soft fork can be triggered either by the users or nodes - a *user activated soft fork* (UASF), or it can be triggered by miners in a *miner activated soft fork* (MASF).

#### UASFs

The most notable example of a user activated soft fork was the activation of *Segregated Witness* (SegWit) on the Bitcoin blockchain. SegWit fixes [*transaction malleability*](https://en.bitcoin.it/wiki/Transaction_malleability) and increases the block capacity. It had long been discussed with a non-significant amount of opposition, especially from miners, before a contributor eventually forked the Bitcoin Core client, built the *Bitcoin UASF* client and made it publicly available.

The new client gained traction and created pressure on miners to adopt the changes. After a certain date, the Bitcoin UASF client would have rejected blocks by miners that refused SegWit. Miners need to produce valid blocks in order to be compensated for their efforts and by not upgrading to SegWit they would have risked to have their blocks rejected by the majority of nodes.

This could have led to a contentious fork of the network. Miners considered the threat to the networks utility, and hence value, serious enough to follow the majority of nodes and activate SegWit eventually. An important learning at that time was that the miners influence on the network can be overruled by its users when there is strong consensus among them.

#### MASFs

In a miner activated soft fork the block producers signal their readiness for an update by including some metadata in the block headers. [BIP-0034](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki) introduced this concept on the Bitcoin blockchain. The initial mechanism for MASFs had miners increment a blocks *version* number to support a soft fork. Once 95% of the most recent 1000 blocks would signal the readiness to upgrade, all blocks with the previous version number would be rejected.

This initial mechanism was updated to use [*version bits*](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki) instead of the version number. By interpreting the individual bits of the *nVersion* data field in the block header as a bit vector, a single block header can signal acceptance or rejection for up to 29 forks at once. When a sufficiently large share of hash power has signalled readiness for a fork, full nodes will enforce those rule changes acccordingly.

### Hard Forks

A hard fork is a downward incompatible upgrade to a blockchain, think a new Playstation. With your old console you won't be able to play the new games developed for Playstation 4.

The two most notable hardforks in the blockchain space have been the Ethereum and Ethereum Classic hardfork that reverted the DAO hack and the Bitcoin and Bitcoin Cash hardfork. Bcash increased the maximum block size in an attempt to make the network more scalable. The original Bitcoin client won't recognize these larger blocks as valid, hence it is backward incompatible. In case of the Ethereum hardfork the two versions didn't share a common transaction history, hence the incompatibility.

## Horizen Governance

Now, that we have established an understanding of the most important concepts around blockchain governance let us take a look at the governance within the Horizen ecosystem.

### The ZenIP Process

From the very beginning it has been a stated goal of Horizen to build a decentralized platform, where not just the infrastructure is distributed, but also the funding and decision making.

Introducing the [ZenIP process](https://github.com/ZencashOfficial/ZenIPs/blob/master/zenip-42000.md) was an important step towards a decentralized decision making process. Similar processes have proven to work well for decentralized projects, hence it was considered the best way to distribute influence and power towards the broader community.

ZenIPs are meant to standardize the process of suggesting major changes to the Horizen code base and ecosystem as a whole. A ZenIP in and of itself is a document that describes a new feature. It explains the rationale behind the proposed idea and elaborates on why certain design decisions were made. Each ZenIP starts with an *Owner* proposing a new idea in the form of a ZenIP. After investigating if the idea is original and if it has chances of being accepted the idea is put in the form of a ZenIP.

The document needs to contain an abstract, a section about the motivation for the proposed change, a specification as well as a reference implementation. The draft is publicized by creating a pull request against the [ZenIP GitHub repository](https://github.com/ZencashOfficial/ZenIPs).

![The ZenIP Workflow](/assets/post_files/technology/expert/2.7-governance/zenip_workflow.jpg)

*Editors* act as the repository maintainers and there are currently three of them, one representing the Zen Blockchain Foundation, another one representing the *Horizen Community Council* and one for *Horizen Labs*.

They merge the pull requests in draft status when they deem the document complete. Once there is rough consensus on the ZenIP in question and the document is completed the status can be changed from *Draft* to *Proposed* by a supermajority of editors.

Next, the status of code-related ZenIPs is changed from *Proposed* to *Implemented* once the Owner provides a reference implementation of the proposal. A ZenIP becomes *Final* when it is activated on Horizen's mainnet.

A Process or Informational ZenIP may change status from Proposed to Active when it achieves rough consensus on the forum or the pull request. Such a proposal is said to have rough consensus if it has been open to discussion for at least one month, and no person maintains any unaddressed substantiated objections to it.

We invite you to check out the [ZenIP repository](https://github.com/ZencashOfficial/ZenIPs), get involved in the discussions around it and propose your ideas to the Horizen community.

### The Horizen Treasury DAO

Horizen is dedicated to building a DAO as one of the first [sidechain]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) applications. It will enable decentralized, community based governance, especially with regards to resource allocation. Part of the Horizen block subsidy goes to the Zen Blockchain Foundation treasury (at the time of writing 20%), from where it gets distributed to fund the development of the protocol, the sidechain implementation, marketing as well as business development.

The basic model of the treasury system is described in [a paper][https://www.lancaster.ac.uk/staff/zhangb2/treasury.pdf] written by our research and development partner, Input Output Hong Kong (IOHK) in collaboration with the Lancaster University. A detailed summary of the IOHK paper can be found [here](https://medium.com/coinmonks/about-a-treasury-system-for-cryptocurrencies-ecd9913fe0cc).

The idea of the Horizen DAO is to have stakeholders in the Horizen ecosystem vote on what the treasury funds at the Zen Blockchain Foundations disposal are spent on. Anyone in the community can submit a proposal for consideration. Stakeholders can review the proposals and vote on where funding should be placed.

There are many types of voting mechanisms and electoral systems in general to choose from when building such a system. The Horizen DAO will use a form of *liquid democracy* as the mechanism for voting. A thorough discussion of voting schemes would blow the scope of this article. Still, we would like to outline the core idea behind liquid democracy.

#### Liquid Democracy

The two existing forms of democracy we know from traditional governance processes are *representative democracy* and *direct democracy*. The first forms of democracy were direct democracies. They offered their participants fairness, accountability, and control, but they don’t scale well with an increasing number of participants.

Most democracies evolved into representative democracies over time for this reason. While they allow a large number of voters to participate in the decision-making process there are issues with regards to the transparency of representatives’ votes and decisions, the accountability of representatives, and high barriers to entry for participants wanting to get involved in the decision-making process.

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Liquid democracy can be understood as a dynamic hybrid of the two established branches of democracy, direct and representative. It combines many of the upsides of each while doing away with most of their weaknesses. With liquid democracy, you have the option of delegating your vote to an "expert" that represents your views without your delegation being tied to election terms.

A key differentiator of liquid democracy is that you can delegate your vote to whomever you like and withdraw your delegation at any time - making the whole process *liquid*. This reduces the barrier to entry for people willing to get involved in the governance process and keeps delegates accountable because they can lose delegations at any time. Alternatively, you can decide to vote on any given issue yourself without involving a representative.

As we said earlier, DAOs are still experimental at this point. There are many unknowns around a DAOs legal status and how to best set it up, as there is little to no precedent of a DAO working for a sustained period of time. Nonetheless the concept is highly interesting and promises big advancement in terms of [social scalability](https://hackernoon.com/social-scalability-the-most-important-idea-in-cryptocurrency-73d60e08b85a) if implemented correctly. Thus, we consider it an effort worth making to build a DAO to govern the Horizen treasury.

## Summary

Open source protocol governance is something that’s constantly iterated and improved upon. The blockchain space is relatively young, and compared to  traditional governance processes so is open source software in general. The large number of different blockchain projects represent a huge real-world sandbox. Many differents attempts at creating fair governance are being tried in parallel at this stage, and only experimentation and constant iteration will improve governance by making it more transparent, efficient and fair.

> "In fact, the search of a perfect organizational structure for cryptocurrency governance, may not be that different from the search for the best ways for governing human societies." - Ken Alabs

The quote above might be the ultimate truth when it comes to governance. Arguably, a governance process will never be perfect. Some stakeholders will always see room for improvement even when others are completely in line with the current process. It is difficult to determine what perfect means on paper, let alone implementing such a system.

Projects with different goals will also require different approaches to governance. While a global store of value such as Bitcoin needs a conservative approach to governance, new projects working on cutting edge technological advances need faster decision making in order to realize their goals.

Governance needs to be project specific, accounting for the goals and the existing community. Time will tell what the "best" approaches to governance in the open source arena are.
