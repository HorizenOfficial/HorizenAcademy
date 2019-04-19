---
layout: post
type: article
title: "2FA - Two-factor Authentication"
permalink: /privacy/advanced/2fa-two-factor-authentication/
topic: privacy
level: advanced
chapter: "Best Practices"
further_reads: [how_to_set_up_2fa_using_google_authenticator, simplify_and_secure_your_online_logins_with_a_yubikey]
---

Two-factor Authentication or in short, 2FA is a way to let users access a service using a combination of two authentication methods. This may be an additional PIN code or a password, a one-time password (OTP), a fingerprint or other biometric data or even an additional security chip or token inside your device.

We already use 2FA in real life. A notable example is using an ATM to withdraw cash using a debit card and a PIN code. However many services use only one-factor authentication for user identification and that one factor is obviously a password.

The good news is that almost every service in a blockchain world has an optional 2FA built in. It became a de-facto standard in this sphere. Enabling 2FA is one of the best security best practices you can employ as it protects you even in cases of platform-level hacks when the passwords get exposed. Of course, considering that the platform itself has the 2FA implemented correctly. 2FA works by requiring you to prove your identity by a secondary method of authentication in addition to your password. Most commonly the secondary method of authentication is an SMS message sent to your phone number or a code generated on a dedicated application, like Microsoft Authenticator, Google Authenticator or others. 

![2FA](/assets/post_files/privacy/advanced/2fa/2fa_D.jpg)
![2FA](/assets/post_files/privacy/advanced/2fa/2fa_M.jpg)

### 2FA Through Text Messages

We advise you not to use text messages as a 2FA method if possible. There is more than one way an attacker can access text messages or calls your phone is receiving. 

The first and most simple method is social engineering. There have been a number of incidents where an attacker managed to convince an employee of a mobile communications company that "their" phone got lost or the SIM card broke and that they need a replacement immediately. Coincidentally the "customer" just moved and they need to change their address. The company then ships the second SIM card to the attacker. Although this exploit is unlikely to work first try, by repeatedly calling the service hotline of a phone company eventually the attacker might find an employee willing to do just this. 

Another method the attacker might use is to open an account with a different service provider and request your number to be ported. Most providers offer you to keep your number if you switch from let's say Verizon to AT&T. This opens up this simple but effective attack vector. We could go on with the list of possible exploits but the point is: your number is a rather easy target.

### 2FA Aapplications

Using a separate code generating application is important because you can use it offline or in another country without turning on a roaming service. 

2FA comes with a drawback. You become dependent upon it, and like your password manager vault, you have to be careful not to lose your second-factor authentication device which in most cases is your smartphone. Thankfully, many 2FA applications and services offer a way to back up the application itself or keep a backup code for the service itself so that you are not locked out permanently.

If you don't trust a Google application to take care of your 2FA, there are a large number of similar apps. If you want to take it one step further, you can use a hardware device such as the [YubiKey](https://www.yubico.com/) or even the Ledger Hardware Wallet that can store your cryptocurrencies, as well as providing you with 2FA capabilities through [FIDO U2F](https://support.ledger.com/hc/en-us/articles/115005198545-FIDO-U2F). 

There are many written guides and YouTube tutorials on how to set up the various 2FA methods out there. Below you'll find a guide for the Google Authenticator App as well as the YubiKey.

Most methods offer a way to restore your 2FA codes, in case you accidentally delete the app, your phone breaks or you lose your hardware authenticator. Make sure to familiarize yourself with the backup procedure for the method of your choice before you start using it, so you are not caught off guard in such a situation and lose access to your accounts.

### Summary

Enabling 2FA with all accounts that support it substantially improves security. Try not to use text messages as a 2FA method, because this is a vulnerable method with many attack vectors. Using a 2FA app or even hardware device is a better choice. Don't forget to create backups for the method you decided to use.

