---
layout: post
type: article
title: "Redes par a par (P2P)"
description: "Esta sección trata la infraestructura “física” que hace operar a la cadena; la red par a par."
permalink: /technology/advanced/a-peer-to-peer-p2p-network/
topic: technology
level: advanced
chapter: "¿Cómo funciona una cadena de bloques?"
---

El internet de hoy en día es un sistema altamente centralizado. La mayoría de la información producida por sus usuarios termina en manos de unas cuantas grandes empresas. Sin embargo, existen ya varios sistemas verdaderamente distribuidos operando en línea, y aunque estos no son precisamente lo mismo que una red par a par, el propósito de este artículo nos permite usar ambos términos de manera intercambiable.

![Central distri](/assets/post_files/technology/advanced/2.4-p2p/ES_central-distri_D.jpg)
![Central distri](/assets/post_files/technology/advanced/2.4-p2p/ES_central-distri_M.jpg)

Un ejemplo de un sistema verdaderamente distribuido es el de BitTorrent. Como cualquier otra tecnología, las redes par a par tienen muchas aplicaciones legítimas, como lo es el intercambio confiable de software de código abierto. Sin embargo, poseen también varias aplicaciones un tanto menos legítimas, como la piratería de música y películas. Los sistemas distribuidos tienen varias ventajas que no poseen sus contrapartes centralizadas; la principal de ellas es su robustez. Esto se debe a que las redes par a par están incluyen en su diseño altos niveles de redundancia. Así, no hay un solo punto que pueda provocar que el sistema falle y este puede sobrevivir aun cuando la mayoría de la red se cae. Las autoridades se han enfrentado ya a complicaciones al intentar deshabilitar algunas redes par a par como BitTorrent o Napster. Esto se debe a la tolerancia a fallas inherente a la arquitectura par a par.

Este tipo de red tiene también sus desventajas a comparación de los sistemas centralizados. El alto nivel de redundancia, la necesidad de comunicación y la coordinación entre pares tienen como costo la eficiencia del sistema. El almacenamiento de información puede proporcionarnos el ejemplo más claro de esto. Un gran número de nodos, en el caso de Horizen más de 25,000, almacena una copia de la cadena de bloques. Este tipo de almacenamiento no resulta eficiente, pero logra que el libro contable que mantiene sea tanto inmutable como resistente a ataques de cualquier tipo.

En las ciencias computacionales, el teorema CAP (o conjetura de Brewer) postula que el costo de una red escalable y robusta es igual al tiempo que le toma a dicha red alcanzar la consistencia interna. Toma algo de tiempo para que un evento (como una transacción de criptomonedas) sea propagado a todos los nodos de la red. Además, en un segundo paso, cada nodo de la red que ha recibido el evento debe lograr un consenso sobre el orden en el que ocurrieron los eventos. En nuestro artículo sobre mecanismos de consenso, introduciremos los dos métodos principales utilizados para lograr consenso en una red distribuida.

Hemos encontrado una visualización simple pero efectiva de un sistema distribuido que demuestra el proceso de cómo se unen nuevos pares a la red y se sincronizan con los demás nodos. La visualización permite que el usuario agregue y elimine nodos al alzar para demostrar la robustez general del sistema. Con la arquitectura de una red par a par, todos los nodos son idénticos. Cada nodo de una red P2P actúa a la vez como cliente y servidor, a diferencia de un modelo cliente-servidor tradicional. Mientras que estos servidores pueden sufrir caídas durante las cuales los clientes no pueden acceder a sus datos, en una red P2P es preciso solamente conectarse a otro par cuando uno no esté en línea.

### Variaciones

Las variaciones de la mayoría de las redes distribuidas se relacionan a la estructura de la información mantenida y al mecanismo de transmisión o propagación de mensajes que los nodos emplean para comunicarse e intercambiar datos. Los dos protocolos de propagación más comunes son los de inundación y difusión.

En el caso de la inundación, los nodos propagan un mensaje con una demora de transmisión constante o determinística. La difusión es una versión refinada de la inundación. En las redes que emplean difusión, como las de Bitcoin y muchas otras criptomonedas, los nodos propagan mensajes con demoras de transmisión aleatorias. Esto hace más difícil que un tercero determine el origen de un mensaje y en consecuencia identifique la ubicación geográfica de los nodos y posiblemente hasta al dueño.

![Spreading](/assets/post_files/technology/advanced/2.4-p2p/ES_spreading_D.jpg)
![Spreading](/assets/post_files/technology/advanced/2.4-p2p/ES_spreading_M.jpg)

La mayoría de los sistemas distribuidos se construyen con una estructura que permite solo adjuntar información al final de la estructura (append-only); las cadenas de bloques son un buen ejemplo. Los bloques de la cadena son contenedores de datos criptográficamente conectados en un registro append-only. De esta manera, resulta inviable cambiar o eliminar datos del pasado. En algunas redes distribuidas puede ser deseable borrar información, eficientizando el almacenamiento y conservando solo la información relevante. En el caso de las cadenas de bloques, en especial las que utilizan las criptomonedas, esto resultaría devastador. Si cualquier transacción del libro contable quedara sujeta a la posibilidad de sufrir cambios, quedaría destruido el caso a favor del uso de las criptomonedas, pues existiría la posibilidad de saldos cambiantes. Queda claro que este escenario resulta poco favorable para una forma de dinero global resistente a la censura.

Muchas redes distribuidas emplean alguna variación de la difusión para propagar mensajes. Un par que recibe un mensaje lo transmite a todos sus pares, los cuales harán lo mismo a su vez. Tras unas pocas rondas de propagación, la red entera habrá recibido el mensaje propagado de manera exponencial a través de sus pares. Es necesario que el protocolo de comunicación satisfaga una serie de criterios deseables, como latencia baja, imparcialidad (todos los nodos deben experimentar más o menos la misma latencia) y anonimidad. En este contexto, la anonimidad implica que un tercero no debe poder descubrir la dirección IP que dio origen a un mensaje al monitorear la red.

### Incentivos

Para que una red distribuida pueda operar, es necesario que todos los participantes tengan algún tipo de incentivo para apegarse a las reglas o protocolo de la red. En el caso de una blockchain para criptomonedas, los incentivos son monetarios. Se recompensa a los mineros con tokens de valor económico a cambio de verificar transacciones y lograr consensos a lo largo de red. Horizen incentiva financieramente también a los operadores de nodos, pues operarlos es también una forma de trabajo. Establecer un nodo toma tiempo, el nodo debe alojarse en un servidor y su operador debe actualizar el software de manera ocasional. Los mineros reciben el 60% de la recompensa total del bloque (12.5 ZEN). El otro 40% se divide entre operadores de nodos seguros (10%), operadores de súper nodos (10%) y la organización benéfica de Horizen. En una cadena de bloques con permisos mantenida por un consorcio de empresas (para supervisar una cadena de producción, por ejemplo) el incentivo para mantener el libro contable es el tener acceso a datos de negocios valiosos sin tener que confiar en terceros.

Consideramos que la Web 3.0 se beneficiará enormemente del surgimiento de las redes distribuidas, y que en algún momento viviremos una transición de servicios centralizados a descentralizados.

### Resumen

Las redes par a par ofrecen robustez y resistencia a las fallas a cambio de cierto grado de eficiencia. Cada nodo hace las mismas tareas dentro de la red y funciona al mismo tiempo como cliente y servidor. Si un par se desconecta, basta con que el usuario se conecte a otro. Si un usuario ejecuta un nodo pero se desconecta de la red durante un tiempo, es necesario que vuelva a conectarse en algún momento para que sus pares le proporcionen toda la información faltante hasta ponerlo al corriente nuevamente.

En los dos artículos siguientes, presentaremos los dos mecanismos más seguros utilizados para lograr un consenso sobre el historial de eventos de una red distribuida. Explicaremos en qué consisten las pruebas de trabajo y participación (proof of work y proof of stake), y luego veremos a detalle el proceso de minado, incluyendo el problema computacional que deben resolver los mineros.

## Explicación Simple a Continuación - ¿Qué es una red de par a par?

En una red par a par (peer to peer), cada participante está conectado con todos los demás. Comparada con un sitio web regular, esto la hace más robusta.

Hay computadoras especiales en el internet que almacenan la mayoría de los sitios web. A estas se les conoce como servidores. Para acceder a un sitio web, es necesario conectarse a su servidor. Si la computadora del servidor resulta tener un problema, el sitio web no funcionará.

En una red par a par, la conexión también falla si el par de un usuario llega a desconectarse. Sin embargo, solo es necesario que este se conecte a otro par en la red para que todo vuelva a funcionar regularmente. Esto hace robustas a las cadenas de bloques y criptomonedas.

![Peer-to-Peer Network](/assets/post_files/eli5/what-is-a-peer-to-peer-network/peer-to-peer-network_D.jpg)
![Peer-to-Peer Network](/assets/post_files/eli5/what-is-a-peer-to-peer-network/peer-to-peer-network_M.jpg)
