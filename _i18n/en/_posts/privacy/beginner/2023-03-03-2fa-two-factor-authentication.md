---
layout: post
type: article
title: "2FA - Two-factor Authentication"
permalink: /privacy/beginner/2fa-two-factor-authentication/
topic: privacy
level: beginner
chapter: "Best Practices"
---

Two-factor Authentication or in short, 2FA is a way to let users access a service using a combination of two authentication methods. This may be an additional PIN code or a password, a one-time password (OTP), a fingerprint or other biometric data or even an additional security chip or token inside your device.

We already use 2FA in real life. A notable example is using an ATM to withdraw cash using a debit card and a PIN code. However many services use only one-factor authentication for user identification and that one factor is obviously a password.

The good news is that almost every service in a blockchain world has an optional 2FA built in. It became a de-facto standard in this sphere.

Enabling 2FA is one of the best security best practices you can employ as it protects you even in cases of platform-level hacks when the passwords get exposed. Of course, considering that the platform itself has the 2FA implemented correctly.



### How Does 2FA Work?

2FA works by requiring you to prove your identity by a secondary method of authentication in addition to your password. Most commonly the secondary method of authentication is an SMS message sent to your phone number or a code generated on a dedicated application, like Microsoft Authenticator, Google Authenticator or others. Using a separate code generating application is a better practice because you can use it offline or in another country without turning on a roaming service. You can also be sure that no one takes over your mobile number and get an SMS before you or alter it in some form or another.

2FA comes with a drawback too - you become dependent upon it and like your password manager vault, you have to be careful not to lose your second-factor authentication device which in most cases is your smartphone. Thankfully, many 2FA applications and services offer a way to back up the application itself or keep a backup code for the service itself so that you are not locked out permanently.

Head over to our intermediate article about 2FA to learn more about the 2FA methods, choose suitable ones and start using them right away.


### Further Reading

{%
  include further_reading.html
  title="How To Set up 2FA Using Google Authenticator"
  summary="This guide explains what the Google Authenticator App is, how you set it up and what you need to do in case your device breaks."
  author="Harsh Agrawal"
  url="https://coinsutra.com/google-authenticator-setup-guide/"
  image="https://coinsutra.com/wp-content/uploads/2018/01/Set-up-2FA-Using-Google-Authenticator.jpg"
%}
