---
layout: post
type: intro
title: "Wallets Advanced"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/wallets-advanced/
topic: technology
level: expert
chapter: "Wallets"
---

By now you most likely know what a wallet is and what it does. A wallet generates a random private key *sk*, derives your public key *pk* in a first step using [*elliptic curve cryptography*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}) and derives your address(es) from you public key, mainly using two different [*hash functions*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}). It furthermore stores your private key and takes care of [*signing* transactions]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}).

In case this is completely new to you, please take a look at the Beginner or Advanced level articles on wallets. You can do so by simply adjusting the level in the top left corner of the sidebar (or within the menu if you are on mobile).

In this article, we want to introduced some of the more advanced technical concepts that are applied in modern wallets. First we will show you how your mnemonic phrase is generated and how it is related to your actual private key. Depending on the wallet implementation, the process for generating your address from a private key looks slightly different. Next, we look at multi signature schemes, where more than one digital signature is required to access funds.
Lastly, we will look at *simple payment verification* (SPV) as it is used for most wallets running on mobile and desktop.

### Generating Entropy

https://privatekeys.org/2017/09/03/private-key-generation-in-bitcoin-wallets-as-defined-in-bip-0039/

The basis for the generation of keys and addresses is randomness. Ownership on the blockchain is highly secure, as long as the private key cannot deterministically be reproduced by an adversary. To prevent this from happening, the private key which is also the basis for the public key and address(es) needs to be based on a high level of entropy.

There are different sources for entropy, they can be based on hardware, user input or microphone and camera inputs. Preferably, the entropy source is hardware based and ideally, more than a single source of entropy is used. Human based entropy is usually less "random" and therefore less secure.

The initial entropy is than used as a seed for a *deterministic random bit generator* (DRBG), also called *pseudorandom number generator* (PRNG). DRBGs should be standardized and validated. One example for a vetted algorithm is the NIST SP800-90A compliant method.

The deterministic random bit generator produces a *seed*, which we will than use to generate your *mnemonic phrase*. 

### Mnemonic Phrase

The mnemonic phrase that you will likely know from most wallet implementations today was introduced with the [Bitcoin Improvement Proposal 39 (BIP-0039)](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). A mnemonic phrase is a set of commonly known words, which are used to provide a less error-prone backup mechanism compared to writing down your private key in a different format like base58, haxadecimal or even binary. In total, there are 2048 words a mnemonic phrase may comprise, each of them unambiguously identifiable by its first four letters. Similar words or different versions of the same word are not included (build/built, woman/women).

++++++ mnemonic_phrase_generation.jpg

The process for generating your personal mnemonic goes as follows: 

* First, a multiple of 32 bits (between 128 and 256 bits total) are generated. Let's do an example with a 256-bit seed.
* Second, a checksum is calculated by SHA256-hashing the seed. The first *x* bits of the checksum are appended to the end of the seed and *x* is the number of initial bits divided by 32. In our example using a 256-bit seed this results in an 8 bit checksum.
* Third, the concatenated bits are split into groups of 11 bits each. We get 24 groups for our example.
* Fourth, each 11 bit group is "translated" into the corresponding word from the list of mnemonic words. 11 bits can encode the values between 0 and 2047, each matching a word in the list of 2048 words.

Now, that we have a mnemonic phrase it needs to be converted into a binary seed. The [*PBKDF2 function*](https://en.wikipedia.org/wiki/PBKDF2) is used for that purpose taking as an input the mnemonic as the password and the string *mnemonic + passphrase* as the [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)). PBKDF2 takes this input and applies a pseudorandom function (here HMAC-SHA512) to it subsequently, in this case 2048 times. The final output is the derived seed of 512 bits length. This seed can now be used as an input for different key derivation methods, such as the *hierarchical deterministic* key derivation.

### Key Derivation

For different reasons it is desirable to be able to generate different addresses from a single seed or private key. By using a new address for each incoming transaction, as well as *change outputs* privacy is enhanced as it becomes harder to link transactions to a single user. Now, there are different approaches to get those addresses.
Going forward we use the term *key generation* to refer to the random generation of private keys and *key derivation* to refer to the path from a private key to the public key and lastly an address.

One could go through the entire process of key generation and derivation for each address, but this would require the user to keep backups for each individual address. This approach is called non-deterministic key generation.
While this might mitigate the risk of losing all your funds at once in case you lose a single private key, or mnemonic phrase, it certainly makes for a bad user experience. Being able to securely produce several *child keys* from a single *parent key* does only allow for a better UX in basic wallets, but also multicurrency wallets to be backed up with a single mnemonic, from which a key pair for each chain is derived.

#### Hierarchical Deterministic Wallets

Hierarchical Deterministic Wallets were introduced with [BIP-0032](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki). The general idea is to take a master private key and generate multiple secure *child keys* from it.

Before we go into detail on different key derivation methods, we need to introduce one concept we omitted thus far, for it would not have added any value previously. The 512-bit seed we obtained from our mnemonic phrase by applying the PKKDF2 function is split into two parts: a zero-level private key and a *chain code c* of 256 bit. 
The chain code is used as a key to the HMAC-SHA256 pseudorandom function that takes two pieces of input, the *data* and a *key*, to produce a single 512-bit output. The HMAC-SHA256 function is used at several steps in the key derivation process.

#### Hardened vs. Non-Hardened Secret Key Derivation

When looking at HD wallets, we can generally differentiate between *hardened secret key derivation* (HSKD) and *non-hardened secret key derivation* (NSKD). The difference lies in the inputs used to generate first-level keys from our initial zero-level keys.

![Hardened vs. Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hardened-vs-non-hardened.jpg)

To recap what we did thus far:

* We generated a random bit sequence and used it as an input to a deterministic random bit generator that produced a seed.
* From this seed we generated a mnemonic phrase, which in turn was converted into a 512-bit binary seed. 
* We split our seed into the zero-level private key \\(sk_0\\) and the zero-level chain code \\(cc_0\\). A zero-level public key \\(PK_0\\) is generated from \\(sk_0\\) using [*elliptic curve cryptography*]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}).

Additionally, we need to introduce the variable *i* at this point. It is a 32 bit integer that is used to derive many different keys with an index *i*. By convention the total range of possible values of *i* is split between HSKD and NSKD, giving both methods the option to create 2147483648 different first-level keys from a single zero-level key.

The hardened secret key derivation takes the zero-level private key \\(sk_0\\), the zero-level chain code \\(cc_0\\) and the integer *i* as an input. By convention the integer range between \\(2^{31}\\) and \\(2^{32}-1\\), so the top half of the total range of *i*, is used for the Hardened Secret Key Derivation method.

In other words, using the HSKD method the obtained first-level private key \\(sk_1\\) is a function of three values

$$
sk_1 = HSKD(sk_0, c_0, i)
$$

The *non-hardened secret key derivation* (NSKD) additionally takes the zero-level public key \\(PK_0\\) into account. In the non-hardened secret key derivation method *i* will by convention take on values between 0 and \\(2^{31}-1\\), so the lower half of the total range of *i*.

In other words, using the HSKD method the obtained first-level private key \\(sk_1\\) is a function of four values

$$
sk_1 = NSKD(sk_0, PK_0 c_0, i)
$$

**Hardened Secret Key Derivation (HSKD)**

The core function that the key derivation is build around is the [*hash-based message authentication code*](https://en.wikipedia.org/wiki/HMAC) (HMAC). It is a specific type of message authentication code involving a cryptographic hash function and a secret cryptographic key. It always uses some hash function, which is than appended to name the exact function. In this specific case the SHA512 hash function is used and the message authentication code is called HMAC-SHA512.
HMAC takes cosumes several inputs. For our purposes we group them into two: the *key* and the *data*

![Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/hskd.jpg)

For the HSKD method, the concatenation of \\(sk_0\\) and our variable integer *i* is used as the data and the zero-level chain code \\(c_0\\) as the key.

The resulting 512-bit output is split into two parts of 256 bits each. The first half becomes our first-level private key \\(sk_1\\), the second half our first-level chain code \\(c_1\\). By applying elliptic curve cryptography to \\(sk_1\\) we can obtain our first-level public key \\(PK_1\\).

By incrementing *i* we can generate \\(2^{31}\\) or 2147483648 different first level private keys and chain codes.

**Non-Hardened Secret Key Derivation (NSKD)**

We can also derive a first level private key using a combination of our zero-level public key \\(PK_0\\), zero-level secret key \\(sk_0\\) and our zero-level chain code \\(c_0\\). This method is called *Non-Hardened Secret Key Derivation* (NSKD).

![Non-Hardened Secret Key Derivation](/assets/post_files/technology/expert/3.0-wallets/nskd.jpg)

Again, we will use the HMAC-SHA256 function, but this time we use the concatenation of \\(PK_0\\) and *i* as out data and once again \\(c_0\\) as our key.
Again, the resulting 512-bit output is split into two parts of 256 bits each. While the second part becomes our first level chain code \\(c_1\\) as it did in the HSKD method, the first 256 bits are handled differently.

It doesn't yield our first level private key directly, but instead an [*addition modulo N*](https://www.oxfordreference.com/view/10.1093/oi/authority.20110803100203745) with the initial private key is performed in order to obtain the first level private key. Lastly, ECC is used to generate our first level NSKD public key.

Now you can imagine a case, where a large number of addresses (or public keys respectively) need to be generated on a continuous basis - think a merchant accepting crypto payments. Both methods described before, HSKD and NSKD need access to the zero-level private key to compute new child keys and hence addresses.

The zero-level private key is also the key that will allow the merchant to spend the money they received, so they might not want to have it available online, let alone on the same server the payment logic resides on.

**Non-Hardened Public Key Derivation (NPKD)**

Meet NPKD - the *Non-Hardened Public Key Derivation* method.

![Non-Hardened Public Key Derivation](/assets/post_files/technology/expert/3.0-wallets/npkd.jpg)

Here, our zero level private key \\(sk_0\\) does not appear at all. The first steps in the NPKD are analogous to the first steps using the NSKD method.

The concatenation of \\(PK_0\\) and *i* as out data and once again \\(c_0\\) as our key. Again, the resulting 512-bit output is split into two parts of 256 bits each. The first 256 bits are used as an input to the ECC module, producing and intermediary result we call \\(PRE_1\\). Applying the addition modulo N together with our zero-level public key \\(PK_0\\) we get a first level public key \\(PK_1\\) without having to touch \\(sk_0\\) at all.

Spending funds received at an address derived from a first-level public key derived using this method works with \\(sk_0\\), as the first-level public key obtained using NPKD is equivalent to the first-level public key produced with the NSKD method. A proof for why this is would blow the scope of this article, but can be found [here](https://privatekeys.org/2017/09/12/key-derivation-in-bitcoin-wallets-as-defined-in-bip-0032/).

### Multi Signature Schemes

Whats is MultiSig

++++ multi sig graphic

What it is used for

Casa 3-of-5 explained: Mobile App and desktop (easy access), one in office and one in bank (medium access), one with casa.

one sentece about schnorr?

schnorr article https://hackernoon.com/the-future-of-bitcoin-schnorr-signatures-key-aggregation-and-interactive-aggregate-signatures-ias-wbk36po

### SPV - Simple Payment Verification

Maybe move this section to transactions?

"It is possible to verify payments without running a full network node. A user only needs to keep
a copy of the block headers of the longest proof-of-work chain, which he can get by querying
network nodes until he's convinced he has the longest chain, and obtain the Merkle branch
linking the transaction to the block it's timestamped in." - BTC Whitepaper














\url{https://en.bitcoin.it/wiki/Deterministic_wallet}
receiving and spending essential feature. can be two programs, one for distributing pub keys and one for signing/spending.


Need to interact with P2P network to receive info and broadcast transactions. this part can also be outsources. three separable parts: a public key distribution program, a signing program, and a networked program



### Summary

\subsubsection*{FR}

BIP0032 \url{https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki}


