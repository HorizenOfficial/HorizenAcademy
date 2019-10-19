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

One of the most highly valued properties of a public blockchain protocol is its level of decentralization. Usually there is much focus on how decentralized the block generation process is but not as much on how code and other changes are decided upon. Governance is the keyword here. While there is no deterministic way of assigning a "decentralization score" to a given project, some projects certainly seem to be goverened by a larger and more diverse group of people than others.

> *"Governance fundamentally consists of three questions: What should we do, who gets to decide, and how are the deciders chosen and held accountable?"* - Sonya Mann, [The new ZIP Process and Zcash Governance](https://www.zfnd.org/blog/new-zip-process/)

In order to address these question practically, they have to be approached in reverse order. First you need to determine how to choose the deciders, then choose them and lastly, have them make decisions.  
In this article, we want to give an overview of what types of mechanisms there are to make the decisions mentioned above and explain how we at Horizen think about governance.

### How are the Deciders Chosen?

In a perfect world everybody has a say when it comes to how the deciders of a project are chosen and ideally there would be some sort of "fair" vote on it - whatever that means.

Realistically, there can not always be a process in place for how to choose the deciders. Most projects in the blockchain space started with a few like-minded people having an idea for what their idea cryptocurrency, dApp or platform should look like. Often times they found each other in a project similar to their idea, or the oldest blockchain and largest community around - Bitcoin.

All of them started working on making their idea become a reality at some point. The group of people that has formed around an idea will than gravitate towards a focal point for the development of the project. Often times this is a distinct GitHub organization. No matter what this group looks like in the beginning and how it has formed, generally this sort of entrepreneurial spirit should be welcomed.

At the time people start putting actual work into the realization of the project idea, individuals will start to build a reputation - good or bad - and this will most likely be the organic way of how deciders emerge from the group. People that put in more time, more work and have the better ideas will naturally be recognized as the thought leaders of this project. They will usually take on leading roles in the development process, becoming repository maintainers or admins. **TKKG merge access**

Once such a public open-source project gains momentum and people outside the initial group start to become aware, some of them will consequently get involved. By supporting a given project an individual is (conciously or not) signalling her support for the direction of the project and the approach the project has taken on governace thus far.

I am currently not aware of a blockchain project, which has a dedicated process in place for how to chose the people that have more controll than others.
**TKKG: usually reputation/track record**



### Who gets to Decide?

those who emerged from the founding stage with the best reputation and largest social capital will have to make certain decision in the beginning.

At this time not critical, design decision but no money involved yet. Which is not to say that decision made at the early stages of a blockchain project cannot have far reaching consequences later on.



at their discretion can introduce processes for decision making - improvement proposal processes one example we will look at more closely later in this article.

But what does decide mean anyways? What types of decisions have to be made?

categorized by "effekt": some decisions can be made simultaneously. two different clients. BTC many clients, but core emerged as focal point.

wide range: small design decision 

can still have consequences.

If a project is build from scratch ... language core client (for pr build from scratch) effects on developer adoption

usually code fork and modification. Extending the deamon with usefull libraries, APIs attractiveness for devs.

bigger decision: PoW Algo


So far different takes on scaling approaches have produced the biggest controversies



different approaches

some more company, some more community, some can barely be explained in a book.

depending on usecase, different levels of decentralization required or desireable for different usecases.
for a network mainly providing verifiable scarcity for CryptoKitties decentralization is arguably less important than a global Store of Value (SOV).

robustness as single points of control create single points of failure


#### Delegated Decentralized Governance

2 paragraph max.

on paper similar to representative democracies, but without fixed terms fixed terms.
EOS 21, Steem 50, Tron 27 parties.
usually closer to corporate structures - business after all

originally block production. but this goes hand in hand with consensus rules

code changes in the hands of a few

#### Decentralized Governance


https://blog.bitmex.com/bitcoin-cores-competition/ to do


"A truly
decentralized system is characterized by decentralization at the node, miner/staker, and
governance level. While this model flows logically from an analysis of power structures typified
in the bitcoin model discussed in this paper, theoretical support comes from Schneider (2003).
Schneider, responding to conceptual confusion in academia over political decentralization, finds
that decentralization is political, administrative, and fiscal. Within the Bitcoin network, decisionmaking structures (chiefly orchestrated by Core developers) can be understood as political,
nodes enforcing rulesets can be understood as administrators, and fiscal power is wielded by
miners." - Nic Carter, A Cross-Sectional Overview of Cryptoasset Governance
and Implications for Investors https://coinmetrics.io/papers/dissertation.pdf

Bitcoin most organic, had the most time to evolve and the least attention at launch, no precendent...

core repo is schelling point for btc development.

maintainer have to sign merge commits, trusted pgp keys. otherwith github employees...
"Rather than base the integrity of the code off of GitHub accounts, Bitcoin Core has a continuous integration system that performs checks of trusted PGP keys that must sign every merge commit." - Lopp
while keys can be stolen, better

layered security, prs, releases

monitor changes, chain of signed commits verified, test run, determinism is checked 

no formal specification, no one has authority to write one. code of dev focal point closest thing

principle of least privilege



Version bits to signal soft fork readiness \url{https://bitcoincore.org/en/2016/06/08/version-bits-miners-faq/}






> "No one controlls Bitcoin." - Jameson Lopp, [Who Controls Bitcoin Core](https://blog.lopp.net/who-controls-bitcoin-core-/)

The mechanism used for the version 2, 3, and 4 upgrades is commonly called IsSuperMajority() after the function added to Bitcoin Core to manage those soft forking changes. See BIP34 for a full description of this method.

"As of this writing, a newer method called version bits is being designed to manage future soft forking changes, although it’s not known whether version 4 will be the last soft fork to use the IsSuperMajority() function. Draft BIP9 describes the version bits design as of this writing, although it is still being actively edited and may substantially change while in the draft state."

#### DAO - Decentralized Autonomous Organization

\url{https://en.wikipedia.org/wiki/Electoral_system#Systems_used_outside_politics}

Users. DAO only possible if a general framework is agreed upon beforehand. after that code runs the organization

Voting in some form or another. Many voting schemes to choose from, each coming with a number of pros and cons. We chose LD. A thorough discussion of voting schemes and electoral systems would blow the scope of this article. Still I'd like to outline the core ideas behind LD.

"The two existing forms of democracy are representative democracy (RD) and direct democracy (DD). The first forms of democracy were direct democracies. They offered their participants fairness, accountability, and control, but they don’t scale well with an increasing number of participants. Most democracies evolved into representative democracies over time for this reason. While they allow a large number of voters to participate in the decision-making process there are issues in regards to the transparency of representatives’ votes and decisions, the accountability of representatives, and high barriers to entry for participants wanting to get involved in the decision-making process.

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Liquid Democracy (LD) can be understood as a dynamic hybrid of the two established branches of democracy, direct and representative. Liquid democracy combines many of the upsides of each while doing away with most of their weaknesses. With liquid democracy, you have the option of delegating your vote to an expert that represents your views. Alternatively, you can decide to vote on any given issue yourself.

A key difference is, that you can delegate your vote to whomever you like, be it your brother that is really knowledgable on a given topic or anybody else and you can withdraw your delegation at any given time - making the whole process liquid. This reduces the barrier to entry and keeps delegates accountable because they can lose delegations at any time." - Expert Horizen

### What to do?

Now that we have looked at different models of who gets to make decision, we have to figure out what to do

#### Improvement Proposal Processes

just a more formal way of suggesting changes and a more formal way of handling those suggestions from idea to activation.
BIPs, EIPs, ZIPs, ZenIPs

\url{https://medium.com/@dhsue/an-analysis-of-zcash-governance-692793f9c9ef}

\url{https://www.zfnd.org/blog/new-zip-process/}

- EIP 1234 reducing block reward from 3 to 2 ETH per block. also delayed difficulty bomb.


describe the overall process -> summary of ZenIP.md

transition to ZenIP

#### ZenIP Process

owners and editors

![ZenIP Status Flow](/assets/post_files/technology/expert/2.7-governance/zenip_status.png)

status flow -> community discussion at what stages

get involved, check repo, even create ZenIP, can be process or non-code-related


### How to Implement the changes?

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