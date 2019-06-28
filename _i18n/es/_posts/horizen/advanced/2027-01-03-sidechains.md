---
layout: post
type: article
title: "Cadenas laterales"
description: " Las cadenas laterales son un desarrollo prometedor para las cadenas de bloques. Hablaremos de qué son y cómo pensamos implementarlas."
permalink: /horizen/advanced/sidechains/
topic: horizen
level: advanced
---

Una cadena lateral es una cadena de bloques con la función adicional de ser interoperable con la cadena de bloques principal. Las transacciones son la interacción más común en una cadena de bloques que aloja una criptomoneda, como es el caso de la cadena de Horizen. El equipo técnico de Horizen, dirigido por Alberto Garoffolo, ha propuesta la construcción de una cadena lateral con base en principios PoS (de prueba de participación).

La principal innovación es un nuevo protocolo de transferencia hacia atrás que permite transacciones entre una de muchas posibles cadenas laterales posibles con la cadena principal sin necesidad de que la cadena principal tenga que rastrear a la lateral y sin introducir una federación centralizada de validadores. Aunque se proporcionará una implementación de referencias de un protocolo de consenso de cadena lateral, será posible una amplia gama de protocolos de consenso.

Las cadenas laterales son un concepto que ha interesado al mundo tecnológico por un tiempo. La primera propuesta para una cadena lateral la desarrollaron Back et al. en 2014, y varios equipos diferentes están trabajando para implementarlas como solución a los problemas de escalabilidad e interoperabilidad.

### ¿Qué son las cadenas laterales y por qué resultan deseables?

When Back et al. introduced the concept of sidechains in 2014 they provided the following definition along with it:

**Inglés**

_"A sidechain is a blockchain that validates data from other blockchains. […] A pegged sidechain is a sidechain whose assets can be imported from and returned to other chains; that is, a sidechain that supports two-way pegged assets."_ A. Back et al. — Enabling blockchain innovations with pegged sidechains, 2014

**Español**

_"Una cadena lateral es una cadena de bloques que valida los datos de otras cadenas de bloques. […] Una cadena lateral se considera una cadena vinculada, cuando sus activos pueden importarse de y ser devueltos a otras cadenas; es decir, una cadena lateral que permite el intercambio de activos en ambos sentidos."_  A. Back et al. – “Enabling blockchain innovations with pegged sidechains”, 2014

En otras palabras, una cadena lateral es una cadena de bloques, pero con la habilidad de comunicarse e interoperar con una o más cadenas. Cuando alguien se refiere a una cadena lateral en la actualidad, generalmente se refieren a una cadena vinculada, las cuales permiten al usuario transferir activos entre cadenas en ambos sentidos.

![sidechains](/assets/post_files/horizen/advanced/sidechains/ES_sidechains_D.jpg)
![sidechains](/assets/post_files/horizen/advanced/sidechains/ES_sidechains_M.jpg)

### ¿Qué beneficios tiene esta tecnología?

La mayoría de las cadenas de bloques que alojan criptomonedas emplean un algoritmo de consenso PoW y han incorporado las principales funciones del protocolo Bitcoin, heredando a la vez muchas de las restricciones impuestas por el código creado por Satoshi Nakamoto. Esto incluye un rendimiento limitado, latencia alta y límites de escalabilidad. Las cadenas laterales son una opción para superar algunos de estos impedimentos tecnológicos. Sin embargo, además de abrirles la puerta a posibles avances tecnológicos, tocan también de alguna manera u otra el tema de la gobernanza.

Como lo han demostrado los debates recientes, hacerle cambios al código base de un proyecto descentralizado puede ser un proceso tedioso; algo que se considera más una función que un error de programación. La estabilidad (no de precio, sino del código) resulta vital para un proyecto como Bitcoin, y la seguridad general del protocolo se beneficia enormemente de la consideración meticulosa de cada cambio que se la hace al sistema.

Las cadenas laterales ofrecen una manera de implementar nuevas funciones sobre una primera capa de protocolo sin comprometer su seguridad o estabilidad. Tras una bifurcación inicial que incluye la habilidad de crear cadenas laterales e introduce una manera de transferir activos de la cadena principal a la lateral y viceversa, pueden construirse un número de cadenas paralelas, cada una con un propósito diferente y sin tener que lograr consenso para implementar cada función individual.

Es importante remarcar que el cambio inicial al código base que permitirá el uso de cadenas laterales y transferencias entre cadenas debe hacerse con cuidado, y que toda solución posible debe evaluarse meticulosamente. Si un proyecto logra implementar las funciones antes mencionadas, entonces sus desarrolladores pueden empezar a experimentar y a trabajar en proyectos donde cualquier cambio al protocolo tradicionalmente exigiría un consenso, el cual podría tomar meses o años en lograrse. Idealmente, la implementación de cadenas laterales les dará a los desarrolladores en la cadena lateral una mayor libertad sin introducir la posibilidad de comprometer la seguridad de la cadena principal. Si un usuario no utiliza una cadena lateral particular, no tienen por qué importarle los cambios que se le apliquen.

### ¿Qué puede hacerse con una cadena lateral?

Como ya habíamos mencionado, hay muchos equipos de trabajo dedicados a la tecnología de cadenas laterales, cada uno con un propósito diferente. Por ejemplo, el equipo de Rootstock está buscando una manera de proporcionar contratos inteligentes sobre la cadena de Bitcoin, refiriéndose a sus cadenas laterales como ‘cadenas secundarias’. Polkadot, que les ha dado el nombre de ‘paracadenas’, busca conectar cadenas de bloques con y sin permisos. La idea general de Plasma también se basa en las cadenas laterales o ‘cadenas hijas’ y tiene el objetivo principal de lograr escalabilidad. Otras cadenas llamadas ‘drivechains’ tienen el propósito de permitir que se transfieran bitcoins a otras aplicaciones o softwares, como diferentes cadenas de bloques públicas. 
  
Puede argumentarse una distinción entre cadenas laterales y drivechains, como lo ha hecho Rootstock en este artículo. Retomaremos esta distinción dentro de pronto al hablar de cómo funcionan las cadenas laterales. La idea es fundamentalmente la misma, sin embargo, y satisface la definición de una cadena lateral vinculada propuesta por Back et al. hace cuatro años.

Quienes critican el concepto de las cadenas laterales apuntan al hecho de que muchas de las cadenas laterales implementadas actualmente dependen de un grupo de validadores para facilitar transacciones entre cadenas, por lo que a las construcciones de cadenas laterales se les llama a veces ‘de mínima confianza’ (trust-minimized) en lugar de libres o sin necesidad de confianza (trustless). El riesgo se reduce a la habilidad que poseen los validadores de censurar transacciones entre las cadenas principal y lateral. Nuestro protocolo ataca este problema de una manera elegante.

### ¿Qué busca Horizen al implementar cadenas laterales?

El proyecto de cadenas de bloques de Horizen se ha puesto objetivos muy ambiciosos. Planeamos incluir características como un sistema de tesorería para la OAD (el cual se está desarrollando en colaboración con IOHK), una solución descentralizada para rastrear nodos seguros y súper nodos y sus recompensas y un protocolo de DAG de bloques para incrementar el rendimiento de la cadena en cuanto a transacciones procesadas.

Es fácil ver los beneficios de desarrollar primero una cadena lateral, pues algunas de estas funciones requerían hacerle modificaciones significativas al cliente central de implementarse al código base existente. Desarrollar nuevas características y hacer cambios al protocolo, aunque sean mínimos, resulta problemático no solo por la dificultad de lograr consenso, sino también porque implica riesgos de seguridad. Por lo tanto, cada adición debe considerarse cuidadosamente.

La idea de Horizen es desarrollar de una sola vez una implementación de cadenas laterales robustas para luego simplificar el desarrollo de nuevas características que expandan el ecosistema Horizen. La implementación de cadenas laterales de desemparejará por completo de la cadena principal y podría, por ejemplo, ejecutar un algoritmo de consenso completamente diferente al de esta. De esta manera, sería posible tener cadenas laterales para la tesorería y sistema de rastreo de nodos con un protocolo de consenso [PoS]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}) y conservar a la par la cadena principal [PoW]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-06-consensus-mechanisms %}).

### Cómo funciona

El desarrollo del modelo de cadenas laterales (sidechains) consiste de dos partes:

 1. EL _protocolo de consenso de la cadena lateral (sidechain consensus protocol)_ — SCP
 2. El _protocolo de transferencia entre cadenas_ o peg de doble sentido (two-way peg) — CCT

El _protocolo de consenso de la cadena lateral_ gobierna cómo se pone de acuerdo la red respecto a la creación de bloques nuevos y el historial de transacciones. El CTT determina cómo pueden enviarse activos de la cadena principal a la lateral y viceversa. Hablaremos de ambos protocolos a detalle en nuestro [artículo sobre cadenas laterales]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}) del nivel experto..

![SCP_CCT](/assets/post_files/horizen/advanced/sidechains/ES_SCP_CCT_D.jpg)
![SCP_CCT](/assets/post_files/horizen/advanced/sidechains/ES_SCP_CCT_M.jpg)

### Resumen

Las cadenas laterales podrían ser una manera elegante de superar algunas de las limitantes actuales respecto a la escalabilidad y gobernanza del ecosistema blockchain. Una cadena lateral puede no solo aumentar el rendimiento, o sea el número de transacciones por segundo (tps), sino también permitir la experimentación sin comprometer la seguridad de la cadena de bloques principal.

La habilidad de implementar cadenas laterales aumentará dramáticamente la posibilidad de construir encima de las cadenas de bloques públicas existentes. Uno de los primeros usos que Horizen piensa darle a su cadena lateral tendrá que ver con la tesorería, y será uno de los primeros pasos para hacer de Horizen una organización autónoma descentralizada (OAD).

Continuaremos hablando de cadenas laterales en el [artículo de las cadenas laterales de la sección experta]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-03-sidechains %}). Veremos cómo funcionan las soluciones propuestas a nivel técnico y examinaremos el _protocolo de consenso de la cadena lateral (SCP)_ y el de _transferencia entre cadenas (CCT)_.
