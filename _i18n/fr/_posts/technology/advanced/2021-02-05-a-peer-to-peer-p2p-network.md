---
layout: post
type: article
title: "Un réseau Peer-to-Peer (P2P)"
description: "Ici nous parlons de l’infrastructure “physique” sur laquelle les blockchains fonctionnent; le réseau Peer-to-Peer."
permalink: /technology/advanced/a-peer-to-peer-p2p-network/
topic: technology
level: advanced
chapter: "Comment fonctionne une Blockchain ?"
---

L'Internet que nous connaissons aujourd'hui est très centralisé. La plupart des données que nous, en tant qu'utilisateurs d'Internet, produisons, finissent entre les mains de quelques grandes entreprises. Mais il y a un certain nombre de systèmes vraiment distribués qui existent sur Internet. Bien que ce ne soit pas exactement la même chose, pour les besoins de cet article, nous utiliserons les termes réseau distribué et réseau peer-to-peer de manière interchangeable.

Un exemple d'un système véritablement distribué sur Internet est BitTorrent. Comme toute autre technologie, les réseaux Peer-to-Peer ont permis des cas d'utilisation légitimes, tels que l'échange fiable de logiciels libres. Ils ont également des cas d'utilisation illégitimes, comme le piratage de musique et de films. Les systèmes distribués présentent certains avantages majeurs par rapport à leurs homologues plus centralisés, notamment leur robustesse. Les réseaux Peer-to-Peer ont un haut niveau de redondance intégré. Il n’y a pas de points de défaillance uniques et le système peut survivre même si une majorité du réseau s'arrête. Nous avons constaté l'énorme difficulté que les autorités ont eue à déconnecter certains de ces réseaux avec des services comme BitTorrent ou Napster. Cela est dû à la tolérance aux pannes que vous obtenez d'une architecture peer-to-peer.

Mais il y a quelques inconvénients par rapport aux systèmes centralisés. Le haut niveau de redondance et le besoin de communication et de coordination entre pairs se font au détriment de l'efficacité. L'exemple le plus évident en est le stockage de données. De nombreux nœuds, dans le cas du réseau Horizen plus de 25.000, stockent une copie de la blockchain. Ceci n'est pas très efficace pour le stockage, mais rend le registre maintenu très résistant aux attaques de toutes sortes et lui donne son immuabilité.

En informatique, le théorème CAP décrit que le coût d'un réseau distribué robuste et évolutif est le temps qu'il faut au réseau pour atteindre la cohérence. Il faut un certain temps pour qu'un événement (comme une transaction avec une cryptomonnaie) soit diffusé à chaque noeud du réseau. Dans un deuxième temps, tous les nœuds qui ont reçu l'événement doivent parvenir à un consensus sur l'ordre dans lequel les événements se sont produits. Dans notre prochain article sur les [mécanismes de consensus](https://academy.horizen.io/fr/technology/advanced/consensus-mechanisms/), nous vous présenterons les deux principales méthodes afin de parvenir à un consensus dans les réseaux distribués.

![Central distri]({{site.baseurl}}/assets/post_files/technology/advanced/2.4-p2p/FR_central-distri_D.jpg)
![Central distri]({{site.baseurl}}/assets/post_files/technology/advanced/2.4-p2p/FR_central-distri_M.jpg)

Avec une architecture réseau Peer-to-Peer, chaque nœud est égal à tous les autres nœuds. Chaque nœud d'un réseau P2P agit à la fois comme un client et un serveur, contrairement aux modèles client-serveur traditionnels. Alors qu'un serveur peut connaître des temps d'arrêt pendant lesquels les clients ne peuvent pas accéder à ses données, dans un réseau P2P, vous n'avez qu'à vous connecter à un autre serveur si l'un d'eux est hors ligne.

### Variations

Les variations des réseaux distribués concernent principalement la structure des données qui est maintenue et le mécanisme de broadcast ou la propagation des messages que les nœuds utilisent afin de communiquer et d’échanger des données. Les deux protocoles de broadcast les plus couramment utilisés sont le flooding et la diffusion. Dans le cas du flooding, les nœuds propagent un message avec un délai de transmission constant (ou déterministe). La diffusion est une version raffinée du flooding. Dans les réseaux utilisant la diffusion, tels que Bitcoin et la plupart des autres cryptomonnaies, les nœuds propagent les messages avec un délai de transmission aléatoire. Il est donc plus difficile pour un espion d'identifier l'origine d'un message et, par conséquent, d'identifier les nœuds dans le monde réel et leur propriétaire éventuel.

![Spreading]({{site.baseurl}}/assets/post_files/technology/advanced/2.4-p2p/FR_spreading_D.jpg)
![Spreading]({{site.baseurl}}/assets/post_files/technology/advanced/2.4-p2p/FR_spreading_M.jpg)

De nombreux systèmes distribués sont construits avec une structure de données en "ajout-seulement" (append-only) et les blockchains en sont un exemple. Les blocs d'une blockchain sont des conteneurs de données cryptographiquement connectés dans un journal en “ajout-seulement”. Il est impossible de modifier ou de supprimer des données du passé. Dans d'autres réseaux distribués, il peut être souhaitable de supprimer des données, pour des raisons d'efficacité de stockage ou pour ne gérer que les informations pertinentes. Dans le cas des blockchains, en particulier celles pour les cryptomonnaies, cela serait considéré comme un bug dévastateur. Si le registre des transactions devait être modifié, cela détruirait le cas d'utilisation d'une monnaie numérique, car cela impliquerait une modification des soldes. Ce n'est évidemment pas souhaitable pour une forme de monnaie mondiale résistante à la censure.

La plupart des réseaux distribués utilisent une variation de diffusion pour la propagation des messages. Un pair qui reçoit un message le diffuse à tous ses pairs, qui à leur tour le diffusent à tous leurs pairs. En quelques tours de propagation, l'ensemble du réseau recevra le message au fur et à mesure qu'il se répandra de façon exponentielle parmi les pairs. Le protocole de communication doit répondre à un ensemble de propriétés souhaitables, telles qu'une faible latence, l'équité (tous les nœuds connaissent à peu près la même latence) et l'anonymat. L'anonymat dans ce contexte devrait empêcher un adversaire d'apprendre l'adresse IP d'où provient un message en surveillant le réseau dans le temps.

### Incitatifs

Pour qu'un réseau distribué puisse fonctionner, tous les participants au réseau ont besoin d'une certaine forme d'incitation pour agir selon les règles ou le [protocole](https://academy.horizen.io/fr/technology/advanced/a-protocol-to-transfer-value/) du réseau donné. Avec une blockchain pour les cryptomonnaies, les incitations sont des récompenses monétaires. Les mineurs sont récompensés par un jeton de valeur économique pour avoir vérifié les transactions et atteint un consensus au sein du réseau. Horizen incite également les opérateurs de nœuds financièrement car la gestion d'un nœud est aussi une forme de travail. La configuration prend du temps, un serveur doit héberger le nœud et l'opérateur du nœud doit mettre à jour le logiciel à l'occasion. Les mineurs reçoivent 60% de la récompense totale du bloc (12.5 ZEN). Les 40 % restants sont répartis entre les opérateurs de Secure Node (10 %), les opérateurs de Super Node (10 %) et notre organisation à but non lucratif (20 %). Sur une blockchain à permission qu'un consortium d'entreprises utilise, par exemple pour suivre une chaîne d'approvisionnement, l'incitation à tenir à jour le registre est d'avoir accès à des données commerciales précieuses sans avoir à faire confiance à une tierce partie.

Nous croyons que le Web 3.0 bénéficiera largement de l'émergence des réseaux distribués et que nous verrons une transition des services centralisés vers les services décentralisés.

### Résumé

Les réseaux peer-to-peer offrent une grande robustesse ou une grande tolérance aux pannes au plus haut niveau d'efficacité. Chaque nœud exécute la même tâche sur le réseau et agit en tant que client et serveur en même temps. Si l'un de vos pairs se déconnecte, vous vous connectez à un autre. Si vous administrez un nœud et qu'il vous arrive de vous déconnecter pendant un certain temps, vous devez vous reconnecter à un moment donné pour être mis à jour par vos pairs sur les blocs que vous avez manqués pour redevenir pleinement fonctionnel.

Dans les deux prochains articles, nous vous présenterons les deux mécanismes les plus courants afin de parvenir à un consensus sur l'histoire des événements dans un cadre distribué. Vous avez probablement déjà rencontré les termes preuve de travail et minage (ou mining ! ). Nous expliquerons ce qu'est la preuve de travail (PoW) et la preuve d'enjeu (PoS) et, par la suite, nous examinerons en détail le processus de minage, y compris le puzzle que les mineurs résolvent.

## Explication Simple Ci-dessous - Qu'est-ce qu'un réseau peer-to-peer ?

Dans un réseau Peer-to-Peer (pair-à-pair), chaque participant est connecté à tous les autres. Lorsque vous le comparez à un site Web ordinaire, cela le rend beaucoup plus robuste. Un ordinateur spécial sur Internet stocke la plupart des sites Web.

Cet ordinateur spécial est communément appelé serveur. Si vous voulez accéder au site Web, vous vous connecterez au serveur. Si cet ordinateur a un problème, le site ne fonctionnera pas.

Dans un réseau Peer-to-Peer, votre connexion peut également se perdre, car un pair se déconnecte. Mais vous pouvez vous connecter à un autre pair sur le réseau et tout fonctionne comme d'habitude. Cela rend les blockchains et les cryptomonnaies très robustes.

![Peer-to-Peer Network]({{site.baseurl}}/assets/post_files/eli5/what-is-a-peer-to-peer-network/peer-to-peer-network_D.jpg)
![Peer-to-Peer Network]({{site.baseurl}}/assets/post_files/eli5/what-is-a-peer-to-peer-network/peer-to-peer-network_M.jpg)
