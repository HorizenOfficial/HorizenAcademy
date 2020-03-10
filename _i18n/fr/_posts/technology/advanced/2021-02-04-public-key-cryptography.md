---
layout: post
type: article
title: "La Cryptographie à Clé Publique"
description: "Un autre élément majeur est la Cryptographie à Clé Publique. Elle est utilisée pour vérifier la propriété et donne leur nom aux cryptomonnaies"
permalink: /technology/advanced/public-key-cryptography/
topic: technology
level: advanced
chapter: "Comment fonctionne une Blockchain ?"
further_reads: [how_to_create_a_bitcoin_wallet_address_from_a_private_key, what_is_the_math_behind_elliptic_curve_cryptography, elliptic_curve_cryptography_a_gentle_introduction]
---

Puisque le but de la conception originale de la blockchain était de permettre une nouvelle forme d'argent équitable, ce serait formidable de pouvoir réellement posséder de l'argent dans ce système, n'est-ce pas ? Il doit y avoir un concept d'identité pour avoir la propriété sur la blockchain ; vous ne pouvez pas avoir la propriété s'il n'y a pas de représentation du propriétaire.

La _cryptographie à clé publique_ permet de représenter l'identité sur la blockchain. C'est la deuxième pierre angulaire de la technologie de la blockchain en plus des [fonctions de hachage]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %})  dont nous avons parlé dans le dernier article. Les fonctions de hachage vérifient l’authenticité et l’intégrité de la donnée pendant que la cryptographie à clé publique vérifie la propriété sur la blockchain.

![How it works](/assets/post_files/technology/advanced/2.3-public-key-cryptography/FR_how_it_works_D.jpg)
![How it works](/assets/post_files/technology/advanced/2.3-public-key-cryptography/FR_how_it_works_M.jpg)

Reprenons depuis le début. La cryptographie à clé publique repose sur les clés privées, les clés publiques, les adresses et les signatures numériques. Lorsque vous possédez des cryptomonnaies, la blockchain contient un enregistrement des coins associés à votre clé publique. Vous devez fournir une signature numérique pour autoriser la dépense de ces coins. Vous ne pouvez fournir cette signature numérique que si vous êtes en possession de la clé privée qui correspond à la clé publique.

### Cryptographie à courbe elliptique

Pour comprendre la façon dont vos clés et vos adresses fonctionnent ensemble, nous devons introduire la cryptographie à courbe elliptique (ECC). Il y a différentes façons de construire un schéma de cryptographie à clé publique. Le bitcoin et la plupart des autres cryptomonnaies utilisent la cryptographie à courbe elliptique (ECC)

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_0.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Bitcoin, Ethereum et beaucoup d'autres devises utilisent une courbe appelée secp256k1 et elle ressemble à celle à gauche. L'équation pour cette courbe est y^2 = x^3 + 7. Ce qui rend les courbes elliptiques utiles, c'est que vous pouvez faire des mathématiques avec elles, et les mathématiques que vous faites avec les courbes contiennent des propriétés spéciales.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_0.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_1.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Le graphique à gauche montre un exemple d'addition de deux points de la courbe. Lorsque nous voulons additionner les points P et Q ensemble, nous les relions d'abord par une ligne droite. Cette ligne droite croise la courbe en un troisième point. Nous devons maintenant projeter le troisième point de l'autre côté de l'axe des x (multiplier la coordonnée y par -1) et nous obtenons la somme des points P et Q : R. La clé à retenir est que la somme de deux points sur la courbe est un troisième point sur la courbe.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_1.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_2.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Quand on veut multiplier un point sur la courbe, il faut l'ajouter à lui-même. Pour multiplier le point P par deux, on l'ajoute à lui-même une fois. Dans ce cas, on ne peut pas vraiment relier deux points, mais on va vers la ligne tangente (celle avec les flèches).
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_2.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_3.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Pourquoi la ligne tangente vous demandez vous. Si vous regardez un point aléatoire proche de P (le gris le plus clair), en reliant les deux points, vous obtiendrez la ligne grise la plus claire. En vous rapprochant de plus en plus ce point vers P (de clair à foncé), la ligne de jonction se rapproche de la ligne tangente jusqu'à ce qu'elle devienne les points et que les lignes se chevauchent.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_3.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_4.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        L'ajout à lui-même est facile. Nous prenons à nouveau l'intersection de la ligne droite avec la courbe et la projetons de l'autre côté de l'axe des abscisses.
        <br/>
        Si nous voulons multiplier P par 3, nous additionnons maintenant P et le point (P + P) ensemble. Pour multiplier P par quatre, on peut ajouter un point (P + P) à lui-même et ainsi de suite.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_4.jpg" alt="ECC" style="width: 400px;"></div>
</div>

Le point clé à retenir est que la multiplication d'un point est une tâche facile. La division est difficile (lire infaisable). Il n'y a pas d'algorithme pour calculer combien de fois P a été ajouté à lui-même ou en termes de multiplication par quel nombre il a été multiplié afin d'arriver à un certain point. Cela devrait suffire à comprendre le concept de base de la cryptographie à clé publique basée sur des courbes elliptiques.

### Clé privée

Lorsque vous configurez un wallet, le premier pas est de générer votre clé privée. Votre clé privée est un très grand nombre, long de 256 bits. Ce nombre est si grand que vous pourriez en avoir un pour chaque atome observable dans l’univers. Votre clé privée devrait être aussi aléatoire que possible. Créer des nombres aléatoires est plus difficile qu’il n’y paraît, mais cette étape est cruciale pour garantir la sûreté de vos fonds.

### Clé publique

Ensuite, vous dérivez votre clé publique du grand nombre aléatoire que vous avez généré pour votre clé privée. Comme nous l'avons dit, l'addition de points sur une courbe elliptique est simple. Bitcoin utilise un point de base sur la courbe pour chaque paire de clés.

Les coordonnées sont

$$
x = 55066263022277343669578718895168534326250603453777594175500187360389116729240
$$

et

$$
y = 32670510020758816978083085130507043184471273380659243275938904335757337482424
$$

Ce point de base est maintenant ajouté à lui-même autant de fois que votre clé privée le dicte. Si votre clé privée était le chiffre "3", alors vous feriez le calcul que nous venons de vous montrer. Si vous ajoutez le point de base à lui-même aussi souvent que votre clé privée le dit (clé privée * P), vous obtenez votre clé publique.

![ECC](/assets/post_files/technology/advanced/2.3-public-key-cryptography/FR_ecc_6_D.jpg)
![ECC](/assets/post_files/technology/advanced/2.3-public-key-cryptography/FR_ecc_6_M.jpg)

Pour résumer : Votre clé privée est un grand nombre aléatoire. Votre clé publique est un point sur la courbe elliptique que vous obtenez lorsque vous multipliez le point de base P par votre clé privée.

Une propriété qui est nécessaire pour tout schéma cryptographique à clé publique est qu'il est impossible de dériver la clé privée de la clé publique par calcul. Il est facile de calculer la clé publique, un point sur la courbe, en multipliant le point de base P par un grand nombre aléatoire (votre clé privée). Mais si un adversaire connaît le point de base P et votre clé publique, il ne peut pas le diviser et dire combien de fois P a été ajouté à lui-même pour obtenir votre clé publique.

À ce stade, votre clé publique est assez grande, 512 bits, et il est facile de la compresser à la moitié de sa taille. La courbe elliptique utilisée est symétrique par rapport à l'axe des x. Il n'y a que deux valeurs y possibles pour chaque valeur x qui ne diffèrent que par leur signe (positif ou négatif). Si vous omettez la coordonnée y et ajoutez les informations du point ayant une valeur positive ou négative pour y, la clé publique devient deux fois plus petite mais porte les mêmes informations.

### Adresse

Enfin, pour obtenir votre adresse, votre clé publique est maintenant hashée. Tout d'abord, en utilisant la fonction de hachage SHA256, puis une deuxième fois en utilisant RIPEMD160. Après avoir ajouté un octet pour indiquer si cette adresse ira sur le réseau principal ou de test et calculer une somme de contrôle, il y a une dernière étape avant d'obtenir votre adresse.

![ECC](/assets/post_files/technology/advanced/2.3-public-key-cryptography/FR_ecc_7_D.jpg)
![ECC](/assets/post_files/technology/advanced/2.3-public-key-cryptography/FR_ecc_7_M.jpg)

Lorsqu'on examine le fonctionnement d'un ordinateur au niveau matériel, on constate qu'il y a des zéros et des uns. Les données sont toujours stockées dans un format binaire quel que soit le type de données que vous regardez (images, fichiers son, et même votre adresse bitcoin). Il existe différentes façons de convertir une chaîne de bits en données que les humains peuvent lire. Les humains se débrouillent mieux avec une chaîne de chiffres ou de caractères alphanumériques.

Base58Check est un moyen de convertir les bits en caractères alphanumériques, mais il exclut les quatre caractères 0, O, I et l. Base58Check supprime ces caractères de votre adresse afin de réduire les erreurs lors de la copie manuelle des adresses et de leur correction.

Vous pouvez générer autant d'adresses que vous le souhaitez à partir d'une seule clé privée, et la plupart des portefeuilles le font aujourd'hui pour vous. Il s'agit d'une fonction pour améliorer votre vie privée, car il est plus difficile pour une tierce partie de lier tous vos paiements ensemble. Nous parlerons de ce concept et de la façon dont il fonctionne avec les adresses de changement dans le chapitre suivant sur [la vie privée sur la Blockchain]({{ site.baseurl }}{% post_url /technology/advanced/2021-05-01-intro-to-privacy-on-the-blockchain %}).

### Signature numérique

Pour conclure cet article, nous voulons revenir aux signatures numériques. Vous entendrez peut-être que vos clés (publiques et privées) peuvent chiffrer et déchiffrer les messages. Ce n'est pas le cas. Les informations contenues dans les transactions ne sont en aucun cas chiffrées. Il est accessible à tous les acteurs de la blockchain, ce qui rend le système si transparent.

Votre clé privée est utilisée pour la signature des transactions. Vous ne pouvez utiliser les fonds que vous recevez dans une transaction que si vous fournissez une signature numérique qui prouve votre connaissance de la clé privée. Nous expliquons comment cette signature numérique fonctionne et comment vous pouvez prouver que vous connaissez la clé privée sans révéler aucune information à son sujet dans notre niveau expert. Pour cela, nous combinons le concept de fonctions de hachage et de multiplication de points sur la courbe. Bien que ce ne soit pas sorcier, il s'agit d'une question assez complexe.

### Résumé

Lorsque vous configurez un portefeuille, le logiciel génère d'abord un grand nombre aléatoire qui est votre clé privée. Le point de base P de la courbe elliptique est multiplié par votre clé privée afin d’obtenir votre clé publique, un point sur la courbe. Votre clé publique est alors hashée et supprime les caractères I, l, 0 et O pour améliorer la lisibilité. Vous devez fournir une signature numérique que vous ne pouvez produire que pour dépenser des fonds.

Consultez notre prochain article pour en savoir plus sur le réseau [Peer-to-Peer]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-05-a-peer-to-peer-p2p-network %}) : l'infrastructure sur laquelle la plupart des blockchains publiques sont construites.
