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

chris burniske on zcash halving and dev fund \url{https://forum.zcashcommunity.com/t/placeholder-considerations-resources-governance-and-legitimacy-in-nu4/34045} .

Nic Carter, master thesis:  A Cross-Sectional Overview of Cryptoasset Governance
and Implications for Investors \url{https://coinmetrics.io/papers/dissertation.pdf}

**incentives_stakeholders.png**




### Intro

"While there is usually much focus on how decentralized the block generation process is, the manner in which the rules are interpreted and then encoded is nearly as important, and also usually less decentralized."

> "Governance fundamentally consists of three questions: What should we do, who gets to decide, and how are the deciders chosen and held accountable?" - Sonya Mann, [The new ZIP Process and Zcash Governance](https://www.zfnd.org/blog/new-zip-process/)

In order to address these question practically, they have to be approached in reverse order. First you need to determine how to choose the deciders, then choose them and lastly have them make decisions.


### How are the Deciders Chosen?

Ecosystem around project chooses or gravitates toward focal point for development

by supporting a given project the user (conciously or not) is signalling a choice for who deciders are chosen.

can be a purely organic process, can be a large and diverse community or small team. All these are legitimate approaches 


### Who gets to Decide?

different approaches

some more company, some more community, some can barely be explained in a book.

effects on cencorship resistance

robustness as single points of control create single points of failure


#### Delegated Decentralized Governance

2 paragraph max.

similar to representative democracies, not fixed terms.
EOS 21, Steem 50, Tron 27 parties.

originally block production. but this goes hand in hand with consensus 

code changes in the hands of a few

#### Decentralized Governance

https://blog.lopp.net/who-controls-bitcoin-core-/

https://blog.bitmex.com/bitcoin-cores-competition/ to do

Bitcoin most organic, had the most time to evolve and the least attention at launch, no precendent...

core repo is focal/schelling point for btc development.

maintainer have to sign merge commits, trusted pgp keys. otherwith github employees...
while keys can be stolen, better

layered security, prs, releases

monitor changes, chain of signed commits verified, test run, determinism is checked 

no formal specification, no one has authority to write one. code of dev focal point closest thing

principle of least privilege


\url{https://blog.bitmex.com/bitcoin-cores-competition/}

Version bits to signal soft fork readiness \url{https://bitcoincore.org/en/2016/06/08/version-bits-miners-faq/}





"Rather than base the integrity of the code off of GitHub accounts, Bitcoin Core has a continuous integration system that performs checks of trusted PGP keys that must sign every merge commit." - Lopp



The mechanism used for the version 2, 3, and 4 upgrades is commonly called IsSuperMajority() after the function added to Bitcoin Core to manage those soft forking changes. See BIP34 for a full description of this method.

"As of this writing, a newer method called version bits is being designed to manage future soft forking changes, although it’s not known whether version 4 will be the last soft fork to use the IsSuperMajority() function. Draft BIP9 describes the version bits design as of this writing, although it is still being actively edited and may substantially change while in the draft state."

#### DAO - Decentralized Autonomous Organization

\url{https://en.wikipedia.org/wiki/Electoral_system#Systems_used_outside_politics}


Voting in some form or another. Many voting schemes to choose from, each coming with a number of pros and cons. We chose LD. A thorough discussion of voting schemes and electoral systems would blow the scope of this article. Still I'd like to outline the core ideas behind LD.

"The two existing forms of democracy are representative democracy (RD) and direct democracy (DD). The first forms of democracy were direct democracies. They offered their participants fairness, accountability, and control, but they don’t scale well with an increasing number of participants. Most democracies evolved into representative democracies over time for this reason. While they allow a large number of voters to participate in the decision-making process there are issues in regards to the transparency of representatives’ votes and decisions, the accountability of representatives, and high barriers to entry for participants wanting to get involved in the decision-making process.

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Liquid Democracy (LD) can be understood as a dynamic hybrid of the two established branches of democracy, direct and representative. Liquid democracy combines many of the upsides of each while doing away with most of their weaknesses. With liquid democracy, you have the option of delegating your vote to an expert that represents your views. Alternatively, you can decide to vote on any given issue yourself.

A key difference is, that you can delegate your vote to whomever you like, be it your brother that is really knowledgable on a given topic or anybody else and you can withdraw your delegation at any given time - making the whole process liquid. This reduces the barrier to entry and keeps delegates accountable because they can lose delegations at any time." - Expert Horizen

### What to do?

#### Improvement Proposal Processes

BIPs, EIPs, ZIPs, ZenIPs

\url{https://medium.com/@dhsue/an-analysis-of-zcash-governance-692793f9c9ef}

\url{https://www.zfnd.org/blog/new-zip-process/}

- EIP 1234 reducing block reward from 3 to 2 ETH per block. also delayed difficulty bomb.


describe the process -> summary of ZenIP.md


get involved, check repo, even create ZenIP, can be process or non-code-related




#### ZenIP Process


![ZenIP Status Flow](/assets/post_files/technology/expert/2.7-governance/zenip_status.png)




### How to do it?

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

\url{https://medium.com/blockchain-capital-blog/grin-governance-a-novel-approach-154aca07291b}
Interesting approach regarding Asics. touches on governance in one way or another. Avoids the inevitable discussion about mining hardware by a proactive decision. 
