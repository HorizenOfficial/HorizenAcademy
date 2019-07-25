---
layout: post
type: article
title: "Ejecución garantizada con contratos inteligentes"
description: "Las criptomonedas a veces se denominan dinero programable. Los contratos inteligentes permiten esta programabilidad."
permalink: /technology/advanced/guaranteed-execution-with-smart-contracts/
topic: technology
level: advanced
chapter: "¿Qué es una cadena de bloques?"
further_reads: [the_oracle_problem, the_truth_about_smart_contracts]
---

Nos hemos acercado a la tecnología blockchain desde dos perspectivas. Primero como una estructura de datos y segundo como un protocolo para transferir valor. En el último artículo de este capítulo sobre las cadenas de bloques hablaremos de contratos inteligentes. Junto con la inteligencia artificial, el internet de las cosas y la blockchain, los contratos inteligentes han sido uno de los temas más debatidos del mundo tecnológico. En resumen, son un tipo de software en la cadena de bloques. 

Una cadena de bloques es capaz de contener no solo información simple como transacciones, sino también pequeños programas llamados contratos inteligentes (smart contracts), los cuales son en esencia un software más alojado en la cadena. En general, un contrato es un acuerdo entre dos partes que las une en un acuerdo. En este caso, inteligente se refiere a la ejecución automática de estos contratos digitales, pues consisten de una serie de órdenes “if, then” (si, entonces) escritas y hechas valer por el código. El contrato se ejecuta de manera automática en cuanto sus condiciones se cumplen. 

![Smart Contract](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_smart_contract_D.jpg)
![Smart Contract](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_smart_contract_M.jpg)

### La promesa de los contratos inteligentes

Estos contratos prometen eliminar la necesidad de intermediarios, como abogados o notarios, para así reducir no solo el costo de muchas transacciones sino también el tiempo necesario para realizarlas.

En teoría, un contrato inteligente podría determinar la transferencia de activos digitales como criptomonedas, pero podría también aplicar a cualquier objeto de valor, como acciones, bonos o bienes físicos (como bienes raíces, por ejemplo).

En un caso hipotético, el propietario y arrendatario de un inmueble podrían utilizar un contrato inteligente para regir su acuerdo de arrendamiento. Por ejemplo, el contrato podría cerrar los candados de la casa automáticamente si la renta no se pagara a tiempo. En este caso, la declaración “if, then”, luciría algo así:

*Si la dirección del contrato recibe X cantidad antes del tercer día de cada mes de la cuenta con la dirección Y, entonces darle a Y acceso al departamento. Si esta cantidad no se recibe durante dos meses consecutivos, entonces negarle a Y acceso al departamento.*

Otro posible uso de los contratos inteligentes sería el de una especie de eBay descentralizada. El vendedor podría elaborar un contrato con una fecha de expiración que definiera la duración de la subasta y el monto inicial. El interesado recibiría su compra al final de la subasta a cambio del dinero ofrecido. Por su parte, los demás postores recibirán de manera automática una devolución de parte del contrato inteligente. Dicha versión descentralizada de eBay se consideraría un app descentralizada, o dApp.

### dApps

Una aplicación descentralizada (dApp) es un argumento más sofisticado a favor de los contratos inteligentes. La mayoría las apps y sitios webs utilizan API (application programming interfaces) para comunicarse con su base de datos subyacente. Un API bien escrito le hace más fácil a un desarrollador ofrecer un servicio al definir la comunicación entre los componentes de un sistema, como el sistema operativo, base de datos o biblioteca de software.

Las dApps hacen uso de contratos inteligentes para comunicarse con su cadena de bloques. En un futuro, podrían surgir receptáculos de plantillas de contratos inteligentes para diversos fines. Este futuro ya está empezando a materializarse gracias a plataformas de contratos inteligentes como Ethereum.

![dApp](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_dapp_D.jpg)
![dApp](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_dapp_M.jpg)

### Plataformas de contratos inteligentes

Hay muchas plataformas para contratos inteligentes además de Ethereum, sin duda la más popular y utilizada hoy en día. Algunas otras incluyen Lisk, NEM y Hyperledger, una versión modificada de Ethereum diseñada para uso empresarial.

Se encuentran también los pocos que saben que Bitcoin permite también la creación de contratos inteligentes. El lenguaje de programación nativo de Bitcoin, Script, es un lenguaje de programación rudimentario comparable a Solidity, el lenguaje empleado para redactar contratos inteligentes en Ethereum. Solidity es un lenguaje de programación Turing completo, el cual hace posibles contratos más complejos que Script. Obviamente, esta complejidad significa también que son más difíciles de escribir, analizar y asegurar.

En el caso de los contratos inteligentes, la seguridad implica considerar todas las maneras en las que el contrato podría ejecutarse, así como asegurarse de cubrir todas las posibles consecuencias. Los contratos seguros de Bitcoin escritos en Script permiten menor complejidad a comparación de los escritos en Solidity para Ethereum; esto limita los casos en los que pueden utilizarse, pero hace más fácil enumerar, examinar y rendir cuentas, resultando en contratos más fáciles de asegurar.

Vale la pena mencionar que las plantillas de contratos inteligentes más usados en Ethereum, en especial los estándares ERC20 y ERC721 no requieren ser sistemas Turing completos. Casi todos los tokens creados en la cadena de bloques de Ethereum emplean uno de estos dos estándares, pues son más fáciles de integrar con distintas billeteras y centros cambiarios.

### ¿En serio es un sistema libre de intermediarios?

La promesa de los contratos inteligentes es ejecutarse sin ningún tipo de intermediario (trustless) por medio de un reglamento aplicado automáticamente. Queda por verse si realmente pueden cumplir con este promesa.

Casi cualquier tipo de activo queda sujeto a la jurisdicción local del usuario. Esto quiere decir que cualquier contrato, inteligente o no, requiere que el usuario confíe en esta jurisdicción además de en el contrato en sí. La posesión de un contrato inteligente no significa posesión en el mundo real. Al igual que con un contrato regular, las condiciones quedan sujetas a la interpretación y a circunstancias cambiantes. Un contrato ilegal, por ejemplo, no tiene validez alguna. 

El usuario debe considerar que la aptitud para escribir contratos tradicionales surge de años de estudiar el marco legal que regula los ámbitos cubiertos por el contrato. Redactar un contrato inteligente resulta aún más complicado, pues debe considerarse el aspecto técnico del que dependen. Será necesaria una nueva generación de abogados letrados en el mundo digital para que se les pueda dar un uso más extendido a contratos inteligentes con validez legal.

Hay incluso un obstáculo más por afrontar. El ámbito digital del contrato debe mantenerse al tanto de eventos reales para que los contratos inteligentes puedan funcionar y ejecutarse. Se le llama oráculo a una entidad que introduce este tipo de datos a una cadena de bloques o contacto inteligente. Al problema que surge de la necesidad de depositar confianza en esta entidad se le denomina problema del oráculo. 

Si hay un contrato inteligente ejecutando una plataforma de apuestas en un ambiente sin intermediarios, es deber del oráculo introducir el resultado del partido para que el contrato pueda distribuirles los fondos a los ganadores. Ya que el oráculo determina lo que el contrato ve, también controla lo que hace.

![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_oracle_D.jpg)
![Oracle](/assets/post_files/technology/advanced/guaranteed-execution-with-smart-contracts/ES_oracle_M.jpg)

Los oráculos centralizados no se consideran una solución al problema del oráculo. Sin importar la implementación práctica, los incentivos para introducir al sistema datos falsos pueden superar los beneficios de actuar con honradez en algunas ocasiones. Sea o no centralizado, un oráculo siempre tiene un costo. Proceder de manera honesta debe siempre ser la estrategia más provechosa, por lo que debe haber incentivos fuertes. Este es otro de los problemas que requiere de la evaluación de la teoría de juegos y de un diseño que incluya incentivos similares a los que reciben los mineros de una cadena.

Algunos proyectos como Augur y Gnosis están buscando encontrar soluciones descentralizadas al problema del oráculo a través de mercado predictivo. Antes de que dichos mercados se adopten de manera general, sin embargo, permanecerán fáciles de engañar. Además, ya que los mercados predictivos tienen el potencial de influenciar el resultado de un evento, es incierto aún si pueden convertirse en una solución; en palabras del desarrollador Dan Finlay:


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Maybe/Theory: Since decentralized prediction markets can influence the incentives around an event’s probability, they are never just prediction tools, and should always be treated as incentivization tools.</p>&mdash; Dan Finlay (@danfinlay) <a href="https://twitter.com/danfinlay/status/1089550845698396167?ref_src=twsrc%5Etfw">January 27, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


*Teoría: Ya que los mercados predictivos descentralizados pueden influenciar los incentivos de la probabilidad de un evento, nunca son solo herramientas de predicción, por lo que deben tratarse siempre como herramientas de incentivación*

Antes de verse resueltos los problemas de crear contratos inteligentes con validez legal y el llamado problema del oráculo, el uso de este tipo de documentos se verá limitado a ámbitos experimentales donde las posibles pérdidas sean bajas. Un posible uso sería el de recompensas entregadas dentro de un videojuego, donde el pago se haría al usuario al ser activado por un logro objetivamente verificable en el código del juego.

En palabras de Jimmy Song, “Un contrato inteligente que confía en un tercero deshace la indispensable característica de no intermediarios”. Falta mucho aún antes de que el consejo de una empresa tenga la confianza de usar un contrato inteligente en diferentes ámbitos, pero son sin duda un concepto que vale la pena explorar.

### Resumen

Habiendo completado esta lección, ya debe tener una buena idea de la naturaleza de una cadena de bloques, pues la hemos analizado como estructura de datos y como un conjunto de reglas. La cadena puede almacenar información confiablemente dada la naturaleza distribuida del libro contable. Todos pueden participar en la red sin permiso o registro alguno mientras se apeguen a las reglas del protocolo. Así, se logra que las cadenas de bloques sean resistentes a la censura, sin permisos, libres de intermediarios y, sobre todo, muy valiosas. Una blockchain puede no solo almacenar pedazos de información sino también programas ejecutados de manera distribuida.

Los contactos inteligentes pueden asegurar la ejecución objetiva de un contrato a partir de términos previamente acordados y hechos valer por el código mismo. Poseen el potencial de eliminar intermediarios y así disminuir costos y pérdidas de tiempo. Asimismo, es probable que incentiven una relación más estrecha entre desarrolladores de software y el sistema judicial. Habrá que superar varios obstáculos para que la tecnología se adopte de manera general, si embargo. Los reguladores tendrán que crear un marco que permita la implementación de contratos inteligentes con validez y tendrán que desarrollarse oráculos descentralizados.

Este fue el último artículo en nuestro capítulo sobre la cadena de bloques y sus capacidades. En el siguiente capítulo, veremos a fondo cómo es que funcionan.
