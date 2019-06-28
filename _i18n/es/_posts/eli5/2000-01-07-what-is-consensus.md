---
layout: post
type: article
title: "¿Qué es el consenso?"
description: "El mecanismo de consenso asegura que toda la red acuerde un único historial de transacciones."
permalink: /eli5/what-is-consensus/
topic: eli5
further_reads: [consensus_for_kids]
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-consensus/Consensus.jpg" alt="Consensus"></td>
        <td>
            La <a href="{{ site.baseurl }}{% post_url /eli5/2000-01-01-what-is-a-blockchain %}">cadena de bloques</a> registra todas las transferencias de dinero. Si el usuario cuenta con solo un ZEN y crea dos transacciones simultáneas gastando la misma moneda, es deber de la red determinar cuál de las dos sucedió primero y por ende la válida.
        </td>
    </tr>
</table> 

El mecanismo de consenso se asegura de que la red entera determine cuál es el orden correcto de las transacciones. Cada varios minutos, cuando un nuevo bloque se agrega a la cadena de bloques, la red se pone de acuerdo respecto al orden de las transacciones más recientes. De esta manera, nadie puede engañar al sistema y gastar más de lo que posee.

Hay varias maneras de lograr consenso en una [red de par a par]({{ site.baseurl }}{% post_url /eli5/2000-01-06-what-is-a-peer-to-peer-network %}). En la cadena de bloques de Horizen, los usuarios votan por medio de su poder computacional para determinar el orden de las transacciones. Si la computadora de un usuario es el doble de rápida que la de otro, ese usuario tiene una oportunidad dos veces mayor de decidir el orden.