---
layout: post
type: article
title: "Qu'est-ce que le Consensus ?"
description: "Le mécanisme de consensus s'assure que tout le réseau s'accorde sur un historique unique des transactions."
permalink: /eli5/what-is-consensus/
topic: eli5
further_reads: [consensus_for_kids]
canonical_link: "/fr/technology/advanced/consensus-mechanisms/"
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-consensus/Consensus.jpg" alt="Consensus"></td>
        <td>
            La <a href="{{ site.baseurl }}{% post_url /eli5/2000-01-01-what-is-a-blockchain %}">blockchain</a> enregistre tous les transferts d'argent. Si vous n'avez qu'un seul ZEN et que vous créez deux transactions en même temps en dépensant deux fois le même coin (la même pièce de monnaie numérique), le réseau doit s'entendre sur laquelle des deux transactions est la première et donc la plus valable.
        </td>
    </tr>
</table> 

Le mécanisme de consensus permet de s'assurer que l'ensemble du réseau est d'accord sur l'ordre des transactions. Toutes les quelques minutes, lorsqu'un nouveau bloc est ajouté à la blockchain, le réseau s'accorde sur l'ordre des transactions les plus récentes. De cette façon, personne ne peut tromper le système et dépenser plus qu'il ne l'a fait.

Il y a différentes façons de parvenir à un consensus dans un [réseau Peer-to-Peer]({{ site.baseurl }}{% post_url /eli5/2000-01-06-what-is-a-peer-to-peer-network %}). Sur la blockchain Horizen, les gens votent avec leur puissance de calcul sur l'ordre des transactions. Si votre ordinateur est deux fois plus rapide que le mien, la probabilité que vous décidiez de l'ordre des transactions est deux fois plus élevée que la mienne.
