---
layout: post
type: article
title: "El modelo UTXO"
description: "La mayoría de las cadenas de bloques emplean el modelo UTXO (Unspent Transaction Output) para rastrear los fondos de un usuario. Aquí explicaremos cómo funciona."
permalink: /technology/advanced/the-utxo-model/
topic: technology
level: advanced
no_alternate: true
chapter: "Transacciones"
---

Antes de explicar cómo funcionan las transacciones (TX) en la cadena de bloques y qué tipos de transacciones hay, es necesaria una presentación al modelo UTXO (Unspent Transaction Output model).

Pensar en la manera en la que el banco realiza la contabilidad de una cuenta resulta bastante intuitivo. El cuentahabiente posee cierta cantidad de fondos en su cuenta, la cual tiene a su vez un número. Si se recibe una transacción, la cantidad se agrega al saldo. Si se gasta dinero, la cantidad gastada se deduce del saldo. En el caso de las criptomonedas, la contabilidad se hace de una manera un poco diferente.

La cadena de bloques nunca crea una cuenta para que sus usuarios mantengan saldos. No hay un balance final almacenado en el libro contable. La cadena únicamente sirve para almacenar transacciones individuales, por lo que el usuario debe tomar un paso adicional para consultar su saldo. Este paso involucra el uso de la billetera, la cual muestra el saldo del usuario con solo abrirla. El saldo se puede consultar también de manera manual utilizando el explorador de bloques.

Lo que sucede de fondo cuando el usuario utiliza cualquiera de estas herramientas es que buscan en el libro contable todas las transacciones relacionadas a las direcciones del usuario. La billetera (o explorador) pasa luego a sumar las transacciones entrantes y sustraer todas las salientes para determinar el saldo actual.

![wallet]({{site.baseurl}}/assets/post_files/technology/advanced/4.1-the-utxo-model/wallet_balance_Int_D.jpg)
![wallet]({{site.baseurl}}/assets/post_files/technology/advanced/4.1-the-utxo-model/ES_wallet_balance_Int_M.jpg)

Cada transacción en la cadena de bloques tiene una o más entradas y una o más salidas. Analicemos un ejemplo real por medio de una serie de cuatro transacciones:

Generalmente, el explorador de bloques arroja primero las transacciones más recientes. Revisaremos las transacciones de este ejemplo al revés, empezando por la más antigua para ver paso a paso la evolución de esta dirección en particular.

### Un ejemplo

![TX]({{site.baseurl}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX1.png)

Creamos este ejemplo que solo involucra dos direcciones diferentes, y acortamos la extensión de las direcciones para mejorar la lectura. La dirección que nos concierne en este caso es la gris, znRwe… Digamos que esta le pertenece a Bob y que la otra, la azul, es de Alice.

En la primera TX (arriba), la dirección de Bob se fondea cuando recibe 10.2 ZEN. La TX individual tiene una entrada y dos salidas. La primera salida (10.2 ZEN) es la cantidad que Alice quería transferir a Bob; la segunda salida es el cambio. La entrada que Alice utilizó fue la salida de la transacción que recibió anteriormente. Cuando tenía sus fondos aún intactos, era un UTXO. Si la salida de una transacción ya se gastó se indica con una (S) junto a la cantidad, si no se ha gastado se indica con una (U); conceptos que retomaremos más adelante. Alice no tenía un UTXO que fuera de exactamente 10.2 ZEN, por lo que usó uno mayor y se envió los ZEN restantes de vuelta. Recibir cambio en una tienda funcionaría de la misma manera si fueran a pagarse $45 con un billete de $50.

![TX]({{site.baseurl}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX2.png)

En esta segunda transacción, Bob utiliza su UTXO de 10.2 ZEN para crear una TX en la que gasta 5 ZEN y envía 5.1999 ZEN de vuelta a su propia dirección. La diferencia entre entradas y salidas se consume como una tarifa de transacción. Ahora Bob es dueño de 5.1999 ZEN en su dirección znRwe…

![TX]({{site.baseurl}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX3.png)

En una tercera transacción, Bob recibe otros 2 ZEN, aumentando su saldo a 7.1999 ZEN. Tiene ahora dos UTXO a su disposición para transacciones posteriores; una de 5.1999 ZEN y otra de 2 ZEN. Si Bob abriera su billetera, vería un saldo de 7.1999 ZEN, el cual resulta de revisar de todas las transacciones de la caden de bloques, filtrar las que involucran su dirección y luego sumar las transacciones entrantes y restar las salientes.

![TX]({{site.baseurl}}/assets/post_files/technology/advanced/4.1-the-utxo-model/TX4.png)

En la última imagen de esta transacción, Bob quiere gastar 6 ZEN. Ninguno de los UTXO que posee es suficiente para dicha transacción. Aunque el explorador de bloques muestra solo una salida para la última transacción, la billetera en realidad utilizo dos entradas para crearla. Combino ambos UTXO, con un valor de 7.19999 y creó dos salidas con la cantidad combinada: los 6 ZEN de salida que quería gastar y los 1.1998 ZEN de cambio (1.999 menos la tarifa de transacción).

Es posible observar que ambas TX se han gastado, un estatus indicado por la (S) a su lado en la segunda y tercera capturas de pantalla.

### Resumen

La mayoría de las cadenas de bloques emplean el modelo UTXO para llevar a cabo su contabilidad. Hay algunas excepciones, como Ethereum, el cual utiliza un modelo de cuentas. La salida de una transacción dirigida al usuario es lo que este utilizará como entrada para crear una transacción de salida.

Cuando alguien pregunta qué es en realidad un ZEN o un bitcoin, resultaría adecuado responder que las monedas consisten de la salida de una transacción no gastada (o UTXO), la cual puede abrirse con la llave privada. No hay mayores abstracciones por encima de esto. Puede tomar un momento familiarizarse con esta manera de ver las cosas, pero es también un concepto claro y preciso. Esperamos que el ejemplo anterior lo haya ayudado a comprender la naturaleza de un modelo UTXO, pues esto hará mucho más fácil la comprensión de los siguientes artículos.

El siguiente artículo trata sobre el explorador de bloques, una herramienta que permite al usuario acceder a la información almacenada en la cadena de bloques al igual que un explorador le permite acceder a la información del internet (fue con un explorador de bloques que tomamos las capturas de pantalla que utilizamos como ejemplos).

Lo exhortamos a experimentar con el explorador visualizando algunas transacciones para profundizar su comprensión del modelo UTXO y de las cadenas de bloques en general.
