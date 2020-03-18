---
layout: post
type: article
title: "El explorador de bloques"
description: "El explorador de bloques es una herramienta que permite al usuario navegar la información contenida en la cadena. Este artículo habla del tipo de información que encontrará el usuario."
permalink: /technology/advanced/block-explorer-continued/
topic: technology
level: advanced
chapter: "Transacciones"
---

El explorador de bloques es una herramienta gráfica para visualizar y explorar los datos de la cadena de bloques. Hay exploradores de bloques disponibles para casi todas las cadenas de bloques públicas en existencia. El explorador permite al usuario explorar el historial de una cadena determinada. Para iniciar este artículo, nos remontaremos a los orígenes de la tecnología blockchain y veremos un ejemplo utilizando Bitcoin.

Si el usuario sabe navegar un explorador de bloques, sabe navegarlos todos. Son herramientas bastante intuitivas y que ayudan a entender cómo se estructuran y funcionan las cadenas de bloques. Para poder apreciar todo el contenido de este artículo, es necesario que esté familiarizado con los aspectos más básicos de las cadenas de bloques, como las transacciones y el minado. Lo invitamos a regresar a estos artículos si se siente inseguro al respecto. Si ya se encuentra familiarizado con cómo funciona una cadena de bloques, este artículo le será útil para unir algunos de los puntos que aún quedan sueltos.

### Qué hay en el explorador de bloques

La información contenida en el explorador de bloques se estructura ya sea por bloques, direcciones o transacciones individuales. Veamos un primer ejemplo para hacer de todo esto algo más tangible:

![Latest Blocks](/assets/post_files/technology/advanced/4.2-block-explorer-continued/latest_blocks.png)

Hay muchos exploradores de bloques disponibles, muchas veces más de uno para la misma cadena de bloques. Ya que visitaremos el origen de las criptomonedas en este ejemplo, estudiaremos el caso de Bitcoin y de uno de los exploradores más populares: blockchain.com.

El usuario verá un resumen de los bloques más recientes en la página de inicio. Revisemos lo que aparece a continuación:

- **Altura (Height)**: La altura es el número asociado al bloque. El primer bloque creado tiene por número “#0”, le siguió el “#1” y luego el “#2”. Como puede verse en la tabla, al momento de redactarse este artículo se habían minado ya muchos bloques.
- **Edad (Age)**: Es la edad del bloque. Aunque esta característica se explica sola, hay algo de información interesante entrelíneas; como usted ya sabrá, el tiempo de bloque, el intervalo entre el minado de dos bloques, es de 10 minutos en el caso de Bitcoin. ¿Por qué tomó entonces solo 6 minutos minar el bloque 539.772 y 9 minar el 539.771? Esto se debe a que el tiempo de bloque es un promedio. Siempre habrá bloques más lentos de crear y otros pocos que se producirán con mayor rapidez, pero en promedio el proceso tomará 10 minutos. En nuestro artículo sobre minado explicamos cómo se autoajusta el tiempo de bloque.
- **Transacciones (Transacciones)**: El número de transacciones incluidas en el bloque. Esto quiere decir que en los 6 minutos que tomó minar el bloque 539.772 se realizaron 1500 transacciones.
- **Total enviado (Total Sent)**: Las 1547 transacciones que sucedieron suman un envío de casi 4700 bitcoins.
- **Transmitido por (Relayed By)**: El minero (o colectivo de mineros) que resolvió el bloque y obtuvo la recompensa de bloque.
- **Tamaño (Size)**: La cantidad de almacenamiento que ocupa un bloque determinado.
- **Peso (Weight)**: Otra métrica relacionada al tamaño del bloque. Es una métrica más técnica pero que se relaciona con el número de transacciones. Entre mayor el número mayor el tamaño del archivo del bloque y más grande su peso.

### El bloque génesis

Veamos primero un solo bloque. La altura del primer bloque fue 0. Si el usuario quiere encontrar la primera bitcoin en ser minada, puede usar la función de búsqueda e ingresar “0”. Si no ha entrado aún al sitio, [este enlace](https://explorer.zensystem.io/block/0007104ccda289427919efc39dc9e4d499804b7bebc22df55f8b834301260602) lo llevará directamente al bloque génesis, que es el nombre que recibe siempre el primer bloque minado de una cadena.

![Genesis Block](/assets/post_files/technology/advanced/4.2-block-explorer-continued/genesis_block.png)

Repasemos la información que tenemos aquí. Puede parecer mucha en un principio, pero analizándola paso por paso resulta bastante fácil de entender.

El bloque génesis contiene solo una transacción. Una transacción por bloque es la cantidad  mínima, pues cada bloque registra la transacción coinbase que marca la creación de nuevas monedas entregadas como recompensa al minero que resolvió el bloque.

La recompensa por minar Bitcoin, en un principio, era de 50 BTC. La recompensa por bloque se reduce a la mitad cada cuatro años (o más precisamente cada 210,000 bloques). Esto ha sucedido dos veces hasta ahora. Un minero recibe actualmente 12.5 BTC por bloque.

Además de la transacción que se le recompensó al minero (en este caso Satoshi Nakamoto) no hay ninguna transacción en este bloque, y es por eso que el volumen aproximado de la transacción es 0. Hoy en día hay una pequeña tarifa adjunta a la mayoría de las transacciones, pero no siempre fue así, en especial cuando la red de Bitcoin estaba aún en su infancia.

Como ya hemos discutido la altura del bloque, pasaremos a hablar de la marca de tiempo. La primera bitcoin se minó el 3 de enero de 2009; el cumpleaños de la primera criptomoneda.

El campo de “Transmitido por” contiene información sobre el minero del bloque. Los grupos de minería de la actualidad, así como sus direcciones de recompensa, suelen ser de conocimiento público. De esta manera, el explorador de bloques sabe quién minó el bloque; compara las direcciones que recibieron las monedas recién generadas (1A1zP1…) en la transacción coinbase con los números de las direcciones de grupos de minería conocidos. En este caso, conocemos la identidad del minero aunque el explorador del bloque no nos la proporciona; el mismo Satoshi Nakamoto.

Hablamos de _dificultad_ a más detalle en nuestro [artículo sobre minería]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-07-mining %}). La dificultad describe qué tan difícil es el acertijo que deben resolver los mineros, y se refiere al número de ceros iniciales en el hash del bloque. Como podemos apreciar a la derecha, el hash del bloque génesis tenía diez ceros iniciales. Hoy en día (al momento de redactar el artículo) un bloque como el 539772 exige por lo menos 18 ceros iniciales. Entre mayor el número de ceros, mayor la dificultad del acertijo.

Los bits, el tamaño y el peso se refieren al tamaño de los datos de un bloque determinado, nada espectacular. La versión se refiere al software que se ejecutó en el momento en que se creó el bloque.

Ahora pasemos a otra dato interesante, el nonce (abreviatura de **n**umber used **once**). Cuando un minero intenta resolver un bloque, lo que están haciendo es introducir valores en el campo nonce para calcular el hash del bloque. Si el resultado no tiene el número mínimo de ceros iniciales requeridos (en la mayoría de los casos no tendrá ninguno), el minero debe volver a intentarlo con otro valor nonce aleatorio. Este proceso se repite hasta que un nonce produce un hash con el número adecuado de ceros iniciales. En el caso del primer bloque, la computadora de Satoshi proceso más de 2 mil millones de valores (si empezó en 0) antes de encontrar el valor correspondiente al resultado deseado. Recibió las primeras 50 bitcoins creadas como recompensa por minar este bloque.

### La primera transacción Bitcoin

La función más común del explorador de bloques es la de revisar el estatus de una transacción. Una transacción específica puede encontrarse ya sea buscando una de las direcciones en cuestión (la dirección del remitente o receptor) o la identidad de la transacción (el hash). La mayoría de las billeteras le muestran al usuario la identidad de todas sus transacciones (estas son las largas secuencias de caracteres en las cajas grises de la imagen inferior; b1fea… y f4184…).

Si queremos visitar la primera transacción de criptomonedas de la historia tenemos que remitirnos al bloque #170, donde se incluyó la primera transacción de bitcoins entre Satoshi Nakamoto y Hal Finney.

![Transacciónes](/assets/post_files/technology/advanced/4.2-block-explorer-continued/transactions.png)

Este bloque es el primero en la cadena de bloques de Bitcoin que contiene más de una transacción. La transacción coinbase aparece arriba, como es de esperarse, y debajo de esta se registra la primera transacción; una persona enviándole monedas a otra.

Esperamos que este artículo lo haya ayudado a navegar un explorador de bloques (o varios). Lo animamos a usarlos y analizarlos, pues esto lo ayudará a entender la manera en la que se organiza información en la cadena de bloques.
