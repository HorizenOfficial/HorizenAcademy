---
layout: post
type: article
title: "Public Key Cryptography"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/public-key-cryptography/
topic: technology
level: expert
chapter: "How Does a Blockchain Work?"
---

An integral part of blockchain technology is public-key cryptography (PKC). There are several PKC schemes in existence but the two most popular ones are RSA (after Rivest, Shamir, and  Adleman) and elliptic curve cryptography (ECC). In blockchains, elliptic curve cryptography is used to prove and validate ownership of data.

The inner workings of ECC are often treated as a black box and we want to shed some light on the type of cryptography that gave *crypto*currencies their name. To make this topic more digestible we split it into three parts.

<div class="row mt-5">
    <div class="col-md-3">
        <a href="{{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}">
            <img src="/assets/post_files/technology/expert/2.3.0-pkc/curve.png" alt="Elliptic Curve Cryptography" />
        </a>
    </div>
    <div class="col-md-9">
        <h5 class="intro-article-title">Elliptic Curve Cryptography</h5>
        <p class="mb-1">
We explain ECC and show you the basics of how the math on an elliptic curve works. We look at basic mathematical operations on the elliptic curve and examine the complexity of performing those operations. </p>
        <p class="mb-0">
            <a class="font-weight-bold" href="{{ site.baseurl }}{% post_url /technology/expert/2022-02-04-1-elliptic-curve-cryptography %}">Read Article</a>
        </p>
    </div>
</div>

<div class="row mt-5">
    <div class="col-md-3">
        <a href="{{ site.baseurl }}{% post_url /technology/expert/2022-02-04-2-generating-keys-and-addresses %}">
            <img src="/assets/post_files/technology/expert/2.3.0-pkc/keys-and-addresses.png" alt="Generating Keys and Addresses" />
        </a>
    </div>
    <div class="col-md-9">
        <h5 class="intro-article-title">Generating Keys and Addresses</h5>
        <p class="mb-1">
            Next, we demonstrate how we use ECC to derive a public key from your private key and your address from your public key.
        </p>
        <p class="mb-0">
            <a class="font-weight-bold" href="{{ site.baseurl }}{% post_url /technology/expert/2022-02-04-2-generating-keys-and-addresses %}">Read Article</a>
        </p>
    </div>
</div>

<div class="row mt-5">
    <div class="col-md-3">
        <a href="{{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}">
            <img src="/assets/post_files/technology/expert/2.3.0-pkc/digital-signatures.png" alt="Digital Signatures" />
        </a>
    </div>
    <div class="col-md-9">
        <h5 class="intro-article-title">Digital Signatures</h5>
        <p class="mb-1">
            Lastly, we explain how to prove ownership of a private key without revealing any information about it through the creation of a digital signature. We also show how a verifier validates the digital signature by only knowing your public key.
        </p>
        <p class="mb-0">
            <a class="font-weight-bold" href="{{ site.baseurl }}{% post_url /technology/expert/2022-02-04-3-digital-signatures %}">Read Article</a>
        </p>
    </div>
</div>
