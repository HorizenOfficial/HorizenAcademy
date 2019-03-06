---
layout: post
type: article
title: "Encrypted Email"
permalink: /privacy/advanced/encrypted-email/
topic: privacy
level: advanced
chapter: "Tools to protect your Privacy"
---

For a sophisticated hacker, it is incredibly easy to intercept your emails if you are the target. The easiest way to get your hands on somebody else's email is to gain access to that person's email account. If you follow the best practices we introduced in the last chapter, namely choosing a secure password for your email account and activating 2FA this becomes much harder already. Still, there are ways to intercept your email traffic. Using unsecured wifi networks is another attack vector for an adversary to access your online correspondence.

Encrypted emails resolve this problem and are much easier than one might think.

### How to Start?

There are generally two options to choose from if you want to start using encrypted emails. The first and maybe more convenient option is to use add-ons for your existing email accounts and clients. There are add-ons for email service providers such as Gmail. [Apple Mail](https://support.apple.com/guide/mail/sign-or-encrypt-emails-mlhlp1180/mac) and [Microsoft Outlook](https://support.office.com/en-us/article/encrypt-email-messages-373339cb-bf1a-4509-b296-802a39d801dc) natively support encrypted emails.

The second and maybe less convenient option is to switch to a secure email client. These clients such as ProtonMail, CipherPost, Hushmail, or Disroot support email encryption natively from the regular interface. Most of these privacy-centric email providers will support the OpenPGP standard, which is open source and

It's important to note that exchanging encrypted emails only works with people that have set up their encryption as well, either by using an add-on or by configuring their email managers. You need to exchange your public keys before you can address an encrypted email to somebody.

We cover the principle behind public key cryptography in our technology section. With cryptocurrencies, you use the public key to receive money and the private key to spend money. This is analogous to how you use your key pair for encrypted emails. The sender uses your public key to encrypt the text. You will use your private key to decrypt the message later on. Without your public key, people could send you encrypted messages, but you would have no way to decrypt them.

### So, Which One to Choose?

That is a question that only you can answer. The first question you should ask yourself is how sensitive your data is. If you wish to communicate privately but don't have to worry about harsh consequences in case your email correspondence were to become public, an add-on for your existing email will probably do the trick. 

In case you are actually dealing with sensitive information regularly, you should consider switching your email provider or at least creating a second email address for sensitive content. Since you want to protect your privacy, be careful about how much personal information the service provider is requesting during the signup procedure. Make sure you use a [strong password]({{ site.baseurl }}{% post_url /privacy/advanced/2024-03-02-strong-passwords %}) and enable [2FA]({{ site.baseurl }}{% post_url /privacy/advanced/2024-03-03-2fa-two-factor-authentication %}).

All of the following providers have a free service and accept cryptocurrency for premium accounts. Paying with cryptocurrencies or cash cards avoids sharing your banking details or credit card information with the email provider

 - ProtonMail
 - Disroot.org
 - Mailfence

We won't go through the setup procedure for your new account, because almost every service will have a detailed guide on how to set up the account so that you can use strong encryption for your email.

Below we have a few resources that will help you pick an email provider that suits you.

### Encrypted Email Resources

{%
  include further_reading.html
  title="Email Glossary"
  summary="If you find the terms used by privacy-centric email providers confusing, here is a glossary that explains the terminology used in this context."
  author="That One Privacy Guy"
  url="https://thatoneprivacysite.net/email-glossary/"
  image=""
%}

{%
  include further_reading.html
  title="How to use PGP encryption with Gmail"
  summary="Josh Lake reviews different add-ons that can be used to send encrypted mails via Gmail."
  author="Josh Lake" url="https://www.comparitech.com/blog/information-security/pgp-encryption-gmail/"
  image="https://cdn.comparitech.com/wp-content/uploads/2018/10/gmail-logo.jpg"
%}

{%
  include further_reading.html
  title="6 best encrypted email software to protect your data"
  summary="The author reviews six solutions to used encrypted mails in this article."
  author="Costea Lestoc"
  url="https://windowsreport.com/encrypted-email-software/"
  image="https://cdn.windowsreport.com/wp-content/uploads/2018/02/encrypted-email-software-1.jpg"
%}
