---
layout: post
type: intro
title: "Résumé niveau débutant"
description: "nNus terminons le niveau débutant de la technologie avec une revue de tout ce que nous avons appris."
permalink: /technology/beginner/summary/
topic: technology
level: beginner
chapter: "Résumé"
further_reads: [planting_bitcoin]
---

### Résumé

Ceci est le dernier article de notre section technologie pour débutants. Nous espérons que les articles précédents vous ont aidé à comprendre ce qu'est une blockchain, comment elle fonctionne et comment l'utiliser. Ici, nous aimerions résumer ce que nous avons couvert dans la section technologie pour débutants.

Une blockchain est une [méthode de stockage de données]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-02-blockchain-as-a-data-structure %}). Cette méthode de traitement des données vous permet de transférer de la valeur sans impliquer une entité centrale.

![List table chain in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_list_table_chain_D.jpg)
![List table chain in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_list_table_chain_M.jpg)

Nous avons fait la comparaison entre la blockchain étant un [protocole de transfert de valeur]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-03-a-protocol-to-transfer-value %}) et Internet étant un protocole qui vous permet de transférer des informations. Nous avons également comparé la blockchain à la poste qui est un "protocole" pour l'envoi de marchandises physiques. Le protocole est déployé sur un nombre important d’ordinateurs tout autour du monde. Les données sur la blockchain sont tellement sécurisées, et les noeuds communiquent si bien entre eux qu’aucun tiers n’est requis pour assurer les transactions entre les monnaies digitales.

![Mail protocol in FR](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/FR_mail_protocol_D.jpg)
![Mail protocol in FR](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/FR_mail_protocol_M.jpg)

Les [mineurs]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) sont les teneurs de registre d'une blockchain. Ils prennent collectivement des décisions sur ce qui s'est passé dans le passé, ce qui permet au réseau de parvenir à un consensus sur la situation actuelle. Les mineurs ont besoin de matériel et d'électricité spéciaux. Les mineurs sont en compétition pour trouver le prochain bloc le plus rapidement. Ils reçoivent ensuite les coins créés s’ils ont fini le travail en premier. C’est comme cela qu’un protocole de cryptomonnaie décentralisée peut rémunérer sa propre maintenance.

![Miner in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_miner_D.jpg)
![Miner in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_miner_M.jpg)

Les [nodes]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) constituent l'infrastructure du réseau lui-même. Les noeuds complets maintiennent une copie de la blockchain et vérifient toutes les transactions sur le réseau, ainsi que les nouveaux blocs. Les noeuds légers ne stockent que votre paire de clés. La plupart des wallets mobiles ou de bureau sont des noeuds légers.

![Nodes in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_nodes_D.jpg)
![Nodes in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_nodes_M.jpg)

Votre clé publique est comme votre adresse sur la blockchain et votre clé privée est le mot de passe pour accéder à votre adresse et aux fonds qu'elle contient. En tant que paire, ils représentent [votre identité sur une blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}). Les paires de clés font partie d'un schéma de chiffrement appelé cryptographie à clé publique qui est l'un des principaux piliers de la technologie de la blockchain.

![Asymmetric in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_asymmetric_D.jpg)
![Asymmetric in FR](/assets/post_files/technology/beginner/identity-in-blockchain/FR_asymmetric_M.jpg)

Les [Les portefeuilles (les wallets)]({{ site.baseurl }}/technology/advanced/types-of-wallets/) peuvent générer et gérer les clés pour vous, vous montrer votre solde en trouvant toutes les transactions que vous avez reçues sur la blockchain, et créer de nouvelles transactions.

![Wallet does in FR](/assets/post_files/technology/beginner/wallets/FR_wallet_does_D.jpg)
![Wallet does in FR](/assets/post_files/technology/beginner/wallets/FR_wallet_does_M.jpg)

Une [transaction]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-intro-to-transactions %}) est un message vers le réseau qui informe tous les participants que de l’argent a changé de mains. Si vous souhaitez envoyer une transaction, vous devez débloquer votre argent grâce à votre clé privée. Ensuite vous choisissez l’adresse (ou les adresses) qui va (vont) recevoir le montant déterminé. La transaction est tout simplement un message qui dit “Alice envoie 10 ZEN à Bob”. Cette déclaration est ce qui représente les coins de Bob.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/FR_T4_broadcast_D.jpg)

Afin d'accéder à l'information sur la blockchain, vous utiliserez un [explorateur de bloc]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-03-block-explorer-introduction %}). Tel un navigateur qui va vous permettre d’accéder aux informations sur internet, l’explorateur de bloc va vous permettre d’accéder aux informations de la blockchain. Vous pouvez chercher des adresses, des transactions, ou des blocs entiers.

![Explorer address summary](/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_summary.png)

Bien que les cryptomonnaies ne soient pas anonymes par défaut, certaines d'entre elles offrent des fonctionnalités qui vous permettent de faire des transactions privées. Pour augmenter le niveau de confidentialité, vous devez utiliser des adresses différentes pour chaque transaction entrante. Il est donc plus difficile pour un adversaire de suivre l'historique de vos transactions. La plupart des wallets le feront automatiquement pour vous. Vous pouvez utiliser des cryptomonnaies avec des fonctions de confidentialité améliorées, comme Horizen, qui offre les Zero-Knowledge Proofs, pour effectuer des transactions entièrement privées. En utilisant un différent type d’adresse (adresse Z) avec le même portefeuille, vos transactions deviennent privées.

![zkproof in FR](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof_D.jpg)
![zkproof in FR](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/zkproof_M.jpg)

### Remarques finales

Les cryptomonnaies et la blockchain ne sont pas un sujet facile. Dans cette ligne d'articles, nous essayons de l'expliquer de manière intuitive sans sacrifier trop de précision. Il nous a fallu un certain temps pour comprendre la technologie de la blockchain lorsque nous avons commencé. J'ai lu des articles plusieurs fois jusqu'à ce qu'ils cliquent avec moi. Vous pouvez toujours revenir pour relire ces articles. Il sera beaucoup plus logique de les lire une deuxième fois avec une petite pause entre les deux.

Si vous vous sentez à l'aise avec tout ce que vous avez lu et que vous aimeriez continuer à apprendre : il y a plus ! Montez d'un niveau et consultez nos [articles avancés]({{ site.baseurl }}{% post_url /technology/advanced/2021-12-31-tech-advanced %}). Nous les avons structuré de la même manière, mais nous avons ajouté plus de détails à tous les sujets et nous les avons divisé pour examiner de plus près les différentes composantes. Nous avons conçu le contenu de manière à ce que vous puissiez le lire de haut en bas (ce que nous ne pouvons que recommander) ou sauter aux articles qui vous intéressent particulièrement.

Nous espérons que vous avez aimé cette série d'articles. Veuillez nous faire savoir s'il y a quelque chose que vous trouvez déroutant. Le contenu fourni est et sera en cours d'élaboration pendant un certain temps. Nous sommes toujours ouverts aux suggestions et aux commentaires constructifs, alors envoyez-nous un message à [academy@horizen.global](mailto:jonas@horizen.global) si vous voulez partager vos idées avec nous.

**Votre équipe Horizen**
