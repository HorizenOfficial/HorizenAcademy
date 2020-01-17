---
layout: post
type: article
title: "E-mail chiffré"
description: "Pour un hacker chevronné, il est incroyablement facile d'intercepter vos e-mails. L'envoi d’e-mails chiffrés réduit ce risque et est beaucoup plus facile qu'on pourrait le croire."
permalink: /privacy/advanced/encrypted-email/
topic: privacy
level: advanced
chapter: "Les outils pour protéger la vie privée"
further_reads: [email_glossary, how_to_use_pgp_encryption_with_gmail, 6_best_encrypted_email_software_to_protect_your_data]
---

Pour un hacker averti, il est incroyablement facile d'intercepter vos e-mails si vous êtes sa cible. La façon la plus simple de mettre la main sur les e-mails de quelqu'un d'autre est d'avoir accès à son compte e-mail. Si vous suivez les meilleures pratiques que nous avons présentées dans le dernier chapitre, à savoir choisir un mot de passe sécurisé pour votre compte de messagerie et activer la 2FA, cela devient déjà beaucoup plus difficile. Il existe néanmoins des moyens d'intercepter votre trafic de courrier électronique. Pour un adversaire, l'utilisation de réseaux wifi non sécurisés est un vecteur d'attaque afin d'accéder à votre correspondance en ligne.

Les e-mails chiffrés résolvent ce problème et sont beaucoup plus faciles à utiliser qu'on ne le pense.

### Par où commencer ?

Il y a généralement deux options parmi lesquelles choisir si vous voulez commencer à utiliser les e-mails chiffrés. La première option, et peut-être la plus pratique, est d'utiliser des add-ons pour vos comptes de messagerie et clients existants. Il existe des add-ons pour les fournisseurs de services de messagerie tels que Gmail. [Apple Mail](https://support.apple.com/guide/mail/sign-or-encrypt-emails-mlhlp1180/mac) et [Microsoft Outlook](https://support.office.com/en-us/article/encrypt-email-messages-373339cb-bf1a-4509-b296-802a39d801dc) prennent en charge nativement les e-mails chiffrés.

La deuxième option, peut-être moins pratique, est de passer à un client de messagerie sécurisé. Ces clients tels que ProtonMail, CipherPost, Hushmail ou Disroot prennent en charge le chiffrement des e-mails directement depuis leur interface de base. La plupart de ces fournisseurs de messagerie centrés sur la protection de la vie privée prendront en charge le standard OpenPGP, qui est open source et libre.

Il est important de noter que l'échange d’e-mails chiffrés ne fonctionne qu'avec les personnes qui ont également configuré leur chiffrement, soit en utilisant un add-on, soit en configurant leurs gestionnaires d’e-mails. Vous devez échanger vos clés publiques avant de pouvoir envoyer un e-mail chiffré à quelqu'un.

Nous couvrons ce principe derrière la cryptographie à clé publique dans notre section technologie. Avec les cryptomonnaies, vous utilisez une clé publique pour recevoir de l'argent et une clé privée pour dépenser de l'argent. Ceci est analogue à la façon dont vous utilisez votre paire de clés pour les e-mails chiffrés. L'expéditeur utilise votre clé publique pour chiffrer le texte. Vous utiliserez votre clé privée pour déchiffrer le message plus tard. Sans votre clé publique, les gens pourraient vous envoyer des messages chiffrés, mais vous n'auriez aucun moyen de les déchiffrer.


### Alors, lequel choisir ?

C'est une question à laquelle vous seul pouvez répondre. La première question que vous devriez vous poser est de savoir dans quelle mesure vos données sont sensibles. Si vous souhaitez communiquer de manière privée, mais que vous n'avez pas à vous soucier des conséquences si votre correspondance par e-mail devait devenir publique, un add-on à votre e-mail existant fera probablement l'affaire.

Si vous traitez régulièrement des informations sensibles, vous devriez envisager de changer de fournisseur de messagerie ou au moins de créer une deuxième adresse e-mail pour les contenus sensibles. Puisque vous voulez protéger votre vie privée, faites attention à la quantité de renseignements personnels que le fournisseur de services vous demande lors de la procédure d'inscription. Assurez-vous d'utiliser un
 [mot de passe fort]({{ site.baseurl }}{% post_url/privacy/advanced/2024-03-02-strong-passwords %}) et d'activer la [2FA]({{ site.baseurl }}{% post_url/privacy/advanced/2024-03-03-2fa-two-factor-authentication %}).

 Tous les fournisseurs suivants ont un service gratuit et acceptent la cryptomonnaie pour les comptes premium. Payer avec des cryptomonnaies ou des cartes de paiement prépayées évite de partager vos coordonnées bancaires ou vos informations de carte de crédit avec le fournisseur de messagerie électronique.

 - ProtonMail
 - Disroot.org
 - Mailfence

Nous ne passerons pas par la procédure d'installation de votre nouveau compte, car presque tous les services auront un guide détaillé sur la façon d'installer le compte afin que vous puissiez utiliser un chiffrement fort pour votre e-mail.

 Vous trouverez ci-dessous quelques ressources qui vous aideront à choisir le fournisseur de services d’e-mail qui vous convient.
