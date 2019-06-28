---
layout: post
type: article
title: "La cadena como protocolo para transferir valor"
description: "Comparamos la cadena de bloques como protocolo para transferir dinero con el internet como protocolo para transferir información."
permalink: /technology/beginner/a-protocol-to-transfer-value/
topic: technology
level: beginner
chapter: "¿Qué es una cadena de bloques?"
further_reads: [why_bitcoin_lightning_network_is_ingenious, explain_bitcoin_like_im_five, money_as_language]
---

Una de las grandes innovaciones de la cadena de bloques es su función como protocolo para transferir valor. Andreas Antonopoulos describió a Bitcoin como “un lenguaje para comunicar valor”, una declaración que tiene mucho de cierto.

Una analogía útil para entender este concepto es la de un servicio de correos. Haciendo de lado a la oficina de correos como la entidad central que opera el servicio, es posible considerar lo siguiente:
  
El correo es un sistema sin permisos en el sentido de que cualquiera puede enviar una carta con solo encontrar un buzón y depositar la carta, la cual llegará a su destino algunos días después. No se necesita el permiso de nadie para poder hacerlo.

El protocolo para enviar una carta se compone de dos requisitos: primeramente, se debe poner en la carta un sello o estampilla de valor suficiente y por último, se debe indicar la dirección del destinatario. El formato estándar de una dirección es nombre, dirección y país (en caso de que la carta vaya al extranjero).

Cuando una criptomoneda opera en una cadena de bloques, la red —un servicio descentralizado como el del correo— se encarga de entregar la transacción —carta— al destinatario. El protocolo exige una pequeña tarifa por transacción —estampilla— y que se proporcione la información necesaria de forma estandarizada: dirección, dirección del beneficiario, cantidad a transferir y firma del usuario.

![Mail protocol in ES](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/ES_mail_protocol_D.jpg)
![Mail protocol in ES](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/ES_mail_protocol_M.jpg)

Las direcciones de una cadena de bloques son diferentes a las empleadas por el servicio de correos. La dirección de una, por ejemplo, cadena se ve así: 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX.
Las firmas también funcionan de manera diferente a lo esperado, pero los aspectos clave de las direcciones y firmas no se discutirán en los siguientes artículos de esta sección, así como las [billeteras]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) que crean direcciones y envían transacciones criptomonetarias.

### Resumen

Es posible considerar al sistema de correos como un protocolo para transferir bienes físicos, mientras que el internet, con su protocolo TCP/IP subyacente, permite al usuario transferir información. La tecnología blockchain y criptomonedas le dan al usuario un protocolo para poder transferir valor sin intermediarios. Discutiremos el aspecto de una transacción y los datos necesarios para completarla en nuestro [artículo dedicado a las transacciones]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-intro-to-transactions %}).

Por ahora, sin embargo, es momento de descubrir [cómo funciona una cadena de bloques]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}).

