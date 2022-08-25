---
layout: post
type: intro
title: "Ataques a la cadena de bloques"
description: "Explicamos los escenarios de ataque más comunes en las cadenas de bloques públicas y cómo se puede mitigar su riesgo."
permalink: /technology/advanced/attacks-on-blockchain/
topic: technology
level: advanced
chapter: "Ataques"
---

Las cadenas de bloques suelen considerarse muy seguras, pero el nivel de seguridad que proporcionan depende de la cantidad de hash power con el cuenta la red. Entre más mineros haya y más poderoso sea su hardware de minado, más difícil será atacar la red. En este artículo queremos cubrir los tipos de ataques más comúnmente dirigidos a las cadenas de bloques públicas.

### El problema de los generales bizantinos

Antes de cubrir los diferentes tipos de ataque, le presentamos un breve ejercicio de pensamiento, el llamado problema de los generales bizantinos, un acertijo aparentemente imposible de resolver que la tecnología blockchain afirma haber resuelto.

Imaginemos a un general hace unos siglos. El general desea atacar un castillo con su ejército. El castillo es muy robusto y su ejército muy fuerte. El general ha distribuido a otros ejércitos alrededor del castillo para que apoyen en el ataque, y cada ejército atacará desde una dirección diferente. Los ejércitos se encuentran separados por varios kilómetros de distancia. Si todos atacan a la vez, las probabilidades de victoria son altas. Si el ataque se lleva a cabo de manera descoordinada, el resultado más probable es la derrota.

![Byzantine]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/byz_0_D.jpg)
![Byzantine]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/byz_0_M.jpg)

El problema al que se enfrentan los generales es el siguiente: ¿cómo pueden asegurarse de que todos los ejércitos atacarán el castillo al mismo tiempo? En otras palabras, ¿cómo lograr un consenso sobre el momento del ataque? No pueden utilizarse señales como banderas, antorchas o humo, pues todas estas señales podrían ser detectadas por el enemigo.

Podrían enviarse mensajes a caballo, pero cabe la posibilidad de que algún mensajero sea capturado o asesinado antes de comunicar el mensaje. Para saber que los demás generales han recibido el mensaje, estos podrían enviarse de vuelta a un mensajero con una confirmación; pero de igual manera, este mensajero podría morir o ser capturado antes de completar su misión. Además, en ningún caso podrían estar seguro un general determinado de que los demás recibieron la confirmación, por lo que sería necesario enviar mensajeros que confirmaran las confirmaciones, dando origen al mismo problema. Incluso anulado el riesgo de que un impostor transfiriera un mensaje fraudulento o de que algún mensajero traidor confirmara la intención de atacar pero sin haber transmitido el mensaje, el problema se consideraba imposible de resolver. Ninguno de los involucrados puede saber a ciencia cierta si los demás generales tienen la intención de atacar al mismo tiempo o no.

La tecnología blockchain afirma haber resuelto este problema.

![Byzantine]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/ES_byz_1_D.jpg)
![Byzantine]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/ES_byz_1_M.jpg)

Ahora, cada general posee un registro de los eventos que está siempre sincronizado con el registro de los demás generales, sin necesidad de que una entidad central tenga que encargarse de la coordinación.

Cada vez que se mina un bloque, todos los participantes se ponen de acuerdo sobre el orden de los eventos más recientes.

Regresando al problema de los generales, estos tienen ahora una manera de saber si todos ejércitos atacarán al mismo tiempo o si, por ejemplo, resulta más conveniente retroceder de manera coordinada.

Los críticos de las cadenas PoW afirman que este tipo de cadena no es realmente resistente a la falla bizantina porque el consenso nunca termina de formarse. Entre más confirmaciones tenga una transacción o, de manera más general, un pedazo de información contenido en el bloque, más alta la probabilidad de que esta información sea la final. Pero existe también siempre la probabilidad de que la cadena se bifurque, y de que una cadena diferente y más larga reemplace a la antigua. Si no recuerda cómo funciona la regla de la cadena más larga, lo invitamos a leer nuestro artículo sobre mecanismos de consenso y minado.

Al analizar cadenas de bloque PoW con un hash rate alto, como por ejemplo la cadena de Bitcoin, las probabilidades de que la cadena se bifurque después de que el bloque haya acumulado seis confirmaciones se consideran lo suficientemente ínfimas para dar por final el bloque. En nuestro artículo sobre ataques del 51% analizaremos más a fondo las matemáticas involucradas en el cálculo de estas probabilidades.

Ahora que hemos explicado la naturaleza del problema que los mecanismos de consenso intentan resolver, mencionaremos algunos tipos de ataque más intuitivos y sencillos y cómo se manejan.

### Ataque DDoS

Un ataque de denegación de servicio distribuido (distributed denial-of-service) o DDoS es aquel en el que el atacante busca cortar la disponibilidad del recurso de una red a sus usuarios inundando la red con una cantidad enorme de solicitudes superfluas con la intención de que el sistema se sobrecargue. Este tipo de ataque puede dirigirse no solo a una cadena de bloques sino a cualquier servicio. En su versión más simple, el ataque de denegación de servicio (denial of service) o DoS, todas las solicitudes se generan desde un solo punto, lo cual los hace relativamente fáciles de prevenir. Si una sola dirección IP hace un gran número de solicitudes injustificables, hay medidas automáticas que bloquean la dirección en cuestión. En el caso de un ataque DDoS, es decir un ataque distribuido, las solicitudes maliciosas se originan desde muchos puntos diferentes.

![DDOS Attack]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/DDOS_D.jpg)
![DDOS Attack]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/DDOS_M.jpg)

Un ataque DDoS es más difícil de contrarrestar porque hace necesario que la red diferencie entre solicitudes legítimas y maliciosas, una cuestión casi ideológica. En su momento, se introdujo la medida de tarifas de transacción para eliminar la propagación de spam. Algunos argumentan que mientras una solicitud tenga adjunta una tarifa de transacción, no puede considerarse spam. Al contrario, puede argumentarse también que mientras el único propósito de las solicitudes (en este caso transacciones) sea reducir la velocidad de la red, pueden considerarse spam. Esta es una opinión subjetiva, claro, porque resulta imposible que la red conozca la motivación de un gran número de transacciones.

### Ataque Sybil

Se le llama ataque Sybil a cualquier intento de manipular una red P2P creando múltiples identidades falsas. En la superficie, cada identidad parece un usuario individual, pero la realidad es que una sola entidad controla todas las identidades falsas a la vez. Es importante considerar este tipo de ataque en especial cuando consideramos la implementación de votaciones en línea. Otro ámbito en el que son comunes los ataques Sybil son las redes sociales, donde un grupo de cuentas falsas puede influenciar la percepción del público para darle a la discusión pública una orientación específica deseada.

Los ataques Sybil se utilizan también para censurar a los participantes de una red. Un grupo de nodos Sybil puede rodear al nodo del usuario e impedir que se conecte con los nodos honestos de la red. De esta manera, el atacante puede evitar que el usuario reciba o envíe información en la red.

![Sybil Attack]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/ES_sybil_D.jpg)
![Sybil Attack]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/ES_sybil_M.jpg)

Una manera de mitigar un ataque Sybil es la de adjuntar un costo a la creación de una identidad, o bien, la de incrementarlo. El costo debe balancearse cuidadosamente, pues debe ser lo suficientemente accesible para permitir la creación de nueva identidades legítimas, pero también lo suficientemente elevado como para dificultar la creación de muchas identidades en poco tiempo. En una cadena de bloques PoW, los nodos que toman decisiones sobre las transacciones son los nodos de minado. Hay un costo real asociado a la creación de identidades falsas, particularmente el costo de comprar el hardware de minado. Además, al atacante no le bastaría tener muchos nodos de minado en la red para influirla, necesitaría también una gran cantidad de poder computacional. En otras palabras, se necesitan grandes concentraciones de computadoras. Los costos que esto implica hacen que sea difícil atacar a una cadena de bloques PoW de esta manera.

Le hemos dedicado un artículo completo a los ataques Sybil y cómo mitigarlos en el nivel avanzado, pero por ahora prosigamos a un último tipo de ataque.

### Ataque del 51%

El ataque más conocido que afecta a las cadenas de bloques PoW es el llamado ataque del 51%. El objetivo de este ataque es lograr crear un doble gasto, es decir, lograr gastar la misma moneda dos veces.

Para llevar a cabo un ataque así en la red de una cadena de bloques, el atacante necesita controlar la mayoría del poder computacional de la red; de ahí su nombre.

Un minero malicioso que quiera llevar a cabo un doble gasto debe primero crear una transacción regular en la que utilice sus fondos para adquirir alguna mercancía u otro tipo de moneda en un centro cambiario. Al mismo tiempo, empezará a minar una cadena privada. Esto significa que seguirá el protocolo de minado normal, pero con dos excepciones.

Primero, no incluirá su propia transacción en su cadena privada. Segundo, no trasmitirá a la red los bloques que encuentre, por lo que su cadena adquiere la designación de privada.

![51% Attack]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/ES_percent_D.jpg)
![51% Attack]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/ES_percent_M.jpg)

Si el atacante controla la mayoría del poder computacional, su cadena de bloques crecerá más rápido (en promedio) que la cadena honesta. La regla de la cadena más larga de las blockchains PoW, conocida también como consenso de Nakamoto, gobierna lo que sucede en caso de este tipo de bifurcación. La cadena que tenga más bloques adjuntos, que es al mismo tiempo aquella creada con la mayor cantidad de poder computacional, se convierte en la cadena considerada válida.

Una vez que el atacante haya recibido la mercancía u otra divisa comprada con sus monedas, propagará su bifurcación privada al resto de la red. En ese momento, los mineros honestos dejan la cadena honesta y empiezan a minar sobre la cadena maliciosa. La red actúa como si la transacción del atacante nunca hubiera sucedido porque nunca la incluyó en la cadena maliciosa. Con la validación de su cadena, el atacante tiene aún el control de sus fondos y puede volver a gastarlos.

![51% Attack]({{site.baseurl}}/assets/post_files/technology/advanced/6.0-attacks-on-blockchain/percent.gif)

Esto le ha sucedido a muchas cadenas de bloques pequeñas en el pasado. De hecho, Horizen sufrió un ataque del 51% en junio de 2018. De inmediato, comenzamos a buscar soluciones para mitigar el riesgo de que estos ataques se lleven a cabo sobre cadenas pequeñas que no cuentan con la seguridad que brindan grandes cantidades de poder computacional (como en el caso de la blockchain de Bitcoin).

Ideamos una solución que penaliza cualquier retraso en la introducción de un bloque a la cadena, pues no hay razón legítima alguna que llevaría a un minero a propagar más de un bloque a la vez. Nuestro mecanismo de protección hace de este tipo de ataques una tarea muy costosa; tanto así que ha dejado de tener sentido económico llevar a cabo este tipo de ataque en la red de Horizen. Muchas otras cadenas de bloques están buscando también implementar mecanismos de protección similares para sus protocolos. El libro blanco de nuestro mecanismo de protección se encuentra disponible [aquí](https://www.horizen.io/assets/files/A-Penalty-System-for-Delayed-Block-Submission-by-Horizen.pdf).

### Resumen

Las cadenas de bloques han resuelto el problema de los generales bizantinos de lograr consenso sobre el orden de eventos en un ambiente de poca confianza. Aún así, hay diferentes maneras de atacar una cadena de bloques. Llevar a cabo estos ataques se vuelve más difícil con el tiempo, pues las cadenas van adquiriendo poder computacional y se vuelven más robustas.

En un ataque DDoS, el atacante busca hacer más lenta o detener por completo la red saturándola con grandes cantidades de transacciones. En un ataque Sybil, un actor malicioso controla muchas identidades falsas e intenta intervenir en una elección en línea o manipular la comunicación dentro de una red P2P. En un ataque del 51%, un minero que controla la mayoría del poder computacional de la cadena de bloques intenta gastar sus monedas dos veces creando primero una versión privada de la cadena y luego propagando todos sus bloques a la red de mineros honestos.

Los ataques presentados en este artículo, con la excepción del ataque del 51%, no son endémicos a las cadenas de bloques y han existido desde el surgimiento de las redes par a par distribuidas. Hay muchas medidas que pueden tomarse para mitigar el riesgo de un ataque, las cuales analizaremos con más detalle en la sección experta.

Esperamos que ese artículo no le haya dejado un mal sabor de boca sobre la seguridad de las cadenas de bloque. La tecnología blockchain es de las más seguras que existen, pero como cualquier otro elemento del ámbito digital, no es completamente impenetrable.
