---
layout: post
type: article
title: "Los elementos de una cadena de bloques"
description: "En este artículo trataremos sobre los dos agentes más importantes en el ecosistema de una cadena; el minero y el nodo. "
permalink: /technology/beginner/the-elements-of-a-blockchain/
topic: technology
level: beginner
chapter: "¿Cómo funciona una cadena de bloques?"
further_reads: [three_elements_to_understanding_blockchain_and_its_greatest_opportunity, blockchain_technology_explained_introduction_meaning_and_applications]
---

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

En conclusión, es importante saber que los mineros y operadores de nodos son las dos principales entidades del ecosistema de una cadena de bloques. Los nodos componen la infraestructura de la red. Los mineros sirven de contables y deben determinar el orden definitivo de los eventos ocurridos, con una recompensa criptomonetaria como incentivo. El siguiente artículo detallará cómo funciona [la identidad en una cadena de bloques]({{ site.baseurl }}{% post_url /technology/beginner/2020-02-03-identity-in-blockchain %}), así como la función de las llaves mencionadas en este artículo.