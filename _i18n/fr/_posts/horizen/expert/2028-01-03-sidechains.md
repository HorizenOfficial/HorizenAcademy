---
layout: post
type: article
title: "Sidechains"
description: "Les Sidechains sont une approche prometteuse pour améliorer les blockchains. Nous vous montrons ici ce que sont les sidechains et comment nous prévoyons de les utiliser."
permalink: /horizen/expert/sidechains/
topic: horizen
level: expert
canonical_link: "/fr/horizen/advanced/sidechains/"
---

Dans notre section [Avancé]({{ site.baseurl }}{% post_url /horizen/advanced/2027-12-31-horizen-advanced %}), nous avons expliqué pourquoi les sidechains sont un moyen ingénieux de surmonter les limites actuelles concernant la scalabilité, l'interopérabilité et la gouvernance dans l'écosystème de la blockchain. Cet article est la suite de notre approche avancée du sujet. Si vous n'êtes pas familier avec le concept de sidechains, vous devriez peut-être faire le point avant de continuer à lire cet article.

![sidechains](/assets/post_files/horizen/expert/sidechains/FR_sidechains_D.jpg)
![sidechains](/assets/post_files/horizen/expert/sidechains/FR_sidechains_M.jpg)

Le fait d'avoir la capacité de déployer des sidechains améliorera considérablement les possibilités de construire sur des blockchains publiques existantes. L'un des premiers cas d'utilisation d'une sidechain pour le projet Horizen sera la [trésorerie](https://www.horizen.global/assets/files/FR_Horizen-Sidechains-Decoupled-Consensus-Between-Chains.pdf), qui rapprochera l'organisation de son objectif de devenir une organisation autonome décentralisée ou [DAO]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-01-dao-decentralized-autonomous-organization %}).

### Comment ça marche ?

La construction du modèle de sidechain se compose de deux parties :

 1. Le _protocole de consensus de la sidechain (sidechain consensus protocol)_  — SCP
 2. Le _protocole de transfert inter-chaînes (cross-chain transfer protocol)_ ou 2-Way Peg (2WP) — CCT

Le _protocole de consensus de la sidechain_ régit la façon dont le réseau s'entend sur les nouveaux blocs et donc sur l'historique des transactions. Le _protocole de transfert inter-chaînes_ détermine comment les ressources peuvent être envoyées de la chaîne principale à une sidechain et vice versa.

Le CCT se compose de deux sous-protocoles que nous allons expliquer.

Le premier sous-protocole traite des _transactions vers l'avant_ (forward transactions), qui sont des transactions de la chaîne principale (mainchain) à la sidechain. Le deuxième sous-protocole traite des _transactions vers l'arrière_ (backward transactions), qui sont des transactions de la sidechain à la chaîne principale.

![SCP_CCT](/assets/post_files/horizen/expert/sidechains/FR_SCP_CCT_D.jpg)
![SCP_CCT](/assets/post_files/horizen/expert/sidechains/FR_SCP_CCT_M.jpg)

La première décision de conception à prendre est de déterminer si la chaîne principale devrait être au courant de ce que font les sidechains. L'équipe dirigée par Alberto Garoffolo a décidé de développer le SCP et le CCT indépendamment l'un de l'autre.

> Le protocole CCT (le protocole de transfert) doit être unifié et fixé par la logique de la chaîne principale afin que toutes les sidechains utilisent le même protocole CCT. Le protocole SCP (le protocole de consensus) sera complètement découplé de la logique CCT et de la chaîne principale en général, de sorte qu'un développeur de sidechain sera libre de choisir le protocole SCP en fonction des besoins.

Bien qu'un certain nombre de protocoles consensuels différents soient possibles, nous présenterons les grandes lignes de la mise en œuvre de référence proposée pour le SCP qui est basé sur Ouroboros. Il s'agit d'un protocole consensuel de preuve d'enjeu qui fait appel au concept de délégation. Ensuite, nous parlerons du protocole de transfert inter-chaînes.

### Prérequis

Pour cet article, vous devriez avoir une compréhension des concepts de la technologie de la blockchain tels que :

 - [La Structure des blocs]({{ site.baseurl }}{% post_url /technology/advanced/2021-01-02-blockchain-as-a-data-structure %}) (en-tête, Hash du bloc, arbre de Merkle…)
 - [Les systèmes PoW/PoS]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %})
 - [Les Sidechains]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-03-sidechains %})

### Le Protocole de Consensus de la Sidechain - SCP (Sidechain Consensu Protocol)

Le SCP proposé est basé sur le protocole Ouroboros développé par IOHK pour le projet Cardano avec quelques légères modifications. Il s'agit d'un protocole consensuel fondé sur la preuve d'enjeu qui fait appel au concept de délégation et qui fonctionne généralement comme ceci :

- Le temps est divisé en époques de “k” slots. Il n'est pas encore spécifié, mais supposons que “k” sera 8 pour les besoins de la démonstration (et correspondant au graphique ci-dessous) ;
- Chaque slot représente la possibilité de créer un bloc de sidechain dans une certaine période de temps. Les recherches suggèrent que 20 secondes est un temps raisonnable pour permettre la synchronisation du réseau à travers le monde. Pendant une époque jusqu'à “k” blocs seront forgés ;
- Il y a un slot leader pour chaque slot. Le slot leader est autorisé à générer un bloc au cours de cette période de temps.
Avant qu'une époque ne commence, il y a une Procédure de Sélection des Slot Leaders qui assigne un slot leader par slot pour l'époque suivante (dans notre exemple, 8 slot leaders seront sélectionnés par procédure/époque de sélection) ;
- Si un slot leader n’arrive pas à forger son bloc dans le temps imparti, le prochain slot leader inclura dans son bloc les transactions qui n'avaient pas été incluses dans le bloc non créé du précédent créneau.

![epoch](/assets/post_files/horizen/expert/sidechains/FR_epoch_D.jpg)
![epoch](/assets/post_files/horizen/expert/sidechains/FR_epoch_M.jpg)

#### Modifications du Protocole d'Ouroboros

La sécurité des logiciels est habituellement évaluée en fonction de certaines hypothèses. C’est également le cas concernant les protocoles de consensus.

Le consensus PoW est fondé sur l'hypothèse qu'une majorité de la puissance de hachage est honnête. L'hypothèse de base sur laquelle repose la sécurité du protocole PoS d'Ouroboros est que la procédure de sélection des Slot Leaders est aléatoire. Aucune partie ne devrait être en mesure de prédire qui sera le slot leader désigné au cours d'une période donnée.

Pour atteindre cet objectif, une source de hasard est nécessaire et il est plus difficile qu'on ne le pense de créer un véritable hasard. Le protocole Ouroboros PoS original a introduit un protocole de tirage au sort basé sur un partage de secret vérifiable afin de générer du hasard. La solution proposée (modifiée) utilise la chaîne principale PoW à cette fin. C'est une solution simple mais efficace.

Le caractère aléatoire découle du plus petit hachage de bloc sur la chaîne principale au cours d'une période de temps donnée. Pour que cela fonctionne, l'ensemble des certificateurs éligibles sera choisi avant le début de la période de génération aléatoire. Une part importante de la puissance de hachage serait nécessaire pour corrompre ce mécanisme. Dans l'hypothèse d'une majorité honnête de la puissance de hachage sur la chaîne principale, cela devrait être irréalisable et économiquement non rentable. Une analyse formelle d'une telle attaque sera effectuée séparément.

Une autre modification à l'implémentation originale d'Ouroboros concerne les références à la chaîne principale incluses dans les blocs de la sidechain. Nous en parlerons dans le contexte du protocole de transfert inter-chaînes lors de l'introduction du concept de référencement complet.

#### Vivacité et persistance

Garay, Kiayias & Leonardos affirment que la procédure standard de preuve de la sécurité d'un protocole de consensus de la blockchain exige de démontrer la capacité du protocole à satisfaire deux propriétés fondamentales d'un registre distribué : la vivacité et la persistance.

**Anglais**

> “Persistence states that once a transaction goes more than k blocks “deep” into the blockchain of one honest player, then it will be included in every honest player’s blockchain with overwhelming probability, and it will be assigned a permanent position in the ledger.” — Garay, Kiayias & Leonardos, 2014

**Français**

> “La persistance signifie qu'une fois qu'une transaction dépasse un certain nombre de blocs “k” dans la blockchain d'un participant honnête, elle sera incluse dans la blockchain de chaque participant honnête avec une probabilité écrasante, et elle se verra attribuer une place permanente dans le registre.” — Garay, Kiayias & Leonardos, 2014

La persistance est étroitement liée à la propriété d'immuabilité.

**Anglais**

> “[…]Liveness says that all transactions originating from honest account holders will eventually end up at a depth more than k blocks in an honest player’s blockchain, and hence the adversary cannot perform a selective denial of service attack against honest account holders.” — Garay, Kiayias & Leonardos, 2014

**Français**

> “[…] La vivacité signifie que toutes les transactions provenant de titulaires de comptes honnêtes finiront par se retrouver à une profondeur supérieure à “k” blocs dans la blockchain d'un joueur honnête, et donc l'adversaire ne peut pas effectuer d'attaque par déni de service contre les titulaires de comptes honnêtes.” — Garay, Kiayias & Leonardos, 2014

Ceci est étroitement lié à la propriété de résistance à la censure.

(Notez qu'il s'agit là d'un “k” différent de celui qui désigne le nombre de blocs par époque).

Des propriétés comme la vivacité et la persistance ne sont prouvées qu’à condition qu’un certain nombre d’hypothèses comme par exemple l’honnêteté de la majorité des participants soient vraies. Une liste exhaustive de ces hypothèses et de leurs définitions se trouve dans le document original d'Ouroboros.

#### Activation de différents SCP

La motivation derrière le développement séparé du SCP et du CCT était de permettre une variété de SCP possibles. Bien que la description suivante du protocole de transfert inter-chaîne reprenne quelques concepts du protocole adapté d'Ouroboros décrit ci-dessus, elle peut être combinée avec un certain nombre d'autres mécanismes de consensus. Horizen envisage de passer à une structure Block-DAG (Directed Acyclic Graph). L'interopérabilité entre une autre sidechain PoW ou une chaîne principale Block-DAG et le protocole CCT fera l'objet de recherches supplémentaires.

### Le protocole de transfert inter-chaînes - CCT

**Anglais**

> The CCT protocol is the most important part of the sidechain construction since it defines the overall structure of the communications between MC and SC. - Sidechain Whitepaper ; Garoffolo, Viglione

**Français**

> Le protocole CCT est la partie la plus importante de la construction de la sidechain puisqu'il définit la structure globale des communications entre la MC (MainChain: Chaîne principale) et la SC (SideChain) - Sidechain Whitepaper ; Garoffolo, Viglione

Nous avons déjà mentionné les deux sous-protocoles du CCT :

Le premier sous-protocole traite des transactions vers l'avant, qui sont des transactions de la chaîne principale à la sidechain.

Le deuxième sous-protocole traite des transactions vers l'arrière qui sont des transactions de la sidechain à la chaîne principale.

#### Transactions vers l'avant et référencement complet

L'objectif est de permettre les transferts inter-chaînes, il doit donc y avoir une forme de communication entre les chaînes. La sidechain doit être au courant de toutes les transactions sur la chaîne principale qui envoient des ressources à une adresse sur la sidechain (vers l'avant). Il doit y avoir un mécanisme permettant à la chaîne principale de vérifier les transactions vers l'arrière.

La validation des transactions vers l'avant s'effectue par référencement complet. Il résout deux problèmes à la fois : permettre des transferts de la chaîne principale vers la sidechain de manière simple et traiter de la finalité (ou de l'absence de finalité).

![full referencing](/assets/post_files/horizen/expert/sidechains/FR_full_referencing_D.jpg)
![full referencing](/assets/post_files/horizen/expert/sidechains/FR_full_referencing_M.jpg)

**Anglais**

> Full referencing implies that the sidechain blocks contain the full chain of the mainchain block references. Even if some block forger missed his opportunity to include a reference to the newly generated MC [mainchain] block, some of the following block forgers will include the missed mainchain reference. - Sidechain Whitepaper; Garoffolo, Viglione

**Français**

> Le référencement complet implique que les blocs de la sidechain contiennent la chaîne complète des références des blocs de la chaîne principale. Même si un forgeur de bloc a raté l'occasion d'inclure une référence au bloc de la MC [mainchain] nouvellement généré, certains des forgeurs de bloc suivants incluront la référence de la mainchain manquée.- Sidechain Whitepaper; Garoffolo, Viglione

Alors, comment le référencement complet permet-il d'atteindre les objectifs mentionnés ci-dessus ? Les références peuvent être l'une de deux choses suivantes :

 - Si le bloc de la chaîne principale ne contient aucune transaction vers la sidechain en question, seul le hachage du bloc est utilisé comme référence;
 - S'il y a une ou plusieurs transactions vers l'avant dans le dernier bloc, l'en-tête de bloc entier, la ou les transaction(s) vers l’avant et le chemin de Merkle de la ou des transaction(s) sont utilisés comme référence.

Les nœuds de la sidechain peuvent facilement vérifier les transferts en incluant l'en-tête de bloc et le chemin Merkle des transactions vers l'avant. Vous pourriez considérer les deux registres, sidechain et chaîne principale, comme deux registres distincts. Puisque les teneurs de registre de la sidechain surveillent constamment le registre de la chaîne principale, ils peuvent facilement ajouter des transactions inter-chaînes à leur registre. En incluant les transactions avec leurs chemins Merkle et l'en-tête de bloc correspondant, chaque entité de la sidechain pourra vérifier que la transaction est valide par elle-même sans avoir à se connecter à la chaîne principale.


![forward](/assets/post_files/horizen/expert/sidechains/FR_forward_D.jpg)
![forward](/assets/post_files/horizen/expert/sidechains/FR_forward_M.jpg)

L'activation du protocole de transfert vers l'avant implique d'apporter des modifications à la logique actuelle de la chaîne principale. Un nouveau type de transaction doit être introduit, qui brûle les coins et fournit un ensemble de métadonnées qui permet à l'utilisateur de réclamer le même montant (moins les frais de TX) sur la sidechain. Il en va de même pour les transactions vers l'arrière : les coins sur la sidechain sont brûlés et un montant équivalent moins les frais de TX sont créés sur la chaîne principale. Une construction avec une procédure de verrouillage et de déverrouillage est également possible.

L'autre problème qui est résolu concerne le caractère irréversible des blockchains en preuve de travail utilisant le consensus Nakamoto. Il est possible qu'une transaction vers l'avant valide soit d'abord incluse dans un bloc de la chaîne principale, mais que le bloc contenant la transaction soit "forké" (de l'anglais "forked" ndt) et devienne orphelin peu après. Cela pourrait créer la possibilité de faire une double dépense (une fois sur la chaîne principale et une fois sur la sidechain) si la transaction a déjà été ajoutée au registre de la sidechain. La liaison élimine une telle situation. Dans le cas d'un fork de la chaîne principale, les blocs de la sidechain qui se réfèrent au bloc de la chaîne principale forkée seront également inversés.

### Transactions vers l'arrière et certificateurs

Passons maintenant à la partie la plus intéressante. Comment la chaîne principale peut-elle vérifier les transactions vers l'arrière si elle ne garde pas la trace de la ou des sidechain(s) ? En utilisant l'analogie avec le teneur de registre d'avant, le problème suivant doit être résolu : les teneurs de registre de la chaîne principale doivent ajouter les transactions entrantes des sidechains à leur registre, mais ne peuvent jamais regarder les autres registres qui les entourent.

J'aimerais revenir sur le facteur différenciateur des sidechains et des drivechains que j'ai mentionné plus tôt. Pour une construction de sidechain connectée, il existe deux modes opérationnels qui concernent l'exécution des transactions vers l'arrière : synchrone et asynchrone.

**Anglais**

> The synchronous mode implies that both main and sidechains are aware of each other and can verify transfer transactions directly, while the asynchronous mode relies on validators to process transfers. - Sidechain Whitepaper; Garoffolo, Viglione

**Français**

> Le mode synchrone implique que la chaîne principale et la sidechain sont au courant l'une de l'autre et peuvent vérifier directement les transactions de transfert, tandis que le mode asynchrone dépend des validateurs pour traiter les transferts. - Sidechain Whitepaper; Garoffolo, Viglione

Nous avons décidé de développer le SCP et le CCP indépendamment l'un de l'autre. Puisqu'il s'agit d'un objectif déclaré de permettre une variété de SCP différents, il n'est pas possible pour la chaîne principale de suivre chaque sidechain, car elle devrait connaître chaque protocole de consensus individuel. Cela implique que l'implémentation proposée se qualifie à proprement parler de drivechain plutôt que de sidechain, car son mode de fonctionnement est asynchrone : la chaîne principale ne garde pas la trace des sidechains.

### Récupération des données de la sidechain à la chaîne principale

Du point de vue des données, pour que tout cela fonctionne, il faut qu'il y ait un mécanisme de transfert, initié sur la sidechain, qui informe la chaîne principale des transactions vers l'arrière entrantes. Pour ce faire, on introduit un nouveau type de conteneur de données appelé Cross-Chain Certificates (CCCert's).

![CCCert](/assets/post_files/horizen/expert/sidechains/FR_CCCert_D.jpg)
![CCCert](/assets/post_files/horizen/expert/sidechains/FR_CCCert_M.jpg)

Le CCCert contient des informations de base, telles que l'identificateur de sidechain (SCid) et l'ID CCCert comme en-tête. La liste des transferts vers l'arrière regroupe toutes les transactions inter-chaînes. Les trois derniers champs de données concernent les certificateurs qui remplissent le rôle des validateurs mentionnés dans la citation ci-dessus.

Les teneurs de registre de la chaîne principale ne peuvent pas regarder les autres registres (sidechains) mais doivent savoir quand quelque chose qui se rapporte à leur registre se passe. Quelqu'un doit leur communiquer cela d'une manière standardisée. Les certificateurs sont ceux qui informent les teneurs de registre de la chaîne principale des transactions entrantes, et la méthode de communication standardisée se fait par le biais des certificats inter-chaînes.

Les certificateurs s'enregistrent sur la chaîne principale par le biais d'un type spécial de transaction, qui comprend l'ID de la sidechain pour laquelle ils s'enregistrent et un dépôt qui est verrouillé. Ce dépôt a un rôle à jouer dans la prévention de la fraude, mais nous y reviendrons dans une minute. Chaque partie prenante de la chaîne principale est éligible pour devenir un certificateur. Un sous-ensemble de tous les certificateurs vérifie les transactions vers l'arrière sur la sidechain, les collecte dans la liste de transfert vers l'arrière, signe le CCCert résultant avec une signature agrégée et l'envoie à la chaîne principale.

Faciliter les transactions vers l'arrière est une forme de travail. Il faut qu'il y ait un incitatif pour faire ce travail. En outre, l'incitation doit être conçue de manière à encourager les comportements honnêtes et à empêcher les comportements malveillants d'être rentables. L'un des principaux objectifs était de concevoir le protocole d'une manière qui décentraliserait le processus de vérification inter-chaînes.

Les certificateurs reçoivent un incitatif en percevant les frais de transaction de toutes les transactions qu'ils traitent. S'ils soumettent des certificats frauduleux, ils ne seront pas en mesure de débloquer leur mise. Un groupe de certificateurs qui ont un dépôt combiné X verrouillé sur la chaîne principale n'est autorisé à signer qu'un CCCert qui a un total combiné de 0,5X. C'est ce qu'on appelle le montant maximum du certificat (MAX_CERT_AMOUNT).

Si le montant par certificat n'était pas plafonné, il serait possible de bloquer un dépôt, de signer un CCCert frauduleux d'une valeur supérieure au dépôt lui-même, de l'envoyer à une adresse contrôlée par soi-même sur la chaîne principale tout en se fichant de perdre son dépôt d’un montant inférieur au montant du CCCert perçu.

### Signalement des fraudes

L'application de cette mesure repose sur l'hypothèse d'une majorité honnête. Comme vous l'avez peut-être remarqué, il y a un champ de données contenu dans la liste des signalements de fraudes de CCCert. Ce champ serait utilisé de la manière suivante en cas de fraude :

- Un certificat frauduleux CCCert(i) est créé en privé et signé par la majorité des certificateurs du groupe(i) ;
- Le certificat frauduleux CCCert(i) est alors envoyé à la chaîne principale et inclus dans un bloc(i). La chaîne principale n'est pas en mesure de vérifier le certificat et de détecter la fraude elle-même ;
- Le certificat frauduleux se synchronise dans la sidechain (voir Référencement complet) ;
- Le groupe suivant de certificateurs (i+1) vérifie le CCCert(i) précédent sur la sidechain, détecte la fraude et inclut un rapport de fraude dans leur certificat CCCert(i+1) ;
- Une fois que la chaîne principale reçoit CCCert(i+1) contenant le rapport de fraude, le groupe de certificateurs - malveillants(i) ne sera pas en mesure de débloquer leur dépôt ;
- Si le groupe (i+1) n'inclut pas de rapport de fraude, le groupe suivant (i+2) le fera et les deux groupes frauduleux d'avant (i et i+1) perdront leur dépôt.

En ne signalant pas une fraude détectée, un groupe risquerait de perdre son dépôt, tout comme le groupe initialement malveillant. Il est également important de noter que la conception du protocole rend impossible le fait que les certificateurs d’un groupe se retrouvent dans le groupe de certificateurs suivant.

Le fonctionnement interne d'un transfert vers l'arrière est un peu plus complexe. Si vous souhaitez en savoir plus à ce sujet, n'hésitez pas à consulter la source originale.

Afin de protéger la chaîne principale de toute inflation si jamais toutes les autres mesures se sont révélées être insuffisantes, il existe une dernière ligne de défense. Le “safeguard” est un mécanisme sur la chaîne principale, qui suit le montant total des actifs qui ont été transférés à chaque sidechain. Il est impossible de retirer plus de coins d'une sidechain que le montant qui y a été déplacé en premier lieu, ce qui empêche l'inflation.

### Résumé

Les sidechains pourraient être un moyen élégant de surmonter les limites actuelles en matière de scalabilité et de gouvernance dans l'écosystème de la blockchain. La principale contribution de notre équipe est de mettre au point un nouveau protocole de transfert vers l'arrière qui ne repose pas sur un groupe centralisé de validateurs. Chaque acteur peut devenir certificateur s'il le souhaite, introduisant ainsi la décentralisation dans le processus de vérification inter-chaînes.

Du point de vue de la sécurité, le plus important est de concevoir l'implémentation de manière à ce qu'aucune sidechain ne puisse nuire à la chaîne principale.

Le SCP doit disposer d'une garantie d'assignation véritablement aléatoire des slots leaders. En outre, la vivacité et la persistance doivent être garanties.

La sécurité du CCT est renforcée par l'ajout de références à la chaîne principale à chaque bloc (référencement complet), l'introduction d'un plafond sur le montant total qu'un groupe de certificateurs peut signer (MAX_CERT_AMOUNT) et le suivi du montant total qui a été transféré vers une sidechain donnée et peut être retiré (safeguard).

Le fait d'avoir la capacité de déployer des sidechains améliorera considérablement les possibilités de construire sur des blockchains publiques existantes. Il y aura encore beaucoup de travail afin d’arriver à déployer la première sidechain sur le réseau principal d’Horizen. Cela comprend des tests de sécurité rigoureux et une évaluation plus poussée du protocole de consensus de la sidechain.

L'un des premiers cas d'utilisation d'une sidechain pour le projet Horizen sera très probablement une sidechain dédiée à la trésorerie, rapprochant le projet d'une [organisation autonome véritablement décentralisée]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-01-dao-decentralized-autonomous-organization %}).
