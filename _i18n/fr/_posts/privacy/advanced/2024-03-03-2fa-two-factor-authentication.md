---
layout: post
type: article
title: "2FA - Authentification à deux facteurs"
description: "Une autre pratique exemplaire que nous vous encourageons à utiliser est l'authentification à 2 facteurs ou 2FA. Cet article explique ce qu'est la 2FA et pourquoi elle est importante."
permalink: /privacy/advanced/2fa-two-factor-authentication/
topic: privacy
level: advanced
chapter: "Les bonnes pratiques"
further_reads: [how_to_set_up_2fa_using_google_authenticator, simplify_and_secure_your_online_logins_with_a_yubikey]
---

L'authentification à deux facteurs ou, en abrégé, 2FA est un moyen donné aux utilisateurs pour accéder à un service en utilisant une combinaison de deux méthodes d'authentification. Il peut s'agir d'un code PIN supplémentaire ou d'un mot de passe, d'un mot de passe unique (OTP: One-time Password), d'une empreinte digitale ou autres données biométriques ou également d'une puce ou d'un jeton de sécurité supplémentaire dans votre appareil.

Nous utilisons déjà la 2FA dans la vraie vie. Un exemple notable est l'utilisation d'un guichet automatique pour retirer de l'argent à l'aide d'une carte de débit et d'un code PIN. Cependant, de nombreux services n'utilisent qu'une authentification à un seul facteur pour l'identification de l'utilisateur et ce facteur est évidemment un mot de passe.

La bonne nouvelle, c'est que presque tous les services du monde de la blockchain ont une 2FA optionnelle intégrée. C'est devenu un standard de fait dans ce domaine. L'activation de la 2FA est l'une des meilleures pratiques de sécurité que vous puissiez employer car elle vous protège même en cas de piratage au niveau de la plateforme lorsque les mots de passe sont exposés. Bien sûr, si l'on considère que la plateforme elle-même a la 2FA correctement implémentée. La 2FA fonctionne en vous demandant de prouver votre identité par une méthode d'authentification secondaire en plus de votre mot de passe. Le plus souvent, la méthode secondaire d'authentification est un message SMS envoyé à votre numéro de téléphone ou un code généré sur une application dédiée, comme Microsoft Authenticator, Google Authenticator ou autres.

![2FA](/assets/post_files/privacy/advanced/2fa/FR_2fa_D.jpg)
![2FA](/assets/post_files/privacy/advanced/2fa/FR_2fa_M.jpg)

### La 2FA par messages texte (SMS)

Nous vous conseillons de ne pas utiliser les SMS comme méthode 2FA si possible. Il y a plus d'une façon pour un attaquant d'accéder aux messages texte ou aux appels que votre téléphone reçoit.

La première méthode qui est aussi la plus simple est l'ingénierie sociale. Il y a eu un certain nombre d'incidents où un attaquant a réussi à convaincre un employé d'une société de communication mobile que "son" téléphone s'était perdu ou que la carte SIM était cassée et qu'il fallait le remplacer immédiatement. Par coïncidence, le "client" vient de déménager et il doit changer d'adresse. L'entreprise expédie ensuite la deuxième carte SIM à l'attaquant. Bien qu'il soit peu probable que cet exploit fonctionne au premier essai, en appelant à plusieurs reprises l'attaquant peut trouver un téléconseiller qui accédera à sa demande.

Une autre méthode que l'attaquant peut utiliser est d'ouvrir un compte chez un autre fournisseur de services et de demander la portabilité de votre numéro. La plupart des fournisseurs vous proposent de garder votre numéro si vous passez d'un opérateur à un autre (de Free à Orange par exemple). Cela ouvre ce vecteur d'attaque simple mais efficace. Nous pourrions continuer avec la liste des exploits possibles, mais le fait est que votre numéro est une cible plutôt facile.

### Les application 2FA

L'utilisation d'une application de génération de code séparée est importante car vous pouvez l'utiliser hors ligne ou dans un autre pays sans activer un service d'itinérance.

La 2FA a un inconvénient. Vous en devenez dépendant, et comme votre coffre-fort de gestion de mots de passe, vous devez faire attention à ne pas perdre votre dispositif qui permet la 2FA qui, dans la plupart des cas, est votre smartphone. Heureusement, de nombreuses applications et services 2FA offrent un moyen de sauvegarder l'application elle-même ou de conserver un code de sauvegarde pour le service lui-même afin que vous ne soyez pas verrouillé pour toujours.

Si vous ne faites pas confiance à une application Google pour prendre soin de votre 2FA, il existe un grand nombre d'applications similaires. Si vous voulez aller plus loin, vous pouvez utiliser un périphérique matériel tel que la
 [YubiKey](https://www.yubico.com/) ou même le hardware wallet du Ledger qui peut stocker vos cryptomonnaies, ainsi que vous fournir des capacités 2FA via [FIDO U2F](https://support.ledger.com/hc/en-us/articles/115005198545-FIDO-U2F).

 Il existe de nombreux guides écrits et didacticiels YouTube sur la façon de mettre en place les différentes méthodes 2FA qui existent. Vous trouverez ci-dessous un guide pour l'application Google Authenticator ainsi que pour la YubiKey.

 La plupart des méthodes offrent un moyen de restaurer vos codes 2FA, au cas où vous supprimiez accidentellement l'application, ou que votre téléphone se casse. Assurez-vous de vous familiariser avec la procédure de sauvegarde de la méthode de votre choix avant de commencer à l'utiliser, afin de ne pas être pris au dépourvu dans une telle situation et de perdre l'accès à vos comptes.

### Résumé

L'activation de la 2FA avec tous les comptes qui la supportent améliore considérablement la sécurité. Essayez de ne pas utiliser les SMS comme méthode 2FA, car c'est une méthode vulnérable avec de nombreux vecteurs d'attaque. Utiliser une application 2FA ou même un périphérique matériel est un meilleur choix. N'oubliez pas de créer des sauvegardes pour la méthode que vous avez décidé d'utiliser. 
