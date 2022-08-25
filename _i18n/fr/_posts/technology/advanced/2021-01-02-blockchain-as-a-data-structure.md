---
layout: post
type: article
title: "La blockchain comme structure de données"
description: "Premièrement, depuis le point de vue d’un informaticien qui voit la blockchain comme une structure de données."
permalink: /technology/advanced/blockchain-as-a-data-structure/
topic: technology
level: advanced
chapter: "Qu’est-ce que la Blockchain ?"
---

On peut expliquer la technologie de Blockchain de différentes manières. L'examen de la blockchain sous l'angle des cryptomonnaies a été le récit dominant jusqu'à récemment. Le bitcoin est la première chose que la plupart des gens associeront à la technologie de la blockchain, mais faciliter les transactions de cryptomonnaie n'est qu'un cas d'utilisation parmi tant d'autres. Dans cet article, nous aimerions prendre un peu de recul et examiner la blockchain en termes plus généraux, du point de vue d'un informaticien.

### La blockchain est une structure de données

Une structure de données, dans le contexte de l'informatique, est une façon de stocker, d'organiser et de gérer les données. Une structure de données vous permet d'accéder, d'ajouter, de modifier et de rechercher les données qu'elle contient. Certaines des structures de données les plus courantes et les plus élémentaires comprennent des tableaux et des listes chaînées. Un tableau est un certain nombre d'éléments énumérés. Ces éléments peuvent être des chiffres, des lettres, des mots ou même des fichiers. Les index vous permettent d'accéder à n'importe quel élément individuellement, donc si vous voulez changer une entrée dans un tableau et que vous connaissez son emplacement, vous avez un accès instantané.

![Array]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_array_D.jpg)
![Array]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_array_M.jpg)

Les _nœuds_ sont les éléments de données d'une liste chaînée. Un nœud comprend au moins une donnée (de tout type) et un repère vers l'élément suivant. La fonction de ce repère est d'indiquer à votre ordinateur où trouver l'élément suivant de la liste.

Si vous regardez la première donnée de la liste et que vous souhaitez accéder à la deuxième, vous verrez le repère qui vous dirige vers cet élément. Il est plus facile d'ajouter des données à une liste chaînée en l'agrandissant d'un nœud que d'ajouter des données à un tableau en augmentant le nombre d'éléments.

Ce que vous n'avez pas avec une liste chaînée, c'est un _accès instantané_. Si vous recherchez une donnée spécifique dans votre liste chaînée, vous verrez le premier _nœud_, l'_en-tête_ de la liste chaînée. Si ce n'est pas l'élément que vous cherchiez, vous suivez le lien ou le pointeur, qui vous mènera au nœud suivant. Si ce nœud ne contient pas les données que vous recherchiez, vous continuez en suivant les liens dans tous les nœuds jusqu'à ce que vous trouviez les données souhaitées.

![Linked List]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_linked_list_D.jpg)
![Linked List]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_linked_list_M.jpg)

La blockchain est comme une liste chaînée dans le contexte des structures de données. La blockchain sépare également les données dans des conteneurs ; les _blocs_. Les _blocs_ sont assez semblables aux _nœuds_ d'une liste chaînée. Chaque _bloc_ contient une _référence_, qui est le hachage du bloc précédent. Il sert de lien avec le bloc précédent et établit l'ordre tout au long de la chaîne de blocs (la blockchain).

![Blockchain data]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_blockchain_data_D.jpg)
![Blockchain data]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_blockchain_data_M.jpg)

La principale différence entre une blockchain et une liste chaînée est que chaque référence dans une blockchain est sécurisée cryptographiquement. Vous pouvez entendre le terme structure de données "append-only" (_traduction: ajout-seulement_) décrivant les blockchains. Cela signifie que vous ne pouvez ajouter des données à une blockchain qu'en les ajoutant à l'avant. La validité des liens sécurisés est constamment vérifiée. Si vous insérez un bloc malveillant au milieu d'une blockchain, par exemple entre les blocs 1 et 3 dans le graphique ci-dessous, vous pouvez inclure une référence à son prédécesseur (bloc 1), mais il serait très difficile (lire : infaisable) de faire du bloc suivant (3) votre nouveau bloc inséré.

Chaque nouveau bloc construit sur un bloc existant est communément appelé _confirmation_. Plus un bloc est vieux, plus il y aura de confirmations. Chaque confirmation rend plus difficile l'altération des données d'un bloc. Le bloc 2 du graphique ci-dessous a une confirmation. Pour falsifier ses données, il faudrait recréer une référence valide. À chaque confirmation, vous devez recréer une référence supplémentaire. Plus le bloc est ancien, plus vous pouvez être certain qu'il n'y aura pas de changements dans le bloc.

![Blockchain broken]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_blockchain_broken_D.jpg)
![Blockchain broken]({{site.baseurl}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/FR_blockchain_broken_M.jpg)

Les références entre les blocs ne dépendent pas seulement de l'ordre des blocs, mais aussi des données contenues dans chaque bloc. Il n'est pas possible d'ajouter ou de supprimer facilement les données d'un bloc dans une blockchain. Cette propriété est la base de la confiance que les gens accordent aux données stockées dans une blockchain.

En même temps, il est facile d'ajouter des données dans un nouveau bloc à la chaîne. Par exemple, vous pouvez ajouter une nouvelle transaction sur une blockchain de cryptomonnaie. La transaction est facile à vérifier car toutes les transactions précédentes enregistrées sur le réseau sont immuables. Cela simplifie la vérification. Vous pouvez vérifier si l'adresse Y veut dépenser le montant X, qu’elle ait reçu au moins le montant X dans des transactions précédentes et qu’elle n’ait pas encore dépensé le montant.

Les cryptomonnaies ne sont qu'un cas d'utilisation spécifique de la technologie de la blockchain. La blockchain devient rapidement l'un des meilleurs moyens de suivre la chaîne d'approvisionnement, la gestion de la flotte et plus encore.

### Résumé

La blockchain est une méthode de stockage de données dans le contexte de l'informatique. Les éléments (ou blocs) d'une blockchain sont cryptographiquement liés. Il n'est pas possible de modifier les données une fois qu'elles ont été enregistrées dans le bloc. C'est pourquoi il y a de la valeur dans la blockchain. Il s'agit d'un grand livre immuable qui stocke les données de manière fiable dans un environnement sans confiance.

Nous aimerions terminer cette section par un tweet qui distille les implications des propriétés de la technologie de la blockchain dans le contexte des structures de données.

{% include blocks/tweet.html id="1059227449232445440" %}

**Français**

“Les blockchains ne garantissent pas la vérité ; elles empêchent à la fois la vérité et le mensonge d'être altérés, permettant à quiconque de les analyser et de les identifier avec confiance. Un ordinateur typiques est comme un jouet écran magique, tandis que les blockchains sont l'ambre informatique.”

## Contenu Débutant Ci-dessous - La Blockchain comme structure de données

Si vous vous êtes déjà informé sur le Bitcoin, la blockchain et les cryptomonnaies, vous devez savoir qu’il y a une distinction à faire entre :

<ul class="lead">
    <li>La technologie blockchain en général ;</li>
    <li>Le protocole, ou les règles, d’une blockchain spécifique ;</li>
    <li>Et la monnaie qui est exploitée sur cette blockchain.</li>
</ul>

Cet article a l’intention de fournir une introduction à propos de ce qu’est la blockchain, la technologie en général, et ce qu’elle permet de faire. Vous pouvez la regarder de différentes manières, dépendamment du contexte, mais nous souhaitons nous concentrer sur deux approches générales. D’un côté, c’est une manière de stocker la donnée, et de l’autre un “langage”, ou protocole, pour transférer de la valeur.

## La blockchain est un type de structure de données

Dans les yeux d’un informaticien, la blockchain est une structure de données. Cette structure stocke les informations de manière fiable, bien qu’elle existe dans un environnement sans tiers de confiance. Une structure de données peut paraître très technique au début, mais c’est en réalité juste cela : une structure pour vos données. Les listes ou les tableaux sont des structures de données très simples que vous connaissez déjà. Lorsque vous écrivez n’importe quelle information sur papier, vous utiliserez une de ces deux structures de données. Dans le monde digital, il y a des structures de données plus élaborées, dont la blockchain. Le terme vient du fait que l’information est séparée en blocs. Chaque nouveau bloc indique de quel bloc il vient, ils sont “enchaînés” ensemble. Le fait d'indiquer quel bloc était le bloc précédent est généralement appelé référencement.

![List table chain in FR]({{site.baseurl}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_list_table_chain_D.jpg)
![List table chain in FR]({{site.baseurl}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_list_table_chain_M.jpg)

### Une base de données est efficace, mais centralisée

Une base de données est une structure de données très efficace. Les bases de données sont un excellent moyen de stocker de grandes quantités de données, mais sont souvent exploitées par une entité centrale. Votre banque, votre réseau social préféré ou site marchand utilise les bases de données pour stocker vos données.

Cette entité décide de qui peut ajouter des données dans la base de données et aussi qui peut y accéder, mais a aussi le pouvoir de modifier ou supprimer vos données. Vous pouvez éditer votre profil sur un réseau social. Vos amis peuvent voir cette information, mais si vous transgressez les conditions d’utilisation, votre post sera supprimé. L’entité centrale a le dernier mot sur ce qu’il reste sur la plateforme. Avec un réseau social, cela peut être à la fois bon et mauvais. Mais s’il s’agit d’une structure de données pour stocker votre argent, ce n’est pas une bonne caractéristique.

### La blockchain est moins efficace, mais décentralisée

La blockchain est exploitée par un grand nombre de différentes entités, ou pairs. Ces pairs ne se connaissent pas ou ne se font pas confiance (donc “sans tiers de confiance”). La bonne chose est qu’ils n’ont pas besoin de se faire confiance. Beaucoup de pairs gardent une copie de la donnée et aucun des pairs n’a le pouvoir de modifier ou censurer la donnée. Les participants, ou noeuds pour le terme technique, communiquent constamment entre eux afin de se tenir au courant des nouveaux événements. Dans une blockchain ces événements sont le plus souvent des transactions.

Il n'existe pas d'entité centralisée comme une banque ou une chambre de compensation responsable de l'acceptation et du traitement des nouvelles transactions. Les cryptomonnaies sont sans permission parce que chaque individu respectant les règles du protocole peut créer un portefeuille et envoyer une transaction sans avoir besoin de s'enregistrer pour utiliser le service. La transaction est ensuite diffusée sur le réseau et chaque participant (ou nœud, ou pair) en conserve une copie. Un nœud peut être une personne individuelle, un magasin acceptant la cryptomonnaie ou même une banque. Peu importe qui vous êtes. Le nombre de copies rend une blockchain plus lente qu'une base de données, mais plus sûre.

![Decentralised clearing in FR]({{site.baseurl}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_decentralised_clearing_D.jpg)
![Decentralised clearing in FR]({{site.baseurl}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_decentralised_clearing_M.jpg)

### D’où vient le terme blockchain ?

La blockchain ne garde pas les données dans un seule registre continu mais sépare les données en blocs. Ces blocs sont reliés les uns aux autres tout comme les pages individuelles qui composent un livre. C’est comme ça que le terme blockchain est né. Imaginez un teneur de registre enregistrer les entrées en utilisant des feuilles de papier au lieu d’un livre. Toutes les quelques minutes, il prend une nouvelle feuille de papier, commençant par une note qui dit "la dernière page que j'ai utilisée est la page X, voici la page Y". Les notes qu'il inclut "enchaînent" les pages ensemble. S'il laisse tomber la pile de pages, il peut plus tard les réarranger parce que chaque page fait référence à la précédente.

![Book blockchain in FR]({{site.baseurl}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_book_blockchain_D.jpg)
![Book blockchain in FR]({{site.baseurl}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_book_blockchain_M.jpg)

Chaque page représente un bloc dans cette comparaison, la pile des pages utilisées représente la blockchain. La référence que la page X vienne avant la page Y est ce qui “enchaîne” les blocs ensemble. A la place d’un teneur de registre, il y en a plusieurs qui travaillent simultanément. Les teneurs de registre d’une blockchain sont appelés les mineurs et nous expliquerons leur rôle dans la section suivante : comment une blockchain fonctionne

## Résumé

La blockchain est simplement une manière de stocker l'information, comme les listes et les tableaux. Les blockchains publiques viennent avec des caractéristiques qui n’étaient pas réalisables jusqu’à présent. Il est impossible de modifier des informations après coup. L’information est immuable et très sécurisée. C’est pourquoi la blockchain est parfaite pour supporter les monnaies numériques.

Une autre façon d'envisager la blockchain est de la considérer comme un protocole de transfert de valeur, tout comme l'Internet est un protocole de transfert d'information. Nous verrons la blockchain depuis cette perspective dans notre prochain article.

## Explication Simple Ci-dessous - Qu'est-ce qu'une blockchain ?

Une blockchain fonctionne comme un grand livre sur internet. Ce livre garde la trace de combien d'argent tout le monde a.

Un seul bloc dans la blockchain est comme une seule page dans un livre. Vous ne pouvez faire qu'un nombre limité de transactions sur une page et vous devez utiliser la suivante lorsque la page est pleine.

![What is a Blockchain in FR]({{site.baseurl}}/assets/post_files/eli5/what-is-a-blockchain/FR_what_is_blockchain_D.jpg)
![What is a Blockchain in FR]({{site.baseurl}}/assets/post_files/eli5/what-is-a-blockchain/FR_what_is_blockchain_M.jpg)

La blockchain documente chaque transfert d'argent. Cela garantit que personne ne peut dépenser son argent deux fois. Si vous avez un ZEN et que vous l'envoyez à un ami ou à une boutique en ligne, l'autre personne a maintenant le contrôle de ce ZEN et vous ne pouvez plus l'utiliser.

Les blockchains ont résolu un problème majeur dans le monde numérique. Lorsque je vous envoie une photo dans un courriel, je vous envoie simplement une copie de cette photo et par la suite, nous en avons tous les deux une copie. Je pourrais envoyer la même photo à une autre personne plus tard. Les blockchains permettent aux choses numériques d'exister une seule fois. C'est l'une des principales raisons pour lesquelles les blockchains sont innovantes. L'argent numérique ne fonctionnerait pas si je pouvais vous envoyer une copie de mon argent et le dépenser une deuxième fois plus tard.
