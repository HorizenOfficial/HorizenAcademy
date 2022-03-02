---
layout: post
type: article
title: "La cadena de bloques como estructura de datos"
description: "En el primer artículo de este capítulo, veremos cómo una blockchain almacena los datos y por qué esto hace que los datos sean seguros."
permalink: /technology/beginner/blockchain-as-a-data-structure/
topic: technology
level: beginner
chapter: "¿Qué es una cadena de bloques?"
canonical_link: "/es/technology/advanced/blockchain-as-a-data-structure/"
---

Bienvenido al primer artículo de la sección de tecnología de Horizen Academy. Los dos artículos introductorios se enfocarán en explicar la naturaleza de la cadena de bloques. Antes de introducir el artículo, resulta pertinente establecer una distinción entre tres conceptos esenciales:


<ul class="lead">
    <li>La tecnología de cadena de bloques en general</li>
    <li>El protocolo (las reglas) de una cadena específica</li>
    <li>La criptomoneda que se está ejecutando sobre la cadena (si la hay)</li>
</ul>

En cuanto a la cadena de bloques y lo que le permite hacer al usuario, la tecnología puede apreciarse desde muchas perspectivas según el contexto, pero aquí nos concentraremos en dos acercamientos específicos. Por una parte, veremos a la cadena como una manera de almacenar información y, por otra, como un lenguaje o protocolo para transferir valor.

### La cadena de bloques es un tipo de estructura de datos

Para un ingeniero computacional, una cadena de bloques es fundamentalmente una estructura de datos. La estructura almacena información de manera confiable aun cuando se encuentra en un ambiente digital no asegurado. El concepto de estructura de datos puede sonar técnico, pero suena precisamente a lo que es, una estructura de información. Como referencia, considere que las listas y tablas son un tipo de estructura de datos.

Hay muchos tipos de estructuras de datos en el mundo digital, uno de ellos es la cadena de bloques. Esta nomenclatura procede de la manera en la que una cadena estructura su información; pues la toma y la separa en bloques. Cada bloque contiene información sobre el bloque que lo antecede, creando así una cadena. A la declaración de qué bloque precede a cuál se le llama referencia.

![List table chain in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_list_table_chain_D.jpg)
![List table chain in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_list_table_chain_M.jpg)


##### La base de datos: eficiente pero centralizada
Una base de datos es una estructura de datos muy eficiente; son una manera excelente de almacenar una gran cantidad de información, pero son operadas por una entidad central. El banco, redes sociales o tiendas en línea son ejemplos de bases de datos que almacenan la información del usuario.

La entidad central decide quién puede acceder a la base de datos para agregar o eliminar información. El usuario puede editar su propio perfil en redes y sus amigos pueden ver esa información, pero si el contenido del usuario llegara a violar las condiciones del acuerdo, los demás usuarios pueden reportarlo para que sea eliminado. Es la entidad central, sin embargo, la que decide finalmente qué contenido permanece en su plataforma. Esto puede ser bueno o malo en el caso de las redes sociales, pero resulta muy peligroso si la estructura de datos en cuestión guarda el dinero de un grupo de usuarios.


##### La cadena de bloques: no tan eficiente, pero descentralizada
Son varias las entidades, o pares, que operan una cadena de bloques. Los pares no se conocen ni se tienen confianza, lo que les da el nombre de pares no confiables (trustless). Lo bueno es que, en este caso, tenerse confianza resulta innecesario. Son muchos los pares que conservan una copia de la información, pero ninguno puede cambiar o censurarla. Los participantes (o nodos) se comunican constantemente para mantenerse actualizados sobre cualquier evento nuevo. En una cadena de bloques, los eventos suelen ser transacciones.

En la cadena no hay ninguna entidad central, como un banco o cámara de compensación, responsable de captar y procesar las nuevas transacciones. Gracias a esto, cualquiera que siga las reglas del protocolo puede crear una billetera y hacer transacciones con criptomonedas sin tener que registrarse para utilizar el servicio. La transacción se transmite a la red y, posteriormente, cada participante (nodo o par) conserva una copia de la transacción. Detrás de un nodo puede haber una persona, una tienda que acepta cripto o una entidad bancaria. No existe diferencia alguna. La cantidad de copias que se conservan en la cadena la hace más lenta, pero una mayor cantidad de copias hace más segura la base de datos.

![Decentralised clearing in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_decentralised_clearing_D.jpg)
![Decentralised clearing in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_decentralised_clearing_M.jpg)


##### ¿De dónde viene el término blockchain?
La blockchain no conserva la información en un solo libro contable, sino que la separa en bloques. Cada bloque se conecta entre sí como las páginas de un libro. Fue así como surgió el término de blockchain (literalmente, una cadena de bloques). La cadena opera como un libro que registra entradas en hojas. Cada ciertos minutos, una hoja se llena y se pasa a la siguiente hoja del libro. En el encabezado de esta nueva hoja se escribe algo como “La última hoja fue la X; esta es la hoja Y”. Estas referencias unen a las hojas entre sí. Si las hojas se desordenan, se pueden acomodar de nuevo sin problema gracias a sus referencias.


![Book blockchain in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_book_blockchain_D.jpg)
![Book blockchain in ES](/assets/post_files/technology/beginner/blockchain-as-a-data-structure/ES_book_blockchain_M.jpg)


Cada hoja del libro representa un bloque de la cadena, por lo que la cantidad de bloques utilizados forma el cuerpo de la cadena. Las referencias unen a los bloques entre sí. En lugar de haber un solo contable encargado del libro, hay muchos usuarios trabajándolo simultáneamente. En el caso de una cadena de bloques, son los mineros quienes hacen las veces de contables, y el papel que desempeñan se explicará a detalle en secciones posteriores.

### Resumen

La cadena de bloques es simple y sencillamente una manera de almacenar información, así como lo son las listas y tablas. Las cadenas públicas cuentan con características de seguridad útiles que antes no eran posibles. Gracias a ellas, es imposible modificar la información registrada en la cadena una vez que se ha escrito. Por esta razón, son el medio ideal para dar sustento a un sistema criptomonetario.

Otra manera de entender la cadena de bloques es como un [protocolo para transferir valor]({{ site.baseurl }}{% post_url /technology/beginner/2020-01-03-a-protocol-to-transfer-value %}), así como el internet es un protocolo para transferir información. Se analizará este aspecto de la cadena de bloques en el siguiente artículo.