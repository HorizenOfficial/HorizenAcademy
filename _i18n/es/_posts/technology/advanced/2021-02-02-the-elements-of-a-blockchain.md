---
layout: post
type: article
title: "Los elementos de una cadena de bloques"
description: "En este primer artículo se presentarán los diversos elementos que hacen funcionar a la cadena de bloques."
permalink: /technology/advanced/the-elements-of-a-blockchain/
topic: technology
level: advanced
chapter: "¿Cómo funciona una cadena de bloques?"
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

## Contenido para Principiantes a Continuación - Los elementos de una cadena de bloques

Se ha establecido que, por una parte, la cadena de bloques es una estructura de datos; una manera de almacenar información. Por otra parte, es un protocolo para transferir valor en el que los mineros funcionan como contables de la cadena. Este artículo tratará el papel que desempeñan las partes del ecosistema de la cadena de bloques. Antes de empezar, sin embargo, discutamos otra vez el concepto de protocolo.

Un protocolo es un conjunto de reglas. Estas reglas, al ser implementadas, gobiernan la cadena de bloques y restringen lo puede y no puede hacerse. Una de las reglas establece en qué orden debe aparecer cierta información para poder realizar una transacción. Por suerte, la billetera se encarga de ordenarla automáticamente. Algunas otras reglas son:

- Si el usuario tiene una moneda, una moneda es la mayor cantidad que puede gastar.
- Si el usuario intenta gastar dos veces la misma moneda, la primera transacción que la gaste se considera válida; la segunda se considera inválida.

Es importante recordar que un protocolo, un término muy común en el ámbito de las cadenas de bloque, es solo un conjunto de reglas. Ahora, se analizarán de manera individual las partes que conforman su ecosistema:

### Nodos

Una red de computadoras o servidores (_nodos_) es la que ejecuta la cadena de bloques. Los nodos se encuentran en constante comunicación para intercambiar información, por lo que forman la infraestructura de la cadena. Se le llama _nodo completo_ a un nodo que conserva una copia completa de la cadena de bloques. Un _nodo ligero_ no conserva tal copia, sino que debe conectarse a un nodo completo para poder interactuar con la cadena de bloques. Es indispensable comunicarse con la red para poder utilizar criptomonedas como el ZEN o bitcoin. En este sentido, es posible comparar la red distribuida de una cadena de bloques con la infraestructura que un celular necesita para funcionar.

Un nodo completo es como una torre telefónica a la cual se conecta un teléfono (en este caso, el teléfono sería _un nodo ligero_). Todas las estaciones de antena (nodos completos) se conectan entre sí y componen la infraestructura de la red de comunicación. Si un usuario quiere hacer una llamada desde su celular, debe conectarse a una torre telefónica primero antes de poder interactuar con otro celular.

De manera similar, en la red distribuida de la cadena de bloques, los _nodos completos_ suelen encontrarse en línea y operando la mayoría del tiempo, formando la red distribuida y conservando a la par una copia de la cadena de bloques completa. Al utilizar una billetera en la computadora o celular se está utilizando un nodo ligero, por lo que la billetera debe conectarse primero a un nodo completo para poder interactuar con la cadena.

Cualquiera puede encargarse de mantener un nodo completo, en especial si desea contribuir activamente a la estabilidad y seguridad de la red, pero esto no resulta necesario para utilizar una criptomoneda o billetera. La mayoría de las billeteras disponibles en el mercado son nodos ligeros, por lo que almacenan las llaves privadas del usuario pero no conservan una copia completa de la cadena de bloques. Con la aplicación Sphere by Horizen, queda en manos del usuario decidir si se prefiere la funcionalidad de un nodo completo o ligero, lo que hace de Sphere un llamado nodo híbrido.

![Nodes in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_nodes_D.jpg)
![Nodes in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_nodes_M.jpg)

### Mineros

Los mineros también son nodos. Su labor es apoyar a la red reenviando información y conservando copias de la cadena de bloques, al igual que cualquier otro nodo. Los mineros tienen también la labor constante de resolver los problemas que surgen al crear nuevos bloques.

Sin entrar en detalles técnicos, puede decirse que su propósito real dentro la red es el siguiente: Cada bloque nuevo puede concebirse como una decisión colectiva sobre el historial de los últimos minutos. La red logra a un consenso sobre el orden de las transacciones durante ese lapso. En el caso de Horizen, el lapso es de 2.5 minutos aproximadamente, el de Bitcoin es de 10.

¿Por qué tantas complicaciones? Siempre cabe la posibilidad de que cada minero tenga una versión de un bloque ligeramente diferente a la de otros mineros. Esto se debe a que le toma algo de tiempo a transacción propagarse a toda la red, por lo que los mineros pueden recibir las transacciones en órdenes diferentes.

![Miner in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_miner_D.jpg)
![Miner in ES](/assets/post_files/technology/beginner/the-elements-of-a-blockchain/ES_miner_M.jpg)

Los mineros empiezan a resolver un nuevo acertijo (el siguiente bloque por crearse) inmediatamente después de resolver el del bloque anterior. El minero que resuelve el problema primero tiene el privilegio de escribir en la cadena de bloques el historial de los últimos minutos. Este minero transmite su bloque a la red junto con la solución que encontró al acertijo. Todos los nodos, sin importar si están minando o no, verifican que la solución sea correcta. Si lo es, los nodos agregan el nuevo bloque a su copia de la blockchain. Cerrado este ciclo, el proceso vuelve a repetirse indefinidamente.

Así es como la red llega a un acuerdo o **consenso** de lo ocurrido en el pasado. El tiempo antes mencionado —2.5 minutos— es un promedio, pues varía el tiempo que les toma a los mineros resolver el acertijo. El tiempo depende directamente de la dificultad del problema. Si hay muchos mineros trabajando simultáneamente, el tiempo de solución del acertijo será menor en promedio.

El protocolo incrementa la dificultad del acertijo conforme a incrementa la cantidad de mineros presentes en la red, de manera que siempre les tome aproximadamente dos minutos y medio resolver el problema. Este es otro ejemplo de cómo un protocolo se conforma por una secuencia de reglas:

- Si en promedio el acertijo puede resolverse en menos de 2.5 minutos, necesita ser más difícil. Por otra parte, si se necesitan más de 2.5 minutos, necesita ser más fácil.

Los mineros ejecutan el equipo computacional que ayuda a establecer el consenso entre todos los participantes de la red respecto al orden de eventos. Sería un desastre tener a cientos de miles de mineros en conferencia cuando ninguno de ellos se conoce y deben discutir qué ocurrió en un lapso de tiempo determinado. Por eso, la cadena de bloques introduce una manera más eficiente de lograr un consenso. Los mineros proponen sugerencias sobre el orden del historial de transacciones. El primer minero que resuelve el acertijo determina la versión que será aceptada por toda la red. Bitcoin fue el pionero la introducción de este tipo de protocolo, mediante el cual se puede alcanzar un consenso en un ambiente distribuido y no confiable.

Evidentemente, a los mineros se les recompensa por resolver el acertijo. Esto les da un incentivo para comprar equipo y ejecutar el hardware. El primer minero en resolver el bloque recibe una recompensa en la divisa que se encuentra minando. Se le permite al minero ganador enviarse a sí mismo una transacción con una determinada cantidad de monedas que no existían antes (la recompensa por minar el bloque es de monedas nuevas). Este es otro ejemplo de que un protocolo conformado por un grupo de reglas:

- El minero que primero resuelva el bloque tiene permiso de incluir una transacción en su bloque, enviándose algunas monedas de nueva creación.

Este proceso genera nuevas monedas y crea un incentivo para que las personas logren un consenso.

### Resumen

En conclusión, es importante saber que los mineros y operadores de nodos son las dos principales entidades del ecosistema de una cadena de bloques. Los nodos componen la infraestructura de la red. Los mineros sirven de contables y deben determinar el orden definitivo de los eventos ocurridos, con una recompensa criptomonetaria como incentivo.

## Contenido para Principiantes a Continuación - Identidad en la cadena de bloques

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

Todo esto sería difícil de hacer de manera manual y requeriría una buena cantidad de conocimientos. Por suerte, existen las billeteras, las cuales realizan todo el proceso sin necesidad de que el usuario lo entienda. Las billeteras generan y administran el par de llaves (pública y privada) y hacen lo necesario para encriptar y desencriptar. Es importante recalcar que la llave privada del usuario autoriza el gasto de sus fondos. Mantenerla segura es de suma importancia. Perder las llaves es perder los fondos asociados, y una vez perdidas no pueden recuperarse.

### Resumen

El par de llaves funge la identidad de una persona en la cadena de bloques. La llave pública es como una dirección de correo electrónico y se utiliza para recibir fondos. Mientras tanto, la llave privada es como una contraseña que permite acceder y administrar los fondos asociados a la llave. Es de suma importancia cuidar, proteger y nunca compartir la llave privada. Si alguien se encuentra pidiendo llaves privadas ajenas, seguramente busca llevar a cabo algún tipo de estafa.
