---
layout: post
type: intro
title: "Wallets Advanced"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/wallets-advanced/
topic: technology
level: expert
chapter: "Wallets"
published: false
---

By now you most likely know what a wallet is and what it does. A wallet generates a random private key *sk*, derives your public key *pk* using [*elliptic curve cryptography*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}) and derives your address(es) from you public key. A wallet then stores your private key(s) and takes care of [*signing* transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}).

In case this is completely new to you, please take a look at the Beginner or Advanced level articles on wallets. You can do so by simply adjusting the level in the top left corner of the sidebar (or within the menu if you are on mobile).

In this article, we want to introduced some of the more advanced technical concepts that are applied in modern wallets. First, we will show you how your mnemonic phrase is generated and how it is related to your actual private key. Depending on the wallet implementation, the process for generating your address from a private key looks slightly different. We also look at *multisignature schemes*, where more than one private key and digital signature can spend money from a given address.

## Generating Entropy

https://privatekeys.org/2017/09/03/private-key-generation-in-bitcoin-wallets-as-defined-in-bip-0039/

The basis for the generation of keys and addresses is randomness. Ownership on the blockchain is highly secure, as long as the private key cannot be reproduced by an adversary. To prevent this from happening, the private key which is the basis for the public key and address(es) needs to be generated from a high level of entropy.

There are different sources for entropy, they can be based on hardware, user input or microphone and camera inputs. Preferably, some of the entropy source is hardware based and more than a single source of entropy is used. Human based entropy is usually less "random" and therefore less secure.

The initial entropy is than used as a seed for a *deterministic random bit generator* (DRBG), also called *pseudorandom number generator* (PRNG). DRBGs should be standardized and validated. One example for a vetted algorithm is the NIST SP800-90A compliant method. The deterministic random bit generator produces a *seed*, which we will than use to generate your *mnemonic phrase*.

## Generating the Mnemonic Phrase

The mnemonic phrase that you likely know from most wallet implementations today was introduced with the [Bitcoin Improvement Proposal 39 (BIP-0039)](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). A mnemonic phrase is a set of commonly known words, which are used to provide a less error-prone backup mechanism compared to writing down your private key in a different format like base58, haxadecimal or even binary.

In total, there are 2048 words a mnemonic phrase may comprise, each of them unambiguously identifiable by its first four letters. Similar words or different versions of the same word are not included, e.g. build/built or woman/women.

![Generating a Mnemonic Phrase from a Seed](/assets/post_files/technology/expert/3.0-wallets/mnemonic-phrase-generation_D.jpg)
![Generating a Mnemonic Phrase from a Seed](/assets/post_files/technology/expert/3.0-wallets/mnemonic-phrase-generation_M.jpg)

The process for generating your personal mnemonic goes as follows:

* First, a multiple of 32 bits (between 128 and 256 bits total) are generated. Let's do an example with a 256-bit seed.
* Second, a checksum is calculated by SHA256-hashing the seed. The first *x* bits of the checksum are appended to the end of the seed and *x* is the number of initial bits divided by 32. In our example using a 256-bit seed this results in an 8 bit checksum.
* Third, the concatenated bits are split into groups of 11 bits each. We get 24 groups for our example.
* Fourth, each 11 bit group is "translated" into the corresponding word from the list of mnemonic words. 11 bits can encode the values between 0 and 2047, each matching a word in the list of 2048 words.

Now, that we have a mnemonic phrase it needs to be converted into a binary seed. The [*PBKDF2 function*](https://en.wikipedia.org/wiki/PBKDF2) is used for that purpose taking as an input the mnemonic as the password and the string *mnemonic + passphrase* as the [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)). PBKDF2 takes this input and applies a pseudorandom function (here HMAC-SHA512) to it subsequently, in this case 2048 times. The final output is the derived seed of 512 bits length. This seed can now be used as an input for different key derivation methods, such as the *hierarchical deterministic* key derivation.

## Key Derivation

**Note:** Going forward we use the term *key generation* to refer to the random generation of private keys and *key derivation* to refer to the path from a private key to the public key and lastly, an address.

For different reasons it is desirable to be able to generate different addresses from a single seed or private key. By using a new address for each incoming transaction, as well as *change outputs* privacy is enhanced as it becomes harder to link transactions to a single user. Now, there are different approaches to get those addresses.

One could go through the entire process of key generation and derivation for each address, but this would require the user to keep backups for each individual key. This approach is called *non-deterministic key generation*.
While this approach mitigates the risk of losing all your funds at once in case you lose a private key/mnemonic phrase, it certainly makes for a bad user experience.

Being able to securely produce several *child keys* from a single *parent key* does not only allow for a better UX in basic wallets, but also multicurrency wallets to be backed up with a single mnemonic, from which a key pair for each chain is derived.

## Hierarchical Deterministic Wallets

Hierarchical Deterministic Wallets were introduced with [BIP-0032](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki). The general idea is to take a master private key and generate multiple secure *child keys* from it.

Before we go into detail on the different key derivation methods, we need to introduce one concept we omitted thus far, for it would not have added any value previously. The 512-bit seed we obtained from our mnemonic phrase by applying the PKKDF2 function is split into two parts: a zero-level private key and a 256-bit *chain code cc*.

The chain code is used as a key to the HMAC-SHA256 pseudorandom function that takes two pieces of input, the *data* and a *key*, to produce a single 512-bit output. The HMAC-SHA256 function is used at several steps in the key derivation process.

To recap what we did thus far:

* We generated a random bit sequence and used it as an input to a deterministic random bit generator that produced a seed.
* From this seed we generated a mnemonic phrase, which in turn was converted into a 512-bit binary seed.
* We split our seed into the zero-level private key \\(sk_0\\) and the zero-level chain code \\(cc_0\\). A zero-level public key \\(PK_0\\) is generated from \\(sk_0\\) using [*elliptic curve cryptography*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}).

### Hardened vs. Non-Hardened Secret Key Derivation

When looking at the key derivation in HD wallets, we can generally differentiate between *hardened secret key derivation* (HSKD) and *non-hardened secret key derivation* (NSKD). The difference lies in the inputs used to generate first-level keys.

![Hardened vs. Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hardened-vs-non-hardened_D.jpg)
![Hardened vs. Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hardened-vs-non-hardened_M.jpg)

Additionally, we need to introduce the variable *i* at this point. It is a 32-bit integer that is used to derive different keys with index *i* from a single zero-level key. By convention the total range of possible values of *i* is split between HSKD and NSKD, giving both methods the option to create 2147483648 different first-level keys from a single zero-level key.

The hardened secret key derivation takes the zero-level private key \\(sk_0\\), the zero-level chain code \\(cc_0\\) and the integer *i* as an input. By convention, the top of the integer range (from \\(2^{31}\\) to \\(2^{32}-1\\)) of *i*, is used for the hardened secret key derivation method.

In other words, using the HSKD method the obtained first-level private key \\(sk_1\\) is a function of three values

$$
sk_1 = HSKD(sk_0, c_0, i)
$$

The *non-hardened secret key derivation* (NSKD) additionally takes the zero-level public key \\(PK_0\\) into account. In the non-hardened secret key derivation method, *i* will by convention take on values between 0 and \\(2^{31}-1\\), so the lower half of the total range of *i*.

In other words, using the HSKD method the obtained first-level private key \\(sk_1\\) is a function of four values

$$
sk_1 = NSKD(sk_0, PK_0 c_0, i)
$$

### Hardened Secret Key Derivation (HSKD)

The core function that the key derivation is build around is the [*hash-based message authentication code*](https://en.wikipedia.org/wiki/HMAC) (HMAC). It is a specific type of message authentication code involving a cryptographic hash function and a secret cryptographic key. It always uses some hash function, which is than appended to name the exact function. In this specific case the SHA512 hash function is used and the message authentication code is called HMAC-SHA512.
HMAC cosumes several inputs. For our purposes we group them into two: the *key* and the *data*

![Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hskd_D.jpg)
![Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hskd_M.jpg)

For the HSKD method, the concatenation of \\(sk_0\\) and our variable integer *i* is used as the data and the zero-level chain code \\(c_0\\) as the key.

The resulting 512-bit output is split into two parts of 256 bits each. The first half becomes our first-level private key \\(sk_1\\), the second half our first-level chain code \\(cc_1\\). By applying elliptic curve cryptography to \\(sk_1\\) we can obtain our first-level public key \\(PK_1\\).

By incrementing *i* we can generate \\(2^{31}\\) or 2147483648 different first level private keys and chain codes.

### Non-Hardened Secret Key Derivation (NSKD)

We can also derive a first level private key using a combination of our zero-level public key \\(PK_0\\), zero-level secret key \\(sk_0\\) and our zero-level chain code \\(cc_0\\). This method is called *Non-Hardened Secret Key Derivation* (NSKD).

![Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/nskd_D.jpg)
![Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/nskd_M.jpg)

Again, we will use the HMAC-SHA256 function, but this time we use the concatenation of \\(PK_0\\) and *i* as out data and once again \\(cc_0\\) as our key.
Again, the resulting 512-bit output is split into two parts of 256 bits each. While the second part becomes our first level chain code \\(cc_1\\) as it did in the HSKD method, the first 256 bits are handled differently.

It doesn't yield our first level private key directly, but instead an [*addition modulo N*](https://www.oxfordreference.com/view/10.1093/oi/authority.20110803100203745) with the initial private key \\(sk_0\\) is performed in order to obtain the first level private key. Lastly, ECC is used to generate our first level NSKD public key \\(PK_1\\).

Now you can imagine a case, where a large number of addresses (or public keys respectively) need to be generated on a continuous basis - think a merchant accepting crypto payments. Both methods described before, HSKD and NSKD need access to the zero-level private key to compute new child keys and hence addresses.

The zero-level private key is also the key that will allow the merchant to spend the money they received, so they should never host this process on the same server the payment logic resides on.

### Non-Hardened Public Key Derivation (NPKD)

Meet NPKD - the *Non-Hardened Public Key Derivation* method.

![Non-Hardened Public Key Derivation](/assets/post_files/technology/expert/3.0-wallets/npkd_D.jpg)
![Non-Hardened Public Key Derivation](/assets/post_files/technology/expert/3.0-wallets/npkd_M.jpg)

Here, our zero level private key \\(sk_0\\) does not appear at all. The first steps in the NPKD method are analogous to the NSKD method.

The concatenation of \\(PK_0\\) and *i* is used as data and once again \\(cc_0\\) as our key. Again, the resulting 512-bit output is split into two parts of 256 bits each.

The first 256 bits are used as an input to the ECC module, producing and intermediary result we call \\(PRE_1\\). Applying the addition modulo N together with our zero-level public key \\(PK_0\\) we get a first level public key \\(PK_1\\) without having to touch \\(sk_0\\) at all.

Spending funds received at an address derived from a first-level public key yielded from this method works with \\(sk_0\\), as the first-level public key obtained using NPKD is equivalent to the first-level public key produced with the NSKD method. A proof for why this works would blow the scope of this article, but can be found [here](https://privatekeys.org/2017/09/12/key-derivation-in-bitcoin-wallets-as-defined-in-bip-0032/).

**continue**


## Multi Signature Functionality

*Why is this section in wallet article?*

In order to spend an [*Unspent Transaction Output* (UTXO)]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}), a valid cryptographic signature is required. It can only be provided if the private key corresponting to the address the UTXO was sent to is known. Most transactions have a single digital signature attached and hence we could call them "single signature transactions".

Most blockchains also support a more complex type of transaction verification, based on several digital signatures. These multi signature transactions, mostly called *MultiSig*, rely one more than one signature (as the name suggests) and have several useful applications.

### Dividing Responsibility

First, by requiring several valid signatures the responsibility for keeping a set of coins canbe divided between several people. A married couple where both partners have their own private keys could have two MultiSig "Accounts". One could act as a spendings account and the money from it can be spend by either one of their two keys. A seperate spendings account could require both of them to sign off on any outgoing transaction.

The spendings account in this example would be called a 1-of-2 scheme: There is a total of 2 keys that can provide valid signatures and 1 of them is required to authorize a transaction.
The savings account is a 2-of-2 scheme: 2 keys can provide a valid signature, and both are required to sign a valid transaction.

Generally speaking, multi signature accounts follow an *M-of-N* scheme, where *N* is the total number of keys that can provide valid signatures and *M* is the required number of signatures to create a valid transaction.

### Avoiding Single Points of Failure

Second, you reduce the risk of losing access to your money or being hacked, by keeping funds in a MultiSig address, and storing your keys in different locations. You could store your money in a 2-of-3 address and keep the three keys on your laptop, your phone and a hardware wallet. If one of those devices breaks you can still access your funds and an attacker would need to compromise two devices to steal money. Hence, this setup eliminates single points of failure.

For larger amounts, 3-of-5 MultiSig schemes can be used. [Casa](https://keys.casa/) offers solutions 3-of-5 MultiSig schemes where they store one key for you. As long as you have access to two of your keys, you will alwasy be able to recover your funds.

#### How it Works

The spending conditions of a [UTXO] are defined in the [*pubkey script*](https://bitcoin.org/en/glossary/pubkey-script). It essentially determines the verification process of the transaction. The spending conditions for MultiSig transactions are defined in a so-called [*redeem script*](https://bitcoin.org/en/glossary/redeem-script), which serves the same function as the pubkey script: defining the spending conditions of the UTXO in question.

**TKKG** pubkey script lock, sig script key, simple graphic
+++++ pubkey-script-lock.jpg

A regular "single-signature" transaction only involves the verification of one signature, defined in the pubkey script. The redeem script of a multi-sig account entails the minimum number of signatures *M* that must be provided, as well as the set of keys *N* that can provide a valid signature. Redeem scripts can also involve other conditions, such as a time-sensitive component like in the case of [*timelocks*](https://en.bitcoin.it/wiki/Timelock), where funds are only spendable after a certain amount of time has elapsed.

#### Creating a Multi Signature Address

Imagine Alice bought ZEN on an exchange and wants to store them using a MultiSig setup. This means she needs to create a multi signature address and withdraw her funds to it.

![Generation of a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/multisig-address-generation_D.jpg)
![Generation of a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/multisig-address-generation_M.jpg)

* First, she generates a set of private keys. The number of keys generated depends on the MultiSig scheme she wants to use. Let us assume she wants to setup a simple 1-of-2 scheme, so she generates two keys, one of which is sufficient to sign a transaction. 
* Second, she creates the redeem script. It contains the information about the scheme used, 1-of-2 in Alice's case, and the two public keys corresponding to the two private keys generated in the first step.
* Third, she hashes the redeem script. The hash of the redeem script is encoded into an address. This type of address is called *pay to script hash* (P2SH) address.
* Lastly, she withdraws her money from the exchange to her P2SH address.

There are several wallet implementations that offer multi signature support. This means, the wallet takes care of generating the keys and subsequently the redeem script. It also stores the (unhashed) redeem script. This is necessary because it is a requirement to provide the redeem script to be able to spend the funds and the full redeem script only becomes part of the blockchain, when she spends funds from her multi-sig address for the first time. It is also possible to regenerate it on demand, based on the *N* defined public keys.

#### Spending from a Multi Signature Address

Verification of a transaction from a P2SH address involves checking if the full redeemScript hashes to the redeem script hash of the UTXO being spent. If this check is successful, the full redeem script is available to the verifiers. In a second step, they will verify if the provided digital signature(s) satisfy the public-key-based spending conditions included in the full redemm script.

![Spending from a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/spending-from-multisig-address_D.jpg)
![Spending from a Multi Signature Address](/assets/post_files/technology/expert/3.0-wallets/spending-from-multisig-address_M.jpg)

To spend from a P2SH address, the following steps are necessary:

* First, Alice will take the UTXO that was created when she withdrew from the exchange and use it as an input to her spending transaction.
* Second, she places the full redeem script in the *signature script* part of the output.
* Third, she creates the required amount of digital signatures using her private keys. If we follow the example from above, she is using a 1-of-2 signature scheme, so a single signatures created with either key A or key B will suffice.
* Lastly the transaction is broadcast to the network.

When the transaction is broadcast, the full redeem script becomes public. This means that an observer will know the address being used is a MultiSig address and he will also learn about the different spending conditions. This is undesirabel, as it might expose the user to attack vectors and compromises his privacy in general. Two improvements are actively being worked on and are likely being implemented in the not-so-distant future.

The first one is called *Merkelized Abstract Syntax Trees* (MAST). Here, the spending conditions are arranged in a [merkle tree] structure and the merkle root is included instead of the redeem script hash. By providing the fulfilled scrip conditions (redeemScripts) and the merkle path a node can verify if a transaction is valid but does not learn anything about the other (unfulfilled) spending conditions.

The second improvement over traditional multi signature transactions come with [*Schnorr signatures*](https://hackernoon.com/the-future-of-bitcoin-schnorr-signatures-key-aggregation-and-interactive-aggregate-signatures-ias-wbk36po). They comprise two main aspects: *signature aggregation* and *key pair concealment*.

Signature aggregation allows several signatures to be combined into a single signature. This provides better privacy, as the aggregate public key is undistiguishable from a regular private key and an observer cannot link several public keys to one another. Schnorr signatures also come with increased efficiency. They produce much less data compared to an un-aggregated multi signature transaction.

Key pair concealment allows the modification of private keys and public keys. As [Aaron van Wirdum](https://bitcoinmagazine.com/articles/taproot-coming-what-it-and-how-it-will-benefit-bitcoin/) puts it:

> "As a simplified example, a private key and its corresponding public key could be tweaked by multiplying both by two. The “private key x 2” and the “public key x 2” would still correspond, and the “private key x 2” could still sign messages that could be verified with the “public key x 2.” Anyone unaware that the original key pair was tweaked wouldn’t even see any difference; the tweaked keys look like any other key pair."

Using a multi signature scheme to secure your funds comes with a security-convenience trade-off. The more keys *M* are required to sign a transaction, the more cumbersome the process of spending money. The larger the total number of keys *N* included in the MultiSig scheme, the more devices and backups you will maintain. 
At the same time the overall security of the account is increased with a larger *M*. The difference between *M* and *N* is the number of keys a user can loose while being able to recover her funds. It is up to the individual user to determine if the added complexity is justified by the amount of money kept in a given account.

### Summary
