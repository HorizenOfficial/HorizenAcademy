---
layout: post
type: intro
title: "Les attaques"
description: "Les blockchains sont un moyen sécurisé de stocker des données mais il existe des moyens d’attaquer une blockchain. Nous vous présentons les attaques les plus communes et comment leurs risques sont prévenus."
permalink: /technology/advanced/attacks-on-blockchain/
topic: technology
level: advanced
chapter: "Les attaques"
---

Les blockchains sont généralement considérées comme hautement sécurisées, mais le niveau de sécurité qu'elles offrent est proportionnel à la quantité de puissance de hachage que supporte le réseau. Plus il y a de mineurs et plus leur matériel minier est puissant, plus il est difficile d'attaquer le réseau. Dans cet article, nous souhaitons couvrir les scénarios d'attaque les plus courants sur les blockchains publiques.

### Le problème des généraux byzantins

Avant d'entrer dans les différents scénarios d'attaque, nous aimerions vous présenter une sorte d'expérience de pensée, à savoir le problème du général byzantin qui est resté non résolu pendant des siècles jusqu'à ce que la technologie des blockchains soit introduite, qui prétend l'avoir résolu.

Imaginez que vous êtes général (il y a quelques siècles) et que vous voulez attaquer un château avec votre armée. Le château est très robuste et l'armée à l'intérieur très forte. Vous avez organisé un certain nombre d'autres armées pour soutenir l'attaque et chacune de ces armées va attaquer d'un côté différent. Les armées sont séparées par la distance, chacune d'elles étant distante de plusieurs kilomètres. S'ils attaquent tous en même temps, les chances de victoire sont très élevées. Si l'attaque n'est pas coordonnée, vous subirez très probablement une défaite.

![Byzantine](/assets/post_files/technology/advanced/Ataques-on-blockchain/byz_0_D.jpg)
![Byzantine](/assets/post_files/technology/advanced/Ataques-on-blockchain/byz_0_M.jpg)

En tant que général, vous avez le problème suivant : Comment pouvez-vous vous assurer que toutes les armées attaquent en même temps ? En d'autres termes, comment pouvez-vous parvenir à un consensus sur le moment de l'attaque ? Vous ne pouvez pas donner des signaux avec des drapeaux, des torches ou de la fumée, car ces signaux pourraient être captés par l'ennemi.

Vous pourriez envoyer des messagers à cheval, mais que faire si l'un d'eux est capturé ou tué avant d'atteindre le général visé ? Pour savoir si les autres généraux ont reçu le message, vous pouvez leur faire envoyer un messager de retour avec une confirmation. Les messagers envoyés pour confirmer l'attaque pourraient être capturés ou tués sur le chemin du retour. Les autres généraux ne sauraient pas si vous receviez leur confirmation, donc vous devriez envoyer des confirmations des confirmations, mais que faire si ces messagers sont capturés ? Même sans le risque que des imposteurs transfèrent des messages frauduleux et que des traîtres confirment leur intention d'attaquer avec l'intention de ne pas le faire, cette situation était considérée comme impossible à résoudre. Personne ne pouvait savoir avec une certitude absolue si les autres généraux avaient l'intention d'attaquer en même temps ou non.

La technologie Blockchain prétend avoir résolu ce problème, bien que cela n’ait pas aidé l’armée Byzantine.


![Byzantine](/assets/post_files/technology/advanced/Ataques-on-blockchain/FR_byz_1_D.jpg)
![Byzantine](/assets/post_files/technology/advanced/Ataques-on-blockchain/FR_byz_1_M.jpg)

 Général a maintenant un registre des événements qui est toujours synchronisé avec les registres de l'autre Général sans qu'une partie centrale ne soit responsable de la coordination. Chaque fois qu'un bloc est miné, tous les participants s'entendent sur l'ordre des événements des deux dernières minutes. Pour en revenir au problème de notre général, ils ont maintenant un moyen de savoir s'ils vont tous attaquer, ou s'ils doivent battre en retraite collectivement. Maintenant que nous avons parlé du problème général qu'un [mécanisme de consensus]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) vise à résoudre, examinons quelques scénarios d'attaque simples et intuitifs et comment nous les abordons.

### Attaque DDoS

Une attaque par déni de service distribué (DDOS: Distributed Denial-of-Service) dans l'informatique est une attaque par laquelle un auteur cherche à rendre une ressource réseau inaccessible à ses utilisateurs en inondant le réseau d'un grand nombre de requêtes superflues afin de tenter de surcharger le système. C'est une attaque dont peuvent souffrir non seulement les blockchains, mais tout service en ligne. Sous une forme simple, l'attaque DOS (Denial-of-Service), toutes ces requêtes proviennent de la même source. Cela la rend facile à prévenir. Si une seule adresse IP envoie un grand nombre de demandes qui ne peuvent être justifiées par des raisons légitimes, vous pouvez avoir une mesure en place qui bloque automatiquement cette adresse IP. Dans le cas d'une attaque DDOS, la distribution se réfère à un grand nombre de sources différentes dont les requêtes malveillantes proviennent.

![DDOS Attack](/assets/post_files/technology/advanced/Ataques-on-blockchain/DDOS_D.jpg)
![DDOS Attack](/assets/post_files/technology/advanced/Ataques-on-blockchain/DDOS_M.jpg)

Une attaque DDOS est beaucoup plus difficile à combattre car pour ce faire, vous devez faire la différence entre les requêtes légitimes et les requêtes malveillantes. C'est un problème très difficile. Dans le contexte des blockchains, cela revient à une question presque idéologique. La motivation d'introduire des frais de transaction est d'éliminer le spam. Certains prétendent que tant que les demandes sont assorties de frais de transaction, elles ne peuvent pas être considérées comme du spam par définition. Bien qu'il y ait certainement des situations où vous pourriez considérer les transactions comme du spam, ce serait une mauvaise chose que de commencer à les bloquer. L'une des plus grandes propositions de valeur des blockchains publiques est leur résistance à la censure. Commencer à choisir des transactions qui ne sont pas incluses - quels que soient les critères sur lesquels cette censure est basée; constituerait un danger pour toute blockchain.

### Attaque Sybil

Une attaque Sybil est une tentative de manipulation d'un réseau P2P en créant plusieurs fausses identités. Pour l'observateur, ces différentes identités ressemblent à des utilisateurs individuels, mais dans les coulisses, une seule entité contrôle toutes ces fausses entités à la fois. Ce type d'attaque est important à considérer, surtout quand on pense au vote en ligne. Un autre domaine où nous voyons des attaques Sybil est dans les réseaux sociaux où les faux comptes peuvent influencer la discussion publique perçue dans la direction souhaitée.

Une autre utilisation possible des attaques Sybil est de censurer certains participants. Un certain nombre de nœuds Sybil peuvent entourer votre nœud et l'empêcher de se connecter à d'autres nœuds honnêtes sur le réseau. De cette façon, on pourrait essayer de vous empêcher d'envoyer ou de recevoir de l'information du réseau.

![Sybil Attack](/assets/post_files/technology/advanced/Ataques-on-blockchain/FR_sybil_D.jpg)
![Sybil Attack](/assets/post_files/technology/advanced/Ataques-on-blockchain/FR_sybil_M.jpg)

Une façon d'atténuer les attaques Sybil est d'introduire ou d'augmenter le coût pour créer une identité. Ce coût doit être soigneusement équilibré. Il doit être suffisamment bas pour que les nouveaux participants ne soient pas empêchés de se joindre au réseau et de créer des identités légitimes. Il doit aussi être suffisamment élevé pour que la création d'un grand nombre d'identités dans un court laps de temps devienne très difficile. Dans les blockchains en PoW, les nœuds qui prennent réellement les décisions sur les transactions sont les nœuds miniers. Il y a un coût réel, à savoir l'achat du matériel minier, associé à la création d'une fausse "identité minière". De plus, le fait d'avoir un grand nombre de nœuds miniers ne suffit toujours pas pour influencer le réseau de manière significative. Pour ce faire, vous auriez également besoin de grandes quantités de puissance de calcul. En d'autres termes, vous avez besoin d’un grand nombre d'ordinateurs. Les coûts associés rendent difficile de faire une attaque Sybil sur des blockchains en preuve de travail.

### Les attaques 51%

Le type d'attaque le plus connu contre les blockchains publiques en PoW est l'attaque 51 %. L'objectif d'une attaque 51% est de faire des _doubles dépenses_, ce qui signifie dépenser le même coin deux fois. Pour effectuer une attaque 51% sur un réseau blockchain, vous devez contrôler une majorité du taux de hachage ou de la puissance de calcul du réseau, d'où le nom.

Un mineur malveillant souhaitant effectuer une double dépense créera d'abord une transaction régulière en dépensant ses coins pour un bien ou pour une autre devise sur une plateforme d'échange. C'est ce qui se passe dans le bloc 40 ci-dessous. En même temps, il commencera à exploiter une chaîne privée. Cela signifie qu'il suivra le protocole minier habituel à deux exceptions près.

- Premièrement, il n'inclura pas ses propres dépenses de transaction de ses coins dans sa chaîne minée en privée.
- Deuxièmement, il ne diffusera pas les blocs qu'il trouve sur le réseau, c'est pourquoi nous l'appelons la chaîne privée.

![51% Attack](/assets/post_files/technology/advanced/Ataques-on-blockchain/FR_percent_D.jpg)
![51% Attack](/assets/post_files/technology/advanced/Ataques-on-blockchain/FR_percent_M.jpg)

S'il contrôle la majorité de la puissance de calcul, sa chaîne croîtra en moyenne plus vite que la chaîne honnête. La règle de la plus longue chaîne dans les blockchains en PoW, également connue sous le nom de consensus Satoshi, régit ce qui se passe dans le cas d'un tel fork. La branche (le fork), qui a plus de blocs, représente la chaîne créée avec une plus grande puissance de calcul, et est considérée comme la chaîne valide.

Une fois que l'attaquant a reçu le bien ou une autre devise achetée avec ses coins, il diffuse la branche privée sur l'ensemble du réseau. Tous les mineurs honnêtes lâcheront alors la branche honnête et commenceront de miner au delà de la chaîne malveillante. Le réseau traite la transaction de l'attaquant comme si elle n'avait jamais eu lieu parce que l'attaquant ne l'a pas incluse dans la chaîne malveillante. L'attaquant contrôle toujours ses fonds et peut maintenant les dépenser à nouveau.


<img src="/assets/post_files/technology/advanced/Ataques-on-blockchain/percent.gif" alt="51% Attack" style="width: 700px;">

C'est ce qui est arrivé à de nombreuses petites blockchains dans le passé. En fait, Horizen a souffert d'une attaque 51% début juin 2018. Nous avons immédiatement commencé à travailler sur une solution pour atténuer le risque d'une attaque de 51% sur des blockchains plus petites qui ne sont pas sécurisées par autant de puissance de calcul que par exemple la blockchain Bitcoin.

Nous avons trouvé [une solution](https://www.horizen.global/assets/files/FR_A-Penalty-System-for-Delayed-Block-Submission-by-Horizen.pdf) qui pénalise les soumissions en bloc retardées. Il n'y a aucune raison légitime pour un mineur de diffuser plusieurs blocs à la fois sur le réseau. Notre mécanisme de protection rend ces attaques très coûteuses. Si coûteux qu'il n'est pas rentable d'effectuer une telle attaque sur notre réseau. Beaucoup d'autres blockchains cherchent maintenant à mettre en œuvre un mécanisme de protection similaire avec leur protocole.

### Résumé

Les blockchains ont résolu le problème du général byzantin de parvenir à un consensus sur l'ordre des événements dans un environnement peu digne de confiance. Il y a différentes façons d'attaquer une blockchain. L'exécution de ces attaques devient plus difficile au fil du temps à mesure que la puissance de calcul du réseau s'accroît et qu'il devient plus robuste. Dans une attaque DDOS, l'auteur veut ralentir ou arrêter le réseau en le spammant avec un grand nombre de transactions. Dans une attaque Sybil, un acteur malveillant contrôle de nombreuses fausses identités et tente soit de se mêler des élections en ligne, soit de manipuler la communication dans un réseau P2P. Dans une attaque 51%, un mineur contrôlant la majorité de la puissance de calcul sur le réseau essaie de dépenser deux fois de l'argent, en écrivant d'abord une version privée de la blockchain, avant de diffuser tous les blocs en même temps aux mineurs honnêtes.

Les scénarios d'attaque présentés dans cet article, à l'exception de l'attaque de 51%, ne sont pas endémiques aux blockchains et existent depuis le début des réseaux distribués de pairs. De nombreuses mesures sont en place afin d’atténuer les risques liés aux différents scénarios d'attaque. Nous les examinerons de près dans la section expert. Nous espérons que ce dernier article ne vous a pas laissé une fausse impression sur la sécurité de la blockchain. La technologie Blockchain est hautement sécurisée, mais comme pour tout ce qui est numérique, il n'existe pas de protocoles invincibles.
