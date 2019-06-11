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

{%
  include image_caption.html
  image="/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_array_D.jpg"
  image2="/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_array_M.jpg"
  caption="One-dimensional array with six elements"
%}

Los _nodos_ son los elementos de información en una lista enlazada. Un nodo incluye al menos un pedazo de información de cualquier tipo y un puntero al siguiente elemento. La función del puntero es indicarle a la computadora dónde encontrar el siguiente elemento de la lista.

Si el usuario está viendo el primer pedazo de información de una lista y quiere pasar al segundo, deberá buscar el puntero que lo dirija a ese elemento. Es más fácil agregar datos a una lista enlazada sumándole un nodo que agregarlos a una matriz aumentando el número de elementos. 

Algo con lo que el usuario no cuenta en una lista enlazada es _acceso instantáneo_. Si se está buscando un pedazo de información específico en la lista enlazada será preciso que el usuario busque en el primer _nodo_, la _cabeza_ de la lista. Si este no es el elemento solicitado, el usuario sigue el enlace o puntero que lo llevará al siguiente nodo. Si este segundo nodo tampoco contiene la información deseada, debe continuar siguiendo punteros en la cadena de nodos hasta encontrar los datos buscados.

![Linked List](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_linked_list_D.jpg)
![Linked List](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_linked_list_M.jpg)

La cadena de bloques es como una lista enlazada en el contexto de estructuras de datos; separa los datos en contenedores; los _bloques_. Así, los _bloques_ son bastante análogos a los _nodos_ de una lista enlazada. Cada _bloque_ contiene una _referencia_; una marca del bloque que lo antecede. Esto sirve como enlace al bloque anterior y establece un orden en la cadena de bloques.

![Blockchain data](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_blockchain_data_D.jpg)
![Blockchain data](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_blockchain_data_M.jpg)

La diferencia fundamental entre una cadena de bloques y una lista enlazada es que cada referencia en la cadena de bloques está asegurada criptográficamente. Al hablar de cadenas de bloques, es común escuchar el término _append-only data structure_ para describirlas. Esto significa que solo puede agregarse información a la cadena si se añade al frente de esta. Los enlaces asegurados se monitorean de manera constante para constatar su validez, por lo que si alguien insertara un bloque malicioso a media cadena de bloques (por ejemplo, entre los bloques 1 y 3 de la imagen a continuación), sería fácil incluir una referencia al bloque anterior (el bloque 1) pero casi imposible lograr que el bloque siguiente (el 3) contenga una referencia al bloque recién insertado.

Cada bloque puesto encima de un bloque existente se conoce comúnmente como una _confirmación_. Entre mayor antigüedad acumula un bloque, mayor el número de confirmaciones que tendrá. Cada confirmación hace más difícil alterar el bloque. El bloque 2 en la gráfica inferior tiene una sola confirmación. Para poder modificar los datos que contiene, el usuario tendría que recrear una referencia válida, y cada confirmación haría necesaria la recreación de una referencia adicional. De esta manera, los bloques más antiguos se encuentran más seguros de sufrir cambios.

![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_blockchain_broken_D.jpg)
![Blockchain broken](/assets/post_files/technology/advanced/blockchain-as-a-data-structure/ES_blockchain_broken_M.jpg)

as referencias entre bloques no solo dependen del orden de los mismos, sino también de los datos que cada uno contiene. No es para nada fácil agregar o borrar datos de un bloque, y esta propiedad es el fundamento de la confianza que tienen los usuarios de la cadena de que su información se encuentra almacenada de manera segura.

Al mismo tiempo, es fácil agregar datos en un nuevo bloque de la cadena, pues cualquier usuario tiene la capacidad de agregar una transacción nueva a una cadena criptomonetaria. La transacción del usuario resulta fácil de verificar porque todas las transacciones registradas anteriormente son inmutables. Si la dirección Y quiere gastar una cantidad, significa que ha recibido por lo menos esa cantidad en transacciones pasadas y no ha gastado aún esos fondos.

Las divisas criptomonetarias son solo uno de muchos usos que pueden dársele a la tecnología blockchain, misma que está convirtiéndose rápidamente en una de las mejores maneras de monitorear cadenas de suministro, gestionar flotas y más.

### Resumen

La cadena de bloques es un método de almacenamiento de datos en el contexto de las ciencias computacionales. Los elementos o bloques de la cadena de bloques se encuentran enlazados criptográficamente, por lo que no resulta factible modificar los datos una vez que se han registrado en el bloque. De esta manera, la cadena es capaz de almacenar valor, pues opera como un libro contable inmutable contenido en un ambiente seguro.

Nos gustaría cerrar esta sección con un tuit de Nick Szabo, el cual que consideramos destila las implicaciones de las propiedades de la tecnología blockchain en el contexto de las estructuras de datos.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Blockchains don’t guarantee truth; they preserve truth &amp; lies from later alteration, allowing one to securely analyze them and be more confident in uncovering the lies. Typical computers are computational etch-a-sketch, while blockchains are computational amber.&quot; - <a href="https://twitter.com/NickSzabo4?ref_src=twsrc%5Etfw">@NickSzabo4</a></p>&mdash; Jameson Lopp (@lopp) <a href="https://twitter.com/lopp/status/1059227449232445440?ref_src=twsrc%5Etfw">November 4, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

_“Las cadenas de bloques no garantizan la verdad; evitan que tanto verdad como mentira sean alteradas, permitiendo que cualquiera las analice e identifique con confianza las mentiras. Una computadora típica es como un juguete Etch A Sketch, mientras que las cadenas de bloques son el ámbar computacional.”_