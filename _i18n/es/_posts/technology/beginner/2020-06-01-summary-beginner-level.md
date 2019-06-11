---
layout: post
type: intro
title: "Resumen Principiante"
description: "Finalizamos el nivel principiante de tecnología con un repaso de todo lo aprendido."
permalink: /technology/beginner/summary/
topic: technology
level: beginner
chapter: "Resumen"
further_reads: [planting_bitcoin]
---

### Resumen

Este es el último artículo en nuestra sección de tecnología para principiantes. Esperamos que los artículos anteriores le hayan ayudado a entender la naturaleza de una cadena de bloques, cómo funciona y cómo utilizarla. Ahora, nos gustaría resumir todo lo anteriormente discutido.

Una cadena de bloques es un [método para almacenar datos]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-02-blockchain-as-a-data-structure %}) al igual que una lista o tabla. Lo que la hace especial como método es que permite manejar información y transferir valor sin involucrar a ninguna entidad central.

![List table chain in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_list_table_chain_D.jpg)
![List table chain in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_list_table_chain_M.jpg)

Hicimos también la comparación entre la cadena de bloques como un [protocolo para transferir valor]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-03-a-protocol-to-transfer-value %}) y el internet como protocolo para transferir información. Comparamos también la cadena al servicio de correos, una especie de protocolo para enviar bienes materiales. El protocolo de la cadena de bloques se ejecuta en un gran número de computadoras alrededor del mundo. Como los datos en la cadena se encuentran seguros y los nodos se comunican de una manera predeterminada, no es necesario ningún intermediario que se asegure de que las transacciones con criptomonedas sean seguras.

![Mail protocol in ES](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/ES_mail_protocol_D.jpg)
![Mail protocol in ES](/assets/post_files/technology/beginner/a-protocol-to-transfer-value/ES_mail_protocol_M.jpg)

Los [mineros]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) son como los contadores de una cadena; toman decisiones de manera colectiva respecto a lo que sucedió en el pasado, permitiendo a la red lograr un consenso sobre su estado actual. Los mineros requieren un hardware especial y electricidad para resolver un acertijo computacionalmente complejo, y se encuentran en competencia para ver quién de ellos puede resolverlo para encontrar el próximo bloque. Como recompensa, el minero ganador recibe una cantidad de monedas recién creadas. De esta manera, el protocolo descentralizado de criptomonedas puede solventar su propio mantenimiento.

![Miner in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_miner_D.jpg)
![Miner in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_miner_M.jpg)

Los [nodos]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-02-the-elements-of-a-blockchain %}) componen la infraestructura de la red en sí. Los nodos completos almacenan una copia completa de la blockchain y verifican todas las transacciones que se realizan en la red, así como la creación de nuevos bloques. Por otra parte, los nodos ligeros almacenan solo su par de llaves. La mayoría de las billeteras digitales o móviles son nodos ligeros. Si el usuario desea realizar una transacción por medio de la billetera en su teléfono, la billetera debe primero establecer una conexión con un nodo completo, el cual propagará la información a todos los demás nodos. Este proceso es similar a la manera en la que un celular debe conectarse a una torre telefónica para poder operar.

![Nodes in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_nodes_D.jpg)
![Nodes in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_nodes_M.jpg)

La llave pública del usuario equivale a su dirección en la cadena de bloques, mientras que su llave privada es la contraseña que se utilizar para acceder a los fondos que contiene. El usuario hace uso de su llave pública para recibir fondos, y de la privada para transferir los propios. En conjunto, representan [la identidad del usuario en la cadena de bloques.]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}). El par de llaves es parte de un esquema de encriptación llamado criptografía de llave pública o criptografía asimétrica, uno de los principales pilares de la tecnología blockchain.

![Asymmetric in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_asymmetric_D.jpg)
![Asymmetric in ES](/assets/post_files/technology/beginner/identity-in-blockchain/ES_asymmetric_M.jpg)

Las [billeteras]({{ site.baseurl }}{% post_url /technology/beginner/2020-03-01-wallets %}) simplifican el manejo de las llaves del usuario y toda encriptación que está ocurriendo tras bambalinas. Una billetera es una interfaz amigable con el usuario que crea transacciones y funciona más bien como un llavero, pues puede crear y administrar llaves por el usuario, mostrarle su saldo al encontrar todas las transacciones recibidas en la cadena y crear nuevas transacciones. Así, nunca se almacenan fondos en la billetera, sino solo las llaves que permiten al usuario acceder a los fondos que ha registrado en la cadena de bloques.

![Wallet does in ES](/assets/post_files/technology/beginner/wallets/ES_wallet_does_D.jpg)
![Wallet does in ES](/assets/post_files/technology/beginner/wallets/ES_wallet_does_M.jpg)

Una manera sencilla de racionalizar una [transacción ]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-02-intro-to-transactions %}) es imaginándose un conjunto de buzones. Cada dirección en la cadena de bloques es un solo buzón en el conjunto. Si el usuario desea realizar una transacción, es necesario primero que acceda a sus fondos (buzón) con su llave privada y encuentre el buzón del receptor utilizando su dirección. La transacción termina por registrarse en una declaración del tipo “Alice le ha enviado a Bob 5 ZEN.” Esta declaración es la representación de los fondos obtenidos por Bob.

![Sent in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T3_sent_D.jpg)
![Sent in ES](/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T3_sent_M.jpg)

Para acceder a la información almacenada en una cadena de bloques, puede utilizarse un [explorador de bloques]({{ site.baseurl }}{% post_url /technology/beginner/2020-04-03-block-explorer-introduction %}). Así como un explorador web permite al usuario acceder a información en internet, el explorador de bloques le permite acceder a la información de la cadena de bloques. Es posible buscar direcciones individuales, transacciones o bloques enteros.

<div class="my-4">
    <img src="/assets/post_files/technology/beginner/block-explorer-introduction/explorer_address_summary.png" alt="Explorer address summary">
</div>

Si bien las criptomonedas no son anónimas por defecto, algunas ofrecen características que posibilitan transacciones privadas. Para aumentar el nivel de privacidad, el usuario debe utilizar una dirección diferente para cada transacción entrante. Esto hace más difícil que un tercero pueda obtener un historial de sus transacciones, por lo que la mayoría de las billeteras implementan esta función de manera automática. El usuario también puede decidir utilizar criptomonedas con características de privacidad mejoradas. Horizen, por ejemplo, emplea pruebas de cero conocimiento para hacer posibles transacciones completamente privadas, algo que se logra utilizando un tipo diferente de dirección dentro de la misma billetera (direcciones Z).

![zkproof in ES](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/ES_zkproof_D.jpg)
![zkproof in ES](/assets/post_files/technology/beginner/intro-to-privacy-on-the-blockchain/ES_zkproof_M.jpg)

### Comentarios finales

Las criptomonedas y cadenas de bloques no son temas sencillos. En esta serie de artículos buscamos explicarlos de manera intuitiva sin sacrificar demasiado la precisión. A todos nos toma algo de esfuerzo entender la tecnología blockchain cuando la abordamos por primera vez, por lo que no tiene nada de malo leer un artículo varias veces hasta que todo su contenido cobre sentido. En muchas ocasiones, la segunda lectura será más fácil si se deja una pausa entre lecturas.

Si se siente cómodo con todo lo que ha aprendido y le interesa continuar, ¡queda aún mucho por aprender! Avance un nivel y consulte nuestros artículos más avanzados. Los hemos estructurado de la misma manera, pero agregando detalle a los temas y dividiéndolos para analizar sus componentes con mayor precisión. El contenido se ha diseñado también para poder leerse de principio a fin (la lectura recomendada) o para que se consulten solo los artículos de interés.

Esperamos haya disfrutado esta serie de artículos. Le imploramos nos deje saber si algún tema o explicación le pareció confuso. El contenido proporcionado es parte de un proyecto en proceso y se estará actualizando durante algún tiempo. Nos encantaría recibir sus sugerencias y retroalimentación, así que no dude en enviarnos un correo a [academy@horizen.global](mailto:academy@horizen.global) si desea compartirnos su opinión.

**– El equipo Horizen**

