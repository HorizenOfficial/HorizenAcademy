---
layout: post
type: article
title: "Introduction à l'Explorateur de blocs"
description: "Un explorateur de blocs est un outil qui vous permet de parcourir les informations sur une blockchain, tout comme l'explorateur Internet vous permet d'accéder aux informations sur Internet."
permalink: /technology/beginner/block-explorer-introduction/
topic: technology
level: beginner
chapter: "Les transactions"
---

Un bénéfice souvent cité à propos de la technologie blockchain est la transparence qu’elle offre. Les transactions, les blocs et les adresses sont publiquement auditables et l’outil nécessaire pour faire ce travail est l’explorateur de bloc.

Un explorateur de blocs est un outil qui vous permet de parcourir la blockchain, de la même manière qu'un navigateur Web vous permet d'accéder aux informations sur Internet. Vous pouvez voir l’historique des transactions d’une adresse donnée, l’ensemble des transactions contenues dans un bloc aussi bien que le statut de ces transactions. Examinons un exemple concret de la vie quotidienne :

<div class="my-4">
    <img src="/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_summary.jpg" alt="Résumé de l'adresse du navigateur">
</div>

C'est ce à quoi vous pouvez vous attendre lorsque vous recherchez une adresse avec un explorateur de blocs. Les explorateurs de blocs fonctionnent tous à peu près de la même façon. L'adresse recherchée pour cet exemple dans un [explorateur de blocs Horizen](https://explorer.zensystem.io/) est en haut : znf7..... Disons que c'est l'adresse de Bob.

En haut de la page, vous trouverez un résumé de l'activité des adresses. Habituellement, l'information fournie ici comprendra le montant total qui a été reçu et envoyé de cette adresse, ainsi que le solde actuel. L'adresse que nous avons sous les yeux a reçu un total de 42 Zen. Bob n'a pas encore envoyé de Zen à d'autres adresses et a donc toujours un solde de 42 Zen.

<div class="my-4">
    <img src="/assets/post_files/technology/beginner/block-explorer-introduction/ES_explorer_address_tx.jpg" alt="Transaction de l'adresse dans l'explorateur">
</div>

Vous trouverez ci-dessous toutes les transactions concernant l'adresse qui vous intéresse. Jusqu'à présent, cette adresse n'était qu'une partie d'une seule transaction. Une transaction est caractérisée par son ID de transaction - la phrase bleue chiffrée en haut de la fenêtre grise (a46f...). La transaction que nous examinons avait une entrée (à gauche) et deux sorties (à droite). L'entrée est ce qui a été envoyé, et les sorties sont ce qui a été reçu. Si les entrées et sorties sont nouveaux pour vous, vous pouvez en apprendre plus à leur sujet dans notre article précédent sur les transactions.

Disons que Bob a reçu son argent d'Alice. L'adresse d'Alice se trouve à côté de l'entrée à gauche, znd3.... Alice a une sortie de 46.6 ZEN dans son adresse, mais voulait seulement en envoyer 42 à Bob. Pour ce faire, Alice a utilisé la totalité de sa balance de 46,6 zen en entrée (à gauche) et a créé deux sorties : l'une avec les 42 zen qu'elle voulait envoyer à Bob, et l'autre avec les 4,6 zen restants qui retournent à sa propre adresse.
Lorsque vous passerez au niveau suivant, nous parlerons davantage du concept d'entrées et de sorties avec l'introduction du [modèle UTXO]({{ site.baseurl }}{% post_url /technology/advanced/2021-04-02-the-utxo-model %}) _(Unspent Transaction Output: Sorties de transaction non dépensée)_.

Il reste maintenant trois éléments d'information :

Les frais de transaction de 0,0001 zen ont été ajoutés par l'expéditeur. Les frais de transaction sont une mesure de prévention contre le spam ;
Le nombre de confirmations vous indique l'âge et l'état d'une transaction. Chaque bloc qui est créé après qu'une transaction soit incluse dans la blockchain est appelé une confirmation de transaction ;
Enfin, il y a le volume total de la transaction.
Nous vous encourageons à vous rendre dans [notre explorateur de blocs](https://explorer.zen-solutions.io/) et à commencer à jouer avec. Si vous n'avez pas encore d'adresse à explorer, la page d'accueil vous montrera les dernières transactions en temps réel. Il vous suffit d'en choisir un en cliquant dessus et vous verrez les adresses associées. Vous pouvez commencer à explorer à partir de là.

## Résumé

L'explorateur de blocs fait pour la blockchain ce qu'un navigateur Web fait pour Internet ; il vous permet d'accéder aux données. Les choses que vous êtes susceptible de rechercher dans un explorateur de blocs sont vos adresses et vos transactions. De plus, vous pouvez ouvrir des blocs entiers et voir toutes les transactions contenues. Lorsque vous envoyez une transaction à un commerçant ou à une plateforme d'échange et que vous n'êtes pas informé immédiatement de la réception de vos fonds, cela peut vous faire un peu peur. En utilisant l'explorateur de blocs pour rechercher votre transaction, vous pouvez vérifier qu'elle est en cours d'exécution et que tout s'est bien passé.

Voulez-vous l'essayer avec vos propres coins ? Vous pouvez installer notre application phare Sphere by Horizen, créer un portefeuille et vous rendre à notre Faucet où vous recevrez des ZEN gratuitement. En quelques minutes, vous aurez votre propre portefeuille actif et votre premier ZEN à trouver dans l'explorateur de blocs.
