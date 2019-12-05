---
layout: post
type: intro
title: "Les types de portefeuilles"
description: "Pour recevoir, stocker et envoyer des cryptomonnaies, on utilise des portefeuilles de cryptomonnaies. Dans cet article, nous vous présenterons les différents types de portefeuilles."
permalink: /technology/advanced/types-of-wallets/
topic: technology
level: advanced
chapter: "Portefeuilles"
---

_Note du traducteur: Pour parler des portefeuilles, je parle aussi souvent de wallets, qui en est le mot anglais. En effet, dans le langage courant en français, vous pourrez entendre à la fois wallet, et portefeuille._

Un wallet est un programme pour générer, gérer et stocker une paire de clés cryptographiques. Vous pouvez vérifier votre solde, recevoir et envoyer des fonds dans votre wallet.

![Wallet](/assets/post_files/technology/advanced/types-of-wallets/FR_wallet2_D.jpg)
![Wallet](/assets/post_files/technology/advanced/types-of-wallets/FR_wallet2_M.jpg)

Si vous n'êtes pas sûr de la fonctionnalité principale d'un portefeuille, vous pouvez lire notre [introduction aux portefeuilles]({{ site.baseurl }}{% post_url /technology/begginer2020-03-01-wallets %}). La principale différence entre les différents types de wallets est l'emplacement physique dans lequel vos clés sont stockées.

### Votre phrase mnémonique

Votre phrase mnémonique est une sauvegarde de votre clé privée qui est utilisée par la plupart des portefeuilles. Il s'agit d'une liste de mots aléatoires qui vous sont donnés lors de la création d'un portefeuille, généralement 12 ou 24. Si vous cassez ou perdez un appareil avec un portefeuille - qu'il s'agisse d'un portefeuille mobile, de bureau ou hardware - votre phrase mnémonique est généralement votre dernière ligne de défense contre une perte de fonds. Cela implique que tout attaquant qui met la main sur votre phrase de récupération sera en mesure de faire de même. Par conséquent, vous devez protéger votre phrase mnémonique aussi bien que vous protégeriez vos fonds eux-mêmes.

**Note importante** : _Vous devriez écrire les mots sur un papier ou les enregistrer dans n'importe quel format analogique que vous jugez approprié, mais ne les enregistrez pas sous forme de fichier texte sur votre ordinateur ou sous forme de capture d'écran. Vous ne voulez pas qu'il soit trop facile pour un agresseur potentiel de voler votre argent._

### Les différents types de wallets

Dans cet article, nous voulons vous donner une vue d’ensemble des différents types de portefeuilles afin de vous aider à trouver celui qui convient à vos besoins.

![overview](/assets/post_files/technology/advanced/types-of-wallets/FR_overview_D.jpg)
![overview](/assets/post_files/technology/advanced/types-of-wallets/FR_overview_M.jpg)

### Web wallets hébergés

Nous pouvons distinguer les web wallets hébergés et non hébergés. Avec les web wallets hébergés, vos clés sont stockées en ligne par un tiers de confiance. Il s'agit le plus souvent de plateformes d'échange tels que Coinbase, Binance ou Bittrex. Lorsque vous créez un compte auprès de ces entités, elles créeront une entrée dans leur base de données interne reliant votre compte à un ensemble de paires de clés pour les différents coins qu'elles ont inscrits.

![Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/FR_hosted_webwallet_D.jpg)
![Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/FR_hosted_webwallet_M.jpg)

Un des avantages d'un web wallet hébergé est la possibilité de récupérer votre mot de passe au cas où vous l'oublieriez ou le perdriez. La perte de vos clés privées (avec votre phrase mnémonique respectivement) entraîne une perte de fonds dans tous les autres cas.

Bien que cela puisse sembler rassurant, il y a quelques inconvénients avec les wallets hébergés (aussi appelés hot wallets ou cloud wallet). N'oubliez pas : si vous ne contrôlez pas vos clés, vous ne contrôlez pas vos fonds. Il y a toujours un risque de tiers, peu importe à quel point il peut sembler digne de confiance. Tout d'abord, ils sont une cible plus attrayante pour les pirates informatiques que pour les particuliers parce que leur pot de miel est beaucoup plus grand. Deuxièmement, un changement soudain dans la réglementation pourrait ne pas vous permettre de retirer vos fonds dans le pire des cas. C'est peu probable, mais certainement pas impossible. Troisièmement, il y a toujours un risque qu'une société fasse faillite ou vole de l'argent. Avec les grandes plateformes d’échange comme celles mentionnées ci-dessus, ce risque semble faible, mais il existe. Pour les raisons susmentionnées, nous vous conseillons à tous de conserver les clés de vos fonds vous-mêmes, c'est-à-dire de les conserver dans un wallet où vous avez le contrôle de vos clés privées. Il y a une responsabilité qui vient avec le fait d'être en charge de la sécurité de vos fonds vous-même, mais vous permettre de le faire est l'une des principales motivations de l'existence des cryptomonnaies !

Vous aurez besoin de garder des fonds sur une plateforme d'échange de façon permanente si vous prévoyez de trader souvent. Si vous voulez bien faire les choses, alors votre niveau d'expertise devrait dépasser de loin cet article de toute façon.

### Web wallets non hébergés

Outre les web wallets hébergés, il existe également une gamme de web wallets non hébergés. Le web wallet non hébergé le plus populaire est probablement MyEtherWallet, qui peut stocker l'éther (ETH) et tous les jetons ERC-20 (jetons qui "vivent" sur la blockchain Ethereum). Ces wallets fournissent une interface pour vérifier vos fonds ou créer des transactions dans votre navigateur web, mais vous devez fournir les clés à chaque connexion.

![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/non-hosted_webwallet_D.jpg)
![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/non-hosted_webwallet_M.jpg)

Il y a une gamme d'options afin d’accéder à votre wallet avec MyEtherWallet (souvent abrégé MEW). La première option nécessite votre adresse, mais vous permet uniquement de consulter vos fonds.

MetaMask est un plugin de navigateur qui offre la possibilité d'effectuer des paiements ETH dans votre navigateur et la possibilité de se connecter à MEW. Il fournit également une fonction de détection des sites de phishing et vous avertit lorsque vous êtes sur le point d'en ouvrir un.
Les prochaines options, le wallet Ledger, Trezor, Digital Bitbox, et Secalot sont des hardwares wallets. Nous y reviendrons plus loin dans l'article.

L'accès à votre wallet avec un fichier keystore /.json est possible mais non recommandé. Le fichier contient votre clé privée et lorsque vous créez votre portefeuille, vous avez la possibilité de le télécharger. S'il tombe entre de mauvaises mains, ils auront accès à vos fonds, alors l'enregistrer sur votre bureau n'est pas la solution idéale. Si vous voulez utiliser cette méthode, vous devez chiffrer le fichier .json et le stocker sur un périphérique séparé comme une clé USB. Pour l'utiliser, connectez le lecteur, déchiffrez le fichier, puis sélectionnez le fichier dans votre navigateur et voilà. Après cela, vous pouvez à nouveau déconnecter le support de stockage de votre choix.

Les deux dernières options sont plus ou moins les mêmes en matière de sécurité. Vous pouvez entrer votre clé privée directement ou votre phrase mnémonique (qui donne votre clé privée lorsqu'elle est hashée), qui peuvent être problématiques si votre ordinateur est compromis.

En conclusion, un web wallet non hébergé est très pratique et tout aussi sûr que la méthode que vous choisissez de fournir vos clés.


### Wallets de bureau et wallets mobiles

Si vous commencez par la question "où sont vos clés", le wallet de bureau et le wallet mobile vous donneront la même réponse : sur l'appareil. Les téléphones et tablettes sont plus puissants que jamais, la différence entre un wallet de bureau et un wallet mobile est marginale. On peut également se demander si l'un est plus sûr que l'autre.

Vous connaissez maintenant les tâches qu'un wallet effectue : visualiser, recevoir et envoyer. Si vous voulez utiliser la crypto pour les transactions quotidiennes, il n'y a presque aucun autre moyen que de garder des fonds dans un wallet mobile. Comme mentionné précédemment, lorsque vous créez votre wallet, vous obtiendrez une phrase mnémonique que vous devez garder en lieu sûr. Habituellement, il y a un PIN, un mot de passe ou une protection Face-/Touch-ID pour accéder au wallet. Vous ne devriez jamais garder plus d'argent dans un wallet mobile que ce que vous êtes prêt à perdre. C'est la même chose qu'avec de l'argent comptant : vous ne transportez pas tout votre argent dans un portefeuille. Vous retirez autant que vous êtes à l'aise avec l'argent comptant et gardez le reste dans votre compte (ou sous le matelas :P).

Avec les wallets de bureau et les wallets mobiles, vous avez le choix entre des options à monnaie unique ou multidevises. Ces termes devraient être assez explicites. Le premier vous permet de stocker un coin spécifique, tandis que le second prend en charge plusieurs devises. Certains des exemples les plus populaires pour le bureau incluent Coinomi et Sphere by Horizen. Pour le mobile, il y a Coinomi, Mycelium ou Paytomat pour n'en citer que quelques-uns.

<div class="row align-items-center">
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/coinomi.jpg" alt="coinomi"></div>
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/paytomat.jpg" alt="Paytomat"></div>
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/mycelium.png" alt="mycelium"></div>
</div>

Si vous avez reçu vos premiers coins sur une plateforme d'échange, je vous recommande de transférer vos fonds hors de la plateforme d'échange (Web wallet hébergé) sur un ordinateur de bureau, de papier ou un hardware wallet. Envoyez d'abord une fraction pour vous assurer que tout fonctionne comme prévu. Si votre première transaction fonctionne, vous envoyez le reste. Vous êtes désormais protégé contre le risque de tiers, mais vous êtes entièrement responsable de vos fonds.

### Les paper wallets (portefeuilles en papier!)

Reprenons notre fil d'or et demandons-nous "où sont les clés". Le [paper wallet](https://zenpaperwallet.com/) vous donne une réponse simple: dans votre main ! Un portefeuille en papier est votre paire de clés publique et privée imprimée sur papier. Presque toutes les cryptomonnaies offrent un générateur de paper wallet. Pour créer une paire de clés, vous devez généralement d'abord créer une certaine entropie (un terme pour désigner le désordre), en d'autres termes : vous voulez que vos clés soient aussi aléatoires que possible. Cela se fait la plupart du temps automatiquement, mais parfois vous trouverez des fonctions où vous devez déplacer votre souris ou appuyer sur les touches de votre clavier au hasard pour créer un effet aléatoire.

Lorsque vous imprimez votre paper wallet, vous ne devriez pas utiliser une imprimante partagée comme celle de votre bureau. Dans le meilleur des cas, l'imprimante ne dispose même pas d'une fonction WiFi/réseau. Les imprimantes conservent généralement une copie des fichiers qu'elles ont imprimés en dernier, et un attaquant pourrait l'exploiter. Vous obtiendrez quelque chose ressemblant à ceci après avoir imprimé le wallet de façon sécuritaire:

![paper wallet](/assets/post_files/technology/advanced/types-of-wallets/paper_wallet.jpg)

Il ne reste qu'une seule chose à faire : envoyer les fonds à la clé publique. Après cela, vous avez un cadeau parfait ou un stockage à long terme pour vos coins. Le principal risque avec un paper wallet est que vous le perdiez ou le détruisiez par accident. Si vous n'avez pas une phrase mnémonique pour récupérer la clé privée, vous risquez de perdre tous les fonds sur le wallet par accident. Choisissez donc judicieusement l'endroit où ranger votre paper wallet. Imprimez plusieurs copies si vous vous sentez mal à l'aise d'en avoir une seule et rangez-les toutes dans des endroits séparés et sûrs.

### Hardware wallets

Passons au chéri de tout le monde : le hardware wallet. Avec un hardware wallet, vos clés sont stockées sur l'appareil dans ce qu'on appelle "l'élément sécurisé". L'élément sécurisé est un endroit pour stocker des données (ici, vos clés) qui ne peuvent pas être accédées directement par votre ordinateur ou tout autre appareil même quand il est connecté. Bien qu'il ressemble à une simple clé USB, il peut en fait faire un peu plus que simplement fournir du stockage pour vos clés. Pour utiliser un hardware wallet, vous avez généralement quelques options d'interface à utiliser avec. Comme MyEtherWallet, quelques autres wallets offrent un support de hardware wallet. De plus, vous avez les applications de wallet natives fournies par le producteur. Dans le cas du Ledger, par exemple, l'application native est appelée Ledger Live.

Comment un tel wallet fonctionne-t-il réellement ?

L'interface génère une adresse à partir de votre clé publique si vous souhaitez recevoir des fonds. L'utilisation de cette fonction est assez simple : si vous cliquez sur le bouton de réception, le processus s'exécute en arrière-plan et l'adresse est affichée pour que vous puissiez la partager avec l'expéditeur. Si vous voulez envoyer des fonds, l'application crée la transaction formelle qui doit être signée. La transaction non signée est maintenant envoyée dans votre hardware wallet, où elle est signée avec votre clé privée sur l'appareil. La signature est ensuite renvoyée à votre ordinateur et la transaction complète, y compris la signature diffusée sur le réseau.

![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/FR_signing_hardware_wallet_D.jpg)
![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/FR_signing_hardware_wallet_M.jpg)

Votre/Vos clé(s) privée(s) ne quittent pas l'appareil, elles ne sont donc pas visibles par l'ordinateur avec lequel vous utilisez votre hardware wallet à chaque instant. C'est pourquoi un hardware wallet est considéré comme le moyen le plus sûr de stocker des cryptos, en particulier de grandes quantités.

Si votre appareil se casse un jour, vous avez votre phrase mnémonique comme sauvegarde. Au risque d'être répétitif : votre phrase mnémonique, en toutes circonstances, doit rester privée et dans un endroit sûr. Une copie à un membre de la famille de confiance ou dans un coffre-fort de banque pourrait être une bonne idée en cas d'incendie, d'inondation ou d'un chien joueur.

### Résumé

Il existe de nombreuses façons de stocker vos cryptomonnaies. Habituellement, il y a un compromis à faire entre la commodité et la sécurité. La question la plus importante est : où sont les clés ? Un wallet n'est qu'un logiciel, une interface, qui vous aide à exécuter les fonctions de base des cryptomonnaies : générer, gérer et stocker vos clés. Il vous permet de consulter votre solde, de créer une adresse pour recevoir des fonds et de créer des transactions pour envoyer des fonds.

Avec un web wallet hébergé, vous faites confiance à un tiers pour gérer vos clés. Vous avez la possibilité de récupérer votre mot de passe si vous le perdez, mais il y a toujours un risque important pour un tiers. Si vous ne contrôlez pas vos clés, vous ne contrôlez pas vos fonds !

Avec un wallet de bureau, mobile, papier ou hardware, vous possédez les clés et personne d'autre que vous-même n'est responsable de les garder en sécurité. Si votre appareil tombe en panne, vous disposez d'une phrase mnémonique/de récupération dans le but de récupérer l'accès à vos fonds. La phrase est aussi sensible que votre clé privée elle-même et si elle tombe entre de mauvaises mains, vos fonds sont perdus. Ce n'est pas pour vous faire peur, mais pour vous rendre prudent et conscient du risque.

Tout ce mouvement de cryptomonnaies vise à vous redonner le pouvoir sur votre argent, mais...


![with great power comes great responsibility](/assets/post_files/technology/advanced/types-of-wallets/with-great-power-comes-great-responsibility.gif)
