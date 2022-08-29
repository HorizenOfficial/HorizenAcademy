---
layout: post
type: article
title: "Les éléments d’une Blockchain"
description: "Dans ce premier article de ce chapitre, nous vous donnons une vue d’ensemble des différents éléments qui font fonctionner une blockchain."
permalink: /technology/advanced/the-elements-of-a-blockchain/
topic: technology
level: advanced
chapter: "Comment fonctionne une Blockchain ?"
---

Lorsque Satoshi Nakamoto a publié le livre blanc Bitcoin, il a présenté une innovation composée de plusieurs composants bien connus et de quelques nouveaux. Nous avons conçu ce chapitre pour expliquer comment fonctionne une blockchain. Nous voulons mettre les différents éléments en contexte avant de passer à l'explication de chaque concept.

### Fonctions de hachage

Une [fonction de hachage](https://academy.horizen.io/fr/technology/advanced/hash-functions/) est une fonction mathématique avec quelques propriétés spéciales, mais comme toute autre fonction, elle fait un travail. La fonction de hachage prend une entrée et produit une sortie (également appelée _valeur de hachage_, _condensé de hachage_, _condensat_ ou _hash_).

L'entrée n'a pas besoin d'être un nombre, il peut s'agir de n'importe quel type de données d'un seul caractère jusqu'à un gros fichier comme une vidéo. La sortie d'une fonction de hachage donnée a une longueur constante quelle que soit l'entrée. Il existe de nombreuses fonctions de hachage et la plupart d'entre elles portent la longueur de la sortie qu'elles produisent en leur nom. L'une des fonctions de hachage les plus couramment utilisées est SHA256 (Secure Hash Algorithm 256 bit). Le nombre indique que la sortie de la fonction de hachage sera toujours de 256 bits, quelle que soit l'entrée. La valeur de hachage sert d'empreinte digitale des données. On peut vérifier l'intégrité des fichiers ou détecter s'ils diffèrent les uns des autres en comparant les hashs.

![Hash]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_hash_D.jpg)
![Hash]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_hash_M.jpg)

### Cryptographie à clé publique

La [cryptographie à clé publique](https://academy.horizen.io/fr/technology/advanced/public-key-cryptography/), est également connue sous le nom de _cryptographie asymétrique_. Le terme asymétrique provient de la propriété des clés qui viennent toujours par paires et utilisées de façon complémentaire. Si vous avez chiffré quelque chose avec l'une des clés, vous avez besoin de l'autre pour le déchiffrer et vice versa. Ces clés sont la _clé publique_ et la _clé privée_ (ou _clé secrète_). Vos clés se traduisent par votre identité sur la blockchain. Vous recevez des fonds avec votre clé publique et envoyez des fonds avec votre clé privée. La cryptographie à clé publique est aussi l'origine du nom des cryptomonnaies.

![Asymmetric]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_asymmetric_D.jpg)
![Asymmetric]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_asymmetric_M.jpg)

### Un réseau Peer-to-Peer (pair-à-pair)

Vous avez probablement déjà rencontré le terme de réseau [Peer-to-Peer](https://academy.horizen.io/fr/technology/advanced/a-peer-to-peer-p2p-network/) (P2P), très probablement dans le contexte de services de partage de fichiers comme BitTorrent. Dans un réseau distribué, les utilisateurs ne se connectent pas à un serveur central ou à une entité pour accéder à un service, mais à de nombreux pairs. Les pairs sont d'autres participants au réseau qui fournissent le service les uns aux autres. Les réseaux P2P sont très résistants, car il n'y a pas de point de défaillance unique.
Les blockchains utilisent ce concept et c'est l’une des raisons pour lesquelles elles sont si robustes. Vous entendrez souvent les attributs "_sans permission_" et "_résistant à la censure_" lorsque vous lirez la proposition de valeur de la technologie de la blockchain. Le réseau Peer-to-Peer joue un rôle important dans l'attribution de ces propriétés aux blockchains.

![Central distri]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_central-distri_D.jpg)
![Central distri]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_central-distri_M.jpg)

### Mécanisme de consensus

Si vous voulez construire une forme de monnaie numérique sur un réseau P2P avec beaucoup de participants, vous aurez besoin de construire un consensus sur l'ordre des transactions. Si un utilisateur a un ZEN et crée deux transactions différentes qui dépensent le même coin simultanément, certains pairs recevront d'abord la version A, tandis que d'autres recevront peut-être la version B en premier. Le réseau doit parvenir à un accord, ou à un consensus, sur laquelle des deux transactions a eu lieu en premier. Le [mécanisme de consensus](https://academy.horizen.io/fr/technology/advanced/consensus-mechanisms/) est ce qui permet à un grand nombre d'entités différentes qui ne se connaissent pas et ne se font pas confiance de se mettre d’accord sur une version unique de la blockchain.

![Consensus]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_consensus_block_D.jpg)
![Consensus]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_consensus_block_M.jpg)

### Le Minage

Il existe de nombreux mécanismes de consensus. “L'original" qu’Horizen, Bitcoin et la plupart des autres cryptomonnaies utilisent est le mécanisme de preuve du travail (PoW). Vous avez probablement déjà entendu parler de [minage](https://academy.horizen.io/fr/technology/advanced/mining/) de cryptomonnaie avant et du fait que les mineurs ont à résoudre un puzzle de calcul coûteux. Nous voulons vous montrer ce qu'est ce puzzle et comment le résoudre permet au réseau de se mettre d'accord sur un ordre de transactions donné.

### Demonstration

Ceci est une [bonne démo de la blockchain](https://blockchaindemo.io/). Nous vous invitons à vous amuser avec, soit maintenant, soit après avoir terminé ce chapitre. La démonstration est pratique et aide vraiment à comprendre ce sujet quelque peu complexe. La démo fournit un guide qui vous guidera pas à pas à travers les processus en cours d'exécution sur une blockchain.

## Contenu Débutant Ci-dessous - Les éléments d'une blockchain

Le dernier chapitre indiquait que d'une part, la blockchain est une structure de données, un moyen de stocker des informations. D'autre part, c'est un protocole de transfert de valeur. Dans cet article, nous voulons discuter des parties qui jouent un rôle dans l'écosystème de la blockchain. Pour commencer, parlons de nouveau du terme protocole.

Un protocole peut être compris comme un ensemble de règles. Ces règles, implémentées dans le logiciel, régissent une blockchain donnée et limitent ce que vous pouvez et ne pouvez pas faire. L'une des règles stipule dans quel ordre vous devez fournir les informations si vous voulez envoyer une transaction. Heureusement, votre portefeuille (wallet) vous aidera à le faire, de sorte que vous n'ayez pas à vous soucier de quelle information est censée être la première et la dernière. Voici un exemple d'autres règles :

Si vous avez un coin, vous pouvez dépenser un coin tout au plus ;
Si vous essayez de dépenser le même coin deux fois, la première transaction effectuée sera la transaction valide, et la seconde sera considérée comme invalide.

Maintenant que vous savez qu’un protocole, un terme que vous allez entendre assez souvent, est juste un ensemble de règles, voyons qui joue un rôle dans un écosystème blockchain.

## Les Noeuds

Une blockchain est gérée par un réseau d'ordinateurs ou de serveurs qui communiquent et échangent constamment des informations. Les ordinateurs ou serveurs sont appelés nœuds et constituent l'infrastructure de la blockchain. Un nœud complet est un nœud qui maintient une copie de la blockchain. Un nœud léger ne conserve pas de copie de la blockchain et doit d'abord se connecter à un nœud complet avant de pouvoir interagir avec la blockchain. Vous pouvez comparer le réseau décentralisé d'une blockchain à l'infrastructure supportant votre téléphone mobile.

Un _nœud complet_ est tel une antenne de téléphone à laquelle votre téléphone _(le noeud léger)_ se connecte. Toutes les stations d'antennes _(nœuds complets)_ sont connectées entre elles et constituent l'infrastructure des réseaux de communication. Si vous voulez passer un appel avec votre téléphone, vous devez d'abord vous connecter à une tour de téléphonie cellulaire, avant de pouvoir interagir avec tout autre téléphone mobile.

De même, dans le réseau distribué d'une blockchain, les _nœuds complets_ sont généralement toujours opérationnels et constituent le réseau distribué. Ils conservent également une copie de l'ensemble de la blockchain. Vous utilisez généralement un _noeud léger_ lorsque vous utilisez un wallet sur votre ordinateur ou sur votre mobile. Dans ce cas, vous allez d’abord devoir vous connecter à un _noeud complet_ avant de pouvoir interagir avec la blockchain.

![Nodes in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_nodes_D.jpg)
![Nodes in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_nodes_M.jpg)

## Les mineurs

Les mineurs sont aussi des nœuds. Ils soutiennent le réseau en transmettant l’information et en conservant une copie de la blockchain, comme les autres noeuds. En plus, les mineurs sont en charge de la création de nouveaux blocs.

Les mineurs vont avoir le but qui suit : chaque nouveau bloc fait suite à une décision prise collectivement par le réseau sur l'historique des dernières minutes. Le réseau parvient à un _consensus_ sur l'ordre des transactions pour cette période. Pour Horizen, ce délai est de 2,5 minutes en moyenne, pour Bitcoin, il est de 10 minutes.

Chaque mineur a un bloc légèrement différent des autres mineurs. Cela s'explique par le fait qu'il faut un certain temps pour qu'une nouvelle transaction s'étende à l'ensemble du réseau, et que différents mineurs peuvent recevoir ces transactions dans un ordre légèrement différent.

![Miner in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_miner_D.jpg)
![Miner in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/the-elements-of-a-blockchain/FR_miner_M.jpg)

Les mineurs commencent à résoudre un puzzle cryptographique afin de créer un bloc valide. Les mineurs commencent à travailler sur un nouveau bloc - et donc un nouveau puzzle - immédiatement après que le bloc précédent ait été ajouté à la chaîne. Ils rassemblent toutes les transactions sur le réseau qui n'ont pas encore été incluses dans un bloc et les mettent dans leur version du bloc suivant.

Le mineur qui résout le puzzle en premier peut ajouter le bloc suivant et ainsi écrire l'historique des dernières minutes. Il diffuse son bloc sur le réseau avec la solution qu'il a trouvée pour le puzzle. Tous les nœuds, qu'ils soient miniers ou non, vérifient si la solution au puzzle est correcte, et si elle l'est, ils ajoutent le nouveau bloc à leur copie de la blockchain. Puis le cycle recommence.

C'est ainsi que le réseau parvient à un accord ou à un _consensus_ sur ce qui s'est passé dans le passé. Si vous vous demandez pourquoi nous avons dit "environ 2,5 min", c'est parce que cela varie. Tous les mineurs commencent à résoudre le puzzle en même temps. Le temps qu'il faut aux mineurs pour résoudre le puzzle dépend de sa difficulté. S'il y a plus de personnes qui essaient de résoudre le puzzle en même temps, elles le résoudront plus rapidement en moyenne.

Lorsque cela se produit alors que de nouveaux mineurs rejoignent le réseau, le protocole augmente la difficulté du puzzle, et il faudra environ 2,5 minutes aux mineurs pour résoudre le nouveau puzzle. C'est un autre exemple d'un protocole qui est un ensemble de règles :

S'il faut moins de 2,5 minutes en moyenne pour résoudre le puzzle, rendez-le plus difficile. Si cela prend plus de temps, rendez les choses plus faciles.

Ainsi, les mineurs utilisent l'équipement qui aide à créer un consensus parmi tous les participants sur l'ordre des événements de manière efficace. Imaginez tous ces centaines ou milliers de mineurs, qui ne se connaissent pas, qui discutent de ce qui s'est passé et à quelle heure exactement dans une salle de conférence. Ce serait un désastre. La blockchain introduit un moyen très efficace afin de s'accorder sur l'ordre dans lequel certains événements se sont produits. Ce sont les mineurs qui proposent des suggestions sur l'historique des transactions et si un mineur donné résout le puzzle en premier, sa version sera acceptée par tous les membres du réseau. Bitcoin a en fait introduit le premier protocole de l'histoire de l'humanité, qui pouvait parvenir à un consensus dans un environnement sans confiance et distribué.

Mais pourquoi est-ce que les mineurs font cela ?

Les mineurs sont récompensés lorsqu’ils résolvent le puzzle en premier. Cela crée un incitatif pour les individus afin d'acheter et exploiter le matériel nécessaire afin de résoudre le puzzle cryptographique. Le mineur qui est le premier à résoudre le puzzle est récompensé dans la devise qu'il mine. Il est autorisé à s'envoyer lui-même une transaction avec une certaine quantité de coins, qui n'existait pas auparavant. C’est un autre exemple de règle d’un protocole blockchain :
Le mineur qui résout le bloc en premier est autorisé à inclure une transaction dans le bloc pour s'envoyer à lui même une partie des coins nouvellement crées.

## Résumé

En conclusion, les mineurs et les opérateurs (ou administrateurs) de nœuds sont les deux principales entités d'une blockchain. Les mineurs sont les teneurs de registre qui prennent la décision sur l’ordre des événements.

Afin de réaliser cette tâche de créer le consensus parmi les participants du réseau, les mineurs reçoivent une récompense. Cette récompense génère des nouveaux coins. Chaque ZEN disponible aujourd'hui vient d’une récompense de bloc de mineurs.

## Contenu Débutant Ci-dessous - Identité dans Blockchain

Dans notre dernier article traitant des éléments d'une blockchain, nous avons conclu que les mineurs sont les teneurs de registre d'une cryptomonnaie. Ils font le suivi des fonds disponibles et de leurs propriétaires. Nous devons présenter le concept d’identité pour avoir la propriété. Vous voulez être le seul propriétaire de vos fonds et vos fonds doivent être associés à vous. Parlons donc du moment où la cryptographie entre en scène et de ce que cela a à voir avec votre identité.

## Cryptographie à clé publique

L'un des concepts fondamentaux qui font fonctionner les blockchains et les cryptomonnaies est le concept de _cryptographie asymétrique_ aussi connu comme _cryptographie à clé publique_.
Avec la cryptographie symétrique, vous utilisez la même clé pour chiffrer un texte que vous utiliserez pour le déchiffrer plus tard (comme un cadenas).

![Symmetric in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/identity-in-blockchain/FR_symmetric_D.jpg)
![Symmetric in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/identity-in-blockchain/FR_symmetric_M.jpg)

Avec la cryptographie asymétrique, vous chiffrez et déchiffrez un message en utilisant deux clés différentes, la clé publique, et la clé privée. Les clés viennent toujours par paire. Si vous chiffrez un message avec une clé publique, il devra être déchiffré avec la clé privée correspondante et vice versa. Vous avez toujours une paire de clés. Cela se résume à un concept simple : votre paire de clé est votre identité sur la blockchain.

![Asymmetric in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/identity-in-blockchain/FR_asymmetric_D.jpg)
![Asymmetric in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/identity-in-blockchain/FR_asymmetric_M.jpg)

## Votre paire de clés est votre identité

Votre paire de clés est votre identité

L'idée générale dans les cryptomonnaies est que vous recevez des fonds grâce à votre clé publique et les dépensez avec votre clé privée. Une clé privée sur la blockchain Horizen pourrait ressembler à cela :

<center>
Kz6994Ek9L3uzjQo2wANaHguBbEShoHZo6q1Y3r6rXrHfWka1fnx
</center>

et la clé publique correspondante ou l’adresse à cela :

<center>
znSrHR9ssjKMsrYfk5fTmKH4LbgDxXJ3s6j
</center>

Ces deux clés sont intentionnellement appelées clé publique et clé privée. Vous pouvez partager votre clé publique à n’importe qui qui veut vous envoyer des fonds. Votre clé privée, comme son nom l’indique, devrait rester privée en toutes circonstances, car elle vous permet de dépenser vos fonds. Si quelqu'un d'autre met la main sur votre clé privée, il peut accéder à vos fonds et les voler.

La comparaison dans la vraie vie que vous entendrez le plus souvent est que votre clé publique est comme votre adresse. Vous pouvez la donner à n'importe qui qui veut vous envoyer une lettre. Votre clé privée est comme la clé de votre boîte aux lettres. Seule cette clé vous permet d'accéder à votre courrier et vous ne la donneriez pas à un étranger. Si vous voulez en savoir plus sur ce concept, vous trouverez une explication plus détaillée dans la [section avancée]({{ site.baseurl }}{% post_url /privacy/advanced/2021-02-04-public-key-cryptography %}) et une description exacte dans la section expert.

Vos clés sont importantes pour envoyer et recevoir des transactions. Techniquement, une transaction est un message vers tous les noeuds du réseau. Ce message inclut le montant des fonds que vous souhaitez envoyer, et à qui. Cette information est ensuite chiffrée avec votre clé privée, une étape que nous appelons _signature de la transaction_.

![Signing in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/identity-in-blockchain/FR_signing_D.jpg)
![Signing in FR]({{site.baseurl_root}}/assets/post_files/technology/beginner/identity-in-blockchain/FR_signing_M.jpg)

Une signature digitale fonctionne de la même manière que pour l’autorisation d’une transaction dans la vie réelle en utilisant votre signature “analogique”. Même avec les supercalculateurs modernes, il est impossible de forger une telle signature numérique. Par conséquent, la cryptographie à clé publique est considérée comme l'un des moyens de chiffrement les plus sûrs actuellement disponibles.

Tout cela serait fastidieux à faire manuellement et exigerait une certaine habileté. Heureusement, il existe des portefeuilles qui vous aident à faire tout ce qui précède. Les portefeuilles se chargent de la génération et de la gestion de vos clés ainsi que du chiffrement et du déchiffrement nécessaires. Ce qui est vraiment important, c'est de comprendre que votre clé privée est utilisée pour autoriser l'utilisation de vos fonds. La première leçon, et la plus importante, c'est d'assurer sa sécurité. Personne ne peut vous aider à récupérer vos clés au cas où vous les perdriez. Si quelqu’un était capable de les récupérer pour vous, cela voudrait dire qu’il peut prendre tout vos fonds.

## Résumé

Votre paire de clé est votre identité sur la blockchain. Votre clé publique est similaire à votre adresse et utilisée pour recevoir des fonds. Alors que votre clé privée est une sorte de mot de passe qui vous permet (ou qui que ce soit qui met la main dessus) de dépenser vos fonds. Protégez toujours vos clés privées et ne les donnez jamais à d'autres personnes ! S'ils vous demandent votre clé privée, c'est très certainement une arnaque.
