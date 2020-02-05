---
layout: post
type: article
title: "L’explorateur de blocs, la suite"
description: "Un explorateur de bloc est un outil qui vous laisse rechercher des données sur une blockchain. Ici, nous regardons quel type d’information vous trouverez."
permalink: /technology/advanced/block-explorer-continued/
topic: technology
level: advanced
chapter: "Les transactions"
---

L'explorateur de blocs est un outil graphique pour visualiser et explorer les données de la blockchain. Il y a un explorateur de blocs disponible pour presque toutes les blockchains publiques. Il permet de parcourir l'historique d'une blockchain donnée. Il pourrait être plus intéressant d'aller au tout début de la technologie de la blockchain et de jeter un coup d'oeil à Bitcoin dans cet exemple.

Si vous savez comment naviguer dans un explorateur de blocs, vous saurez comment les naviguer tous. C’est très intuitif et aide à comprendre comment une blockchain est structurée et comment elle fonctionne. Pour vraiment apprécier cet article, vous devez être familier avec les bases d'une blockchain, des transactions et du mining (ou minage, pour rappel, les deux s’utilisent en français). Vous pouvez toujours revenir à l'un de nos articles précédents sur ces sujets si vous n'êtes pas certain de quelque chose. Si vous êtes familier avec le fonctionnement d'une blockchain, cet article devrait vous aider à aller plus loin dans vos connaissances.

### Qu’allez-vous trouver dans un explorateur de bloc ?

Les informations que vous trouverez dans un explorateur de blocs sont structurées soit par blocs, soit par adresses, soit par transactions individuelles. Examinons un premier exemple pour rendre tout cela plus tangible :

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/block-explorer-continued/latest_blocks.png" alt="Latest blocks">
</div>

Il y a un certain nombre d'explorateurs de blocs, souvent plusieurs versions pour la même blockchain. Puisque nous voulons revenir au début des cryptomonnaies dans cet exemple, nous allons visualiser le Bitcoin et utiliser un des explorateurs les plus populaires : [blockchain.com](https://www.blockchain.com/explorer).

Vous verrez un aperçu des blocs les plus récemment créés sur la page d'accueil. Passons en revue ce que nous voyons ici :

- **Height (Hauteur)** : la hauteur est le nombre que porte le bloc. Le tout premier bloc créé a été le bloc #0, suivi du bloc #1 puis du bloc #2. Comme vous pouvez le constater au moment d'écrire ces lignes, il y a eu beaucoup de blocs minés.
- **Age (Âge)** : C'est l'âge du bloc. C'est explicite, mais il y a une information intéressante entre les lignes : vous savez peut-être que le temps de bloc, l'intervalle dans lequel les nouveaux blocs sont extraits, est de 10 minutes avec Bitcoin. Comment se fait-il qu'il n'a fallu que 6 minutes pour miner le bloc 539.772 et seulement 9 minutes pour le bloc 539.771 ? C'est parce que le temps de bloc est une moyenne. Il y aura toujours des blocs créés plus lentement et quelques-uns qui seront produits beaucoup plus rapidement, mais en moyenne cela prendra 10 minutes. Dans notre article sur le [mining]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}), nous vous expliquons comment le temps de bloc est ajusté.
- **Transactions** : le nombre de transactions incluses dans ce bloc. Cela signifie que dans les 6 minutes qu'il a fallu pour miner le bloc 539.772 environ 1500 transactions ont été effectuées.
- **Total Sent (Total des transactions envoyées)** : Les 1547 transactions qui ont eu lieu totalisent près de 4700 Bitcoins envoyés.
- **Relayed By (Relayé par)** : Le mineur (ou le pool minier) qui a résolu le bloc et qui a gagné la récompense de bloc.
- **Size (Taille)** : la quantité d'espace de stockage qu'un bloc donné occupe.
- **Weight (Poids)** : une autre métrique qui fait référence à la taille d'un bloc. C'est une mesure plus technique, mais comme vous pouvez le voir : plus il y a de transactions dans un bloc et plus le fichier est volumineux, plus le poids du bloc est important.

### Le Bloc Genesis

Jetons un coup d'oeil à un seul bloc. La hauteur du tout premier bloc est 0 comme nous l'avons dit précédemment. Si nous voulons regarder le tout premier bloc de bitcoin qui a été extrait (ou miné), nous pouvons utiliser la fonction de recherche et entrer "0". Si vous n'avez pas encore ouvert le site, [ce lien](https://www.blockchain.com/fr/btc/block-height/0) vous mènera directement au bloc de genèse (Bloc Genesis), c'est ainsi que le tout premier bloc d'une blockchain est toujours appelé.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/block-explorer-continued/genesis_block.png" alt="The Genesis Block">
</div>

Passons en revue les informations que nous pouvons trouver ici. Le bloc Genesis ne contient qu'une seule transaction. C'est le montant minimum que vous verrez puisque chaque bloc a une transaction dite _coinbase_, c'est la transaction qui est utilisée afin d’émettre de nouveaux bitcoins au mineur qui a résolu le bloc.

La récompense pour le minage de Bitcoin, au début, était de 50 BTC. La prime de bloc est réduite de moitié tous les quatre ans (plus précisément tous les 210 000 blocs, c’est le halving). Cela s'est produit deux fois jusqu'à présent. Un mineur reçoit aujourd'hui 12,5 BTC par bloc.

En dehors de la transaction qui a récompensé le mineur (Satoshi Nakamoto lui-même dans ce cas), il n'y a pas de transaction dans ce bloc, c'est pourquoi le volume de transaction estimé est de 0. Aujourd'hui il y a des frais de transaction liés à la plupart des transactions, mais ce ne fut pas toujours le cas, surtout lorsque le réseau était encore à ses débuts.

Nous avons déjà parlé de la hauteur, alors nous allons maintenant passer à l'horodatage. Le premier bitcoin a été extrait le 3 janvier 2009, date anniversaire de la toute première cryptomonnaie.

Le champ "Relayed By" indique qui a extrait le bloc. Les pools de minage d'aujourd'hui et leurs adresses de récompenses sont pour la plupart connus. C'est ainsi que l'explorateur de blocs "sait" qui a extrait le bloc : il compare l'adresse qui a reçu les coins nouvellement générés (1A1zP1...) dans la transaction avec un certain nombre d'adresses connues des pools miniers. Dans ce cas, nous savons qui était le mineur, bien que l'explorateur de blocs ne nous le dise pas : Satoshi Nakamoto lui-même.

Nous parlons plus en détail de la difficulté de notre article sur le [mining]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}). La difficulté décrit à quel point le puzzle que les mineurs doivent résoudre est difficile. Il se réfère au nombre de zéros en tête dans le hachage de bloc. Comme vous pouvez le voir à droite, le hachage du bloc Genesis avait 10 zéros en tête. Aujourd'hui (au moment d'écrire ces lignes) les blocs comme le bloc 539.772 doivent avoir au moins 18 zéros en tête. Plus il y a de zéros en tête, plus le puzzle est difficile.

Les bits, la taille et le poids font tous référence à la taille des données d'un bloc donné, rien de spectaculaire. La version se réfère au logiciel qui a fonctionné au moment où le bloc a été créé.

Passons maintenant à une autre information intéressante : le nonce. Lorsque les mineurs essaient de résoudre un bloc, ce qu'ils font est de mettre différentes valeurs dans le champ Nonce (Un **n**ombre utilisé une fois (**once**)) et de calculer le hachage du bloc. Si le résultat n'a pas le nombre minimum de zéros de début requis (le plus souvent, il n'en aura pas du tout), ils essayent une autre valeur aléatoire pour le nonce et hashent le bloc à nouveau. Ceci est répété jusqu'à ce qu'un mineur trouve un nonce qui produit un hachage avec un nombre suffisant de zéros en tête. Dans le cas du tout premier bloc, l'ordinateur de Satoshi a essayé plus de 2 milliards de valeurs (s'il a commencé à 0) avant de trouver une valeur qui produisait le résultat souhaité. Il a reçu les tout premiers 50 bitcoins comme une récompense de bloc pour cela.

### La première transaction bitcoin

Vous utiliserez probablement un explorateur de blocs pour vérifier l'état d'une transaction. Vous pouvez trouver une transaction donnée soit en recherchant l'une des adresses concernées (adresses d'envoi et de réception), soit par l'ID de transaction (le hash). La plupart des wallets vous montreront l'ID de transaction pour toutes vos transactions.

Si nous voulons regarder la toute première transaction de cryptomonnaie jamais faite, nous devons aller au bloc #170, où la première transaction de bitcoin de Satoshi Nakamoto à Hal Finney est incluse.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/block-explorer-continued/transactions.png" alt="Bitcoin Transaction">
</div>

C'est le premier bloc de la blockchain bitcoin qui contient plus d'une transaction. Nous pouvons trouver la transaction coinbase tout en haut.  En dessous se trouve la première transaction comme vous pouvez vous y attendre. Une personne envoyant des coins à une autre.

Nous espérons que cet article vous aidera à naviguer parmi les explorateurs de blocs de ce monde. Nous vous encourageons à vous amuser un peu avec cela. Je sais que cela m'a beaucoup aidé à comprendre comment l'information est organisée dans une blockchain.
