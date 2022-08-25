---
layout: post
type: article
title: "OAD - Organización autónoma descentralizada"
description: "Nuestra meta es adoptar un modelo de organización autónoma descentralizada (OAD) con el tiempo. Este artículo explica lo que eso significa."
permalink: /horizen/advanced/dao-decentralized-autonomous-organization/
topic: horizen
level: advanced
---

En Horizen nos hemos propuesto hacer una transición de nuestra estructura organizacional hacia una OAD. Una OAD, u organización autónoma descentralizada, es un software que funciona como si fuera una organización con un número de reglas y procedimientos predefinidos.

Las reglas y procedimientos que gobiernan a dicha organización se incluyen en el código cuando se crea la OAD. La meta principal de nuestra OAD es la descentralización de la toma de decisiones respecto a cómo se utilizan los fondos de nuestra organización benéfica. Cualquier miembro de la comunidad podrá presentar propuestas para recibir fondos. Esto podría representar una nueva función en una billetera digital o al asistir a una conferencia.

![DAO]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_DAO_D.jpg)
![DAO]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_DAO_M.jpg)

Para esta toma de decisiones descentralizada, tiene que haberse establecido un sistema de votación. El sistema debe ser confiable, por lo que en Horizen tomamos la decisión de implementarlo en una cadena lateral dedicada paralela a nuestra cadena de bloques principal. Hablaremos más de cadenas laterales en un artículo más adelante.

En un sistema de votación efectivo debe poder aprovecharse el conocimiento de los expertos sin privar de representación al usuario promedio. Es probable que un desarrollador vote por todas las propuestas para códigos nuevos. Sin embargo, el mismo desarrollador puede no tener experiencia en ámbito del marketing, por lo que siente que otros deberían de tomar decisiones sobre a qué conferencias asistir o qué eventos apoyar. Un experto en marketing querrá decidir respecto a las conferencias, pero puede que no tenga una verdadera opinión sobre qué códigos implementar.

El concepto de democracia líquida es uno que promete resolver este problema de manera justa y eficiente.

### Democracia líquida

Las dos principales formas de democracia implementadas en la actualidad son la democracia representativa y la democracia directa. Los primeros sistemas democráticos fueron democracias directas que ofrecían a sus participantes imparcialidad, responsabilidad y control. Sin embargo, estos sistemas no resultaron fáciles de escalar cuando incrementó el número de participantes.

Conforme aumenta el número de cuestiones que requieren una votación, emitir un voto sobre todos los asuntos se vuelve inviable para la mayoría de los participantes. Por esta razón, la mayoría de los sistemas democráticas pasaron a convertirse en democracias representativas. Las democracias de este tipo le permiten a un gran número de votantes participar en el proceso de toma de decisiones. Sin embargo, presentan nuevos problemas con respecto a la transparencia de los votos y decisiones de los representantes, la responsabilidad de los representantes ante los votantes y los obstáculo que se deben superar para poder participar directamente en el proceso de toma de decisiones.

La democracia líquida es un híbrido dinámico de estas dos formas establecidas de democracia. Un sistema democrático líquido combina los beneficios de cada una y se deshace al mismo tiempo de muchas de sus debilidades. En una democracia líquida, un votante puede decidir delegarle su voto sobre un tema dado a un experto; un representante. La alternativa es que el votante emita su voto directamente. Esto significa que puede decidirse libremente qué tanta participación quiere tenerse en la toma de decisiones y que no se le presentan tantos obstáculos a quien desee fungir como delegado.

En una democracia líquida no hay mandatos con duraciones establecidas. El votante puede delegarle su voto a un experto o retomar control de él en cualquier momento dado. Esto significa también que los expertos deben hacerse responsables de sus votos.

![Liquid Democracy]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_liquid_democracy_D.jpg)
![Liquid Democracy]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_liquid_democracy_M.jpg)

### Entidades

Las diferentes entidades en nuestro sistema de tesorería son:

- _Líderes de proyecto_ - Son los participantes que han hecho propuestas para recibir fondos. Cualquiera puede hacer una propuesta tras pagar una pequeña tarifa para evitar la acumulación de spam.
- _Comité de votación_ - Sus miembros son los interesados dispuestos a ayudar con el proceso de votación. Se involucran en el proceso al momento de contarse los votos.
- _Votante_ - Cada votante le pone un candado a cierta parte de su participación para poder votar. El voto se considera conforme al peso de su participación.
- _Expertos_ - Son un tipo especial de votante con experiencia en un área determinada. Cualquiera puede registrarse como experto, pero hablaremos más de al explicar cómo registrarse como entidad.

Para registrarse como cualquiera de las entidades anteriores, el usuario necesitará hacer un tipo especial de transacción con la información necesaria, como el peso de la participación del usuario y la dirección a la que se deben enviar las recompensas por votar.

### Recompensas

Cada uno de los votantes, expertos y miembros del comité reciben una recompensa por participar en la gobernanza del protocolo.

Existe un fenómeno llamado ignorancia racional. La ignorancia racional es el acto de abstenerse de adquirir un conocimiento dado porque el costo de educarse para obtenerlo superaría el beneficio que dicho conocimiento proporcionaría.

Nuestro objetivo es reducir la ignorancia racional al proporcionar un incentivo para que los votantes participen en el proceso de votación. Esto es un problema en muchas de las democracias de la actualidad, pues el tiempo y esfuerzo que exige el adquirir la información necesaria para tomar las mejores decisiones durante una elección supera el beneficio de poder emitir un solo voto, lo cual resulta en apatía por parte del votante.

Para atacar la cuestión de la apatía de los votantes, quienes participan en el proceso de gobernanza obtienen recompensas por su esfuerzo. Esto crea un incentivo para informarse y participar en el proceso. Los votantes se verán recompensados conforme al peso de su participación y los expertos una proporcional al número de votos que se les han delegado, en otras palabras, la confianza que se les ha dado en la toma de decisiones.

### Resumen

Como primer paso hacia convertirnos en una OAD, queremos descentralizar la toma de decisiones respecto a los fondos de nuestra tesorería. Los usuarios podrán hacer propuestas y la comunidad determinará qué propuestas recibirán fondos. La infraestructura para los procesos de votación y repartición de fondos se construirán en una cadena lateral.

El mecanismo de votación que buscamos implementar es uno basado en un sistema democrático líquido, donde el votante puede decidir si votar directamente sobre un tema o si delegarle su voto a un experto. Para combatir la apatía entre los votantes planeamos incentivar la participación por medio de recompensas financieras.

## Contenido Experto a Continuación - OAD - Organización autónoma descentralizada

Roman Oliynykov de IOHK publicó un artículo en colaboración con Bingsheng Zhang y Hamed Balogun de la Universidad de Lancaster en el que describen un sistema de tesorería que podría implementarse a varias criptomonedas sin importar el tipo de mecanismo de consenso empleado. Un prototipo del sistema se ha implementado ya a Sacala a través del esquema Scorex 2.0 (puede encontrar una presentación detallada aquí).

Rob Viglione, por su parte, explicó las implicaciones de este sistema en un video en Twitter. Horizen se encuentra avanzando hacia la implementación de dicho sistema al sistema de tesorería para tomar decisiones sobre la distribución de fondos de manera descentralizada.

En este artículo hemos resumido el contenido del artículo antes mencionado, proporcionando también el contexto necesario.

![DAO]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_DAO_D.jpg)
![DAO]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_DAO_M.jpg)

### Introducción

La constitución de una criptomoneda requiere muchas cosas, entre ellas:

- Desarrolladores dispuestos a dedicarle su tiempo al proyecto.
- Algo de marketing; no solo para hacer de la divisa algo atractivo al usuario potencial, sino también para atraer desarrolladores.
- Un equipo legal. Ya que hay más entidades regulatorias monitoreando el espacio cripto, un equipo legal se asegurará de que todos los aspectos del proyecto cumplan con regulaciones presentes y futuras.

Podríamos agregar muchas más cosas a la lista, pero la mayoría tendría una cosa en común; el requisito de algún tipo de fondos.

La obtención de fondos debe ser sostenible a la larga. El documento identifica tres fuentes principales de fondos:

- Organizaciones benéficas y donaciones
- Una oferta inicial de monedas (initial coin offering) o ICO
- Recompensa de fundadores (parte de la recompensa del minero)

Hay quienes agregan las tarifas de transacción a esta lista, pero el monto sumado de estas transacciones más allá de proyectos a gran escala como Bitcoin o Ethereum no suele ser suficiente para el desarrollo de un proyecto.

Las donaciones no son una buena solución a largo plazo, mientras que las ICO no generan fondos a la larga y se han vuelto una opción legalmente controvertida. Por lo tanto, es la tercera de las opciones la que más promete en función de los fondos que genera. El minar recompensas obtenidas a través de criptomonedas PoW ofrece una mejor solución a largo plazo en cuestiones de obtención de fondos, pues evita que tengan que buscarse continuamente nuevas fuentes de ingresos. Esta solución, claro está, tendrá que enfrentarse al problema de cese de emisión (en el caso de las monedas que adoptaron el calendario de emisión de Bitcoin, hasta circa 2140).

### La descentralización es la clave

La descentralización no solo evita la introducción de puntos débiles al sistema, sino que también ayuda a mejorar su nivel de privacidad. Una entidad centralizada y poderosa siempre tendrá la capacidad de recolectar más información sobre un usuario dado que un par en un sistema verdaderamente distribuido. Además de la arquitectura de la red, otras áreas que deben mantenerse lo más descentralizadas posible son la distribución de fondos para el desarrollo y mantenimiento de proyectos y la toma de decisiones respecto a cómo se utilizarán los fondos. Aquí es donde cobra importancia nuestro modelo de tesorería. El sistema de tesorería propuesto no distingue las fuentes de los fondos obtenidos, sino que asegura un proceso de distribución de fondos inclusivo y justo para todos los participantes.

### Sistema de votación

> “El componente central de un sistema de tesorería es un sistema de toma de decisiones que les permite a los miembros de una comunidad tomar decisiones o llegar a conclusiones de manera colectiva.”

Cualquier miembro de la comunidad podrá hacer propuestas para recibir fondos. La comunidad debe decidir colaborativamente qué proyectos recibirán fondos. Las propuestas podrían incluir cualquier cosa desde el desarrollo de una nueva función para la billetera virtual hasta el pago de viáticos para que un miembro de la comunidad promueva el proyecto en una conferencia o incluso el patrocinio de algún evento.

Hay disponibles dos esquemas de votación viables en este contexto; el voto preferencial y el voto por aprobación.

El voto preferencial le permite a los votantes ordenar sus opciones de acuerdo a su preferencia, por lo que las propuestas con los mejores rankings recibirán fondos. Rankear opciones puede consumir mucho tiempo y resulta difícil porque requiere que los usuarios comparen opciones muy dispares al momento de votar. Si no es fácil decidir qué función, conferencia o evento es importante por sí solo, lo es mucho menos cuando se tienen que comparar entre sí.

Un voto por aprobación con un esquema de votación “sí/no/abstención” simplifica mucho el proceso de toma de decisiones y es la opción que el equipo de Bingsheng, Roman y Hamed eligió implementar al sistema de tesorería. Es fácil calcular una calificación para cada propuesta a partir de la diferencia entre votos a favor y en contra al final del periodo de votaciones. Las propuestas con las calificaciones más altas recibirán fondos de manera turnada hasta agotarse los fondos mensuales designados.

Es probable que un desarrollador vote por todas las propuestas para códigos nuevos. Sin embargo, el mismo desarrollador puede no tener experiencia en ámbito del marketing, por lo que siente que otros deberían de tomar decisiones sobre a qué conferencias asistir o qué eventos apoyar. Un experto en marketing querrá decidir respecto a las conferencias, pero puede que no tenga una verdadera opinión sobre qué códigos implementar y así sucesivamente. Ahora, ¿cómo se aprovechan la experiencia y conocimiento de ciertos individuos de manera eficiente? La democracia líquida es la respuesta.

### Democracia líquida

Las dos principales formas de democracia implementadas en la actualidad son la democracia representativa y la democracia directa. Los primeros sistemas democráticos fueron democracias directas que ofrecían a sus participantes imparcialidad, responsabilidad y control. Sin embargo, estos sistemas no resultaron fáciles de escalar cuando incrementó el número de participantes.

Por esta razón, la mayoría de los sistemas democráticas pasaron a convertirse en democracias representativas. Las democracias de este tipo le permiten a un gran número de votantes participar en el proceso de toma de decisiones. Sin embargo, presentan nuevos problemas con respecto a la transparencia de los votos y decisiones de los representantes, la responsabilidad de los representantes ante los votantes y los obstáculo que se deben superar para poder participar directamente en el proceso de toma de decisiones.

La democracia líquida es un híbrido dinámico de estas dos formas establecidas de democracia. Un sistema democrático líquido combina los beneficios de cada una y se deshace al mismo tiempo de muchas de sus debilidades. En una democracia líquida, un votante puede decidir delegarle su voto sobre un tema dado a un experto; un representante. La alternativa es que el votante emita su voto directamente.

El voto se puede delegar a quien sea; ya sea al hermano del usuario, que por coincidencia posee una gran cantidad de conocimientos sobre un tema dado, o a cualquier otra persona. También es posible retirar la delegación en cualquier momento, lo cual hace de todo un proceso líquido. Estas medidas reducen el número de obstáculos para participar y hace responsables a los delegados de la manera en la que votan, pues pueden perder delegaciones en cualquier momento.

![Liquid Democracy]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_liquid_democracy_D.jpg)
![Liquid Democracy]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_liquid_democracy_M.jpg)

### Las diferentes entidades

Ya que nos estamos acercando a la descripción del proceso de votación en sí, es necesario que introduzcamos a los participantes:

- _Líderes de proyecto {O}_ Son los usuarios que han presentado una propuesta. Cualquier puede presentar una propuesta tras pagar una pequeña transacción para evitar el spam.
- _Comité de votación {C}_ Son los participantes dispuestos a ayudar con el proceso de votación. Son responsables de la generación de la llave pública y de anunciar el resultado del voto una vez concluida la época de votaciones.
- _Votantes {V}_ Guardan una cierta cantidad de participación para poder involucrarse en el proceso. Su voto se pesa conforme a la cantidad guardada.
- _Expertos {E}_ Son un tipo especial de votantes con experiencia en algún campo particular. Cualquiera puede registrarse como experto.

Cualquiera puede hacer una propuesta para recibir fondos y convertirse en líder de proyecto, y cualquiera que tenga una participación en la red puede registrarse como votante o experto. Algunos de los votantes recibirán aleatoriamente una invitación para convertirse en miembros del comité de votación.

### Épocas del sistema de tesorería

Hay tres épocas en cada periodo de tesorería. Durante la **época anterior a las votaciones** los líderes de proyecto tienen tiempo de presentar sus propuestas encriptadas. Todas las propuestas se desencriptan una vez concluida la etapa de presentación de propuestas. Esto incrementa la imparcialidad y evita que los usuarios presentan sus propuestas de manera táctica. Durante la época anterior a las votaciones los miembros de la comunidad también tienen tiempo de registrarse como votantes o expertos llevando a cabo un tipo especial de transacción.

![Treasury System Epochs]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_treasury_epochs_D.jpg)
![Treasury System Epochs]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_treasury_epochs_M.jpg)

Durante la **época de votaciones (voting epoch)** se selecciona el comité de votaciones, se establece una llave para votar y se lleva a cabo la votación. Para la **selección del comité** “se selecciona un grupo de comités de votación aleatoriamente de entre los votantes registrados dispuestos a ser considerados para la selección del comité. La probabilidad de ser seleccionado es proporcional a la cantidad de la participación guardada del usuario.”

En la **etapa de generación de la llave (key setup stage)** se genera la llave de votación para la época de tesorería (se utiliza como una dirección a la que se envían los votos emitidos). Los votos se emite de manera privada y solo el resultado se hace público. Debe ser posible que los votantes expresen su opinión de manera privada, es por eso que las casillas electorales se colocan en encuestas “análogas”. El protocolo es el que se encarga de que el resultado represente fielmente la suma de todos los vatos.

La votación privada se logra pidiendo a todos los votantes y expertos que encripten su voto utilizando la llave pública de votación. Solo los miembros del comité de votación pueden desencriptar los votos emitidos durante la etapa de conteo. “Una vez que todos los comités han hecho público el conteo cualquiera puede accederlo.”

Los votantes y expertos emiten sus votos durante la **etapa de emisión de boletas+** Cada voto se ve representado por un vector. Como hay varias opciones posibles; sí, no y abstención, hay también tres tipos de vectores.

![yes no abstain]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_yes_no_abstain_D.jpg)
![yes no abstain]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_yes_no_abstain_M.jpg)

El concepto funciona así: En el ejemplo que aparece a continuación hay cuatro votos, dos sís, dos nos y dos abstenciones.

![votes]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_votes_D.jpg)
![votes]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_votes_M.jpg)

Si ya se encuentra familiarizado con el concepto de suma de vectores le será fácil determinar la suma de estos cuatro vectores. Uno de los dos sís se ve cancelado por el voto negativo. El voto afirmativo restante sumado con la abstención resulta en el vector diagonal que aparece debajo. Para el conteo, se considera únicamente el eje “x”. El resultado final de esta propuesta revelado en la etapa de conteo sería un sí.

![votes sum]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_votes_sum_D.jpg)
![votes sum]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_votes_sum_M.jpg)

Más específicamente, la calificación de cada propuesta se calcula tomando el número de votos afirmativos y restándole el número negativos. La diferencia resultante tiene que abarcar por lo menos el 10% de todos los votos emitidos para que la propuesta sea considerada para la repartición de fondos. Si se emiten 100 votos (sin abstenciones) debe haber por lo menos 55 votos a favor para alcanzar esta marca. Las propuestas con las calificaciones más altas recibirán fondos hasta que los fondos mensuales de la tesorería se agoten.

![score]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_score_D.jpg)
![score]({{site.baseurl}}/assets/post_files/horizen/expert/dao/ES_score_M.jpg)

La **época posvotación** consiste de las etapas de conteo y ejecución. Debe notarse que cada vector se recibe encriptado y es solo en la etapa de conteo que el comité revela el conjunto los votos emitidos. Se calcula la calificación de cada propuesta y se rankean las propuestas de acuerdo a su calificación.

Durante la **etapa de ejecución** el comité firma en conjunto las transacciones que trasladan los fondos a las propuestas aprobadas.

### Recompensas

La última función de la que queremos hablar es la recompensa que reciben los votantes, expertos y miembros del comité por participar en la gobernanza del protocolo.

Existe un fenómeno llamado ignorancia racional. La ignorancia racional es el acto de abstenerse de adquirir un conocimiento dado porque el costo de educarse para obtenerlo superaría el beneficio que dicho conocimiento proporcionaría.

Nuestro objetivo es reducir la ignorancia racional al proporcionar un incentivo para que los votantes participen en el proceso de votación. Esto es un problema en muchas de las democracias de la actualidad, pues el tiempo y esfuerzo que exige el adquirir la información necesaria para tomar las mejores decisiones durante una elección supera el beneficio de poder emitir un solo voto, lo cual resulta en apatía por parte del votante.

Para atacar la cuestión de la apatía de los votantes, quienes participan en el proceso de gobernanza obtienen recompensas por su esfuerzo. Esto crea un incentivo para informarse y participar en el proceso. Los votantes se verán recompensados conforme al peso de su participación y los expertos una proporcional al número de votos que se les han delegado, en otras palabras, la confianza que se les ha dado en la toma de decisiones.

### El plan de implementación del sistema de votaciones de Horizen

Planeamos integrar el sistema de tesorería en una cadena lateral. Las [cadenas laterales (sidechains)](https://academy.horizen.io/es/horizen/advanced/sidechains/) son una de las mejoras al protocolo de Horizen que nos encontramos desarrollando actualmente. La implementación de las cadenas laterales les permitirá a diferentes dApps ejecutarse sobre su propia cadena lateral con garantías de seguridad separadas. Incluso si algo sale mal en la cadena lateral, la cadena principal no se verá afectada.

La interfaz y experiencia del usuario son factores muy importantes en el caso de un sistema así. Tener el mejor sistema de tesorería no ayuda si la participación resulta difícil. Un reto será el idear un centro de gobernanza estructurado e informativo. Nos referimos a un lugar de fácil acceso, quizás un sitio web o una función embebida en una billetera donde puedan llevarse a cabo los registros de propuestas, votantes y expertos y al comité de votación. Formalmente, el registro es una transacción, por lo que resultaría práctico implementar la función en una billetera, facilitándoles así a los participantes el formar parte de la gobernanza de la cadena.

Además, debe haber también un lugar donde aparezca una lista de todos los expertos en conjunto con un registro visible y comprehensivo de todas sus decisiones pasadas. Cada experto deberá ser capaz de crear un perfil con información biográfica que ayude al usuario a saber a quién le está delegando su voto. El experto se encargará también de definir el área que dominan, mientras que toda la información en conjunto los hace responsables de sus decisiones. Es importante recordar que el usuario puede revocar su delegación en cualquier momento si llega a tener algún desacuerdo con sus decisiones. La revocación debe resultar tan fácil como la delegación inicial.

### Resumen

Nuestro sistema de tesorería cumple los propósitos de distribuir fondos a los diferentes proyectos que existen dentro de Horizen y de legitimar el proceso de toma de decisiones de una manera descentralizada. Todos los participantes podrán presentar propuestas, mientras que los usuarios tendrán la opción de votar por ellas ya sea directamente o delegándole su voto a un experto que votará en su lugar. A este híbrido entre una democracia directa y representativa se le llama democracia líquida. El registro de votantes, el proceso de votación, y la distribución de fondos a los proyectos se construirán sobre una cadena lateral, una cadena que bloques separada interoperable con nuestra cadena de bloques existente. Los usuarios se verán incentivados a participar en el proceso de gobernanza y se diseñará una interfaz amigable con el usuario para hacer de la participación un proceso fácil e intuitivo.

## Contenido para Principiantes a Continuación - OAD - Organización autónoma descentralizada

En Horizen nos hemos puesto como meta a largo plazo hacer una transición de nuestra estructura organizacional hacia una OAD, un pedazo de software que funciona como una organización con un cierto número de reglas.

Los fundadores de una organización autónoma descentralizada acuerdan la serie de reglas y procedimientos que la fundación seguirá como parte del código al crear la OAD. Este código permanece principalmente en la blockchain, donde resulta imposible que alguien altere las reglas, pues ninguna parte individual posee la autoridad de modificar la OAD. Una OAD puede implementar cambios con el tiempo, pero es necesario que la mayoría de sus miembros aprueben cada cambio.

Al crearla, los fundadores definen los criterios que justifican cambios a la OAD y los introducen al código de la organización. En un caso, por ejemplo, podría definirse que para modificar la regla X se requiere una mayoría superior al 50% de los miembros para aprobar un cambio, mientras que para la regla Y se necesita la aprobación de una supermayoría del 66%.

### La OAD de Horizen

Horizen organiza su presupuesto de manera mensual. El presupuesto nos permite pagar el desarrollo del protocolo, campañas de marketing y muchas otras cosas. Con el lanzamiento de ZenDAO, tenemos pensado abrir al público la determinación del presupuesto.
Cualquier miembro de la comunidad podrá presentar una propuesta de lo que les gustaría contribuir a la OAD, así como un resumen de los fondos necesarios para solventarla. La comunidad repasará la propuesta; la cual podría ser, por ejemplo, traducir el sitio web a otro idioma, crear un video para una campaña de marketing o diseñar una app que se ejecute desde Horizen.

Después, durante un periodo de votaciones mensual, la comunidad emite sus votos, indicando cuáles propuestas son o no dignas de ser fondeadas. Tras un conteo de votos, las propuestas aprobadas reciben automáticamente los fondos que se les habían designado, y los miembros de la comunidad que las presentaron pueden empezar a trabajarlas.

![DAO - Decentralized Autonomous Organization in ES]({{site.baseurl}}/assets/post_files/horizen/beginner/dao-decentralized-autonomous-organization/ES_DAO_D.jpg)
![DAO - Decentralized Autonomous Organization in ES]({{site.baseurl}}/assets/post_files/horizen/beginner/dao-decentralized-autonomous-organization/ES_DAO_M.jpg)

En Horizen consideramos importante empoderar a nuestra comunidad. Nos encontramos en vías de crear los bloques necesarios para hacer realidad nuestra visión de ZenDAO, una OAD propia. Buscamos que la votación que determinará el desarrollo de la plataforma de nuestra cadena de bloques sea un proceso justo que le permita a la comunidad participar en la toma de decisiones y legitime las decisiones tomadas.
