---
layout: post
type: article
title: "Un protocole pour transférer de la valeur"
description: "Deuxièmement, depuis une perspective plus philosophique; en examinant les implications de la blockchain utilisée pour le transfert de valeur."
permalink: /technology/advanced/a-protocol-to-transfer-value/
topic: technology
level: advanced
chapter: "Qu’est-ce que la Blockchain ?"
further_reads: [why_bitcoin_lightning_network_is_ingenious]
---

Nous allons maintenant examiner la blockchain d'un point de vue différent. Cette perspective considère l'utilisation de la technologie de la blockchain comme un réseau de règlement pour les transactions financières et les règles et conventions qui font fonctionner une blockchain.

> “[The] Bitcoin protocol and network today [a] value transfer network. Beyond that, it is a core, backbone security service securing contracts, physical and digital property, equities, bonds, robot AI and an enormous wave of applications which have not yet been conceived." - Jeff Garzik, Bitcoin Core Developer

> “Le protocole et le réseau Bitcoin [est] aujourd'hui [un] réseau de transfert de valeur. Au-delà, il s'agit d'un core, d'un service de sécurité backbone sécurisant les contrats, les biens physiques et numériques, les actions, les obligations, les robots IA et une énorme vague d'applications qui n'ont pas encore été conçues." - Jeff Garzik, Développeur Bitcoin Core

Le protocole est un ensemble de règles qui régit la validité des transactions et le fonctionnement global de la blockchain. La [définition de Technopedia](https://www.techopedia.com/definition/12938/network-protocols) d'un protocole réseau est la suivante :

> "Network protocols are formal standards and policies comprised of rules, procedures and formats that define communication between two or more devices over a network. Network protocols govern the end-to-end processes of timely, secure and managed data or network communication."

> "Les protocoles de réseau sont des normes et des politiques formelles composées de règles, de procédures et de formats qui définissent la communication entre deux ou plusieurs dispositifs sur un réseau. Les protocoles de réseau régissent les processus de bout en bout des communications de données ou de réseau opportunes, sécurisées et gérées."

La création de la blockchain définit cet ensemble de règles, de procédures et de formats. La seule façon de modifier ces règles est qu'une majorité des participants au réseau décide de le faire. Les blockchains publiques doivent faire l'objet d'un consensus, ce qui exige à son tour un examen attentif de chaque changement proposé. Cette caractéristique souhaitable aide à créer une base de confiance solide pour les utilisateurs.

### Protocoles réseau

Vous pouvez distinguer plusieurs grands types de protocoles réseau. Il y a :

 - Les protocoles de communication réseau tels que TCP/IP (protocole de contrôle de transmission/ protocole Internet) ;
 - Les protocoles de sécurité réseau tels que HTTPS et SSL (protocole de transfert hypertexte secure/secure sockets layer) ;
 - Les protocoles de gestion de réseau tels que SNMP et ICMP (protocole de gestion de réseau simple/ protocole de message de contrôle Internet) ;
 - Les protocoles de transfert de valeur tels que Horizen ou Bitcoin.

Vous trouverez ci-dessous une collection de protocoles, dont beaucoup sont utilisés tous les jours. Par exemple, le protocole TCP/IP spécifie comment décomposer les données en paquets, les adresser et les acheminer par le réseau vers leur destination finale. Vous utilisez la norme TCP/IP chaque fois que vous allez en ligne pour communiquer avec différents serveurs afin de recevoir les informations auxquelles vous voulez accéder.

SSL (Secure Sockets Layer) est un protocole standard utilisé pour établir des liens chiffrés entre un serveur Web et un client (comme votre ordinateur) dans la communication en ligne. Par exemple, lorsque vous envoyez vos détails de paiement à une boutique en ligne, vous utilisez SSL pour établir une connexion chiffrée avant d'envoyer vos informations de carte de crédit sur Internet.
Le protocole SNMP (Simple Network Management Protocol) est un ensemble de protocoles pris en charge par des périphériques réseau tels que des routeurs, des serveurs ou des imprimantes. Le SNMP prend en charge les différents périphériques d'un réseau interopérable en toute transparence.

![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/FR_protocols_D.jpg)
![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/FR_protocols_M.jpg)

Tout au long de l'histoire d'Internet, les gens ont défini des normes pour l'échange de divers types de données. Il est important de noter que ce n'est pas toujours le meilleur protocole qui a été adopté en masse. Il est peu probable que les gens adoptent un protocole différent une fois qu'ils commencent à l'utiliser et à s'en inspirer, à moins que ce ne soit mieux pour confédérer. Les développeurs sont attirés par le nombre croissant de bibliothèques et d'outils disponibles sur ces protocoles. Ce cycle se répète jusqu'à ce qu'un protocole devienne finalement un standard.

Bitcoin est en bonne position pour devenir la norme convenue pour le transfert de valeur sur internet. Bitcoin est une convention qui spécifie les règles, procédures et formats pour le transfert d'argent en ligne sans intermédiaires centraux. Horizen vise à devenir la norme en matière de valeur privée et de transfert de données dans le Web 3.0 décentralisé.

Les gens aiment souligner que le débit (le nombre de transactions par seconde) que les blockchains peuvent gérer n'est pas (encore) suffisant pour le travail. D'autres pensent que la mise au point de technologies de deuxième couche (comme Lightning Network ou le déploiement de sidechains) peut compenser le manque de débit.

Il s'agit d'une discussion en soi. Nous sommes confiants de pouvoir dire qu'un grand livre distribué d'une sorte ou d'une autre deviendra la norme convenue pour le transfert de valeur à l'avenir. De toutes les cryptomonnaies actuelles, c'est le Bitcoin qui est la plus adoptée. De nombreux projets et entreprises ont commencé à s'appuyer sur le protocole Bitcoin. Dans le passé, ce type d'adoption était un premier indicateur du succès d'un protocole. Chez Horizen, nous construisons un protocole de blockchain qui est évolutif et utilisable par les développeurs, en particulier avec la sortie de notre implémentation de sidechains.

### Quelles sont les règles ?

Un protocole est une norme composée d'un ensemble de règles et de conventions utilisées dans un but donné. Voyons à quoi ressemblent certaines des conventions et règles d'une blockchain.

Un sous-ensemble des règles concerne la gestion du registre. Chaque nœud conserve une copie de la blockchain et vérifie chaque transaction qu'il reçoit. Une fois qu'une transaction est vérifiée, elle est sauvegardée dans le mempool (abréviation de memory pool) avec toutes les autres transactions qui ne sont pas incluses dans un bloc. Lorsqu'un nœud reçoit un nouveau bloc de ses pairs, il vérifie d'abord la validité du bloc. Si elle est valide, elle est ajoutée à la copie locale de la blockchain et toutes les transactions incluses dans le bloc sont supprimées du mempool. Le mempool ne contiendra jamais que des transactions non confirmées.

Un autre sous-ensemble de règles concerne la structure d'un bloc valide. Rappelez-vous qu'un bloc n'est qu'un conteneur de données comme nous l'avons expliqué dans notre dernier article. Un bloc a un en-tête de bloc qui contient des informations sur la version du client bitcoin avec lequel il a été créé, une référence à son bloc précédent, une sorte de résumé de toutes les transactions qui sont contenues dans le bloc (la Racine de Merkle), un indicateur horaire et quelques informations pratiques.

Après l'en-tête de bloc, le bloc contient toutes les transactions qui ont été incluses.

![Block](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/FR_block_2_D.jpg)
![Block](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/FR_block_2_M.jpg)

Il faut maintenant établir un ensemble de règles décrivant à quoi doit ressembler une transaction individuelle. Nous parlerons des transactions en détail dans un article dédié mais pour l'instant, il devrait suffire de savoir qu'une transaction doit inclure l'expéditeur, le destinataire, le montant du transfert, et une signature numérique. La signature numérique est un moyen d'autoriser l'utilisation de vos fonds. La clé privée d'un utilisateur créée cette signature numérique. Nous expliquons ce processus plus en détail dans notre article sur la cryptographie à clé publique.

### La grande innovation introduite avec Bitcoin

La _théorie des jeux (game theory)_ est l'étude de modèles mathématiques d'interaction stratégique entre décideurs rationnels. Les mineurs, les nœuds et les utilisateurs de cryptomonnaies sont les décideurs rationnels. Chaque personne essaie de maximiser son bénéfice personnel. Lorsque Satoshi Nakamoto a publié le livre blanc sur le Bitcoin, il a introduit un système dans lequel chaque participant est incité économiquement à suivre les règles du protocole. En d'autres termes, il est plus rentable de jouer selon les règles que de les enfreindre. C'est vrai, même 10 ans après l'entrée en vigueur du protocole Bitcoin. On ne saurait surestimer la prévoyance et la réflexion qui ont présidé à la mise en place d'un tel système d'incitations.

Il peut être difficile de comprendre pourquoi nous considérons tout cela comme une innovation révolutionnaire lorsque nous examinons les différentes parties du protocole Bitcoin. Il est vrai que la plupart des concepts qui composent l'idée de Bitcoin existent depuis des années. La théorie des jeux est sans doute la partie la plus importante d'un protocole de blockchains publiques. La conception de la structure d'incitation est la raison pour laquelle Bitcoin a été la première cryptomonnaie et la première blockchain qui a survécu. Il y avait un grand nombre de monnaies numériques avant Bitcoin, mais elles étaient soit très centralisées, soit n'offraient pas les bonnes incitations pour leurs participants.

### Résumé

Le protocole d'une blockchain est un ensemble de règles que tous les participants doivent suivre. Il régit la façon de communiquer les données à travers le réseau, à quoi doivent ressembler les blocs et les transactions et comment les participants sont récompensés pour leur participation. Elle incite les participants à agir honnêtement en faisant du comportement honnête la stratégie la plus rentable.

J'aimerais terminer cet article de la même façon qu'il a commencé, avec une citation de Jeff Garzik, l'un des développeurs les plus connus de Bitcoin.

> "Do not try to stuff every feature into the Bitcoin protocol. Let it do what it does best. Build systems on top of Bitcoin which use its strengths... Putting all the world’s coffee transactions, and all the world’s stock trades, and all the world’s Internet of Things device samplings, on the Bitcoin blockchain seems misguided" - Jeff Garzik

> "N'essayez pas d'insérer toutes les fonctionnalités dans le protocole Bitcoin. Laissez-le faire ce qu'il fait de mieux. Construisez des systèmes sur Bitcoin qui utilisent ses forces... Mettre toutes les transactions de café du monde, et toutes les transactions boursières du monde, et tous les échantillonnages de dispositifs de l'Internet des objets du monde entier, sur la blockchain Bitcoin semble malavisé" - Jeff Garzik, Développeur Bitcoin Core Developer
