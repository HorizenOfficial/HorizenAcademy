---
layout: post
type: article
title: "La Blockchain comme structure de données"
description: "Dans ce premier article de ce chapitre, nous nous intéresserons à la façon dont la blockchain stocke les données et pourquoi cela rend les données sécurisées."
permalink: /technology/beginner/blockchain-as-a-data-structure/
topic: technology
level: beginner
chapter: "Qu’est-ce que la Blockchain ?"
---

Bienvenue dans le tout premier article de la section Technologie de notre Académie Horizen. Les deux premiers articles ont pour but d’expliquer ce qu’est une blockchain. Si vous vous êtes déjà informé sur le Bitcoin, la blockchain et les cryptomonnaies, vous devez savoir qu’il y a une distinction à faire entre :

<ul class="lead">
    <li>La technologie blockchain en général ;</li>
    <li>Le protocole, ou les règles, d’une blockchain spécifique ;</li>
    <li>Et la monnaie qui est exploitée sur cette blockchain.</li>
</ul>

Cet article a l’intention de fournir une introduction à propos de ce qu’est la blockchain, la technologie en général, et ce qu’elle permet de faire. Vous pouvez la regarder de différentes manières, dépendamment du contexte, mais nous souhaitons nous concentrer sur deux approches générales. D’un côté, c’est une manière de stocker la donnée, et de l’autre un “langage”, ou protocole, pour transférer de la valeur.

## La blockchain est un type de structure de données

Dans les yeux d’un informaticien, la blockchain est une structure de données. Cette structure stocke les informations de manière fiable, bien qu’elle existe dans un environnement sans tiers de confiance. Une structure de données peut paraître très technique au début, mais c’est en réalité juste cela : une structure pour vos données. Les listes ou les tableaux sont des structures de données très simples que vous connaissez déjà. Lorsque vous écrivez n’importe quelle information sur papier, vous utiliserez une de ces deux structures de données. Dans le monde digital, il y a des structures de données plus élaborées, dont la blockchain. Le terme vient du fait que l’information est séparée en blocs. Chaque nouveau bloc indique de quel bloc il vient, ils sont “enchaînés” ensemble. Le fait d'indiquer quel bloc était le bloc précédent est généralement appelé référencement.

![List table chain in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_list_table_chain_D.jpg)
![List table chain in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_list_table_chain_M.jpg)

### Une base de données est efficace, mais centralisée

Une base de données est une structure de données très efficace. Les bases de données sont un excellent moyen de stocker de grandes quantités de données, mais sont souvent exploitées par une entité centrale. Votre banque, votre réseau social préféré ou site marchand utilise les bases de données pour stocker vos données.

Cette entité décide de qui peut ajouter des données dans la base de données et aussi qui peut y accéder, mais a aussi le pouvoir de modifier ou supprimer vos données. Vous pouvez éditer votre profil sur un réseau social. Vos amis peuvent voir cette information, mais si vous transgressez les conditions d’utilisation, votre post sera supprimé. L’entité centrale a le dernier mot sur ce qu’il reste sur la plateforme. Avec un réseau social, cela peut être à la fois bon et mauvais. Mais s’il s’agit d’une structure de données pour stocker votre argent, ce n’est pas une bonne caractéristique.

### La blockchain est moins efficace, mais décentralisée

La blockchain est exploitée par un grand nombre de différentes entités, ou pairs. Ces pairs ne se connaissent pas ou ne se font pas confiance (donc “sans tiers de confiance”). La bonne chose est qu’ils n’ont pas besoin de se faire confiance. Beaucoup de pairs gardent une copie de la donnée et aucun des pairs n’a le pouvoir de modifier ou censurer la donnée. Les participants, ou noeuds pour le terme technique, communiquent constamment entre eux afin de se tenir au courant des nouveaux événements. Dans une blockchain ces événements sont le plus souvent des transactions.

Il n'existe pas d'entité centralisée comme une banque ou une chambre de compensation responsable de l'acceptation et du traitement des nouvelles transactions. Les cryptomonnaies sont sans permission parce que chaque individu respectant les règles du protocole peut créer un portefeuille et envoyer une transaction sans avoir besoin de s'enregistrer pour utiliser le service. La transaction est ensuite diffusée sur le réseau et chaque participant (ou nœud, ou pair) en conserve une copie. Un nœud peut être une personne individuelle, un magasin acceptant la cryptomonnaie ou même une banque. Peu importe qui vous êtes. Le nombre de copies rend une blockchain plus lente qu'une base de données, mais plus sûre.

![Decentralised clearing in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_decentralised_clearing_D.jpg)
![Decentralised clearing in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_decentralised_clearing_M.jpg)

### D’où vient le terme blockchain ?

La blockchain ne garde pas les données dans un seule registre continu mais sépare les données en blocs. Ces blocs sont reliés les uns aux autres tout comme les pages individuelles qui composent un livre. C’est comme ça que le terme blockchain est né. Imaginez un teneur de registre enregistrer les entrées en utilisant des feuilles de papier au lieu d’un livre. Toutes les quelques minutes, il prend une nouvelle feuille de papier, commençant par une note qui dit "la dernière page que j'ai utilisée est la page X, voici la page Y". Les notes qu'il inclut "enchaînent" les pages ensemble. S'il laisse tomber la pile de pages, il peut plus tard les réarranger parce que chaque page fait référence à la précédente.

![Book blockchain in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_book_blockchain_D.jpg)
![Book blockchain in FR](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/FR_book_blockchain_M.jpg)

Chaque page représente un bloc dans cette comparaison, la pile des pages utilisées représente la blockchain. La référence que la page X vienne avant la page Y est ce qui “enchaîne” les blocs ensemble. A la place d’un teneur de registre, il y en a plusieurs qui travaillent simultanément. Les teneurs de registre d’une blockchain sont appelés les mineurs et nous expliquerons leur rôle dans la section suivante : comment une blockchain fonctionne

## Résumé

La blockchain est simplement une manière de stocker l'information, comme les listes et les tableaux. Les blockchains publiques viennent avec des caractéristiques qui n’étaient pas réalisables jusqu’à présent. Il est impossible de modifier des informations après coup. L’information est immuable et très sécurisée. C’est pourquoi la blockchain est parfaite pour supporter les monnaies numériques.

Une autre façon d'envisager la blockchain est de la considérer comme un [protocole de transfert de valeur]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-03-a-protocol-to-transfer-value %}), tout comme l'Internet est un protocole de transfert d'information. Nous verrons la blockchain depuis cette perspective dans notre prochain article.
