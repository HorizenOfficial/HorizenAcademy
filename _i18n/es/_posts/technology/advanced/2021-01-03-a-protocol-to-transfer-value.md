---
layout: post
type: article
title: "La cadena como protocolo para transferir valor"
description: "Comparamos la blockchain como protocolo para transferir dinero con el internet como protocolo para transferir información."
permalink: /technology/advanced/a-protocol-to-transfer-value/
topic: technology
level: advanced
chapter: "¿Qué es una cadena de bloques?"
further_reads: [why_bitcoin_lightning_network_is_ingenious]
---

Es momento de abordar la cadena de bloques desde otra perspectiva, una que considera tanto el uso de esta tecnología como una red de pago para transacciones financieras como las reglas y acuerdos que la hacen funcionar.

> “[The] Bitcoin protocol and network today [a] value transfer network. Beyond that, it is a core, backbone security service securing contracts, physical and digital property, equities, bonds, robot AI and an enormous wave of applications which have not yet been conceived." - Jeff Garzik, Bitcoin Core Developer

> “El protocolo Bitcoin y su red son hoy en día una red para transferir valor. Más allá, es un importante servicio de seguridad que es la columna de la aseguración de contratos, propiedad física y digital, patrimonio, bonos, inteligencia artificial y un número enorme de aplicaciones que no se han concebido aún." - Jeff Garzik, Desarrollador de Bitcoin Core

El protocolo es un grupo de reglas que gobierna la validad de las transacciones y el funcionamiento general de la cadena de bloques. La [definición de Technopedia](https://www.techopedia.com/definition/12938/network-protocols) de un protocolo de red es la siguiente:

> "Network protocols are formal standards and policies comprised of rules, procedures and formats that define communication between two or more devices over a network. Network protocols govern the end-to-end processes of timely, secure and managed data or network communication."

> "Los protocolos de red son estándares y políticas formales compuestos de reglas, procedimientos y formatos que definen la comunicación entre dos o más dispositivos dentro de una red. Los protocolos de red rigen de principio a fin los procesos que permiten la comunicación oportuna, segura y administrada de datos o comunicaciones entre redes."

La creación de la cadena de bloques define este conjunto de reglas, procedimientos y formato. La única manera de alterar las reglas es si una mayoría de los participantes de la red decide hacerlo. Las cadenas de bloques públicas hacen necesario lograr un consenso, lo que a su vez requiere la cuidadosa consideración de cada cambio propuesto; una característica deseable que sirve para crear una fundación robusta para los usuarios.

### Protocolos de red

Podemos distinguir entre varios tipos generales de protocolos de red, que son:

 - Protocolos de comunicación de redes como TCP/IP
 - Protocolos de seguridad de redes como HTTPS y SSL
 - Protocolos de administración de redes como SNMP e ICMP
 - Protocolos para la transferencia de valor como Horizen o Bitcoin

A continuación aparece una colección de protocolos, muchos de ellos de uso diario. El protocolo TCP/IP, por ejemplo, especifica cómo separar información en paquetes, direccionarlos y encaminarlos a través de la red hasta su destino final. El estándar TCP/IP se emplea siempre que un usuario entra en línea y se comunica con otros servidores para recibir la información que desea.

EL SSL (Secure Sockets Layer) es un protocolo utilizado para establecer enlaces encriptados entre el servidor web y el cliente (como la computadora de un usuario) en una comunicación en línea. Por ejemplo, al enviar detalles de pago a una tienda en línea, se emplea un SSL para establecer una conexión encriptada antes de que se envíe la información bancaria.

El SNMP (Simple Network Management Protocol) es un conjunto de protocolos ejecutado por dispositivos de red como routers, servidores o impresoras. Un SNMP se encarga de los diferentes dispositivos de una red para operarlos a la perfección.
 
![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/ES_protocols_D.jpg)
![Protocols](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/ES_protocols_M.jpg)

A lo largo de la historia del internet, muchos han definido los estándares para el intercambio de diferentes tipos de información. Es importante mencionar que, en estos casos, no siempre era el mejor protocolo el que terminaba por adoptarse. Además, es difícil lograr que un usuario se mude de protocolo al haber empezado a utilizar otro, salvo que el segundo sea miles de veces mejor. Los desarrolladores se ven atraídos al tremendo número de bibliotecas y herramientas disponibles gracias a estos protocolos, y el ciclo se repite hasta que un solo protocolo se adopta como estándar.

Bitcoin se encuentra posicionado para convertirse en el estándar acordado para transferir valor vía internet. Los bitcoins implementan acuerdos que especifican las reglas, procedimientos y formatos para la transferencia de dinero sin un intermediario. La meta de Horizen es convertirse en el estándar para la transferencia de valor y datos privados en la web descentralizada 3.0.

Aunque algunos detractores apuntan al hecho de que el rendimiento (throughput; el número de transacciones por segundo) de las cadenas de bloques no es suficiente aún, hay otros que confían en que la construcción de una segunda red de tecnologías (como el Lightning Network o la utilización de cadenas laterales) puede compensar esta falta de rendimiento.

Esta discusión, en todo caso, es un asunto aparte. Podemos decir con confianza que un libro contable distribuido de algún tipo u otro se convertirá en el estándar acordado para la transferencia de valor en el futuro. Entre todas las criptomonedas, Bitcoin es la que mayor adopción tiene, por lo que muchos proyectos y empresas han empezado a partir de su protocolo. En un principio, esta clase de adopción era el primer indicio del éxito de un protocolo. En Horizen, estamos construyendo un protocolo de cadena de bloques escalable y utilizable por usuarios y desarrolladores, un proyecto que adquirirá mayor realidad con la implementación de nuestra serie de cadenas de laterales.

### ¿Cuáles son las reglas?

Un protocolo es un estándar compuesto de un conjunto de reglas y acuerdos orientados hacia un mismo propósito. Exploremos la naturaleza las reglas y acuerdos de una cadena de bloques.

Uno de los subconjuntos de reglas concierne la administración del libro contable. Cada nodo conserva una copia de la cadena y verifica cada transacción que se recibe. Una transacción se verifica y almacena en el mempool (memory pool) con el resto de las transacciones no incluidas aún en un bloque. Si la transacción es válida, se agrega a una copia local de la cadena de bloques y se retira del mempool una vez que aparece en el bloque. De esta manera, el mempool contiene exclusivamente transacciones sin confirmar.

Otro subconjunto concierne la estructura de un bloque válido. Es importante recordar que el bloque es solo un contenedor de información, tal como se explicó en el artículo anterior. El bloque contiene un encabezado que contiene información sobre la versión del cliente de Bitcoin utilizado para crearlo, una referencia al bloque anterior, una especie de resumen de todas las transacciones que contiene (la raíz de Merkle), un sello de tiempo y otras informaciones útiles.

Después del encabezado del bloque, aparece una lista de todas las transacciones incluidas.

![Block](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/ES_block_D.jpg)
![Block](/assets/post_files/technology/advanced/a-protocol-to-transfer-value/ES_block_M.jpg)

Queda ahora la cuestión de definir un conjunto de reglas que describan cómo debe lucir una transacción individual. Trataremos a detalle las transacciones en un artículo aparte, pero es suficiente saber por ahora que cada transacción debe incluir información sobre el remitente y receptor, la cantidad transferida y una firma digital. Esta firma es un medio para autorizar la utilización de los fondos del usuario, y es la llave privada la que se encarga de crearla. Explicaremos más este proceso en un artículo posterior sobre criptografía de llave abierta.

### La gran innovación de Bitcoin

Se le llama _teoría de juegos (game theory)_ al estudio de modelos matemáticos de interacción estratégica entre las entidades racionales encargadas de tomar decisiones (rational decision-makers), es decir mineros, nodos y los usuarios de criptomonedas. Cada usuario busca sacarle el máximo provecho a la red. Cuando Satoshi Nakamoto publicó el libro banco de Bitcoin, introdujo un sistema en el que cada participante posee un incentivo económico para apegarse a las reglas del protocolo. Es decir, es más provechoso seguir las reglas que contravenirlas. Este protocolo continúa funcionando a diez años de la introducción de Bitcoin, por lo que resulta obligatorio recalcar la consideración y visión a futuro que implicó la construcción de este sistema de incentivos.

Puede ser algo difícil comprender por qué consideramos que todos estos elementos tecnológicos del Bitcoin resultan pioneros, pues muchos de los conceptos que componen Bitcoin tienen años de presencia en el mercado. En todo caso, el concepto de la teoría de juegos es central al protocolo de una cadena de bloques pública. Fue el diseño de esta estructura de incentivos la que llevó a Bitcoin a ser la primera criptomoneda y blockchain en sobrevivir. Hubo varios prototipos criptomonetarios anteriores a Bitcoin, pero sufrían de demasiada centralización o de falta de incentivos para sus participantes.

### Resumen

El protocolo de una cadena de bloques es un conjunto de reglas que aplica a todos sus participantes; gobierna la manera en la que se comunican datos en la red, cómo deben constituirse los bloques y transacciones y cómo se ve recompensado cada usuario por su participación. Al mismo tiempo, establece los incentivos para que los participantes actúen con honradez, pues las conductas honradas resultan la estrategia más redituable.

Para concluir esta lección de la manera en que empezó, tomemos otra cita de Jeff Garzik.

> "Do not try to stuff every feature into the Bitcoin protocol. Let it do what it does best. Build systems on top of Bitcoin which use its strengths.... Putting all the world’s coffee Transacciones, and all the world’s stock trades, and all the world’s Internet of Things device samplings, on the Bitcoin blockchain seems misguided" - Jeff Garzik

> "No hay por qué atiborrar el protocolo Bitcoin. Déjenlo hacer lo que mejor hace. Se deben construir sobre Bitcoin sistemas que aprovechen sus fortalezas....  Incluir en la blockchain de Bitcoin todas las compraventas de café, operaciones bursátiles del mundo y muestreos de todo el internet de las cosas es un esfuerzo equivocado." - Jeff Garzik

