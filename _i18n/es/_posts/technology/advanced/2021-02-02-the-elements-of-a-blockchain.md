---
layout: post
type: article
title: "Los elementos de una cadena de bloques"
description: "En este primer artículo se presentarán los diversos elementos que hacen funcionar a la cadena de bloques."
permalink: /technology/advanced/the-elements-of-a-blockchain/
topic: technology
level: advanced
chapter: "¿Cómo funciona una cadena de bloques?"
further_reads: [three_elements_to_understanding_blockchain_and_its_greatest_opportunity]
canonical_link: "/es/technology/beginner/the-elements-of-a-blockchain/"
---

Cuando Satoshi Nakamoto publicó el libro blanco de Bitcoin, introdujo una innovación que mezclaba componentes conocidos con varios novedosos. Este capítulo está diseñado para explicar cómo funciona la cadena de bloques y qué función cumple cada parte individual. Nuestro objetivo es contextualizar cada parte antes de explicar a fondo los conceptos.

### Funciones hash

Una _función hash_ es una función matemática con algunas propiedades especiales; sin embargo, como cualquier otra función, cumple con un objetivo específico. La función hash recibe una entrada y produce una salida (también llamada valor hash, compendio hash o hash).

No es obligatorio que la entrada sea un número, puede ser cualquier tipo de información, desde un solo carácter hasta un archivo pesado como un video. La salida de una función hash dada tiene una extensión constante sin importar la entrada. Hay muchos tipos de funciones hash y la mayoría incluyen en su nombre la extensión de la salida que producen. Una de las funciones hash más utilizadas es SHA-256 (Secure Hash Algorithm 256 bit). El número indica que la salida de la función siempre tendrá 256 bits de extensión sin importar la extensión de la entrada. El valor hash funciona como la huella digital de la información. Es posible que el usuario verifique la integridad de los archivos o que detecte si difieren entre sí comparando sus hashes.

![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_hash_D.jpg)
![Hash](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_hash_M.jpg)

### Criptografía de llave pública

La _Criptografía de llave pública_, conocida también como criptografía asimétrica, recibe su nombre del hecho de que las llaves se encuentran siempre emparejadas. Si el usuario ha encriptado información con una de las llaves, necesitará la otra para desencriptarla y viceversa. Estas llaves son la llave pública y la llave privada o secreta. Las llaves del usuario se traducen a su identidad en la cadena de bloques, por lo que puede recibir fondos con su llave pública y enviarlos con la privada. La criptografía de llave pública es también el origen del término criptomoneda.

![Asymmetric](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_asymmetric_D.jpg)
![Asymmetric](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_asymmetric_M.jpg)

### Redes par a par

El concepto de una red par a par (P2P) es bastante común, en especial en el contexto de servicios de intercambio de archivos como BitTorrent. En una red distribuida, los usuarios no se conectan a un servidor o entidad central para acceder al servicio, sino al resto de sus pares. Los pares son otros participantes de la red que se proporcionan el servicio entre sí. Las redes P2P son resilientes, pues no existen puntos individuales expuestos a fallas. Las cadenas de bloques las emplean regularmente; otra de las razones que las hace tan robustas.

Para que el usuario cree una transacción o consulte su saldo, le pide a los demás pares (o nodos) de la red que conservan una copia de la cadena de bloques que le compartan la información que poseen. Es típico oír hablar de redes libres de permisos o resistentes a la censura al discutir el valor de la tecnología blockchain. Las redes par a par desempeñan un papel importante en darles estas propiedades a las cadenas de bloques.

![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_central-distri_M.jpg)

### Mecanismos de consenso

Si lo que el usuario desea es crear una especie de moneda digital en una red P2P con muchos participantes, se verá obligado a llegar a un consenso con todos sobre el orden de las transacciones. Si un usuario tiene un ZEN y crea dos transacciones distintas que gastan la misma moneda simultáneamente, habrá pares que reciban primero la versión A, mientras que otros recibirán primero la versión B. La red debe entonces llegar a un acuerdo sobre cuál de las dos transacciones ocurrió primero. El mecanismo de consenso es lo que permite que una multitud de entidades que no se conocen ni se tienen confianza lleguen a un acuerdo sobre lo ocurrido.

![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_consensus_D.jpg)
![Consensus](/assets/post_files/technology/advanced/2.1-the-elements-of-a-blockchain/ES_consensus_M.jpg)

### Minado

Existen muchos mecanismos de consenso. El original, o aquel que utilizan Horizen, Bitcoin y muchas otras criptomonedas es el mecanismo de prueba de trabajo. El concepto de minar una criptomoneda es bastante común, pero lo es un poco menos el de los mineros en competencia para resolver un problema computacionalmente demandante.Queremos darle un ejemplo de este problema y de cómo resolverlo, ya que lo anterior contribuye a que la red llegue a un acuerdo respecto al orden de transacciones.

### Demo

Visite este sitio para encontrar una excelente [demostración de cómo funciona una cadena de bloques](https://blockchaindemo.io/). Lo invitamos a que experimente con ella, ya sea ahorita mismo o una vez que haya concluido esta sección. El simulador obliga al usuario a poner manos a la obra y lo ayuda a terminar de entender este tema bastante complejo. Además, le proporciona una guía que detalla los pasos para ejecutar la cadena de bloques.