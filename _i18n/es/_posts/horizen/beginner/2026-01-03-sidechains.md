---
layout: post
type: article
title: "Cadenas laterales"
description: "Las cadenas laterales son un desarrollo prometedor para las cadenas de bloques. Hablaremos de qué son y cómo pensamos implementarlas."
permalink: /horizen/beginner/sidechains/
topic: horizen
level: beginner
canonical_link: "/es/horizen/advanced/sidechains/"
---

Como ya mencionamos, una limitante importante para la adopción en masa de la tecnología blockchain es la cuestión de escalabilidad. En la actualidad, una cadena de bloques ordinaria es capaz de manejar unas pocas transacciones por segundo, mientras que la red de pago de VISA procesa miles por segundo.

Hay muchas maneras de escalar una blockchain, pero Horizen ha decidido concentrarse en dos por el momento. El artículo anterior trató sobre nuestros esfuerzos en la construcción de un protocolo basado en un DAG de bloques, este artículo tratará sobre el desarrollo de nuestro sistema de cadenas laterales (sidechains).

![Sidechains in ES](/assets/post_files/horizen/beginner/sidechains/ES_sidechains_D.jpg)
![Sidechains in ES](/assets/post_files/horizen/beginner/sidechains/ES_sidechains_M.jpg)

Cuando se habilitan las cadenas laterales, se permite a varias cadenas de bloques diferentes funcionar paralelamente. Una cadena lateral es, en esencia, una cadena de bloques con la habilidad adicional de poder interoperar con la cadena principal. Las interacciones con una cadena de bloques atada a una criptomoneda, como es es el caso con Horizen, consisten principalmente de transacciones. Por esta razón, el elemento más importante en la construcción de nuestra cadena lateral será el protocolo de transferencia entre cadenas. Este protocolo permitirá que se envíen ZEN de la cadena principal a una de las cadenas laterales y viceversa.

La imagen anterior ilustra cómo Horizen tiene planeado dedicarle una de sus cadenas laterales a los fondos de tesorería de la OAD. Se agregan ZEN a la cadena lateral de tesorería con cada bloque minado. Los fondos se liberan automáticamente a los usuarios que presentaron los proyectos aprobados por la comunidad cada mes. La emisión de un voto para el sistema de tesorería es similar a una transacción regular, pero contiene datos adicionales. Mover todo el proceso de votación a una cadena lateral libera espacio en la cadena principal para otras transacciones.

### Resumen

Es posible ejecutar varias cadenas de bloques simultáneamente la construir cadenas laterales. Cada cadena puede operarse en conjunto con las demás. El usuario puede ajustar las características de una sola cadena para satisfacer sus necesidades sin afectar a las demás Esto hace posible la creación de cadenas personalizadas con propósitos específicos, como la necesaria para un sistema de tesorería, un app descentralizada (dApp) u otros casos.