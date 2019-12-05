---
layout: post
type: article
title: "Sidechains"
description: "Les Sidechains représentent un développement prometteur pour les blockchains. Nous parlerons ici de comment nous comptons les implémenter."
permalink: /horizen/beginner/sidechains/
topic: horizen
level: beginner
---

Como ya mencionamos, una limitante importante para la adopción en masa de la tecnología blockchain es la cuestión de escalabilidad. En la actualidad, una cadena de bloques ordinaria es capaz de manejar unas pocas transacciones por segundo, mientras que la red de pago de VISA procesa miles por segundo.

Hay muchas maneras de escalar una blockchain, pero Horizen ha decidido concentrarse en dos por el momento. El artículo anterior trató sobre nuestros esfuerzos en la construcción de un protocolo basado en un DAG de bloques, este artículo tratará sobre el desarrollo de nuestro sistema de cadenas laterales (sidechains).

![Sidechains in FR](/assets/post_files/horizen/beginner/sidechains/FR_sidechains_D.jpg)
![Sidechains in FR](/assets/post_files/horizen/beginner/sidechains/FR_sidechains_M.jpg)

Lorsque vous activez les sidechains, vous autorisez plusieurs blockchains différentes à fonctionner en parallèle. Une sidechain est une blockchain en soi avec la caractéristique supplémentaire d'être interopérable avec la chaîne principale. L'interaction avec une blockchain de type cryptomonnaie, telle que notre blockchain Horizen actuelle, concernera principalement les transactions. La partie la plus importante de la construction de notre sidechain est ce protocole de transfert inter-chaînes, qui permet d'envoyer des ZEN de la chaîne principale à l'une des sidechains et inversement.

L'illustration ci-dessus montre qu'Horizen prévoit de consacrer une sidechain aux fonds de trésorerie de la DAO. Des ZEN sont ajoutés à la sidechain de trésorerie à chaque bloc miné. Les fonds sont automatiquement versés aux personnes qui ont soumis les projets approuvés à l’issu du vote mensuel de la communauté. Chaque vote se fait par le biais d’une transaction similaire à une transaction classique mais comportant des données supplémentaires. Ainsi, le déplacement de l'ensemble du processus de vote vers une sidechain permet d'économiser de la capacité sur la chaîne principale pour d'autres transactions.

### Résumé

Vous pouvez exécuter plusieurs blockchains simultanément avec un système de sidechains. Chaque chaîne est interopérable avec les autres. Vous pouvez modifier les caractéristiques d'une seule chaîne pour satisfaire vos besoins, sans affecter les autres chaînes. Cela permet de déployer des chaînes spécifiques adaptées à vos besoins, comme c’est le cas pour un système de trésorerie, une application décentralisée (dApp) ou tout autre cas d'utilisation.
