---
layout: post
type: article
title: "Messaging"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, we review the importance of choosing a privacy-based messaging app for communication."
permalink: /privacy/beginner/messaging/
topic: privacy
level: beginner
chapter: "Tools to protect your Privacy"
further_reads: [secure_messaging_apps_comparison, secure_messaging_scorecard_a_thorough_review_of_top_trending_apps]
---

We all chat and we do tons of it. SMS, iMessage, Skype, Messenger, WhatsApp, Telegram... Some might even remember the era of ICQ and mIRC!

Texting/messaging is a very comfortable medium to use because it doesn't require an immediate reply and you can use it in non-private and noisy environments. Integrated voice messaging is another useful functionality to use when you are in a hurry and want to save time. We use these messengers often, but it also raises a question about privacy. How the data is being kept, treated, and transmitted? Are we protected while sharing private data over these applications? Well, it turns out some do it quite well while others not so much.

As in many other things, privacy comes at the cost of comfort. The more privacy-focused the application, the more limitations you might find there.

The most important feature for the modern day messengers is arguably the end-to-end encryption, which means that data is encrypted during transmission and is not sent as cleartext. It is important to pay attention to such things as company and infrastructure jurisdiction, implications in giving customers’ data to intelligence agencies, surveillance capabilities built into the app, the collection of customers' data, cryptographic primitives, are the app and infrastructure open source or not, and can you sign up and use the application anonymously or not.

Let's go over some of the most privacy protecting messaging applications:

### ZenChat

Horizen's own ZenChat is one of the most secure messaging solutions available today on the market. Based on Horizen's blockchain platform, ZenChat leverages zk-SNARKS and other encryption algorithms. It can be used as a standalone product or embedded within our wallets. The best implementation of ZenChat is available in our flagship app, Sphere by Horizen, although you can use it through the Swing wallet and as a standalone ZenChat app as well. Users are able to communicate 1-on-1, through group messaging, or set up dedicated private channels. Channel communication costs a minimal amount of ZEN to prevent clutter and spam. ZenChat stores messages permanently in the blockchain to prevent metadata leakage and are encrypted with algorithms such as AES-256 with Perfect Forward Secrecy (PFS), matching current standards of encryption for secure communication. Living on the blockchain, it has some limitations too: as blocks and transactions need to be small, the effective text message size is limited and you also need to prove each message as a private transaction, plus wait for confirmation in the blockchain. Because of transaction size limitation you cannot attach files to messages (but you can send links). We have some improvements in the pipeline though and soon Sphere by Horizen will receive updates which will allow using different addresses for ZenChat, allowing to send multiple messages and upcoming Sapling updates will reduce the message proving time dramatically.

The infrastructure is completely decentralized, trustless, and open source and only you can read your data. And you can use ZenChat completely anonymously. We never ask for any private identifiable data.

You can read the detailed information about ZenChat in our Horizen Section for [Beginner]({{ site.baseurl }}{% post_url /horizen/beginner/2026-01-04-zenchat %}), [Advanced]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-04-zenchat %}) and [Expert]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-04-zenchat %}) users.

![ZenChat](/assets/post_files/privacy/beginner/messaging/chat.jpg)

### Ricochet

Although an experiment according to its author, "Ricochet uses the Tor network to reach your contacts without relying on messaging servers. It creates a hidden service to rendezvous with your contacts without revealing your location or IP address. Instead of a username, you get a unique address that looks like ricochet:rs7ce36jsj24ogfw. Other Ricochet users can use this address to send a contact request by asking to be added to your contacts list. You can see when your contacts are online, and send them messages (and soon, files!). Your list of contacts is only known to your computer - never exposed to servers or network traffic monitoring. Everything is encrypted end-to-end, so only the intended recipient can decrypt it, and anonymized, so nobody knows where it’s going and where it came from."

As for more conventional messaging applications, some of the most notable ones with privacy preserving features include Signal, Threema, and Wire. securemessagingapps.com has a great comparison of these apps along with some others which are very popular and frequently used like Telegram, Skype, WhatsApp, Messenger, and others. Rather than explaining everything again here, we recommend that you go over there and compare apps using the table at the website.

![Ricochet](/assets/post_files/privacy/beginner/messaging/ricochet.png)

### Keybase

Teamwork and collaboration is another big thing today with Slack and Teams leading the pack. In case you need a privacy-preserving teamwork application, Keybase is quite a nice alternative. According to its own website, "Keybase is a new and free security app for mobile phones and computers. For the geeks among us: it's open source and powered by public-key cryptography. Keybase is for anyone. Imagine a Slack for the whole world, except end-to-end encrypted across all your devices. Or a Team Dropbox where the server can't leak your files or be hacked."

Armed with a lot of alternatives, we wish you happy and secure messaging.

<img src="/assets/post_files/privacy/beginner/messaging/keybase.png" alt="Keybase" style="width: 200px;">

