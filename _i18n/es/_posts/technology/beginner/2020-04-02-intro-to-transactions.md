---
layout: post
type: article
title: "Introducción a las transacciones"
description: "We give you an analogy to keep in mind when thinking about what a cryptocurrency transaction is and how it works."
permalink: /technology/beginner/intro-to-transactions/
topic: technology
level: beginner
chapter: "Transacciones"
---

En el primer artículo de nuestra sección sobre tecnología, [¿Qué es una cadena de bloques?]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-02-blockchain-as-a-data-structure %}), mencionamos que la cadena de bloques es como un libro contable público que mantiene un registro de todas las transacciones que han ocurrido dentro de una red. En el artículo sobre [identidad en la cadena de bloques ]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}) explicamos que cada usuario se identifica por medio de un par de llaves individual. Por último, mencionamos que [la billetera es un programa]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) que ayuda al usuario a administrar sus llaves y crear transacciones. 

En este artículo presentaremos un concepto útil de recordar al pensar en las transacciones con criptomonedas y cómo funcionan. Desglosaremos este concepto por medio de una analogía que sacrifica un poco la precisión a favor de la facilidad de comprensión.

![Mailboxes in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/mailboxes.png)

Puede pensarse en una cadena de bloques como un conjunto de buzones que se encuentra dentro de un complejo de departamentos. Estos buzones, sin embargo, tienen algunas características especiales.

Primero, no existe solo una versión de cada buzón, sino que cuenta con un gran número de copias alrededor del mundo. Todas las copias del buzón son idénticas, no solo en su estructura sino también en su contenido individual. Todo cuanto se agregue al buzón se agregará a sus demás versiones. Si un usuario ejecuta un nodo completo, incluso contará con una copia completa del buzón en casa.

Los buzones pueden accederse desde donde sea, en cualquier momento, mientras se cuente con una conexión a internet. Este conjunto de buzones representará la cadena de bloques o libro contable.

### Una dirección como un buzón individual

Consideremos ahora cada buzón individualmente. Explicamos ya en artículos anteriores que la identidad del usuario en una cadena de bloques consta de un par de llaves, una pública y otra privada. Estas llaves siempre se encuentran en conjunto. Dentro de nuestra analogía, cada buzón individual es la representación de un par de llaves.

![Empty in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T1_empty_D.jpg)
![Empty in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T1_empty_M.jpg)


En lugar de enumerar los buzones, estos se identifican mediante su par de llaves. Cualquier usuario puede encontrar un buzón en específico utilizando la llave pública o dirección, pero este se puede abrir solo con la llave privada.

**Nota**: Hay una ligera diferencia entre las naturalezas de una dirección y una llave pública, pero por ahora, las consideramos lo mismo. Se detallará la diferencia en el [nivel avanzado]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-04-public-key-cryptography %}) de este mismo tema.

Para que la analogía funcione, es necesario imaginar que el buzón está construido de un material transparente. Nadie más que el dueño del buzón, quien posee el par de llaves, puede abrirlo. Sin embargo, cualquiera puede ver lo que se encuentra dentro, una propiedad que retomaremos al hablar sobre el explorador de bloques.

Resumamos lo visto hasta ahora, primero utilizando los términos de la analogía del conjunto de buzones, y después utilizando terminología propia del ámbito blockchain:

La dirección permite al usuario encontrar un buzón individual del conjunto y depositar la entrega. De la misma manera, la llave pública permite al usuario ubicar una cuenta determinada dentro de la cadena de bloques para enviarle una transacción.

### La primera transacción del usuario

Usted se encontrará del lado receptor de su primera transacción, de otra manera, no podría tener fondos para transaccionar con criptomonedas. Analicemos esta primera transacción a partir de la analogía previamente planteada.

La transacción en la que usted recibe sus primeros fondos es un mensaje propagado en la red que queda registrado en todas las copias del libro contable. De ahora en adelante habrá un nuevo buzón en el conjunto con un mensaje dentro que representa la posesión de cierto número de fondos. Si se ha creado el par de llaves en la billetera y la llave pública es “AbC1”, será necesario proporcionarle esa llave o dirección al remitente de sus primeros fondos. Ese remitente bien podría ser el centro cambiario donde el usuario compró su primer ZEN, o simplemente un amigo suyo enviándole algunas monedas.

Los siguientes pasos del proceso resultan bastante sencillos de comprender:

La dirección del usuario se utilizará para crear un nuevo buzón en el conjunto. Después de esto, se introduce la primera transacción al buzón.

La transacción es visible para todos, pero solo el dueño de la llave privada correspondiente puede acceder a los fondos.

![Received in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T2_received_D.jpg)
![Received in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T2_received_M.jpg)

### Creando la primera transacción

Puede ser que ahora quiera transferir los fondos que posee en la cadena de bloques a otra dirección. Antes que nada, necesitará la llave pública o dirección del receptor. Digamos que en este caso XyZ9.

Para enviar fondos a esta dirección, sucede lo siguiente:

 - La llave pública ubica el buzón correspondiente.
 - La billetera utiliza la llave privada para abrir el buzón con la primera transacción.
 - La billetera ubica el buzón del receptor utilizando su dirección o llave pública.
 - La billetera introduce la transacción recién creada al buzón del receptor. 

![Sent in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T3_sent_D.jpg)
![Sent in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T3_sent_M.jpg)

Todos los participantes de la cadena de bloques tienen la capacidad de ver (o validar) que un usuario le ha transferido fondos a un tercero, pero solo este puede accederlos utilizando la llave privada correspondiente. Una vez que la transacción se envía, no hay manera de cambiarla o revertirla. Esto significa que el usuario debe siempre cerciorarse de estar enviando los fondos a la cuenta correcta. De ser posible, se recomienda utilizar la función de copiar y pegar en lugar de teclear manualmente una dirección y revisar los números por separado. Si se envían fondos por accidente a la persona equivocada, no hay manera de recuperarlos.

Es momento ahora de retomar una declaración hecha en el artículo sobre billeteras. Ahí, mencionamos que no se almacenan fondos en la billetera, sino solo las llaves para acceder a ellos. Esperamos que esto tenga mayor sentido ahora, y que quede claro que es la cadena de bloques en sí la que almacena todas las transacciones. Si se tienen 5 ZEN, esto quiere decir que existe una entrada en la cadena que dice “El usuario X ha enviado 5 ZEN a tu dirección”. Las criptomonedas son entradas en el libro contable, y por lo tanto no se pueden almacenar fondos en la billetera, sino solo las llaves que permiten localizarlos para crear una transacción. Así pues, conviene más visualizar la billetera digital como un llavero que como una cartera.

### Resumen

La cadena de bloques en sí es un registro de todas las transacciones que se han llevado a cabo en ella, las cuales se registran públicamente por muchos participantes. Cada transacción es una entrada única en este registro. Para recibir una transacción es necesario proporcionarle la llave pública (o dirección) al remitente, y el usuario debe abrir su billetera con su llave privada cuando desee gastar sus fondos.

En nuestra analogía, cada buzón era transparente, por lo que todos pueden ver lo que hay dentro. Además, no solo es posible ver los contenidos actuales del buzón, sino también todo lo que contuvo anteriormente.

En nuestro próximo artículo, se introducirá el concepto del explorador de bloques. Un explorador de bloques es el equivalente a un explorador de internet, pues permite al usuario acceder toda la información almacenada de manera pública en la cadena de bloques. Si quiere poner manos a la obra, le sugerimos poner a prueba [esta demostración](https://coindemo.io/), la cual hace posible crear transacciones de prueba y mucho más.
