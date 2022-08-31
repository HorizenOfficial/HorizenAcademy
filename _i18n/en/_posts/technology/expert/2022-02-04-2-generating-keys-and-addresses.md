---
layout: post
type: article
title: "Generating Keys and Addresses"
description: "A public key is derived from the newly generated private key through elliptic curve multiplication, while addresses are derived from public keys."
permalink: /technology/expert/generating-keys-and-addresses/
no_alternate: true
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

**When you install** and set up a wallet on your phone or computer, the first thing you will do is actually fund your wallet by transferring some crypto to your address. In this article, we will take a look under the hood of your wallet to understand where your address is coming from and how it is related to your **private key**.

![From Private Key to Address]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_D.jpg)
![From Private Key to Address]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/address-derivation-basic_M.jpg)

**First**, a private key is randomly generated. **Next**, a public key is derived from the newly generated private key through elliptic curve multiplication. **Addresses are derived from public keys in two main steps:** **First** by hashing the public key and **second**, by **Base58Check** encoding it.

If you have read our last article on [elliptic curve cryptography](https://academy.horizen.io/technology/expert/elliptic-curve-cryptography/), you know that the security of any **public key cryptography** (PKC) scheme **relies on one property**: It should be easy to derive a public key from a private key, but it must be infeasible to reverse that operation and derive a private key from a given public key.

With **elliptic curve cryptography** (ECC), this property is based on the _discrete log problem_, which refers to division on the elliptic curve being _computationally difficult_ while multiplication is easy. Deriving a public key from an address is also computationally difficult, as you would have to find the _preimage_ of a [hash function](https://academy.horizen.io/technology/advanced/hash-functions/), which means deriving an _input_ from an _output_.

Not being able to derive a public key from an address is an important aspect when considering privacy. Using a new address for every incoming transaction makes tracking transactions much harder for an adversary. If you were able to derive a public key from an address, you could find all addresses of a user, assuming they were derived from the same public key. This would render [change addresses](https://en.bitcoin.it/wiki/Change) useless.

Now let's get into the actual process of creating an address from scratch!

## Generating the Private Key

**The purpose of a private key** is to prove ownership of a UTXO-set by creating [digital signatures](https://academy.horizen.io/technology/expert/digital-signatures/) to authorize spending.

**Private keys** are sometimes also called _secret keys_ or _spending keys_. When doing ECC math, the spending key is usually abbreviated with **sk** for that reason. A spending key comprises **32** bytes, or **256** bits of data. **This has two important implications:**

- The **SHA256** hash function used in most cryptocurrencies produces **256**-bit outputs, which makes them a suitable candidate for private keys - the elliptic curve used in most cryptocurrencies, **scp256k1**, has an order of [256 bits](https://bitcoin.stackexchange.com/questions/21907/what-does-the-curve-used-in-bitcoin-secp256k1-look-like), which means it consumes **256**-bit inputs and produces **256**-bit outputs.

A private key can be represented in many formats, such as a binary string of **1**'s and **0**'s, a **Base64** string, a **mnemonic phrase** or a **hex string**.

### Generating Entropy

**In order for a private key to be secure**, it needs to be as random as possible. Randomness is also referred to as **entropy**, which is a term coming from the world of _physics_ and _chemistry_ describing the level of disorder in a system. **Guessing** an existing private key is so unlikely no sane human would try to attempt it and stealing them is also hard assuming good operations security was employed. Exploiting the source of randomness used to create a private key and recreating it can be a viable strategy for attackers in some cases. It's important to note that randomness should be viewed on a scale, rather than on a binary basis.

Many programming languages have a **random number generation** (RNG) module built in, but few of them are made with cryptographic purposes in mind. Some, like **pythons** secret module, are optimized for truly random number generation. How "good" an RNG module is, depends on the source of entropy used. **It can be collected from many sources:** the processes running on your processor, [mouse movements](https://zenpaperwallet.com/), camera and microphone inputs or a mix of the above.

If you would like to go through the process of creating a [private key ](https://www.freecodecamp.org/news/how-to-generate-your-very-own-bitcoin-private-key-7ad0f4936e6c/)for yourself, here is an article guiding you through the process in python.

### Your Mnemonic Phrase

**It is good practice** to backup your private key in an analog format but copying and writing down your private key in one of the formats above is very error prone. In **2013** a _Bitcoin Improvement Proposal_ (**BIP**) was submitted suggesting the use of [mnemonic phrases](https://academy.horizen.io/technology/advanced/types-of-wallets/) to represent private keys.

> _"A mnemonic code or sentence is superior for human interaction compared to the handling of raw binary or hexadecimal representations of a wallet seed. The sentence could be written on paper or spoken over the telephone. This guide is meant to be a way to transport computer-generated randomness with a human readable transcription." - [BIP 0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki), **Palatinus, Rusnak, Voisine, Bowe**_

![The Generation of a Mnemonic Phrase]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/mnemonic-phrase-generation_D.jpg)
![The Generation of a Mnemonic Phrase]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/mnemonic-phrase-generation_M.jpg)

**First**, randomness is generated using one of the methods described above, **then** a checksum is calculated and parts of it are concatenated (linked together) with the initial entropy. This data is split into groups of **11** bits each. **11** bits can represent the values from **0** to **2047**. **Next**, each group is mapped to a word list of **2048** common and easily identifiable words. Similar words such as **woman/women** or **build/built** are excluded to avoid confusion.

## Deriving the Public Key

Now that we have generated a private key - $sk$ - and a way to conveniently back it up, we need to derive a public key - $PK$ - from it. A **scalar** is something that only has a magnitude. Simply speaking, any number is a scalar. A **vector** has a magnitude and a direction and is represented by a _tuple_ of values. If we are looking at a two-dimensional plane, a vector can be interpreted as an arrow with a certain length, the magnitude, and a direction, the angle relative to the **x**-axis.

This means in two dimensions a vector is a tuple made of two values, a _double_. **To represent a vector in three-dimensional space a _triple_ of values is needed:** One for the magnitude and two for the direction, the angle relative to **x**- and **z**-axis). **Alternatively**, the _triple_ of **x**, **y**, and **z**-values can be used. It is a convention that scalars are written with small letters, like - $sk$ - while vectors are written with capital letters, like - $PK$.

![Scalar vs. Vector]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/scalar_vector_D.jpg)
![Scalar vs. Vector]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/scalar_vector_M.jpg)

A **generator point** or _base point_ is defined for the **secp256k1** curve and its coordinates are:

$$x = 55066263022277343669578718895168534326250603453777594175500187360389116729240$$

and

$$y = 32670510020758816978083085130507043184471273380659243275938904335757337482424$$

The product of your private key **sk** with this base point **P** gives you your **elliptic public key**, _PK_. **All public key**s are computed based on the same generator point.

![Keys]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/keys_D.jpg)
![Keys]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/keys_M.jpg)

If you wonder how computationally expensive it is to multiply such a large number, **sk**, with a point on the curve, check out our last article on [elliptic curve cryptography](https://academy.horizen.io/technology/expert/elliptic-curve-cryptography/) where we calculate the number of computational steps needed. **An extra byte** is added to the front of your elliptic public key to give you your _full public key_. The extra byte depends on the specific blockchain you are generating an address for.

### Compression

We already mentioned that the elliptic curve being symmetric about the **x**-axis is a property that makes compressing a point on the curve very handy. For every **x**-value, there are only **two** possible **y**-values and they only differ in their sign.

$$
y = \pm \sqrt{x^3 + ax + b}
$$

If you throw out the **y**-value all together and add a byte indicating the sign of **y** a reduction in size by almost **50%** is achieved.

## Creating an Address from the Public Key

**Your compressed public is now hashed twice in a row**, **first** using **SHA256** and **second**, using **RIPEMD160**. The second round of hashing accomplishes a compression by **37.5%**, from **256** to **160** bit. What you have now is your **encrypted public key**.

The next step to getting your address is adding a network byte to the front. Depending on which blockchain you are talking about this can also be two bytes. They indicate if the address is meant to be used on the production network or one of the testnets. **Horizen** uses two network bytes, which causes the **Base58Check** encoded transparent addresses to start with **zn** while shielded addresses start with **zc**.

After we have added the network byte, a **checksum** is calculated and concatenated with the address. This is a security measure to prevent addresses that were corrupted during transmission from being used by a wallet. The checksum is obtained by hashing the address including the network byte twice and taking the first **4** bytes of the result.

$$
SHA256(SHA256(network byte+encrypted public key))
$$

This checksum is then added to the end of the compressed public key. What we have now is a valid address, **but there is one last step to it**.

**Base58Check** is a way to convert bits into alphanumeric characters, excluding the four characters **0**, **O**, **I**, and **l** to reduce errors when copying addresses manually and proofreading them.

### Hierarchical Deterministic Address Generation - HD Wallets

**Most wallets today** are _HD wallets_ - **hierarchical deterministic wallets**. They use a single seed or **master private key** which can be derived from your mnemonic phrase, to generate a number of _child private keys_. This is done by adding a counter to the seed and incrementing it by one for every new private key generated.

![Hierarchical Deterministic Wallet]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/hd_wallet_D.jpg)
![Hierarchical Deterministic Wallet]({{site.baseurl_root}}/assets/post_files/technology/expert/2.3.2-keys-and-addresses/hd_wallet_M.jpg)

**These private keys can be used for different blockchains because the underlying concept is always the same**: The private key is a source of randomness that when multiplied with the base point of the specific chain yields your public key.

## Summary

To get from your private key, **sk** to your address you first perform multiplication on the curve with the base point **P**. Next you add a leading byte depending on which blockchain the address is for and omit the **y**-value while adding a byte for its sign. Now two hash operations are performed in a row, **SHA256** first and **RIPEMD160** second to get your **encrypted public key**. A _network byte_ is added to indicate if the address is meant for the main or testnet, giving you the **mainnet encrypted public key**. A **checksum** is calculated by performing **SHA256** twice and adding the first **4** bytes of that checksum to the end of the _mainnet encrypted public key_.

**Lastly**, the characters **0**, **O**, **I**, and **l** are removed using **Base58Check**.
