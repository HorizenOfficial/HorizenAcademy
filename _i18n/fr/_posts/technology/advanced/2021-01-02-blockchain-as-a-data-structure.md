---
layout: post
type: article
title: "La blockchain comme structure de données"
description: "Premièrement, depuis le point de vue d’un informaticien qui voit la blockchain comme une structure de données."
permalink: /technology/advanced/blockchain-as-a-data-structure/
topic: technology
level: advanced
chapter: "Qu’est-ce que la blockchain?"
---

On peut expliquer la technologie de Blockchain de différentes manières. L'examen de la blockchain sous l'angle des cryptomonnaies a été le récit dominant jusqu'à récemment. Le bitcoin est la première chose que la plupart des gens associeront à la technologie de la blockchain, mais faciliter les transactions de cryptomonnaie n'est qu'un cas d'utilisation parmi tant d'autres. Dans cet article, nous aimerions prendre un peu de recul et examiner la blockchain en termes plus généraux, du point de vue d'un informaticien.

### La blockchain est une structure de données

Une structure de données, dans le contexte de l'informatique, est une façon de stocker, d'organiser et de gérer les données. Une structure de données vous permet d'accéder, d'ajouter, de modifier et de rechercher les données qu'elle contient. Certaines des structures de données les plus courantes et les plus élémentaires comprennent des tableaux et des listes chaînées. Un tableau est un certain nombre d'éléments énumérés. Ces éléments peuvent être des chiffres, des lettres, des mots ou même des fichiers. Les index vous permettent d'accéder à n'importe quel élément individuellement, donc si vous voulez changer une entrée dans un tableau et que vous connaissez son emplacement, vous avez un accès instantané.

![Array](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_array_D.jpg)
![Array](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_array_M.jpg)

Les _nœuds_ sont les éléments de données d'une liste chaînée. Un nœud comprend au moins une donnée (de tout type) et un repère vers l'élément suivant. La fonction de ce repère est d'indiquer à votre ordinateur où trouver l'élément suivant de la liste.

Si vous regardez la première donnée de la liste et que vous souhaitez accéder à la deuxième, vous verrez le repère qui vous dirige vers cet élément. Il est plus facile d'ajouter des données à une liste chaînée en l'agrandissant d'un nœud que d'ajouter des données à un tableau en augmentant le nombre d'éléments.

Ce que vous n'avez pas avec une liste chaînée, c'est un _accès instantané_. Si vous recherchez une donnée spécifique dans votre liste chaînée, vous verrez le premier _nœud_, l'_en-tête_ de la liste chaînée. Si ce n'est pas l'élément que vous cherchiez, vous suivez le lien ou le pointeur, qui vous mènera au nœud suivant. Si ce nœud ne contient pas les données que vous recherchiez, vous continuez en suivant les liens dans tous les nœuds jusqu'à ce que vous trouviez les données souhaitées.

![Linked List](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_linked_list_D.jpg)
![Linked List](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_linked_list_M.jpg)

La blockchain est comme une liste chaînée dans le contexte des structures de données. La blockchain sépare également les données dans des conteneurs; les _blocs_. Les _blocs_ sont assez semblables aux _nœuds_ d'une liste chaînée. Chaque _bloc_ contient une _référence_, qui est le hachage du bloc précédent. Il sert de lien avec le bloc précédent et établit l'ordre tout au long de la chaîne de blocs (la blockchain).

![Blockchain data](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_blockchain_data_D.jpg)
![Blockchain data](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_blockchain_data_M.jpg)

La principale différence entre une blockchain et une liste chaînée est que chaque référence dans une blockchain est sécurisée cryptographiquement. Vous pouvez entendre le terme structure de données "append-only" (_traduction: ajout-seulement_) décrivant les blockchains. Cela signifie que vous ne pouvez ajouter des données à une blockchain qu'en les ajoutant à l'avant. La validité des liens sécurisés est constamment vérifiée. Si vous insérez un bloc malveillant au milieu d'une blockchain, par exemple entre les blocs 1 et 3 dans le graphique ci-dessous, vous pouvez inclure une référence à son prédécesseur (bloc 1), mais il serait très difficile (lire : infaisable) de faire du bloc suivant (3) votre nouveau bloc inséré.

Chaque nouveau bloc construit sur un bloc existant est communément appelé _confirmation_. Plus un bloc est vieux, plus il y aura de confirmations. Chaque confirmation rend plus difficile l'altération des données d'un bloc. Le bloc 2 du graphique ci-dessous a une confirmation. Pour falsifier ses données, il faudrait recréer une référence valide. A chaque confirmation, vous devez recréer une référence supplémentaire. Plus le bloc est ancien, plus vous pouvez être certain qu'il n'y aura pas de changements dans le bloc.

![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_blockchain_broken_D.jpg)
![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_blockchain_broken_M.jpg)

Les références entre les blocs ne dépendent pas seulement de l'ordre des blocs, mais aussi des données contenues dans chaque bloc. Il n'est pas possible d'ajouter ou de supprimer facilement les données d'un bloc dans une blockchain. Cette propriété est la base de la confiance que les gens accordent aux données stockées dans une blockchain.

En même temps, il est facile d'ajouter des données dans un nouveau bloc à la chaîne. Par exemple, vous pouvez ajouter une nouvelle transaction sur une blockchain de cryptomonnaie. La transaction est facile à vérifier car toutes les transactions précédentes enregistrées sur le réseau sont immuables. Cela simplifie la vérification. Vous pouvez vérifier si l'adresse Y veut dépenser le montant X, qu’elle ait reçu au moins le montant X dans des transactions précédentes et qu’elle n’ait pas encore dépensé le montant.

Les cryptomonnaies ne sont qu'un cas d'utilisation spécifique de la technologie de la blockchain. La blockchain devient rapidement l'un des meilleurs moyens de suivre la chaîne d'approvisionnement, la gestion de la flotte et plus encore.

### Résumé

La blockchain est une méthode de stockage de données dans le contexte de l'informatique. Les éléments (ou blocs) d'une blockchain sont cryptographiquement liés. Il n'est pas possible de modifier les données une fois qu'elles ont été enregistrées dans le bloc. C'est pourquoi il y a de la valeur dans la blockchain. Il s'agit d'un grand livre immuable qui stocke les données de manière fiable dans un environnement sans confiance.

Nous aimerions terminer cette section par un tweet qui distille les implications des propriétés de la technologie de la blockchain dans le contexte des structures de données.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Blockchains don’t guarantee truth; they preserve truth &amp; lies from later alteration, allowing one to securely analyze them and be more confident in uncovering the lies. Typical computers are computational etch-a-sketch, while blockchains are computational amber.&quot; - <a href="https://twitter.com/NickSzabo4?ref_src=twsrc%5Etfw">@NickSzabo4</a></p>&mdash; Jameson Lopp (@lopp) <a href="https://twitter.com/lopp/status/1059227449232445440?ref_src=twsrc%5Etfw">November 4, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

_“Les blockchains ne garantissent pas la vérité ; elles empêchent à la fois la vérité et le mensonge d'être altérés, permettant à quiconque de les analyser et de les identifier avec confiance. Un ordinateur typiques est comme un jouet écran magique, tandis que les blockchains sont l'ambre informatique.”_
