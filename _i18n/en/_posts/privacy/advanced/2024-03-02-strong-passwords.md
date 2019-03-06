---
layout: post
type: article
title: "Strong Passwords"
permalink: /privacy/advanced/strong-passwords/
topic: privacy
level: advanced
chapter: "Best Practices"
---

Reusing the same password on many websites and applications is the number one security bad practice. Even large and strong platforms are being hacked and their users' credentials are sold over black markets. There have been cases when the stolen data was available publicly too. Imagine if your credentials were in one of these databases - every account you used the same password for, is essentially hacked too.

It is important that you use a different password for each website or application you create an account for. Consider this the number one security best practice.

![password](/assets/post_files/privacy/advanced/strong-passwords/password.png)

[Source](https://xkcd.com/936/)

### How Are Passwords Hacked?

There are a few well-known methods used by hackers to obtain a password. The easiest way for a hacker to do so is through phishing. 

With Phishing, an attacker tries to get you to hand out your password willingly. This can be done by sending you an email asking you to verify your account. A link in the email might take you to a website that looks just like the original website the email claims to link to. By entering your login information on this duplicate fake website the hackers have achieved their goal.

When you receive a suspicious email like the example above, please do not click on any links. If in doubt, visit the website as you normally would and check your account for notifications requiring users to verify their credentials. If you do not have a notification, the email is most certainly a scam.

If an attacker cannot get you to tell them your password through trickery they have two more options. 

 - Dictionary Attack - In a dictionary attack, the hackers try a large number of common words, e.g. from a dictionary. They will not only use regular words from your Oxford Dictionary but also the most common passwords.
 - In case some of your passwords are along the line of Password123, P4ssword, P4ssw0rt or Thisismypassword you are highly vulnerable to such an attack.
 - Brute Force Attack - A brute force attack focuses on your password. Although an attacker will only use this method if you are the only target. During a brute force attack, the hacker will try out every possible combination of characters, numbers, and symbols until the attacker gains access to your account.

The attacker will most likely combine the dictionary and brute force attack by first trying out the most common passwords before moving on to random guessing.

### What a Password Should Look Like

A strong password should have at least 12 characters. If you are protecting sensitive information, use 20 characters or more. Use a mix of capitalized and regular letters, numbers and symbols. Don't just use symbols or numbers as a replacement for letters as in pa$$word or p4ssw0rt. To an automated attack, the passwords are just as trivial as the original word.

There are some methods that you can apply to create a strong password. The sentence method uses a familiar sentence as a starting point and applies some sort of algorithm to make your password.

You could start out with "I went to school in Woodland Park and played soccer during fall season". Now you can think of an algorithm to create a password out of this sentence, like using the first two characters of each word, the last two characters, the first and the last or any other combination that works for you. Using the first two characters would yield "IwetoscinWoPaanplsodufase". This is a fairly secure password that will survive both a dictionary attack, as well as a brute force attack if the attacker is not 100% committed to you as a target.

Another method is using regular words that don't make sense in this combination. correcthorsebatterystaple is a commonly used example of this method.

### How Do You Remember These?

The difficult and less secure method would be to add some sort of code to the end of a standard password, depending on the account you use it for. 

This way you could use "IwetoscinWoPaanplsodufase_fcbk" for your Facebook account and "IwetoscinWoPaanplsodufase_mzn" for your Amazon Login. There have been many incidents of password databases being hacked and this method would make you vulnerable to such a data breach because the attackers could derive your other passwords if they figure out the scheme you used to adapt the password.

A better method is to use a password manager that generates long and difficult to guess passwords and saves them for you. Now you only have to remember one super strong password to protect your password manager application and you are good to go. 

We covered password managers in our beginner level and [you can find the article here]({{ site.baseurl }}{% post_url /privacy/beginner/2023-04-06-password-manager %}).

### Summary

Using strong passwords is the first step to protecting your data. Use a different password for every service you have an account for! Hackers will try to get their hands on your passwords through phishing, dictionary attacks or through brute force attacks. Your password should have at least 12 characters but 20 is better. Don't use common phrases or rely on simply substituting letters through numbers or symbols. There are some good methods to create strong passwords such as the sentence method. To keep track of all the different passwords, use a [password manager]({{ site.baseurl }}{% post_url /privacy/beginner/2023-04-06-password-manager %}).


### Further Reading

{%
  include further_reading.html
  title="How to create a strong password"
  summary="The author explains the most common ways passwords get hacked, examines the anatomy of strong passwords suggests methods to create them."
  author="Charlotte Empey"
  url="https://blog.avast.com/strong-password-ideas"
  image="https://blog.avast.com/hs-fs/hubfs/Avast-blog-phishing-tax-season.jpg?width=1920&name=Avast-blog-phishing-tax-season.jpg"
%}
