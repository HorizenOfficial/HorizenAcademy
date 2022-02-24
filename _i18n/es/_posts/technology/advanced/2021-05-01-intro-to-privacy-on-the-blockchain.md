---
layout: post
type: intro
title: "Privacidad en la cadena de bloques"
description: "Aquí le presentamos las diferentes tecnologías que permiten transacciones privadas en una cadena de bloques pública."
permalink: /technology/advanced/privacy-on-the-blockchain/
topic: technology
level: advanced
chapter: "Privacidad"
further_reads: [how_zcoin_privacy_technology_compares_to_the_competition]
canonical_link: "/es/technology/advanced/privacy-on-the-blockchain/"
---

Una de las propuestas de valor más grandes de las cadenas de bloques es la transparencia que ofrecen como libros contables públicos. Sin embargo, hay muchos casos en los que resulta deseable llevar a cabo una transacción privada.

En este artículo presentaremos cuatro conceptos que tienen como fin aumentar el nivel de privacidad de las transacciones hechas en una cadena de bloques pública. Como ya mencionamos antes, es común pero erróneo creer que las criptomonedas son anónimas. La mayoría son seudoanónimas, es decir que no se relaciona ningún dato identitario con las direcciones, pero que existen maneras de sacar conclusiones a través del análisis de datos.

### ¿Por qué privacidad?

Existen muchas razones legítimas para llevar a cabo transacciones financieras privadas. Por ejemplo, si un usuario padece alguna condición médica y debe comprar sus medicinas de manera regular, tiene una buena razón para hacer sus compras de manera privada. Si se es dueño de un negocio, no es deseable revelarle a la competencia las fuentes de ingresos, o si se le está comprando un regalo a la pareja, el comprador querrá mantener secreta su compra hasta el momento preciso. En fin, hay muchas razones para hacer transacciones privadas, y creemos que la privacidad es y debe considerarse un derecho humano inviolable.

El contenido de este artículo da por hecho que se encuentra familiarizado ya con el modelo UTXO que muchas cadenas utilizan para hacer su contabilidad. Si no lo está, siéntase libre de retomar nuestro artículo sobre el tema antes de continuar con la lección.

### Direcciones de cambio

![Change Addresses](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/change_address_0.png)

Las direcciones de cambio (change addresses) se introdujeron con el propósito de que ningún tercero tenga la habilidad de acceder al historial completo de transacciones del usuario con solo buscar la dirección que utilizó para hacer una transacción. Por suerte, la mayoría de las billeteras disponibles actualmente generan direcciones de cambio de manera automática al crear una transacción. En la imagen superior, una transacción regular de bitcoins, pueden apreciarse una entrada y dos salidas en la transacción. La primera salida se dirigió a otra dirección y contiene la cantidad que el usuario quería gastar. El UTXO restante se regresó a la dirección que originó los fondos.

![Change Addresses](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/change_address_1.png)

Una billetera habilitada con direcciones de cambio genera una dirección nueva cada vez que el usuario recibe fondos, indistintamente de si la transacción es regular o contiene el cambio. El ejemplo anterior es de una transacción con los mismos montos que antes, pero en esta ocasión el cambio se envió a una dirección de cambio recién creada. Esta función mejora la privacidad del usuario haciendo más difícil rastrear su historial de transacciones.

### Coin Mixing

Los protocolos de mezclado de monedas (coin mixing protocols) como SharedCoin, TumbleBit o CoinJoin (utilizado por Dash) representan el siguiente paso para mejorar la privacidad del usuario de una cadena de bloques. Su función es mezclar diferentes entradas y salidas en una sola transacción, muchas veces incluso en el caso de varias transacciones intermediarias.

![Coin Mixing](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/ES_coinjoin_D.jpg)
![Coin Mixing](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/ES_coinjoin_M.jpg)

Las transacciones de mezclado de monedas no necesitan que se le haga ningún cambio al protocolo básico de Bitcoin empleado por muchas criptomonedas (como Horizen). En el mapa anterior, puede apreciarse el esquema de una transacción de mezclado. Un número determinado de entradas se combina en un centro de mezclado (mixing pool) y se distribuye luego a sus direcciones destino. Una transacción de mezclado de monedas le dificulta a un atacante saber quién le está mandando dinero a quién.

El nivel de privacidad que confieren estos servicios es preferible a la realización de transacciones regulares, pero sigue siendo posible enlazar las direcciones de entrada con las de salida rastreando las cantidades de monedas en una transacción de mezclado, de hecho, hay herramientas en línea que cumplen precisamente esta función. Otra desventaja del mezclado es que muchos de los mezcladores disponibles son entidades centralizadas ejecutadas por terceros que podrían, si así lo quisieran, apropiarse de los fondos del usuario. Las técnicas de mezclado como la de CoinJoin evitan este riesgo al ser descentralizadas.

Existen ya muchas versiones de protocolos de mezclado de monedas que han cumplido mejor con su promesa de privacidad. En el caso de CoinJoin, por ejemplo, cada usuario debe enviar la misma cantidad al centro de mezclado, lo cual hace más difícil rastrear los fondos. La introducción de las [transacciones confidenciales](https://medium.com/@ecurrencyhodler/a-primer-to-confidential-transactions-e6ab3dd2bf1e) resolverá este problema escondiendo la cantidad de las transacciones. Hablaremos más de mezcladores individuales más adelante, pero continuemos por ahora.

### Firmas anulares

El concepto de firma anular (ring signature) lo introdujeron Rivest, Shamir y Taumann en 2001, y la idea en general se ha empleado en un gran número de protocolos de privacidad desde entonces. Tomaremos de ejemplo el problema de leaks reciente de la Casa Blanca para demostrar la propuesta de valor de este tipo de firma.

Imaginemos que un alto funcionario de la Casa Blanca (Alice) quiere divulgar a los medios un secreto sobre el presidente. A Alice le interesa que el periodista que reciba el leak tenga una manera de verificar la fuente de la información sin revelar su identidad. Lo que Alice puede hacer en este caso es utilizar una firma anular para firmar el mensaje. Para construir la la firma, lo único que necesita es su llave privada y las llaves públicas de otros posibles denunciantes (por ejemplo, otros miembros del gabinete; Bob y Carol).

![Ring Signatures](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/ES_ring_sig_D.jpg)
![Ring Signatures](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/ES_ring_sig_M.jpg)

El verificador (periodista) puede verificar que el mensaje fue firmado por un alto funcionario, pero le resulta imposible determinar cuál de los tres (si Alice, Bob o Carol) construyó la firma.

En el contexto de las criptomonedas, el creador de una firma anular puede tomar un grupo de llaves públicas, crear una transacción y firmarla utilizando su llave privada. Los verificadores, en este caso los nodos de la red, pueden verificar que la transacción es válida y que un miembro del grupo la firmó, pero sin poder determinar quién. Esto hace de las firmas anulares una gran herramienta para llevar a cabo transacciones privadas.

Monero es la cripto más conocida que hace uso de las firmas anulares que forman parte del protocolo CryptoNote, el mismo utilizado por esta divisa. El protocolo CryptoNote se ha ido extendiendo con el tiempo. Una adición importante es la del protocolo RingCT, un cambio en el esquema de la firma anular que no solo esconde la identidad del remitente de la transacción sino también la cantidad transferida.

### Pruebas de cero conocimiento

Las pruebas de cero conocimiento (zk-proofs) se conocían desde antes de la emergencia de la tecnología blockchain, pero con la invención de los libros contables distribuidos surgió en torno a ellas todo un rango de posibilidades de uso.

En resumen, una prueba de cero conocimiento permite al usuario demostrarle a un verificador que cuenta con cierta información sin tener que revelársela. Un ejemplo intuitivo y no digital de cómo puede lucir este modelo puede crearse visualizando a una persona vidente (como probador), una persona con los ojos vendados (como verificador) y dos bolas de colores distintos.

La persona vidente (el probador) quiere convencer a la persona invidente (el verificador) de que las bolas son de distintos colores, pero sin revelarle los colores. Ambos se sientan en una mesa y la persona invidente le muestra al probador una de las bolas. La persona invidente vuelve a esconder las bolas y revela una por segunda vez, ya sea la misma bola o la segunda. Si muestra la misma bola, el probador lo sabe por el color y le transmite esta información a la persona invidente. Si la persona invidente muestra la otra bola, el probador puede saber con confianza que que el verificador (la persona invidente) cambió las bolas debajo de la mesa.

![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/ES_zkproof_D.jpg)
![Zero-Knowledge Proofs](/assets/post_files/technology/advanced/5.0-privacy-on-the-blockchain/ES_zkproof_M.jpg)

En la segunda ronda, el probador tiene una oportunidad del 50% de adivinar si tuviera que hacerlo. Tendría que adivinar en caso de que la aseveración que busca comprobar (que las bolas son de diferentes colores) fuera falsa. En este momento de la prueba, la persona invidente no puede estar segura de si la aseveración es correcta o si el probador tuvo suerte.

Si el juego se repite varias veces, la probabilidad de adivinar correctamente todas las veces disminuye exponencialmente. Tras solo diez rondas del juego, la probabilidad de adivinar la bola correcta se reduce a 1 de 1021 (1/2^10). La persona invidente puede entonces estar bastante segura de que las bolas son de colores distintos a pesar de que el probador no ha compartido ninguna información sobre los colores en sí.

El objetivo de utilizar pruebas de cero conocimiento en transacciones criptomonetarias es el siguiente: Puede construirse una prueba de que la transacción que el usuario quiere realizar será considerada válida por un nodo verificador sin revelar ningún dato sobre la transacción en sí. Esto permite que el remitente, receptor y la cantidad se mantengan privados.

Otro caso donde resulta perfecta la aplicación de pruebas de cero conocimiento es en la verificación de identidades; un usuario, por ejemplo, podría comprobarle a una entidad que tiene una edad determinada sin revelar datos personales como su fecha de nacimiento.

Horizen hace uso de algo llamado zkSNARK para sus transacciones privadas. Los zkSNARK, o argumentos de conocimiento sucintos no interactivos de cero conocimiento  (zero-knowledge succinct non-interactive arguments of knowledge) son una especie de prueba de cero conocimiento.

- Sucinto se refiere al hecho de que las pruebas son cortas (pueden calcularse y verificarse fácilmente).
- No interactivos quiere decir que el probador y verificador no tienen que estar en línea al mismo tiempo. Con ejemplo de las bolas de color que utilizamos anteriormente, el probador y verificador deben realizar la prueba varias veces antes de que el verificador logre obtener una prueba de la declaración. En el caso de las pruebas no interactivas, el probador es capaz de construir la prueba por sí solo sin necesidad de comunicarse con el verificador durante el proceso.
- Argumento de conocimiento describe que la prueba se hace de manera computacionalmente sólida, es decir, ningún adversario puede construir pruebas falsas aun cuando tiene acceso a una gran cantidad de recursos computacionales.
- Para hacer transacciones privadas con Horizen, el usuario utiliza un tipo de dirección diferente. En su billetera, este tiene la opción de generar direcciones T (direcciones transparentes) o direcciones Z (direcciones protegidas). Al enviar fondos a una dirección Z, la cantidad y el remitente se registran en la cadena de bloques, pero no la dirección del receptor. Si los fondos de reenvían a una segunda dirección Z, no se registra ninguna información sobre la transacción; ni el remitente, receptor o cantidad se revelan. Si quiere poner a prueba esta característica, descargue nuestra aplicación, Sphere by Horizen. Asegúrese de activar el modo completo en la sección de ajustes, de otra manera, no será capaz de generar direcciones Z.

### Resumen

El usuario cuenta con muchas maneras de recuperar su privacidad en una cadena de bloques pública. Acercamientos como los de direcciones de cambio y mezcladores de moneda no aseguran mucha privacidad, pero sí hacen más difícil rastrear el origen de una transacción y relacionar las direcciones en la cadena de bloques con identidades personales. Los conceptos de firmas anulares y pruebas de cero conocimiento son técnicas más avanzadas que permiten al usuario realizar transacciones completamente privadas, incluso en cadenas de bloques abiertas y públicas.
