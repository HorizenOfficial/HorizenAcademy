---
layout: post
type: article
title: "Introduction aux transactions"
description: "Cet article vous donne une bonne analogie à garder à l'esprit lorsque vous réfléchissez à ce qu'est une transaction de cryptomonnaie et comment elle fonctionne."
permalink: /technology/beginner/intro-to-transactions/
topic: technology
level: beginner
chapter: "Les transactions"
---

L'argent numérique ne servirait à rien s'il n'y avait aucun moyen de l'envoyer d'une personne à l'autre. Dans cet article, nous voulons vous montrer comment fonctionnent les transactions et à quoi servent vos clés.

Dans le tout premier article de la section technologie, nous avons dit que la [blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-02-blockchain-as-a-data-structure %}) est un grand registre public qui garde la trace de toutes les transactions qui se sont passées sur le réseau. Dans le dernier article, nous avons indiqué qu'un [portefeuille]({{ site.baseurl }}/technology/advanced/types-of-wallets/) est une application qui vous aide à gérer vos clés et à créer des transactions.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/FR_T1_balance_D.jpg)

Un portefeuille obtient votre solde en surveillant la blockchain pour toute transaction impliquant votre adresse. Initialement, toutes les transactions sont verrouillées cryptographiquement. Le verrouillage est basé sur l'adresse à laquelle la transaction est envoyée et ne peut être déverrouillé qu'avec la clé privée correspondante.

Supposons maintenant que nous sommes sur votre portefeuille. Vous avez reçu un total de 20 ZEN en deux transactions différentes de 10 ZEN chacune. Maintenant vous voulez dépenser 2 ZEN pour le déjeuner. Votre portefeuille commence par une transaction vide et, dans un premier temps, choisit une de vos transactions précédentes à dépenser. Dans ce cas, les deux transactions ont une valeur suffisante pour que votre portefeuille puisse choisir au hasard la première.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/FR_T2_input_D.jpg)

L'argent qui est dépensé dans une transaction est appelé l'entrée (input) et l'argent qui est reçu est appelé la sortie (outpout). Votre portefeuille place l'une des sorties que vous possédez dans la transaction vide et utilise votre clé privée pour la déverrouiller afin qu'elle devienne utilisable ; c'est ce que nous appelons signer la transaction. La sortie déverrouillée est maintenant utilisée comme entrée pour une nouvelle transaction.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/FR_T3_outputs_D.jpg)

Ensuite, votre portefeuille crée les sorties. Il vous demande une adresse pour envoyer de l'argent et un montant. Vous voulez envoyer 2 ZEN à l'adresse XYZ pour payer votre déjeuner, donc votre portefeuille crée la première sortie en conséquence. La deuxième sortie est générée automatiquement ; c'est ce qu'on appelle la sortie de change. Les sorties sont semblables aux coupures en espèces. Si vous devez payer 2 $ US, mais que vous n'avez qu'un billet de 10 $, vous vous attendez à recevoir 8 $ en monnaie. Votre portefeuille inclut automatiquement le change dans la transaction. Les sorties nouvellement générées sont verrouillées par défaut.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/FR_T4_broadcast_D.jpg)

Enfin, votre portefeuille diffuse la transaction sur le réseau, où tous les nœuds et les mineurs vérifieront si la signature que vous avez utilisée pour débloquer votre argent est valide. Si c'est le cas, les mineurs incluront votre transaction dans le bloc suivant. La sortie de 10 ZEN que vous avez utilisé est désormais visible publiquement comme dépensée. Les sorties 2 et 8 ZEN nouvellement créées sont incluses dans un nouveau bloc et bloquées ; ou non dépensées. C'est ici qu'on parle du terme UTXO - Unspent Transaction Output _(sortie de transaction non dépensée, ndt)_ - c'est à cela qu'il fait référence.

![Balance](/assets/post_files/technology/beginner/intro-to-transactions-basic/FR_T5_confirmed_D.jpg)

Lorsque vous possédez 10 ZEN, cela signifie que vous avez reçu 10 ZEN dans une transaction et que vous n'avez pas encore débloqué ou dépensé cette sortie.

## Résumé

Une transaction est une entrée unique dans la blockchain. Pour recevoir une transaction, vous devez fournir votre adresse à l'expéditeur. Un verrou cryptographique est automatiquement placé sur chaque sortie de transaction. Pour dépenser votre argent - la sortie d'une transaction - votre portefeuille utilise votre clé privée pour déverrouiller la sortie et l'utilise comme entrée pour la nouvelle transaction. Les résultats de votre transaction sont générés par votre portefeuille en fonction de l'adresse et du montant à transférer. Une fois que la transaction est envoyée au réseau, vérifiée et incluse dans le bloc suivant, la sortie que vous avez utilisée est marquée publiquement comme dépensée.
