---
layout: post
type: intro
title: "Introducción a la privacidad en la cadena de bloques"
description: "While most cryptocurrencies are public, there are technologies that enable private transactions on a public blockchain."
permalink: /technology/beginner/intro-to-privacy-on-the-blockchain/
topic: technology
level: beginner
chapter: "Privacidad"
further_reads: [how_zcoin_privacy_technology_compares_to_the_competition]
---

Es común pero equivocado pensar que Bitcoin y otras criptomonedas constituyen un método anónimo de pago. En la realidad, el uso criptomonedas es seudónimo, no anónimo.

Para que la transacción fuera anónima, no podría haber información alguna sobre el remitente y receptor de la transacción. Siempre se necesita una dirección para hacer una transacción en una cadena de bloques, pero ya que esta dirección no contiene información alguna sobre el dueño y cualquiera puede genera tantas cuentas como guste, decimos que la dirección es seudónima. Así, tu dirección funciona como seudónimo, de manera similar al nombre de usuario que eligen los miembros de un foro en línea.

A través de métodos de análisis de datos cada vez más poderosos, se ha vuelto posible relacionar identidades reales con direcciones criptomonetarias. Entre más transacciones reciba y envíe un usuario, mayor la cantidad de metadatos generados. Estos metadatos pueden incluir la dirección IP que dio origen a una transacción o los datos de un par de usuarios que se hacen transacciones frecuentemente. Los centros cambiarios pueden también registrar las direcciones que utiliza el usuario para retirar fondos y así relacionar sus direcciones con su identidad.

### ¿Por qué privacidad?

Existen muchas razones legítimas para llevar a cabo transacciones financieras privadas. Por ejemplo, si un usuario padece alguna condición médica y debe comprar sus medicinas de manera regular, tiene una buena razón para hacer sus compras de manera privada. Si se es dueño de un negocio, no es deseable revelarle a la competencia las fuentes de ingresos, o si se le está comprando un regalo a la pareja, el comprador querrá mantener secreta su compra hasta el momento preciso. En fin, hay muchas razones para hacer transacciones privadas, y creemos que la privacidad es y debe considerarse un derecho humano inviolable. En nuestra sección sobre privacidad, tratamos más de cerca el argumento “No tengo nada que ocultar”.
In our privacy section we also take a look at the "I've got nothing to hide" argument.

### Cómo recuperar la privacidad

El primer paso hacia un mayor nivel de privacidad es el uso de una nueva dirección por cada transacción recibida. La mayoría de las billeteras crean nuevas direcciones de manera automática cada vez que el usuario le da clic a “Recibir”. Esto hace más difícil que un tercero agrupe sus transacciones y termine por relacionarlas a su identidad.

Si el usuario desea realizar transacciones en privacidad absoluta, debe utilizar una criptomoneda adecuada con características de privacidad especiales. Horizen ofrece el mayor nivel de privacidad posible gracias a la implementación de pruebas de cero conocimiento.

Una prueba de cero conocimiento permite al usuario demostrarle a un verificador que en efecto cuenta con cierta información pero sin tener que revelársela. Un ejemplo intuitivo y no digital de cómo puede lucir este modelo puede crearse imaginando a una persona vidente (como probador), una persona con los ojos vendados (como verificador) y dos bolas de colores distintos.

La persona vidente (el probador) quiere convencer a la persona de ojos vendados (el verificador) de que las bolas son de distintos colores, pero sin revelarle los colores. Ambos se sientan en una mesa y la persona invidente le muestra al probador una de las bolas. La persona invidente vuelve a esconder las bolas y revela una por segunda vez, ya sea la misma bola o la segunda. Si muestra la misma bola, el probador lo sabe por el color y le transmite esta información a la persona invidente. Si la persona invidente muestra la otra bola, el probador puede saber con confianza que que el verificador (la persona invidente) cambió las bolas debajo de la mesa.

![zkproof in ES](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/ES_zkproof_D.jpg)
![zkproof in ES](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/ES_zkproof_M.jpg)

En la segunda ronda, el probador tiene una oportunidad del 50% de adivinar si tuviera que hacerlo. Tendría que adivinar en caso de que la aseveración que busca comprobar (que las bolas son de diferentes colores) fuera falsa. En este momento de la prueba, la persona invidente no puede estar segura de si la aseveración es correcta o si el probador tuvo suerte.

Si el juego se repite varias veces, la probabilidad de adivinar correctamente todas las veces disminuye exponencialmente. Tras solo diez rondas del juego, la probabilidad de adivinar la bola correcta se reduce al 0.1%. La persona invidente puede entonces estar bastante segura de que las bolas son de colores distintos a pesar de que el probador no ha compartido ninguna información sobre los colores en sí.

El objetivo de utilizar pruebas de cero conocimiento en transacciones criptomonetarias es el siguiente: Puede construirse una prueba de que la transacción que el usuario quiere realizar será considerada válida por un nodo verificador sin revelar ningún dato sobre la transacción en sí. Esto permite que el remitente, receptor y la cantidad se mantengan privados. Otro caso donde resulta perfecta la aplicación de pruebas de cero conocimiento es en la verificación de identidades; por ejemplo, el usuario puede comprobarle a una entidad que tiene una edad determinada sin revelar datos personales como su fecha de nacimiento.

Para realizar transacciones privadas con Horizen, el usuario se valdrá de un tipo de dirección diferente. En la billetera, el usuario tendrá la opción de generar direcciones T (direcciones transparentes) o direcciones Z (direcciones protegidas). Al enviar fondos a una dirección Z, se registran en la cadena de bloques tanto el remitente como la cantidad, pero no la dirección receptora. Si se reenvían estos fondos a una segunda dirección Z, no se registrará información alguna sobre la transacción, ni el remitente, ni el receptor, ni la cantidad.

Si usted quiere poner a prueba esta característica, descargue nuestra aplicación, [Sphere by Horizen](https://www.horizen.global/es/wallets/). Asegúrese de activar el modo completo en la sección de ajustes, de otra manera, no será capaz de generar direcciones Z. 

### Summary

Aunque las criptomonedas no son anónimas por defecto, algunas ofrecen características que hacen posibles las transacciones privadas, lo cual le dificulta a terceros monitorear el historial de las transacciones del usuario. Esta característica es parte íntegra de casi todas las billeteras.
Es posible también utilizar criptomonedas con medidas de privacidad mejoradas, como la de Horizen, para realizar transacciones absolutamente privadas; esto se logra utilizando otro tipo de dirección (una dirección Z).

En el nivel avanzado, abordaremos conceptos adicionales referentes a la preservación de la privacidad del usuario.


