---
layout: post
type: intro
title: "Tipos de billetera"
description: "Para recibir y enviar criptomonedas es necesario utilizar una billetera. En este capítulo se expondrán los diferentes tipos que hay disponibles."
permalink: /technology/advanced/types-of-wallets/
topic: technology
level: advanced
chapter: "Billeteras"
---

Una billetera es una programa que genera, administra y almacena un par de llaves criptográficas. El usuario puede revisar su saldo, recibir y enviar fondos desde su billetera; (si no le quedan claras las funciones principales de la billetera, lo invitamos a leer nuestro artículo de nivel principiante sobre el tema). En resumen, sin embargo, la principal diferencia entre los distintos tipos de billetera es la ubicación física en la que se almacenan las llaves del usuario.

![Wallet](/assets/post_files/technology/advanced/types-of-wallets/wallet2_D.jpg)
![Wallet](/assets/post_files/technology/advanced/types-of-wallets/wallet2_M.jpg)

### Los diferentes tipos de billetera

Este artículo busca exponer qué tipos de billetera hay disponibles en el mercado para ayudar al lector a distinguir entre ellos. Hemos descrito en la tabla siguiente los diferentes tipos de billetera.

![overview](/assets/post_files/technology/advanced/types-of-wallets/ES_overview_D.jpg)
![overview](/assets/post_files/technology/advanced/types-of-wallets/ES_overview_M.jpg)

### Billeteras web hosteadas

Antes de describir las billeteras web, recordemos que una billetera sirve como interfaz para realizar operaciones básicas en la cadena de bloques de una criptomoneda (ver, recibir y enviar fondos) y que necesita acceso a las llaves del usuario para lograrlo.

Esto nos lleva a una distinción entre billeteras web hosteadas y no hosteadas. Con una billetera web hosteada, un tercero de confianza almacena en línea las llaves del usuario. Los terceros suelen ser centros cambiarios como Coinbase, Binance o Bittrex. Al crear un cuenta con cualquiera de estas entidades, se crea una entrada en su base de datos interna que empareja la cuenta del usuario con un par de llaves para las diferentes monedas que tienen disponibles.

![Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/ES_hosted_webwallet_D.jpg)
![Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/ES_hosted_webwallet_M.jpg)

Una ventaja de una billetera web hosteada es que le da al usuario la opción de recuperar su contraseña si la olvida. En cualquier otro caso, la pérdida de la llave privada (junto con su frase mnemónica) resulta en la pérdida de todos los fondos del usuario.

Esta característica puede darle tranquilidad al usuario, pero las billeteras hosteadas (también llamadas hot wallets o cloud wallets) también tienen desventajas. Es importante recordar que si el usuario no controla sus llaves, no controla sus fondos. Involucrar a un tercero siempre tiene sus riesgos, sin importar qué tan confiable pueda considerarse. Primeramente, son un objetivo más atractivo para los hackers que un individuo, pues el botín que ofrecen es mucho mayor. Segundo, en el caso improbable de un cambio regulatorio, podría resultarle imposible al usuario retirar sus fondos; una situación poco común, pero no imposible. Tercero, nunca puede descartarse la posibilidad de que la entidad en cuestión quiebre o, peor aún, hurte los fondos de sus usuarios. En el caso de los centros cambiarios que ya mencionamos, no es probable que esto suceda, pero el riesgo permanece.

Por estas razones, nuestro consejo sería que el usuario almacene por cuenta propia sus llaves, es decir, almacenarlas en su billetera enteramente bajo su control. Que el usuario pueda resguardar la seguridad de sus propias llaves es una responsabilidad que este debe asumir, pero es también una de las principales razones por las que existen las criptomonedas.

Es indispensable que el usuario conserve algo de fondos en un centro cambiario de manera permanente si tiene pensado realizar transacciones de manera cotidiana, pero las implicaciones de esto no competen al contenido de este artículo.

### Billeteras web no hosteadas 

A la par de las billeteras web hosteadas existen las no hosteadas. La billetera web no hosteada más popular es quizás MyEtherWallet, capaz de almacenar Ether (ETH) y todos los tokens ERC-20 (los tokens que habitan la cadena de bloques de Ethereum). Estas billeteras presentan al usuario una interfaz para revisar su saldo o crear transacciones en su explorador web, pero es necesario que ingrese la información de sus llaves cada vez que inicie sesión.

![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/non-hosted_webwallet_D.jpg)
![Non-Hosted Web Wallets](/assets/post_files/technology/advanced/types-of-wallets/non-hosted_webwallet_M.jpg)

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
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/coinomi.jpg" alt="coinomi"></div>
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/paytomat.jpg" alt="Paytomat"></div>
    <div class="col-md-4"><img src="/assets/post_files/technology/advanced/types-of-wallets/mycelium.png" alt="mycelium"></div>
</div>

Si el usuario obtuvo sus primeras monedas en un centro cambiario, lo recomendable sería que transfiriera sus fondos fuera del exchange (una billetera web hosteada) hacia una billetera desktop, hardware o de papel. Le recomendamos al usuario empezar por hacer una transacción pequeña para confirmar que el proceso transcurrirá normalmente. Si esta primera transacción resulta exitosa, puede proceder a enviarse el resto de sus fondos. Tras este proceso, se encuentra protegido de los riesgos que implica involucrar a un tercero, pero ha asumido también la responsabilidad de resguardar sus fondos.

### Billeteras de papel

Volvamos a hacernos la pregunta “¿Dónde están las llaves?”, una billetera de papel daría una respuesta quizás sorprendente: En la mano del usuario. Una billetera de papel no es ni más ni menos que el par de llaves del usuario impresas en papel. Casi todas las criptomonedas ofrecen generadores de billeteras de papel. Para crear un par de llaves primero es necesario generar un poco de entropía (o desorden); en otras palabras, el usuario debe aspirar a que sus llaves sean lo más aleatorias posible. Esta aleatoriedad suele generarse automáticamente, pero a veces es necesario que el usuario mueva el mouse o pulse ciertas teclas para ayudar a crear la aleatoriedad.

Al imprimir la billetera de papel no se recomienda utilizar una impresora compartida como la de la oficina. De hecho, el ideal es que la impresora que se utilice no cuente con funciones red/Wi-Fi. Muchas impresoras conservan copias de los últimos archivos impresos, y un atacante podría aprovecharse de esto.

Tras imprimir de manera segura su billetera de papel, tendrá algo similar a esto:

![paper wallet](/assets/post_files/technology/advanced/types-of-wallets/paper_wallet.jpg)

Solo queda una cosa por hacer, enviar los fondos a la llave pública. Tras de hacer eso, el resultado es o el mejor regalo de cumpleaños o un medio de almacenamiento a largo plazo para los fondos del usuario. Obviamente, los principales riesgos asociados a las billeteras de papel son su pérdida o destrucción accidentales. Si el usuario no posee la frase mnemónica para recuperar su llave privada, corre el riesgo de perder todos sus fondos por accidente; así que decida con mucho cuidado dónde guardará su billetera de papel. Imprima varias copias si se siente incómodo con solo una, luego guarde cada una en un lugar seguro.

### Billeteras hardware

Pasemos a las consentidas de todos, las billeteras hardware. En una billetera hardware, las llaves del usuario se almacenan en su dispositivo en algo llamado elemento seguro (secure element). El elemento seguro es un lugar para almacenar información que no puede ser accedido por la computadora o cualquier otro dispositivo una vez conectado. Aunque por fuera luce como una memoria USB ordinaria, hace más que solo almacenar llaves. Al optar por una billetera de hardware, el usuario cuenta también con varias opciones de interfaz, una de ellas es MEW, pero existen varias otras opciones. Existen también las apps de billeteras nativas proporcionadas por los productores. En el caso de Ledger, por ejemplo, la billetera nativa se llama Ledger Live.

Ahora lo interesante, ¿cómo funciona una billetera de este tipo?

La interfaz de la billetera genera una dirección a partir de la llave pública del usuario cuando este quiere recibir fondos. Utilizar esta función es fácil. Si el usuario le da clic al botón de “Recibir” la interfaz responde arrojando la dirección que se debe compartir con el remitente. Si el usuario desea enviar fondos, la aplicación crea una transacción formal que debe firmarse. La transacción sin firmar se envía a la billetera de hardware, donde la llave privada almacenada en el dispositivo la firma. La firma regresa a la computadora, donde la transacción completa, incluyendo la firma, se propaga a la red.

![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/ES_signing_hardware_wallet_D.jpg)
![signing hardware wallet](/assets/post_files/technology/advanced/types-of-wallets/ES_signing_hardware_wallet_M.jpg)

Las llaves privadas del usuario nunca salen del dispositivo, por lo que no son visibles para la computadora en ningún momento. No es en vano que este tipo de billetera sea el más popular, pues son la manera más segura de almacenar cripto, en especial en grandes cantidades.

Si el dispositivo llega a romperse, el usuario tiene la frase mnemónica como respaldo. Repetimos; la frase mnemónica, en todos los casos, debe mantenerse en un lugar privado y seguro (también puede entregarse una copia a un familiar o almacenarla en un banco, todo depende el nivel de seguridad deseado).

### Resumen

Hay muchas maneras de almacenar criptomonedas. Generalmente, tiene que sacrificarse la seguridad a favor de mayor conveniencia y viceversa. En general, la pregunta más importante siempre es “¿Dónde están mis llaves?”

Una billetera es un software, una interfaz que ayuda al usuario a realizar las funciones básicas propias de las criptomonedas: generar, administrar y almacenar llaves, así como consultar saldos, crear una dirección para recibir fondos y crear transacciones para enviarlos.

En el caso de una billetera web hosteada se confía a un tercero la capacidad de administrar las llaves. Esto le da al usuario el beneficio de poder recuperar su contraseña si la pierde, pero introduce riesgos propios a la participación de un tercero; quien no controla sus llaves, no controla sus fondos.

Con las billeteras desktop, móviles, de papel o hardware, es el usuario quien posee las llaves y se encarga de mantenerlas seguras. Si el dispositivo que las guarda llega a romperse o extraviarse, la frase mnemónica puede utilizarse para recuperar el acceso a los fondos. La frase es tan sensible como la llave privada misma, y el hurto de fondos es posible si cae en las manos equivocadas. Recordar esto es importante no para que el usuario la maneje con temor, sino para que tome las medidas de precaución necesarias y esté consciente de los riesgos.

El objetivo principal del movimiento criptomonetario devolverle al usuario el control de su dinero, pero…

![with great power comes great responsibility](/assets/post_files/technology/advanced/types-of-wallets/with-great-power-comes-great-responsibility.gif)
