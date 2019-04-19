---
layout: post
type: article
title: "Public Key Cryptography"
description: "Another major element is Public-Key Cryptography. It is used to verify ownership and gave cryptocurrencies their name."
permalink: /technology/advanced/public-key-cryptography/
topic: technology
level: advanced
chapter: "How Does a Blockchain Work?"
further_reads: [how_to_create_a_bitcoin_wallet_address_from_a_private_key, what_is_the_math_behind_elliptic_curve_cryptography, elliptic_curve_cryptography_a_gentle_introduction]
---

There must be a way to represent identity to have ownership on the blockchain. You cannot have ownership if there is no representation of the owner. Public-key cryptography makes it possible to represent identity on the blockchain. It is the second cornerstone of blockchain technology besides the hash functions that we were talking about in the last article. While hash functions are used to verify the authenticity and integrity of data, public-key cryptography is used to verify ownership on the blockchain.

![How it works](/assets/post_files/technology/advanced/public-key-cryptography/how_it_works_D.jpg)
![How it works](/assets/post_files/technology/advanced/public-key-cryptography/how_it_works_M.jpg)

Let's take a step back and start from the beginning. The basis of public-key cryptography is private keys, public keys, addresses, and digital signatures. The private key creates a digital signature. The blockchain contains a record (the transaction) stating that there are some funds associated with your public key when you receive cryptocurrency. You must provide a digital signature to authorize your spending. You can only provide this digital signature if you are in the possession of the private key that corresponds to the public key.

### Elliptic Curve Cryptography

We would like to talk about elliptic curve cryptography (ECC) before we discuss how your keys and addresses work together. There are different mathematical concepts used to build a public-key cryptographic system. Bitcoin and most other cryptocurrencies use Elliptic Curve Cryptography (ECC).

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_0.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Bitcoin, Ethereum and many other currencies use a curve called secp256k1 and it looks like the one above. The equation for this curve is y^2 = x^3 + 7. What makes elliptic curves useful is that you can do math with them, and the math you do with the curves contains special properties.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_0.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_1.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        The graph above shows an example of adding two points on the curve together. When we want to add point P and Q together, we first connect them with a straight line. This straight line will intersect with the curve at some third point. Now we must project the third point onto the other side of the x-axis (multiply the y-coordinate by -1) and we get the sum of point P and Q: R. The key takeaway is that the sum of two points on the curve is a third point on the curve.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_1.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_2.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        When we want to multiply a point on the curve we must add it to itself. To multiply point P by two we add it to itself once. In this case, we can't really connect two points, but we go for the tangent line (the one with the arrows).
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_2.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_3.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        If you look at a random point close to P (the lightest gray), connecting the two points will result in the lightest grey line. Moving this point closer and closer towards P (from light to dark) brings the connecting line closer to the tangent line until it becomes the points and the lines overlap.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_3.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_4.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        The addition to itself is easy. We take the intersection of the straight line with the curve once again and project it onto the other side of the x-axis.
        <br/>
        If we want to multiply P by 3 we now add P and point (P + P) together. To multiply P by four we can add point (P + P) to itself and so on.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_4.jpg" alt="ECC" style="width: 400px;"></div>
</div>


The key takeaway is that multiplying a point is an easy task. The division is difficult (read infeasible). There is no algorithm to calculate how many times P was added to itself or in terms of multiplication by what number it was multiplied in order to get to a certain point. This should be enough to understand the basic concept of public key cryptography based on elliptic curves.

### Private Key

To introduce people to the concept of public-key cryptography the analogy of the public key being like your address and the private key is the key to your postbox is often used. We used it ourselves in the beginner section. Let us begin by going through the process of creating an address from scratch.

When you set up a wallet, the first step is generating your private key. Your private key is a very large random number, 256 bit long. This number is so large you could assign every grain of sand in the entire universe a unique private key. Aside from being large, your private key should be as random as possible. Creating random numbers is harder than it might sound, but this step is crucial to the safety of your funds.

### Public Key

You derive your public key from the large, random number you have generated for your private key. As we said, adding points together on an elliptic curve is straightforward. Bitcoin uses a base point on the curve for every key pair.

The coordinates are

x = 55066263022277343669578718895168534326250603453777594175500187360389116729240

and

y = 32670510020758816978083085130507043184471273380659243275938904335757337482424

This base point is now added to itself as many times as your private key dictates. If your private key was the number "3", then you would perform the calculation we just showed you. If you add the base point to itself as often as your private key says (private key * P) you get your public key.

<img src="/assets/post_files/technology/advanced/public-key-cryptography/ecc_6.jpg" alt="ECC" style="width: 400px;">

To recap: Your private key is a large random number. Your public key is a point on the elliptic curve that you get when you multiply the base point P with your private key.

A property that is necessary for any public-key cryptographic scheme, is that it is computationally infeasible to derive the private key from the public key. It is easy to calculate the public key, a point on the curve, by multiplying the base point P with a large random number (your private key). But if an adversary knows the base point P and your public key, he cannot divide them and say how many times P was added to itself to get your public key.

At this point, your public key is pretty large, 512 bit, and it is easy to compress it to half the size. The elliptic curve used is symmetric about the x-axis. There are only two possible y-values for every x-value that only differ in their sign (being positive or negative). If you leave out the y-coordinate and add the information of the point having a positive or negative value for y, the public key becomes half the size but carries the same information.

### Address

Lastly, to get your address, your public key is now hashed. First, using the SHA256 hash function and then a second time using RIPEMD160. After adding a byte to state if this address will go to the main- or test-net and calculating a checksum there is a final step before you get your address. 

When we look at how a computer is working at the hardware level it is zeros and ones. Data is always stored in a binary format no matter what type of data you're looking at (images, sound files, and even your bitcoin address). There are different ways to convert a string of bits into data that humans can digest. Humans do best with a string of numbers or alphanumerical characters.

Base58Check is a way to convert bits into alphanumeric characters, but it excludes the four characters 0, O, I, and l. Base58Check removes these characters from your address to reduce errors when copying addresses manually and proofreading them.

You can generate as many addresses as you like from a single private key, and most wallets today do this for you. It is a feature to enhance your privacy, as it makes it harder for a third party to link all your payments together. We will talk about this concept and how it works with change addresses in the following chapter Privacy on the Blockchain.

![ECC](/assets/post_files/technology/advanced/public-key-cryptography/ecc_7_D.jpg)
![ECC](/assets/post_files/technology/advanced/public-key-cryptography/ecc_7_M.jpg)

### Digital Signature

To wrap up this article we want to come back to digital signatures. You might hear that your keys (public and private) can encrypt and decrypt messages. This is not the case. The information contained within transactions is not encrypted in any way. It is available to anyone on the blockchain, which makes the system so transparent.

Your private key is actually used for is signing transactions. You can only use the funds you receive in a transaction if you provide a digital signature that proves your knowledge of the private key. We cover how this digital signature works and how you can prove that you know the private key without revealing any information about it will in our advanced level. We combine the concept of hash functions and point multiplication on the curve for this. Although it is not exactly rocket science it is a rather complex matter.

### Summary

When you set up a wallet the software will first generate a large random number that is your private key. The base point P on the elliptic curve is multiplied by your private key to get your public key, a point on the curve. Your public key is then hashed and it removes the characters I, l, 0 and O to improve readability. You need to provide a digital signature that you can only produce to spend any funds.

Head to our next article to learn about the Peer-to-Peer network: The infrastructure most public blockchains are built upon.

