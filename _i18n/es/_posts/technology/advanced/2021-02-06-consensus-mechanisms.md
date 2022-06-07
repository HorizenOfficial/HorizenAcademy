---
layout: post
type: article
title: "Mecanismos de consenso"
description: "There are many peers in a blockchain and the consensus mechanism has all of them agree on a single history of events."
permalink: /technology/advanced/consensus-mechanisms/
topic: technology
level: advanced
chapter: "¿Cómo funciona una cadena de bloques?"
---

El mecanismo de consenso de una cadena de bloques le permite ponerse de acuerdo sobre una versión única del historial. En el caso de una cadena criptomonetaria, el historial es el orden en el que sucedieron las transacciones.

Cuando el participante de una red crea una transacción, la transacción se propaga a toda la red. Cada nodo registra la transacción y la agrega a su versión del libro contable. La versión de cada nodo puede ser ligeramente distinta a la demás. Un usuario en Estados Unidos que transmite una transacción la propagará más rápido a los nodos cercanos a él que a un nodo ubicado en Asia, por ejemplo. El resultado son versiones ligeramente distintas del mismo historial de transacciones. En un momento dado, todos los participantes de la red deben decidirse por un solo orden, y es aquí donde se utiliza el mecanismo de consenso de la cadena de bloques.

Hay muchas maneras de lograr consenso en una red distribuida, pero las dos más utilizadas son los algoritmos de prueba de trabajo y prueba de participación. Tomemos esta generalización formulada por Demiro Massessi:

**Inglés**

> "The main difference between consensus mechanisms is the way in which they delegate and reward the verification of Transacciones. (...) In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control."

**Español**

"La principal diferencia entre mecanismos de consenso es la manera en la que delegan y recompensan la verificación de transacciones. […] De una manera u otra, los algoritmos de consenso de la cadena de bloques se reducen a algún tipo de votación donde el número de votos que tiene cada usuario está atado a la cantidad de algún recurso limitado controlado por el usuario."

![Consensus](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_consensus_D.jpg)
![Consensus](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_consensus_M.jpg)

### Prueba de trabajo (Proof-of-work; PoW)

Son los mineros quienes se encargan de lograr un consenso en una cadena de bloques PoW. Cada uno recolecta las transacciones que recibe a través de la red par a par y las almacena en su mempool. Mientras recolectan las transacciones entrantes, verifican también que sean válidas de acuerdo con el protocolo y las agregan al bloque que están trabajando. A la vez, intentan resolver un acertijo computacionalmente exigente. Haremos explícita la naturaleza de este acertijo en el siguiente artículo.

El minero que primero resuelva el acertijo propaga su bloque a la red y extiende la cadena por un bloque. El minero recibe también una cantidad de monedas recién creadas a cambio de su trabajo, y obtiene el derecho de escribir el historial de la cadena correspondiente a los últimos minutos. En el caso de Horizen, esto sucede cada 2.5 minutos, o 10 en el caso de Bitcoin. La probabilidad de resolver un bloque es proporcional al poder computacional del minero. Si este controlara el 10% de la capacidad computacional de la red, resolvería en promedio cada décimo bloque de la cadena.

El poder computacional es el recurso limitado en una cadena PoW. Consume recursos reales, principalmente el hardware de minería y la electricidad necesarios para minar la criptomoneda. Es difícil que un solo actor controle la mayoría de la red porque hay costos externos relacionados al mantenimiento de un libro contable PoW. Esto propicia un ambiente altamente competido en el que cada minero desea aumentar su parte del poder computacional o hash rate.

Los mineros necesitan este poder computacional porque el problema que intentan resolver puede resolverse solo de manera aleatoria. Las pruebas de trabajo funcionan únicamente porque este problema se encuentra libre de optimización y aproximaciones. Libre de optimización significa que no hay atajos para encontrar la solución válida. No puede calcularse la solución, sino que debe encontrarse a base de prueba y error. Libre de aproximaciones significa que no es posible encontrar parte de la solución o estar cerca de encontrarla. La solución se tiene o no, la cuestión es binaria.

Todos los nodos y mineros verifican la validez de un bloque nuevo en cuanto se descubre y transmite a la red. Si el bloque resulta válido, se eliminan de los mempools las transacciones ahora registradas en la cadena. La labor empieza de nuevo en cuanto el mempool contiene transacciones que no se han minado. De esta manera, la red llega a un acuerdo sobre una versión única del historial de transacciones de la cadena PoW.

![POW](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_POW_D.jpg)
![POW](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_POW_M.jpg)

#### La regla de la cadena más larga

Imaginemos una situación en la que dos mineros encuentran un bloque al mismo tiempo. En este caso, todos los nodos y mineros de la red almacenan ambas versiones del bloque. A esta situación se le llama empate, pues ambos bloques son válidos al momento de ser creados. Sin embargo, el empate debe romperse de alguna manera, pues es necesaria una sola versión de la verdad. Los mineros empiezan a construir sobre el bloque que reciben primero. El empate se rompe cuando un minero encuentra el siguiente bloque. Uno de los dos bloques será aceptado como el único verdadero por todos los mineros y nodos, mientras que el otro se hará de lado; estos bloques sin cadena se denominan bloques huérfanos. A este tipo de procedimiento para romper empates entre bloques coincidentes se le llama regla de la cadena más larga (longest chain rule) o consenso de Nakamoto.

Si el 80% de los mineros recibieron primero el bloque A y el otro 20% el bloque B, las probabilidades de que la cadena se extienda partiendo del bloque A son del 80% (suponiendo que todos los mineros poseen el mismo poder computacional). De cierta manera, los mineros votan con su poder computacional por una sola versión del historial, replicando así la realidad descrita en nuestra cita inicial:

**Inglés**

> "In one way or another, blockchain consensus algorithms boil down to some kind of vote where the number of votes that a user has is tied to the amount of a limited resource that is under the user’s control."

**Español**

“De una manera u otra, los algoritmos de consenso de la cadena de bloques se reducen a algún tipo de votación donde el número de votos que tiene cada usuario está atado a la cantidad de algún recurso limitado controlado por el usuario.”

![Longest chain](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_longest_chain_D.jpg)
![Longest chain](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_longest_chain_M.jpg)

Las pruebas de trabajo son uno de los mecanismos de consenso más seguros, pero solo son viables cuando la red posee el poder computacional (hash rate) suficiente. El protocolo de Bitcoin ha demostrado a lo largo de diez años lo seguro que puede ser el consenso por pruebas de trabajo si la red posee el poder computacional suficiente.

Ya discutimos el concepto de la teoría de juegos en nuestro artículo sobre la cadena de bloques como protocolo para transferir valor, así como en el artículo sobre contratos inteligentes. En esencia, es el estudio de modelos matemáticos de interacción estratégica entre agentes que toman decisiones racionales. En el caso de una cadena de bloques PoW, los mineros son estos agentes. Los incentivos para seguir las reglas del protocolo de minado las contiene el protocolo mismo, y es por esto que lo que las cadenas de bloques PoW son tan robustas.

En nuestro artículo sobre el **minado**, hablaremos de este proceso con más detalle y de la naturaleza del acertijo que resuelven los mineros en el contexto de las pruebas de trabajo.

### Prueba de participación (Proof-of-Stake; PoS)

También hay entidades recolectando transacciones y creando bloques nuevos en una cadena de bloques PoS. El proceso, al igual que la terminología, son un poco diferentes en este caso.

Mientras los mineros de una cadena PoW minan bloques, los validadores de una cadena PoS los forjan. La probabilidad de validar un bloque nuevo es proporcional a la participación del validador. En este caso, la participación se refiere a la cantidad de fondos que el validador esté dispuesto a dejar guardados en la cadena durante el tiempo que desee ser validador. Para convertirse en validador, el usuario debe enviar fondos por medio de una transacción especial. Los fondos se resguardan en un depósito llamado fondo de validadores (validator pool), y se liberan solo si el validador actúa conforme a las reglas del protocolo. Si, por ejemplo, el validador llegar a incluir alguna transacción fraudulenta en su bloque, perdería tanto su participación como su derecho a forjar bloques.

El recurso escaso en un ambiente PoS es la divisa nativa a la cadena de bloques. Entre más dinero tenga el usuario en participación en la blockchain, más altas sus probabilidades de validar un bloque nuevo. En la mayoría de las cadenas de bloques PoS no hay recompensas por crear bloques, sino que el incentivo de los validadores se basa en recolectar las tarifas correspondientes a las transacciones.

![POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_POS_D.jpg)
![POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_POS_M.jpg)

### PoW vs. PoS

Los escépticos cuestionan la seguridad del modelo de consenso PoS porque no se requiere el consumo de recursos tangibles para ser validador. En una cadena de bloques PoS no hay un costo asociado a la construcción de un bloque nuevo sobre ambos bloques cuando dos bloques existen en conflicto en la cadena PoS. En una cadena PoW, hay un costo real (electricidad) atado a cada bloque minado. Queda por verse si las cadenas de bloques PoS pueden proporcionar las mismas garantías de seguridad que las cadenas PoW con el paso del tiempo, justo como lo ha hecho la cadena de Bitcoin por más de diez años.

Otra diferencia entre las cadenas PoW y PoS es que en la segunda cada nodo validador debe ser identificable, pues sus monedas en participación deben utilizarse para compensar por actos maliciosos. En una cadena PoW no es necesario tener mineros o nodos identificables. Al contrario, una de sus características es que cuando un nodo recibe un bloque, no se incluye información sobre quién lo minó. Puede haber sido el mismo nodo el que haya transmitido el bloque, o puede que este se haya relevado varias veces antes de alcanzar al usuario; no importa ni debe importar la identidad del minero. Lo único importante es que la solución al acertijo y todas las transacciones en el bloque sean válidas. En el caso de las pruebas de trabajo, solo es necesario confiar en las matemáticas.

Quienes apoyan las cadenas PoS se remiten al alto costo y rendimiento limitado de las cadenas PoW, y consideran por lo tanto el mecanismo PoS como el más sustentable. Por el momento, no hay disponible ninguna cadena de bloques PoS que pueda cumplir con sus promesas de seguridad durante un tiempo extendido. En cambio, existe el precedente de Bitcoin, cuya cadena PoW se ha ejecutado durante más de diez años sin ninguna violación de seguridad significativa. Será el tiempo el que decida si las cadenas PoS pueden cumplir con la promesa de ser igual de seguras pero más escalables que una cadena PoW.

Retomaremos esta discusión en la conclusión de nuestro artículo sobre el minado de criptomonedas. Los argumentos respectivos de las comunidades PoS y PoW tendrán mayor sentido una vez que quede claro de qué trata el proceso de minado.

![Comparing POW and POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_compare_D.jpg)
![Comparing POW and POS](/assets/post_files/technology/advanced/2.5-consensus-mechanisms/ES_compare_M.jpg)

### Resumen

En el método PoW, los mineros votan por una versión del historial utilizando el peso del poder computacional que controlan. En el método PoS, los validadores votan por una versión del historial utilizando el peso de los fondos o participación que tienen en la cadena de bloques misma. Mientras que el método PoW ha demostrado ser seguro por más de una década, la seguridad de las cadenas PoS aún está por verse. En nuestro próximo artículo, finalmente se explicará la naturaleza del “acertijo computacionalmente costoso” del que hemos hablado vagamente hasta ahora.

## Explicación Simple a Continuación - ¿Qué es el consenso?

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-consensus/Consensus.jpg" alt="Consensus"></td>
        <td>
            La <a href="{{ site.baseurl }}{% post_url /eli5/2000-01-01-what-is-a-blockchain %}">cadena de bloques</a> registra todas las transferencias de dinero. Si el usuario cuenta con solo un ZEN y crea dos transacciones simultáneas gastando la misma moneda, es deber de la red determinar cuál de las dos sucedió primero y por ende la válida.
        </td>
    </tr>
</table>

El mecanismo de consenso se asegura de que la red entera determine cuál es el orden correcto de las transacciones. Cada varios minutos, cuando un nuevo bloque se agrega a la cadena de bloques, la red se pone de acuerdo respecto al orden de las transacciones más recientes. De esta manera, nadie puede engañar al sistema y gastar más de lo que posee.

Hay varias maneras de lograr consenso en una red de par a par. En la cadena de bloques de Horizen, los usuarios votan por medio de su poder computacional para determinar el orden de las transacciones. Si la computadora de un usuario es el doble de rápida que la de otro, ese usuario tiene una oportunidad dos veces mayor de decidir el orden.
