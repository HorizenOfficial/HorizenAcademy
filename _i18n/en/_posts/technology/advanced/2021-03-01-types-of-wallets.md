---
layout: post
type: intro
title: "Types of wallets"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. In this article. you will learn about the different types of cryptocurrency wallets at an advanced level."
permalink: /technology/advanced/types-of-wallets/
topic: technology
level: advanced
chapter: "Wallets"
---

A wallet is a program to generate, manage, and store a pair of cryptographic keys. You can check your balance, receive, and send funds within a wallet. If you are unsure about a wallets main functionality you can read our introduction to wallets. The main differentiator between the different types of wallets is the physical location your keys are stored in.

![Wallet](/assets/post_files/technology/advanced/types-of-wallets/wallet2_D.jpg)
![Wallet](/assets/post_files/technology/advanced/types-of-wallets/wallet2_M.jpg)

### The Different Types of Wallets

This article should give you a better understanding of what types of wallets are available and help you identify a given wallet between the types described below. Let's have a look at this overview of the different wallet types before we go into the individual wallets in detail.

![overview](/assets/post_files/technology/advanced/types-of-wallets/overview_D.jpg)
![overview](/assets/post_files/technology/advanced/types-of-wallets/overview_M.jpg)

### Hosted Web Wallets

Before getting into web wallets, let us remember that a wallet is an interface to perform the basic operations on a cryptocurrency blockchain (viewing, receiving and sending funds) and that it needs access to your keys to do so.

This leads us to a distinction between hosted and non-hosted web wallets. With hosted web wallets, your keys are stored online by a trusted third party. These parties are mostly exchanges such as Coinbase, Binance or Bittrex. When you create an account with these entities they will create an entry in their internal database linking your account to a set of key pairs for the different coins they have listed.

![Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/hosted_webwallet_D.jpg)
![Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/hosted_webwallet_M.jpg)

An advantage with a hosted web wallet is the option to recover your password in case you forget or misplace it. Losing your private keys (together with your mnemonic phrase respectively) leads to lost funds in all other cases.

While this may sound reassuring, there are some drawbacks with hosted wallets (also called hot wallets/cloud wallets). Remember: if you don't control your keys, you don't control your funds. There is always a third party risk, no matter how trustworthy the party might seem. First, they are a more attractive target for hackers than individuals because their honeypot is much bigger. Second, a sudden change in regulation might not allow them to have you withdraw your funds in a worst-case scenario. It is unlikely, but definitely not impossible. Third, there is always a chance of an entity going bankrupt or stealing money. With the major exchanges like the ones mentioned above this risk seems small, but it does exist. For the reasons above we do advise everybody to store the keys to their funds themselves, meaning storing them in a wallet where you have control over your private keys. There is a responsibility that comes with being in charge of the safety of your funds yourself, but enabling you to do this is one of the main motivations for the existence of cryptocurrencies!

You will need to keep some funds on an exchange permanently if you plan to trade often. If you want to do this right, then your level of expertise should be exceeding this article by far anyways.

### Non-Hosted Web Wallets

Besides hosted web wallets there is also a range of non-hosted web wallets. The most popular non-hosted web wallet is likely MyEtherWallet, which can store Ether (ETH) and all ERC-20 tokens (tokens that are "living" on the Ethereum blockchain). Those wallets provide an interface to check your funds or create transactions in your web browser, but you have to provide the keys with each login.

![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/non-hosted_webwallet_D.jpg)
![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/non-hosted_webwallet_M.jpg)

There is a range of options to access your wallet with MyEtherWallet (often abbreviated as MEW). The first option requires your address but only lets you view your funds. MetaMask is a browser plugin that provides the option to make ETH payments within your browser and the ability to login to MEW. It also provides a function detecting phishing sites and warning you when you are about to open one.

The next couple of options, Ledger Wallet, Trezor, Digital Bitbox, and Secalot are hardware wallets. We will get to those later in the article. 

Accessing your wallet with a keystore /.json file is possible but not recommended. The file contains your private key and when you create your wallet you have the option to download it. If it gets into the wrong hands they will have access to your funds so saving it on your desktop is not the ideal solution. If you want to use this method, you should encrypt the .json file and store it on a separate device like a USB drive. To use it, connect the drive, decrypt the file, then select the file in your browser and voila. After that, you can disconnect your storage medium of choice again.

The last two options are more or less the same with regards to safety. You can either enter your private key directly or your mnemonic phrase (which yields your private key when hashed) which is both problematic if there is any malware like keystroking malware on your computer.   
The mnemonic phrase is a concept that is also used for all the next types of wallets to come. You will see a number of random words while creating the wallet, usually 12 or 24, that you should save.

**Important**: You should write the phrase of words down on paper or save them in any analog format you see fit, but do not save them as a .txt file on your computer or a screenshot. You don't want to make it too easy for any potential attacker.

If you break or lose your device, no matter if we are talking about a mobile, desktop or hardware wallet: your mnemonic phrase is usually your last line of defense against a loss of funds. You can reconstruct your private key by hashing your mnemonic phrase. This implies, that any attacker that gets their hands on your recovery phrase will be able to do the same. Therefore, you must protect your mnemonic phrase as well as you would protect your funds themselves.

In conclusion, a non-hosted web wallet is quite convenient and just as secure, as the method, you choose to provide your keys with.

### Desktop and Mobile Wallets

If you start off with the question "where are your keys?" the desktop and mobile wallet will give you the same answer: on the device. Phones and tablets are more powerful than ever, the difference between a desktop and mobile wallet is marginal. It is also arguable whether one is safer than the other.

By now you know the tasks a wallet performs: viewing, receiving and sending. If you want to use crypto for everyday transactions there is almost no way around keeping some funds in a mobile wallet. As mentioned before, when creating your wallet you will get a mnemonic phrase that you should keep safe. Usually, there is a PIN, password or Face-/Touch-ID protection to access the wallet. You should never keep more funds in a mobile wallet than you are willing to lose. It's the same as with cash: you don't carry around your entire money in a wallet. You withdraw as much as you are comfortable handling in cash and keep the rest in your account (or under the mattress :P).

With desktop and mobile wallets, there is a choice between single- and multi-currency options. Those should be rather self-explanatory terms. The former allows you to store one coin, while the latter supports multiple currencies. Some of the more popular examples for desktop include Coinomi and Sphere by Horizen. For mobile, there are Coinomi, Mycelium or Paytomat to name just a few.

<div class="row align-items-center">
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/coinomi.jpg" alt="coinomi"></div>
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/paytomat.jpg" alt="Paytomat"></div>
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/mycelium.png" alt="mycelium"></div>
</div>

If you got your first coins on an exchange, I would recommend you to transfer your funds out of the exchange (hosted web wallet) onto a desktop, paper, or hardware wallet. Send a fraction first to make sure everything works as planned. If your first transaction works then you would send the rest. You are now protected from third-party risk, but have full responsibility for your funds yourself.

### Paper Wallets

Grabbing our golden thread again and asking "where are the keys" give you a simple answer with a paper wallet: in your hand! A paper wallet is your public and private key pair printed on paper. Almost every cryptocurrency offers a paper wallet generator. To create a key pair you generally first have to create some entropy (a term for disorder), in other words: you want your keys to be as random as possible. This is mostly done automatically, but sometimes you will find features were you have to randomly move your mouse or hit keys on your keyboard to create randomness.

When printing your paper wallet you shouldn't use a shared printer like the one in your office. In a best-case scenario, the printer doesn't even have a WiFi/network function. Printers usually keep a copy of the files they printed last, and an attacker might exploit this.

You will end up with something looking like this after printing the wallet securely.

![paper wallet](/assets/post_files/technology/advanced/types-of-wallets/paper_wallet.jpg)

There is only one thing left to do: send funds to the public key. After that, you have a perfect gift or long term storage for your coins. The main risk with a paper wallet is you actually losing or destroying the wallet by accident. If you don't have a mnemonic phrase to recover the private key you are at risk of losing all funds on the wallet by accident. So choose wisely where to store your paper wallet. Print several copies if you feel uncomfortable having only one and store all of them in separate, safe places.

### Hardware Wallets

Moving on to everybody's darling: hardware wallets. With a hardware wallet, your keys are stored on the device in something called the "secure element". The secure element is a place to store data that cannot be directly accessed by your computer or any other device once connected. Although it does look like a simple USB drive, it can actually do a little more than just providing storage for your keys. To use a hardware wallet you usually have a few options of which interface to use with it. Like MyEtherWallet, a few other wallets offer hardware wallet support. Additionally, you have the native wallet apps provided by the producer. In the case of Ledger, for example, the native App is called Ledger Live.

Now let's get to the interesting part: how does such a wallet actually work?

The interface generates an address from your public key if you want to receive funds. Using this feature is pretty straightforward: if you click the receive button the process runs in the background and the address is displayed for you to share it with the sender. If you want to send funds the app creates the formal transaction that needs to be signed. The unsigned transaction is now sent to your hardware wallet, where it gets signed with your private key on the device. The signature is then returned to your computer and the complete transaction including the signature broadcasted to the network.

![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/signing_hardware_wallet_D.jpg)
![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/signing_hardware_wallet_M.jpg)

Your private key(s) do not leave the device, so they are not visible to the computer you are using your hardware wallet with at any time. This is why a hardware wallet is considered the most secure way of storing crypto, especially large amounts.

If your device ever breaks, you have your mnemonic phrase as a backup. At the risk of being repetitive: your mnemonic phrase, under all circumstances, must stay private and in a secure location. A copy at a trusted family member or in a bank vault might be a good idea in case of a fire, flooding or a playing dog.

### Summary

There are many ways to store your cryptocurrencies. Usually, there is a trade-off between convenience and security. The most important question is: where are the keys? A wallet is only a piece of software, an interface, that helps you perform the basic functions of cryptocurrencies: generate, manage, and store your keys. It allows you to view your balance, create an address to receive funds, and create transactions to send funds.

With a hosted online wallet you are trusting a third party to handle your keys. You have the option to recover your password if misplaced, but there is always a significant third-party risk. If you don't control your keys, you don't control your funds!

With desktop, mobile, paper or hardware wallets you own the keys and nobody but yourself is responsible for keeping them safe. If your device breaks you have a mnemonic/recovery phrase to recover access to your funds. The phrase is as sensible as your private key itself and if it gets in the wrong hands, your funds are gone. This is not supposed to scare you, but to make you cautious and aware of the risk.

This whole movement of cryptocurrencies aims to give you back the power over your money, but...

![with great power comes great responsibility](/assets/post_files/technology/advanced/types-of-wallets/with-great-power-comes-great-responsibility.gif)
