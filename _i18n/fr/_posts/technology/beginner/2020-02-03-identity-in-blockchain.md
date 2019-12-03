---
layout: post
type: article
title: "Identité dans Blockchain"
description: "Ici, nous parlerons de l'endroit où la cryptographie entre en scène et de ce que cela a à voir avec votre identité. Sans identité, il ne peut y avoir de propriété"
permalink: /technology/beginner/identity-in-blockchain/
topic: technology
level: beginner
chapter: "Comment fonctionne une blockchain?"
further_reads: [the_impact_of_digital_identity, how_blockchain_can_solve_identity_management_problems]
---

Dans notre dernier article traitant des éléments d'une blockchain, nous avons conclu que les mineurs sont les teneurs de registre d'une cryptomonnaie. Ils font le suivi des fonds disponibles et de leurs propriétaires. Nous devons présenter le concept d’identité pour avoir la propriété. Vous voulez être le seul propriétaire de vos fonds et vos fonds doivent être associés à vous. Parlons donc du moment où la cryptographie entre en scène et de ce que cela a à voir avec votre identité.

### Cryptographie à clé publique

L'un des concepts fondamentaux qui font fonctionner les blockchains et les cryptomonnaies est le concept de _cryptographie asymétrique_ aussi connu comme _cryptographie à clé publique_.
Avec la cryptographie symétrique, vous utilisez la même clé pour chiffrer un texte que vous utiliserez pour le déchiffrer plus tard (comme un cadenas).

![Symmetric in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_symmetric_D.jpg)
![Symmetric in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_symmetric_M.jpg)

Avec la cryptographie asymétrique, vous chiffrez et déchiffrez un message en utilisant deux clés différentes, la clé publique, et la clé privée. Les clés viennent toujours par paire. Si vous chiffrez un message avec une clé publique, il devra être déchiffré avec la clé privée correspondante et vice versa. Vous avez toujours une paire de clés. Cela se résume à un concept simple: Votre paire de clé est votre identité sur la blockchain.

![Asymmetric in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_asymmetric_D.jpg)
![Asymmetric in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_asymmetric_M.jpg)

### Votre paire de clés est votre identité

Votre paire de clés est votre identité

L'idée générale dans les cryptomonnaies est que vous recevez des fonds grâce à votre clé publique et les dépensez avec votre clé privée. Une clé privée sur la blockchain Horizen pourrait ressembler à cela:

Kz6994Ek9L3uzjQo2wANaHguBbEShoHZo6q1Y3r6rXrHfWka1fnx

et la clé publique correspondante ou l’adresse à cela:

znSrHR9ssjKMsrYfk5fTmKH4LbgDxXJ3s6j

Ces deux clés sont intentionnellement appelées clé publique et clé privée. Vous pouvez partager votre clé publique à n’importe qui qui veut vous envoyer des fonds. Votre clé privée, comme son nom l’indique, devrait rester privée en toutes circonstances, car elle vous permet de dépenser vos fonds. Si quelqu'un d'autre met la main sur votre clé privée, il peut accéder à vos fonds et les voler.

La comparaison dans la vraie vie que vous entendrez le plus souvent est que votre clé publique est comme votre adresse. Vous pouvez la donner à n'importe qui qui veut vous envoyer une lettre. Votre clé privée est comme la clé de votre boîte aux lettres. Seule cette clé vous permet d'accéder à votre courrier et vous ne la donneriez pas à un étranger. Si vous voulez en savoir plus sur ce concept, vous trouverez une explication plus détaillée dans la [section avancée]({{ site.baseurl }}{% post_url /privacy/advanced/2021-02-04-public-key-cryptography %}) et une description exacte dans la section expert.

Vos clés sont importantes pour envoyer et recevoir des transactions. Techniquement, une transaction est un message vers tous les noeuds du réseau. Ce message inclut le montant des fonds que vous souhaitez envoyer, et à qui. Cette information est ensuite chiffrée avec votre clé privée, une étape que nous appelons _signature de la transaction_.

![Signing in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_signing_D.jpg)
![Signing in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_signing_M.jpg)

Une signature digitale fonctionne de la même manière que pour l’autorisation d’une transaction dans la vie réelle en utilisant votre signature “analogique”. Même avec les supercalculateurs modernes, il est impossible de forger une telle signature numérique. Par conséquent, la cryptographie à clé publique est considérée comme l'un des moyens de chiffrement les plus sûrs actuellement disponibles.

Tout cela serait fastidieux à faire manuellement et exigerait une certaine habileté. Heureusement, il existe des [portefeuilles]({{ site.baseurl }}{% post_url /privacy/advanced/2020-03-01-wallets %}) qui vous aident à faire tout ce qui précède. Les portefeuilles se chargent de la génération et de la gestion de vos clés ainsi que du chiffrement et du déchiffrement nécessaires. Ce qui est vraiment important, c'est de comprendre que votre clé privée est utilisée pour autoriser l'utilisation de vos fonds. La première leçon, et la plus importante, c'est d'assurer sa sécurité. Personne ne peut vous aider à récupérer vos clés au cas où vous les perdriez. Si quelqu’un était capable de les récupérer pour vous, cela voudrait dire qu’il peut prendre tout vos fonds.

### Résumé

Votre paire de clé est votre identité sur la blockchain. Votre clé publique est similaire à votre adresse et utilisée pour recevoir des fonds. Alors que votre clé privée est une sorte de mot de passe qui vous permet (ou qui que ce soit qui met la main dessus) de dépenser vos fonds. Protégez toujours vos clés privées et ne les donnez jamais à d'autres personnes ! S'ils vous demandent votre clé privée, c'est très certainement une arnaque.
