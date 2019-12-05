---
layout: post
type: article
title: "Des mots de passe forts"
description: "Il y a une différence entre les mots de passe difficiles à retenir et ceux qui sont sûrs. Nous vous montrons ici comment créer ces derniers."
permalink: /privacy/advanced/strong-passwords/
topic: privacy
level: advanced
chapter: "Les bonnes pratiques"
further_reads: [how_to_create_a_strong_password]
---

Réutiliser le même mot de passe sur de nombreux sites Web et applications est la première mauvaise pratique en matière de sécurité. Même les plateformes les plus importantes et les plus robustes sont piratées et les informations d'identification de leurs utilisateurs sont vendues sur le marché noir. Il y a eu des cas où les données volées étaient également accessibles au public. Imaginez si vos informations d'identification se trouvaient dans l'une de ces bases de données; chaque compte pour lequel vous avez utilisé le même mot de passe serait piraté également.

Il est important que vous utilisiez un mot de passe différent pour chaque site Web ou application pour lequel vous créez un compte. Considérez ceci comme la meilleure pratique de sécurité.

![password](/assets/post_files/privacy/advanced/strong-passwords/FR_password.jpg)

[Source](https://xkcd.com/936/)

### Comment les mots de passe sont-ils piratés ?

Il existe quelques méthodes bien connues utilisées par les pirates afin d’obtenir un mot de passe. Le moyen le plus facile de le faire pour un pirate est le phishing.

Avec le phishing, un attaquant essaie de vous faire donner votre mot de passe de plein gré. Ceci peut être fait en vous envoyant un courriel vous demandant de vérifier votre compte. Un lien dans l'e-mail peut vous mener à un site Web qui ressemble exactement au site Web d'origine vers lequel l'e-mail prétend avoir un lien. En saisissant vos informations de connexion sur ce faux site Web, les pirates ont atteint leur but.

Lorsque vous recevez un courriel suspect comme dans l'exemple ci-dessus, veuillez ne pas cliquer sur le lien. En cas de doute, visitez le site Web comme vous le feriez normalement et vérifiez votre compte pour voir si vous avez des notifications concernant la vérification de vos identifiants. Si vous n'avez pas de notification, l'e-mail est très certainement une arnaque.

Si un attaquant ne peut pas vous soutirer votre mot de passe par la ruse, il a deux autres options:

Attaque par dictionnaire - Dans une attaque par dictionnaire, les pirates essaient un grand nombre de mots communs, par exemple à partir d'un dictionnaire. Ils utiliseront non seulement les mots réguliers du dictionnaire Larousse, mais aussi les mots de passe les plus courants. Dans le cas où certains de vos mots de passe ressemblent à : Password123, P4ssword, P4ssw0rt ou Thisismypassword vous êtes très vulnérables à une telle attaque.
Brute Force Attack - Une attaque de force brute se concentre sur votre mot de passe. Bien qu'un attaquant n'utilisera cette méthode que si vous êtes la seule cible. Lors d'une attaque par force brute, le pirate va essayer toutes les combinaisons possibles de caractères, de chiffres et de symboles jusqu'à ce que l'attaquant accède à votre compte.

L'attaquant combinera très probablement l'attaque par dictionnaire et l'attaque par force brute en essayant d'abord les mots de passe les plus courants avant de passer à la devinette aléatoire.

### À quoi devrait ressembler un mot de passe

Un mot de passe fort doit comporter au moins 12 caractères. Si vous protégez des informations sensibles, utilisez 20 caractères ou plus. Utilisez un mélange de lettres majuscules, de lettres, de chiffres et de symboles réguliers. N'utilisez pas seulement des symboles ou des chiffres pour remplacer des lettres comme pa$$word ou p4ssw0rt. Pour une attaque automatisée, ces mots de passe sont aussi banals que le mot original.

Il y a quelques méthodes que vous pouvez appliquer pour créer un mot de passe fort. La méthode de phrase utilise une phrase familière comme point de départ et applique une sorte d'algorithme pour créer votre mot de passe.

Vous pourriez commencer par "Je suis allé à l'école à Woodland Park et j'ai joué au football à l'automne". Maintenant vous pouvez penser à un algorithme pour créer un mot de passe à partir de cette phrase, comme utiliser les deux premiers caractères de chaque mot, les deux derniers caractères, le premier et le dernier ou toute autre combinaison qui fonctionne pour vous. L'utilisation des deux premiers caractères donnerait "JesualalecaWoPaetjajoaufoalau". Il s'agit d'un mot de passe assez sûr qui survivra à la fois à une attaque par dictionnaire et à une attaque par force brute si l'attaquant ne s'engage pas à 100% envers vous comme cible.

Une autre méthode consiste à utiliser des mots réguliers qui n'ont pas de sens dans cette combinaison “correctchevalbatteriepince” en est un exemple fréquent.

### Comment vous souvenir de tout ça ?

La méthode difficile et moins sûre serait d'ajouter une sorte de code à la fin d'un mot de passe standard, selon le compte pour lequel vous l'utilisez.

Vous pouvez ainsi utiliser "JesualalecaWoPaetjajoaufoalau_fcbk" pour votre compte Facebook et "JesualalecaWoPaetjajoaufoalau_mzn" pour votre compte Amazon. Il y a eu de nombreux incidents de piratage de bases de données de mots de passe et cette méthode vous rendrait vulnérable à une telle violation de données parce que les attaquants pourraient alors dériver vos autres mots de passe s'ils découvrent le schéma que vous avez utilisé.

Une meilleure méthode est d'utiliser un gestionnaire de mots de passe qui génère des mots de passe longs et difficiles à deviner et les enregistre pour vous. Maintenant, vous n'avez plus qu'à vous souvenir d'un seul mot de passe super fort pour protéger votre application de gestion de mots de passe et c'est tout.

Nous avons couvert les gestionnaires de mots de passe dans notre niveau débutant et vous pouvez trouver [l'article ici]({{ site.baseurl }}{% post_url /privacy/beginner/2023-04-06-password-manager %}).

### Résumé

L'utilisation de mots de passe forts est la première étape pour protéger vos données. Utilisez un mot de passe différent pour chaque service pour lequel vous avez un compte.

Les pirates tenteront de mettre la main sur vos mots de passe par le phishing, les attaques par dictionnaire ou par force brute. Votre mot de passe doit comporter au moins 12 caractères, mais 20 est mieux. N'utilisez pas de phrases courantes ou ne vous fiez pas à la simple substitution de lettres par des chiffres ou des symboles.

Il existe de bonnes méthodes pour créer des mots de passe forts comme la méthode des phrases. Pour stocker de manière sécurisée tous vos différents mots de passe, utilisez un [gestionnaire de mots de passe]({{ site.baseurl }}{% post_url /privacy/beginner/2023-04-06-password-manager %}).
