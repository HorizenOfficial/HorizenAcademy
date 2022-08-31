---
layout: post
type: article
title: "Cadenas laterales"
description: " Las cadenas laterales son un desarrollo prometedor para las cadenas de bloques. Hablaremos de qué son y cómo pensamos implementarlas."
permalink: /horizen/advanced/sidechains/
topic: horizen
level: advanced
---

Una cadena lateral es una cadena de bloques con la función adicional de ser interoperable con la cadena de bloques principal. Las transacciones son la interacción más común en una cadena de bloques que aloja una criptomoneda, como es el caso de la cadena de Horizen. El equipo técnico de Horizen, dirigido por Alberto Garoffolo, ha propuesto la construcción de una cadena lateral con base en principios PoS (de prueba de participación).

La principal innovación es un nuevo protocolo de transferencia hacia atrás que permite transacciones entre una de muchas posibles cadenas laterales posibles con la cadena principal sin necesidad de que la cadena principal tenga que rastrear a la lateral y sin introducir una federación centralizada de validadores. Aunque se proporcionará una implementación de referencias de un protocolo de consenso de cadena lateral, será posible una amplia gama de protocolos de consenso.

Las cadenas laterales son un concepto que ha interesado al mundo tecnológico por un tiempo. La primera propuesta para una cadena lateral la desarrollaron Back et al. en 2014, y varios equipos diferentes están trabajando para implementarlas como solución a los problemas de escalabilidad e interoperabilidad.

### ¿Qué son las cadenas laterales y por qué resultan deseables?

When Back et al. introduced the concept of sidechains in 2014 they provided the following definition along with it:

**Inglés**

_"A sidechain is a blockchain that validates data from other blockchains. […] A pegged sidechain is a sidechain whose assets can be imported from and returned to other chains; that is, a sidechain that supports two-way pegged assets."_ A. Back et al. — Enabling blockchain innovations with pegged sidechains, 2014

**Español**

_"Una cadena lateral es una cadena de bloques que valida los datos de otras cadenas de bloques. […] Una cadena lateral se considera una cadena vinculada, cuando sus activos pueden importarse de y ser devueltos a otras cadenas; es decir, una cadena lateral que permite el intercambio de activos en ambos sentidos."_ A. Back et al. – “Enabling blockchain innovations with pegged sidechains”, 2014

En otras palabras, una cadena lateral es una cadena de bloques, pero con la habilidad de comunicarse e interoperar con una o más cadenas. Cuando alguien se refiere a una cadena lateral en la actualidad, generalmente se refieren a una cadena vinculada, las cuales permiten al usuario transferir activos entre cadenas en ambos sentidos.

![sidechains]({{site.baseurl_root}}/assets/post_files/horizen/advanced/sidechains/ES_sidechains_D.jpg)
![sidechains]({{site.baseurl_root}}/assets/post_files/horizen/advanced/sidechains/ES_sidechains_M.jpg)

### ¿Qué beneficios tiene esta tecnología?

La mayoría de las cadenas de bloques que alojan criptomonedas emplean un algoritmo de consenso PoW y han incorporado las principales funciones del protocolo Bitcoin, heredando a la vez muchas de las restricciones impuestas por el código creado por Satoshi Nakamoto. Esto incluye un rendimiento limitado, latencia alta y límites de escalabilidad. Las cadenas laterales son una opción para superar algunos de estos impedimentos tecnológicos. Sin embargo, además de abrirles la puerta a posibles avances tecnológicos, tocan también de alguna manera u otra el tema de la gobernanza.

Como lo han demostrado los debates recientes, hacerle cambios al código base de un proyecto descentralizado puede ser un proceso tedioso; algo que se considera más una función que un error de programación. La estabilidad (no de precio, sino del código) resulta vital para un proyecto como Bitcoin, y la seguridad general del protocolo se beneficia enormemente de la consideración meticulosa de cada cambio que se la hace al sistema.

Las cadenas laterales ofrecen una manera de implementar nuevas funciones sobre una primera capa de protocolo sin comprometer su seguridad o estabilidad. Tras una bifurcación inicial que incluye la habilidad de crear cadenas laterales e introduce una manera de transferir activos de la cadena principal a la lateral y viceversa, pueden construirse un número de cadenas paralelas, cada una con un propósito diferente y sin tener que lograr consenso para implementar cada función individual.

Es importante remarcar que el cambio inicial al código base que permitirá el uso de cadenas laterales y transferencias entre cadenas debe hacerse con cuidado, y que toda solución posible debe evaluarse meticulosamente. Si un proyecto logra implementar las funciones antes mencionadas, entonces sus desarrolladores pueden empezar a experimentar y a trabajar en proyectos donde cualquier cambio al protocolo tradicionalmente exigiría un consenso, el cual podría tomar meses o años en lograrse. Idealmente, la implementación de cadenas laterales les dará a los desarrolladores en la cadena lateral una mayor libertad sin introducir la posibilidad de comprometer la seguridad de la cadena principal. Si un usuario no utiliza una cadena lateral particular, no tienen por qué importarle los cambios que se le apliquen.

### ¿Qué puede hacerse con una cadena lateral?

Como ya habíamos mencionado, hay muchos equipos de trabajo dedicados a la tecnología de cadenas laterales, cada uno con un propósito diferente. Por ejemplo, el equipo de Rootstock está buscando una manera de proporcionar contratos inteligentes sobre la cadena de Bitcoin, refiriéndose a sus cadenas laterales como ‘cadenas secundarias’. Polkadot, que les ha dado el nombre de ‘paracadenas’, busca conectar cadenas de bloques con y sin permisos. La idea general de Plasma también se basa en las cadenas laterales o ‘cadenas hijas’ y tiene el objetivo principal de lograr escalabilidad. Otras cadenas llamadas ‘drivechains’ tienen el propósito de permitir que se transfieran bitcoins a otras aplicaciones o softwares, como diferentes cadenas de bloques públicas.

Puede argumentarse una distinción entre cadenas laterales y drivechains, como lo ha hecho Rootstock en [este artículo](https://docs.rsk.co/Drivechains_Sidechains_and_Hybrid_2-way_peg_Designs_R9.pdf) (en inglés). Retomaremos esta distinción dentro de pronto al hablar de cómo funcionan las cadenas laterales. La idea es fundamentalmente la misma, sin embargo, y satisface la definición de una cadena lateral vinculada propuesta por Back et al. hace cuatro años.

Quienes critican el concepto de las cadenas laterales apuntan al hecho de que muchas de las cadenas laterales implementadas actualmente dependen de un grupo de validadores para facilitar transacciones entre cadenas, por lo que a las construcciones de cadenas laterales se les llama a veces ‘de mínima confianza’ (trust-minimized) en lugar de libres o sin necesidad de confianza (trustless). El riesgo se reduce a la habilidad que poseen los validadores de censurar transacciones entre las cadenas principal y lateral. Nuestro protocolo ataca este problema de una manera elegante.

### ¿Qué busca Horizen al implementar cadenas laterales?

El proyecto de cadenas de bloques de Horizen se ha puesto objetivos muy ambiciosos. Planeamos incluir características como un sistema de tesorería para la OAD (el cual se está desarrollando en colaboración con IOHK), una solución descentralizada para rastrear nodos seguros y súper nodos y sus recompensas y un protocolo de DAG de bloques para incrementar el rendimiento de la cadena en cuanto a transacciones procesadas.

Es fácil ver los beneficios de desarrollar primero una cadena lateral, pues algunas de estas funciones requerían hacerle modificaciones significativas al cliente central de implementarse al código base existente. Desarrollar nuevas características y hacer cambios al protocolo, aunque sean mínimos, resulta problemático no solo por la dificultad de lograr consenso, sino también porque implica riesgos de seguridad. Por lo tanto, cada adición debe considerarse cuidadosamente.

La idea de Horizen es desarrollar de una sola vez una implementación de cadenas laterales robustas para luego simplificar el desarrollo de nuevas características que expandan el ecosistema Horizen. La implementación de cadenas laterales se desemparejará por completo de la cadena principal y podría, por ejemplo, ejecutar un algoritmo de consenso completamente diferente al de esta. De esta manera, sería posible tener cadenas laterales para la tesorería y sistema de rastreo de nodos con un protocolo de consenso [PoS](https://academy.horizen.io/es/technology/advanced/consensus-mechanisms/) y conservar a la par la cadena principal PoW.

### Cómo funciona

El desarrollo del modelo de cadenas laterales (sidechains) consiste de dos partes:

1.  EL *protocolo de consenso de la cadena lateral (sidechain consensus protocol)* — SCP
2.  El _protocolo de transferencia entre cadenas_ o peg de doble sentido (two-way peg) — CCT

El _protocolo de consenso de la cadena lateral_ gobierna cómo se pone de acuerdo la red respecto a la creación de bloques nuevos y el historial de transacciones. El CTT determina cómo pueden enviarse activos de la cadena principal a la lateral y viceversa.

![SCP_CCT]({{site.baseurl_root}}/assets/post_files/horizen/advanced/sidechains/ES_SCP_CCT_D.jpg)
![SCP_CCT]({{site.baseurl_root}}/assets/post_files/horizen/advanced/sidechains/ES_SCP_CCT_M.jpg)

### Resumen

Las cadenas laterales podrían ser una manera elegante de superar algunas de las limitantes actuales respecto a la escalabilidad y gobernanza del ecosistema blockchain. Una cadena lateral puede no solo aumentar el rendimiento, o sea el número de transacciones por segundo (tps), sino también permitir la experimentación sin comprometer la seguridad de la cadena de bloques principal.

La habilidad de implementar cadenas laterales aumentará dramáticamente la posibilidad de construir encima de las cadenas de bloques públicas existentes. Uno de los primeros usos que Horizen piensa darle a su cadena lateral tendrá que ver con la tesorería, y será uno de los primeros pasos para hacer de Horizen una organización autónoma descentralizada (OAD).\

## Contenido Experto a Continuación - Cadenas laterales

![sidechains]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_sidechains_D.jpg)
![sidechains]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_sidechains_M.jpg)

La habilidad de implementar cadenas laterales aumentará dramáticamente la posibilidad de construir encima de las cadenas de bloques públicas existentes. Uno de los primeros usos que Horizen piensa darle a su cadena lateral tendrá que ver con la tesorería, y será uno de los primeros pasos para hacer de Horizen una organización autónoma descentralizada (OAD).

### Cómo funciona

El desarrollo del modelo de cadenas laterales (sidechains) consiste de dos partes:

1.  El _protocolo de consenso de la cadena lateral (sidechain consensus protocol)_  — SCP
2.  El _protocolo de transferencia entre cadenas (cross-chain transfer protocol)_ o peg de doble sentido (two-way peg) — CCT

El _protocolo de consenso de la cadena lateral_ gobierna cómo se pone de acuerdo la red respecto a la creación de bloques nuevos y el historial de transacciones. El _protocolo de transferencia entre cadenas_ determina cómo pueden enviarse activos de la cadena principal a la lateral y viceversa.

El CCT consiste de dos subprotocolos, de los cuales hablaremos a continuación.

El primer subprotocolo concierne las _transacciones hacia delante_ (forward transactions), que son transacciones de la cadena principal (mainchain) a la lateral. El segundo subprotocolo concierne las _transacciones hacia atrás_ (backward transactions), que son transacciones de la cadena lateral a la principal.

![SCP_CCT]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_SCP_CCT_D.jpg)
![SCP_CCT]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_SCP_CCT_M.jpg)

La primera decisión con respecto al diseño de nuestro modelo fue si queríamos que la cadena principal tuviera conocimiento de las cadenas laterales. Finalmente, el equipo de Alberto Garoffolo decidió desarrollar el SCP y CCT por separado.

> El protocolo CCT se unificará y fijará por medio de la lógica de la cadena principal para que todas las cadenas laterales empleen el mismo protocolo CCT. El protocolo SCP estará completamente separado del CCT y de la lógica de la cadena principal en general para que los desarrolladores de las cadenas laterales tengan la libertad de utilizar el protocolo SCP según sus necesidades.

Aunque son posibles varios protocolos de consenso diferentes, aquí esbozaremos la propuesta de implementación del SCP desarrollada a partir del algoritmo Ouroboros; un protocolo de consenso de prueba de participación (proof of stake o PoS) que emplea el concepto de delegación. Después, hablaremos del protocolo de transferencia entre cadenas (cross-chain transfer protocol).

### Requisitos

Para comprender este artículo es necesario sentirse cómodo con términos de tecnología blockchain relacionados a la estructura del bloque (encabezado; hash del bloque, árboles hash, etc.), pruebas de trabajo y de participación (PoW y PoS) y cadenas laterales.

- [Estructura de bloque](https://academy.horizen.io/es/technology/advanced/blockchain-as-a-data-structure/) (Cabecera, Hash del bloque, Árbol deals merkle…)
- [Prueba de trabajo/Prueba de participación](https://academy.horizen.io/es/technology/advanced/consensus-mechanisms/)
- Cadenas laterales

### El protocolo de consenso de la cadena lateral – SCP

El SCP propuesto se desarrolló a partir del protocolo Ouroboros desarrollado por IOHK para el proyecto Cardano con algunas modificaciones ligeras. Es un protocolo de consenso PoS que emplea el concepto de delegación y que, de manera general, funciona de la manera siguiente:

- El tiempo se divide en épocas (epochs) de “k” posiciones (slots). No lo hemos especificado aún, pero supongamos que “k” vale 8 para dar un ejemplo (y coincidir con la gráfica a continuación).
- Cada posición representa la oportunidad de crear un bloque de la cadena lateral dentro de un cierto lapso. La investigación sugiere que un lapso de 20 segundos resulta razonable para permitir la sincronización global de la red. Durante una época dada se podrán forjar hasta “k” bloques.
- Hay un líder de posición (slot leader) para cada posición. El líder de posición cuenta con la capacidad de crear un bloque dentro su lapso correspondiente.
- Antes de empezar cada época, el procedimiento de selección de líderes de posición (slot leader selection procedure) le asigna un líder a cada posición de la época (en nuestro ejemplo, ocho líderes serán asignados por época).
- Si el líder de posición de un bloque dado no forja un bloque nuevo durante su lapso, el próximo líder de posición en forjar un bloque incluirá en él las transacciones no incluidas en ningún bloque hasta entonces.

![epoch]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_epoch_D.jpg)
![epoch]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_epoch_M.jpg)

#### Modificaciones al protocolo Ouroboros

La seguridad de un software suele evaluarse conforme a ciertos supuestos. Los protocolos de consenso no son la excepción.

El consenso PoW, por ejemplo, se basa en el supuesto de que una mayoría honesta cuenta con la mayoría del poder computacional (hashing power) de la red. El supuesto central del protocolo Ouroboros (un protocolo PoS) es que el procedimiento de selección de líderes de posición se hace de manera verdaderamente aleatoria; nadie debe poder predecir a quién se le asignará la función de líder de posición durante un lapso dado.

Para lograr este objetivo se necesita una fuente de aleatoriedad, una propiedad más difícil de lograr de lo que uno podría pensar. El protocolo PoS Ouroboros original introdujo un protocolo de lanzamiento de monedas basado en el intercambio verificable de secretos para generar aleatoriedad. La solución propuesta (la modificación) se aprovecha de la cadena principal PoW para lograrlo; una solución sencilla y efectiva.

La aleatoriedad se deriva del menor block hash de la cadena principal dentro de un lapso dado. Para que esto funcione, se elegirá un número de certificadores antes de empezar el periodo de generación de aleatoriedad. Se necesitaría una cantidad considerable de poder computacional para corromper este sistema. Suponiendo que una mayoría honesta controla la mayoría del poder computacional de la cadena principal, resultaría inviable e infructuoso. Analizaremos formalmente dicho ataque por separado.

Otra modificación hecha a la implementación original de Ouroboros concierne las referencias a la cadena principal incluidas en los bloques de la cadena lateral. Hablaremos más de esto en el contexto del protocolo de transferencia entre cadenas al introducir el concepto de referencia completa.

#### Viveza y persistencia

Garay, Kiayias y Leonardos afirman que el procedimiento estándar para comprobar la seguridad del protocolo de consenso de una cadena de bloques requiere que se demuestre la habilidad del protocolo de satisfacer dos propiedades fundamentales de un libro contable distribuido: viveza y persistencia.

**Inglés**

> “Persistence states that once a transaction goes more than k blocks “deep” into the blockchain of one honest player, then it will be included in every honest player’s blockchain with overwhelming probability, and it will be assigned a permanent position in the ledger.” — Garay, Kiayias & Leonardos, 2014

**Español**

> “La persistencia implica que una vez que una vez que una transacción alcanza una profundidad de “k” bloques dentro de la cadena de un participante honesto, entonces muy probablemente podrá encontrarse también en la cadena del resto de los participantes honestos, por lo que tendrá asignada una posición permanente dentro del libro contable.” — Garay, Kiayias & Leonardos, 2014

El concepto de persistencia está, por lo tanto, estrechamente ligado a la propiedad de inmutabilidad.

**Inglés**

> “[…]Liveness says that all transactions originating from honest account holders will eventually end up at a depth more than k blocks in an honest player’s blockchain, and hence the adversary cannot perform a selective denial of service attack against honest account holders.” — Garay, Kiayias & Leonardos, 2014

**Español**

> “[…] La viveza implica que toda transacción originada por un cuentahabiente honesto finalmente terminará a una profundidad de más de “k” bloques en la cadena de un participante honesto dado, y que por lo tanto un adversario no puede llevar a cabo un ataque selectivo de denegación de servicio contra un cuentahabiente honesto.” — Garay, Kiayias & Leonardos, 2014

Esta idea se relaciona a la propiedad de resistencia a la censura.

(Debe obviarse que la “k” aquí tratada es distinta a la “k” que describe el número de posiciones por época que discutimos anteriormente).

Las propiedades de viveza y persistencia se comprueban según un número de supuestos como el de la existencia de una mayoría honesta entre los participantes. Una lista exhaustiva de estos supuestos y lo que implican puede encontrarse en el documento original publicado por Ouroboros.

#### Enabling Different SCP’s

The motivation behind developing the SCP and CCT separately was to enable a variety of possible SCP’s. Although the following description of the Cross-Chain Transfer Protocol takes up on a few concepts of the adapted Ouroboros protocol described above, it can be combined with a number of other consensus mechanisms. Horizen is currently looking into a Block-DAG (Directed Acyclic Graph) structure. The interoperability between another POW sidechain or a Block-DAG mainchain and the CCT protocol will be subject to additional research.

### El protocolo de transferencia entre cadenas - CCT

**Inglés**

> The CCT protocol is the most important part of the sidechain construction since it defines the overall structure of the communications between MC and SC. - Sidechain Whitepaper ; Garoffolo, Viglione

**Español**

> El protocolo CCT es el factor más importante en la construcción de una cadena lateral a que define la estructura general de las comunicaciones entre la cadena principal (CP) y la cadena lateral (CL). - Sidechain Whitepaper ; Garoffolo, Viglione

Ya habíamos mencionado anteriormente que el CCT cuenta con dos subprotocolos:

El primer subprotocolo concierne las transacciones hacia delante, que son transacciones de la CP a la CL. El segundo subprotocolo, en cambio, concierne a las transacciones hacia atrás, que son aquellas que se hacen de la CL a la CP.

#### Transacciones hacia delante y referencia completa

Cuando el objetivo es la posibilidad de hacer transferencias entre cadenas, debe hacer un medio de comunicación entre ellas. La CL debe estar consciente de todas las transacciones realizadas en la CP que estén enviando activos a una dirección en la CL (hacia delante).

Las transacciones hacia delante son posibles gracias a la referencia completa (full referencing), la cual resuelve dos problemas a la vez: permite transferencia de la CP a la CL de manera directa y se encarga de definir finalidad (o la falta de ella).

![full referencing]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_full_referencing_D.jpg)
![full referencing]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_full_referencing_M.jpg)

**Inglés**

> Full referencing implies that the sidechain blocks contain the full chain of the mainchain block references. Even if some block forger missed his opportunity to include a reference to the newly generated MC [mainchain] block, some of the following block forgers will include the missed mainchain reference. - Sidechain Whitepaper; Garoffolo, Viglione

**Español**

El concepto de referencia completa implica que los bloques de la cadena lateral contienen completa la cadena de las referencias a los bloques de la cadena principal. Aunque un forjador haya perdido su oportunidad de incluir una referencia a un bloque recién generado en la cadena principal, alguno de los forjadores de bloques subsecuentes incluirá la referencia faltante. - Sidechain Whitepaper; Garoffolo, Viglione

Y bueno, ¿cómo es que la referencia completa logra habilitar las funciones que acabamos de mencionar? Las referencias pueden ser una de dos cosas:

- Si el bloque de la CP no contiene ninguna transacción a la CL solo el block hash se utiliza como referencia.
- Si hay una o más transacciones hacia delante en el último bloque, todo el encabezado del bloque, las transacciones hacia delante y todo el camino de Merkle que se desprende de las transacciones se emplean como referencia.

Los nodos de una CL pueden verificar las transferencias fácilmente incluyendo el encabezado del bloque y el camino de Merkle de las transacciones hacia delante. Podemos considerar cada cadena, lateral y principal, como un libro contable individual. Ya que los contables de la cadena lateral monitorean constantemente el libro de la cadena principal, les resulta fácil agregar las transacciones entre cadenas a su libro contable. Al incluir con las transacciones sus caminos de Merkle y el encabezado del bloque correspondiente, todas las entidades de la cadena lateral pueden verificar la validez de cada transacción sin tener que confirmar la información en la cadena principal por cuenta propia.

![forward]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_forward_D.jpg)
![forward]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_forward_M.jpg)

Habilitar el protocolo de transferencia hacia delante implica hacer cambios en la lógica de la cadena principal. Debe introducirse un nuevo tipo de transacción, una que consume monedas y produce metadatos que le permiten al usuario recibir la misma cantidad de monedas recién creadas en la cadena lateral (menos la tarifa de transacción). Lo mismo pasa en el caso de una transacción hacia atrás; se consumen monedas en la cadena lateral y se crea una cantidad equivalente en la cadena principal (de nuevo, menos el monto de la tarifa de transacción). (Podría crearse también una estructura con un procedimiento de candados abiertos y cerrados).

El otro problema resuelto por la propuesta se refiere a la cuestión de finalidad en relación a las cadenas PoW que emplean el consenso de Nakamoto. Es posible que una transacción hacia delante válida se incluya en un bloque de la cadena principal en un inicio, pero que el bloque con dicha transacción se bifurque de la cadena un tiempo después y quede huérfano. Esto podría crear la oportunidad de gastar dos veces (una vez en la CP y otra en la CL) si la transacción se había agregado ya al libro contable de la cadena lateral. Esta atadura elimina dicha situación. En caso de una bifurcación en la cadena principal, los bloques de la cadena lateral que contienen referencias al bloque huérfano de la cadena principal se revierten también.

### Transacciones hacia atrás y certificadores

Ahora lo interesante. ¿Cómo puede la cadena principal verificar una transacción hacia atrás entrante si no está consciente de lo que pasa en la cadena lateral? Volviendo a emplear la analogía del contable, debe resolverse el siguiente problema: Los contables de la cadena principal deben agregar a su libro las transacciones entrantes de la cadena lateral, pero sin ver nunca los libros que los rodean.

Regresemos al factor que diferencia a una cadena lateral de una drivechain. En el caso de la construcción de una cadena lateral vinculada hay dos modos operacionales que conciernen la ejecución de transacciones hacia atrás, sincrónico y asincrónico.

**Inglés**

> The synchronous mode implies that both main and sidechains are aware of each other and can verify transfer transactions directly, while the asynchronous mode relies on validators to process transfers. - Sidechain Whitepaper; Garoffolo, Viglione

**Español**

> El modo sincrónico implica que ambas cadenas (principal y lateral) están al tanto de la otra y pueden verificar transacciones de manera directa, mientras que el modo asincrónico depende de un validador para procesar una transferencia. - Sidechain Whitepaper; Garoffolo, Viglione

Decidimos desarrollar el SCP y CCP por separado. Ya que uno de nuestros objetivos era desarrollar una variedad de SCP, no resultaba viable que la cadena principal rastreara a todas sus cadenas laterales, pues tendría que conocer también cada uno de sus protocolos de consenso individuales. Esto implica que, estrictamente hablando, la implementación propuesta tiene las cualidades de una drivechain más que de una cadena lateral, pues su modo operacional es asincrónico y la cadena principal no la rastrea.

### Cómo pasar datos de transacción de la cadena lateral a la principal

En cuanto a los datos, para que todo esto funcione es necesario contar con un mecanismo de transferencia iniciado en la cadena lateral que informe a la cadena principal si hay transacciones hacia atrás entrantes. Esto se logra introduciendo un nuevo tipo de contenedor de datos llamado certificado entre cadenas (cross-chain certificate) o CCCert.

![CCCert]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_CCCert_D.jpg)
![CCCert]({{site.baseurl_root}}/assets/post_files/horizen/expert/sidechains/ES_CCCert_M.jpg)

El CCCert contiene información básica como el identificador de la cadena lateral (SCid) y el identificador del CCCert como encabezado. La lista de transferencias hacia atrás (backward transfer list) registra todas las transacciones entre cadenas. Los tres últimos campos de datos conciernen a los certificadores que cumplen la función de validadores conforme a la cita anterior.

Los contables de la cadena principal no pueden ver los demás libros contables (las cadenas laterales) pero sí deben estar al tanto de cualquier evento relacionado a su libro. Por lo tanto, alguien les debe comunicar esta información de manera estandarizada. Los certificadores son quienes informan a los contables de la cadena principal sobre cualquier transacción entrante, y la comunicación estandarizada se logra a través de los certificados entre cadenas.

Los certificadores registran en la cadena principal con un tipo especial de transacción, uno que incluye el identificador de la cadena lateral en cuestión y un depósito que se guarda con candado. Esta participación tiene que ver con la prevención del fraude, pero más de eso después. Cualquier participante de la cadena principal puede convertirse en certificador. Un subgrupo de los certificadores verifica las transacciones hacia atrás en la cadena lateral, las registra en la lista de transferencias hacia atrás, firma el CCCert resultante con una firma agregada y lo envía a la cadena principal.

La facilitación de transacciones hacia atrás es por lo tanto una forma de trabajo, y debe haber un incentivo para hacerlo. Además, el incentivo debe diseñarse de manera que aliente el comportamiento honesto y haga no rentable el comportamiento malicioso. Uno de nuestros objetivos principales fue el de diseñar el protocolo para descentralizar es proceso de verificación entre cadenas.

El incentivo de los certificadores es el de recolectar las tarifas de transacción de todas las transacciones que procesan. Además, en caso de presentar un certificado fraudulento, perderían acceso a su participación guardada. Un grupo de certificadores con un depósito combinado de X guardado en la cadena principal solo tiene permitido firmar CCCerts con un valor combinado no mayor a 0.5 X. A esta cantidad se le llama cantidad máxima del certificado (maximum certificate amount; max_cert_amount).

Si no se le pusiera un límite a la cantidad de fondos transferibles por certificado sería posible guardar un depósito, firmar un CCCert fraudulento de mayor valor, enviarlo a una dirección personal en la cadena principal y continuar viviendo felizmente sin perder la participación guardada en la cadena.

### El reporte de fraudes

La implementación de esta medida se basa nuevamente en el supuesto de que existe una mayoría honesta dentro de los participantes de la cadena. Como podrá haber notado ya, hay un campo de datos en el CCCert nombrado “lista de reportes de fraude” (fraud reports list). Este campo se utilizaría de la siguiente manera en caso de fraude:

- Se crea un certificado fraudulento, CCCert (i), de manera privada y la mayoría de los certificadores del grupo (i) lo firma.
- CCCert (i) se envía a la cadena principal y se incluye en el bloque (i). La cadena principal no cuenta con la capacidad de verificar el certificado y detectar el fraude por sí misma.
- La información del certificado fraudulento se sincroniza en la cadena lateral según el principio de referencia completa.
- El siguiente grupo de certificadores (i+1) verifica el CCCert (i) anterior en la cadena lateral, detecta el fraude e incluye un reporte de fraude en su certificado CCCert (i+1).
- Una vez que la cadena principal recibe CCCert (i+1) con el reporte de fraude, el grupo (i) de certificadores maliciosos perderá la capacidad de recuperar su depósito.
- Si el grupo (i+1) no incluye un reporte de fraude, el grupo que le sigue, (i+2), elaborará el reporte y ambos grupos (i e i+1) perderán sus depósitos.

Al no reportar un fraude detectado cualquiera de los grupos de verificadores se arriesga a perder sus fondos, así como el grupo malicioso original. También es importante apuntar que el diseño del protocolo hace imposible que un mismo certificador forme parte de un grupo de certificadores de manera consecutiva.

El funcionamiento real de una transferencia hacia atrás es un tanto más complejo. Si le gustaría leer más al respecto, lo invitamos a consultar la fuente original.

Para proteger a la cadena principal de inflación en caso de que todo salga mal existe una última línea defensiva. El seguro es un mecanismo en la cadena principal que rastrea la cantidad total de activos que se han transferido a cada cadena lateral. Resulta imposible retirar de la cadena lateral una cantidad mayor a la depositada ahí inicialmente, previniéndose así el surgimiento de inflación en la cadena.

### Resumen

Las cadenas laterales podrían ser una manera elegante de superar algunas de las limitantes actuales del ecosistema blockchain en materias de escalabilidad y gobernanza. La principal contribución de nuestro equipo fue la de crear un nuevo protocolo de transferencia hacia atrás que no depende de un grupo centralizado de validadores. Cualquiera de los participantes puede convertirse en certificador si así lo desea, introduciendo la descentralización al proceso de verificación entre cadenas

Desde la perspectiva de la seguridad, lo más importante es diseñar la implementación de manera que ninguna de las cadenas laterales puedan dañar la cadena principal.

El SCP debe garantizar la asignación verdaderamente aleatoria de líderes de posición. Además, deben garantizarse las cualidades de viveza y persistencia dentro del sistema.

La seguridad del CCT se mantiene incluyendo referencias a la cadena principal en cada bloque (referencia completa) y un límite a la cantidad total que puede firmar un grupo de certificadores y por medio de un seguro que registra la cantidad total que se ha transferido a una cadena lateral dada, la cantidad máxima que puede retirarse de la misma.

Contar con la posibilidad de implementar cadenas laterales aumentará dramáticamente las posibilidades de construir sobre las cadenas de bloques públicas existentes. Queda mucho trabajo por hacer desde estos pasos teóricos hasta la implementación de la primera cadena lateral en la red principal de Horizen, como por ejemplo rigurosas pruebas de seguridad y la evaluación del protocolo de consenso de la cadena lateral.

Uno de los primeros usos que Horizen le dará al proyecto de cadenas laterales muy probablemente será el de crear una cadena dedicada para la tesorería de la organización, acercando a Horizen a convertirse en una verdadera [organización autónoma descentralizada](https://academy.horizen.io/es/horizen/advanced/dao-decentralized-autonomous-organization/).

## Contenido para Principiantes a Continuación - Cadenas laterales

Como ya mencionamos, una limitante importante para la adopción en masa de la tecnología blockchain es la cuestión de escalabilidad. En la actualidad, una cadena de bloques ordinaria es capaz de manejar unas pocas transacciones por segundo, mientras que la red de pago de VISA procesa miles por segundo.

Hay muchas maneras de escalar una blockchain, pero Horizen ha decidido concentrarse en dos por el momento. El artículo anterior trató sobre nuestros esfuerzos en la construcción de un protocolo basado en un DAG de bloques, este artículo tratará sobre el desarrollo de nuestro sistema de cadenas laterales (sidechains).

![Sidechains in ES]({{site.baseurl_root}}/assets/post_files/horizen/beginner/sidechains/ES_sidechains_D.jpg)
![Sidechains in ES]({{site.baseurl_root}}/assets/post_files/horizen/beginner/sidechains/ES_sidechains_M.jpg)

Cuando se habilitan las cadenas laterales, se permite a varias cadenas de bloques diferentes funcionar paralelamente. Una cadena lateral es, en esencia, una cadena de bloques con la habilidad adicional de poder interoperar con la cadena principal. Las interacciones con una cadena de bloques atada a una criptomoneda, como es es el caso con Horizen, consisten principalmente de transacciones. Por esta razón, el elemento más importante en la construcción de nuestra cadena lateral será el protocolo de transferencia entre cadenas. Este protocolo permitirá que se envíen ZEN de la cadena principal a una de las cadenas laterales y viceversa.

La imagen anterior ilustra cómo Horizen tiene planeado dedicarle una de sus cadenas laterales a los fondos de tesorería de la OAD. Se agregan ZEN a la cadena lateral de tesorería con cada bloque minado. Los fondos se liberan automáticamente a los usuarios que presentaron los proyectos aprobados por la comunidad cada mes. La emisión de un voto para el sistema de tesorería es similar a una transacción regular, pero contiene datos adicionales. Mover todo el proceso de votación a una cadena lateral libera espacio en la cadena principal para otras transacciones.

### Resumen

Es posible ejecutar varias cadenas de bloques simultáneamente la construir cadenas laterales. Cada cadena puede operarse en conjunto con las demás. El usuario puede ajustar las características de una sola cadena para satisfacer sus necesidades sin afectar a las demás Esto hace posible la creación de cadenas personalizadas con propósitos específicos, como la necesaria para un sistema de tesorería, un app descentralizada (dApp) u otros casos.
