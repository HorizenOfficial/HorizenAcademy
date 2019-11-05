---
layout: post
type: article
title: "Blockchain Governance"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/blockchain-governance/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

One of the most highly valued properties of public blockchain protocols are their level of decentralization. Usually there is a lot of focus on how decentralized the block generation process is but little on how code and other changes are decided upon. Governance is the keyword here. 
While there is no deterministic way of assigning a "decentralization score" to a given project, some projects certainly seem to be goverened by a larger and more diverse group of people than others and you might consider these more decentralized.

> *"Governance fundamentally consists of three questions: What should we do, who gets to decide, and how are the deciders chosen and held accountable?"* - Sonya Mann, [The new ZIP Process and Zcash Governance](https://www.zfnd.org/blog/new-zip-process/)

In order to address these question practically, they have to be approached in reverse order. First you need to determine how to choose the deciders, then choose them and lastly, have them make decisions. This makes it sound rather straight forward and in reality things are a little more complex.
In this article, we want to give an overview of what types of mechanisms there are to make the decisions mentioned above and explain how we at Horizen think about governance.

### Choosing the Deciders

In a perfect world every stake holder has a say when it comes to how the deciders of a project are chosen and ideally there would be some sort of "fair" vote on it - whatever fair means in this context.

Realistically, there cannot always be a process in place for how to choose the deciders. Most projects in the blockchain space start with a few like-minded people having an idea for what their ideal cryptocurrency, dApp or blockchain platform should look like. Often times they find each other in a project similar to what they want to build.

All of these projects started working on making their idea become a reality at some point. The group of people that has formed around an idea will than gravitate towards a focal point for the development of the project. Often times this is a GitHub repository or organization.

At the time people start putting actual work into the realization of the project idea, individuals will start to build a reputation - good or bad - and this is the organic way of how deciders emerge from the group. People that put in more time, more work and have better ideas will naturally be recognized as the thought leaders of the project. They will usually take on leading roles in the development process, becoming repository maintainers and administrators.

Once a public open-source project gains momentum and people outside the initial group start to become aware, some of them will consequently get involved. By supporting a given project an individual is (conciously or not) signalling her support for the direction of the project and the approach the project has taken on governace thus far.

Some projects have a process in place to determine for deciding who gets to have a say in governance decision. When delegated governance is used, a fixed number of validators or block producers is chosen. These entities not only take care of maintaining the blockchain, but also have influence on decisions around the code, especially its consensus critical parts.

### The Decision Makers

In the early stages of open-source projects those who emerged from the founding stage with the best reputation and largest social capital will get to make decisions. At this time those decisions are usually not very critical as the network has not accrued much real-world value, which is not to say that decision made at the early stages of a blockchain project cannot have far reaching consequences later on. The people with the necessary backing to make decisions on behalf of the project can, at their discretion, introduce governance processes. Improvement proposal processes are one example we will look at more closely later in this article.

But what does decide mean anyways? What types of decisions typically have to be made in a blockchain project?
There is a wide range of decision with varying degrees of consequnces. Some design decisions that are made in the very beginning determine parameters like the target block time, the block size and similar metrics.

An important design decision for a blockchain project is the choice of the [consensus mechanism](), and in case of [Proof of Work]() blockchains, the [mining algorithm](). These types of decisions effect the economies of the project, as well as the ecosystem around the protocol. When there is mining, existing miners with specialized hardware for a wide-spread mining algorithm can be targeted or the project can try to avoid ASICs being used and choose an algorithms better suited to be mined with general purpose hardware.

Most blockchain projects are fundamentally based on Bitcoins code and Horizen is no exception. After the code is forked it is modified according to the design decisions that were previously made. Extending the core client with usefull libraries or APIs will increase the attractiveness for developers and therefore in the long run also for users, as those usually benefit from more developer activity. How to extend and enhance the code of the initial release will mostly be decided upon by those with social capital in the community around the project.

If a project is build from scratch there are some additional decisions to be made. What language the blockchain client or deamon is written in influences what type of developers the project will attract.

The types of decisions above mostly effect new and emerging projects, but what about those that have been live for a while and that already have an ecosystem around them? Discussing all types of decisions would blow the scope of this article, but over the last couple of years one type of decision has proven to challenge the decision makers of all blockchain projects alike: how do we scale?

The best examples of this decision type are most likely the [block size limit controversy](https://en.bitcoin.it/wiki/Block_size_limit_controversy) in Bitcoin from 2015-2017 as well as the scalibility discussions in and around [Eth2.0](https://github.com/ethereum/eth2.0-specs).

As we said earlier it is hard to create a "decentralization score" for a public blockchain, but can we come up with a desirable level of decentralization that we deem necessary for any network?
This is a tough question and the short answer is probably no. Depending on the use case different levels of decentralization are required. For a network mainly providing verifiable scarcity of in-game artefacts decentralization is arguably less important than a protocol providing a global Store of Value (SoV).

The robustness of a system is proportional to its points of control. A single point of control leads to a single point of failure and low robustness, whereas many distributed points of low influence lead to more robust systems. On the other hand, less points of control lead to faster decision making and greater adaptability to external stimuli. As I said above: depending on the use-case either one of those properties can be more desirable and you cannot deem one better or worse than the other without considering the purpose of the project.

Below, we will look at three different categories of governance systems that range from company like structures in the delegated governance model to the democracy inspired approach of a DAO.

#### Delegated Governance

In a delegated governance the idea is to have users vote on a fixed number of block producers. To give you an idea, some of the larger projects around that use a delegated governance approach have between 21 and 50 delegates. On paper, delegated governance looks similar to representative democracies where the users cast votes for their representatives, which in turn make decisions on their behalf. They differ, in that the blockchain equivalent usually has no fixed terms and more importantly, non of the processes around chosing the delegates are legally binding.

Effectively, projects using delegated governance models often resemble corporate structures rather than community driven open-source projects. The small number of delegates allows for an efficient collaboration of delegates, if this is for the better or worse is up to anyone to decide. As we said earlier, good or bad are not the right categories here. Most delegated governance systems prefer performance over robustness and that is a legitimate choice. In the end users vote with their feet if these systems provide value to them or not.

#### Decentralized Governance

Before we talk about decentralized governance we should take a stab at defining criteria for what decentralization means. As mentioned above, this won't yield a deterministic "decentralization score" but rather a **common language and a framework we can use to discuss decentralization.**

> *"Schneider[2013], responding to conceptual confusion in academia over political decentralization, finds that decentralization is political, administrative, and fiscal. Within the Bitcoin network, decisionmaking structures (chiefly orchestrated by Core developers) can be understood as political, nodes enforcing rulesets can be understood as administrators, and fiscal power is wielded by miners."* - Nic Carter, [A Cross-Sectional Overview of Cryptoasset Governance and Implications for Investors](https://coinmetrics.io/papers/dissertation.pdf)

This very interesting view was taken from Nic Carters dissertation on blockchain governance. It confirms our thesis, that decentralization can be assessed on different levels of the project structure. 

Bitcoin is the prime example for decentralized governance as its ecosystem grew in the most organic way, had the most time to evolve and the least attention at launch. The Schelling point for Bitcoin development is the [Bitcoin Core GitHub repository](https://github.com/bitcoin/bitcoin). If we adhere to the classification suggested by Schneider, this makes the GitHub repositories of a blockchain project the *political* focal point.

Repository maintainers have to sign every merge commit with their PGP keys. Only merge commits signed by one of the trusted maintainer keys are able to be merged. This prevents people with extended access to the repository, such as GitHub employees, to insert malicious code without being noticed.

> "Rather than base the integrity of the code off of GitHub accounts, Bitcoin Core has a continuous integration system that performs checks of trusted PGP keys that must sign every merge commit." - Jameson Lopp, [Who Controls Bitcoin Core](https://blog.lopp.net/who-controls-bitcoin-core-/)

While this process does not make the security system unfailable - PGP keys can be stolen, the securtiy is certainly enhanced.
Another principle used to increase the security of the "political process" is the *principle of least priviledge*, an important concept in computer security. It describes the practice of limiting each users acccess rights to the very minimum that is required for them to do their work.

Bitcoin does not have a *formal specification* as nobody has the authority to define what the system should do. Formal specifications are used to describe a system, to analyze its behavior, and to aid in its design by verifying key properties of interest. If one had to find the closest thing to a formal specification for Bitcoin, it would be the code of the Bitcoin Core repository.

There are two types of voting mechanisms that have been used in the Bitcoin ecosystem thus far. The first and by now deprecated mechanisms used the *version* field in Bitcoin blocks, introduced with [BIP-0034](https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki). It was used three times to upgrade the system from version 1 to version 4. The function behind it is called *IsSuperMajority()* or *ISM* for short. Miners used the version data field to signal readiness for backward compatible code changes (soft forks). Once 950 out of the most recent 1000 blocks signaled acceptance for proposed changes by incrementing the version number the changes were activated. Going forward all blocks having a lower version number would be orphaned.

An updated process was implemented using *version bits*, described in [BIP-0009](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki). Version bits extends the idea of the version data field. The data field in the version bit system is interpreted as a bit vector instead of a simple integer. Each bit in it's bitwise representation signals the accepance (or lack thereof) of a soft fork. This allows up to 29 soft forks to be proposed concurrently.

If we were to apply Schneiders logic to this process, this would mean that "political" suggestions from developers are decided upon by the "fiscal power" of miners. Once a decision is made, the nodes on the network enforce the new rules in their role as the "administrators". Ascribing miners the role of wielding the "fiscal power" feels like an inaccurate comparison in this specific context. Generally speaking, it can be very hard to apply terminology from existing governance processes to blockchain projects. They operate very differently from most systems we know, and hence it might be necessary to come up with new processes to govern these systems and new terminology to describe the governance processes.

Next, we look at an innovative and experimental governance approach that is enabled by the birth of blockchain technology: the DAO.

#### DAO - Decentralized Autonomous Organization

The DAO or *decentralized autonomous organization* is an organization governed by rules written in code. It acts truly predictable according to a predefined "constitution" and is controlled by its shareholders. Shareholders have the power to change the rules of the DAO, but only if making changes to them was enabled at the DAO's inception. Rules might just as well be hardcoded, without the option to adapt them later on.

Interactions with a DAO are tracked with timestamps and [digital signatures]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}) recorded on-chain. The general concept was introduced as a *decentralized autonomous corporation* (DAC) in [an article](https://letstalkbitcoin.com/is-bitcoin-overpaying-for-false-security) by Dan Larimer in 2013. Vitalik Buterin went one step further and proposed that human management could be made obsolete if the smart contracts governing the DAO were written in a turing complete language.

Building a DAO is no simple endeavour. The code governing a DAO is public and anyone interested can review the code and find potential vulnerabilities. Fixing the code is difficult though, as any decision related to rule changes is subject to building consensus around it first.

The most notable attempt at creating a decentralized autonomous organization was [*The DAO*](https://en.wikipedia.org/wiki/The_DAO_(organization)) on the Ethereum blockchain. It was launched with US$150 million of assets under control in 2016 as a venture capital fund and immediately got hacked. About US$50 million in cryptoassets were stolen by the hackers. The hack was reverted by reorganizing the Ethereum blockchain, which in turn led to a chain split. The Ethereum Classic chain is the Ethereum chain where the hack was not reverted, while investors on the Ethereum chain were refunded.

#### The Horizen Treasury DAO

Horizen is dedicated to building a DAO as a [sidechain]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) application. It will enable decentralized, community based governance, especially with regards to resource allocation. The basic model of the treasury system is described in [a paper][https://www.lancaster.ac.uk/staff/zhangb2/treasury.pdf] written by our research and development partner, Input Output Hong Kong (IOHK) in collaboration with the Lancaster University.

The general idea of the Horizen DAO is to have stakeholders in the Horizen ecosystem vote on what the treasury funds at the Zen Blockchain Foundations disposal are spent on. Anyone in the community can submit a proposal for consideration. Stakeholders can review the proposals that get passed on, and then they get sent to the next stage where ZEN holders can vote on where funding gets placed. There are many types of voting mechanisms and electoral systems in general to choose from when building such a system. The Horizen DAO will use a form of Liquid Democracy as the mechanism for voting. A thorough discussion of voting schemes would blow the scope of this article. Still, we would like to outline the core idea behind liquid democracy.

The two existing forms of democracy we know from traditional governance processes are *representative democracy* and *direct democracy*. The first forms of democracy were direct democracies. They offered their participants fairness, accountability, and control, but they don’t scale well with an increasing number of participants. Most democracies evolved into representative democracies over time for this reason. While they allow a large number of voters to participate in the decision-making process there are issues with regards to the transparency of representatives’ votes and decisions, the accountability of representatives, and high barriers to entry for participants wanting to get involved in the decision-making process.

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Liquid Democracy can be understood as a dynamic hybrid of the two established branches of democracy, direct and representative. Liquid democracy combines many of the upsides of each while doing away with most of their weaknesses. With liquid democracy, you have the option of delegating your vote to an "expert" that represents your views without your delegation being tied to election terms of any kind. A key difference is that you can delegate your vote to whomever you like and you can withdraw your delegation at any given time - making the whole process very fluid - or *liquid*. This reduces the barrier to entry for people willing to get involved in the governance process and keeps delegates accountable because they can lose delegations at any time. Alternatively, you can decide to vote on any given issue yourself.

As we said earlier, DAOs are still experimental at this point in time. There are many unknowns around a DAOs legal status and how to best set it up, as there is little to no precedent of a DAO working for a sustained period of time. Nonetheless the concept is highly interesting from our perspective and promises big advancement in terms of [social scalability](https://hackernoon.com/social-scalability-the-most-important-idea-in-cryptocurrency-73d60e08b85a) if implemented correctly. Thus we consider it an effort worth making to build a DAO to govern the Zen Blockchain Foundation's finances. 

### Decision Making

Now that we have looked at different models of who gets to make decision, we have to figure out what to do. There are different processes the "decision makers" can follow to decide, and one of the most widely used processes are improvement proposals. They come in different flavors and vary to some degree, but the general idea remains the same.

#### Improvement Proposal Processes

just a more formal way of suggesting changes and a more formal way of handling those suggestions from idea to activation.
BIPs, EIPs, ZIPs, ZenIPs

\url{https://medium.com/@dhsue/an-analysis-of-zcash-governance-692793f9c9ef}

\url{https://www.zfnd.org/blog/new-zip-process/}

- EIP 1234 reducing block reward from 3 to 2 ETH per block. also delayed difficulty bomb.


describe the overall process -> summary of ZenIP.md

transition to ZenIP

Aragon Governance Proposals https://github.com/aragon/AGPs


#### ZenIP Process

owners and editors

![ZenIP Status Flow](/assets/post_files/technology/expert/2.7-governance/zenip_status.png)

status flow -> community discussion at what stages

get involved, check repo, even create ZenIP, can be process or non-code-related


### Implementing Changes

downward compatible or not

#### Soft Forks


backwards compatible

transition to new set of consensus rules

**UASF**

UASF is mechanism by which changes are implemented

flag date, afterward changes enforced by nodes. won't accept "old" blocks, miners adhere because invalid blocks cost

user activated because node operators need to upgrading

first time bip16 p2sh

miners included /P2SH/ in coinbase tx

Voting period and threshold defined

uasf 2017, segwit...power of users
proposed segwit in bip148, forcing miners to activate aug. 1st

forked code, created Bitcoin UASF and made it publicly available

gained traction, created pressure on miners to adopt bip-91 (segwit bip) and activate fork before 148 deadline

Actually, in the summer of 2017, in some ways, a client competing with Bitcoin Core, Bitcoin UASF, overthrew Bitcoin Core and deliberately changed the networks consensus rules. Therefore, concluding that Bitcoin Core is all powerful, is the wrong lesson to learn from the blocksize war. - bitmex


"To push this change through anyway, some Bitcoin users installed a client that threatened to, once again, suspend
Nakamoto consensus by ignoring blocks from miners who refused SegWit after a certain
date. Had miners let this play out, it would have resulted in contentious fork from the main
network. The threat to Bitcoin’s utility and value was serious enough to the miner’s bottom
lines that they finally gave up their resistance against the SegWit update"



**MASF**

bip34 introduced MASF, version number

miners signal readiness with hash power, changing version bits, When a certain percentage of produced blocks have signalled acceptance, full nodes can then enforce rule changes accordingly

2 more times -> version number 4 right now

version number -> version bits, bip0009 https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki

more info, can signal for up to 29 soft forks at once

#### Hard Forks



### Horizen Governance

ZenIP
ZBF
HL(?)


### Summary

"In fact, the search of a perfect organizational structure for cryptocurrency governance, may not be that different from the search for the best ways for governing human societies." Ken Alabs

"Overall, open source protocol governance is something that’s constantly iterated and improved upon. There is no shortcut or short-term fix. It’s strengthened through awareness, education, and active community participation." - Derek Hsue, grin governance article

Maybe no perfect in this context. Depends on use case: BTC SOV, conservative governance expected and needed.
other projects more progressive, need faster decision making
sandbox stage

### FR

https://uncommoncore.co/wp-content/uploads/2019/10/A-model-for-Bitcoins-security-and-the-declining-block-subsidy.pdf

\url{https://medium.com/blockchain-capital-blog/grin-governance-a-novel-approach-154aca07291b}
Interesting approach regarding Asics. touches on governance in one way or another. Avoids the inevitable discussion about mining hardware by a proactive decision. 

chris burniske on zcash halving and dev fund \url{https://forum.zcashcommunity.com/t/placeholder-considerations-resources-governance-and-legitimacy-in-nu4/34045} .

Nic Carter, master thesis:  A Cross-Sectional Overview of Cryptoasset Governance
and Implications for Investors \url{https://coinmetrics.io/papers/dissertation.pdf}