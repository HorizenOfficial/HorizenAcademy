---
layout: post
type: article
title: "Criptografía de llave pública"
description: "Otro elemento importante para la tecnología blockchain es la criptografía de llave pública, la cual se utiliza para verificar propiedad y darle a cada criptomoneda su nombre."
permalink: /technology/advanced/public-key-cryptography/
topic: technology
level: advanced
chapter: "¿Cómo funciona una cadena de bloques?"
further_reads: [how_to_create_a_bitcoin_wallet_address_from_a_private_key, what_is_the_math_behind_elliptic_curve_cryptography, elliptic_curve_cryptography_a_gentle_introduction]
---

Es necesario que el usuario tenga alguna manera de representar su identidad para poder reclamar propiedad en la cadena de bloques, pues no hay propiedad sin representación del propietario. La criptografía de llave pública hace posible el presentar identidad en la cadena. Junto con las funciones hash discutidas en el último artículo, esta es la segunda piedra angular de la tecnología blockchain. Mientras que las funciones hash se utilizan para verificar la autenticidad e integridad de la información, la criptografía de llave pública se utiliza para verificar propiedad dentro de la cadena de bloques.

![How it works](/assets/post_files/technology/advanced/2.3-public-key-cryptography/ES_how_it_works_D.jpg)
![How it works](/assets/post_files/technology/advanced/2.3-public-key-cryptography/ES_how_it_works_M.jpg)

Retomemos las bases un momento. Los fundamentos de la criptografía de llave pública son la llave pública, la llave privada, las direcciones y las firmas digitales. La llave privada crea una firma digital. La cadena de bloques contiene un registro (la transacción) que establece que hay una cantidad determinada de fondos asociada a la llave pública del usuario siempre que este recibe criptomonedas. Es necesario proporcionar una firma digital para autorizar cualquier gasto, y solo se puede proporcionar esta firma si se posee también la llave privada que corresponde a la pública.

### Criptografía de curva elíptica

Es importante discutir algo llamado criptografía de curva elíptica (CCE) antes de mencionar cómo funcionan en conjunto las llaves y direcciones. Hay distintos conceptos matemáticos utilizados para elaborar un sistema criptográfico de llave pública, pero Bitcoin y muchas otras criptomonedas utilizan CCE.

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_0.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Bitcoin, Ethereum y muchas otras monedas emplean una curva llamada secp256k1, la cual aparece a la izquierda. La ecuación correspondiente a la curva es y^2=x^3+7. Lo que les da utilidad a las curvas elípticas es su capacidad de ser empleadas como modelos matemáticos con propiedades especiales.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_0.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_1.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Esta gráfica ejemplifica cómo pueden unirse dos puntos en la curva. Al querer unir P y Q, se conectan primero con una línea recta. La línea recta cruza la curva en un tercer punto. Este punto se proyecta al lado opuesto del eje “x” (se multiplica la coordenada y por -1) y obtenemos la suma de los puntos P y Q, R. En resumen, la suma de dos puntos en la curva es equivalente a un tercer punto en la misma.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_1.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_2.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Para multiplicar un punto en la curva, es necesario sumarle su propio valor. Para multiplicar el punto P le sumamos su valor una vez. En este caso, no se están conectando ambos puntos, pero interesa la línea tangente (la flecha).
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_2.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_3.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        ¿Por qué la tangente? Un punto aleatorio cercano a P (el gris más claro) conectado a P produce la línea gris más clara. Acercar este punto a P de manera progresiva (de claro a oscuro) acerca a la línea conectora con la tangente. Entre más cercanos dos puntos en la curva, más similar la línea conectora a la tangente (hasta que finalmente se convierten en una misma).
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_3.jpg" alt="ECC" style="width: 400px;"></div>
</div>

<div class="row align-items-center">
    <div class="col-lg-6 d-none d-lg-block"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_4.jpg" alt="ECC" style="width: 400px;"></div>
    <div class="col-lg-6">
        Ahora, doblar el un valor resulta fácil. Se toma nuevamente la intersección de la tangente con la curva y se proyecta al lado opuesto del eje “x”.
        <br/>
        Si el objetivo es multiplicar P por 3, sumamos P y el punto P+P. Para multiplicar P por 4, podemos sumarle a P+P su propio valor y así consecutivamente.
    </div>
    <div class="col-lg-6 d-block d-lg-none"><img src="/assets/post_files/technology/advanced/2.3-public-key-cryptography/ecc_4.jpg" alt="ECC" style="width: 400px;"></div>
</div>

Multiplicar un punto es tarea fácil. La división, en cambio, resulta difícil (léase inviable). No existe el algoritmo para calcular cuántas veces P se agregó a sí mismo o, en cuanto a la multiplicación, por qué número se multiplicó para llegar a otro punto.

Por ahora, esta información resulta suficiente para comprender los principios básicos de la criptografía de llave pública basada en curvas elípticas.

### La llave privada

Para presentar el concepto de criptografía de llave pública se usa a menudo una comparación entre la llave pública y una dirección y la llave privada y una llave de buzón. Nosotros mismos la empleamos en la sección para principiantes. Empecemos por repasar el proceso de crear una dirección desde cero.

Para crear una billetera, el primer paso es generar una llave privada. La llave privada es un número largo y aleatorio (256 bits de extensión). El número es tan inmenso que podría asignársele a cada grano de arena del mundo una llave privada única. Además de ser inmensamente extensa, la llave privada también debe maximizar la aleatoriedad lo más posible. Crear un número aleatorio es más difícil de lo que suena, pero es un paso esencial para mantener seguros los fondos del usuario.

### La llave pública

La llave pública deriva de la cifra extensa y aleatoria generada para la llave privada. Como mencionamos ya, sumar puntos en una curva elíptica es bastante sencillo. Bitcoin emplea un punto base en la curva para cada par de llaves.

Las coordenadas son:

$$
x = 55066263022277343669578718895168534326250603453777594175500187360389116729240
$$

y

$$
y = 32670510020758816978083085130507043184471273380659243275938904335757337482424
$$

Ahora, el punto base se suma a sí mismo tantas veces como lo indique la llave privada. Si el número de la llave privada del usuario fuera 3, se llevaría a cabo la operación que acaba de demostrarse. Si sumamos el valor punto base a ese mismo valor tantas veces como indique la llave privada (* P) se obtiene la llave pública.

![ECC](/assets/post_files/technology/advanced/2.3-public-key-cryptography/ES_ecc_6.jpg)

En resumen, la llave privada es un número largo y aleatorio. La llave pública es un punto en la curva elíptica que se obtiene al multiplicar el punto base P por el número de la llave privada.

Una propiedad esencial de cualquier esquema de criptografía de llave pública es que resulta inviable computacionalmente derivar la llave privada de la pública. Resulta fácil calcular la llave pública, un punto en la curva, multiplicando el punto base P por un número aleatorio (la llave privada), pero si alguien conoce el punto base P y la llave pública del usuario, no puede dividirlas y determinar cuántas veces se multiplicó P para obtener la llave pública.

A estas alturas, la llave pública se ha vuelto bastante extensa; 512 bits, pero resulta fácil comprimirla a la mitad de su tamaño. La curva elíptica utilizada siempre es simétrica con respecto al eje “x”. Solo hay dos valores posibles de “y” para cada valor de “x”, los cuales difieren solo en su signo (positivo o negativo). Si se descarta la coordenada “y” y se agrega la información indicando que el punto posee un valor positivo o negativo para “y”, la llave pública se reduce a la mitad en tamaño pero conserva la misma información.

### Dirección

Por último, para que el usuario obtenga su dirección, la llave pública debe pasar por un hash. Primero, se ejecuta la función hash SHA-256 y luego la RIPEMD-160. Tras agregar un solo byte que determina si la dirección se dirigirá al mainnet o testnet y realizar una suma de control, queda todavía un paso antes de obtenerse la dirección.

A nivel de hardware, el funcionamiento de una computadora consta de solo ceros y unos. Los datos se almacenan siempre de esta manera sin importar el tipo de archivo en cuestión (imágenes, archivos de sonido y hasta direcciones Bitcoin). Hay diferentes maneras de convertir un hilo de bits en información digerible para una persona, es decir, frases numéricas o alfanuméricas.

Base58Check es una manera de convertir bits a caracteres alfanuméricos, pero excluye los símbolos 0, O, 1 e I. Base58Check retira estos caracteres de la dirección para reducir errores al copiar y revisar direcciones de manera manual.

Es posible generar una cantidad indefinida de direcciones a partir de una sola llave privada, y muchas billeteras hacen precisamente eso de manera automática; hecho que mejora la privacidad y hace más complicado que un tercero agrupe las transacciones del usuario. Hablaremos más de este concepto y de cómo se relaciona con las llamadas direcciones de cambio en nuestro capítulo sobre privacidad en la cadena de bloques.

![ECC](/assets/post_files/technology/advanced/2.3-public-key-cryptography/ES_ecc_7_D.jpg)
![ECC](/assets/post_files/technology/advanced/2.3-public-key-cryptography/ES_ecc_7_M.jpg)

### Firma digital

Retomemos el concepto de firma digital para concluir el artículo. Hay quienes piensan que las llaves (públicas y privadas) son capaces de encriptar y desencriptar mensajes; este no es el caso. La información contenida dentro de una transacción no se encuentra cifrada de ninguna manera y se encuentra disponible a todos los miembros de la cadena, lo cual hace de una blockchain un sistema sumamente transparente.

La llave privada se utiliza más bien para firmar transacciones. El usuario puede solamente utilizar los fondos que recibe en una transacción si es capaz de proporcionar la firma digital que comprueba que conoce la llave privada. Abordaremos cómo funciona esta firma y cómo puede realizarse dicha comprobación sin revelar información en el nivel experto. Para lograrlo, combinaremos el concepto de funciones hash y de la multiplicación de punto en la curva (lo cual, aunque no es precisamente física cuántica, sí es una cuestión bastante compleja).

### Resumen

Al crear una billetera el software generará primero un número aleatorio extenso que servirá de llave privada al usuario. El punto base P en la curva elíptica se multiplica por el valor de la llave privada para obtener la llave pública del usuario; un punto en la curva. La llave pública se pasa por una función hash y se retiran los caracteres 1, I, 0 y O para reducir errores de lectura. Es necesario también que el usuario proporcione su firma digital para poder gastar sus fondos.

Continúe al siguiente artículo para aprender sobre las redes par a par, la infraestructura que emplean la mayoría de las cadenas de bloques públicas.
