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

\url{https://bitcoin.org/en/developer-reference#block-versions}\\

\url{https://medium.com/@lopp/who-controls-bitcoin-core-c55c0af91b8a} Lopp article\\

\url{https://blog.bitmex.com/bitcoin-cores-competition/}\\

Version bits to signal soft fork readiness \url{https://bitcoincore.org/en/2016/06/08/version-bits-miners-faq/}\\

\url{https://www.mycryptopedia.com/uasf-user-activated-soft-fork-explained/}\\

\url{https://medium.com/@dhsue/an-analysis-of-zcash-governance-692793f9c9ef}\\

\url{https://www.zfnd.org/blog/new-zip-process/}\\

\url{https://en.wikipedia.org/wiki/Electoral_system#Systems_used_outside_politics}\\

chris burniske on zcash halving and dev fund \url{https://forum.zcashcommunity.com/t/placeholder-considerations-resources-governance-and-legitimacy-in-nu4/34045} .\\

Nic Carter, master thesis:  A Cross-Sectional Overview of Cryptoasset Governance
and Implications for Investors \url{https://coinmetrics.io/papers/dissertation.pdf}

### Intro

> "Governance fundamentally consists of three questions: What should we do, who gets to decide, and how are the deciders chosen and held accountable?" - Sonya Mann, The new ZIP Process and Zcash Governance.\footnote{\url{https://www.zfnd.org/blog/new-zip-process/}}\\


**incentives_stakeholders.png**


Overlapp with Consensus Mechanism, but independent of consensus rules. \textbf{(?)}\\

"While there is usually much focus on how decentralized the block generation process is, the manner in which the rules are interpreted and then encoded is nearly as important, and also usually less decentralized."\\

The mechanism used for the version 2, 3, and 4 upgrades is commonly called IsSuperMajority() after the function added to Bitcoin Core to manage those soft forking changes. See BIP34 for a full description of this method.\\

"As of this writing, a newer method called version bits is being designed to manage future soft forking changes, although it’s not known whether version 4 will be the last soft fork to use the IsSuperMajority() function. Draft BIP9 describes the version bits design as of this writing, although it is still being actively edited and may substantially change while in the draft state."\\

"Rather than base the integrity of the code off of GitHub accounts, Bitcoin Core has a continuous integration system that performs checks of trusted PGP keys that must sign every merge commit." - Lopp\\

Signalling vs. voting... voting in btc is closer to signaling(?)\\


\begin{itemize}
\item EIP 1234 reducing block reward from 3 to 2 ETH per block. also delayed difficulty bomb.
\item core repo is focal/schelling point for btc development.
\item 
\end{itemize}

### Permissioned Governing Structure

Ripple, Stellar

### Delegated Decentralized Governance

similar to representative democracies, not fixed terms.
EOS 21, Steem 50, Tron 27 parties.\\

code changes in the hands of a few\\

### Decentralized Governance

Bitcoin

### DAO - Decentralized Autonomous Organization

Voting in some form or another. Many voting schemes to choose from, each coming with a number of pros and cons. We chose LD. A thorough discussion of voting schemes and electoral systems would blow the scope of this article. Still I'd like to outline the core ideas behind LD.\\

"The two existing forms of democracy are representative democracy (RD) and direct democracy (DD). The first forms of democracy were direct democracies. They offered their participants fairness, accountability, and control, but they don’t scale well with an increasing number of participants. Most democracies evolved into representative democracies over time for this reason. While they allow a large number of voters to participate in the decision-making process there are issues in regards to the transparency of representatives’ votes and decisions, the accountability of representatives, and high barriers to entry for participants wanting to get involved in the decision-making process.\\

![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/technology/expert/2.7-governance/liquid_democracy_M.jpg)

Liquid Democracy (LD) can be understood as a dynamic hybrid of the two established branches of democracy, direct and representative. Liquid democracy combines many of the upsides of each while doing away with most of their weaknesses. With liquid democracy, you have the option of delegating your vote to an expert that represents your views. Alternatively, you can decide to vote on any given issue yourself.\\

A key difference is, that you can delegate your vote to whomever you like, be it your brother that is really knowledgable on a given topic or anybody else and you can withdraw your delegation at any given time - making the whole process liquid. This reduces the barrier to entry and keeps delegates accountable because they can lose delegations at any time." - Expert Horizen\\

### Improvement Proposals

BIPs, EIPs, ZIPs, ZenIPs

describe the process -> summary of ZenIP.md

![ZenIP Status Flow](/assets/post_files/technology/expert/2.7-governance/zenip_status.png)

get involved, check repo, even create ZenIP, can be process or non-code-related

### Summary

"In fact, the search of a perfect organizational structure for cryptocurrency governance, may not be that different from the search for the best ways for governing human societies." Ken Alabs\\

"Overall, open source protocol governance is something that’s constantly iterated and improved upon. There is no shortcut or short-term fix. It’s strengthened through awareness, education, and active community participation." - Derek Hsue, grin governance article\\

Maybe no perfect in this context. Depends on use case: BTC SOV, conservative governance expected and needed.
other projects more progressive, need faster decision making
sandbox stage

\subsubsection*{FR}

\url{https://medium.com/blockchain-capital-blog/grin-governance-a-novel-approach-154aca07291b}
Interesting approach regarding Asics. touches on governance in one way or another. Avoids the inevitable discussion about mining hardware by a proactive decision. 
