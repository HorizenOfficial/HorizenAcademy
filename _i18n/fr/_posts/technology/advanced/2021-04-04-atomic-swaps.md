---
layout: post
type: article
title: "Les Atomic Swaps"
description: "Pour finir, nous souhaitons vous montrer un type spécial de transaction. Un Atomic Swap vous permet d’échanger deux différents types de cryptomonnaies sans avoir besoin d’une plateforme d’échange."
permalink: /technology/advanced/atomic-swaps/
topic: technology
level: advanced
chapter: "Les transactions"
further_reads: [atomic_swaps_the_interoperability_revolution_in_cryptos, everything_you_need_to_know_about_atomic_swaps_and_how_komodo_is_advancing_the_technology, atomic_swap_compatibility_of_different_cryptocurrencies]
---

Si vous voulez échanger une cryptomonnaie contre une autre, vous irez très probablement sur une plateforme d'échange centralisée. D’abord, vous devez vérifier si la plateforme d’échange offre la paire de trading qui vous intéresse. Ensuite, vous transférez vos fonds à leur adresse, ce qui demande de faire confiance à un tiers. La plupart des plateformes d'échange proposent des paires BTC et ETH. Pour trader avec d’autres paires, vous devrez souvent acheter du bitcoin que vous convertirez ensuite en la cryptomonnaie souhaité.

Un type spécial de transaction dont nous souhaitons parler dans cet article est l’Atomic Swap. C’est un type de transaction qui touche les sujets de scalabilité et d’interopérabilité en même temps.

Les Atomic Swaps sont une technologie qui vous permet de trader en Peer-to-Peer sans l'aide d'un tiers de confiance. Ils suppriment également la confiance nécessaire pour que vous puissiez organiser un swap avec un utilisateur inconnu. Quelqu'un devrait d'abord envoyer ses fonds, et la contrepartie pourrait décider de ne pas respecter sa part de l'opération. L’Atomic Swap permet aux pairs d'effectuer un échange dit “sans confiance” de différentes devises selon des conditions prédéfinies qu'ils ont convenues sans avoir à craindre de perdre leurs fonds.

### La technologie derrière les Atomics Swaps

Si vous avez lu l’article sur la [cryptographie à clé publique]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography %}), vous savez qu’une transaction valide demande une signature. Cette signature peut être créée uniquement par la personne qui a accès à la clé privée. Lorsque vous envoyez une transaction, vous la signez et la diffusez sur le réseau par la suite. Les HTLCs sont basés sur la technologie _state channels_. Nous les expliquerons en détail dans notre niveau expert, mais pour le moment, tout ce que vous devez savoir c’est qu’ils vous permettent d’échanger des transactions signées de manière sécurisée. Seulement lorsque les participants décident qu’ils ont fini la transaction, l’état final est diffusé sur la blockchain.

![channel hierarchy](/assets/post_files/technology/advanced/atomic-swaps/FR_channel_hierarchy_D.jpg)
![channel hierarchy](/assets/post_files/technology/advanced/atomic-swaps/FR_channel_hierarchy_M.jpg)

La partie "Hashed" (Hashée) de HTLC signifie qu'un hash peut servir de verrou pour le contrat, afin de le protéger d'un tiers qui y accède. La partie "Timelock" fait référence au fait que le contrat peut avoir une date d'expiration. Vous devez remplir deux conditions pour effectuer un Atomic Swap entre deux actifs : Les deux actifs et leur blockchains sous-jacente doivent prendre en charge le même algorithme de hachage, comme SHA-256 dans le cas de Bitcoin et les deux blockchains doivent prendre en charge une sorte de programmabilité qui permet le déploiement d'un HTLC.

### Le processus

Le processus d'un Atomic Swap ressemble généralement à ce qui suit. Supposons qu'Alice ait un peu de BTC et que Bob ait un peu de ZEN. Les deux parties conviennent d'échanger un certain montant de leurs actifs.

![swaps](/assets/post_files/technology/advanced/atomic-swaps/swap_1.jpeg)
![swaps](/assets/post_files/technology/advanced/atomic-swaps/swap_1.jpeg)

Premièrement, Alice génère un HTLC qui a une adresse sur la blockchain Bitcoin. Le contrat possède une adresse utile à l’interaction, ici ce sera ABC. Ensuite, Alice génère ou choisi un secret; dans cet exemple son secret est XYZ. En utilisant une [fonction de hachage]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}) elle génère un cadenas (_lock_) (ici: _1b9f_…), qui est simplement le _hash_ du secret. Maintenant elle dépose le montant en bitcoin qui a été défini avec Bob dans le contrat qui est bloqué. Enfin, elle envoie le cadenas à Bob.

Le contrat peut avoir deux résultats :

Si rien ne se passe pendant un certain temps, disons 24 heures, l'argent est rendu à Alice. C'est nécessaire pour qu'elle ne perde pas son argent au cas où Bob ne répondrait jamais. Il s'agit de la composante _timelock_ du HTLC.
Si Bob est en mesure de fournir le secret, le contrat transférera automatiquement les bitcoins à son adresse. Parce que les fonctions de hachage sont des fonctions unidirectionnelles, Bob ne connaît pas encore le secret, bien qu'il en connaisse le hash.

Maintenant c’est au tour de Bob.

![swaps](/assets/post_files/technology/advanced/atomic-swaps/swap_2.jpeg)
![swaps](/assets/post_files/technology/advanced/atomic-swaps/swap_2.jpeg)

Bob crée lui aussi un Hashed Timelock Contract, mais cette fois-ci sur la blockchain Horizen. Son contrat crée également une adresse, dans cet exemple BCD. Alice lui a déjà envoyé son cadenas (le même qu’elle a utilisé dans son contrat) donc Bob va bloquer son contrat avec le même cadenas. Enfin il dépose le montant en ZEN sur lequel ils se sont mis d’accord. Et comme pour le contrat créé par Alice, le contrat de Bob peut s'exécuter de deux manières: Soit Bob est remboursé après une certaine période de temps, ou alors Alice fourni le secret et les fonds sont transférés à son adresse.

Maintenant, les deux contrats sont configurés sur leur blockchain respective. Alice doit passer à la prochaine étape pendant la période bloquée, sinon, les deux auront un remboursement et rien ne se sera passé.

![swaps](/assets/post_files/technology/advanced/atomic-swaps/swap_3.jpeg)
![swaps](/assets/post_files/technology/advanced/atomic-swaps/swap_3.jpeg)

Alice va maintenant utiliser le secret qu’elle a choisi plus tôt pour débloquer le hashlock du contrat de Bob fait sur la blockchain Horizen et les ZEN seront libérés pour elle. C’est une opération publique et vérifiable sur la blockchain. Bob peut, ensuite, voir le secret et l’utiliser pour débloquer le bitcoin bloqué dans le contrat d’Alice. En fournissant le secret le HTLC va automatiquement débloquer les fonds à Bob vers l’adresse bitcoin qu’il aura spécifié.

Sans avoir besoin de se faire confiance, Alice et Bob ont maintenant réussi à échanger leurs coins, sans avoir avoir besoin d’un tiers. À aucun moment, l'un des deux ne peut voler l'argent de l'autre. Lorsque Bob reçoit le cadenas d'Alice, il peut vérifier qu'elle a utilisé le même cadenas en observant la blockchain Bitcoin. Si Alice ne voulait pas racheter ses ZEN, les deux seraient automatiquement remboursés. Et Alice ne peut pas revendiquer les ZEN de Bob si Bob n'a pas eu connaissance du secret.

### Les Atomic Swaps aujourd'hui

Il y a peu de wallets ou de plateformes d'échange décentralisés qui permettent aux utilisateurs de faire des Atomic Swaps. Jusqu'à présent, il n'y a eu qu'un petit nombre d'Atomics Swaps, en voici un bref historique :

- Le premier Atomic Swap sur-chaîne a eu lieu le 20 septembre 2017 entre Litecoin et Decred.
- Le premier Atomic Swap hors-chaîne a eu lieu en novembre 2017 entre Litecoin et Bitcoin sur le Lightning Network.
- Une explication détaillée d'un Atomic Swap entre Ethereum et Bitcoin peut être trouvée [ici](https://medium.com/coblox/connect-all-the-blockchains-atomic-swap-78b38fff42e).
- Plus récemment, le 7 décembre 2018, TenX a présenté un Atomic Swap d’un ERC20 vers Bitcoin Lightning à l'aide de son logiciel open-source COMIT.

La technologie est très prometteuse, mais pour obtenir l'adoption de wallets tout comme celui des plateformes d'échange, il faudra construire une interface conviviale pour utiliser les Atomic Swaps.

### Résumé

Les Atomic Swaps représenteront une alternative aux plateformes d'échanges centralisés utilisées aujourd'hui une fois qu'ils seront disponibles entre la majorité des cryptomonnaies. Il n'y a à aucun moment un tiers impliqué qui a accès aux fonds d'un utilisateur. Le processus d'échange est entièrement fiable et presque instantané. Les contrats Hashed Timelock sont au cœur des contrats Atomic Swaps. Je soupçonne qu'il ne faudra pas longtemps avant que la compatibilité Atomic Swap soit une fonctionnalité nécessaire pour qu'une blockchain soit adoptée.

C'était le dernier article sur les transactions dans la section avancée. Pour en savoir plus sur le fonctionnement des transactions et les types de transactions, vous pouvez consulter notre niveau expert. Au niveau avancé, nous continuerons avec une introduction aux techniques de préservation de la vie privée sur la blockchain.
