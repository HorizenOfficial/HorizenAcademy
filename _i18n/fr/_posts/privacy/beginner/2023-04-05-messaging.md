---
layout: post
type: article
title: "Les messageries"
description: "La messagerie instantanée est aujourd'hui l'un des moyens de communication par excellence, raison suffisante pour que l'utilisateur choisisse une application de messagerie qui respecte sa vie privée."
permalink: /privacy/beginner/messaging/
topic: privacy
level: beginner
chapter: "Outils pour protéger votre vie privée"
further_reads: [secure_messaging_apps_comparison, secure_messaging_scorecard_a_thorough_review_of_top_trending_apps]
---

Nous chattons tous et par tonnes : SMS, iMessage, Skype, Messenger, WhatsApp, Telegram.... Certains se souviendront peut-être même de l'époque d’ICQ et de mIRC !

La messagerie est un moyen très confortable d’utilisation car elle ne nécessite pas de réponse immédiate et vous pouvez l'utiliser dans des environnements non privés et bruyants. La messagerie vocale intégrée est une autre fonctionnalité utile à utiliser lorsque vous êtes pressé et que vous voulez gagner du temps. Nous utilisons souvent ces messageries, mais cela soulève aussi la question de la vie privée. Comment les données sont-elles conservées, traitées et transmises ? Sommes-nous protégés lorsque nous partageons des données privées sur ces applications ? Eh bien, il s'avère que certains le font très bien alors que d'autres ne le font pas tant que ça.

Comme pour bien d'autres choses, la protection de la vie privée se fait au détriment du confort. Plus l'application est axée sur la protection de la vie privée, plus il peut y avoir de limites.

La caractéristique la plus importante pour les messageries modernes est sans doute le chiffrement de bout en bout, ce qui signifie que les données sont chiffrées pendant la transmission et ne sont pas envoyées en texte clair. Il est important de prêter attention à des choses telles que la juridiction de l'entreprise et de l'infrastructure, si les données sont transmises aux agences de renseignement, les capacités de surveillance intégrées dans l'application, la collecte des données des clients, les primitives cryptographiques, si les applications et l'infrastructure sont open source, et si vous pouvez inscrire et utiliser l'application de façon anonyme ou pas.

Passons en revue quelques-unes des applications de messagerie les plus protectrices de la vie privée :


### ZenChat

ZenChat d'Horizen est l'une des solutions de messagerie les plus sécurisées actuellement disponibles sur le marché. Basée sur la plateforme blockchain d'Horizen, ZenChat utilise les zk-SNARKS et d'autres algorithmes de chiffrement. Elle peut être utilisée comme produit autonome ou intégrée dans nos portefeuilles.

La meilleure implémentation de ZenChat est disponible dans notre application phare, Sphere by Horizen, bien que vous puissiez l'utiliser avec votre portefeuille Swing et comme une application ZenChat autonome. Les utilisateurs peuvent communiquer 1 à 1, par messagerie de groupe, ou établir des canaux privés dédiés. La communication de canal coûte une quantité minimale de ZEN afin d’éviter l'encombrement et le spam. ZenChat stocke les messages en permanence dans la blockchain pour empêcher la fuite des métadonnées et sont chiffrés avec des algorithmes tels que AES-256 avec Perfect Forward Secrecy (PFS), correspondant aux normes actuelles de chiffrement pour une communication sécurisée. Le fait de vivre sur la blockchain a aussi ses limites : comme les blocs et les transactions doivent être petits, la taille effective du message texte est limitée et vous devez également prouver que chaque message est une transaction privée, et attendre la confirmation dans la blockchain. En raison de la limitation de la taille des transactions, vous ne pouvez pas joindre de fichiers aux messages (mais vous pouvez envoyer des liens). Nous avons quelques améliorations en cours et bientôt Sphere by Horizen recevra des mises à jour qui permettront d'utiliser différentes adresses pour ZenChat, permettant d'envoyer plusieurs messages et les prochaines mises à jour de Sapling réduiront considérablement le temps de délivrance des messages.

L'infrastructure est complètement décentralisée, fiable et open source et vous seul pouvez lire vos données. Aussi, vous pouvez utiliser ZenChat de manière totalement anonyme. Nous ne demandons jamais de données personnelles identifiables.

Vous pouvez lire les informations détaillées sur ZenChat dans notre section Horizen pour niveau [débutant]({{ site.baseurl }}{% post_url /horizen/beginner/2026-01-04-zenchat %}), [avancé]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-04-zenchat %}) et [expert]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-04-zenchat %}).

![ZenChat](/assets/post_files/privacy/beginner/messaging/chat.jpg)

### Ricochet

Bien qu'il s'agisse d'une expérience selon son auteur, "Ricochet utilise le réseau Tor pour vous mettre en relation avec vos contacts sans dépendre des serveurs de messagerie. Il crée un service caché pour prendre rendez-vous avec vos contacts sans révéler votre emplacement ou votre adresse IP. Au lieu d'un nom d'utilisateur, vous obtenez une adresse unique qui ressemble à ricochet:rs7ce36jsjsj24ogfw. Les autres utilisateurs de Ricochet peuvent utiliser cette adresse pour envoyer une demande de contact en demandant à être ajouté à votre liste de contacts. Vous pouvez voir quand vos contacts sont en ligne, et leur envoyer des messages (et bientôt, des fichiers ! ). Votre liste de contacts n'est connue que de votre ordinateur ; jamais exposée aux serveurs ou à la surveillance du trafic réseau. Tout est chiffré de bout en bout, donc seul le destinataire peut le déchiffrer, et c'est également anonymisé, donc personne ne sait d'où ça vient et où ça part."

Comme pour les applications de messagerie plus conventionnelles, certaines des plus notables avec des fonctions de protection de la vie privée incluent Signal, Threema et Wire. www.securemessagingapps.com a une grande comparaison de ces applications avec d'autres qui sont très populaires et fréquemment utilisées comme Telegram, Skype, WhatsApp, Messenger, et autres. Plutôt que de tout expliquer à nouveau ici, nous vous recommandons d'y aller et de comparer les applications à l'aide du tableau sur le site Web.

![Ricochet](/assets/post_files/privacy/beginner/messaging/ricochet.png)

### Keybase

Le travail d'équipe et la collaboration sont une autre chose importante aujourd'hui avec Slack et Teams en tête du peloton. Au cas où vous auriez besoin d'une application de travail d'équipe qui préserve la confidentialité, Keybase est une très bonne alternative. Selon son propre site Internet, "Keybase est une nouvelle application de sécurité gratuite pour téléphones portables et ordinateurs. Pour les geeks parmi nous : c'est open source et alimenté par la cryptographie à clé publique. Keybase est pour tout le monde. Imaginez un Slack pour le monde entier, sauf qu'il est chiffré de bout en bout sur tous vos appareils. Ou une DropBox d'équipe où le serveur ne peut pas divulguer vos fichiers ou être piraté."

Armé d'un grand nombre d'alternatives, nous vous souhaitons une messagerie heureuse et sécurisée.

<img src="/assets/post_files/privacy/beginner/messaging/keybase.png" alt="Keybase" style="width: 200px;">
