---
layout: post
type: article
title: "Les Fonctions de Hachage"
description: "Les Fonctions de Hachage sont une part importante dans n’importe quelle blockchain car elles sont utilisées pour vérifier l’intégrité des données."
permalink: /technology/advanced/hash-functions/
topic: technology
level: advanced
chapter: "Comment fonctionne une Blockchain ?"
further_reads: [hash_functions_explained_with_emojis]
---

Les blockchains sont une manière d’enregistrer les données d’une façon immuable. Pour permettre cette caractéristique importante, les données écrites sur la blockchain doivent être justes. Vérifier les données qui sont ajoutées prend son sens, spécialement car le stockage sur une blockchain est limité. Un des outils pour vérifier ces données est la _fonction de hachage_.

Les fonctions de hachage font partie intégrante de la technologie de la blockchain et servent à de nombreux usages. Une fonction de hachage est une fonction mathématique qui prend une entrée d'une longueur donnée et produit une sortie de longueur fixe. La sortie est souvent appelée une _valeur de hachage_, _condensé de hachage_, _condensat_ ou _hash_.

Il existe de nombreuses [fonctions de hachage](https://en.wikipedia.org/wiki/List_of_hash_functions)  et autant de "calculatrices" en ligne pour des fonctions de hachage comme [celle-ci](https://www.fileformat.info/tool/hash.htm). Les calculatrices vous permettent de hasher n'importe quelle entrée que vous voulez avec différentes fonctions de hachage en même temps. La taille de l'entrée peut varier d'un seul chiffre à des fichiers entiers, mais la taille de la sortie sera toujours la même.

Une fonction de hachage cryptographique doit remplir l'ensemble de critères suivants pour être viable dans une blockchain :

- Unidirectionnelle - Il doit être facile de calculer une sortie à partir d'une entrée donnée, mais impossible de calculer l'entrée à partir d'une sortie donnée. Lorsque nous parlerons du minage de cryptomonnaie plus loin dans ce chapitre, nous donnerons plus de détails.
- Pseudo aléatoire - Un changement dans l'entrée produira un changement imprévisible dans la sortie. Si la valeur de hachage de l'entrée "2" était "4", le hachage de l'entrée "3" ne doit pas être 6.
- Résistante aux collisions - Il devrait être difficile (lire impossible) de trouver deux entrées pour une fonction de hachage donnant la même sortie.
- Déterministe - La même entrée doit toujours produire la même sortie.

![Hash function](/assets/post_files/technology/advanced/hash-functions/FR_hash_function_D.jpg)
![Hash function](/assets/post_files/technology/advanced/hash-functions/FR_hash_function_M.jpg)

Les fonctions de hachage les plus fréquemment utilisées aujourd'hui sont SHA-256. SHA est un acronyme pour Secure Hash Algorithm. Le nombre indique la longueur de la sortie en bits, par exemple, il y a quatre longueurs différentes de sorties dans la famille SHA : 224, 256, 384 ou 512 bits. Un autre type de fonctions de hachage pertinentes dans la technologie de la blockchain est la famille RIPEMD. RIPEMD160 est souvent utilisé dans de nombreuses cryptomonnaies et comme vous l'aurez deviné, produit une sortie de 160 bits.

Les valeurs de hachage sont utilisées à de nombreuses fins dans les cryptomonnaies et les blockchains. L'utilisation la plus notable est le processus d'enchaînement des blocs, créant ainsi la blockchain. Nous appelons une valeur de hachage une empreinte digitale de données pour sa propriété de résistance aux collisions. Chaque ensemble de données utilisé comme entrée peut être facilement identifié par le hachage unique qu'il génère. Il est presque impossible de trouver deux entrées à la fonction de hachage, qui aboutissent à la même sortie (provoquent une collision). Il faudrait plusieurs milliers d'années à tous les supercalculateurs de la Terre pour créer une collision. C'est parce qu'il n'y a aucun moyen de "calculer" une collision. La seule façon d'en trouver une est d'utiliser la force brute, c'est-à-dire d'essayer différentes entrées jusqu'à ce qu'il y ait une collision par hasard.

Cela fonctionne parce que l'espace de sortie d'une fonction de hachage 256 est incroyablement énorme. L'espace de sortie décrit l'ensemble des valeurs de hachage possibles de 0 à \\(1.1579 \cdot 10^{77}\\) qui peuvent être écrites comme suit  

$$
115792089237316195423570985008687907853269984665640564039457584007913129639936
$$

### Résumé

Les fonctions de hachage sont la première pierre angulaire de la technologie de la blockchain. Le hachage d'un fichier est comme une empreinte digitale. Il est facile de détecter si deux fichiers sont identiques ou non en comparant leurs hachages. La fonction de hachage "enchaîne" les blocs ensemble. Vous ne pouvez pas modifier les données du passé sans inclure le hachage du bloc précédent. Si vous tentez de modifier les données, les références ou les liens se rompent.
Dans notre prochain article, nous examinerons la cryptographie à clé publique, la deuxième pierre angulaire de la technologie de la blockchain et le concept qui constitue votre "identité" sur la blockchain.
