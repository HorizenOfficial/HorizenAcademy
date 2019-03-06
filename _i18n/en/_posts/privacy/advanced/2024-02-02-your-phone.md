---
layout: post
type: article
title: "Your Phone"
permalink: /privacy/advanced/your-phone/
topic: privacy
level: advanced
chapter: "Where Your Privacy is Compromised?"
---

In our beginner level article - [Your Phone and Computer]({{ site.baseurl }}{% post_url /privacy/beginner/2023-02-01-your-phone-and-computer %}) we touched how privacy is compromised on two most used devices today - a phone and a computer. In this article we will focus on a phone, the most used one of two.

Mobile phones of today are tiny powerful computers - they have tons of storage and processing power available at their disposal and because of portability, ease and frequency of use, there are tons of productivity applications available for smartphones, not seen on a personal computer. Mail, messaging, chat apps, wallets, banking software, personal notes, photos and videos are just a tiny example of what we use or store on our phones. The increased attack surface of smartphones attracts a lot of malevolent interest to them. Let us touch some ways of privacy compromise in details.

 - Password/PIN protection is the absolute essential - without this your phone is like an open house, inviting anyone to get their hands on whatever they wish.
 - Applications from unofficial app stores are dangerous too. No one checks the validity and integrity there and attackers often leverage this possibility heavily. Sticking with the official app stores is essential, for any operating system.
 - Cracked applications are another source of privacy compromise. Cracks often include malware undetectable by antivirus and antimalware software which gives attackers the possibility to even take over your device and eavesdrop on you.
 - The so-called jailbreaks are dangerous too because they disable many of the device's security measures and open the core of it for apps to be more accessible.
 - Free Wi-Fi comes at a cost - open Wi-Fi network means the data transmitted is not encrypted and attackers may be able to eavesdrop and hijack important sensitive information such as passwords.
 - And normal software, such as browsers can be used to alter your privacy too. You can read more about them in our tools section: [Browser]({{ site.baseurl }}{% post_url /privacy/beginner/2023-04-02-browser %})

Apart from that, there are other more sophisticated and dangerous methods that can be used to track people on mobile networks, not depending on any security measure user takes on his or her end, not mentioning turning off the phone itself, of course. One of the scariest is a hack that uses a network interchange service called Signalling System No. 7 (SS7). Successfully exploiting it, the attacker can read text messages, listen to calls and track a smartphone based on mobile phone mast triangulation, using only a phone number as an identifier. You can read more about SS7 attack below, in a further reading section.

Using full device encryption is also a must to avoid any data breach in case of device theft. Both popular operating systems, iOS and Android offer the options for it.



### Special note about using SMS as a 2FA method

We advise you not to use text messages as a 2FA method if possible. There is more than one way an attacker can access text messages or calls your phone is receiving. 

The first and most simple method is social engineering. There have been a number of incidents where an attacker managed to convince an employee of a mobile communications company that "his" phone got lost or his SIM card broke and that he needs a replacement immediately. Coincidentally the victim also just moved, so the address is changed and a second SIM card is shipped to the attacker. Although this exploit is unlikely to work first try, by repeatedly calling the service hotline of a phone company eventually the attacker might find an employee willing to do just this. 

Another method the attacker might use is to open an account with a different service provider an request your number to be ported. Most providers offer you to keep your number if you switch from let's say Verizon to AT&T. This opens up this simple but effective attack vector. We could go on with the list of possible exploits but the point is: your number is a rather easy target. You can read more about 2FA in our best practices section. 


### Further Reading:

{%
  include further_reading.html
  title="Your phone number is all a hacker needs to read texts, listen to calls and track you"
  summary="Weaknesses within mobile phone network interconnection system allows criminals or governments to remotely snoop on anyone with a phone"
  author="Samuel Gibbs"
  url="https://www.theguardian.com/technology/2016/apr/18/phone-number-hacker-read-texts-listen-calls-track-you"
  image="https://static.wixstatic.com/media/17b7f4_bf0094f297124b179578a2dec09d85d6~mv2.jpg"
%}

{%
  include further_reading.html
  title="Do Not Let Criminals Steal Your Cellphone Number With This Scam"
  summary="Criminals want to steal your phone number. If they can get it, they can set up a new cellphone with that number - and receive all of your calls and text messages. They can send messages to your friends and colleagues tricking them into doing all sorts of bad things. And, if you use multi-factor authentication for social media sites or online banking - they can receive those messages as well, potentially, in some cases, giving them access to your social media accounts and bank accounts."
  author="Joseph Steinberg"
  url="https://www.inc.com/joseph-steinberg/do-not-let-criminals-steal-your-phone-without-having-to-actually-take-the-device.html"
  image="https://www.incimages.com/uploaded_files/image/970x450/getty_522695431_201336.jpg"
%}

