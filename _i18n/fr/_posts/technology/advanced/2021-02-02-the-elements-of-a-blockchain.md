---
layout: post
type: article
title: "Les éléments d’une Blockchain"
description: "Dans ce premier article de ce chapitre, nous vous donnons une vue d’ensemble des différents éléments qui font fonctionner une blockchain."
permalink: /technology/advanced/the-elements-of-a-blockchain/
topic: technology
level: advanced
chapter: "Comment fonctionne une Blockchain ?"
further_reads: [three_elements_to_understanding_blockchain_and_its_greatest_opportunity]
---

Lorsque Satoshi Nakamoto a publié le livre blanc Bitcoin, il a présenté une innovation composée de plusieurs composants bien connus et de quelques nouveaux. Nous avons conçu ce chapitre pour expliquer comment fonctionne une blockchain. Nous voulons mettre les différents éléments en contexte avant de passer à l'explication de chaque concept.

### Fonctions de hachage

Une [fonction de hachage]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}) est une fonction mathématique avec quelques propriétés spéciales, mais comme toute autre fonction, elle fait un travail. La fonction de hachage prend une entrée et produit une sortie (également appelée _valeur de hachage_, _condensé de hachage_, _condensat_ ou _hash_).

L'entrée n'a pas besoin d'être un nombre, il peut s'agir de n'importe quel type de données d'un seul caractère jusqu'à un gros fichier comme une vidéo. La sortie d'une fonction de hachage donnée a une longueur constante quelle que soit l'entrée. Il existe de nombreuses fonctions de hachage et la plupart d'entre elles portent la longueur de la sortie qu'elles produisent en leur nom. L'une des fonctions de hachage les plus couramment utilisées est SHA256 (Secure Hash Algorithm 256 bit). Le nombre indique que la sortie de la fonction de hachage sera toujours de 256 bits, quelle que soit l'entrée. La valeur de hachage sert d'empreinte digitale des données. On peut vérifier l'intégrité des fichiers ou détecter s'ils diffèrent les uns des autres en comparant les hashs.

![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_hash_D.jpg)
![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_hash_M.jpg)

### Cryptographie à clé publique

La [cryptographie à clé publique]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography %}), est également connue sous le nom de _cryptographie asymétrique_. Le terme asymétrique provient de la propriété des clés qui viennent toujours par paires et utilisées de façon complémentaire. Si vous avez chiffré quelque chose avec l'une des clés, vous avez besoin de l'autre pour le déchiffrer et vice versa. Ces clés sont la _clé publique_ et la _clé privée_ (ou _clé secrète_). Vos clés se traduisent par votre identité sur la blockchain. Vous recevez des fonds avec votre clé publique et envoyez des fonds avec votre clé privée. La cryptographie à clé publique est aussi l'origine du nom des cryptomonnaies.

![Asymmetric](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_asymmetric_D.jpg)
![Asymmetric](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_asymmetric_M.jpg)

### Un réseau Peer-to-Peer (pair-à-pair)

Vous avez probablement déjà rencontré le terme de réseau [Peer-to-Peer]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-05-a-peer-to-peer-p2p-network %}) (P2P), très probablement dans le contexte de services de partage de fichiers comme BitTorrent. Dans un réseau distribué, les utilisateurs ne se connectent pas à un serveur central ou à une entité pour accéder à un service, mais à de nombreux pairs. Les pairs sont d'autres participants au réseau qui fournissent le service les uns aux autres. Les réseaux P2P sont très résistants, car il n'y a pas de point de défaillance unique.
 Les blockchains utilisent ce concept et c'est l’une des raisons pour lesquelles elles sont si robustes. Vous entendrez souvent les attributs "_sans permission_" et "_résistant à la censure_" lorsque vous lirez la proposition de valeur de la technologie de la blockchain. Le réseau Peer-to-Peer joue un rôle important dans l'attribution de ces propriétés aux blockchains.

![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_central-distri_M.jpg)

### Mécanisme de consensus

Si vous voulez construire une forme de monnaie numérique sur un réseau P2P avec beaucoup de participants, vous aurez besoin de construire un consensus sur l'ordre des transactions. Si un utilisateur a un ZEN et crée deux transactions différentes qui dépensent le même coin simultanément, certains pairs recevront d'abord la version A, tandis que d'autres recevront peut-être la version B en premier. Le réseau doit parvenir à un accord, ou à un consensus, sur laquelle des deux transactions a eu lieu en premier. Le [mécanisme de consensus]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) est ce qui permet à un grand nombre d'entités différentes qui ne se connaissent pas et ne se font pas confiance de se mettre d’accord sur une version unique de la blockchain.

![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_consensus_block_D.jpg)
![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/FR_consensus_block_M.jpg)

### Le Minage

Il existe de nombreux mécanismes de consensus. “L'original" qu’Horizen, Bitcoin et la plupart des autres cryptomonnaies utilisent est le mécanisme de preuve du travail (PoW). Vous avez probablement déjà entendu parler de [minage]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}) de cryptomonnaie avant et du fait que les mineurs ont à résoudre un puzzle de calcul coûteux. Nous voulons vous montrer ce qu'est ce puzzle et comment le résoudre permet au réseau de se mettre d'accord sur un ordre de transactions donné.

### Demonstration

Ceci est une [bonne démo de la blockchain](https://blockchaindemo.io/). Nous vous invitons à vous amuser avec, soit maintenant, soit après avoir terminé ce chapitre. La démonstration est pratique et aide vraiment à comprendre ce sujet quelque peu complexe. La démo fournit un guide qui vous guidera pas à pas à travers les processus en cours d'exécution sur une blockchain.
