---
layout: post
type: article
title: "Les mécanismes de Consensus"
description: "Il y a différentes parties dans une blockchain et toutes ont besoin d’être d’accord sur l’historique des transactions. Ici, nous montrons comment cela est achevé."
permalink: /technology/advanced/consensus-mechanisms/
topic: technology
level: advanced
chapter: "Comment fonctionne une Blockchain ?"
---

Le réseau distribué d'une blockchain comprend plusieurs milliers de participants - certains altruistes, d'autres rationnels et d'autres malveillants. Dans cet environnement difficile, il faut résoudre un problème crucial pour faire fonctionner la monnaie numérique : tous les nœuds doivent se mettre d'accord sur un historique unique des transactions. En l'absence d'un consensus sur qui possède quoi, le réseau ne vaudrait rien.

Le mécanisme de consensus d'une blockchain permet au réseau de se mettre d'accord sur une version unique de l'histoire. L'historique dans le cas d'une blockchain de type cryptomonnaie est l'ordre dans lequel les transactions ont eu lieu sur le réseau. Lorsqu'un participant au réseau crée une transaction, celle-ci est ensuite diffusée à l'ensemble du réseau. Chaque nœud enregistre la transaction et l'ajoute à sa version du registre. Les différentes versions conservées par les différents nœuds peuvent sembler légèrement différentes. Si vous êtes aux États-Unis et que vous envoyez une transaction, les nœuds les plus proches de chez vous la recevront plus tôt qu'un nœud basé en Asie. Vous obtenez un ensemble de versions légèrement différentes du même historique des transactions. En fin de compte, tous les participants du réseau doivent se mettre d'accord sur un ordre donné et c'est à cela que sert le mécanisme de consensus d'une blockchain.

Il existe de nombreuses approches afin de parvenir à un consensus dans un réseau distribué, mais les deux plus couramment utilisées sont les algorithmes de preuve de travail et de preuve d'enjeu. J'aime la généralisation que Demiro Massessi a formulée :

> "The main difference between consensus mechanisms is the way in which they delegate and reward the verification of Transacciones. (...) In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control."

**Français**

"La principale différence entre les mécanismes de consensus réside dans la manière dont ils délèguent et récompensent la vérification des transactions. (...) D'une manière ou d'une autre, les algorithmes de consensus de la blockchain se résument à une sorte de vote où le nombre de votes d'un utilisateur est lié à la quantité d'une ressource limitée qui est sous son contrôle."

![Consensus]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_consensus_D.jpg)
![Consensus]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_consensus_M.jpg)

## Preuve de travail (Proof-of-work; PoW)

Les mineurs sont ceux qui s'efforcent de parvenir à un consensus au sein du réseau dans le cadre d'une blockchain en preuve de travail. Ils rassemblent toutes les transactions qui leur sont transmises par le réseau peer-to-peer et les sauvegardent dans leur _mempool_ (pool de mémoire). Pendant qu'ils recueillent les transactions entrantes, ils vérifient si les transactions sont valides selon le protocole et les ajoutent au bloc sur lequel ils travaillent actuellement. En même temps, ils travaillent à la résolution d'un puzzle coûteux sur le plan informatique. Nous parlerons de ce puzzle dans le prochain article sur le minage.

Le mineur qui résout le puzzle diffuse d'abord son bloc sur le réseau et ajoute ainsi un bloc à la blockchain. Le mineur reçoit des coins nouvellement créées pour son travail et écrit l'histoire de la blockchain des deux dernières minutes. Chez Horizen, cela se produit en moyenne toutes les 2,5 minutes, chez Bitcoin en moyenne toutes les 10 minutes. Les chances de résoudre un bloc sont directement proportionnelles à la puissance de calcul d'un mineur. Si un mineur disposait de 10% de la puissance de calcul du réseau, il résoudrait en moyenne un bloc sur dix.

La puissance de calcul est la ressource limitée d'une blockchain basée sur le PoW. Il faut des ressources du monde réel, notamment du matériel de minage et de l'électricité, pour miner une cryptomonnaie. Il est difficile pour un acteur de contrôler la majorité du réseau parce qu'il y a un coût externe lié au maintien d'un registre en PoW. C'est un environnement hautement compétitif, dans lequel chaque mineur veut constamment augmenter sa part de la puissance de calcul ou du taux de hachage.

Les mineurs ont besoin de puissance de calcul parce que le problème qu'ils essaient de résoudre ne peut être résolu que par des suppositions aléatoires. Le PoW ne fonctionne que parce que ce problème est sans optimisation et sans approximation. Sans optimisation, il n'y a pas de raccourci pour essayer un grand nombre de solutions différentes jusqu'à ce que vous trouviez une solution valable. Vous ne pouvez pas calculer une solution, vous devez la trouver par le biais d'une approche d'essai et d'erreur. Sans approximation signifie qu'il n'est pas possible d'avoir une partie de la solution ou “d'être proche de résoudre le problème”. Soit vous avez une solution, soit vous n'en avez pas, ce qui en fait une situation binaire.

![POW]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_POW_D.jpg)
![POW]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_POW_M.jpg)

Tous les nœuds et les mineurs vérifient la validité d'un nouveau bloc dès que le bloc est découvert et diffusé sur le réseau. Si c'est le cas, ils suppriment toutes les transactions qui sont déjà enregistrées sur la blockchain de leur mempool, qui est le stockage qu
'ils utilisent pour collecter les transactions. Ils commencent à travailler sur le bloc suivant une fois que leur mempool contient uniquement des transactions qui n'ont pas été minées. C'est ainsi que le réseau s'accorde sur une version unique de l'historique de toutes les transactions d'une blockchain en preuve de travail.

### La règle de la chaîne la plus longue

Maintenant, vous pouvez imaginer un scénario dans lequel deux mineurs trouvent un bloc en même temps. Dans ce cas, tous les nœuds et mineurs du réseau sauvegardent les deux versions du bloc. C'est une situation d'égalité : les deux blocs sont valides à ce stade, mais d'une manière ou d'une autre ils doivent briser l'égalité. Nous avons besoin d'une version unique de la vérité. Les mineurs commenceront à construire sur le bloc qu'ils ont reçu en premier. Le lien est rompu lorsque les mineurs trouvent le bloc suivant. Le bloc des deux versions concurrentes qui est construit sur le dessus sera accepté comme la vérité unique par tous les mineurs et les noeuds. Le bloc qui n'est pas pris en compte s'appelle un _bloc orphelin_. Cette procédure qui consiste à briser l'égalité entre les blocs concurrents s'appelle la _règle de la plus chaîne la plus longue_ ou le _Consensus Nakamoto_.

Si 80 % des mineurs reçoivent d'abord le bloc A et les 20 % restants le bloc B, les chances que le bloc A soit prolongé sont de 80 % (en supposant que tous les mineurs ont la même puissance de calcul). D'une certaine façon, les mineurs votent avec leur puissance de calcul sur une version de l'histoire. Cela correspond parfaitement à notre citation du début de l'article :

> "In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control."

**Français**

_“D'une façon ou d'une autre, les algorithmes de consensus de la blockchain se résument à une sorte de vote où le nombre de votes d'un utilisateur est lié à la quantité d'une ressource limitée qui est sous le contrôle de l'utilisateur.”_

![Longest chain]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_longest_chain_D.jpg)
![Longest chain]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_longest_chain_M.jpg)

La preuve de travail est l'un des mécanismes de consensus les plus sûrs. Ce mécanisme n'est réalisable que s'il y a une puissance de calcul suffisante (taux de hachage) dans le réseau. Le protocole Bitcoin a prouvé depuis plus de 10 ans à quel point le consensus sur la preuve de travail est sûr, avec une puissance de calcul suffisante sur le réseau. Nous avons déjà parlé de la théorie des jeux dans notre article décrivant la blockchain comme un protocole de transfert de valeur et dans l'article sur les [smart contracts](https://academy.horizen.io/fr/technology/advanced/guaranteed-execution-with-smart-contracts/).

La théorie des jeux "est l'étude des modèles mathématiques de l'interaction stratégique entre décideurs rationnels" selon Wikipedia (_sur la page en anglais, ndt_). Les mineurs sont un groupe de décideurs rationnels dans une blockchain en PoW. Les incitations à agir selon les règles du protocole de mining sont intégrées dans le protocole lui-même. C'est ce qui rend une blockchain PoW mature si robuste.

Dans notre article sur le [minage](https://academy.horizen.io/fr/technology/advanced/mining/), nous parlerons plus en détail de ce processus et vous apprendrez quel est le puzzle dont nous parlons dans le contexte du PoW.

## La preuve d’enjeu (Proof-of-Stake: PoS)

Dans un système en preuve d’enjeu, il y a aussi des entités qui collectent les transactions et créent de nouveaux blocs. Le processus, ainsi que la terminologie dans ce contexte, est un peu différent.

Alors que les mineurs minent des blocs dans le PoW, _les validateurs forgent des blocs_ dans le PoS. La chance de valider un nouveau bloc est proportionnelle à la mise d'un validateur. L'enjeu fait référence au montant des fonds qu'un validateur est prêt à bloquer pour la période pendant laquelle il veut être un validateur. Pour devenir un validateur, un utilisateur doit envoyer des fonds dans un type spécial de transaction. Ces fonds sont bloqués dans un dépôt appelé _pool de validateurs_ et ne sont libérés que si le validateur agit conformément aux règles du protocole. Si le validateur incluait des transactions frauduleuses dans son bloc, il perdrait sa participation et le droit de forger des blocs.

La ressource rare dans un environnement en PoS est la devise native de la blockchain. Plus vous misez d'argent sur une blockchain en PoS, plus vos chances de valider un nouveau bloc sont élevées. Dans (la plupart) des blockchains de preuve d'enjeu, il n'y a pas de récompense de bloc. L'incitation des validateurs à travailler est uniquement basée sur la perception des frais de transaction attachés aux transactions

![POS]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_POS_D.jpg)
![POS]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_POS_M.jpg)

### PoW vs. PoS

Les sceptiques remettent en question la sécurité globale du modèle de consensus de la preuve d'enjeu parce qu'il n'y a pas besoin de consommer des ressources réelles pour être un validateur. Il n'y a aucun coût associé à la construction d'un nouveau bloc sur les deux branches lorsqu’il y a un fork temporaire. C’est ce qu’on appelle l’attaque “_Nothing at stake_” (rien en enjeu).

Dans le PoW, il y a un coût réel (l'électricité) pour chaque bloc qui est miné. Reste à savoir si les blockchain en PoS peuvent fournir les mêmes garanties de sécurité sur une longue période de temps que Bitcoin avec sa blockchain en PoW a montré depuis plus d'une décennie maintenant.

![Comparing POW and POS]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_compare_D.jpg)
![Comparing POW and POS]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.5-consensus-mechanisms/FR_compare_M.jpg)

Une autre différence entre le PoW et le PoS est que dans une blockchain PoS chaque nœud de validation doit être identifiable. Les coins misés doivent être tenus responsables de tout acte malveillant. Dans une blockchain en PoW, il n'est pas nécessaire d'avoir des mineurs ou des nœuds identifiables. En fait, c'est une caractéristique, que si un noeud reçoit un bloc, il n'y a aucune information incluse au sujet de qui était le mineur du bloc. Il se peut que ce soit le nœud dont vous venez de recevoir le bloc ou qu'il ait été relayé plusieurs fois avant d'arriver jusqu'à vous. Ce n’est, ni ne devrait avoir d'importance de savoir qui était le mineur. Tout ce qui compte, c'est que la solution au puzzle et que toutes les transactions dans le bloc soient valides. Vous n'avez besoin de faire confiance qu'aux mathématiques et à personne d'autre pour faire confiance à la preuve de travail.

Les partisans de la preuve d'enjeu se réfèrent au coût élevé de l'énergie et au débit limité des blockchain en PoW et considèrent donc que le mécanisme de consensus du PoS est plus durable. À l'heure actuelle, il n'y a pas de blockchain en PoS disponible qui puisse appuyer ses prétentions de sécurité avec un historique de résultats sur une longue période de temps. Le temps nous dira si les blockchains en PoS peuvent tenir leur promesse d'être également sécurisées tout en étant plus évolutives que les blockchains en PoW.

## Résumé

Dans la méthode de la preuve de travail, les mineurs votent sur une version de l'historique avec le poids de la puissance de calcul qu'ils contrôlent. Dans la méthode de la preuve d'enjeu, les validateurs votent sur une version de l'historique avec le poids des fonds ou de l'enjeu qu'ils possèdent sur la blockchain. Bien que le PoW se soit avéré sûr depuis plus d'une décennie maintenant, la sécurité des blockchains en PoS reste à prouver.

Dans notre prochain article sur le mining, nous expliquerons enfin ce qu'est le "puzzle" ou la "tâche coûteuse en calcul", dont nous avons vaguement parlé jusqu'à présent.

## Explication Simple Ci-dessous - Qu'est-ce que le Consensus ?

<table class="table lead">
    <tr>
        <td class="icon"><img src="{{site.baseurl_root}}/assets/post_files/eli5/what-is-consensus/Consensus.jpg" alt="Consensus"></td>
        <td>
            La blockchain enregistre tous les transferts d'argent. Si vous n'avez qu'un seul ZEN et que vous créez deux transactions en même temps en dépensant deux fois le même coin (la même pièce de monnaie numérique), le réseau doit s'entendre sur laquelle des deux transactions est la première et donc la plus valable.
        </td>
    </tr>
</table>

Le mécanisme de consensus permet de s'assurer que l'ensemble du réseau est d'accord sur l'ordre des transactions. Toutes les quelques minutes, lorsqu'un nouveau bloc est ajouté à la blockchain, le réseau s'accorde sur l'ordre des transactions les plus récentes. De cette façon, personne ne peut tromper le système et dépenser plus qu'il ne l'a fait.

Il y a différentes façons de parvenir à un consensus dans un réseau Peer-to-Peer. Sur la blockchain Horizen, les gens votent avec leur puissance de calcul sur l'ordre des transactions. Si votre ordinateur est deux fois plus rapide que le mien, la probabilité que vous décidiez de l'ordre des transactions est deux fois plus élevée que la mienne.
