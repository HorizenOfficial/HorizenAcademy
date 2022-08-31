---
layout: post
type: article
title: "DAO - Organisation Autonome Décentralisée"
description: "Notre objectif est d'adopter un modèle d'organisation décentralisée autonome (DAO) au fil du temps. Cet article explique ce que cela signifie."
permalink: /horizen/advanced/dao-decentralized-autonomous-organization/
topic: horizen
level: advanced
---

L'objectif à long terme d'Horizen est de faire évoluer sa structure organisationnelle vers une DAO. Une DAO, soit une Organisation Autonome Décentralisée (Decentralized Autonomous Organization en anglais), est un logiciel agissant comme une organisation et en fonction d'un certain nombre de règles et procédures prédéfinies.

Les règles et procédures qui régissent l'organisation sont transcrites en code lorsque le DAO est créé. L'objectif principal de notre DAO est de décentraliser le processus décisionnel concernant la façon dont est dépensé le budget de notre organisation à but non lucratif. Tous les membres de la communauté auront la possibilité de soumettre des propositions et d'être rémunérés pour leur contribution. Cela peut être une nouvelle fonctionnalité de notre portefeuille ou lors d’une conférence.

![DAO]({{site.baseurl_root}}/assets/post_files/horizen/advanced/dao/FR_DAO_D.jpg)
![DAO]({{site.baseurl_root}}/assets/post_files/horizen/advanced/dao/FR_DAO_M.jpg)

Pour que le processus décisionnel soit décentralisé il faut qu'il y ait un système de vote en place. Ce système de vote doit être fiable et nous avons décidé de l'implémenter sur une sidechain qui fonctionnera en parallèle de notre blockchain principale. Nous parlerons davantage des sidechains dans article dédié.

Pour que le système de vote soit optimal, il faudrait pouvoir permettre aux experts d'avoir le plus de poids possible dans le processus décisionnel lorsque les décisions portent sur leurs domaines de compétence, sans pour autant priver de leur droit de vote les utilisateurs non experts. Si vous êtes un développeur, vous voterez probablement à chaque fois que des propositions concernant du nouveau code sont soumises. À contrario, il se peut que vous n'ayez pas de connaissances en marketing et jugiez préférable que d'autres personnes que vous décident des conférences auxquelles participer et des évènements à soutenir. Un expert en marketing voudra décider des conférences auxquelles participer mais ne se sentira pas qualifié pour pouvoir avoir une opinion éclairée concernant l'implémentation de nouveau code.

La démocratie liquide est un concept qui promet de résoudre ce problème de façon équitable et efficace.

### Démocratie liquide

Les deux formes de démocratie existantes sont la démocratie représentative et la démocratie directe. Les premières formes de démocratie étaient des démocraties directes. Elles garantissaient aux participants équité, responsabilité et contrôle mais elles n'étaient pas adaptées à un grand nombre de participants.

Avec le nombre croissant de questions qui se posent, il devient impossible pour la plupart des participants de voter sur chacune d'entre elles. C'est la raison pour laquelle la plupart des démocraties ont évolué en des démocraties représentatives au fil du temps. Bien qu'elles permettent à un grand nombre d'électeurs de participer au processus décisionnel, ces dernières induisent des problèmes de transparence des votes et des décisions des représentants, de responsabilité des représentants et d'obstacles importants à l'entrée pour les participants qui veulent être élus.

La démocratie liquide est un hybride dynamique des deux branches établies de la démocratie, directe et représentative. La démocratie liquide combine beaucoup des avantages de chacune tout en se débarrassant de la plupart de leurs défauts. Avec la démocratie liquide vous avez la possibilité de déléguer votre vote à un expert qui représente vos opinions. Vous avez également la possibilité de voter directement à tout moment. Cela signifie que vous êtes libres de choisir votre niveau d'engagement et et qu'il y a peu de barrière à l'entrée si vous souhaitez agir en tant que délégué.

Dans une démocratie liquide, il n'y a pas de mandat électoral. Vous pouvez déléguer votre vote à un expert ou le retirer à tout moment. Les experts sont ainsi tenus de rendre des comptes.

![Liquid Democracy]({{site.baseurl_root}}/assets/post_files/horizen/advanced/dao/FR_liquid_democracy_D.jpg)
![Liquid Democracy]({{site.baseurl_root}}/assets/post_files/horizen/advanced/dao/FR_liquid_democracy_M.jpg)

### Les entités

Les différentes entités de notre système de trésorerie sont les suivantes :

- _Les porteurs de projet_ - Ce sont les personnes qui ont soumis une proposition afin qu'elle soit financée. N'importe qui peut soumettre une proposition mais doit payer des frais (peu élevés) afin d'éviter le spam.
- _Les comités de vote_ - Ce sont les intervenants qui souhaitent aider à exécuter le processus de vote, par exemple durant la phase de comptage des votes.
- _Les votants_ - Chaque votant bloque un certain montant de son capital (en l'occurrence en ZEN) pour participer. Leur vote est pondéré en fonction du montant bloqué.
- _Les experts_ - Un type spécial d'électeurs ayant une expertise dans certains domaines. N'importe qui peut s'inscrire en tant qu'expert. Plus d'informations à ce sujet lorsque nous arriverons à la façon de s'inscrire en tant qu'une des entités.

Afin de s'inscrire en tant qu'une des entités mentionnées ci-dessus, un utilisateur devra effectuer une transaction incluant toutes les informations nécessaires, telles que le montant bloqué et l'adresse à laquelle envoyer les récompenses de vote.

### Les récompenses

Chacun des votants, experts et membres de comité reçoivent une récompense pour sa participation à la gouvernance du protocole.

Il existe un phénomène appelé « ignorance rationnelle ». L'ignorance rationnelle consiste à s'abstenir d'acquérir des connaissances lorsque le coût de l'éducation sur une question dépasse le bénéfice potentiel que ces connaissances pourraient rapporter.

Notre objectif est de réduire l'ignorance rationnelle en incitant les votants à participer à la prise de décision. Le temps et les efforts qu'il faut afin d’obtenir tous les renseignements nécessaires pour prendre la meilleure décision possible lors d'une élection dépassent l'avantage de pouvoir voter une seule fois. Cela résulte en une apathie des électeurs.

Afin de surmonter ce problème d'apathie des votants (dans notre cas il ne s'agit pas d'élections mais d'approuver ou désapprouver des propositions), les personnes qui participent au processus de gouvernance sont récompensées pour leurs efforts. Cela crée une incitation à s'informer et à prendre part au processus. Les votants seront récompensés proportionnellement au capital qu'ils ont bloqué et les experts recevront une récompense proportionnelle au nombre de délégations obtenues, ou en d'autres termes à la confiance placée en eux et en la décision qu'ils prendront.

### Résumé

Dans un premier temps, nous voulons décentraliser la prise de décision concernant nos fonds de trésorerie, afin de devenir une DAO. Les utilisateurs auront la possibilité de soumettre des propositions et la communauté votera sur les propositions à financer. L'infrastructure pour le processus de vote et de distribution des fonds sera construite sur une sidechain.

Le mécanisme de vote que nous mettons en place est un système de démocratie liquide, où le votant peut choisir de voter directement ou de déléguer son vote à un expert. Pour lutter contre l'apathie des électeurs, nous prévoyons d'encourager la participation au processus de prise de décision par des récompenses financières.

## Contenu Expert Ci-dessous - DAO - Organisation autonome décentralisée

Roman Oliynykov, d'IOHK, a publié, en coopération avec Bingsheng Zhang et Hamed Balogun de l'Université de Lancaster, un article décrivant un système de trésorerie qui pourrait être déployé sur diverses cryptomonnaies, indépendamment du mécanisme de consensus utilisé. Un prototype a été implémenté en Scala sur le framework Scorex 2.0. Horizen travaille à la mise en œuvre du système de trésorerie proposé pour décider de l’utilisation nos fonds de trésorerie de manière décentralisée. Nous résumons le rapport et fournissons un aperçu du contexte dans cet article.

![DAO]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_DAO_D.jpg)
![DAO]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_DAO_M.jpg)

### Introduction

Construire une cryptomonnaie demande beaucoup de choses. Cela nécessite :

- des développeurs désireux d'investir leur temps dans le projet ;
- un peu de marketing. Non seulement pour rendre votre coin attrayant pour les utilisateurs potentiels, mais aussi afin d’attirer les développeurs désireux d'investir leur temps dans le projet ;
- une équipe juridique - Puisque les régulateurs surveillent de plus près l'espace de la cryptomonnaie. L'équipe juridique s'assurera que tous les efforts sont conformes à la réglementation en vigueur et qu'ils le seront à l'avenir.

Beaucoup de choses pourraient être ajoutées à cette liste, mais la plupart d'entre elles ont une chose en commun : elles nécessitent du financement.

Ce financement devrait être durable à long terme. Trois sources principales de financement sont identifiées dans le rapport, à savoir :

- les mécènes et les dons ;
- une ICO ;
- haircut/taxe/récompense des fondateurs (prélevés sur les récompenses des mineurs).

D'autres personnes ont déjà inclus les frais de transaction dans cette liste, mais le montant total des frais de TX en dehors des grands projets comme Bitcoin et Ethereum est loin d'être suffisant pour un développement continu.

Les dons ne sont pas une solution fiable à long terme. Une ICO ne fournit pas de financement durable au fil des ans et est devenue une option juridiquement difficile. La troisième option est identifiée comme étant le moyen de financement le plus prometteur. Les récompenses minières obtenues grâce aux cryptomonnaies en preuve de travail offrent une solution à long terme aux problèmes de financement. Cette solution peut résoudre la difficulté de trouver de nouvelles sources de financement. La question du financement se transformera en un problème auquel les générations à venir devront faire face au moment de la fin de l'émission monétaire (pour les monnaies qui ont adopté le calendrier d'émission Bitcoin cela va jusqu'en 2140 environ).

### La décentralisation est essentielle

La décentralisation n'évite pas seulement les points de défaillance uniques, elle contribue également à l'amélioration de la privacité. Une partie centrale puissante sera toujours en mesure de recueillir plus d'informations sur un utilisateur donné qu'un collègue dans un système véritablement distribué. Un autre domaine, outre l'architecture du réseau, qui devrait être décentralisé au maximum est le financement du développement et de la maintenance ainsi que la prise de décision concernant l'utilisation des fonds disponibles. C'est là que le modèle de trésorerie entre en scène. Le système de trésorerie proposé ne se soucie pas vraiment de la provenance des fonds. Il assure un processus de financement inclusif et équitable pour tous les participants.

### Système de vote

> “L'élément central d'un système de trésorerie est un système de prise de décision qui permet aux membres de la communauté de parvenir collectivement à certaines conclusions/décisions.”

Chaque membre de la communauté pourra soumettre des propositions afin de financer des projets. La collectivité décidera ensemble des projets à financer. Il peut s'agir du développement d'une nouvelle fonctionnalité pour un portefeuille, d'un développeur rémunéré pour son travail, d'un membre de la communauté se rendant à une conférence pour faire connaître le projet ou même du parrainage d'un événement.

Deux catégories différentes de systèmes de vote sont viables dans ce contexte : le vote préférentiel ou classé et le vote d'approbation.

Le système de vote préférentiel permet aux votants de classer les options données. Les options les mieux classées recevront un financement. Le classement peut prendre beaucoup de temps et être très difficile, et les votants doivent comparer des pommes à des oranges lorsqu'ils votent. Il est difficile de décider quelles caractéristiques, conférences et événements sont les plus importants en soi. Comparer une caractéristique à un événement ne facilite pas les choses.

Le vote d'approbation avec un système Oui-Non-Abstention simplifie grandement la prise de décision et est l'option que l'équipe autour de Bingsheng, Roman et Hamed a choisie pour le système de trésorerie. Un score pour chaque proposition peut facilement être calculé à partir de la différence entre les votes Oui et Non à la fin de la période de vote. Les propositions ayant obtenu les scores les plus élevés recevront un financement à tour de rôle jusqu'à ce que le fonds de trésorerie soit épuisé pour le mois en cours.

Si vous êtes un développeur, vous voterez probablement pour toutes les propositions du nouveau code. En même temps, vous n'avez peut-être pas beaucoup d'expérience en matière de marketing et vous pensez que d'autres personnes devraient prendre des décisions concernant les conférences auxquelles assister et les événements à soutenir. Un expert en marketing voudra décider à quelles conférences assister, mais pourrait ne pas avoir une opinion ferme sur le code à implémenter... vous avez l'idée. Maintenant, comment tirer le meilleur parti de l'expertise de certaines personnes ? La réponse est une démocratie liquide.

### Démocratie liquide

Les deux formes de démocratie existantes sont la démocratie représentative (RD) et la démocratie directe (DD). Les premières formes de démocratie ont été les démocraties directes. Elles ont offert à leurs participants l'équité, la responsabilité et le contrôle, mais elles ne s'adaptent pas bien à un nombre croissant de participants.

La plupart des démocraties sont devenues des démocraties représentatives au fil du temps pour cette raison. Bien qu'elles permettent à un grand nombre d'électeurs de participer au processus décisionnel, elles induisent des problèmes de transparence des votes, des décisions des représentants, et des obstacles importants à l'entrée des participants qui veulent participer au processus décisionnel.

La démocratie liquide (DL) peut être comprise comme un système hybride des deux branches établies de la démocratie, directe et représentative. La démocratie liquide combine beaucoup des avantages de chacune tout en éliminant la plupart de leurs faiblesses. Avec la démocratie liquide, vous avez la possibilité de déléguer votre vote à un expert qui représente vos opinions. Vous pouvez également décider de voter vous-même sur une question donnée.

Une différence essentielle est que vous pouvez déléguer votre vote à qui vous voulez, qu'il s'agisse de votre frère qui connaît vraiment un sujet donné ou de n'importe qui d'autre et vous pouvez retirer votre délégation à tout moment, ce qui rend tout le processus liquide. Cela réduit la barrière à l'entrée et responsabilise les délégués, car ils peuvent perdre des délégations à tout moment.

![Liquid Democracy]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_liquid_democracy_D.jpg)
![Liquid Democracy]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_liquid_democracy_M.jpg)

### Les différentes entités

En se rapprochant de la description du processus de vote lui-même, il est nécessaire de présenter les entités qui y participent :

- _Les porteurs de projet {O}_ sont les personnes qui ont soumis une proposition. N'importe qui peut soumettre une proposition mais doit payer des frais peu élevés pour éviter le spam.
- _Les comités de vote {C}_ sont des intervenants qui souhaitent aider à exécuter le processus de vote. Ils sont chargés de générer ensemble une clé publique de vote et d'annoncer le résultat du vote à la fin d'une période de vote.
- _Les votants {V}_ bloquent une partie de leur participation. Leur vote est pondéré en fonction de leur mise bloquée.
- _Les experts {E}_ sont un type particulier de votants qui ont une expertise dans un domaine particulier. N'importe qui peut s'inscrire en tant qu’expert.

N'importe qui peut soumettre une proposition de financement et devenir porteur de projet. Toute personne qui possède un enjeu peut s'inscrire en tant que votant ou en tant qu’expert. Certains votants auront aléatoirement la possibilité de devenir membre d'un comité de vote.

### Époques du système de trésorerie

Il y a trois époques dans chaque période d’allocation des fonds de trésorerie. Durant l'**époque du pré-vote**, tous les porteurs de projet ont le temps de soumettre leurs propositions encryptées. Toutes les propositions seront déchiffrées immédiatement à la fin de la phase de soumission. Cela accroît l'équité et empêche la présentation tactique des propositions à un moment opportun. Pendant l'époque pré-vote, les membres de la communauté ont également l’opportunité de s'inscrire en tant que votant ou expert en effectuant un type particulier de transaction.

![Treasury System Epochs]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_treasury_epochs_D.jpg)
![Treasury System Epochs]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_treasury_epochs_M.jpg)

Durant l’**époque du vote (voting epoch)**, la commission de vote est choisie, une clé de vote est établie et le scrutin a lieu. Pour la **sélection du comité** "...un ensemble de comités de vote seront choisis au hasard parmi les électeurs inscrits qui acceptent d'être pris en considération pour la sélection en comité. La probabilité d'être sélectionné est proportionnelle à leur mise bloquée."

L'**étape de configuration de la clé (key setup stage)** est celle durant laquelle une clé de vote publique pour la période de trésorerie est générée (servant d’adresse à laquelle tous les votes exprimés sont envoyés). Les votes sont exprimés anonymement et seul le résultat final sera public. Il devrait être possible pour un électeur d'exprimer son opinion anonymement, c'est pourquoi il y a des cabines dans les bureaux de vote. Le protocole garantit que le résultat final représente bien la somme de tous les votes.

Le vote anonyme est réalisé par le fait que tous les électeurs et les experts chiffrent leur vote à l'aide de la clé de vote publique. Seuls les membres du comité de vote peuvent déchiffrer les votes exprimés à l'étape du comptage. "Une fois que tous les comités ont déchiffré les votes, n'importe quelle partie peut voir les votes”.

Les électeurs et les experts envoient leur vote durant l' **étape des votes**. Chaque vote est représenté par un vecteur. Puisqu'il y a trois votes possibles - Oui, Non, Abstention - trois vecteurs possibles peuvent être soumis.

![yes no abstain]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_yes_no_abstain_D.jpg)
![yes no abstain]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_yes_no_abstain_M.jpg)

Le concept fonctionne ainsi : Dans l'exemple ci-dessous, il y a 4 votes, 2 ont voté oui à la proposition, 1 non et 1 abstention.

![votes]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_votes_D.jpg)
![votes]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_votes_M.jpg)

Si vous êtes familier avec le concept d'addition de vecteurs, il est facile de dire la somme de ces quatre vecteurs. Un des votes Oui est annulé par le vote Non. Le reste du vote Oui additionné au vote Abstention donne le vecteur diagonal illustré ci-dessous. Pour le comptage, seul l'axe des abscisses est pris en compte. Le résultat final de cette proposition révélé à l'étape du décompte serait un Oui.

![votes sum]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_votes_sum_D.jpg)
![votes sum]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_votes_sum_M.jpg)

Plus précisément, un score pour chaque proposition sera calculé en prenant le nombre de votes positifs moins le nombre de votes négatifs. La différence qui en résulte doit représenter au moins 10 % de tous les votes soumis pour être pris en considération pour le financement. Si 100 votes sont exprimés (sans abstention), il doit y avoir au moins 55 votes positifs pour atteindre ce seuil. Les propositions ayant obtenu les scores les plus élevés seront financées l’une après l’autre en partant des meilleures jusqu'à ce que la trésorerie du mois soit épuisée.

![score]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_score_D.jpg)
![score]({{site.baseurl_root}}/assets/post_files/horizen/expert/dao/FR_score_M.jpg)

L'**époque du post-vote** se compose de l'étape du comptage des voix et de l'étape de l'exécution. Notez que chaque vecteur est soumis de manière encryptée et que ce n'est qu'au stade du comptage que les comités révèlent conjointement tous les votes exprimés. La note de chaque proposition sera calculée et les propositions seront classées en fonction de leur résultat.

Au cours de l’**étape d'exécution**, les comités approuvent conjointement les transactions qui financent les propositions approuvées.

### Récompenses

La dernière caractéristique dont nous voulons parler est la récompense que les votants, les experts et les membres du comité reçoivent pour leur participation à la gouvernance du protocole. Il existe un phénomène appelé “ignorance rationnelle”. L'ignorance rationnelle consiste à s'abstenir d'acquérir des connaissances lorsque le coût de l'éducation sur une question dépasse le bénéfice potentiel que ces connaissances pourraient apporter.

Notre objectif est de réduire l'ignorance rationnelle en incitant les votants à participer à la prise de décision. C'est un problème dans les démocraties d'aujourd'hui partout dans le monde. Le temps et les efforts qu'il faut pour obtenir tous les renseignements nécessaires pour prendre la meilleure décision possible dans une élection dépassent l'avantage de pouvoir voter une seule fois. Cela résulte en une apathie des électeurs (dans notre cas il ne s'agit pas d'élections mais d'approuver ou désapprouver des propositions). Pour surmonter ce problème d'apathie des électeurs, les personnes qui participent au processus de gouvernance sont récompensées pour leurs efforts. Cela crée une incitation à s'informer et à participer au processus. Les votants seront récompensés proportionnellement au capital qu’ils ont bloqué et les experts seront récompensés proportionnellement au nombre de délégations obtenues, ou en d'autres termes à la confiance placée en eux et en la décision qu'ils prendront.

### Le plan d’implémentation du système de vote Horizen

Nous prévoyons d'intégrer le système de trésorerie sur une sidechain. Les [sidechains](https://academy.horizen.io/fr/horizen/advanced/sidechains/) sont l'une des principales améliorations du protocole sur laquelle Horizen travaille. Elles permettront à différentes dApps de s'exécuter sur leur propre sidechain avec des garanties de sécurité découplées. Même si quelque chose se passe mal sur une sidechain, la chaîne principale ne sera pas affectée.

L'interface utilisateur et l'expérience utilisateur d'un tel système sont des facteurs très importants. Le meilleur système de trésorerie ne sert à rien s'il est difficile d'y prendre part. L'un des défis sera de mettre au point un "centre de gouvernance" structuré et informatif. C’est-à-dire un site Web ou une fonctionnalité intégrée dans un portefeuille, où l'inscription des propositions, des électeurs, des experts et des comités a lieu. L'enregistrement est formellement une transaction, il serait donc pratique d'avoir une fonction implémentée dans un portefeuille qui faciliterait la participation de chaque partie prenante à la gouvernance.

Ensuite, il devrait y avoir un endroit où tous les experts sont répertoriés, où leurs décisions passées sont visibles et présentées de manière compréhensible. Ils devraient être en mesure de créer un profil et d'ajouter une biographie qui vous permettra de savoir à qui vous déléguez votre vote. Ils définiront leur domaine d'expertise et l'ensemble de l'information fournie les rendra responsables des décisions futures. N'oubliez pas que vous pouvez révoquer votre délégation à tout moment si vous n'êtes plus d'accord avec un expert. Cela devrait être aussi facile que de lui déléguer votre vote.

### Résumé

Notre système de trésorerie sert à distribuer des fonds à différents projets au sein d'Horizen et à légitimer le processus de prise de décision en le décentralisant. Chaque partie prenante pourra soumettre des propositions. Les utilisateurs pourront voter sur les différentes propositions soit directement, soit en choisissant un délégué qui votera en leur nom. Cet hybride de démocratie directe et représentative s'appelle la démocratie liquide. L'inscription des électeurs, le processus de vote et le financement du projet se feront sur une sidechain (une blockchain distincte qui est interopérable avec notre blockchain principale existante). Les utilisateurs seront incités à participer au processus de gouvernance et une interface utilisateur conviviale sera créée afin de rendre la participation facile et intuitive.

## Contenu Débutant Ci-dessous - DAO - Organisation Autonome Décentralisée

L'objectif à long terme d'Horizen est de faire évoluer sa structure organisationnelle vers une DAO. Une DAO, soit une Organisation Autonome Décentralisée (Decentralized Autonomous Organisation), est un logiciel agissant comme une organisation et en fonction d’un certain nombre de règles.

Les fondateurs de la DAO s'entendront sur l'ensemble des règles et procédures qui régiront le fonctionnement de la fondation et les transcriront en code informatique lors de la création de la DAO. Ce code se situe (pour la plupart du temps) sur une blockchain - où il n'est pas possible pour un individu d'altérer les règles initiales. Aucune partie n'a le pouvoir de modifier la DAO de son propre chef. Pour que les règles de la DAO changent il faut qu’une majorité de ses membres approuvent le changement.

Les fondateurs de la DAO définissent au début les critères permettant un changement des règles et les coderont dans l'organisation. Il est possible de faire en sorte qu'afin de pouvoir modifier la règle X il faille qu'une majorité (soit plus de 50%) des membres approuvent le changement tandis que pour pouvoir modifier la règle Y il faille une supermajorité (plus de 66% des membres).

### La DAO d’Horizen

L'équipe d’Horizen détermine tous les mois la façon dont le budget sera dépensé. Cela concerne le développement de notre protocole, le marketing, et plein d'autres choses. Nous comptons permettre à notre communauté de prendre part à ces décisions lorsque le ZenDAO sera opérationnel. Tout membre de la communauté peut soumettre à la DAO une proposition de contribution au projet, en précisant le montant des fonds nécessaires à la réalisation de cette contribution. La communauté examine ensuite la proposition, qui peut consister à traduire le site web vers une autre langue, ou bien créer une vidéo qui peut être utilisée à des fins de marketing ou encore créer une application sur Horizen.

Chaque mois, il y aura une période de vote. Au cours de cette période, la communauté pourra voter sur l'approbation ou non d'une proposition. Après la phase de décompte des votes, les propositions approuvées seront financées et les membres de la communauté qui ont soumis ces propositions pourront commencer le travail.

![DAO - Decentralized Autonomous Organization in FR]({{site.baseurl_root}}/assets/post_files/horizen/beginner/dao-decentralized-autonomous-organization/FR_DAO_D.jpg)
![DAO - Decentralized Autonomous Organization in FR]({{site.baseurl_root}}/assets/post_files/horizen/beginner/dao-decentralized-autonomous-organization/FR_DAO_M.jpg)

Chez Horizen nous croyons qu'il est important de donner le pouvoir à notre communauté. Nous sommes en train de créer les éléments de base nécessaires à la réalisation de notre vision de la ZenDAO. Le fait de voter sur le développement de la plateforme Horizen sera un bon moyen pour les membres de la communauté de prendre part au processus décisionnel et c'est également une excellente façon de légitimer les décisions de développement futures.
