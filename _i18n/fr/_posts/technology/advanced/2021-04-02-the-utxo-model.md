---
layout: post
type: article
title: "Le modèle UTXO"
description: "La mayoría de las cadenas de bloques emplean el modelo UTXO (Unspent Transaction Output) para rastrear los fondos de un usuario. Aquí explicaremos cómo funciona."
permalink: /technology/advanced/the-utxo-model/
topic: technology
level: advanced
no_alternate: true
chapter: "Les transactions"
---

Avant d'entrer dans le fonctionnement des transactions (TX's) sur une blockchain et les différents types qui existent, nous devons vous présenter le modèle UTXO (Unspent Transaction Output).

Lorsque vous pensez à la façon dont votre banque tient la comptabilité de votre compte bancaire, c'est assez intuitif. Vous détenez un certain montant de fonds dans votre compte qui a un numéro (de compte). Si vous recevez une transaction entrante, le montant est ajouté à votre solde. Si vous dépensez de l'argent, le montant que vous dépensez est soustrait de votre solde. Avec les cryptomonnaies, la comptabilité fonctionne un peu différemment.

La blockchain ne crée pas de "compte" pour vous permettre de maintenir un solde. Aucun solde final n'est enregistré dans le registre. La blockchain n'enregistre que les transactions individuelles et pour vérifier votre solde, une étape supplémentaire est nécessaire. Votre portefeuille le fait automatiquement lorsque vous l’ouvrez. Ce qui se passe en arrière-plan c’est que votre portefeuille scan le registre de toutes les transactions de votre (ou vos) adresse(s) et les additionne.

![wallet]({{site.baseurl_root}}/assets/post_files/technology/advanced/4.1-the-utxo-model/wallet_balance_Int_M.jpg)
![wallet]({{site.baseurl_root}}/assets/post_files/technology/advanced/4.1-the-utxo-model/wallet_balance_Int_M.jpg)

Chaque transaction sur la blockchain a une ou plusieurs entrées et une ou plusieurs sorties. Examinons un exemple réel au cours d'une série de quatre transactions :

Habituellement, un explorateur de blocs vous montrera d'abord les transactions les plus récentes. Pour cet exemple, nous allons passer en revue les transactions dans l’ordre dans lequel elles se sont passé; chronologiquement. Nous avons raccourci les adresses pour une meilleure lisibilité. L'adresse qui nous intéresse ici est l'adresse grise : znRwe.... Disons que c'est Bob et l'autre, c'est Alice (en bleu).

Bob reçoit sa première transaction

![première TX]({{site.baseurl_root}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX1.png)

Dans la [première TX](https://explorer.zensystem.io/tx/bbbd1fb01998eec8c3ca99236f9b6a2c92e12533ab3e15b7544dcd3228988c34) (ci-dessus), l'adresse de Bob est financée quand il reçoit 10.2 ZEN. La TX individuelle a une entrée et deux sorties. La première sortie (10.2 ZEN) est ce qu'Alice voulait transférer à Bob, la seconde sortie s'appelle le _change de sortie (change outpout)_. L'entrée qu'Alice utilisait était le résultat d'une transaction qu'elle avait reçue auparavant. Lorsque ses fonds demeuraient toujours intacts, il s'agissait d'une sortie de transaction non dépensée (UTXO). Une sortie de transaction est dépensée est indiquée par un (S) après le montant. Une transaction non dépensée est indiquée par un (U) au même endroit. Mais nous y reviendrons dans une minute. Alice n'avait pas d’UTXO qui était exactement 10.2 ZEN alors elle en a utilisé une qui était plus grande et s'est renvoyé les ZEN restant, tout comme vous recevriez la monnaie dans un magasin si vous deviez payer 45 € avec un billet de 50 €.

![deuxième TX]({{site.baseurl_root}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX2.png)

Dans la [deuxième transaction](https://explorer.zensystem.io/tx/62be1b18d6048194fc45209dc727fa932ab4a426072372f6d8cf537fe1f221ee), Bob utilise son UTXO de 10.2 ZEN pour créer une TX où il dépense 5 ZEN et renvoie le change de 5.1999 ZEN à sa propre adresse. La différence entre les entrées et les sorties est consommée comme frais de transaction (ici 0.0001 ZEN). Il possède maintenant 5.1999 ZEN sur son adresse znRwe...

![troisième TX]({{site.baseurl_root}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX3.png)

Dans une [troisième transaction](https://explorer.zensystem.io/tx/315a5e96d92cb19e7529a78e05bcfc3ffb3b5f1fdeaf2b22c582663464219c27), Bob reçoit 2 ZEN supplémentaires, ce qui porte son solde à 7,1999 ZEN. Il a maintenant deux UTXO à sa disposition pour d'autres transactions : une de 5.1999 ZEN et une autre de 2 ZEN. S'il ouvrait son wallet à ce moment-là, cela lui donnerait un solde de 7,1999 ZEN en examinant toutes les transactions sur la blockchain, en filtrant celles qui concernent son adresse, puis en additionnant toutes les TX entrantes et en soustrayant toutes les TX sortantes.

![dernière TX]({{site.baseurl_root}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX4.png)

Dans la [dernière transaction](https://explorer.zensystem.io/tx/14f8bc13c9d125558830e4c1cdc5c8bea6d01d224ced153c234471f107d63aa1) de cet exemple, Bob veut dépenser 6 ZEN. Aucune des deux UTXO qu'il possède à ce moment-là n'est suffisante à cette fin. Bien que l'explorateur de blocs n'affiche qu'une seule entrée pour la dernière transaction, le portefeuille a en fait utilisé deux entrées lors de sa création. Il a combiné les deux UTXO restantes d'une valeur de 7.1999 et a créé deux sorties : la sortie 6 ZEN qu'il voulait réellement dépenser et une sortie supplémentaire pour le change de 1.1998 (1.1999 moins les frais de transaction).

Vous pouvez voir que les deux sorties TX sont dépensées, indiquées par le (S) à côté d'elles dans la deuxième et la troisième capture d'écran.

### Résumé

La plupart des blockchains utilisent le modèle UTXO pour la comptabilité. Il y a quelques exceptions, comme Ethereum, qui utilise en fait un modèle de compte. La sortie d'une transaction qui vous est adressée est ce que vous utiliserez comme entrée pour créer une transaction sortante.

Quand les gens demandent ce qu'est un ZEN ou un bitcoin, ce serait la réponse exacte. Une sortie de transaction non dépensée ou UTXO que vous pouvez déverrouiller avec votre clé privée EST votre coin. Il n'y a pas d'abstraction en plus. Cela peut prendre un moment ou une seconde lecture pour se familiariser avec cela, mais c'est un concept simple et soigné et nous espérons que l'exemple ci-dessus vous a aidé à comprendre ce qu'est le modèle UTXO. Si vous avez bien compris le modèle UTXO, cela vous aidera beaucoup à comprendre les articles suivants.

L'article suivant traite de l'[explorateur de blocs](https://academy.horizen.io/fr/technology/advanced/block-explorer-continued/), un outil qui vous permet d'accéder à l'information sur une blockchain, comme la façon dont un navigateur Web vous permet d'accéder à l'information sur Internet. C'est ce que nous avons fait avec les captures d'écran ci-dessus. Nous vous encourageons à l'utiliser car il vous aidera à comprendre le modèle UTXO et les blockchains en général si vous explorez quelques transactions par vous-même.
