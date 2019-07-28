---
layout: post
type: article
title: "PoW - Proof of Work"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/proof-of-work/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
published: false
---


Proof of Work (PoW) is something that has been known for millennia, but wasn't called that way for the longest time. Andreas Antonopolous, one of Bitcoins greatest advocates, [tells this story best](https://youtu.be/rsLrJp6cLf4?t=152).

**TL;DW**: Evidence of Proof of Work can be found in many places, for example in Giza, Egypt. The pyramids don't only serve as a tribute to the Pharaoh, they also demonstrate the capabilities of the civilization that built them. It is immediately recognized by any visitor, that this monument required a large amount of work to be built. It's a proof of work.

Proof of Work in a blockchain serves a similar purpose. It doesn't showcase the amount of work that went into building it by making it large in size, but by the number of leading zeros in every block hash. It is a means to achieve immutability. While the [blockchain as a data structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}) is inherently tamper-evident, only PoW gives it its immutability attribute. The blockchain allows detecting changes to its records easily, but it doesn't prevent them from happening. Proof-of-Work makes it infeasible to change its records, for an attacker has do redo all the work that went into building it in the first place.

In our last article we concluded that the consensus mechanism in most blockchains comprises two components - Proof of Work and the longest chain rule. PoW provides [Sybil resistance] and protects against [DDOS] attacks. The longest chain rule resolves disputes in case two valid blocks are found at the same time and by breaking the tie with the next block that is found.

Proof of Work creates consensus in rounds - with each new block that gets added to the chain.
Instead of voting on proposed blocks, the chance of finding a block is proportional to a miners relative contribution to the total hash power on the network. This can be understood as an indirect form of voting, where the voting power of an entity is proportional to the computing power that entity has.

> “The main difference between consensus mechanisms is the way in which they delegate and reward the verification of transactions. (…) In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control.” - Demiro Massessi

The limited resource in a PoW blockchain is computational power. In other *Proof-of* schemes it can be hard drive space or the native currency of that blockchain.

### How does a Miner perform the PoW?

After we have talked about [hash functions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) in detail and covered [consensus in distributed systems]({{ site.baseurl }}{% post_url /technology/expert/2022-02-051-consensus-in-distributed-systems %}) explaining PoW is straight forward:

A miner starts creating a block by including the *coinbase* transaction as the first transaction. The coinbase transaction is a special one that does not have any inputs, but an output sending coins to an address controlled by the himself. This output is worth the current *block subsidy* (12.5 ZEN at the time of writing) together with the *transaction fees* of all included transactions. The sum of the block subsidy and the transaction fees make up the block reward.

By allowing them to include this transaction miners are incentivized to actually perform the computationally expensive task and at the same time new coins are created. Each existing ZEN or BTC started out in a coinbase transaction.

Next, miners collect new and unconfirmed transactions in their block. If there are more unconfirmed transactions than what fits in a single block, they store them in their *mempool*. When blocks are full, miners select the transactions from their mempool with the highest transaction fees, calculated on a fee-per-byte basis, and include those in their block. This is because blocks are limited in size and by selecting transactions based on ZEN/byte they get the most bang for the buck in terms of transaction fees.

Now, a miner builds a *merkle tree* of all transactions included in her block and includes the *merkle root* in the block header. She adds all the other necessary data, such as the hash of the previous block and some other meta data.

++++ merkle tree

Once the *candidate block* is completed the miner inserts some value in the *nonce* data field. The nonce - *n*umber used *once* - is a variable whose only purpose is to modify the block hash. When a first nonce is inserted, the miner performs the first hash operation. He compares the resluting block hash with the current *target* and if it is greater than the target, he increments the nonce and performs the same steps again. All miners do this simultaneously and are in a competition to find a nonce, that when hashed together with the block header produces a hash equal to or below the target.

Once such a block, or better nonce, is found, the miner will broadcast his block to the network, where nodes as well as other miners check, if the block contains conflicting transactions and if the hash is below the current target. When both criteria are met, the block is added to all copies of the blockchain. All other miners drop their current candidate block and start working on a new one.

The terms target and *difficulty* are often times used interchangeably. Technically, they are not equivalent though. The target is a value, that the block hash has to be equal to or below in order to be considered valid. The difficulty, is a measure of how difficult it is to find a hash below a given target. The highest possible target in Bitcoin (1) is defined as

0x00000000FFFF0000000000000000000000000000000000000000000000000000.

The difficulty is a relative measure of the current target compared to the easiest target value.

The target is adjusted regularly, with Horizen every 8064 **(?)** blocks. This is a mechanism to keep the block time somewhat constant. When more miners - and therefore hash power - join the network valid blocks are found more frequently on average. By increasing the target, the block time can be adjusted upwards or downwards, depending on hash rate.

### Types of Proof of Work

> "A Proof-of-Work (PoW) system (or protocol, or function) is an economic measure to deter denial of service attacks and other service abuses such as spam on a network by requiring some work from the service requester, usually meaning processing time by a computer." - Wikipedia

Proof of Work is the bridge connecting the digital and the physical world. It ties the voting power in a purely digital system to a costly real world resource. Prior to PoW, consensus was done with a known set of participants. Allowing anyone to contribute to a consensus process left the system vulnerable to [**Sybil attacks**]. But creating many Sybil identities does not provide an attacker with an advantage if he can not back them with meaningful computational resources.

While a Proof of Work System typically uses hash functions, a proof of work algorithm can be more than just a hash function.
The most used type of Proof of Work is a Hashcash style PoW. Hashcash was introduced in 1997 by Adam Back as a measure to prevent spam. Recipients would require the sender to perform a proof of work in order to accept the mail. While this does not effect regular users sending a few mails per day, "professional" spam would be much harder to produce. The principle is the same as described above, performing repeated hashing until the resulting hash is less than some target value.

In general a Proof of Work can be one of two things: a non-interactive *solution-verification protocol* or an interactive *challenge-response protocol*. Horizen uses both, each for a different purpose.
 
Just like Bitcoin and most other blockchains, mining is done via a solution-verification protocol. Miners find a solution to a problem. All nodes can verify the solution at any point in time. Even a node that has been offline for months can verify if the blocks it receives during synchronization from an untrusted node are valid or not. It is non-interactive.

Nodes on the Horizen network are incentivized by getting a share of the block subsidy. Because we want to incentivize a robust network with capable nodes, the protocol has certain requirements for nodes in order to be eligible to get rewarded. The requirements are checked by sending *challenges* to the nodes. The response time is the basis on which the nodes performance in assessed. It is an interactive challenge-response protocol and constitutes a form of Proof of Work as well.

### What Constitutes a good Proof of Work?

Some criteria for a good PoW for a decentralized blockchain with a fair distribution of newly mined coins have been formalized by Biryukov and Khovratovich in their [*Equihash*](https://www.cryptolux.org/images/b/b9/Equihash.pdf) paper:


- *Asymmetry*: The Proof of Work needs to be hard to produce, but easy to verify. Hashing is an example we covered already, an incredible amount of hash operations is needed to find valid hash, but a single operation is sufficient to verify. Prime factorization in RSA is another example. It involves finding two primes whose product equals a given value. For the number 77 one would find 7 and 11 intuitively. For *54,063,013* this becomes a much more difficult task but verification can be done with any rudimentary calculator.

- *Optimization Free*: An optimization free algorithms means, that you cannot improve the efficiency of performing that task through software or algorithmic  improvements. Battle proven one-way functions lend themselves as a good basis for an optimization free algorithm. There is no way around a trial-and-error approach. The [*Generalized Birthday Problem*](https://en.wikipedia.org/wiki/Birthday_problem) is an approach that has been studied for a long time with no optimization in sight. 

- *Amortization free*: This means economies of scale that would render all mining pools besides the largest one irrelevant should not be possible. In a best case scenario it wouldn't matter if a miner runs one miner or a million. This is obviously a not entirely practical property. Cooling, electricity and facilities to set up the mining equipment will always enable large miners to operate with a bigger margin than smaller ones. The PoW algo itself should not allow this to happen though.

- *Independently Tunable Parameters*: Certain parameters of the problem to solve by the miners should be easy to adapt. One of those parameters is the target or difficulty we already talked about. By being able to tune this parameter depending on miner activity one can keep the block time constant.

Let' take a look at the asymmetric property first. It means the task has to be computationally expensive to perform but easy to verify. After that, we will take a closer look at how a mining algorithm can be tuned via certain parameters.

### What Does Computationally Expensive Mean?

Proof of Work schemes always involve a computationally hard problem. The term computationally hard can further be broken down into three classes: *CPU-bound, memory-bound* or *network-bound*. CPU-bound refers to the required processing power, memory-bound to storage capacities (usually RAM, not hard drive) and network-bound to the available bandwidth.

All of them have certain advantages and shortcomings. The CPU-bound approach gives large players with capital a decisive advantage. Proof of Work usually involves performing a single computational task many times in a row. Special hardware, so called ASICs, can be build for CPU-bound tasks. They sacrifice versatility for efficiency and thereby offer a huge advantage in performance. Because ASICs are very specialized and expensive, most regular users don't have easy access to them.

++++ cpu vs asic graphic

The memory-bound "approach suffers from an obvious flaw: if you could find a way to store all that data in memory once, using a lot of expensive DRAM, but then share this data across a large group of inexpensive processors, you would effectively share the cost across a large number of processors and thus undermine the supposed difficulty of the problem. And this is exactly what has happened recently." [Source](https://medium.com/@jeffrey.emanuel/loaded-pow-a-new-direction-in-proof-of-work-algorithms-ae15ae2ae66a)

With recently the author refers to the emergence of ASIC miners for the Equihash mining algo.

Network-bound approaches are less hardware intensive and rely more on operational expenditures than capital expenditures. At the same time they are more vulnerable to attacks, such as [**DOS**] attacks and bandwidth is geographically not as evenly available as CPU power or memory.

Most PoW schemes are CPU-bound. Some algorithms, sometimes referred to as ASIC resistant, are *memory-hard*, but rarely memory-bound. This means they require a lot of memory to be performed at all, but once that amount of memory is available, speed improvements are realized through increasing the processor performance rather than adding more memory. As we mentioned above, this design didn't keep them ASIC resistant for long. It is always possible to build more efficient hardware, compared to commodity hardware, for a given problem at the expensive of versatility.

**TKKG** An interesting sidenote is that bandwith is a consideration in the IOTA [Tangle](https://blog.iota.org/the-tangle-an-illustrated-introduction-4d5eae6fe8d4). The Tangle is a [Directed Acyclic Graph (DAG)]({{ site.baseurl }}{% post_url /technology/expert/2022-01-05-a-relative-the-dag %}) consisting of individual transactions. Each transaction has a small proof of work attached. The protocols security is based on the assumption that honest participants will make up the majority of transactions and the majority of computational power. If the Tangle was to be adopted widely for micro-payments in the IOT sector, not only would computational power secure the network, but also the bandwidth restraints of a single attacker. It will be infeasible to amass more bandwith than all honest devices will have combined. In order to broadcast a majority of transactions one needs a majority of computing power and bandwidth in this setting. In a transaction DAG security can have both, a CPU-bound and a network-bound component.

#### Metrics to Assess Computational Hardness}

Their are two different metrics to rate the difficulty of a computational task: time complexity and space complexity.

Time complexity refers to how many additional computations result from an increase in the input to a function. With infeasible time complexity, slight increases in input size will result in an exponential increase in time for the computation to finish.

++++ time complexity

Space complexity refers to how much additional memory is needed when the input to a function increases. With infeasible space complexity, the memory requirements quickly exceed all hardware limits.

++++ space complexity

An algorithm designed for a Proof of Work has to make tradeoffs between the two. When we talked about CPU-bound algorithms, we meant those with a high level of time complexity. Memory-bound algorithms have a high space complexity. As you can imagine, these metrics don't work in a binary fashion, but have different shades of grey.

### The Generalized Birthday Problem

Let us take a look at the parameters of a PoW scheme, that allow us to tune it. The most intuitive parameter to understand is the target. Because cryptographic hash functions map their inputs evenly distributed across the output range, lowering the threshold a hash has to be smaller than makes the task of finding an according input more difficult. The more hash power is on the network, the lower the average time until such an input is found. This means shorter block times. Lowering the target naturally increases the block time.

There are much more complex PoW algorithms though. One of the more widely used ones is [*Equihash*](https://www.cryptolux.org/images/b/b9/Equihash.pdf), which is based on the *Generalized Birthday Problem* and used by the Horizen blockchain.

The [*birthday problem*](\url{https://en.wikipedia.org/wiki/Birthday_problem}) describes an interesting property regarding a group of people and their birthdays. In a group of 367 people, the probability of two of those people sharing a birthday is 1, as their is one more person than days in a leap year. However, with just 23 people in the group the chance of two of them sharing a birthday is already at 50\%, while it reaches 99.9\% with just 70 people.

If you find this interesting or have a hard time believing it, you might also want to look at the closely related [*Pigeonhole Principle*](https://en.wikipedia.org/wiki/Pigeonhole_principle) the [*Hilbert's paradox of the Grand Hotel*](https://medium.com/i-math/hilberts-infinite-hotel-paradox-ca388533f05l) or [*The Traveling Salesman Problem*](https://en.wikipedia.org/wiki/Travelling_salesman_problem). Each can turn into a rabbit hole of its own.

The [*generalized birthday problem*](https://en.wikipedia.org/wiki/Birthday_problem#The_generalized_birthday_problem) refers to the difficulty of calculating those probabilities in more general context. We define a time period of *d* days, and ask how many people *n* do we need to have a 50% likelihood of a birthday coincidence. Next, we can increase the number of dimensions for the problem. Instead of looking at a group of *n* people, we could look at two groups of *m* men and *w* women. With a given set of values for *d*, *m* and *w*, what is the likelihood of a man and a woman sharing a birthday.

Starting from the generalized birthday problem, David Wagner devised an algorithm - the *Wagner's Algorithm* - to compute those probabilities for even more complex setting with *k* dimensions (groups of people) and *n*-bit settings (days). The algorithm [was found to be](https://pdfs.semanticscholar.org/06f4/507d9f584b544f96364cae2ad41e78e4035b.pdf) hard on time and space.

++++ birthday problem

The time and space complexity trade-off can be adjusted by the parameter *k*. This means, very loosely speaking, that if one uses the generalized birthday problem for a proof of work algorithm, one can make it more CPU or memory intensive for the computer depending on the number of different groups of people *k* a birthday collision is calculated for.

Horizen has implemented Equihash with *n*=200 and *k*=9.**???**

Some other examples of computationally hard problems used to create a Proof of Work include finding prime numbers and solving the traveling salesman problem. In Primecoin the PoW task is to find prime number chains e.g. *Cunningham chains* and *Bi-twin chains* where primes roughly double or follow a specific sequence. The [Cuckoo Cycle*] algorithm by Tromp et al. is based on graph theory. It comes down to the traveling salesman Problem and is implemented in Grin and æternity.

### Incentives and Vulnerabilities

Proof of Work in cryptocurrencies has an intricate but ingenious incentive system in place. Miners are rewarded with the *block reward* which comprises the *block subsidy* as well as the *transaction fees* attached to each transaction.

On a high level, miners are rewarded with a ledger entry for spending real world resources in the form of electricity in order to earn said ledger entries. PoW therefore builds a bridge between the digital and the real world.

But PoW also has some vulnerabilities. No system is unfailable. In our last article we looked at [consensus mechanisms in distributed systems]({{ site.baseurl }}{% post_url /technology/expert/2022-02-051-consensus-in-distributed-systems %}) in general. We learned that it is hard to achieve Byzantine Fault-Tolerance in the first place, let alone tolerating a large share of byzantine actors. Simply speaking byzantine behavior means random or malicious bahavior. Building a system that demonstrates *liveness*, as well as *safety* with more than one third of the network acting *byzantine* took many years. Proof of Work together with the *longest chain rule* make up the *Nakamoto consensus*. It can tolerate byzantine hash contributions of up to 49%.

If an attacker controls the majority of hash rate he can reliably perform 51\% attacks. This means building a malicious chain faster, than the honest partition of the network. According to the longest chain rule, the honest and rational actors of the network will accept the malicious chain as valid, once it is broadcast. This allows the malicious actor to perform double spends.

**DOUBLE SPEND GIF**

 He spends coins in a transaction that is included in the honest chain. Later, he rewrites this part of the transaction history with his own blocks, which don't include his spending transaction. He is now in control of his founds again and spend them a second time - a double spend.

Horizen has a [mechanism in place](https://www.horizen.global/assets/files/A-Penalty-System-for-Delayed-Block-Submission-by-Horizen.pdf) to make it significantly harder to perform such a 51\% attack. We introduced a block acceptance delay in relation to the amount of time the block has been withheld from the public network. This can be best described with a short example. 

In the graphic above, the malicious chain was broadcast with a delay of 4 blocks. The delay is the amount of honest blocks mined on top of the last common block before the fork. The block acceptance delay modifies the longest chain rule. The malicious chain is not immediately recognized by the other nodes, just because it is longer. Instead, a penalty is calculated based on the delay *n*, using a delay function *DF*. Let's consider a rather simple delay function

**DF(n) = \frac{n}{2} (n+1)**

For a 4 block delay, an additional 10 confirmations are required in order for the rest of the network to accept the fork. For a short delay of one block time, the delay function gives a penalty of one block - this situation turns out to be equivalent to the longest chain rule where an additional confirmation will break the tie between two blocks of the same height.

But for long delays, e.g. 20 blocks, which would result in a reasonable confirmation time of 50 min, the penalty would incur an additional 252 blocks of confirmation before the malicious chain were to be considered valid. This makes 51% attacks and the resulting double spends much harder if not infeasible.

Another potential thread are [(D)DoS attacks] - (Distributed) Denial of Service Attacks - where a malicious actor tries to slow down or halt the network by sending a large number of requests to the network. Those requests would be transactions in the case of a blockchain facilitating a cryptocurrency. While DoS attacks can certainly harm the system in that they mess with the fee market, it doesn't effect the integrity of the ledger itself. And after all this is the highest priority. It doesn't make much sense for a rational actor to spend resources on a DoD attack (the attacker has to pay transaction fees as well!) if the only affect is a temporary slow down of the network.

Lastly, PoW is inherently Sybil resistant. An entity can create as many identities or nodes on the network as they like, but without a substantial amount of computing power those nodes cannot effect the network. Therefore creating multiple identities offers no benefits over gathering hash power in a single mining node.


### Summary





A key takeaway from this article should be the following: You get **immutability** of data only if there is a **strong consensus mechanism** in place that makes the network participants decline invalid blocks, otherwise a blockchain is only **tamper-evident**. We will come back to this in protocol and consensus article.\\


