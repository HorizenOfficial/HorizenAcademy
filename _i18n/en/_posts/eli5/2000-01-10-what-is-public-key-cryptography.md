---
layout: post
type: article
title: "What is Public-Key Cryptography?"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article, you learn about public-key cryptography in a simple, understandable way."
permalink: /eli5/what-is-public-key-cryptography/
topic: eli5
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-public-key-cryptography/Keys.jpg" alt="Keys"></td>
        <td>
            Blockchains use public-key cryptography, also known as public-key encryption, to verify the identity of someone claiming to own a set of funds. Every user creates two keys when they join the network, a public, and a private key. (I've struggled unsuccessfully to find a way to distinguish the wallet, which everyone creates, and which I believe has its own key pair, with the objects objects in the blockchain, which also have their own key pair, while keeping things simple for this introduction.)
        </td>
    </tr>
</table>  

The public key is like an email address, in that you give it to anyone who wants to send you money. If a friend wants to send you some cryptocurrency, you will send them your public key. Your friend uses your public key to send you some money.

The private key is like the password to your email account, in that it can access your money and spend it, similar to how someone with your email password can log into your account and send emails in your name.

It is important to protect your private keys from everyone. If they get their hands on your private keys, they can steal your money.

If you would like to learn more you can find an article about [Public-Key Cryptography]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}) in our Technology section.
