---
layout: post
type: article
title: "Qu'est-ce qu'une fonction de hachage?"
description: "Une fonction de hachage est quelque chose que nous utilisons pour créer l'empreinte digitale d'un fichier."
permalink: /eli5/what-is-a-hash-function/
topic: eli5
further_reads: [hashing]
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-a-hash-function/Hash.jpg" alt="Cryptocurrency"></td>
        <td>
            Une fonction de hachage est quelque chose que nous utilisons pour créer l'empreinte digitale d'un fichier. Vous pouvez utiliser une fonction de hachage pour créer une empreinte digitale pour tout type de fichier.
        </td>
    </tr>
</table>   

Disons que je veux vous envoyer un fichier texte et que je ne veux pas que vous le changiez. Je pourrais utiliser une fonction de hachage pour créer une empreinte digitale du texte avant de vous l'envoyer.

Lorsque vous m'envoyez de nouveau le fichier texte, je pourrais utiliser à nouveau la fonction de hachage pour créer une deuxième empreinte digitale. Si les deux empreintes digitales correspondent, vous n'avez rien changé dans le fichier. Si les empreintes ne correspondent pas, je sais que vous avez modifié le texte.

Dans une blockchain, nous utilisons des fonctions de hachage pour créer une empreinte digitale de l'historique des transactions. Si quelqu'un trompe le système et modifie le relevé de transactions après coup, tout le monde s'en apercevra parce que les empreintes digitales de l'historique des transactions avant et après la manipulation ne correspondent plus.

Nous expliquons les fonctions de hachage dans notre [Section Technologie Avancé]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}).