---
layout: post
type: intro
title: "Tipos de billetera"
description: "Para recibir y enviar criptomonedas es necesario utilizar una billetera. En este capítulo se expondrán los diferentes tipos que hay disponibles."
permalink: /technology/advanced/types-of-wallets/
topic: technology
level: advanced
chapter: "Tipos de billetera"
---

Una billetera es una programa que genera, administra y almacena un par de llaves criptográficas. El usuario puede revisar su saldo, recibir y enviar fondos desde su billetera; (si no le quedan claras las funciones principales de la billetera, lo invitamos a leer nuestro artículo de nivel principiante sobre el tema). En resumen, sin embargo, la principal diferencia entre los distintos tipos de billetera es la ubicación física en la que se almacenan las llaves del usuario.

![Wallet]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/wallet2_D.jpg)
![Wallet]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/wallet2_M.jpg)

### Los diferentes tipos de billetera

Este artículo busca exponer qué tipos de billetera hay disponibles en el mercado para ayudar al lector a distinguir entre ellos. Hemos descrito en la tabla siguiente los diferentes tipos de billetera.

![overview]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/ES_overview_D.jpg)
![overview]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/ES_overview_M.jpg)

### Billeteras web hosteadas

Antes de describir las billeteras web, recordemos que una billetera sirve como interfaz para realizar operaciones básicas en la cadena de bloques de una criptomoneda (ver, recibir y enviar fondos) y que necesita acceso a las llaves del usuario para lograrlo.

Esto nos lleva a una distinción entre billeteras web hosteadas y no hosteadas. Con una billetera web hosteada, un tercero de confianza almacena en línea las llaves del usuario. Los terceros suelen ser centros cambiarios como Coinbase, Binance o Bittrex. Al crear un cuenta con cualquiera de estas entidades, se crea una entrada en su base de datos interna que empareja la cuenta del usuario con un par de llaves para las diferentes monedas que tienen disponibles.

![Hosted Web Wallets]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/ES_hosted_webwallet_D.jpg)
![Hosted Web Wallets]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/ES_hosted_webwallet_M.jpg)

Una ventaja de una billetera web hosteada es que le da al usuario la opción de recuperar su contraseña si la olvida. En cualquier otro caso, la pérdida de la llave privada (junto con su frase mnemónica) resulta en la pérdida de todos los fondos del usuario.

Esta característica puede darle tranquilidad al usuario, pero las billeteras hosteadas (también llamadas hot wallets o cloud wallets) también tienen desventajas. Es importante recordar que si el usuario no controla sus llaves, no controla sus fondos. Involucrar a un tercero siempre tiene sus riesgos, sin importar qué tan confiable pueda considerarse. Primeramente, son un objetivo más atractivo para los hackers que un individuo, pues el botín que ofrecen es mucho mayor. Segundo, en el caso improbable de un cambio regulatorio, podría resultarle imposible al usuario retirar sus fondos; una situación poco común, pero no imposible. Tercero, nunca puede descartarse la posibilidad de que la entidad en cuestión quiebre o, peor aún, hurte los fondos de sus usuarios. En el caso de los centros cambiarios que ya mencionamos, no es probable que esto suceda, pero el riesgo permanece.

Por estas razones, nuestro consejo sería que el usuario almacene por cuenta propia sus llaves, es decir, almacenarlas en su billetera enteramente bajo su control. Que el usuario pueda resguardar la seguridad de sus propias llaves es una responsabilidad que este debe asumir, pero es también una de las principales razones por las que existen las criptomonedas.

Es indispensable que el usuario conserve algo de fondos en un centro cambiario de manera permanente si tiene pensado realizar transacciones de manera cotidiana, pero las implicaciones de esto no competen al contenido de este artículo.

### Billeteras web no hosteadas

A la par de las billeteras web hosteadas existen las no hosteadas. La billetera web no hosteada más popular es quizás MyEtherWallet, capaz de almacenar Ether (ETH) y todos los tokens ERC-20 (los tokens que habitan la cadena de bloques de Ethereum). Estas billeteras presentan al usuario una interfaz para revisar su saldo o crear transacciones en su explorador web, pero es necesario que ingrese la información de sus llaves cada vez que inicie sesión.

![Non-Hosted Web Wallets]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/non-hosted_webwallet_D.jpg)
![Non-Hosted Web Wallets]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/non-hosted_webwallet_M.jpg)

Hay un rango de funciones a las que el usuario tiene acceso con MyEtherWallet (comúnmente abreviada MEW). La primera de ellas le permite consultar su saldo. MetaMask es una extensión de explorador que da la opción de hacer pagos en ETH dentro del explorador y de iniciar sesión en MEW. Incluye también una función que detecta sitios fraudulentos, la cual advierte al usuario si está a punto de ingresar a uno.

Algunas otras opciones, como las de Ledger Wallet, Trezor, Bitbox y Secalot son billeteras hardware, y las discutiremos más adelante en el artículo.

Las últimas dos opciones son más o menos similares en cuanto a la seguridad. Le dan al usuario la opción de ingresar directamente su llave privada o de utilizar su frase mnemónica (la cual produce la llave privada al hashearse). Esto puede ser peligroso si, por ejemplo, la computadora que se está utilizando está infectada con algún malware capaz de almacenar llaves.

El concepto de frase mnemónica es uno que se empleará en el caso de todas las billeteras digitales que discutiremos. Al crear su billetera, el usuario verá una cadena de palabras aleatorias, generalmente entre 12 y 24; esta es la frase mnemónica, y resulta idóneo escribirla y guardarla en un lugar seguro.

Es **importante** conservar la frase mnemónica en un pedazo de papel o en cualquier otro tipo de formato análogo adecuado, lo esencial es nunca escribirla en un archivo de texto o almacenarla por medio de una captura de la pantalla en la computadora, pues esto le hace la tarea más fácil a un posible atacante.

Si el usuario rompe o pierde su dispositivo, sea este un celular, computadora o billetera de hardware, la frase mnemónica suele ser su última oportunidad de recuperar sus fondos. La llave privada puede reconstruirse aplicándole una función hash, aunque esto significa que cualquier otra persona puede hacer lo mismo. Así pues, es tan importante resguardar esta frase como lo es los fondos mismos.

En conclusión, una billetera web no hosteada resulta conveniente, aunque su seguridad dependerá del método que el usuario elija para ingresar sus llaves.

### Billeteras desktop y móviles

Si el usuario se hace la pregunta “¿Dónde están mis llaves?”, las billeteras desktop y móviles le responderían lo mismo: en el dispositivo. Ya que nuestros teléfonos y tabletas son más poderosos que nunca, la diferencia entre una billetera desktop y móvil es marginal. Inclusive la discusión de cuál de las dos es más segura queda por resolverse.

Ya conocemos las tareas que puede realizar una billetera: revisar, recibir y enviar. Si usted desea usar cripto diariamente para hacer transacciones, no hay manera de evitar tener siempre disponible algo de fondos en la billetera móvil. Como ya mencionamos, al crear la billetera digital se le proporciona al usuario una frase mnemónica que debe mantener segura. Generalmente, las billeteras poseen también un PIN, contraseña o algún tipo de reconocimiento facial o táctil para accederlas. Es imperativo nunca tener en la billetera más fondos de los que uno estaría dispuesto a perder. Lo mismo pasa con el dinero en efectivo, nadie carga con todos sus fondos en fajas de billetes. Lo recomendable es retirar una cantidad cómoda y mantener el resto de los fondos en la cuenta (o debajo del colchón, :P).

En el caso de las billeteras desktop y móviles, el usuario debe elegir entre aquellas que manejan una sola moneda o una billetera capaz de manejar varias. Algunas populares para desktop incluyen Coinomi y Sphere by Horizen, mientras que para dispositivos móviles existen Coinomi, Mycelium o Paytomat, entre otras.

<div class="row align-items-center">
    <div class="col-md-4"><img src="{{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/coinomi.jpg" alt="coinomi"></div>
    <div class="col-md-4"><img src="{{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/paytomat.jpg" alt="Paytomat"></div>
    <div class="col-md-4"><img src="{{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/mycelium.png" alt="mycelium"></div>
</div>

Si el usuario obtuvo sus primeras monedas en un centro cambiario, lo recomendable sería que transfiriera sus fondos fuera del exchange (una billetera web hosteada) hacia una billetera desktop, hardware o de papel. Le recomendamos al usuario empezar por hacer una transacción pequeña para confirmar que el proceso transcurrirá normalmente. Si esta primera transacción resulta exitosa, puede proceder a enviarse el resto de sus fondos. Tras este proceso, se encuentra protegido de los riesgos que implica involucrar a un tercero, pero ha asumido también la responsabilidad de resguardar sus fondos.

### Billeteras de papel

Volvamos a hacernos la pregunta “¿Dónde están las llaves?”, una billetera de papel daría una respuesta quizás sorprendente: En la mano del usuario. Una billetera de papel no es ni más ni menos que el par de llaves del usuario impresas en papel. Casi todas las criptomonedas ofrecen generadores de billeteras de papel. Para crear un par de llaves primero es necesario generar un poco de entropía (o desorden); en otras palabras, el usuario debe aspirar a que sus llaves sean lo más aleatorias posible. Esta aleatoriedad suele generarse automáticamente, pero a veces es necesario que el usuario mueva el mouse o pulse ciertas teclas para ayudar a crear la aleatoriedad.

Al imprimir la billetera de papel no se recomienda utilizar una impresora compartida como la de la oficina. De hecho, el ideal es que la impresora que se utilice no cuente con funciones red/Wi-Fi. Muchas impresoras conservan copias de los últimos archivos impresos, y un atacante podría aprovecharse de esto.

Tras imprimir de manera segura su billetera de papel, tendrá algo similar a esto:

![paper wallet]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/paper_wallet.jpg)

Solo queda una cosa por hacer, enviar los fondos a la llave pública. Tras de hacer eso, el resultado es o el mejor regalo de cumpleaños o un medio de almacenamiento a largo plazo para los fondos del usuario. Obviamente, los principales riesgos asociados a las billeteras de papel son su pérdida o destrucción accidentales. Si el usuario no posee la frase mnemónica para recuperar su llave privada, corre el riesgo de perder todos sus fondos por accidente; así que decida con mucho cuidado dónde guardará su billetera de papel. Imprima varias copias si se siente incómodo con solo una, luego guarde cada una en un lugar seguro.

### Billeteras hardware

Pasemos a las consentidas de todos, las billeteras hardware. En una billetera hardware, las llaves del usuario se almacenan en su dispositivo en algo llamado elemento seguro (secure element). El elemento seguro es un lugar para almacenar información que no puede ser accedido por la computadora o cualquier otro dispositivo una vez conectado. Aunque por fuera luce como una memoria USB ordinaria, hace más que solo almacenar llaves. Al optar por una billetera de hardware, el usuario cuenta también con varias opciones de interfaz, una de ellas es MEW, pero existen varias otras opciones. Existen también las apps de billeteras nativas proporcionadas por los productores. En el caso de Ledger, por ejemplo, la billetera nativa se llama Ledger Live.

Ahora lo interesante, ¿cómo funciona una billetera de este tipo?

La interfaz de la billetera genera una dirección a partir de la llave pública del usuario cuando este quiere recibir fondos. Utilizar esta función es fácil. Si el usuario le da clic al botón de “Recibir” la interfaz responde arrojando la dirección que se debe compartir con el remitente. Si el usuario desea enviar fondos, la aplicación crea una transacción formal que debe firmarse. La transacción sin firmar se envía a la billetera de hardware, donde la llave privada almacenada en el dispositivo la firma. La firma regresa a la computadora, donde la transacción completa, incluyendo la firma, se propaga a la red.

![signing hardware wallet]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/ES_signing_hardware_wallet_D.jpg)
![signing hardware wallet]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/ES_signing_hardware_wallet_M.jpg)

Las llaves privadas del usuario nunca salen del dispositivo, por lo que no son visibles para la computadora en ningún momento. No es en vano que este tipo de billetera sea el más popular, pues son la manera más segura de almacenar cripto, en especial en grandes cantidades.

Si el dispositivo llega a romperse, el usuario tiene la frase mnemónica como respaldo. Repetimos; la frase mnemónica, en todos los casos, debe mantenerse en un lugar privado y seguro (también puede entregarse una copia a un familiar o almacenarla en un banco, todo depende el nivel de seguridad deseado).

### Resumen

Hay muchas maneras de almacenar criptomonedas. Generalmente, tiene que sacrificarse la seguridad a favor de mayor conveniencia y viceversa. En general, la pregunta más importante siempre es “¿Dónde están mis llaves?”

Una billetera es un software, una interfaz que ayuda al usuario a realizar las funciones básicas propias de las criptomonedas: generar, administrar y almacenar llaves, así como consultar saldos, crear una dirección para recibir fondos y crear transacciones para enviarlos.

En el caso de una billetera web hosteada se confía a un tercero la capacidad de administrar las llaves. Esto le da al usuario el beneficio de poder recuperar su contraseña si la pierde, pero introduce riesgos propios a la participación de un tercero; quien no controla sus llaves, no controla sus fondos.

Con las billeteras desktop, móviles, de papel o hardware, es el usuario quien posee las llaves y se encarga de mantenerlas seguras. Si el dispositivo que las guarda llega a romperse o extraviarse, la frase mnemónica puede utilizarse para recuperar el acceso a los fondos. La frase es tan sensible como la llave privada misma, y el hurto de fondos es posible si cae en las manos equivocadas. Recordar esto es importante no para que el usuario la maneje con temor, sino para que tome las medidas de precaución necesarias y esté consciente de los riesgos.

El objetivo principal del movimiento criptomonetario devolverle al usuario el control de su dinero, pero…

![with great power comes great responsibility]({{site.baseurl_root}}/assets/post_files/technology/advanced/3.0-types-of-wallets/with-great-power-comes-great-responsibility.gif)

## Contenido para Principiantes a Continuación - Billeteras

Suele haber algo de confusión sobre lo que una billetera digital es capaz de hacer y no, por lo que abriremos esta lección discutiendo lo que no puede hacer. En general, es imposible comprar criptomonedas con la billetera; esa es la función de los centros cambiarios o exchanges. Todo centro cambiario le proporciona una billetera al usuario para que guarde en ella sus fondos hasta que decida retirarlos, pero las billeteras no suelen incluir un servicio cambiario.

Una billetera es un programa con cuatro funciones principales:

- Generar, almacenar y administrar las llaves del usuario
- Generar direcciones para recibir fondos
- Mostrarle su saldo al usuario
- Crear y firmar transacciones para enviar fondos

![Wallet does in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/wallets/ES_wallet_does_D.jpg)
![Wallet does in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/wallets/ES_wallet_does_M.jpg)

La primera de estas funciones es la principal, y es el principal diferenciador de una billetera: **genera**, **almacena y administra las llaves del usuario**. Como se mencionó en el artículo sobre la [identidad en la cadena de bloques](https://academy.horizen.io/es/technology/advanced/the-elements-of-a-blockchain/), tener acceso a las llaves privadas significa tener acceso a sus fondos asociados.

El lugar donde el usuario resguarde sus llaves determinará la seguridad de sus fondos, así como la conveniencia de utilizarlos. En el caso de las billeteras casi siempre se debe sacrificar algo de seguridad a cambio de conveniencia y viceversa.

Si el usuario tiene disponibles fondos en su billetera móvil (su smartphone), estos son fáciles de gastar, pero no se encuentran seguros. Guardar grandes cantidades de dinero en una billetera de hardware es más seguro, pero también menos conveniente.

A continuación introduciremos una analogía que facilitará el entender el concepto de las llaves y la importancia de mantenerlas seguras.

### La billetera como llavero

Para entender cómo funciona la billetera digital, es quizás más fácil considerarla como un llavero, así, y ya que llamarla billetera puede darle al usuario la idea equivocada, queremos dejar algo claro:

**Nunca se almacenan fondos en la billetera, solo se almacenan las llaves para acceder a ellos.**

La cadena de bloques registra la cantidad de monedas asociadas a un par de llaves específico (la identidad del usuario dentro de la cadena). La cadena conoce siempre los fondos de un par de llaves porque tiene almacenadas todas las transacciones que han ocurrido. Si alguien recibe 10 ZEN en una transacción y recibe 10 ZEN en otra, queda claro que el dueño del par de llaves tiene ahora 20 ZEN, lo cual puede verificarse en el historial de transacciones.

![Wallet in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/wallets/ES_wallet_D.jpg)
![Wallet in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/wallets/ES_wallet_M.jpg)

Se necesitan las llaves almacenadas en la billetera para poder transferir fondos. Es por esto que un llavero resulta la analogía más adecuada. Si el usuario no controla sus llaves, no controla sus fondos. No es necesario saber a detalle cómo funciona cada herramienta para utilizar criptomonedas, pero sí es importante recordar que las llaves son el acceso a los fondos.

Las billeteras crean una nivel de abstracción que las hace más familiares y, además, se han ido haciendo más amigables con el usuario. Una billetera muestra al usuario su saldo, genera una dirección para recibir fondos con solo dar clic a un botón de “Depositar” o “Recibir y le proporciona una interfaz sencilla para enviar fondos. Solo es necesario indicar la dirección a la que se desea enviar fondos y la cantidad por transferir. El proceso de firma sucederá de manera automática al aceptar el envío de la transferencia.

### ¿Qué ocurre si el usuario pierde sus llaves?

Un sistema libre de permisos e intermediarios tiene sus consecuencias. Cualquiera puede unirse a la red y no es necesario registrarse ante ninguna autoridad central. Sin embargo, la facilidad de hacer las cosas de esta manera también hace responsable al usuario de la seguridad de sus fondos. No hay nadie que pueda recuperar una llave perdida, por lo que abundan historias en el internet sobre gente buscando bitcoins perdidas en discos duros antiguos. En realidad, lo que están buscando son las llaves para accederlas.

Si un tercero tuviera la capacidad de recuperar las llaves del usuario, tendrían al mismo tiempo la posibilidad de robarse sus fondos. Esto contravendría el principio de no confianza característico de una cadena de bloques.

Existe cierto tipo de mecanismo de recuperación integrado a muchas billeteras llamado frase mnemónica o frase de respaldo. Una frase mnemónica suele consistir de entre 12 y 24 palabras. Las palabras proporcionadas hacen posible la recuperación de tus llaves. La frase mnemónica se recibe al instalar y configurar la billetera, y es importante anotarla y guardarla en por lo menos en dos lugares separados y seguros.

Es de suma importancia entender que la frase de respaldo es tan importante como la llave privada misma. Si alguien accede a la frase de respaldo del usuario, puede también acceder a sus fondos para robarlos. Por esta razón, guardarla como una captura de pantalla o documento de texto en la computadora no es una práctica recomendable.

### Resumen

Podemos concluir que una billetera es un programa que ayuda al usuario a administrar sus llaves y crear transacciones de manera sencilla. La billetera consulta la cadena de bloques para determinar cuántos fondos le pertenecen tras revisar el historial de transacciones. Para enviar fondos, la billetera redacta una transacción y la firma, lo cual significa que la encripta con la llave privada.

Lo exhortamos a probar nuestra billetera, [Sphere by Horizen](https://www.horizen.io/wallets/), y visitar nuestra [Fuente ZEN](https://getzen.cash/) para poner en práctica los conocimientos adquiridos en esta sección. Al visitar la fuente, obtendrá gratuitamente una pequeña cantidad de ZEN para realizar sus primeras transacciones con criptomonedas sin tener que llenar ningún tipo de registro. Solo instale la aplicación de Sphere by Horizen, cree una billetera (y escriba su frase de respaldo en un pedazo de papel), proporcione su dirección a la Fuente ZEN y a los pocos minutos tendrá sus primeras monedas para utilizar libremente.

## Explicación Simple a Continuación - ¿Qué es una billetera?

<table class="table lead">
    <tr>
        <td class="icon"><img src="{{site.baseurl_root}}/assets/post_files/eli5/what-is-a-wallet/Wallet-2.jpg" alt="Wallet"></td>
        <td>
            Una billetera es una aplicación de computadora o teléfono que sirve para recibir y mandar dinero. Para lograrlo, utiliza a del usuario. La billetera sirve para crear y administrar ambas llaves, una pública y otra privada, las cuales funcionan de manera similar a una dirección de correo electrónico y su contraseña. Sin embargo, a diferencia de una billetera real, una billetera cripto no guarda dinero.
        </td>
    </tr>
</table>

El dinero del usuario vive en la cadena de bloques. Para poder gastarlo, es necesario que utilice su llave privada. Así, una billetera es más parecida a un llavero que una billetera regular.

## Contenido para Principiantes a Continuación - Introducción a las transacciones

En el primer artículo de nuestra sección sobre tecnología, [¿Qué es una cadena de bloques?](https://academy.horizen.io/es/technology/advanced/blockchain-as-a-data-structure/), mencionamos que la cadena de bloques es como un libro contable público que mantiene un registro de todas las transacciones que han ocurrido dentro de una red. En el artículo sobre [identidad en la cadena de bloques ](https://academy.horizen.io/es/technology/advanced/the-elements-of-a-blockchain/) explicamos que cada usuario se identifica por medio de un par de llaves individual. Por último, mencionamos que [la billetera es un programa](https://academy.horizen.io/es/technology/advanced/types-of-wallets/) que ayuda al usuario a administrar sus llaves y crear transacciones.

En este artículo presentaremos un concepto útil de recordar al pensar en las transacciones con criptomonedas y cómo funcionan. Desglosaremos este concepto por medio de una analogía que sacrifica un poco la precisión a favor de la facilidad de comprensión.

![Mailboxes in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/intro-to-transactions-basic/mailboxes.png)

Puede pensarse en una cadena de bloques como un conjunto de buzones que se encuentra dentro de un complejo de departamentos. Estos buzones, sin embargo, tienen algunas características especiales.

Primero, no existe solo una versión de cada buzón, sino que cuenta con un gran número de copias alrededor del mundo. Todas las copias del buzón son idénticas, no solo en su estructura sino también en su contenido individual. Todo cuanto se agregue al buzón se agregará a sus demás versiones. Si un usuario ejecuta un nodo completo, incluso contará con una copia completa del buzón en casa.

Los buzones pueden accederse desde donde sea, en cualquier momento, mientras se cuente con una conexión a internet. Este conjunto de buzones representará la cadena de bloques o libro contable.

### Una dirección como un buzón individual

Consideremos ahora cada buzón individualmente. Explicamos ya en artículos anteriores que la identidad del usuario en una cadena de bloques consta de un par de llaves, una pública y otra privada. Estas llaves siempre se encuentran en conjunto. Dentro de nuestra analogía, cada buzón individual es la representación de un par de llaves.

![Empty in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T1_empty_D.jpg)
![Empty in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T1_empty_M.jpg)

En lugar de enumerar los buzones, estos se identifican mediante su par de llaves. Cualquier usuario puede encontrar un buzón en específico utilizando la llave pública o dirección, pero este se puede abrir solo con la llave privada.

**Nota**: Hay una ligera diferencia entre las naturalezas de una dirección y una llave pública, pero por ahora, las consideramos lo mismo. Se detallará la diferencia en el [nivel avanzado](https://academy.horizen.io/es/technology/advanced/public-key-cryptography/) de este mismo tema.

Para que la analogía funcione, es necesario imaginar que el buzón está construido de un material transparente. Nadie más que el dueño del buzón, quien posee el par de llaves, puede abrirlo. Sin embargo, cualquiera puede ver lo que se encuentra dentro, una propiedad que retomaremos al hablar sobre el explorador de bloques.

Resumamos lo visto hasta ahora, primero utilizando los términos de la analogía del conjunto de buzones, y después utilizando terminología propia del ámbito blockchain:

La dirección permite al usuario encontrar un buzón individual del conjunto y depositar la entrega. De la misma manera, la llave pública permite al usuario ubicar una cuenta determinada dentro de la cadena de bloques para enviarle una transacción.

### La primera transacción del usuario

Usted se encontrará del lado receptor de su primera transacción, de otra manera, no podría tener fondos para transaccionar con criptomonedas. Analicemos esta primera transacción a partir de la analogía previamente planteada.

La transacción en la que usted recibe sus primeros fondos es un mensaje propagado en la red que queda registrado en todas las copias del libro contable. De ahora en adelante habrá un nuevo buzón en el conjunto con un mensaje dentro que representa la posesión de cierto número de fondos. Si se ha creado el par de llaves en la billetera y la llave pública es “AbC1”, será necesario proporcionarle esa llave o dirección al remitente de sus primeros fondos. Ese remitente bien podría ser el centro cambiario donde el usuario compró su primer ZEN, o simplemente un amigo suyo enviándole algunas monedas.

Los siguientes pasos del proceso resultan bastante sencillos de comprender:

La dirección del usuario se utilizará para crear un nuevo buzón en el conjunto. Después de esto, se introduce la primera transacción al buzón.

La transacción es visible para todos, pero solo el dueño de la llave privada correspondiente puede acceder a los fondos.

![Received in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T2_received_D.jpg)
![Received in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T2_received_M.jpg)

### Creando la primera transacción

Puede ser que ahora quiera transferir los fondos que posee en la cadena de bloques a otra dirección. Antes que nada, necesitará la llave pública o dirección del receptor. Digamos que en este caso XyZ9.

Para enviar fondos a esta dirección, sucede lo siguiente:

- La llave pública ubica el buzón correspondiente.
- La billetera utiliza la llave privada para abrir el buzón con la primera transacción.
- La billetera ubica el buzón del receptor utilizando su dirección o llave pública.
- La billetera introduce la transacción recién creada al buzón del receptor.

![Sent in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T3_sent_D.jpg)
![Sent in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/intro-to-transactions-basic/ES_T3_sent_M.jpg)

Todos los participantes de la cadena de bloques tienen la capacidad de ver (o validar) que un usuario le ha transferido fondos a un tercero, pero solo este puede accederlos utilizando la llave privada correspondiente. Una vez que la transacción se envía, no hay manera de cambiarla o revertirla. Esto significa que el usuario debe siempre cerciorarse de estar enviando los fondos a la cuenta correcta. De ser posible, se recomienda utilizar la función de copiar y pegar en lugar de teclear manualmente una dirección y revisar los números por separado. Si se envían fondos por accidente a la persona equivocada, no hay manera de recuperarlos.

Es momento ahora de retomar una declaración hecha en el artículo sobre billeteras. Ahí, mencionamos que no se almacenan fondos en la billetera, sino solo las llaves para acceder a ellos. Esperamos que esto tenga mayor sentido ahora, y que quede claro que es la cadena de bloques en sí la que almacena todas las transacciones. Si se tienen 5 ZEN, esto quiere decir que existe una entrada en la cadena que dice “El usuario X ha enviado 5 ZEN a tu dirección”. Las criptomonedas son entradas en el libro contable, y por lo tanto no se pueden almacenar fondos en la billetera, sino solo las llaves que permiten localizarlos para crear una transacción. Así pues, conviene más visualizar la billetera digital como un llavero que como una cartera.

### Resumen

La cadena de bloques en sí es un registro de todas las transacciones que se han llevado a cabo en ella, las cuales se registran públicamente por muchos participantes. Cada transacción es una entrada única en este registro. Para recibir una transacción es necesario proporcionarle la llave pública (o dirección) al remitente, y el usuario debe abrir su billetera con su llave privada cuando desee gastar sus fondos.

En nuestra analogía, cada buzón era transparente, por lo que todos pueden ver lo que hay dentro. Además, no solo es posible ver los contenidos actuales del buzón, sino también todo lo que contuvo anteriormente.

En nuestro próximo artículo, se introducirá el concepto del explorador de bloques. Un explorador de bloques es el equivalente a un explorador de internet, pues permite al usuario acceder toda la información almacenada de manera pública en la cadena de bloques. Si quiere poner manos a la obra, le sugerimos poner a prueba [esta demostración](https://coindemo.io/), la cual hace posible crear transacciones de prueba y mucho más.

## Explicación Simple a Continuación - ¿Qué es una transacción?

Una transacción es el envío de dinero a alguien más. Cuando sea crea una transacción, se le envía un mensaje a la red avisando que el dinero enviado ahora le pertenece a otra persona. La cadena de bloques registra este mensaje.

Por ejemplo, Alice puede enviarle un ZEN a su amigo Bob. Al hacerlo, les enviará un mensaje a todos en la red anunciando la transacción.

Cuando Bob quiera gastar ese ZEN, creará un nuevo mensaje a la red. El mensaje dirá algo como: “Yo, Bob, había recibido un ZEN de mi amiga; ahora quiero enviárselo a alguien más.” De esta manera, el dinero puede enviarse sin intermediarios. Esto es similar a recibir un billete de un dólar, mismo que se entrega la siguiente persona cuando se gasta.

![Transaction in ES]({{site.baseurl_root}}/assets/post_files/eli5/what-is-a-transaction/ES_transaction_D.jpg)
![Transaction in ES]({{site.baseurl_root}}/assets/post_files/eli5/what-is-a-transaction/ES_transaction_M.jpg)
