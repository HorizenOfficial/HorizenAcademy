---
layout: post
type: article
title: "Digital Signatures"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/digital-signatures/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

In the great scheme of things Public-Key Cryptography is used to verify ownership in cryptocurrencies. Somehow you need to be able to prove knowledge of a private key corresponding to an address without revealing any information about it. This is done through *digital signatures*.

To create a digital signature one uses a *message*, in most cases a transaction, to be signed and the private key. The verifier uses the message, the public key and the digital signature as an input to the verification algorithm which produces a binary output: either the signature is valid, or it is not. Every full node and miner on the network will verify every single transaction based on this concept.

![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_D.jpg)
![Creating a Digital Signature and Verifying It](/assets/post_files/technology/expert/2.3.3-digital-signatures/digital-signature_M.jpg)

While this mechanism is usually treated as a blackbox, we will go into detail on the inner workings of this cryptographic method in this article of the Horizen Academy. Before we get into the nitty gritty part, that requires some mathematics to be explained properly we want to repeat a convention we already introduced in our previous articles on elliptic curve cryptography. If you know the difference between a *scalar* and a *vector* feel free to skip the next section and continue with "Generating the Signature".

### Scalars and Vectors

 A scalar is something that only has a magnitude. Simply speaking, any number is a scalar. A vector has a magnitude and a direction and is represented by a *tuple* of values. If we are looking at a two-dimensional plane, a vector can be interpreted as an arrow with a certain length, the magnitude, and a direction, the angle \\(\alpha\\) relative to the positive *x*-axis. This means it is a tuple comprising two values, a *double*. In order to represent a vector in three dimensional space one would use a *triple* of values, one for the magnitude and two for the direction (angle relative to *x*- and *z*-axis). Alternatively, you can use the *x*-, *y*-, and *z*-coordinate to represent a gicen point in three-dimensional space. Either way you need three values.
 It is a convention that scalars are written with small letters, like the private key *sk*, while vectors are written with capital letters, like your the public key *PK*.

![Scalar vs. Vector](/assets/post_files/technology/expert/2.3.3-digital-signatures/scalar_vector_D.jpg)
![Scalar vs. Vector](/assets/post_files/technology/expert/2.3.3-digital-signatures/scalar_vector_M.jpg)

It's important to note that the hash of a vector is a scalar. The [hash function]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}) consumes the *tuple* of values as an input and outputs a scalar.

We use the \\(\bullet\\) operator when we are doing multiplication on the elliptic curve. When we are performing regular multiplication of scalars, we will use the \\(\cdot\\) operator. We added this little discourse because it should help you to keep track of what values are points on the curve (vectors) and what are  scalars when following along.

To Recap our previous articles: your secret or private key *sk* is a large random number. If you multiply the base point *P* used for the elliptic curve (secp256k1) with a private key you get a public key *PK*. You now want to prove to the network that you know *sk* without revealing it, so how does that work?

![Keys](/assets/post_files/technology/expert/2.3.3-digital-signatures/keys_D.jpg)
![Keys](/assets/post_files/technology/expert/2.3.3-digital-signatures/keys_M.jpg)

### Generating the Signature

Generating a digital signature in an elliptic curve cryptography (ECC) scheme is based on the [distributive property](https://en.wikipedia.org/wiki/Distributive_property) for point addition that we introduced in the [article on ECC math]({{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}) earlier in this chapter.

$$
n \bullet P + r \bullet P = (n + r) \bullet P
$$

We get the equation below by multiplying with \\(\text{hash} (m, r \bullet P)\\) on both sides and factoring out the base point *P* on the right hand side of the equation as we did above. This equation holds for **any** *m*, *r* and *n*.

$$
\text{hash} (m, r \bullet P) \bullet n \bullet P + r \bullet P = (\text{hash}(m, r \bullet P) \cdot n+r) \bullet P
$$

We take it slowly from here, baby steps. For math-savvy readers this might mean some extra steps but we would like to keep this understandable for the widest audience possible.

We learned that your private key multiplied with the base point yields your public key.

$$
sk \bullet P = PK
$$

We replace the universal variable *n* with our private key *sk*, and use *PK* to simplify the expression \\(sk \bullet P\\). Lets do this in two steps: first replacing *n*:

$$
\text{hash} (m, r \bullet P) \bullet {\color{red} sk} \bullet P + r \bullet P = (\text{hash}(m, r \bullet P) \cdot {\color{red} sk}+r) \bullet P
$$

and next simplifying \\(sk \bullet P\\) to *PK*

$$
\text{hash} (m, r \bullet P) \bullet {\color{red} PK} + r \bullet P = (\text{hash}(m, r \bullet P) \cdot sk+r) \bullet P
$$

Now, we will replace \\(r \bullet P\\) with *R*. This follows the convention that the scalar *r* multiplied with the base point *P* gives us a point on the curve, the vector *R*.

$$
\text{hash} (m, {\color{red} R}) \bullet (PK + {\color{red} R}) = \text{hash}(m, {\color{red} R}) \cdot (sk+r) \bullet P
$$

We define *s* as

$$
s = \text{hash}(m,R) \cdot (sk + r)
$$

and replace it accordingly. It should be clear that only a person in possession of the private key *sk* can compute *s*.

$$
\text{hash}(m, R) \bullet (PK + R) = {\color{red} s} \bullet P
$$

This is the equation we will be working with from here to prove the following claim:

**If you can provide an *R* and *s* together with a message *m* that satisfy the equation**

$$
\text{hash}(m, R) \bullet (PK + R) = s \bullet P
$$

**this proves you know the private key *sk* that corresponds to the public key *PK* as in** \\(sk \bullet P = PK\\).

Two conditions must be met in order for this to be the case:

- If you know *sk*, then you must be able to provide working values for *m*, *R*, and *s*.
- If you don't know *sk*, then you must not be able to provide working values for *m*, *R*, and *s*.

#### Condition 1: Providing m, R, and s

Let's assume you know *sk*.
First, you choose random value for *r* and a message *m* to sign. Next, you compute \\(R = r \bullet P\\). Lastly, you compute \\(s = \text{hash}(m,R) \cdot (sk + r)\\).

If you plug these values into the equation

$$
\text{hash}(m, R) \bullet (PK + R) = s \bullet P
$$

from above, you get

$$
\text{hash} (m, r \bullet P) \bullet sk \bullet P + r \bullet P = (\text{hash}(m, r \bullet P) \cdot sk+r) \bullet P
$$

which we said earlier holds for any *m*, *r*, and *sk* (formerly *n*). This satisfies the first condition we need to prove our claim.

#### Condition 2: Not Being Able to Provide m, R, and s in Absence of sk

Now we need to prove the second condition is met as well: If you don't know *sk*, then you must not be able to provide working values for *m*, *R*, and *s*. In order to provide these working values you would have to solve the equation below.

$$
\text{hash}(m, R) \bullet (PK + R) = s \bullet P
$$

To do so, you would need to break the preimage resistance property (one-wayness) of the [hash function]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}). What this means is you would have to find an input to the hash function, specifically an *m* and *R*, that produce a certain output.

Because strong cryptographic hash functions, as they are used in blockchains, are preimage resistant this proves our second claim. You cannot provide working values for *m*, *R*, and *s* if you don't know *sk*.

Now we only need to make sure a potential adversary doesn't learn anything about *sk* from publishing *s*. The message *m* and the point *R* are entirely independent of *sk*. Only *s* could potentially reveal anything useful about *sk*

$$
s = \text{hash}(m,R) \cdot (sk + r)
$$

but in order to derive *sk* from *s* one would have to solve for

$$
sk = \frac{s}{\text{hash}(m,R)} - r
$$

An adversary doesn't know *r* and cannot derive it from *R* (discrete log problem) as it would be the same as deriving *sk* from *PK*. Without knowledge of *r* you cannot compute *sk* from *s*.

To recap what we did:

- First, we used the [distributive property](https://en.wikipedia.org/wiki/Distributive_property) to build an equality.
- Next, we multiplied both sides with with \\(\text{hash} (m, r \bullet P)\\).
- We replaced the variable *n* with our private key *sk* and the expression \\(sk \bullet P\\) which represents the product of our private key *sk* with the base point *P* with the public key *PK*.
- We defined *R* to be the product \\(r \bullet P\\).
- We defined *s* as the term \\(\text{hash}(m,R) \cdot (sk + r)\\).
- We showed that if you can provide an *m*, *R*, and *s* that satisfy the resulting equation, it proofs knowledge of the private key *sk* corresponding to the public key *PK*.
- We also proved that without knowledge of *sk*, you cannot provide working values for *m*, *R*, and *s*.
- Lastly, we showed that you can reveal *m*, *R*, and *s* without revealing any information about the private key *sk*.

### Verifying the Signature

All full nodes and mining nodes verify every single transaction before they forward it or include it in a block. They verify a transaction, or message *m*, based on the originating public key *PK* and the signature, which is composed of *s* and *R*. As we showed above, only by knowing *sk* one can produce a valid signature. Verification of the signature includes plugging those three variables into the equation below and checking if it holds.

$$
\text{hash} (m,R) \bullet (PK + R) = s \bullet P
$$

In the context of cryptocurrencies signatures are used to proof that you own a [UTXO set]({{ site.baseurl }}{% post_url /technology/expert/2022-04-02-utxo-vs-account-model %}) and that you are entitled to spend from it. One spends a UTXO by creating a transaction and using it as an input to create one or more new outputs. Each input spent needs to be signed.

### What does a digital Signature look like?

A transaction can generally be considered a message to the network that informs it about a transfer of money or data. The message *m* is to be signed and *s* and *R* comprise the signature of that message.

Because *s* depends on the message *m*, the verification process is only successful if two conditions are met: The sender of the message knows the private key *sk* that was used to generate the address the UTXO was addressed to AND the signature *(R, s)* was created for that specific transaction *m*.

With cryptocurrencies the message *m* is the unsigned part of a transaction. We cover what a transaction looks like in our article ["Blockchain as a Data Structure]({{ site.baseurl }}{% post_url /technology/expert/2022-01-02-blockchain-as-a-data-structure %}).

The digital signature of that transaction consist of the x-coordinate of *R* and the sign of its *y*-value. This x-coordinate is concatenated with *s*, a 256-bit integer, after they have been converted to hexadecimal format.

Here we have covered the mathematics behind creating and verifying a signature. In our last chapter we cover how the blockchain client handles signatures. Each transaction output has a *locking script* to it. It is called *scriptPubKey* and requires certain conditions to be met in order for the recipient to spend it later on.

### Summary

To summarize, Public-Key Cryptography (PKC) is used to verify ownership on the blockchain. It's basic building blocks are a pair of keys, public and private key, as well as digital signatures. It is not only used in blockchains but also in encryption schemes such as TLS, PGP or SSH.

While there are many different PKC schemes, in blockchains elliptic curve cryptography (ECC) is used. Cryptography mostly relies on one-way functions. The first one-way function we introduced was the [hash function]({{ site.baseurl }}{% post_url /technology/expert/2022-02-03-hash-functions %}). ECC and its underlying *discrete log problem* pose a second one-way function used in blockchain tech.

We showed that multiplication on the curve, even with large numbers is easy and computationally inexpensive while division is computationally infeasible.

Next we showed how an address is derived from a private key with the two most important steps being multiplication of the private key *sk* with a base point *P* to get the public key *PK* and then hashing *PK* to get an address. Because both, multiplication on the curve as well as hashing, are one-way functions it is not possible to reverse this process.

We constructed the equation used to create and verify *digital signatures* and proved that only someone with knowledge of *sk* can produce a valid Signature *(R,s)* for a given message *m*. We also showed that you cannot compute the private key *sk* from the information contained in *s*.

Lastly, we briefly talked about how the signature is included in a transaction as an outlook on our last chapter [programming blockchain]({{ site.baseurl }}{% post_url /technology/expert/2022-07-01-programming-blockchain %}).

If you made it this far you can consider yourself to be well equipped to learn about every other concept used in blockchains. PKC is a fundamental concept that once understood opens the door to understanding many other concepts, especially those related to privacy enhancing techniques such as [*confidential transactions*]({{ site.baseurl }}{% post_url /technology/expert/2022-05-05-confidential-transactions %}), [*ring signatures*]({{ site.baseurl }}{% post_url /technology/expert/2022-05-04-ring-signatures %}) and [*zero-knowledge Proofs*]({{ site.baseurl }}{% post_url /technology/expert/2022-05-06-zksnarks %}).
