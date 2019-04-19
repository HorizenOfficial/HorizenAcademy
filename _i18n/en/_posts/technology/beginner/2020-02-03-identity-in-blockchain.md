---
layout: post
type: article
title: "Identity in Blockchain"
description: "We explain where cryptography enters the scene and what it has to do with identity, ownership and your key pair."
permalink: /technology/beginner/identity-in-blockchain/
topic: technology
level: beginner
chapter: "How Does a Blockchain Work?"
further_reads: [the_impact_of_digital_identity, how_blockchain_can_solve_identity_management_problems]
---

In our last article talking about the elements of a blockchain, we concluded that miners are the bookkeepers of a cryptocurrency. They keep track of how much funds there are and who owns them. We must introduce the concept of identity to have ownership. You want to be the sole owner of your funds and there must be a way to associate the funds with you. Let's talk about where cryptography enters the scene and what this has to do with your identity.

### Public-Key Cryptography

One of the core concepts that make cryptocurrencies work is the concept of _asymmetric cryptography_ also known as _public-key cryptography_.

With symmetric cryptography, you encrypt and decrypt text with the same key (like a padlock).

![Symmetric](/assets/post_files/technology/beginner/identity-in-blockchain/symmetric_D.jpg)
![Symmetric](/assets/post_files/technology/beginner/identity-in-blockchain/symmetric_M.jpg)

With asymmetric cryptography, you encrypt and decrypt text with two different keys, the public key, and the private key. The keys always come in pairs. If you encrypt a message with a public key it must be decrypted with the corresponding private key and vice versa. This boils down to a simple concept: Your key pair is your identity on the blockchain.

![Asymmetric](/assets/post_files/technology/beginner/identity-in-blockchain/asymmetric_D.jpg)
![Asymmetric](/assets/post_files/technology/beginner/identity-in-blockchain/asymmetric_M.jpg)

### Your Key Pair is Your Identity

This boils down to a simple concept: Your key pair is your identity on the blockchain.

The idea in cryptocurrencies is that you are receiving funds with your public key and spending them with your private key. Those keys were intentionally named public and private key. You can share your public key with anybody that wants to send you funds. Your private key, as the name suggests, should remain private under all circumstances, because it allows you to spend your funds. If somebody else gets their hands on your private key, they can access and steal your funds.

The real life comparison you will hear most often is your public key being like your address. You can give it to anybody that wants to send you a letter. Your private key is like the key to your postbox. Only this key lets you access your mail and you wouldn't hand it to a stranger. If you want to learn about this concept in more detail, you will find a more in-depth explanation in the intermediate section and an exact description in the advanced section.  
A **transaction** is a standardized message to the network. This message includes how much of your funds you want to send, and to whom. This information is then encrypted with your private key, a step we call _signing a transaction_.

![Signing](/assets/post_files/technology/beginner/identity-in-blockchain/signing_D.jpg)
![Signing](/assets/post_files/technology/beginner/identity-in-blockchain/signing_M.jpg)

A digital signature works similar to how you authorize real-life transactions using your "analog" signature. Even with modern supercomputers, it is infeasible to forge such a digital signature. Therefore public-key cryptography is one of the safest means of encryption available today.

All of this would be cumbersome to do manually and require quite some skill. Luckily there are wallets that help you do all the above without having to understand how it works. Wallets generate and manage your keys and do all the necessary encryption and decryption. What is important, is to understand that your private key authorizes the spending of your funds. Keeping it safe is the first and most important lesson. Nobody can help you recover your keys in case you lose them.

### Summary

Your key pair is your identity on the blockchain. Your public key is like your address and used to receive funds. Whereas your private key is like a password, it lets you (or anybody that gets their hands on it) spend your funds. Always protect your private keys and never hand them out to other parties! If anybody asks you for your private key it is most certainly a scam.

