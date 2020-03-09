---
layout: post
type: intro
title: "La confidentialité en ligne sur la blockchain"
description: "Alors que la plupart des cryptomonnaies ne sont pas privées par défaut, vous avez l’option de créer de véritables transactions privées. Ce chapitre présente les différentes méthodes qui permettent d'assurer le respect de la vie privée sur la blockchain."
permalink: /technology/advanced/privacy-on-the-blockchain/
topic: technology
level: advanced
chapter: "La confidentialité en ligne"
further_reads: [how_zcoin_privacy_technology_compares_to_the_competition]
---

L'une des grandes propositions des blockchains est la transparence qu'offrent ces grands registres publics. Il existe cependant de nombreux cas où il est souhaitable d'effectuer des transactions privées. Dans cet article, nous voulons vous présenter quatre concepts qui visent à accroître le niveau de confidentialité des transactions sur les réseaux publics. C'est une idée fausse courante que les cryptomonnaies sont privées. La plupart d'entre elles sont pseudo-anonymes, ce qui signifie que les identités du monde réel ne sont pas reliées aux adresses par défaut, mais peuvent l'être par une analyse continue des données.

### Pourquoi la protection de la vie privée ?

Il y a de nombreuses raisons légitimes de créer des transactions privées sur une blockchain. Si vous avez un problème de santé et que vous devez acheter vos ordonnances régulièrement, vous avez de bonnes raisons de faire ces transactions de manière privée. Si vous avez une entreprise, vous ne voulez pas révéler vos sources de revenus à vos concurrents et si vous achetez un cadeau pour votre conjoint, vous ne voudrez peut-être pas qu'il le voie avant de recevoir le cadeau. Il y a de nombreuses bonnes raisons de vouloir faire des transactions privées, et nous croyons que la vie privée est et devrait être traitée comme un droit humain fondamental.

Pour cet article, nous supposons que vous connaissez le modèle UTXO que de nombreuses blockchains utilisent pour la comptabilité. Si ce n'est pas le cas, n'hésitez pas à consulter [notre article]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-02-the-utxo-model %}) à ce sujet avant de poursuivre votre lecture.

### Les Changements d’adresse

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/privacy-on-the-blockchain/change_address_0.png" alt="Change Addresses">
</div>

Les changements d'adresse ont été introduits pour que les personnes avec qui vous faites des transactions n'aient pas accès à l'historique complet de vos transactions simplement en cherchant l'adresse que vous avez utilisée pour faire des transactions avec elles. La plupart des portefeuilles modernes génèrent automatiquement des nouvelles adresses pour vous lorsque vous créez une transaction. Dans l'exemple ci-dessus d'une transaction bitcoin normale, vous pouvez voir une entrée et deux sorties pour la transaction. La première sortie est allée à une adresse différente et est le montant que l'utilisateur voulait dépenser. Le reste de l'UTXO est retourné à la même adresse que celle d'où provenaient les fonds.

<div class="my-4">
    <img src="/assets/post_files/technology/advanced/privacy-on-the-blockchain/change_address_1.png" alt="Change Addresses">
</div>

Un wallet qui prend en charge le changement d'adresse génère une nouvelle adresse, à chaque fois que vous recevez des fonds, peu importe s'il s'agit d'une première transaction ou d'une transaction régulière. L'exemple ci-dessus montre une transaction avec exactement les mêmes montants qu'auparavant, mais cette fois-ci le change est retourné à une adresse modifiée nouvellement créée. Cette fonction améliore la confidentialité en rendant plus difficile la traçabilité de l'historique des transactions d'un utilisateur donné.

### Coin Mixing (Le mélange de coin)

Les protocoles de Coin Mixing comme SharedCoin, TumbleBit ou CoinJoin (utilisés par Dash) sont la prochaine étape évolutive pour améliorer la confidentialité en mélangeant plusieurs entrées et sorties différentes en une seule transaction, souvent plusieurs fois pendant plusieurs transactions intermédiaires.

![Coin Mixing](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_coinjoin_D.jpg)
![Coin Mixing](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_coinjoin_M.jpg)

Les transactions en Coin Mixing ne nécessitent aucun changement au protocole de base Bitcoin que beaucoup d'autres cryptomonnaies (comme Horizen) utilisent. Dans le graphique ci-dessus, vous pouvez voir les schémas d'une transaction en Coin Mixing. Un certain nombre d'entrées sont combinées dans un pool de mélange (au centre) et ensuite distribuées à leurs adresses de destination. Une transaction en Coin Mixing rend plus difficile pour un attaquant de savoir qui envoyait de l'argent à qui.

Le niveau de confidentialité fourni par les services de mixing est bien meilleur qu'avec les transactions régulières, mais on peut relier facilement les adresses d'entrée aux adresses de sortie en surveillant les quantités de coins dans une transaction de mixing. Il existe des outils en ligne pour ce faire. Un autre inconvénient du coin mixing est que de nombreux mélangeurs disponibles sont centralisés et gérés par une tierce partie qui pourrait potentiellement voler vos fonds. Les techniques à la base de CoinJoin évitent ce risque de vol de vos coins en n'ayant pas de tiers centralisé.

À ce jour, il existe de nombreuses itérations de protocoles de coin mixing qui se sont améliorées par rapport à la promesse de confidentialité étape par étape. Avec CoinJoin par exemple, chaque utilisateur doit envoyer la même quantité au pool de mélange, ce qui rend le suivi des quantités beaucoup plus difficile. L'introduction des [transactions confidentielles](https://medium.com/@ecurrencyhodler/a-primer-to-confidential-transactions-e6ab3dd2bf1e) résoudra ce problème en masquant les montants des transactions. Dans notre section avancée, nous parlerons plus en détail des mélangeurs individuels, mais passons maintenant à autre chose.

### Les ring signatures

Les _ring signatures_ (traduit littéralement par signature en anneau, mais on utilise le terme ring signature en français) ont été introduites pour la première fois par Rivest, Shamir et Taumann en 2001 et l'idée générale a été utilisée pour un certain nombre de protocoles de confidentialité depuis lors. Nous utiliserons le dilemme de la fuite de la Maison-Blanche pour démontrer la proposition de valeur de leur concept.

Imaginez un haut fonctionnaire de la Maison-Blanche (Alice) voulant révéler un secret à la presse au sujet du président. Elle doit s'assurer que le journaliste qui reçoit la fuite a un moyen de vérifier la source de l'information sans révéler son identité. Ce qu'elle peut faire, c'est utiliser une _ring signature_ pour signer le message. Pour construire la _ring signature_, il lui suffit d'avoir sa clé privée et les clés publiques des autres dénonciateurs possibles, par exemple d'autres membres du cabinet (Bob et Carole).

![Ring Signatures](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_ring_sig_D.jpg)
![Ring Signatures](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_ring_sig_M.jpg)

Le vérificateur (journaliste) peut vérifier que le message a bien été signé par un haut fonctionnaire, mais il ne peut déterminer qui a construit la signature (parmi Alice, Bob et Carole).

Dans le contexte des cryptomonnaies, un utilisateur peut collecter un ensemble de clés publiques, créer une transaction et la signer en utilisant sa clé privée. L'ensemble des vérificateurs, qui sont les nœuds du réseau, peuvent vérifier que la transaction est valide et qu'un des membres du groupe a signé le message. Ils ne peuvent pas dire qui a signé la transaction, ce qui rend les _ring signatures_ idéales pour les transactions privées. Monero est la cryptomonnaie la plus remarquable utilisant les _ring signatures_ qui font partie du protocole CryptoNote sur lequel Monero est construit.

### Les Zero-Knowledge Proofs

Les Zero-Knowledge Proofs (zk-Proofs) étaient connues bien avant l'apparition de la technologie de la blockchain, mais avec les grands registres distribués, un tout nouvel ensemble de cas d'utilisation possibles est apparu. Pour parler simplement, les Zero-Knowledge Proofs vous permettent de prouver à un vérificateur que vous savez quelque chose, sans révéler cette connaissance. Voici un exemple intuitif et non numérique de ce à quoi cela pourrait ressembler. Une personne voyante est le prouveur, une personne aux yeux bandés est le vérificateur, et il y a deux boules de couleur différente.

Le voyant (prouveur) veut convaincre la personne qui a les yeux bandés (vérificateur) que les deux boules sont de couleurs différentes, sans révéler les couleurs. Ils s'assoient à une table et la personne aux yeux bandés montre au prouveur l'une des boules. La personne aux yeux bandés continue à placer les deux boules sous la table et choisit de montrer une boule dans un deuxième tour ; soit la même boule qu'avant, soit l'autre. S'il choisit de montrer la même balle, le prouveur le sait parce qu'il voit la même couleur et le dit à l'aveugle. Si la personne aveugle montrait l'autre boule, le prouveur pourrait dire avec certitude que le vérificateur (personne aux yeux bandés) a changé les boules sous la table.

![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_zkproof_D.jpg)
![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/FR_zkproof_M.jpg)

Au deuxième tour, le prouveur aurait une chance sur deux d'obtenir la bonne réponse s'il devait deviner. Il devrait deviner au cas où l'affirmation qu'il essaie de prouver (les boules sont d'une couleur différente) était fausse. À ce stade, l'aveugle ne peut pas être sûr si la demande est correcte, ou si le prouveur a eu de la chance.

S'ils répètent le jeu plusieurs fois, les chances d'obtenir la bonne réponse à chaque fois en devinant diminuent de façon exponentielle. Après seulement dix tours de jeu, la chance de trouver la bonne balle à chaque fois par pure chance a diminué de 1 à 1024 (1 / 2^10). La personne aux yeux bandés peut être certaine que les deux boules sont de couleurs différentes, bien que le prouveur n'ait partagé aucune information sur les couleurs elles-mêmes.

L'idée d'utiliser les Zero-Knowledge Proofs pour les transactions de cryptomonnaie est la suivante : vous construisez une preuve que la transaction que vous voulez envoyer serait considérée comme valide par un nœud de vérification sans révéler aucune des données réelles de la transaction. Ceci permet à l'expéditeur, au destinataire et au montant de rester privé. Un autre cas d'utilisation qui est parfait pour l'application des zk-Proofs est la vérification d'identité. Par exemple, vous pouvez prouver à une entité que vous êtes d'un certain âge sans révéler aucune donnée personnelle comme votre date de naissance. Horizen utilise les zkSNARKs pour ses transactions protégées. Les zkSNARKs sont un type spécial de Zero-Knowledge Proofs, à savoir _Zero-Knowledge Succinct Non-interactive ARguments of Knowledge_.

- _Succinct_ signifie que les preuves sont courtes, c'est-à-dire faciles à calculer et à vérifier.
- _Non interactif_ signifie que le prouveur et le vérificateur n'ont pas besoin d'être en ligne en même temps. Avec l'exemple ci-dessus, le prouveur et le vérificateur doivent faire plusieurs allers-retours avant que le vérificateur ait sa preuve. Avec les épreuves non interactives, le prouveur peut construire la preuve entièrement seul, sans avoir besoin de communication dans le processus.
- _Les arguments de la connaissance (Arguments of knowledge)_ décrivent la preuve comme étant solide sur le plan informatique, c'est-à-dire qu'aucun adversaire ne peut construire une fausse preuve même s'il a accès à d'énormes ressources informatiques.
- Pour utiliser des transactions privées avec Horizen, vous utiliserez un type d'adresse différent. Dans votre portefeuille, vous pouvez soit générer des adresses T (adresses transparentes), soit des adresses Z (adresses protégées). Lorsque vous avez envoyé des fonds à une adresse Z, le montant et l'expéditeur sont enregistrés sur la blockchain, mais pas l'adresse de réception. Si vous transmettez les fonds à une deuxième adresse Z, aucune information sur la transaction n'est enregistrée, ni l'expéditeur, ni le destinataire, ni le montant. Si vous voulez essayer cette fonctionnalité, vous pouvez télécharger notre application phare [Sphere by Horizen](https://www.horizen.global/wallets/). Assurez-vous d'activer le mode complet dans les paramètres sinon vous ne pourrez pas générer d'adresses Z.

### Résumé

Il existe de nombreuses façons de récupérer votre vie privée sur une blockchain publique. Les approches telles que Change Addresses et Coin Mixers n'offrent pas une grande confidentialité, mais elles contribuent à rendre plus difficile la traçabilité des transactions jusqu'à leur origine et à relier les identités du monde réel aux adresses sur la blockchain. Les _ring signatures_ et les Zero-Knowledge Proofs sont des concepts plus avancés qui vous permettent d'effectuer des transactions entièrement privées, même sur des blockchains entièrement ouvertes et publiques.
