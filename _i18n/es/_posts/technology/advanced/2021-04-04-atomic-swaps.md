---
layout: post
type: article
title: "Intercambios atómicos"
description: "Por último, queremos explorar un tipo especial de transacción. Un intercambio atómico (atomic swap) le permite a un usuario intercambiar criptomonedas diferentes sin la intermediación de un centro cambiario."
permalink: /technology/advanced/atomic-swaps/
topic: technology
level: advanced
chapter: "Transacciones"
---

El último tipo de transacción que nos gustaría cubrir es el del intercambio atómico. Este es un tipo de transacción que toca los temas de escalabilidad e interoperabilidad a la vez.

Si el usuario desea intercambiar una criptomoneda por otra lo más común es dirigirse a uno de los centros cambiarios centralizados disponibles. Los fondos se transfieren a su dirección, lo cual requiere que el usuario confíe en el centro como tercero. Una vez depositados los fondos es necesario verificar que el centro cambiario maneje el par de cambio que le interesa al usuario. La mayoría de los centros ofrecen solo pares BTC y ETH. Para tipos de cambio con criptomonedas más exóticas o tokens, será necesario comprar Bitcoin primero y luego convertirla a la criptomoneda deseada.

Los intercambios atómicos son una tecnología que le permite al usuario hacer cambios par a par sin la intervención de un tercero. Eliminan también la necesidad de confiar en un usuario para organizar el intercambio. En otros casos, uno de los usuarios debe mandar sus fondos primero; pero su contraparte puede decidir no cumplir con su parte del trato. El intercambio atómico le permite a los pares realizar un intercambio libre de intermediarios entre diferentes monedas de acuerdo a una serie de condiciones predefinidas y acordadas sin miedo a perder sus fondos.

### La tecnología detrás de los intercambios atómicos

Los contratos con bloqueo temporal de hash (hashed timelock contracts; HTLCs) son la tecnología que hace posibles los intercambios atómicos. Para comprender los HTLC es necesario retroceder unos cuantos pasos para introducir el concepto de canal de estado.
Un canal de estado es un canal de comunicación de doble sentido que hace posibles fuera de la cadena interacciones que generalmente tendrían que suceder dentro de ella. Un tipo específico de canal de estado es el canal de pago. Como su nombre lo sugiere, el canal de pago es el canal de estado que procesa pagos. Es posible que haya escuchado hablar de los canales de pago en el contexto del Lightning Network o de otras soluciones de segunda capa. Una HTLC es un tipo específico de canal de pago que permite el intercambio de dos activos cripto fuera de la cadena de bloques

![channel hierarchy]({{site.baseurl}}/assets/post_files/technology/advanced/4.3-atomic-swaps/ES_channel_hierarchy_D.jpg)
![channel hierarchy]({{site.baseurl}}/assets/post_files/technology/advanced/4.3-atomic-swaps/ES_channel_hierarchy_M.jpg)

El hash de HTLC quiere decir que es un hash el que sirve como candado del contrato, una medida utilizada para impedir que un tercero pueda accederlo. La parte de bloqueo temporal se refiere al hecho de que el contrato puede tener una fecha de expiración. Explicaremos lo que esto significa para el usuario una vez que delineemos cómo funciona el intercambio atómico.

Deben cumplirse dos condiciones para realizar un intercambio atómico entre dos activos: ambos activos y su cadena de bloques subyacente deben admitir el mismo algoritmo hash, como SHA-256 en el caso de Bitcoin. Además, ambas cadenas deben admitir el mismo tipo de programabilidad que permite que se utilice un HTLC.

### El proceso

El usuario es capaz de crear un HTLC una vez cumplidas ambas condiciones. El proceso de un intercambio atómico suele lucir como lo describiremos a continuación. Empecemos por suponer que Alice tiene BTC y Bob tiene algo de ZEN. Ambos acuerdan intercambiar sus monedas.

1.  Alice genera un HTLC con una dirección en la cadena de bloques de Bitcoin. Los contratos inteligentes suelen incluir una dirección para que el usuario pueda interactuar con ellos; los HTLC no son la excepción.
2.  Alice genera una llave (un número aleatorio) y deriva el candado hash de su llave hasheando el número aleatorio (la llave), así, es seguro que el candado y la llave coincidirán. Este paso es similar al de crear una llave privada y derivar de ella una dirección, tal como lo explicamos en nuestro artículo sobre criptografía de llave pública.
3.  Alice deposita la cantidad acordada de BTC en el HTLC.
4.  Alice le pone candado a sus fondos con el candado hash que creó y le envía una copia de este a Bob.
5.  Bob crea un HTLC con una dirección en la cadena de bloques de Horizen utilizando el candado hash de Alice.
6.  Bob deposita la cantidad acordada de ZEN en la dirección del contrato y le pone candado.

A estas alturas, ambos participantes han guardado los fondos que habían acordado intercambiar. Ya que ambas cadenas de bloques son públicas, cada uno puede verificar que las cantidades han sido depositadas. Solo Alice cuenta con la llave para abrir ambos fondos por el momento, pero en caso de que no lo hiciera, el bloqueo temporal les regresaría los fondos a sus dueños originales tras cierto tiempo. De esta manera, Alice no puede estafar a Bob poniéndole candado a sus fondos sin darle la llave para abrirlos. Si se decide proceder, los dos pasos siguientes suceden de manera casi simultánea:

7.  Alice utiliza la llave para acceder a los ZEN de Bob y los transfiere a una cuenta bajo su control. Bob se entera de la existencia de llave cuando Alice le quita el candado a sus fondos monitoreando su HTLC.
8.  Bob utiliza la llave que acaba de recibir para acceder a las bitcoins de Alice y transferirlas a la dirección Bitcoin que controla.
9.  Ambos partidos han intercambiado exitosamente sus fondos sin necesidad de tenerse confianza.

Ya que el proceso es automático, los pasos 7 y 8 suceden simultáneamente, por lo que no se necesita confiar en ninguna de las partes. De esta manera, o ambas partes obtienen sus fondos o ninguna los obtiene.

![swaps]({{site.baseurl}}/assets/post_files/technology/advanced/4.3-atomic-swaps/ES_swaps_D.jpg)
![swaps]({{site.baseurl}}/assets/post_files/technology/advanced/4.3-atomic-swaps/ES_swaps_M.jpg)

### Los intercambios atómicos hoy en día

Hay algunas billeteras y centros cambiarios descentralizados que permiten al usuario hacer intercambios atómicos. Hasta ahora, se han llevado a cabo muy pocos intercambios de este tipo. A continuación un breve historial:

- El primer intercambio atómico en la cadena se realizó el 20 de septiembre de 2017 para cambiar Litecoin por Decred.
- El primer intercambio atómico fuera de la cadena se realizó en noviembre de 2017 para intercambiar Litecoin por Bitcoin en el Lightning Network.
- Puede encontrar una explicación detallada del intercambio atómico Ethereum-Bitcoin aquí.
- Más recientemente, el 7 de diciembre de 2018, TenX intercambió ERC20 por Bitcoin en un intercambio atómico de muestra como parte de la demostración de su software de código abierto COMIT.

Esta tecnología resulta muy prometedora, pero para lograr la adopción general tanto las billeteras como los centros cambiarios tendrán que diseñar interfaces amigables con el usuario que faciliten la realización de intercambios atómicos

### Resumen

Los intercambios atómicos representarán una alternativa a los centros cambiarios centralizados utilizados en la actualidad una vez que estén disponibles para la mayoría de las criptomonedas. En ningún momento del intercambio hay terceros con acceso a los fondos de los usuarios. El proceso de intercambio queda libre de terceros y es casi instantáneo. Los HTLC son un tipo de contrato que forman el núcleo de los intercambios atómicos. Es posible que pronto la compatibilidad con intercambios atómicos sea una necesidad par que una cadena de bloques logre adopción.
