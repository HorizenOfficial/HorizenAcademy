---
layout: post
type: article
title: "El explorador de bloques"
description: "Un explorador de bloques es una herramienta que permite al usuario buscar información en una cadena de bloques, así como un explorador de internet permite el acceso a la información que hay en línea."
permalink: /technology/beginner/block-explorer-introduction/
topic: technology
level: beginner
chapter: "Transacciones"
---

Un explorador de bloques es una herramienta que permite al usuario explorar la cadena de bloques, así como un explorador de internet te permite acceder a la información en la web. Utilizando un explorador el usuario puede consultar cuántas monedas hay guardadas en una dirección específica, con cuántas monedas cuenta actualmente e incluso cuántas monedas ha tenido ese usuario en total (lo cual logra repasando el historial de transacciones de esa dirección). Esto resulta útil cuando un usuario crea una transacción y desea luego consultar su estatus. Tomemos un ejemplo de la vida real:

Esto es lo que puede esperarse al explorar una dirección con un explorador de bloques (la mayoría de ellos funcionan de manera similar). La dirección que se buscó para este ejemplo tomado de un explorador de bloques de Horizen se encuentra en la parte superior: znf7; digamos que esta dirección le pertenece a Bob.

<div class="my-4">
    <img src="/assets/post_files/technology/beginner/block-explorer-introduction/ES_explorer_address_summary.png" alt="Resumen de dirección del explorador">
</div>

En la parte superior de la página, se encuentra un resumen de la actividad de la dirección. La información que aparece incluye la cantidad total recibida y enviada desde esta dirección, así como el saldo actual. La dirección en cuestión ha recibido un total de 42 ZEN. Bob no le ha enviado ningún ZEN a nadie, por lo que aún tiene un saldo de 42 ZEN.

<div class="my-4">
    <img src="/assets/post_files/technology/beginner/block-explorer-introduction/ES_explorer_address_tx.png" alt="Transacción de la dirección en el explorador">
</div>

Todas las transacciones relacionadas a esta dirección pueden encontrarse debajo del resumen de la dirección. Esta cuenta ha participado en una sola transacción hasta ahora. Una transacción se caracteriza por su número de identificación individual, en este caso la secuencia de números azules en la parte superior de la caja gris (a46f…).

Esta transacción cuenta con una entrada (a la izquierda) y dos salidas (a la derecha). Las entradas son lo que se envía, y las salidas lo que se recibe.

Digamos que Bob recibió fondos de parte de Alice. La dirección de Alice aparecerá junto a la entrada en la izquierda, znd3…

Alice contaba con 46.6 ZEN en su dirección, pero solo quería enviarle 42 a Bob. Alice puede lograr esto utilizando su saldo entero de 46.6 ZEN como entrada (izquierda) para crear dos salidas, una con los 42 ZEN que desea enviarle a Bob, y otra con los 4.6 ZEN restantes que desea enviarse a sí misma. Así mismo se pagan $45 en una tienda si el cliente solo tiene un billete de $50. Se entregan los $50 y se esperan $5 de regreso. A la parte de la transacción que envía los 4.66 ZEN de vuelta a la dirección de origen se le llama cambio en el ámbito criptomonetario.

Discutiremos el concepto de entradas y salidas en el siguiente nivel con la introducción del modelo UTXO (salida de transacciones no utilizadas). Por ahora, quedan aún tres informaciones importantes que presentar:

 - El remitente agregó una comisión por transacción de 0.0001 ZEN. Estas comisiones se implementan como una medida para evitar el spam.
 - El número de confirmaciones revela la edad de una transacción. Cada bloque que sea crea (mina) después de una transacción y se incluye en la cadena de bloques se considera una confirmación de esa transacción.
 - Existe un volumen total de la transacción.

Lo animamos a regresar a nuestro [explorador de bloques](https://explorer.zen-solutions.io/) para que empiece a descubrir sus funcionalidades. La página de inicio le mostrará las transacciones más recientes en tiempo real si aún no cuenta con una dirección para empezar a explorar. Solo elija una dándole clic para poder visualizar las cuentas relacionadas. Puede empezar a explorar de ahí.
