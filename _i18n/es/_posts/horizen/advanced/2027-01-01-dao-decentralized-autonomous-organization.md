---
layout: post
type: article
title: "OAD - Organización autónoma descentralizada"
description: "Nuestra meta es adoptar un modelo de organización autónoma descentralizada (OAD) con el tiempo. Este artículo explica lo que eso significa."
permalink: /horizen/advanced/dao-decentralized-autonomous-organization/
topic: horizen
level: advanced
canonical_link: "/es/horizen/expert/dao-decentralized-autonomous-organization/"
---

En Horizen nos hemos propuesto hacer una transición de nuestra estructura organizacional hacia una OAD. Una OAD, u organización autónoma descentralizada, es un software que funciona como si fuera una organización con un número de reglas y procedimientos predefinidos.

Las reglas y procedimientos que gobiernan a dicha organización se incluyen en el código cuando se crea la OAD. La meta principal de nuestra OAD es la descentralización de la toma de decisiones respecto a cómo se utilizan los fondos de nuestra organización benéfica. Cualquier miembro de la comunidad podrá presentar propuestas para recibir fondos. Esto podría representar una nueva función en una billetera digital o al asistir a una conferencia.

![DAO](/assets/post_files/horizen/expert/dao/ES_DAO_D.jpg)
![DAO](/assets/post_files/horizen/expert/dao/ES_DAO_M.jpg)

Para esta toma de decisiones descentralizada, tiene que haberse establecido un sistema de votación. El sistema debe ser confiable, por lo que en Horizen tomamos la decisión de implementarlo en una cadena lateral dedicada paralela a nuestra cadena de bloques principal. Hablaremos más de cadenas laterales en un artículo más adelante.  

En un sistema de votación efectivo debe poder aprovecharse el conocimiento de los expertos sin privar de representación al usuario promedio. Es probable que un desarrollador vote por todas las propuestas para códigos nuevos. Sin embargo, el mismo desarrollador puede no tener experiencia en ámbito del marketing, por lo que siente que otros deberían de tomar decisiones sobre a qué conferencias asistir o qué eventos apoyar. Un experto en marketing querrá decidir respecto a las conferencias, pero puede que no tenga una verdadera opinión sobre qué códigos implementar.

El concepto de democracia líquida es uno que promete resolver este problema de manera justa y eficiente.

### Democracia líquida

Las dos principales formas de democracia implementadas en la actualidad son la democracia representativa y la democracia directa. Los primeros sistemas democráticos fueron democracias directas que ofrecían a sus participantes imparcialidad, responsabilidad y control. Sin embargo, estos sistemas no resultaron fáciles de escalar cuando incrementó el número de participantes.

Conforme aumenta el número de cuestiones que requieren una votación, emitir un voto sobre todos los asuntos se vuelve inviable para la mayoría de los participantes. Por esta razón, la mayoría de los sistemas democráticas pasaron a convertirse en democracias representativas. Las democracias de este tipo le permiten a un gran número de votantes participar en el proceso de toma de decisiones. Sin embargo, presentan nuevos problemas con respecto a la transparencia de los votos y decisiones de los representantes, la responsabilidad de los representantes ante los votantes y los obstáculo que se deben superar para poder participar directamente en el proceso de toma de decisiones.

La democracia líquida es un híbrido dinámico de estas dos formas establecidas de democracia. Un sistema democrático líquido combina los beneficios de cada una y se deshace al mismo tiempo de muchas de sus debilidades. En una democracia líquida, un votante puede decidir delegarle su voto sobre un tema dado a un experto; un representante. La alternativa es que el votante emita su voto directamente. Esto significa que puede decidirse libremente qué tanta participación quiere tenerse en la toma de decisiones y que no se le presentan tantos obstáculos a quien desee fungir como delegado.

En una democracia líquida no hay mandatos con duraciones establecidas. El votante puede delegarle su voto a un experto o retomar control de él en cualquier momento dado. Esto significa también que los expertos deben hacerse responsables de sus votos.

![Liquid Democracy](/assets/post_files/horizen/expert/dao/ES_liquid_democracy_D.jpg)
![Liquid Democracy](/assets/post_files/horizen/expert/dao/ES_liquid_democracy_M.jpg)

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

Para una explicación detallada del sistema de tesorería que tenemos planeado, consulte el artículo correspondiente en el [nivel experto]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-01-dao-decentralized-autonomous-organization %}).
