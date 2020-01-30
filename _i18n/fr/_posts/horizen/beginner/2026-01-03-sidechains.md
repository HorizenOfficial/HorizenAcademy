---
layout: post
type: article
title: "Sidechains"
description: "Les Sidechains représentent un développement prometteur pour les blockchains. Nous parlerons ici de comment nous comptons les implémenter."
permalink: /horizen/beginner/sidechains/
topic: horizen
level: beginner
---

Comme nous l'avons déjà mentionné, une limite importante de l'adoption en masse de la technologie blockchain est la scalabilité. Actuellement, une blockchain est capable de traiter une poignée de transactions par seconde, alors que VISA peut en traiter des milliers.

Il y a plusieurs manières de rendre une blockchain plus scalable, mais Horizen a décidé de se concentrer sur deux d'entre elles pour le moment. L'article précédent traitait d'un protocole Block-DAG, cet article se concentre sur notre système novateur de sidechains.

![Sidechains in FR](/assets/post_files/horizen/beginner/sidechains/FR_sidechains_D.jpg)
![Sidechains in FR](/assets/post_files/horizen/beginner/sidechains/FR_sidechains_M.jpg)

Lorsque vous activez les sidechains, vous autorisez plusieurs blockchains différentes à fonctionner en parallèle. Une sidechain est une blockchain en soi avec la caractéristique supplémentaire d'être interopérable avec la chaîne principale. L'interaction avec une blockchain de type cryptomonnaie, telle que notre blockchain Horizen actuelle, concernera principalement les transactions. La partie la plus importante de la construction de notre sidechain est ce protocole de transfert inter-chaînes, qui permet d'envoyer des ZEN de la chaîne principale à l'une des sidechains et inversement.

L'illustration ci-dessus montre qu'Horizen prévoit de consacrer une sidechain aux fonds de trésorerie de la DAO. Des ZEN sont ajoutés à la sidechain de trésorerie à chaque bloc miné. Les fonds sont automatiquement versés aux personnes qui ont soumis les projets approuvés à l’issu du vote mensuel de la communauté. Chaque vote se fait par le biais d’une transaction similaire à une transaction classique mais comportant des données supplémentaires. Ainsi, le déplacement de l'ensemble du processus de vote vers une sidechain permet d'économiser de la capacité sur la chaîne principale pour d'autres transactions.

### Résumé

Vous pouvez exécuter plusieurs blockchains simultanément avec un système de sidechains. Chaque chaîne est interopérable avec les autres. Vous pouvez modifier les caractéristiques d'une seule chaîne pour satisfaire vos besoins, sans affecter les autres chaînes. Cela permet de déployer des chaînes spécifiques adaptées à vos besoins, comme c’est le cas pour un système de trésorerie, une application décentralisée (dApp) ou tout autre cas d'utilisation.
