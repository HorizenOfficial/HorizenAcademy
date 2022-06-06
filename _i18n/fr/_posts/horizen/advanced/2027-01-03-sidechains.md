---
layout: post
type: article
title: "Sidechains"
description: "Les sidechains représentent un développement prometteur pour les blockchains. Nous parlerons ici de ce qu'elles sont et de comment nous comptons les implémenters."
permalink: /horizen/advanced/sidechains/
topic: horizen
level: advanced
---

Une sidechain est une blockchain en soi avec la caractéristique supplémentaire d'être interopérable avec la blockchain principale. Les transactions sont l'utilisation la plus courante avec une blockchain de cryptomonnaie, telle que notre blockchain Horizen. L'équipe d'ingénierie d'Horizen, dirigée par Alberto Garoffolo, a proposé une construction de sidechains basée sur les principes de la preuve d'enjeu (PoS).

La principale innovation est un nouveau protocole de transfert dits “vers l'arrière” qui permet des transactions de l'une des nombreuses sidechains vers la chaîne principale, sans que la chaîne principale ait à suivre la sidechain et sans fédération centralisée de validateurs. Bien qu'une implémentation de référence d'un protocole de consensus de la sidechain sera fourni, un large éventail de protocoles de consensus de la sidechain sera possible.

Les sidechains sont un concept sur lequel certains se penchent depuis un certain temps déjà. La première proposition de sidechains a été développée par A. Back et al. en 2014 et un certain nombre d'équipes différentes travaillent à leur mise en œuvre en tant que solution aux problèmes de scalabilité et d'interopérabilité.

### Qu'est-ce qu'une sidechain et pourquoi en voudriez-vous une ?

Lorsque Back et al. ont introduit le concept de sidechain en 2014, ils en ont fourni la définition suivante :

**Anglais**

_"A sidechain is a blockchain that validates data from other blockchains. […] A pegged sidechain is a sidechain whose assets can be imported from and returned to other chains; that is, a sidechain that supports two-way pegged assets."_ A. Back et al. — Enabling blockchain innovations with pegged sidechains, 2014

**Français**

_"Une sidechain est une blockchain qui valide les données des autres blockchains. Une sidechain connectée est une sidechain dont les actifs peuvent être importés depuis et vers d'autres chaînes ; ainsi, la sidechain supporte les actifs 2WP"_ A. Back et al. – “Enabling blockchain innovations with pegged sidechains”, 2014

En d'autres termes, une sidechain est une blockchain en soi, mais avec la capacité de communiquer et d'interopérer avec une ou plusieurs autres chaînes. Lorsque vous entendez le terme sidechain aujourd'hui, les gens parlent surtout de sidechains connectées, qui vous permettent de transférer des ressources d'une chaîne à l'autre.

![sidechains](/assets/post_files/horizen/advanced/sidechains/FR_sidechains_D.jpg)
![sidechains](/assets/post_files/horizen/advanced/sidechains/FR_sidechains_M.jpg)

### Quel est donc l'avantage de cette technologie ?

La plupart des blockchains de cryptomonnaie utilisent l'algorithme de consensus de preuve de travail et ont incorporé les fonctionnalités de base du protocole Bitcoin. Elles ont donc hérité de nombreuses contraintes du code créé par Satoshi Nakamoto. Cela inclut un débit limité, une latence élevée et une scalabilité limitée. Les sidechains sont une option afin d’aider à surmonter certaines de ces lacunes technologiques, mais en plus d'ouvrir la porte à d'éventuels perfectionnements techniques, elles soulèvent la question de la gouvernance d'une certaine manière.

Comme les débats de ces dernières années l'ont montré, la modification de la base de données dans les projets décentralisés tend à être un processus fastidieux ce qui a une utilité et n’est pas un bogue. La stabilité (pas en ce qui concerne le prix, mais le code) est cruciale, en particulier pour des projets tels que Bitcoin, et la sécurité globale du protocole bénéficie grandement de l'examen attentif de chaque changement appliqué au système.

Les Sidechains offrent un mécanisme permettant d'implémenter des fonctionnalités sur un protocole de première couche sans compromettre la sécurité ou la stabilité dudit protocole. Après un fork initial qui inclut la capacité de déployer des sidechains et introduit un moyen de transférer des ressources de la chaîne principale vers la sidechain et vice versa, un certain nombre de sidechains peuvent être construites, chacune servant un but différent, sans avoir à parvenir à un consensus pour chaque caractéristique individuelle.

Il est important de noter que la modification initiale de la base de code permettant le déploiement des sidechains et des transferts inter-chaînes doit être effectuée avec soin et que les solutions possibles doivent être évaluées avec une grande prudence. Si un projet réussit à déployer ces fonctionnalités, les développeurs peuvent alors commencer à jouer et à construire sur des projets où les changements apportés au protocole nécessitaient traditionnellement un consensus qui prenait des mois, voire des années. Idéalement, l'implémentation de la sidechain donnera aux développeurs des degrés de liberté supplémentaires tout en éliminant le risque de compromettre la sécurité de la chaîne principale. Si un utilisateur n'a pas besoin d'utiliser une sidechain particulière, il n'a pas à s'en soucier.

### Que peut-on faire avec une sidechain ?

Comme nous l'avons dit plus tôt, de nombreuses équipes se penchent sur la technologie des sidechains à des fins diverses. L'équipe derrière Rootstock travaille sur un moyen de fournir une fonctionnalité de smart contract sur Bitcoin. Ils appellent leurs sidechains des chaînes secondaires. Polkadot, dont les sidechains se nomment Parachains, vise à connecter les blockchains publiques et les blockchains à permission. L'idée générale de Plasma est également basée sur les sidechains, ou blockchains enfants, et ici l'objectif principal est la scalabilité. Les Drivechains sont destinés à permettre au BTC d'être déplacé vers d'autres applications logicielles, comme différentes blockchains publiques.

On pourrait faire une distinction entre les sidechains et les drivechains, comme l'explique Rootstock dans [cet article](https://docs.rsk.co/Drivechains_Sidechains_and_Hybrid_2-way_peg_Designs_R9.pdf) (en anglais). Nous reviendrons tout à l'heure sur leur distinction lorsque nous parlerons du fonctionnement des sidechains.

L'idée générale est cependant la même et correspond à la définition large d'une sidechain connectée que Back et al. ont donné il y a environ quatre ans.

Les critiques du concept de sidechain aiment souligner que la plupart des implémentations de sidechain reposent actuellement sur un ensemble de validateurs pour faciliter les transactions inter-chaînes. Les constructions de sidechains sont souvent appelées “de confiance minimisées” au lieu de “sans confiance”. Le risque réside dans la capacité des validateurs de confiance à censurer les transactions de la chaîne principale à la sidechain et vice versa. Notre protocole résout ce problème de façon raffinée.

### Pourquoi Horizen s'intéresse aux sidechains ?

Le projet Horizen Blockchain s'est fixé des objectifs ambitieux. Nous prévoyons inclure des fonctions telles que le développement d'un système de trésorerie pour la DAO en collaboration avec IOHK, une solution décentralisée pour le suivi des Secure Nodes et Super Nodes et le traitement de leurs récompenses, ainsi que le développement d'un protocole Block-DAG afin d’accroître le débit des transactions.

Vous voyez probablement l’intérêt qu’il y a à développer les sidechains en premier étant donné que certaines de ces fonctionnalités requièrent des modifications importantes du client principal si elles étaient implémentées dans la base de code actuelle. Construire de nouvelles fonctionnalités et apporter des modifications au protocole, même si elles sont petites, n'est pas seulement un défi du point de vue de l'établissement d'un consensus autour d'elles, mais cela comporte aussi des risques pour la sécurité. Chaque ajout doit être considéré avec soin.

L'idée est de développer une implémentation de sidechain robuste une fois pour toutes et de pouvoir simplifier la construction de nouvelles fonctionnalités qui élargiront l'écosystème Horizen par la suite. Les implémentations de sidechains seront complètement découplées de la chaîne principale et pourront, par exemple, exécuter un algorithme de consensus entièrement différent.

De cette façon, il sera possible d'exécuter les sidechains par le biais desquelles fonctionnent les systèmes de trésorerie et de suivi des nœuds avec un protocole consensuel de type [PoS]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) tout en maintenant la chaîne principale avec du [PoW]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}).

### Comment ça marche ?

La construction du modèle de sidechain se compose de deux parties :

1.  Le *protocole de consensus de la sidechain (Sidechain Consensus Protocol)* — SCP
2.  Le _protocole de transfert inter-chaînes (Cross Chain Transfer protocol)_ ou 2-way pegged — CCT

Le _protocole de consensus de la sidechain_ régit la façon dont le réseau s'entend sur les nouveaux blocs et donc sur l'historique des transactions. Le protocole de transfert inter-chaînes détermine comment les ressources peuvent être envoyées de la chaîne principale à une sidechain et vice versa. Nous examinerons ces deux protocoles dans notre article sur les sidechains du niveau expert.

![SCP_CCT](/assets/post_files/horizen/advanced/sidechains/FR_SCP_CCT_D.jpg)
![SCP_CCT](/assets/post_files/horizen/advanced/sidechains/FR_SCP_CCT_M.jpg)

### Résumé

Les sidechains peuvent être un moyen élégant de surmonter les limites actuelles en matière de scalabilité et de gouvernance dans l'écosystème de la blockchain. Outre le fait qu’il soit possible d’augmenter le débit, soit le nombre de transactions par secondes (TPS) grâce aux sidechains, celles-ci permettent également d'expérimenter sans compromettre la sécurité de la blockchain principale.

La capacité de déployer des sidechains améliorera considérablement les possibilités de construire sur les blockchains publiques existantes. L'un des premiers cas d'utilisation d'une sidechain pour le projet Horizen sera probablement la Trésorerie, ce qui permettra à l'organisation de se rapprocher un peu plus d'une organisation autonome décentralisée (DAO).

Nous continuerons cet article sur l'article sur les sidechains dans la Section Expert. Nous examinerons comment la solution proposée fonctionne sur le plan technique ainsi que le _protocole de consensus de la sidechain (SCP)_ et le _protocole de transfert inter-chaîne (CCT)_.
