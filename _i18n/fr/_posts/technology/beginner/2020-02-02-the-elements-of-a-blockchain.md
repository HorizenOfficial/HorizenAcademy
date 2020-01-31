---
layout: post
type: article
title: "Les éléments d'une blockchain"
description: "Dans cet article, nous voulons discuter de deux parties importantes qui jouent un rôle dans l'écosystème d'une blockchain :  les mineurs et les nœuds."
permalink: /technology/beginner/the-elements-of-a-blockchain/
topic: technology
level: beginner
chapter: "Comment fonctionne une Blockchain ?"
further_reads: [three_elements_to_understanding_blockchain_and_its_greatest_opportunity, blockchain_technology_explained_introduction_meaning_and_applications]
---

Le dernier chapitre indiquait que d'une part, la blockchain est une structure de données, un moyen de stocker des informations. D'autre part, c'est un protocole de transfert de valeur. Dans cet article, nous voulons discuter des parties qui jouent un rôle dans l'écosystème de la blockchain. Pour commencer, parlons de nouveau du terme protocole.

Un protocole peut être compris comme un ensemble de règles. Ces règles, implémentées dans le logiciel, régissent une blockchain donnée et limitent ce que vous pouvez et ne pouvez pas faire. L'une des règles stipule dans quel ordre vous devez fournir les informations si vous voulez envoyer une transaction. Heureusement, votre portefeuille (wallet) vous aidera à le faire, de sorte que vous n'ayez pas à vous soucier de quelle information est censée être la première et la dernière. Voici un exemple d'autres règles :

Si vous avez un coin, vous pouvez dépenser un coin tout au plus ;
Si vous essayez de dépenser le même coin deux fois, la première transaction effectuée sera la transaction valide, et la seconde sera considérée comme invalide.

Maintenant que vous savez qu’un protocole, un terme que vous allez entendre assez souvent, est juste un ensemble de règles, voyons qui joue un rôle dans un écosystème blockchain.

### Les Noeuds

Une blockchain est gérée par un réseau d'ordinateurs ou de serveurs qui communiquent et échangent constamment des informations. Les ordinateurs ou serveurs sont appelés nœuds et constituent l'infrastructure de la blockchain. Un nœud complet est un nœud qui maintient une copie de la blockchain. Un nœud léger ne conserve pas de copie de la blockchain et doit d'abord se connecter à un nœud complet avant de pouvoir interagir avec la blockchain. Vous pouvez comparer le réseau décentralisé d'une blockchain à l'infrastructure supportant votre téléphone mobile.

Un _nœud complet_ est tel une antenne de téléphone à laquelle votre téléphone _(le noeud léger)_ se connecte. Toutes les stations d'antennes _(nœuds complets)_ sont connectées entre elles et constituent l'infrastructure des réseaux de communication. Si vous voulez passer un appel avec votre téléphone, vous devez d'abord vous connecter à une tour de téléphonie cellulaire, avant de pouvoir interagir avec tout autre téléphone mobile.

De même, dans le réseau distribué d'une blockchain, les _nœuds complets_ sont généralement toujours opérationnels et constituent le réseau distribué. Ils conservent également une copie de l'ensemble de la blockchain. Vous utilisez généralement un _noeud léger_ lorsque vous utilisez un wallet sur votre ordinateur ou sur votre mobile. Dans ce cas, vous allez d’abord devoir vous connecter à un _noeud complet_ avant de pouvoir interagir avec la blockchain.

![Nodes in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_nodes_D.jpg)
![Nodes in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_nodes_M.jpg)

### Les mineurs

Les mineurs sont aussi des nœuds. Ils soutiennent le réseau en transmettant l’information et en conservant une copie de la blockchain, comme les autres noeuds. En plus, les mineurs sont en charge de la création de nouveaux blocs.

Les mineurs vont avoir le but qui suit : chaque nouveau bloc fait suite à une décision prise collectivement par le réseau sur l'historique des dernières minutes. Le réseau parvient à un _consensus_ sur l'ordre des transactions pour cette période. Pour Horizen, ce délai est de 2,5 minutes en moyenne, pour Bitcoin, il est de 10 minutes.

Chaque mineur a un bloc légèrement différent des autres mineurs. Cela s'explique par le fait qu'il faut un certain temps pour qu'une nouvelle transaction s'étende à l'ensemble du réseau, et que différents mineurs peuvent recevoir ces transactions dans un ordre légèrement différent.

![Miner in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_miner_D.jpg)
![Miner in FR](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_miner_M.jpg)

Les mineurs commencent à résoudre un puzzle cryptographique afin de créer un bloc valide. Les mineurs commencent à travailler sur un nouveau bloc - et donc un nouveau puzzle - immédiatement après que le bloc précédent ait été ajouté à la chaîne. Ils rassemblent toutes les transactions sur le réseau qui n'ont pas encore été incluses dans un bloc et les mettent dans leur version du bloc suivant.

Le mineur qui résout le puzzle en premier peut ajouter le bloc suivant et ainsi écrire l'historique des dernières minutes. Il diffuse son bloc sur le réseau avec la solution qu'il a trouvée pour le puzzle. Tous les nœuds, qu'ils soient miniers ou non, vérifient si la solution au puzzle est correcte, et si elle l'est, ils ajoutent le nouveau bloc à leur copie de la blockchain. Puis le cycle recommence.

C'est ainsi que le réseau parvient à un accord ou à un _consensus_ sur ce qui s'est passé dans le passé. Si vous vous demandez pourquoi nous avons dit "environ 2,5 min", c'est parce que cela varie. Tous les mineurs commencent à résoudre le puzzle en même temps. Le temps qu'il faut aux mineurs pour résoudre le puzzle dépend de sa difficulté. S'il y a plus de personnes qui essaient de résoudre le puzzle en même temps, elles le résoudront plus rapidement en moyenne.

Lorsque cela se produit alors que de nouveaux mineurs rejoignent le réseau, le protocole augmente la difficulté du puzzle, et il faudra environ 2,5 minutes aux mineurs pour résoudre le nouveau puzzle. C'est un autre exemple d'un protocole qui est un ensemble de règles :

S'il faut moins de 2,5 minutes en moyenne pour résoudre le puzzle, rendez-le plus difficile. Si cela prend plus de temps, rendez les choses plus faciles.

Ainsi, les mineurs utilisent l'équipement qui aide à créer un consensus parmi tous les participants sur l'ordre des événements de manière efficace. Imaginez tous ces centaines ou milliers de mineurs, qui ne se connaissent pas, qui discutent de ce qui s'est passé et à quelle heure exactement dans une salle de conférence. Ce serait un désastre. La blockchain introduit un moyen très efficace afin de s'accorder sur l'ordre dans lequel certains événements se sont produits. Ce sont les mineurs qui proposent des suggestions sur l'historique des transactions et si un mineur donné résout le puzzle en premier, sa version sera acceptée par tous les membres du réseau. Bitcoin a en fait introduit le premier protocole de l'histoire de l'humanité, qui pouvait parvenir à un consensus dans un environnement sans confiance et distribué.

Mais pourquoi est-ce que les mineurs font cela ?

Les mineurs sont récompensés lorsqu’ils résolvent le puzzle en premier. Cela crée un incitatif pour les individus afin d'acheter et exploiter le matériel nécessaire afin de résoudre le puzzle cryptographique. Le mineur qui est le premier à résoudre le puzzle est récompensé dans la devise qu'il mine. Il est autorisé à s'envoyer lui-même une transaction avec une certaine quantité de coins, qui n'existait pas auparavant. C’est un autre exemple de règle d’un protocole blockchain :
Le mineur qui résout le bloc en premier est autorisé à inclure une transaction dans le bloc pour s'envoyer à lui même une partie des coins nouvellement crées.


### Résumé

En conclusion, les mineurs et les opérateurs (ou administrateurs) de nœuds sont les deux principales entités d'une blockchain. Les mineurs sont les teneurs de registre qui prennent la décision sur l’ordre des événements.

Afin de réaliser cette tâche de créer le consensus parmi les participants du réseau, les mineurs reçoivent une récompense. Cette récompense génère des nouveaux coins. Chaque ZEN disponible aujourd'hui vient d’une récompense de bloc de mineurs.

L'article suivant va aborder la question du fonctionnement de [l'identité dans le contexte de la blockchain]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}). Sans le concept d’identité, il ne peut pas y avoir de propriété ; et ne serait-il pas merveilleux de pouvoir posséder les cryptomonnaies que vous achetez ?
