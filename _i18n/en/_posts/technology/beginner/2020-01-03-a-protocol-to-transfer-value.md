---
layout: post
type: article
title: "A Protocol to Transfer Value"
permalink: /technology/beginner/a-protocol-to-transfer-value/
topic: technology
level: beginner
chapter: "What is a Blockchain?"
---

One of the great innovations of the blockchain boils down to being a protocol to transfer value. Andreas Antonopoulos calls Bitcoin "a language to communicate value" which feels like an accurate description to me.

An analogy that might help you understand this concept is how the mail works. Let's forget about the post as an entity actually operating the mail service for a minute and think about it this way:  
The mail is permissionless in the sense that anybody, who wants to send a letter to someone can find a postbox near him or her and drop the letter in there. It will arrive at its destination a few days later. You don't need to ask for anybody's permission to do so. The "protocol" for sending a letter comprises of two things: you must put a stamp of sufficient value on it and you must provide the delivery address. The standard address format is a name, address and the country if you want to send the letter abroad.  
When a blockchain operates a cryptocurrency the network (← a decentralized "post-like" service) is taking care of delivering your transaction (← letter) to the recipient. The protocol asks you to add a small transaction fee (← stamp) and provide the necessary information in a standardized way: your address, the recipient's address, the amount to transfer and your signature.

![Mail protocol](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/mail_protocol.jpg)

Addresses on a blockchain are of course a little different to real-life addresses. They look like this: 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX. 
Signatures are also different from what you know. We will talk more about addresses and signatures throughout the next articles in this section.

Cryptocurrency [wallets]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) help you create an address and send transactions.

### Summary

The internet (with underlying TCP/IP protocol) enables you to transfer information and cryptocurrencies. This is very similar to the postal system which enables you to send physical goods. Blockchain technology provides a protocol to transfer value. We will discuss what a transaction looks like and the data needed to complete a transaction in the [article about transactions]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-intro-to-transactions %}).

Let's have a look at [how a blockchain works]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}).


{%
  include further_reading.html
  title="Why Bitcoin's Lightning Network is Ingenious"
  summary="A short history of accounting and why Bitcoin can be understood as the first occasion of Triple-Entry Bookkeeping. Brilliant take on the value of distributed ledgers for financial transactions."
  author="Todd Kronenberg"
  url="https://medium.com/coinmonks/why-bitcoins-lightning-network-is-the-ingenious-10dc1ad9ccae"
  image="https://cdn-images-1.medium.com/max/1200/1*LRthxmnfHZiP1GSpwpuE4g.jpeg"
%}

{%
  include further_reading.html
  title="Explain Bitcoin Like I'm Five"
  summary="The author explains why it is not that easy to build digital money and how bitcoin solved this problem in very simple terms"
  author="Nik Custodio"
  url="https://medium.freecodecamp.org/explain-bitcoin-like-im-five-73b4257ac833"
  image="https://cdn-images-1.medium.com/max/1200/1*d3ASVo4LX_QKtOXaeCdWmg.jpeg"
%}

{%
  include further_reading.html
  title="Money as Language"
  summary="Andreas making the point of currency being a form of language to communicate value. Talk in video form as well as a transcript."
  author="Andreas Antonopolous"
  url="https://www.weusecoins.com/video-bitcoin-money-as-language/"
  image="https://i.ytimg.com/vi/bVEMa7YkefY/hqdefault.jpg"
%}
