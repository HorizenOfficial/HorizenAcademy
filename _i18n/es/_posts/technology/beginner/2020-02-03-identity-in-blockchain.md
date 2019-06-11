---
layout: post
type: article
title: "Identidad en la cadena de bloques"
description: "Aquí discutiremos cómo entran en juego las criptomonedas en la cadena y cómo se relaciona a todos esto la identidad del usuario, pues no puede haber propiedad sin identidad."
permalink: /technology/beginner/identity-in-blockchain/
topic: technology
level: beginner
chapter: "¿Cómo funciona una cadena de bloques?"
further_reads: [the_impact_of_digital_identity, how_blockchain_can_solve_identity_management_problems]
---

En el artículo pasado concluimos que los mineros funcionan como los contables de una criptomoneda; mantienen el registro de cuántos fondos hay y de quién es dueño de esos fondos. Ahora se introducirá el concepto de identidad para demostrar propiedad. Evidentemente, todo usuario quiere ser el único dueño de sus fondos, por lo que debe haber una manera de asociar una moneda con su propietario. Es aquí que la criptografía entra en en juego.

### Criptografía de llave pública

Uno de los principios que permiten funcionar a las criptomonedas es el de _criptografía asimétrica_, también conocida como _criptografía de llave pública_.

Con la criptografía simétrica, uno encripta y desencripta un texto con la misma llave.

![Symmetric in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_symmetric_D.jpg)
![Symmetric in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_symmetric_M.jpg)

En el caso de la criptografía asimétrica, el usuario encripta y desencripta con dos llaves diferentes: la llave pública y la llave privada. Las llaves existen siempre en pares, si se encripta un mensaje con la llave pública este debe ser desencriptado con la llave privada correspondiente y viceversa. Así de simple; el par de llaves es tu identidad en la cadena de bloques.

![Asymmetric in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_asymmetric_D.jpg)
![Asymmetric in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_asymmetric_M.jpg)

### El par de llaves como identidad del usuario

La idea detrás de las criptomonedas es que el usuario pueda recibir fondos con su llave pública y gastarlos con la privada. No en vano se les dio ese nombre a ambas llaves. Es completamente seguro compartir la llave pública con alguien que desee enviar fondos. Por otra parte, la llave privada, como el nombre sugiere, debe permanecer secreta en todo momento, pues permite la utilización de fondos. Si un usuario obtiene la llave privada de otro, obtiene la capacidad de acceder y robar tus fondos.

La comparación más común con un concepto cotidiano es la de igualar la llave pública a una dirección domiciliaria, la cual puede compartirse a cualquiera que quiera enviar una carta. La llave privada es como la llave del buzón. Solo con esta llave se puede acceder al correo, y no sería lógico entregarle la llave a un desconocido. Para información a detalle sobre este concepto, puede encontrarse otra explicación en el nivel avanzado y una exacta en el nivel experto.
Una **transacción** es un mensaje estandarizado para la red. El mensaje incluye la cantidad de fondos que el usuario desea enviar así como el destinatario de los fondos. Posteriormente, esta información se encripta con la llave privada del usuario, un paso conocido _como firma, o firma de la transacción_.

![Signing in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_signing_D.jpg)
![Signing in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_signing_M.jpg)

Una firma digital funciona de manera similar a la autorización de transacciones en la vida real utilizando tu firma física. Aun con las supercomputadoras de la actualidad, no es viable intentar falsificar este tipo de firma digital, por lo que la criptografía de llave pública es uno de los medios de encriptación más seguros actualmente disponibles.

Todo esto sería difícil de hacer de manera manual y requeriría una buena cantidad de conocimientos. Por suerte, existen las billeteras, las cuales realizan todo el proceso sin necesidad de que el usuario entienda lo entienda. Las billeteras generan y administran el par de llaves (pública y privada) y hacen lo necesario para encriptar y desencriptar. Es importante recalcar que la llave privada del usuario autoriza el gasto de sus fondos. Mantenerla segura es de suma importancia. Perder las llaves es perder los fondos asociados, y una vez perdidas no pueden recuperarse.

### Resumen

El par de llaves funge la identidad de una persona en la cadena de bloques. La llave pública es como una dirección de correo electrónico y se utiliza para recibir fondos. Mientras tanto, la llave privada es como una contraseña que permite acceder y administrar los fondos asociados a la llave. Es de suma importancia cuidar, proteger y nunca compartir la llave privada. Si alguien se encuentra pidiendo llaves privadas ajenas, seguramente busca llevar a cabo algún tipo de estafa.