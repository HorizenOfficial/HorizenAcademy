---
layout: post
type: article
title: "Cryptocurrency Wallets"
description: "A wallet is an app for generating, managing, and storing cryptographic keys - public and private keys. You can check your balance, receive, and send funds."
permalink: /technology/advanced/types-of-wallets/
topic: technology
level: advanced
chapter: "Wallets"
---

A **wallet** is an app for generating, managing, and storing cryptographic keys - your [public and private keys](https://academy.horizen.io/technology/advanced/public-key-cryptography/).

**You can** check your balance, receive, and send funds with a wallet. Wallets generally don’t allow you to buy cryptocurrencies; that is what [exchanges](https://www.horizen.io/exchanges/) are for. _All_ exchanges provide you with wallets to store your coins in after you buy them, _but_ wallets usually don’t provide you with an exchange service.

A wallet generates a random _private key_, **sk**, derives your _public key_, **pk** using [elliptic curve cryptography](https://academy.horizen.io/technology/expert/elliptic-curve-cryptography/) and derives your address(es) from your public key. A wallet then stores your private key(s) and takes care of [signing transactions](https://academy.horizen.io/technology/expert/digital-signatures/).

**In this article,** we want to give you an overview of what types of wallets there are and help you find the right wallet for you. We show you how your _mnemonic phrase_ is generated, and how it relates to your actual private key. Depending on the wallet implementation, the process for generating your address from a private key looks slightly _different_. We also look at **multisignature schemes**, where _multiple_ private keys and _digital signatures_ can spend money from a given address.

## What Does a Wallet Do?

A wallet is a program that has three main functions:

- **Generating**, **storing** and **handling** your _keys_ and _addresses_
- Showing you your **balance**
- **Creating** and **signing** _transactions_ to send funds

![Wallet does](/assets/post_files/technology/beginner/wallets/wallet_does_D.jpg)
![Wallet does](/assets/post_files/technology/beginner/wallets/wallet_does_M.jpg)

The **first** function is the primary function and main differentiator of all wallets: _generating_, _storing_, and _handling_ your keys. **Having access to your private keys means being able to spend your money.**

Where you store your keys determines the safety of your funds and at the same time, the convenience of using them. With wallets, there is usually a trade-off between _security_ and _convenience_: Having **some** funds in your mobile wallet on your smartphone makes them easy to spend, but not very secure. Keeping **larger** amounts of money on a hardware wallet is very secure, but not as convenient when you want to spend it.

### A Wallet Acts as a Keychain

Although the term wallet might be more intuitive, the _function_ of a wallet is closer to that of a **keychain** rather than an actual wallet.

To make it crystal clear:

**You don’t actually store any cryptocurrency in your wallet.** You just store the keys to access them on the blockchain.

The blockchain records the amount of coins associated with a key pair, your identity on the blockchain. It calculates the amount of money the keys have access to based on all the transactions on the blockchain.

The **main function** of a blockchain is to store all transactions in the correct order. If you receive **10 ZEN** in a transaction and receive another **10 ZEN** later on. It is clear that you, the _owner_ of the key pair, owns **20 ZEN.**

![Wallet](/assets/post_files/technology/beginner/wallets/wallet_D.jpg)
![Wallet](/assets/post_files/technology/beginner/wallets/wallet_M.jpg)

**To spend your money**, you need the _private key_ stored in your wallet. This is why a keychain is a good analogy for what a wallet does. **If you don’t control your keys, you don’t control your funds.** You don’t need to understand how public-key cryptography works in detail in order to use cryptocurrencies, but the concept of your keys giving you access to your funds is still important to remember.

Wallets create a layer of abstraction and are becoming more and more user-friendly. Wallets show you your balance, generate an address to receive funds by just clicking “_deposit_” or “_receive_”, and provide you with a simple interface to send funds. All you need to do is enter the address that you would like to send money to and the amount you want to transfer. The signing procedure using your private key will happen in the background when you click send.

#### Transactions

A **transaction** is when you send money to someone else. When you create a transaction, you send a _message_ to the network that some of your money now belongs to somebody else. The blockchain records this message.

**For example**, _Alice_ could send **one** ZEN to her friend _Bob_. Alice will send a message to everyone on the network that she just sent Bob **one** ZEN.

When Bob wants to spend that **one** ZEN, he will create a new message to the network. **This message will say:** _"I received one ZEN from Alice and I am sending that one ZEN to someone else now"._

This is how money is sent from one person to another _without_ the help of a central third party.

![Transaction](/assets/post_files/eli5/what-is-a-transaction/transaction_D.jpg)
![Transaction](/assets/post_files/eli5/what-is-a-transaction/transaction_M.jpg)

_A wallet gets your balance from_ monitoring the blockchain for any transactions that involve your address. Initially, all transactions are _cryptographically locked_. The lock is based on the address the transaction is sent to, and can only be unlocked with the corresponding private key.

**Let’s assume this is your wallet.** You received a total of **20** ZEN in two _different_ transactions of **10** ZEN each. Now you want to spend **2** ZEN at lunch. Your wallet starts with a blank transaction and, in a first step, chooses one of your prior transactions to spend. In this case, both transactions are of sufficient value, so your wallet might randomly choose the first one.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/T2_input_D.jpg)

The money that is being spent in a transaction is called the **input**, and the money that is being received is called the **output**.

Your wallet places one of the outputs you own in the empty transaction and uses your private key to unlock it, so it becomes _spendable_ - this is what we called _signing_ the transaction. The unlocked output is now used as an input to a new transaction.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/T3_outputs_D.jpg)

Next, your wallet creates the _outputs_. It asks you for an _address_ to send money to and an _amount_. You want to send **2** ZEN to address **XYZ** to pay for your lunch, so your wallet creates the first output accordingly.

The second output is generated automatically - its called the _change output_.

Outputs are similar to cash denominations. If you need to pay **$2** **USD** but only have a **$10** bill, you expect to get **$8** in change. Your wallet automatically includes the change in the transaction. The newly generated outputs are locked by default.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/T4_broadcast_D.jpg)

**Lastly**, your wallet broadcasts the transaction to the network, where _all_ nodes and miners will verify if the signature you used to unlock your money is valid. If it is, miners will include your transaction in the next block. The output of **10** ZEN you used is from now on publicly visible as _spent_. The newly created outputs of **2** and **8** ZEN are included in a new block and locked - or _unspent_.

Then you come across the term **UTXO** - _Unspent Transaction Output_ - this is what it refers to.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/T5_confirmed_D.jpg)

When you own **10** ZEN, it means you received **10** ZEN in a transaction, and you have _not_ unlocked and spent that output, yet.

### What if I Lose My Keys?

You don’t have to ask anybody to join the network, and you don’t have to register with a central authority to create a wallet. Being able to do this comes at the cost of _you being responsible for the safety of your coins_. There is **nobody** that can help you recover your keys if you lose them.

If anybody were able to recover your keys for you, they would also be able to _steal_ your funds. This would eliminate the trustless aspect of blockchains. You may have heard stories about people searching for old hard drives because they have “lost their Bitcoins”. _More accurately_, they lost the keys to _access_ their Bitcoin.

But there is a sort of recovery mechanism with many wallets called a _mnemonic phrase_, or backup phrase. A **mnemonic phrase** usually consists of **12** or **24** words. With these words, you can recover your keys. You receive your mnemonic phrase when you install and set up your wallet.

It’s **essential** to understand that your backup phrase is just as important as your private key itself. If **anybody** gets their hands on your backup phrase, they can access your money. Saving it as a screenshot or text file on your computer is not a good idea!

## Types of Cryptocurrency Wallets

![overview](/assets/post_files/technology/advanced/3.0-types-of-wallets/overview_D.jpg)
![overview](/assets/post_files/technology/advanced/3.0-types-of-wallets/overview_M.jpg)

### Hosted Web Wallets

We can distinguish between _hosted_ and _non-hosted_ web wallets. With **hosted web wallets**, your keys are stored online by a trusted third party. These parties are mostly exchanges such as **Coinbase**, **Binance**, or **Bittrex**. When you create an account with these entities, they will create an entry in their internal database linking your account to a set of _key pairs_ for the different coins they have listed.

![Hosted Web Wallets](/assets/post_files/technology/advanced/3.0-types-of-wallets/hosted_webwallet_D.jpg)
![Hosted Web Wallets](/assets/post_files/technology/advanced/3.0-types-of-wallets/hosted_webwallet_M.jpg)

An **advantage** to a hosted web wallet is the _option_ to recover your password in case you forget or misplace it. Losing your private keys, together with your mnemonic phrase, leads to a loss of funds _in all other cases_.

While this may sound reassuring, there are some drawbacks with hosted wallets, which are also called **hot wallets** or _cloud wallets_. **Remember**: if you don't control your keys, you don't control your funds. There is _always_ a third party risk, no matter how trustworthy the party might seem.

**First**, they are a more attractive target for hackers than individuals because their honeypot is much bigger.

**Second**, a sudden change in regulation might not allow them to allow you to withdraw your funds in a worst-case scenario. It is unlikely, but definitely not impossible.

**Third**, there is _always_ a chance of an entity going _bankrupt_ or stealing money. With major exchanges like the ones mentioned above, this risk seems small, but it does exist. Just ask former Mt. Gox customers.

For these reasons, we advise **everybody** to store the keys to their funds themselves. This means storing them in a wallet where you have control over your private keys. There is a responsibility that comes with being in charge of the safety of your funds yourself, _but_ enabling you to do this is one of the main motivations for the existence of cryptocurrencies!

You _will_ need to keep some funds on an exchange if you plan to trade often.

### Non-Hosted Web Wallets

Besides hosted web wallets, there is also a range of _non-hosted web wallets_. One of the most popular non-hosted web wallet is likely **MyEtherWallet**, which can store _Ether_ (**ETH**) and _all_ **ERC-20** tokens, tokens that are "living" on the **Ethereum** blockchain. These wallets provide an interface to check your funds or create transactions in your web browser, _but_ you have to provide the keys with each login.

![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/3.0-types-of-wallets/non-hosted_webwallet_D.jpg)
![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/3.0-types-of-wallets/non-hosted_webwallet_M.jpg)

There are a range of options to access your wallet with MyEtherWallet, often abbreviated as **MEW**. The **first** option requires your address, but only lets you view your funds.

**MetaMask** is a browser plugin that provides the option to make ETH payments _within_ your browser _and_ the ability to login to MEW. It also provides a function detecting phishing sites and warning you when you are about to open one.

The following options, _Ledger_ _Wallet_, _Trezor, Digital Bitbox_, and _Secalot_ are **hardware wallets**. We will get to those later in the article.

Accessing your wallet with a **keystore**, or **.json file**, is possible, but not recommended. The file contains your private key, when you create your wallet, you have the option to download it. I*f it gets into the wrong hands*, they will have access to your funds, so saving it on your desktop is not the ideal solution. If you want to use this method, you should **encrypt** the .json file and store it on a separate device like a _USB_ drive. **To use**, connect the drive, decrypt the file, then select the file in your browser and voila. After that, you can disconnect your storage medium of choice again.

The _last two_ options are more or less the same with regards to safety. You can _either_ enter your private key directly _or_ your mnemonic phrase, which yields your private key when hashed, which are both problematic if your machine is compromised.

**In conclusion**, a non-hosted web wallet is quite convenient and just as secure as the method you choose to provide your keys with.

### Desktop Wallets and Mobile Wallets

If you start off with the question "_where are your keys?_", the desktop and mobile wallet will give you the same answer: **on the device.** _Phones_ and _tablets_ are more powerful than ever, the _difference_ between a desktop and a mobile wallet is _marginal_. It is also arguable whether one is safer than the other.

**By now you know the tasks a wallet performs:** _viewing_, _receiving_ and _sending_. If you want to use crypto for everyday transactions, _there is almost no way around keeping some funds in a mobile wallet_. As mentioned before, when creating your wallet, you will get a mnemonic phrase that you should keep safe. Usually, there is a **PIN**, **password** or **Face/Touch-ID** protection to access the wallet. **_You should never keep more funds in a mobile wallet than you are willing to lose_**.

**It's the same as with cash:** you don't carry around all your money in a wallet. You withdraw as much as you are comfortable handling in cash and keep the rest in your account or under the mattress.

With **desktop** and **mobile wallets**, there is a choice between _single_ and _multi-currency_ wallets. Those should be rather self-explanatory terms. The _former_ allows you to store **one** coin, while the _latter_ supports **multiple** currencies. Some of the more popular examples of _desktop_ wallets include **Coinomi** and [**Sphere by Horizen**](https://www.horizen.io/spherebyhorizen/). For _mobile_, there are _Coinomi_, **Mycelium** or **Paytomat**, just to name a few.

If you get your first coins on an exchange, **I would recommend** you transfer your funds out of the exchange from the hosted web wallet, onto a _desktop_, _paper_, or _hardware wallet_. **Send a fraction first to make sure everything works as planned.** If your first transaction works, then you can send the rest. You are now protected from third-party risk, _but have full responsibility for your funds yourself_.

### Paper Wallets

Referencing our golden thread again and asking "_where are the keys_" gives you a simple answer with a [_paper wallet_](https://zenpaperwallet.com): **in your hands!** A **paper wallet** is your public and private key pair printed on paper. Almost _every_ cryptocurrency offers a paper wallet generator. To create a key pair, you _generally_ **first** have to create some entropy, a term for disorder. **In other words**: _you want your keys to be as random as possible_. This is mostly done automatically, but sometimes you will find features where you have to randomly move your mouse or hit keys on your keyboard to create randomness.

When _printing_ your paper wallet, you **should not** use a _shared_ printer, like the one in your office. In a _best-case scenario_, the printer doesn't even have an internet connection. Printers _usually_ keep a copy of the files they printed last, and an _attacker might exploit this._

You will end up with something looking like this after printing the wallet.

![paper wallet](/assets/post_files/technology/advanced/3.0-types-of-wallets/paper_wallet.png)

**There is only one thing left to do**: send your coins to the public key. After that, you have a perfect long term storage solution for your coins. **The main risk** with a paper wallet is you actually _losing_ or _destroying_ the wallet by accident. If you don't have a mnemonic phrase to recover the private key, you are at risk of losing **all funds** on the wallet. **So choose wisely where to store your paper wallet**. Print several copies if you feel uncomfortable having only one and store all of them in separate, safe places.

### Hardware Wallets

Moving on to everybody's darling: _hardware wallets_. With a **hardware wallet**, your keys are stored on the device in something called the _secure element_. The **secure element** is a place to store data, in this case your keys, that _cannot_ be directly accessed by your computer or any other device even when it is connected.

Although it does look like a simple USB drive, it can actually do more than just providing storage for your keys. To use a hardware wallet, you usually have a few options of which interface to use. Like MyEtherWallet, a few other wallets offer hardware wallet support. _Additionally_, you have the _native wallet apps_ provided by the producer. In the case of **Ledger**, for example, the native app is called **Ledger Live**.

#### How Does a Hardware Wallet Work?

The interface generates an address when you want to receive funds. **Using this feature is pretty straightforward:** if you click the receive button, the process runs in the background and the address is displayed for you to share with the sender.

If you want to send money, the app creates the _raw transaction_ that needs to be _signed_. The _unsigned_ transaction is now sent to your hardware wallet, where it gets signed with your _private key_. The signature is then returned to your computer and the complete transaction, including the signature, is broadcasted to the network.

![signing hardware wallet](/assets/post_files/technology/advanced/3.0-types-of-wallets/signing_hardware_wallet_D.jpg)
![signing hardware wallet](/assets/post_files/technology/advanced/3.0-types-of-wallets/signing_hardware_wallet_M.jpg)

**Your private key(s) do not leave the device**, _so they are not visible to the computer you are using your hardware wallet with at any time_. This is why a hardware wallet is considered the most secure way of storing crypto, especially large amounts.

If your device ever breaks, you have your mnemonic phrase as a backup. At the risk of being repetitive: your mnemonic phrase, under all circumstances, **_must stay private and in a secure location_**. A copy at a trusted family member or in a bank vault might be a good idea in case of a fire or flood.

## Generating Entropy and a Mnemonic Phrase

The basis for generating keys and addresses is _randomness_. Ownership on the blockchain is highly secure, as long as the private key **cannot** be reproduced by an adversary. The private key is the basis of the public key and address(es). As such, it requires a _high level_ of security, and needs to be generated from a high level of **entropy**.

There are different sources for entropy, such as hardware, user input, microphone, and camera inputs. _Preferably_, some of the entropy is hardware based and uses more than a single source. Human based entropy is usually less random and _therefore_ less secure.

The initial entropy is used as a seed for a _deterministic random bit generator_ (**DRBG**), also called _pseudorandom number generator_ (**PRNG**). _DRBGs_ should be standardized and validated. One example for a vetted algorithm is the **NIST SP800-90A** compliant method. The deterministic random bit generator produces a _seed_, which we then use to generate your mnemonic phrase.

### Your Mnemonic Phrase

Your **mnemonic phrase** is a _backup_ of your private key that is used by most wallets. It is a list of _random_ words given to you when creating a wallet. If you break or lose a device with a wallet - no matter if mobile, desktop or hardware wallet - your mnemonic phrase is usually your last line of defense against a loss of funds.

**This implies that any attacker that gets their hands on your recovery phrase will be able to do the same**. Therefore, you must protect your mnemonic phrase as well as you would protect your funds themselves. **_You should write the phrase of words down on paper or save them in any analog format you see fit_**.

The mnemonic phrase mechanism that you are likely familiar with was introduced with the _Bitcoin Improvement Proposal 39_, or [**BIP-0039**](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). A _mnemonic phrase_ uses _commonly known words_, which are used to provide a less error-prone backup mechanism than writing down your private key in a format like **base58**, **hexadecimal**, or **binary**.

In total, there are **2048** words a mnemonic phrase may comprise, each of them _unambiguously_ identifiable by its first four letters. Similar words or different versions of the same word are not included, for example, build/built or woman/women.

![Generating a Mnemonic Phrase from a Seed](/assets/post_files/technology/expert/3.0-wallets/mnemonic-phrase-generation_D.jpg)
![Generating a Mnemonic Phrase from a Seed](/assets/post_files/technology/expert/3.0-wallets/mnemonic-phrase-generation_M.jpg)

**The process for generating your personal mnemonic goes as follows:**

- **First**, a multiple of **32** bits, between **128** and **256** bits total, is generated. Let’s use an example with a **256-bit seed**.
- **Second**, a _checksum_ is calculated by **SHA256**-hashing the seed. The first **x** bits of the checksum are appended to the end of the seed and **x** is the number of initial bits divided by **32**. Using a **256-bit** seed, this results in an **8** bit checksum.
- **Third**, the concatenated bits are split into groups of **11** bits each. We get **24** groups for our example.
- **Fourth**, each **11** bit group is “_translated_” into the corresponding word from the list of _mnemonic_ words. **11** bits can encode the values between **0** and **2047**, each matching a word in the list of **2048** words.

Now that we have a mnemonic phrase, it needs to be converted into a _binary seed_. The **PBKDF2** function takes the mnemonic phrase as the password and the _string mnemonic_ + _passphrase_ as the **salt**. _PBKDF2_ takes this input and applies a **pseudorandom function** - here **HMAC-SHA512** - to it, in this case **2048** times. The final output is the _derived_ seed of **512** bits length. This seed can now be used as an input for different key derivation methods, such as the _hierarchical deterministic_ key derivation.

## Key Derivation

Going forward, we'll use the term **key generation** to refer to the random generation of private keys and **key derivation** to refer to the path from a private key to the public key and an address.

There are instances when it is _desirable_ to be able to generate different addresses from a single seed or private key. By using a new address for each incoming transaction, as well as to _change outputs,_ your privacy is enhanced because it becomes harder to link transactions to a single user. There are different approaches to get those addresses.

One could go through the _entire_ process of key generation and derivation for each address, but this would require the user to keep backups for each individual key. This approach is called **non-deterministic key generation**. While this approach mitigates the risk of losing all your funds at once in the case you lose a private key and/or mnemonic phrase, it certainly makes for a bad user experience.

Being able to securely produce _several child_ keys from a _single_ parent key creates a better UX in basic wallets, and also allows multi-currency wallets to be backed up with a _single_ mnemonic. This single mnemonic derives a key pair for each chain.

### Hierarchical Deterministic Wallets

**Hierarchical Deterministic Wallets** were introduced with [**BIP-0032**](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki). The general idea is to take a _master_ private key and use it to generate _multiple_ secure child keys.

Before we dive into different key derivation methods, we need to introduce a concept we’ve omitted thus far. The **512-bit** seed we obtained from our mnemonic phrase by applying the **PKKDF2** function is split into **two** parts: a _zero-level private key_ and a **256-bit** _chain code cc_.

The **chain code** is used as a key to the **HMAC-SHA256** pseudorandom function that takes _two_ pieces of input, the **data** and a **key**, to produce a single **512-bit** output. The **HMAC-SHA256** function is used at several steps in the key derivation process.

**To recap what we did thus far:**

- We _generated_ a random bit sequence and used it as an input to a deterministic random bit generator that produced a **seed**.
- From this _seed,_ we _generated_ a **mnemonic phrase**, which in turn was converted into a **512-bit binary seed**.
- We _split_ our seed into the zero-level private key **\\(sk_0\\)** and the zero-level chain code **\\(cc_0\\)**. A zero-level public key **\\(PK_0\\)** is generated from **\\(sk_0\\)** using elliptic curve cryptography

#### Hardened vs. Non-Hardened Secret Key Derivation

When looking at the key derivation in HD wallets, we can generally differentiate between _hardened secret key derivation_ (**HSKD**) and _non-hardened secret key derivation_ (**NSKD**). The difference lies in the inputs used to generate first-level keys.

![Hardened vs. Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/nskd-vs-hskd_D.jpg)
![Hardened vs. Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/nskd-vs-hskd_M.jpg)

**Additionally**, we need to introduce the variable **i** at this point. It is a **32-bit** integer that is used to derive different keys with index **i** from a single zero-level key. By convention, the total range of possible values of **i** is split between **HSKD** and **NSKD**, giving both methods the option to create **2147483648** different first-level keys from a single zero-level key.

The hardened secret key derivation takes the zero-level private key **\\(sk_0\\)**, the zero-level chain code **\\(cc_0\\)** and the integer **i** as an input. By convention, the top of the integer range, from **\\(2^{31}\\)** to **\\(2^{32}-1\\)**, of **i**, is used for the hardened secret key derivation method.

In other words, using the **HSKD** method, the first-level private key **\\(sk_1\\)** is a function of three values:

$$
sk_1 = HSKD(sk_0, c_0, i)
$$

The _non-hardened secret key derivation_ (**NSKD**) additionally takes the zero-level public key **\\(PK_0\\)** into account. In the non-hardened secret key derivation method, **i** will by convention take on values between **0** and **\\(2^{31}-1\\)**, so the lower half of the total range of **i**.

In other words, using the **HSKD** method the obtained first-level private key **\\(sk_1\\)** is a function of four values:

$$
sk_1 = NSKD(sk_0, PK_0 c_0, i)
$$

### Hardened Secret Key Derivation (HSKD)

The core function that the key derivation is build around is the _hash-based message authentication code_ (**HMAC**). It is a specific type of message authentication code involving a _cryptographic hash function_ and a _secret cryptographic key._ It always uses some hash function, which is then appended to name the exact function. In this specific case, the **SHA512** hash function is used and the message authentication code is called **HMAC-SHA512**. _HMAC_ consumes several inputs. For our purposes we group them into two: the _key_ and the _data_.

![Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hskd_D.jpg)
![Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hskd_M.jpg)

For the _HSKD_ method, the concatenation of **\\(sk_0\\)** and our variable integer **i** is used as the data and the zero-level chain code **\\(c_0\\)** as the key.

The resulting **512-bit** output is split into two parts of **256** bits each. The **first** half becomes our first-level private key **\\(sk_1\\)**, the **second** half our first-level chain code **\\(cc_1\\)**. By applying elliptic curve cryptography to **\\(sk_1\\)** we can obtain our first-level public key **\\(PK_1\\)**.

By incrementing **i** we can generate **\\(2^{31}\\)** or **2147483648** different first level private keys and chain codes.

#### Non-Hardened Secret Key Derivation (NSKD)

We can also derive a first level private key using a combination of our zero-level public key **\\(PK_0\\)**, zero-level secret key **\\(sk_0\\)** and our zero-level chain code **\\(cc_0\\)**. This method is called _Non-Hardened Secret Key Derivation_ (**NSKD**).

![Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/nskd_D.jpg)
![Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/nskd_M.jpg)

Again, we will use the **HMAC-SHA256** function, but this time we use the concatenation of **\\(PK_0\\)** and **i** as out _data_ and once again **\\(cc_0\\)** as our _key_. Again, the resulting **512-bit** output is split into two parts of **256** bits each. While the _second_ part becomes our first level chain code **\\(cc_1\\)** as it did in the _HSKD_ method, the first **256** bits are handled differently.

It doesn't yield our first level private key directly, but instead an [_addition modulo N_](https://www.oxfordreference.com/view/10.1093/oi/authority.20110803100203745) with the initial private key **\\(sk_0\\)** is performed in order to obtain the first level private key. _Lastly_, **ECC** is used to generate our first level **NSKD** public key **\\(PK_1\\)**.

Now imagine a case where a large number of addresses, or public keys respectively, need to be generated on a continuous basis - think a merchant accepting crypto payments. Both methods described before, **HSKD** and **NSKD** need access to the zero-level private key to compute new child keys and hence addresses.

The zero-level private key is also the key that will allow the merchant to spend the money they received, so they should never host this process on the same server that the payment logic resides on. Meet **NPKD** - the _Non-Hardened Public Key Derivation_ method.

#### Non-Hardened Public Key Derivation (NPKD)

Using the **Non-Hardened Public Key Derivation** method, our zero level private key \\(sk_0\\) isn't needed at all. The first steps in the **NPKD** method are analogous to the **NSKD** method.

![Non-Hardened Public Key Derivation](/assets/post_files/technology/expert/3.0-wallets/npkd_D.jpg)
![Non-Hardened Public Key Derivation](/assets/post_files/technology/expert/3.0-wallets/npkd_M.jpg)

The concatenation of **\\(PK_0\\)** and **i** is used as _data_ and **\\(cc_0\\)** as our _key_. Again, the resulting **512-bit** output is split into two parts of **256** bits.

The first **256** bits are used as an input to the _ECC_ module, producing an intermediary result we call **\\(PRE_1\\)**. Applying the addition module **N** together with our zero-level public key **\\(PK_0\\)** we get a first level public key **\\(PK_1\\)** without having to touch **\\(sk_0\\)** at all.

Spending funds received at an address derived from a first-level public key yielded from this method works with **\\(sk_0\\)**, as the first-level public key obtained using **NPKD** is equivalent to the first-level public key produced with the **NSKD** method.

## Benefits of MultiSig

**First**, requiring several valid signatures diffuses the responsibility for keeping coins between several people. **For instance**, a married couple could have _two_ individual private keys and _two_ types of _Multi Signature, or MultiSig_, accounts. **One** account could act as a _spending account_, meaning either one of the two private keys can initiate a transaction. **The other** account could act as a savings account, which would require _both_ keys to sign off before sending any outgoing transactions.

The _spending_ account in this example would be called a **1-of-2 scheme**: There are a total of **2** keys that can provide valid signatures and **1** of them is required to authorize a transaction. The _savings_ account is a **2-of-2 scheme**: **2** keys can provide a valid signature, and both are required to sign a valid transaction.

**Second**, you reduce the risk of losing access to your money or being hacked, by keeping funds in a MultiSig address and storing your keys in _different_ locations. You could store your money in a _2-of-3 address_ and keep the three keys on your **laptop**, your **phone** and a **hardware wallet**. If one of those devices breaks, you can still access your funds and an attacker would need to compromise two devices to steal money. _Hence_, this setup eliminates single points of failure.

For larger amounts, **3-of-5 MultiSig** schemes can be used. Casa offers solutions for 3-of-5 MultiSig schemes where they store one key for you. As long as you have access _to two of your keys_, you will always be able to recover your funds.

### How MultiSig Works

The spending conditions of a UTXO are defined in the _pubkey script_. It essentially determines the verification process of the transaction.

![Spending from a regular P2PKH Single Signature Address](/assets/post_files/technology/expert/3.0-wallets/single-sig-spending_D.jpg)
![Spending from a regular P2PKH Single Signature Address](/assets/post_files/technology/expert/3.0-wallets/single-sig-spending_M.jpg)

A regular “single-signature” transaction _only_ involves the verification of one signature. The **Pubkey Script** is based on the public key that the money is sent to. The digital signature that can authorize spending of this money must be based on the corresponding private key.

![Spending from a P2SH Multi-Signature Address](/assets/post_files/technology/expert/3.0-wallets/multi-sig-spending_D.jpg)
![Spending from a P2SH Multi-Signature Address](/assets/post_files/technology/expert/3.0-wallets/multi-sig-spending_M.jpg)

The spending conditions for MultiSig transactions are defined in a so-called redeem script. The hash of the redeem script functions as an address - a _Pay to Script-Hash_ (**P2SH**) address. This address and the information contained in the redeem script is included in the _pubkey_ script.

The redeem script of a multisig account entails the minimum number of signatures **M** that must be provided, as well as the set of keys **N** that can provide a valid signature. Redeem scripts can also involve other conditions, such as a time-sensitive component where funds are only spendable after a certain amount of time has elapsed.

#### Creating a Multi Signature Address

Imagine Alice bought ZEN on an exchange and wants to store them using a MultiSig setup. This means she needs to create a multi signature address and withdraw her funds to it.

![Generation of a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/multisig-address-generation_D.jpg)
![Generation of a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/multisig-address-generation_M.jpg)

- **First**, she _generates_ a set of _private keys_. The number of keys generated depends on the MultiSig scheme she wants to use. Let’s assume she wants to setup a simple **1-of-2 scheme**, she generates two keys, either one of which is sufficient to authorize a transaction.
- **Second**, she _creates_ the _redeem script_. It contains the information about the scheme used, _1-of-2_ in Alice’s case, and the two public keys corresponding to the two private keys generated in the _first_ step.
- **Third**, she _hashes_ the _redeem script_. The hash of the redeem script is encoded into a **P2SH** address.
- **Lastly**, she _withdraws_ her _money_ from the exchange to her **P2SH** address.

There are several wallet implementations that offer multi signature support. This means, the wallet takes care of generating the keys and generating the redeem script. It also stores the _unhashed_ redeem script. This is necessary because one needs to provide the redeem script to be able to spend the funds. **The full redeem script only becomes part of the blockchain when Alice spends money from her MultiSig address for the first time**. It is also possible to regenerate it on demand, based on the **N** defined public keys.

### Spending from a Multi Signature Address

Verification of a transaction from a **P2SH** address involves checking if the redeem script hashes to the redeem script hash included in the _UTXO’s_ pubkey script. In a second step, they will verify if the provided digital signature(s) satisfy the public key-based spending conditions included in the full redeem script.

![Spending from a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/multisig-address-spending_D.jpg)
![Spending from a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/multisig-address-spending_M.jpg)

**To spend from a P2SH address, the following steps are necessary:**

- **First**, Alice will use the **UTXO** from the funding transaction and use it as an input to her spending transaction.
- **Second**, she places the full redeem script in the signature script part of the output.
- **Third**, she creates the required amount of digital signatures using her private keys. If we follow the example from above, she is using a **1-of-2** signature scheme and a single signatures created with either key **A** or **B** will suffice.
- **Lastly**, the transaction is broadcast to the network.

When the transaction is broadcast, the _full redeem script becomes public_. This means that observers will know the address being used is a MultiSig address and the different spending conditions. This is _undesirable_, as it compromises privacy. Two improvements are actively being worked on and are likely being implemented on various blockchains in the not-so-distant future.

### MultiSig Improvements - Mast and Schnorr

The **first** is called _Merkelized Abstract Syntax Trees_ (**MAST**). Here, the spending conditions are arranged in a _merkle tree_ structure and the _merkle root_ is included instead of the redeem script hash. By providing the fulfilled scrip conditions, _redeemScripts_, and the _merkle path_, a node can verify if a transaction is valid but _does not learn_ anything about the other unfulfilled spending conditions.

The **second** improvement over traditional multi signature transactions comes with **Schnorr signatures**. They comprise two main aspects: _signature aggregation_ and _key pair concealment_.

**Signature aggregation** allows several signatures to be combined into a single signature. This provides better privacy, as the aggregate public key is indistinguishable from a regular private key and an observer cannot link several public keys to one another. _Schnorr signatures_ also come with increased efficiency. They produce _much_ less data compared to an un-aggregated multi signature transaction.

**Key pair concealment** allows the modification of private keys and public keys.

> _“As a simplified example, a private key and its corresponding public key could be tweaked by multiplying both by two. The “**private key x 2**” and the “**public key x 2**” would still correspond, and the “**private key x 2**” could still sign messages that could be verified with the “**public key x 2.**” Anyone unaware that the original key pair was tweaked wouldn’t even see any difference; the tweaked keys look like any other key pair.”_ - [**Aaron van Wirdum**](https://bitcoinmagazine.com/technical/taproot-coming-what-it-and-how-it-will-benefit-bitcoin)

**Using a multi signature scheme to secure your funds comes with a security-convenience trade-off:**

- The _more_ keys **M** are required to sign a transaction, the _more_ cumbersome the process of spending money becomes.
- The _larger_ the total number of keys **N** included in the MultiSig scheme, the _more_ devices and backups need to be maintained.
- Alternatively, the overall security of the account is _increased_ with a larger **M**. The difference between **M** and **N** is the number of keys a user can lose while being able to recover their funds. **It is up to the individual user to determine if the added complexity is justified.**

## Summary

A **wallet** is a program that helps you manage your keys and create transactions easily. Your wallet looks at the blockchain to determine _how much money_ you own by reviewing the transaction history. To send funds, it writes a transaction and signs it, meaning the wallet encrypts it with your private key

There are many ways to store your cryptocurrencies. _Usually_, there is a trade-off between convenience and security. The most important question is: _where are the keys?_ **A wallet is only a piece of software, an interface, that helps you perform the basic functions of cryptocurrencies:** *view your balance, create an address to receive funds, and create transactions to send fund*s.

With a _hosted online wallet_ you are trusting a third party to handle your keys. You have the option to recover your password if misplaced, but there is always a _significant_ third-party risk. **If you don’t control your keys, you don’t control your funds!**

With _desktop, mobile, paper or hardware wallets_ you own the keys and nobody but yourself is responsible for keeping them safe. If your device breaks you have a _mnemonic/recovery phrase_ to recover access to your money. The mnemonic phrase is a list of words that can be used to restore your private key. The mnemonic phrase is as sensible as your private key itself and if it gets in the wrong hands, your money can be stolen. _This should not scare you, but make you cautious._

The _first_ step in generating keys is to produce a random private key. Different sources for entropy generation can be used, and it’s advisable to use several sources of entropy for added security. Mnemonic phrases are generated by splitting the initial _entropy_ into groups and mapping each group to a word.

There are different ways to derive a public key from a private key, the difference being the type of inputs. Most wallets today are _hierarchical deterministic wallets_ that can create several key pairs from an initial entropy source. This is good for the user because they only need a single key to generate several separate accounts, even across different blockchains.

Several wallets support more advanced _multi-signature transactions_. They are classified as **N-of-M** schemes, where a minimum of **N** keys out of a set of **M** keys are needed to authorize spending. _MultiSig wallets_ can be used to divide responsibility for storing money between several parties, increasing security. A single entity might also choose to set up a MultiSig account and store the keys in several locations.

We also looked under the hood of multi signature transactions. The conditions for spending from a multi signature account are defined in a _redeem script_. The hash of the redeem script is placed in the _pubkey script_ of a transaction output. The pubkey script is always the location where spending conditions are defined. In order to spend money from such an account, you will need the _full_ unhashed redeem script, as well as the minimum amount of required digital signatures.
