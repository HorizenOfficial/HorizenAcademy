---
layout: post
type: article
title: "La cadena como estructura de datos"
description: "Primero, la perspectiva de un experto computacional sobre la cadena de bloques como una estructura de datos."
permalink: /technology/advanced/blockchain-as-a-data-structure/
topic: technology
level: advanced
chapter: "¿Qué es una cadena de bloques?"
---

Es posible explicar la tecnología blockchain de muchas maneras. Hasta hace poco, visualizarlas a través del lente de las criptomonedas había sido la narrativa dominante, por lo que Bitcoin es quizás lo primero que muchos asocian con ella. Sin embargo, facilitar el uso de transacciones con criptomonedas es solo una de muchas aplicaciones. En este artículo nos gustaría retroceder un poco para analizar las cadenas de bloques en términos más generales y desde una perspectiva informática formal.

### La cadena de bloques es una estructura de datos

Como estructura de datos y en el contexto de las ciencias computacionales, una cadena de bloques es una manera de almacenar, organizar y administrar información. Una estructura de datos le permite al usuario acceder, modificar y buscar los datos que contiene. Algunas de las estructuras de datos más básicas y comunes son las matrices y listas enlazadas. Una matriz es un conjunto de elementos enumerados. Estos elementos pueden ser números, letras, palabras o incluso archivos. Los índices permiten al usuario acceder a cualquier elemento individualmente, por lo que si el usuario desea cambiar la entrada de una matriz y conoce su ubicación, tiene un acceso directo a ella.

![Matriz]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_array_D.jpg)
![Matriz]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_array_M.jpg)

Los _nodos_ son los elementos de información en una lista enlazada. Un nodo incluye al menos un pedazo de información de cualquier tipo y un puntero al siguiente elemento. La función del puntero es indicarle a la computadora dónde encontrar el siguiente elemento de la lista.

Si el usuario está viendo el primer pedazo de información de una lista y quiere pasar al segundo, deberá buscar el puntero que lo dirija a ese elemento. Es más fácil agregar datos a una lista enlazada sumándole un nodo que agregarlos a una matriz aumentando el número de elementos.

Algo con lo que el usuario no cuenta en una lista enlazada es _acceso instantáneo_. Si se está buscando un pedazo de información específico en la lista enlazada será preciso que el usuario busque en el primer _nodo_, la _cabeza_ de la lista. Si este no es el elemento solicitado, el usuario sigue el enlace o puntero que lo llevará al siguiente nodo. Si este segundo nodo tampoco contiene la información deseada, debe continuar siguiendo punteros en la cadena de nodos hasta encontrar los datos buscados.

![Linked List]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_linked_list_D.jpg)
![Linked List]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_linked_list_M.jpg)

La cadena de bloques es como una lista enlazada en el contexto de estructuras de datos; separa los datos en contenedores; los _bloques_. Así, los _bloques_ son bastante análogos a los _nodos_ de una lista enlazada. Cada _bloque_ contiene una _referencia_; una marca del bloque que lo antecede. Esto sirve como enlace al bloque anterior y establece un orden en la cadena de bloques.

![Blockchain data]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_blockchain_data_D.jpg)
![Blockchain data]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_blockchain_data_M.jpg)

La diferencia fundamental entre una cadena de bloques y una lista enlazada es que cada referencia en la cadena de bloques está asegurada criptográficamente. Al hablar de cadenas de bloques, es común escuchar el término _append-only data structure_ para describirlas. Esto significa que solo puede agregarse información a la cadena si se añade al frente de esta. Los enlaces asegurados se monitorean de manera constante para constatar su validez, por lo que si alguien insertara un bloque malicioso a media cadena de bloques (por ejemplo, entre los bloques 1 y 3 de la imagen a continuación), sería fácil incluir una referencia al bloque anterior (el bloque 1) pero casi imposible lograr que el bloque siguiente (el 3) contenga una referencia al bloque recién insertado.

Cada bloque puesto encima de un bloque existente se conoce comúnmente como una _confirmación_. Entre mayor antigüedad acumula un bloque, mayor el número de confirmaciones que tendrá. Cada confirmación hace más difícil alterar el bloque. El bloque 2 en la gráfica inferior tiene una sola confirmación. Para poder modificar los datos que contiene, el usuario tendría que recrear una referencia válida, y cada confirmación haría necesaria la recreación de una referencia adicional. De esta manera, los bloques más antiguos se encuentran más seguros de sufrir cambios.

![Blockchain broken]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_blockchain_broken_D.jpg)
![Blockchain broken]({{site.baseurl_root}}/assets/post_files/technology/advanced/1.1-blockchain-as-a-data-structure/ES_blockchain_broken_M.jpg)

Las referencias entre bloques no solo dependen del orden de los mismos, sino también de los datos que cada uno contiene. No es para nada fácil agregar o borrar datos de un bloque, y esta propiedad es el fundamento de la confianza que tienen los usuarios de la cadena de que su información se encuentra almacenada de manera segura.

Al mismo tiempo, es fácil agregar datos en un nuevo bloque de la cadena, pues cualquier usuario tiene la capacidad de agregar una transacción nueva a una cadena criptomonetaria. La transacción del usuario resulta fácil de verificar porque todas las transacciones registradas anteriormente son inmutables. Si la dirección Y quiere gastar una cantidad, significa que ha recibido por lo menos esa cantidad en transacciones pasadas y no ha gastado aún esos fondos.

Las divisas criptomonetarias son solo uno de muchos usos que pueden dársele a la tecnología blockchain, misma que está convirtiéndose rápidamente en una de las mejores maneras de monitorear cadenas de suministro, gestionar flotas y más.

### Resumen

La cadena de bloques es un método de almacenamiento de datos en el contexto de las ciencias computacionales. Los elementos o bloques de la cadena de bloques se encuentran enlazados criptográficamente, por lo que no resulta factible modificar los datos una vez que se han registrado en el bloque. De esta manera, la cadena es capaz de almacenar valor, pues opera como un libro contable inmutable contenido en un ambiente seguro.

Nos gustaría cerrar esta sección con un tuit de Nick Szabo, el cual que consideramos destila las implicaciones de las propiedades de la tecnología blockchain en el contexto de las estructuras de datos.

{% include blocks/tweet.html id="1059227449232445440" %}

> “Las cadenas de bloques no garantizan la verdad; evitan que tanto verdad como mentira sean alteradas, permitiendo que cualquiera las analice e identifique con confianza las mentiras. Una computadora típica es como un juguete Etch A Sketch, mientras que las cadenas de bloques son el ámbar computacional.”

## Contenido para Principiantes a Continuación - La cadena de bloques como estructura de datos

Antes de introducir el artículo, resulta pertinente establecer una distinción entre tres conceptos esenciales:

<ul class="lead">
    <li>La tecnología de cadena de bloques en general</li>
    <li>El protocolo (las reglas) de una cadena específica</li>
    <li>La criptomoneda que se está ejecutando sobre la cadena (si la hay)</li>
</ul>

En cuanto a la cadena de bloques y lo que le permite hacer al usuario, la tecnología puede apreciarse desde muchas perspectivas según el contexto, pero aquí nos concentraremos en dos acercamientos específicos. Por una parte, veremos a la cadena como una manera de almacenar información y, por otra, como un lenguaje o protocolo para transferir valor.

## La cadena de bloques es un tipo de estructura de datos

Para un ingeniero computacional, una cadena de bloques es fundamentalmente una estructura de datos. La estructura almacena información de manera confiable aun cuando se encuentra en un ambiente digital no asegurado. El concepto de estructura de datos puede sonar técnico, pero suena precisamente a lo que es, una estructura de información. Como referencia, considere que las listas y tablas son un tipo de estructura de datos.

Hay muchos tipos de estructuras de datos en el mundo digital, uno de ellos es la cadena de bloques. Esta nomenclatura procede de la manera en la que una cadena estructura su información; pues la toma y la separa en bloques. Cada bloque contiene información sobre el bloque que lo antecede, creando así una cadena. A la declaración de qué bloque precede a cuál se le llama referencia.

![List table chain in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_list_table_chain_D.jpg)
![List table chain in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_list_table_chain_M.jpg)

### La base de datos: eficiente pero centralizada

Una base de datos es una estructura de datos muy eficiente; son una manera excelente de almacenar una gran cantidad de información, pero son operadas por una entidad central. El banco, redes sociales o tiendas en línea son ejemplos de bases de datos que almacenan la información del usuario.

La entidad central decide quién puede acceder a la base de datos para agregar o eliminar información. El usuario puede editar su propio perfil en redes y sus amigos pueden ver esa información, pero si el contenido del usuario llegara a violar las condiciones del acuerdo, los demás usuarios pueden reportarlo para que sea eliminado. Es la entidad central, sin embargo, la que decide finalmente qué contenido permanece en su plataforma. Esto puede ser bueno o malo en el caso de las redes sociales, pero resulta muy peligroso si la estructura de datos en cuestión guarda el dinero de un grupo de usuarios.

### La cadena de bloques: no tan eficiente, pero descentralizada

Son varias las entidades, o pares, que operan una cadena de bloques. Los pares no se conocen ni se tienen confianza, lo que les da el nombre de pares no confiables (trustless). Lo bueno es que, en este caso, tenerse confianza resulta innecesario. Son muchos los pares que conservan una copia de la información, pero ninguno puede cambiar o censurarla. Los participantes (o nodos) se comunican constantemente para mantenerse actualizados sobre cualquier evento nuevo. En una cadena de bloques, los eventos suelen ser transacciones.

En la cadena no hay ninguna entidad central, como un banco o cámara de compensación, responsable de captar y procesar las nuevas transacciones. Gracias a esto, cualquiera que siga las reglas del protocolo puede crear una billetera y hacer transacciones con criptomonedas sin tener que registrarse para utilizar el servicio. La transacción se transmite a la red y, posteriormente, cada participante (nodo o par) conserva una copia de la transacción. Detrás de un nodo puede haber una persona, una tienda que acepta cripto o una entidad bancaria. No existe diferencia alguna. La cantidad de copias que se conservan en la cadena la hace más lenta, pero una mayor cantidad de copias hace más segura la base de datos.

![Decentralised clearing in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_decentralised_clearing_D.jpg)
![Decentralised clearing in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_decentralised_clearing_M.jpg)

### ¿De dónde viene el término blockchain?

La blockchain no conserva la información en un solo libro contable, sino que la separa en bloques. Cada bloque se conecta entre sí como las páginas de un libro. Fue así como surgió el término de blockchain (literalmente, una cadena de bloques). La cadena opera como un libro que registra entradas en hojas. Cada ciertos minutos, una hoja se llena y se pasa a la siguiente hoja del libro. En el encabezado de esta nueva hoja se escribe algo como “La última hoja fue la X; esta es la hoja Y”. Estas referencias unen a las hojas entre sí. Si las hojas se desordenan, se pueden acomodar de nuevo sin problema gracias a sus referencias.

![Book blockchain in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_book_blockchain_D.jpg)
![Book blockchain in ES]({{site.baseurl_root}}/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_book_blockchain_M.jpg)

Cada hoja del libro representa un bloque de la cadena, por lo que la cantidad de bloques utilizados forma el cuerpo de la cadena. Las referencias unen a los bloques entre sí. En lugar de haber un solo contable encargado del libro, hay muchos usuarios trabajándolo simultáneamente. En el caso de una cadena de bloques, son los mineros quienes hacen las veces de contables, y el papel que desempeñan se explicará a detalle en secciones posteriores.

## Resumen

La cadena de bloques es simple y sencillamente una manera de almacenar información, así como lo son las listas y tablas. Las cadenas públicas cuentan con características de seguridad útiles que antes no eran posibles. Gracias a ellas, es imposible modificar la información registrada en la cadena una vez que se ha escrito. Por esta razón, son el medio ideal para dar sustento a un sistema criptomonetario.

Otra manera de entender la cadena de bloques es como un [protocolo para transferir valor](https://academy.horizen.io/es/technology/advanced/a-protocol-to-transfer-value/), así como el internet es un protocolo para transferir información. Se analizará este aspecto de la cadena de bloques en el siguiente artículo.

## Explicación Simple a Continuación - ¿Qué es una cadena de bloques?

Una cadena de bloques (blockchain) es como un gran libro contable que existe en el internet. El libro mantiene un registro de cuánto dinero tienen todos.

Cada bloque de la cadena es como una hoja del libro. Así como una hoja, los bloques tienen un cupo limitado de transacciones que pueden registrar.

Al igual que cuando se agota el espacio de una hoja, es necesario pasar al siguiente bloque de la cadena cuando el anterior se llena.

![What is a Blockchain in ES]({{site.baseurl_root}}/assets/post_files/eli5/what-is-a-blockchain/ES_what_is_blockchain_D.jpg)
![What is a Blockchain in ES]({{site.baseurl_root}}/assets/post_files/eli5/what-is-a-blockchain/ES_what_is_blockchain_M.jpg)

La cadena de bloques documenta todas las transferencias de dinero dentro de una red, registrando cada una individualmente. Esto asegura que nadie puede gastar el mismo dinero dos veces. Si el usuario tiene un ZEN y se lo envía a un amigo o tienda en línea, el receptor la moneda es ahora el propietario y tiene control completo de ella.

La tecnología blockchain resolvió un gran problema en el mundo digital. Cuando se envía una imagen por correo, lo que se envía es una copia, creando dos copias de ella, por lo que pueden mandarse copias infinitas de la misma imagen a diferentes personas. Las cadenas de bloques permiten que las cosas digitales existan solamente una vez; una de las principales razones por las que se consideran innovadoras. Las monedas digitales no funcionarían si el usuario pudiera enviar una copia del dinero para después gastarlo por segunda vez en otro lado.
