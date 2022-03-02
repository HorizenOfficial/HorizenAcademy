---
layout: post
type: article
title: "Un protocole de transfert de valeur"
description: "Ici, nous comparons les blockchains comme un protocole pour transférer de la valeur à l’internet comme un protocole pour transférer de l’information."
permalink: /technology/beginner/a-protocol-to-transfer-value/
topic: technology
level: beginner
chapter: "Qu’est-ce que la Blockchain ?"
further_reads: [why_bitcoin_lightning_network_is_ingenious, explain_bitcoin_like_im_five, money_as_language]
canonical_link: "/fr/technology/advanced/a-protocol-to-transfer-value/"
---

L'une des grandes innovations de la blockchain se résume à être un protocole de transfert de valeur. Andreas Antonopoulos aime appeler le Bitcoin "un langage pour communiquer de la valeur" qui me semble être une description exacte.

Une analogie qui vous aidera peut-être à comprendre ce concept est le fonctionnement du courrier. Oublions le courrier en tant qu'entité exploitant le service postal pendant une minute et réfléchissons-y de la façon suivante :

Le courrier est sans permission dans le sens où n'importe qui, qui veut envoyer une lettre à quelqu'un peut trouver une boîte postale près de lui et y déposer la lettre. Il arrivera à destination quelques jours plus tard. Vous n'avez pas besoin de demander la permission de qui que ce soit pour le faire. Le "protocole" pour l'envoi d'une lettre comprend deux choses : vous devez y apposer un timbre d'une valeur suffisante et fournir l'adresse à laquelle vous voulez que la lettre soit livrée de manière "standard" : nom, adresse et pays si vous voulez envoyer la lettre à l'étranger.

Avec une blockchain qui exploite une monnaie digitale, le réseau (← Un service décentralisé de “type postal”)  prend soin de délivrer une transaction (← Une lettre ) au destinataire. Le protocole vous demande d’y ajouter de légers frais de transaction (← Le timbre) et fournit l’information nécessaire de façon standard : votre adresse, l’adresse du destinataire, le montant du transfert et votre signature.

![Mail protocol in FR](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/FR_mail_protocol_D.jpg)
![Mail protocol in FR](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/FR_mail_protocol_M.jpg)

Les adresses sur la blockchain sont bien sûr un peu différentes des adresses réelles. Elles ressemblent à ça : 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX. Les signatures sont également un peu différentes des signatures que vous connaissez dans le monde réel. Nous parlerons plus en détail des adresses et des signatures dans les prochains articles de cette section.

 Les [portefeuilles ]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) de cryptomonnaie vous aident à créer une adresse et envoyer des transactions.

## Résumé

Tout comme le courrier est une sorte de "protocole" qui vous permet d'envoyer des biens physiques et Internet (avec son protocole TCP/IP sous-jacent) vous permet de transférer des informations, les cryptomonnaies et leur blockchain sous-jacente fournissent un protocole pour transférer de la valeur. Nous parlerons plus en détail de ce à quoi ressemble réellement une transaction et du type de données nécessaires dans l'article sur [les transactions]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-intro-to-transactions %}).

Maintenant que vous savez ce qu'est une blockchain, voyons [comment fonctionne une blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}).
