---
layout: post
type: article
title: "¿Qué es el minado? "
description: "Un minero es alguien que observa lo que está sucediendo en la red y registra cada transferencia de dinero."
permalink: /eli5/what-is-mining/
topic: eli5
canonical_link: "/es/technology/advanced/mining/"
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-mining/Mining.jpg" alt="Mining"></td>
        <td>
            El minado es uno de los pasos para lograr <a href="{{ site.baseurl }}{% post_url /eli5/2000-01-07-what-is-consensus %}">consenso</a> usado en una cadena de bloques proof-of-work para establecer el orden de las transacciones.
        </td>
    </tr>
</table> 

Un minero es alguien que observa lo que está ocurriendo en la red y además registra cada transferencia de dinero. Dos mineros diferentes pueden tener opiniones distintas sobre el orden en el que ocurrieron las transacciones. Cada uno registra lo que observó en la red en un [bloque]({{ site.baseurl }}{% post_url /eli5/2000-01-01-what-is-a-blockchain %}), y ya que hay varios mineros en cada cadena, existe una diversidad de opiniones sobre lo ocurrido.

Adicionalmente, depende de los mineros encontrar la solución a un problema particular que puede resolverse solo con grandes cantidades de poder computacional. El primer minero en resolver el problema tiene la oportunidad de agregar el bloque a la cadena. La opinión del minero ganador pasa entonces a ser la verdad aceptada por todos los miembros de la red.

Explicaremos este proceso más a detalle en nuestra [sección principiante de tecnología]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) y posteriormente en nuestra [sección avanzada]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}).