---
layout: post
type: intro
title: "Intro à la confidentialité sur la Blockchain"
description: "C'est une idée fausse courante que les cryptomonnaies sont anonymes. Bien que ce ne soit généralement pas le cas, vous avez la possibilité de créer des transactions véritablement privées. Cet article est consacré à la protection de la vie privée sur la blockchain."
permalink: /technology/beginner/intro-to-privacy-on-the-blockchain/
topic: technology
level: beginner
chapter: "Vie privée"
further_reads: [how_zcoin_privacy_technology_compares_to_the_competition]
canonical_link: "/fr/technology/advanced/privacy-on-the-blockchain/"
---

C'est une idée fausse courante que le bitcoin et d'autres cryptomonnaies sont un moyen de paiement anonyme. En fait, ils ne sont pas anonymes, mais pseudonymes. La blockchain est un registre transparent et public. N’importe qui peut chercher des données sur une blockchain en utilisant un [explorateur de bloc]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-03-block-explorer-introduction %}) et voir quel montant a été transféré sur quelle adresse, à n’importe quel moment.

Bien que cela soit généralement vrai pour la plupart des blockchains, il existe plusieurs façons d'assurer la protection de la vie privée dans le domaine financier ; même dans un grand registre entièrement transparent. Pour effectuer des transactions privées, il ne peut y avoir aucune information sur l'expéditeur et le destinataire d'une transaction. Vous avez besoin d'une adresse pour effectuer des transactions sur une blockchain. Parce que cette adresse ne contient aucune information sur leur propriétaire, nous disons qu'elles sont pseudonymes. Votre adresse agit comme un pseudonyme, de la même façon que vous choisissez un nom d'utilisateur dans un forum.

Grâce à une analyse de données de plus en plus puissante, il est possible de lier des identités du monde réel à des adresses de cryptomonnaie. Plus vous avez reçu et envoyé de transactions, plus il y a de métadonnées. Ces métadonnées peuvent inclure l'adresse IP d'une transaction provenant de partenaires fréquents. Les plateformes d'échange enregistrent également les adresses que vous utilisez pour retirer des fonds et peuvent ainsi lier vos adresses à votre identité.

### Pourquoi la vie privée ?

Il y a de nombreuses raisons légitimes de créer des transactions financières privées. Si vous avez un problème de santé et que vous devez acheter vos ordonnances régulièrement, vous avez de bonnes raisons d'effectuer ces transactions en privé. Si vous avez une entreprise, vous ne voulez pas révéler vos sources de revenus à vos concurrents et si vous achetez un cadeau pour votre conjoint, vous ne voudrez peut-être pas qu'il le voie avant de recevoir le cadeau. Il y a de nombreuses bonnes raisons de faire des transactions privées, et nous croyons que la vie privée est et devrait être traitée comme un droit humain fondamental. Dans notre section dédiée à la vie privée, nous traiterons l’argument [“rien à cacher”]({{ site.baseurl }}{% post_url /privacy/advanced/2024-01-01-the-nothing-to-hide-argument %}).

### Comment récupérer votre vie privée ?

La première étape vers une plus grande confidentialité est l'utilisation d'une nouvelle adresse pour chaque transaction que vous recevez. La plupart des portefeuilles génèrent automatiquement une nouvelle adresse pour vous chaque fois que vous cliquez sur "recevoir". Il est donc beaucoup plus difficile pour un adversaire de regrouper vos paiements et, en fin de compte, de les relier à votre identité.

Si vous souhaitez faire des transactions en toute confidentialité, vous devez utiliser une cryptomonnaie offrant des fonctions spéciales de confidentialité. Horizen offre la meilleure protection de la vie privée possible grâce à l'utilisation des Zero-Knowledge Proofs.

Les Zero-Knowledge Proofs vous permettent de prouver à un vérificateur que vous savez quelque chose, sans révéler cette connaissance. Lorsque vous créez une transaction privée, vous générez une preuve que vous montrez aux nœuds et aux mineurs au lieu de leur envoyer les données de transaction réelles.

Un exemple intuitif et non numérique de ce à quoi cela peut ressembler peut être construit avec une personne voyante comme prouveur, une personne aveugle comme vérificateur et deux boules de couleur différente. Le voyant (le prouveur) veut convaincre l'aveugle (le vérificateur) que les deux boules sont de couleurs différentes, sans révéler les couleurs. Ils s'assoient à une table et l'aveugle montre au prouveur l'une des boules. L'aveugle continue à placer les deux boules sous la table et choisit de montrer une boule dans un deuxième tour ; soit la même boule qu'avant, soit l'autre. S'il choisit de montrer la même balle, le prouveur le sait parce qu'il voit la même couleur et le dit à l'aveugle. Si la personne aveugle montrait l'autre boule, le prouveur pourrait dire avec certitude que le vérificateur (personne aveugle) a changé les boules sous la table.

![zkproof in FR](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/FR_zkproof_D.jpg)
![zkproof in FR](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/FR_zkproof_M.jpg)

Au deuxième tour, le prouveur aurait une chance sur deux d'obtenir la bonne réponse s'il devait deviner. Il devrait deviner au cas où l'affirmation qu'il essaie de prouver (les boules sont d'une couleur différente) était fausse. À ce stade, l'aveugle ne peut pas être sûr si la demande est correcte, ou si le prouveur a eu de la chance.

S'ils répètent le jeu plusieurs fois, les chances d'obtenir la bonne réponse à chaque fois en devinant diminuent de façon exponentielle. Après seulement dix tours de jeu, la chance de sortir la bonne balle à chaque fois par pure chance a diminué à 0.1%. L'aveugle peut être sûr que les deux boules sont en effet de couleurs différentes bien que le prouveur n'ait partagé aucune information sur les couleurs elles-mêmes.

L'idée d'utiliser les Zero-Knowledge Proofs pour les transactions de cryptomonnaies est la suivante : vous construisez une preuve que la transaction que vous voulez envoyer serait considérée comme valide par un nœud de vérification, sans révéler aucune des données réelles de la transaction. Cela permet à l'expéditeur, au destinataire ainsi qu'au montant de rester privés. Un autre cas d'utilisation qui est parfait pour l'application des zk-Proofs est la vérification d'identité. Par exemple, vous pouvez prouver à une entité que vous êtes d'un certain âge sans révéler aucune donnée personnelle comme votre date de naissance.

Pour utiliser des transactions privées avec Horizen, vous utiliserez un type d'adresse différent. Dans votre portefeuille, vous pouvez soit générer des adresses T (adresses transparentes), soit des adresses Z (adresses protégées). Lorsque vous avez envoyé des fonds à une adresse Z, le montant et l'expéditeur sont enregistrés sur la blockchain, mais pas l'adresse de réception. Si vous transmettez les fonds à une deuxième adresse Z, aucune information sur la transaction n'est enregistrée, ni l'expéditeur, ni le destinataire, ni le montant. Si vous voulez essayer cette fonctionnalité, vous pouvez télécharger notre application phare [Sphere by Horizen](https://www.horizen.global/wallets/ ). Assurez-vous d'activer le mode complet dans les paramètres sinon vous ne pourrez pas générer d'adresses Z.

## Résumé

Bien que les cryptomonnaies ne soient pas anonymes par défaut, certaines d'entre elles offrent des fonctionnalités qui vous permettent de faire des transactions privées. Pour augmenter le niveau de confidentialité, vous devez utiliser des adresses différentes pour chaque transaction entrante. Il est donc plus difficile pour un adversaire de suivre l'historique de vos transactions. La plupart des wallets le feront automatiquement pour vous. Vous pouvez utiliser des cryptomonnaies avec des fonctions de confidentialité améliorées, comme Horizen, pour effectuer des transactions entièrement privées.
