---
layout: post
type: intro
title: "Résumé de la section Avancé"
description: "Nous avons terminé le niveau avancé de notre section sur la technologie de la blockchain avec un résumé de tous les chapitres précédents."
permalink: /technology/advanced/summary/
topic: technology
level: advanced
chapter: "Résumé"
---

Dans ce dernier article de notre section Technologie Avancé, nous souhaitons résumer les sujets et concepts que nous avons couvert tout au long du niveau.

### Qu'est-ce que la Blockchain ?

Dans notre premier chapitre de "Qu'est-ce que la Blockchain ?", nous l'avons examinée sous trois angles différents. Tout d'abord, nous l'avons regardée du point de vue d’un informaticien et nous avons décrit la blockchain comme [une structure de données]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-01-02-blockchain-as-a-data-structure %}). Une blockchain est comme une liste chaînée, une structure de données commune avec la différence que les références qui relient les blocs individuels sont sécurisés cryptographiquement. Il est donc impossible d'altérer les données enregistrées sur une blockchain.

![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_blockchain_broken_D.jpg)
![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/FR_blockchain_broken_M.jpg)

Deuxièmement, nous avons considéré la blockchain comme un [protocole de transfert de valeur]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-01-03-a-protocol-to-transfer-value %}). Il existe de nombreux protocoles réseau différents qui permettent à différents appareils de communiquer de manière standardisée. Sans ces normes, il serait difficile pour les développeurs et les ingénieurs de construire des logiciels et du matériel interopérables. La blockchain est un nouveau type de protocole qui standardise la façon dont les gens peuvent échanger de la valeur sur internet sans intermédiaires tels que les banques ou tout autre fournisseur de paiement comme PayPal.

![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/FR_protocols_D.jpg)
![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/FR_protocols_M.jpg)

Enfin, nous vous avons présenté les [Smart Contracts]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-01-04-guaranteed-execution-with-smart-contracts %}). Les Smart Contracts sont des programmes stockés et exécutés sur la blockchain. Ils assurent une exécution impartiale sur la base de conditions convenues d'un commun accord et appliquées par un code. Ils ont le pouvoir de réduire les intermédiaires, ce qui réduit les coûts et fait gagner du temps. Avant de voir une adoption généralisée, nous devons surmonter certains obstacles, comme la résolution du problème Oracle qui décrit le défi de soumettre de manière fiable des données du monde réel à la blockchain.

![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/FR_oracle_D.jpg)
![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/FR_oracle_M.jpg)

### Comment fonctionne une blockchain ?

Dans le deuxième chapitre, nous avons d'abord donné un aperçu des différents éléments d'une blockchain, avant d'examiner chacun d'eux de plus près. Les deux premiers concepts que nous avons couverts étaient les [fonctions de hachage]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-03-hash-functions %}) et la [cryptographie à clé publique]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-04-public-key-cryptography %}). Alors que les fonctions de hachage sont utilisées afin de vérifier l'intégrité de la cryptographie à clé publique des données, le deuxième pilier de la technologie de la blockchain est utilisé pour vérifier la propriété.

![How it works](/assets/post_files/technology/advanced/public-key-cryptography/FR_how_it_works_D.jpg)
![How it works](/assets/post_files/technology/advanced/public-key-cryptography/FR_how_it_works_M.jpg)

Ensuite, nous avons parlé des réseaux [Peer-to-Peer distribués]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-05-a-peer-to-peer-p2p-network %}). Il y a des milliers de nœuds qui maintiennent une copie d'une blockchain, dans le cas de notre réseau de nœuds, plus de 25 000. Avec la structure de données sécurisée par cryptographie, c'est la raison pour laquelle les blockchains sont si robustes. Si l'un de vos pairs se déconnecte, vous vous connecterez à un autre. Si vous administrez un nœud et qu'il vous arrive de vous déconnecter pendant un certain temps, vous n'avez qu'à vous reconnecter à un moment donné pour être mis à jour par vos pairs sur les blocs que vous avez manqués pour redevenir pleinement fonctionnel.

![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/FR_central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/FR_central-distri_M.jpg)

Le [mécanisme de consensus]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-06-consensus-mechanisms %}) d'une blockchain permet au réseau de se mettre d'accord sur une version unique de l'histoire. L'historique dans le cas d'une blockchain pour les cryptomonnaies est l'ordre dans lequel les transactions sur le réseau ont eu lieu. Les deux mécanismes de consensus les plus couramment utilisés sont la preuve de travail (PoW) et la preuve d'enjeu (PoS). Les deux ont en commun que le pouvoir de vote est lié à une ressource limitée. Pour les blockchains en PoW, cette ressource limitée est la puissance de calcul, pour les blockchains en  PoS, c'est la possession de la cryptomonnaie en question. Bien que le PoW ait démontré sa robustesse sur une longue période de temps avec Bitcoin, le PoS doit encore prouver cette robustesse.

![Comparing POW and POS](/assets/post_files/technology/advanced/consensus-mechanisms/FR_compare_D.jpg)
![Comparing POW and POS](/assets/post_files/technology/advanced/consensus-mechanisms/FR_compare_M.jpg)

Pour le dernier article du chapitre sur le fonctionnement des blockchains, nous avons parlé du [minage]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-07-mining %}) pour les blockchains en PoW. Les mineurs s'efforcent de sécuriser la blockchain contre les attaques et de protéger l'historique enregistré jusqu'alors contre les changements. Ajouter un bloc à la blockchain nécessite un grand nombre de suppositions aléatoires pour trouver un nonce qui produira un hachage de bloc valide. Le hachage de bloc doit satisfaire à l'exigence de difficulté actuelle sur le réseau. Il est donc extrêmement difficile d'altérer les données de la blockchain. Si quelqu'un voulait changer les données enregistrées, il devrait refaire tout ce travail tout seul. Non seulement il aurait besoin de faire le travail, mais aussi à un rythme plus rapide que tous les mineurs honnêtes réunis.

Les mineurs sont en compétition et leur chance de trouver le prochain bloc valide est proportionnel à la puissance de calcul qu'ils contrôlent. Les mineurs reçoivent des coins nouvellement créés en récompense de leur travail. C'est l'une des grandes innovations introduites avec Bitcoin qu'un réseau distribué puisse payer ses participants pour sa propre maintenance.

![Miner](/assets/post_files/technology/advanced/mining/FR_miner_D.jpg)
![Miner](/assets/post_files/technology/advanced/mining/FR_miner_M.jpg)

### Les portefeuilles (les wallets)

Nous avons consacré le troisième chapitre aux [portefeuilles de cryptomonnaie et aux différents types qui existent]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-03-01-types-of-wallets %}). Un portefeuille (ou wallet) est un programme pour générer, gérer et stocker une paire de clés cryptographiques pour vous. Vous pouvez vérifier votre solde, recevoir et envoyer des fonds dans votre portefeuille. Habituellement, il y a un compromis à faire entre la commodité et la sécurité. Les fonds sur un portefeuille mobile sont pratiques à dépenser, mais pas très sûrs, tout comme l'argent liquide dans votre poche. De grandes quantités de cryptomonnaie stockées sur un hardware wallet sont moins pratiques à dépenser mais très sûres. La question la plus importante lorsque l'on considère la sécurité d'un portefeuille est : où sont les clés ? Si vous ne contrôlez pas vos clés, vous ne contrôlez pas vos fonds. Vous autorisez l'utilisation de vos fonds avec votre clé privée lors d'une étape appelée signature de transaction et vous devez garder votre clé privée en sécurité en toutes circonstances.

![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/FR_signing_hardware_wallet_D.jpg)
![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/FR_signing_hardware_wallet_M.jpg)

### Les transactions

Dans le quatrième chapitre de ce niveau, nous avons parlé des transactions. Dans le premier article, nous vous avons présenté le modèle [UTXO]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-04-02-the-utxo-model %}) (Unspent Transaction Output). C'est la méthode comptable qui est utilisée dans la plupart des blockchains. La blockchain ne gère pas un solde de compte pour chaque adresse. Votre portefeuille passe en revue l'historique des transactions sur la blockchain et prend toutes les transactions entrantes que vous n'avez pas encore dépensées - vos UTXO - et les additionne afin de générer votre solde disponible. C'est en fait semblable à la façon dont l'argent liquide fonctionne. Si vous avez un UTXO de 10 Zen mais que vous ne voulez en dépenser que 8, votre portefeuille dépensera l'UTXO dans une transaction avec deux sorties : l'une envoyant les 8 ZEN à leur destination et une seconde retournant 2 ZEN à vous-même comme monnaie de change.

![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_D.jpg)
![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_M.jpg)

Dans l'article suivant sur les transactions, nous avons parlé de l'[explorateur de blocs]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-04-03-block-explorer-continued %}), un outil graphique pour visualiser et explorer les données sur la blockchain. Il y a un explorateur de blocs disponible pour presque toutes les blockchains publiques. Il vous permet de parcourir l'historique d'une chaîne donnée avec toutes les transactions effectuées, ainsi que toutes les adresses utilisées et les blocs minés. Nous avons expliqué ce que les données qu'un explorateur de blocs vous montre signifient et avons jeté un coup d'oeil à la toute première transaction de cryptomonnaie, entre Satoshi Nakamoto lui-même et Hal Finney.

![Bitcoin Transaction](/assets/post_files/technology/advanced/block-explorer-continued/transactions.png)

Nous vous avons également montré un type de transaction très spécial dans ce chapitre, l'[Atomic Swap]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-04-04-atomic-swaps %}) qui permet aux utilisateurs l'échange sans tiers de confiance de deux cryptomonnaies différentes entre deux blockchains séparées. Au cœur de ce système, les Atomic Swaps reposent sur des contrats HTLC (Hashed Time Locked Contracts). Il n'y a à aucun moment un tiers impliqué qui a accès aux fonds d'un utilisateur. Le processus d'échange est entièrement fiable et presque instantané.

![swaps](/assets/post_files/technology/advanced/atomic-swaps/FR_swaps_D.jpg)
![swaps](/assets/post_files/technology/advanced/atomic-swaps/FR_swaps_M.jpg)

### Protection de la vie privée sur la blockchain

Le droit à la vie privée est l'une des valeurs fondamentales d'Horizen. Nous avons examiné différentes méthodes pour préserver votre [vie privée sur la blockchain]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-05-01-intro-to-privacy-on-the-blockchain %}). Nous avons commencé par des méthodes simples comme l'utilisation d'adresses différentes pour chaque nouvelle transaction et des protocoles de mélange de coins qui combinent un certain nombre de transactions provenant de différentes sources afin de brouiller le lien entre expéditeur et destinataire. Une technique plus avancée pour garantir les transactions privées est l'utilisation de _ring signatures_. Avec les _ring signatures_, un groupe de personnes signe une transaction et un observateur saura avec certitude qu'un des membres du groupe a envoyé la transaction, mais il ne sera pas capable de dire lequel.

La dernière technologie de protection de la vie privée dont nous avons parlé était celle des Zero-Knowledge Proofs, ou plus précisément des zkSNARKs. C'est la technologie qu'Horizen utilise pour ses transactions privées. Pour parler simplement, un Zero-Knowledge Proof vous permet de prouver à un vérificateur que vous savez quelque chose, sans révéler cette connaissance. Nous avons utilisé l'exemple d'une personne voyante convaincant une personne aux yeux bandés que deux boules sont de couleur différente, sans révéler les couleurs.

![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_zkproof_D.jpg)
![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_zkproof_M.jpg)

### Les attaques sur la Blockchain

Le dernier article de notre niveau avancé couvrait différentes [attaques sur les blockchains]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-06-01-attacks-on-blockchain %}). Nous vous avons présenté le problème des généraux byzantins. C'est une expérience de pensée où un certain nombre de généraux veulent coordonner une attaque sans un moyen de communication fiable. Les blockchains posent une solution au problème du Général parce qu'elles permettent à un groupe d'individus non fiables d'atteindre un consensus dans une configuration distribuée.

Nous avons parlé d'attaques DDOS, où un attaquant tente de ralentir ou même d'arrêter un service en envoyant un grand nombre de requêtes frauduleuses sur le réseau.

Une autre attaque que nous avons décrite est l'attaque Sybil, où un attaquant crée un grand nombre de fausses identités. Un certain nombre de nœuds Sybil peuvent essayer d'entourer votre nœud et l'empêcher de se connecter à d'autres nœuds honnêtes sur le réseau. De cette façon, on pourrait essayer de vous empêcher d'envoyer ou de recevoir de l'information au réseau.

Enfin, nous avons parlé du type d'attaque le plus courant, les attaques 51 %. Un mineur qui contrôle une part importante de la puissance de hachage totale d'un réseau peut tenter d'effectuer une telle attaque. Le mineur malveillant crée une transaction sur la chaîne honnête qui dépense ses fonds. En attendant, il exploite des blocs de manière privée, ce qui signifie que le mineur ne diffuse pas les blocs sur le réseau. Une fois que la chaîne, qui n'inclut pas les dépenses de transaction, devienne la chaîne la plus longue, il la diffuse et selon la règle de la chaîne la plus longue, elle sera reconnue par tous les mineurs comme la nouvelle chaîne valide. L'attaquant a réussi à reprendre le contrôle des fonds et peut maintenant les dépenser une deuxième fois.


![51% Attack](/assets/post_files/technology/advanced/attacks-on-blockchain/percent.gif)

### Remarques finales

Nous avons couvert de nombreux concepts dans la section avancée et nous espérons que vous avez beaucoup appris. Si vous avez aimé ce que vous avez trouvé ici, n'hésitez pas à partager vos connaissances ainsi que notre site Web avec vos amis et votre famille. Si vous avez eu du mal à suivre le mouvement à un moment donné, ne vous inquiétez pas ! C'est un sujet complexe et il nous a fallu un certain temps pour apprendre. Vous pouvez toujours revenir pour relire ces articles. Il sera beaucoup plus logique de les lire une deuxième fois avec une petite pause entre les deux.

Si vous vous sentez à l'aise avec tout ce que vous avez lu et que vous aimeriez continuer à apprendre, il y a plus ! Montez d'un niveau et consultez nos articles experts. Nous les avons structurés de la même manière, mais nous avons ajouté plus de détails à tous les sujets et nous les avons divisés pour examiner de plus près les différentes composantes. Nous avons conçu le contenu de manière à ce que vous puissiez le lire de haut en bas (ce que nous pouvons que vous recommander) ou sauter aux articles qui vous intéressent particulièrement.

Nous espérons que vous avez aimé cette série d'articles. Veuillez nous faire savoir s'il y a quelque chose que vous trouvez déroutant. Le contenu fourni est et sera en cours d'élaboration. Nous sommes toujours ouverts aux suggestions et aux commentaires constructifs, alors envoyez-nous un message à academy@horizen.global si vous voulez partager vos idées avec nous.


**Votre équipe Horizen**
