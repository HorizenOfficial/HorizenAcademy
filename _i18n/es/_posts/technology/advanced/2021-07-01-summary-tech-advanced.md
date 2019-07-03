---
layout: post
type: intro
title: "Resumen de nivel avanzado"
description: "Terminamos el nivel avanzado de nuestra sección de tecnología blockchain con un resumen de todos los capítulos anteriores."
permalink: /technology/advanced/summary/
topic: technology
level: advanced
chapter: "Resumen"
---

En este último artículo del nivel avanzado sobre tecnología nos gustaría resumir todos los temas y conceptos que cubrimos a lo largo de este nivel.

### ¿Qué es una cadena de bloques?

En nuestro primer capítulo abordamos la cadena de bloques desde tres perspectivas diferentes. Primero, asumimos la perspectiva de un informático para describir a [la cadena como una estructura de datos]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-01-02-blockchain-as-a-data-structure %}). Una cadena de bloques es como una lista enlazada, una estructura de información común con la diferencia de que las referencias que enlazan a los bloques individuales se aseguran criptográficamente. Esto hace inviable el alterar la información registrada en la blockchain.

![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_blockchain_broken_D.jpg)
![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_blockchain_broken_M.jpg)

Segundo, nos acercamos a la cadena como un [protocolo para transferir valor]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-01-03-a-protocol-to-transfer-value %}). Hay muchos protocolos de red diferentes que permiten a los dispositivos comunicarse de manera estandarizada. Sin estos estándares, les sería difícil a los desarrolladores e ingenieros desarrollar software y hardware interoperable. La cadena de bloques es un nuevo tipo de protocolo que estandariza la manera en la que sus usuarios pueden intercambiar valor por internet sin tener que involucrar a ningún intermediario como un banco o proveedor de servicios de pago como PayPal.

![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/ES_protocols_D.jpg)
![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/ES_protocols_M.jpg)

Por último, introdujimos el concepto de los [contratos inteligentes]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-01-04-guaranteed-execution-with-smart-contracts %}). Los contratos inteligentes son programas que se almacenan y ejecutan en la cadena de bloques. Estos programas aseguran la ejecución objetiva del contrato con base en términos acordados mutuamente y hechos valer por el código. Este tipo de contrato tiene el potencial de reducir el número de intermediarios, reduciendo costos y ahorrando tiempo. Sin embargo, antes de que pueda darse la adopción generalizada de estos contratos, deben superarse obstáculos como el problema del oráculo, el cual describe la dificultad de ingresar a la cadena de bloques un dato relacionado al mundo real de manera confiable.

![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_oracle_D.jpg)
![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_oracle_M.jpg)

### ¿Cómo funciona la cadena de bloques?

En el segundo capítulo, repasamos los diferentes elementos de la cadena de bloques antes de verlos a detalle. Los primeros dos conceptos que presentamos fueron los de funciones hash y criptografía de llave pública. Mientras que las [funciones hash]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-03-hash-functions %}) se utilizan para verificar la integridad de los datos, la [criptografía de llave pública]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-04-public-key-cryptography %}), el otro pilar de la tecnología blockchain, se emplea para verificar propiedad dentro de la cadena.

![How it works](/assets/post_files/technology/advanced/public-key-cryptography/ES_how_it_works_D.jpg)
![How it works](/assets/post_files/technology/advanced/public-key-cryptography/ES_how_it_works_M.jpg)

Tratamos luego el tema de las [redes par a par]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-05-a-peer-to-peer-p2p-network %}) distribuidas. Hay miles de nodos que conservan una copia de la cadena de bloques, en el caso de nuestra red de nodos, más de 25 mil. Junto con la estructura de datos criptográficamente asegurada, esta multiplicidad de nodos hace de las cadenas de bloques un sistema muy robusto. Si uno de los pares del usuario se desconecta, solo es necesario conectarse a otro. Si el usuario está encargado de un nodo pero no ha estado en línea, basta con que se reconecte en algún momento y que sus pares lo pongan al corriente de los bloques faltantes para que su nodo se vuelva completamente operacional de nuevo.

![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/ES_central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/a-peer-to-peer-p2p-network/ES_central-distri_M.jpg)

El [mecanismo de consenso]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-06-consensus-mechanisms %}) de una cadena de bloques le permite a la red ponerse de acuerdo sobre una sola versión del historial. En el caso de una blockchain criptomonetaria, el historial es el orden en el que sucedieron las transacciones dentro de la red. Los dos mecanismos de consenso más utilizados son la prueba de trabajo, o proof of work (PoW) y la prueba de participación, o proof of stake (PoS). Ambos comparten la característica de que el poder de votación depende de un recurso limitado. Para una cadena de bloques PoW, el recurso limitado es el poder computacional, en el caso de una cadena PoS es la posesión de la divisa nativa de la cadena. Mientras que las cadenas PoW han demostrado ser robustas durante mucho tiempo (dimos el ejemplo de Bitcoin), las cadenas PoS deben aún comprobar que pueden alcanzar la misma robustez.

![Comparing POW and POS](/assets/post_files/technology/advanced/consensus-mechanisms/ES_compare_D.jpg)
![Comparing POW and POS](/assets/post_files/technology/advanced/consensus-mechanisms/ES_compare_M.jpg)

En el último artículo sobre el funcionamiento de las cadenas de bloque, discutimos el concepto de [minado]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-02-07-mining %}) dentro de una cadena PoW. Los mineros protegen a la cadena de bloques contra cualquier ataque y al historial registrado de todo cambio. Agregar un bloque a la cadena de bloques requiere un gran número de intentos aleatorios para encontrar un nonce que produzca un hash de bloque válido. El hash del bloque debe satisfacer el nivel de dificultad actual de la red. Gracias a esto, resulta extremadamente complicado alterar los datos de la cadena de bloques. Si alguien deseara lograrlo, tendría que hacerlo por sí mismo, no solo repitiendo todo el trabajo ya hecho, pero también a un paso más rápido que todos los mineros honestos combinados.

Los mineros se encuentran en una competencia, y sus probabilidades de encontrar el próximo bloque depende del poder computacional que controlan. Un minero recibe monedas recién creadas como recompensa por su trabajo. El que una red distribuida puede pagar a sus participantes por su propio mantenimiento es una gran innovación introducida por Bitcoin.

![Miner](/assets/post_files/technology/advanced/mining/ES_miner_D.jpg)
![Miner](/assets/post_files/technology/advanced/mining/ES_miner_M.jpg)

### Billeteras

Le dedicamos el tercer capítulo a las [billeteras de criptomonedas y a los diferentes tipos de billetera]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-03-01-types-of-wallets %}) que hay disponibles. Una billetera es un programa para generar, administrar y almacenar el par de llaves criptográficas del usuario. Este puede revisar su saldo y recibir y enviar fondos dentro de ella. Generalmente, se sacrifica conveniencia a favor de seguridad o viceversa. Los fondos de una billetera móvil son convenientes al momento de gastar pero no son muy seguros, al igual que el efectivo que uno se guarda en la bolsa. En cambio, una gran cantidad de criptomonedas almacenadas en una billetera hardware es menos conveniente de gastar pero mucho más segura. La pregunta más importante al momento de considerar la seguridad de una billetera es siempre ¿dónde están las llaves? Si el usuario no tiene control de sus llaves, no tiene control de sus fondos. El usuario autoriza el uso de sus fondos con su llave privada en un paso que se denomina firma de la transacción, y es importantísimo que mantenga segura su llave privada en todo momento.

![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/ES_signing_hardware_wallet_D.jpg)
![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/ES_signing_hardware_wallet_M.jpg)

### Transacciones

En el cuarto capítulo hablamos de transacciones. Dentro del primer artículo se introdujo el tema del [modelo UTXO]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-04-02-the-utxo-model %}), el método de contabilidad empleado por la mayoría de las cadenas de bloques. La cadena de bloques no mantiene registros del saldo de cada dirección. Más bien, la billetera repasa el historial de transacciones de la cadena de bloques y recopila todas las transacciones entrantes que no se han gastado aún, los UTXO del usuario, y las suma para generar el saldo disponible, algo un tanto similar a la manera en la que funciona el efectivo. Si el usuario posee, por ejemplo, un UTXO de 10 ZEN pero solo quiere gastar 8 de ellos, la billetera usará el UTXO en una transacción con dos salidas: se enviarán 8 ZEN al destino indicado y 2 ZEN, el cambio del usuario, en una segunda salida.

![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_D.jpg)
![wallet](/assets/post_files/technology/advanced/the-utxo-model/wallet_balance_Int_M.jpg)

En el siguiente artículo sobre transacciones, hablamos sobre el [explorador de bloques]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-04-03-block-explorer-continued %}), una herramienta gráfica que permite al usuario visualizar y explorar los datos de la cadena de bloques. Hay un explorador disponible para casi todas las cadenas de bloques públicas existentes. Esta herramienta permite también explorar el historial de una cadena con todas las transacciones que contiene, así como todas las direcciones empleadas y el total de bloques minados. Aclaramos también los datos que el explorador hace disponibles y nos remontamos a la primera transacción criptomonetaria, la cual ocurrió entre Satoshi Nakamoto y Hal Finney.

![Bitcoin Transaction](/assets/post_files/technology/advanced/block-explorer-continued/transactions.png)

Nos adentramos además a un tipo muy especial de transacción, el [intercambio atómico]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-04-04-atomic-swaps %}), el cual permite a los usuarios el intercambio sin intermediarios de dos criptomonedas distintas a cadenas de bloques separadas. En esencia, los intercambios atómicos dependen de una tecnología llamada HTLC, los contratos con bloqueo temporal de hash. El usuario debe cumplir con dos condiciones para poder lleva a cabo el intercambio entre dos activos: ambos activos y su cadena de bloques deben poder ejecutar el mismo algoritmo hash, como lo es SHA-256 en el caso de Bitcoin, y ambas cadenas deben poseer también el mismo tipo de programabilidad que permite que el HTLC se ejecute. Los intercambios atómicos representan una alternativa a los centros cambiarios centralizados comunes en la actualidad, pero no serán viables hasta que estén disponibles para hacer intercambios entre la mayoría de las criptomonedas. Lo importante es que el proceso siempre ocurre sin terceros y sucede casi al instante.

![swaps](/assets/post_files/technology/advanced/atomic-swaps/ES_swaps_D.jpg)
![swaps](/assets/post_files/technology/advanced/atomic-swaps/ES_swaps_M.jpg)

### Privacidad en la cadena de bloques

El derecho humano a la privacidad es uno de los valores centrales de Horizen. En este capítulo, analizamos diferentes métodos de conservar la [privacidad en la cadena de bloques]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-05-01-intro-to-privacy-on-the-blockchain %}). Empezamos por métodos sencillos como la utilización de una dirección diferente por transacción y protocolos de mezclado de monedas que combinan un grupo de transacciones de fuentes diferentes para ofuscar la relación entre remitente y receptor. Una técnica más avanzada para garantizar la privacidad de una transacción es la utilización de una firma anular. Con las firmas anulares, un grupo de gente firma la transacción, el observador podrá estar seguro de que la transacción fue firmada por alguien del grupo, pero no sabrá quién.

La última tecnología para conservar privacidad que discutimos fueron las pruebas de cero conocimiento, en especial los zkSNARK, la tecnología que Horizen utiliza para sus transacciones privadas. Una prueba de cero conocimiento le permite al usuario comprobarle al verificador que tiene conocimiento de algo sin revelar dicho conocimiento. Empleamos como ejemplo a una persona vidente que intenta convencer a una con los ojos vendados que había bolas de dos colores diferentes, pero sin revelar los colores.

![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/ES_zkproof_D.jpg)
![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/privacy-on-the-blockchain/ES_zkproof_M.jpg)

### Ataques a la cadena de bloques

El último artículo del nivel avanzado trató los diferentes [ataques dirigidos a las cadenas de bloques]({{ site.baseurl }}{% post_url /es/technology/advanced/2021-06-01-attacks-on-blockchain %}). Introdujimos el problema de los generales bizantinos, una prueba de pensamiento en la que un número de generales desean coordinar un ataque sin un medio confiable de comunicación. Las cadenas de bloques resuelven el problema de los generales porque permiten que un grupo de individuos que no se tienen confianza logre un consenso dentro de un sistema distribuido.

Tratamos también el tema de los ataques DDoS, en los que un atacante pretende hacer más lento o incluso detener un servicio saturando su red con un gran número de solicitudes fraudulentas.

Otro de los ataques que describimos fue el Sybil, en el que el atacante crea un gran número de identidades falsas. Un grupo de nodos Sybil puede intentar rodear al nodo del usuario y así impedir que se conecte con el resto de los nodos honestos de la red. Así, logra que el usuario sea incapaz de enviar o recibir información dentro de la red.

Por último, hablamos del tipo de ataque más común, el ataque del 51% o ataque de reordenamiento de bloques. Un minero que controla una porción significativa del poder hash de una red puede intentar perpetrar este tipo de ataque. El minero malicioso crea una transacción en la cadena honesta y gasta sus fondos. Mientras tanto, mina bloques de manera privada, es decir, no los transmite a la cadena de bloques de la red. Una vez que la cadena fraudulenta se convierte en la más larga, el minero malicioso la propaga y, conforme a la regla de la cadena más larga, su cadena se reconoce como legítima por el resto de los mineros. Ya que la cadena deshonesta no contiene la transacción inicial del minero, este ha recobrado el control de sus fondos gastados y puede gastarlos por segunda vez.

![51% Attack](/assets/post_files/technology/advanced/attacks-on-blockchain/percent.gif)

### Últimos comentarios

Cubrimos muchos conceptos en la sección avanzada, y esperamos que haya aprendido mucho. Si disfrutó lo que encontró aquí, le pedimos amablemente que comparta tanto su conocimiento como nuestro sitio con su familia y amigos. No se preocupe si tuvo problemas siguiendo la lectura en algún momento, los temas que tratamos son complejos y toma tiempo interiorizarlos. En todo caso, siempre puede volver a leer un artículo que no haya entendido a la perfección. Recuerde tomar descansos entre lecturas para mejorar su comprensión de los temas.

Si se siente cómodo con todo lo que ya ha leído y le gustaría seguir aprendiendo, ¡todavía hay más! Avance un nivel y consulte nuestros artículos del nivel experto. Los hemos estructurado de la misma manera, pero hemos agregado detalles a todos los temas y los hemos dividido para estudiar más de cerca cada uno de sus componentes. Nuevamente, le recordamos que el contenido está diseñado para poder leerse de principio a fin, lo cual recomendamos, o por artículos si le interesa solo un tema en particular.

Esperamos que haya disfrutado esta serie de artículos. Déjenos saber si hubo algo que le pareció confuso o complicado de entender, pues el contenido es una labor en proceso. Siempre estamos abiertos a cualquier sugerencia o retroalimentación, así que envíenos un correo a la dirección academy@horizen.global si le gustaría compartir su opinión con nosotros.

**El equipo Horizen**
