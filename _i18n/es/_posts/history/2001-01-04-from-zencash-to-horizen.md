---
layout: post
type: article
title: "De ZenCash a Horizen"
description: "Para la última parte de este capítulo, compartimos con usted cómo comenzó ZenCash y cómo evolucionó a Horizen."
permalink: /history/from-zencash-to-horizen/
topic: history
chapter: "De Cypherpunks a Horizen"
css: |
  .rocket-image {
    position: relative;
  }
  .rocket-image img {
    position: absolute;
    z-index: -1;
    right: -80px;
    bottom: -90px;
    height: 300px;
  }
  @media (max-width: 991px) {
    .rocket-image img {
      height: 280px;
    }
  }
  .post-section .post-content p {
    margin-bottom: 1.5rem;
  }
  .learn-more {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    padding: 1rem 12px 1rem 100px;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .learn-more img {
    position: absolute;
    left: 10px;
    bottom: 5px;
    width: 80px;
  }
---

### El nacimiento de ZenCash

<div class="rocket-image d-none d-md-block">
    <img src="/assets/post_files/history/from-zencash-to-horizen/rocket.svg" alt="ZenCash to Horizen" style="">
</div>

Todo empezó casi por accidente. Rob Viglione, cofundador de Horizen, se encontraba terminando su doctorado en la Universidad de Carolina del Sur, impartiendo un curso sobre blockchain y trabajando en ZClassic como pasatiempo. ZClassic tenia un equipo informal, pero Rob se apasionó por el proyecto, por lo que fue incrementando su compromiso y actividad en la comunidad hasta asumir el papel de líder del proyecto cuando este se desarrolló. Rob conoció a Rolf Versluis mientras trabajaban en ZClassic. A ambos les importaba profundamente el proyecto, pero tenían visiones diferentes  del futuro de la privacidad, gobernanza y economía. Se dieron cuenta de que compartían visiones similares al trabajar juntos en un proyecto, así que decidieron conocerse un día. Rob invitó a Rolf, que vivía en Georgia, a darles una clase a sus alumnos de universidad y discutir los términos de su colaboración.

ZClassic fue un proyecto comunitario. Mientras que Rob y Rolf tenían buenas ideas, no contaban con la autoridad para expandir el alcance fundamental del proyecto. Así que ambos decidieron separarse de ZClassic, creando un proyecto propio que los liberara de estas limitaciones. Rob y Rolf habían elegido trabajar en ZClassic por su creencia en el derecho universal a la privacidad. El amor de Rob por la criptografía de cero conocimiento y la pasión combinada de ambos por la privacidad terminó rindiendo frutos y dejando su huella en cuanto a la verdadera privacidad en el mundo de las criptomonedas.

Al separarse de ZClassic, Ron y Rolf fundan ZenCash. Finalmente libres de fijar sus propias metas, empezaron implementando sus ideas para la gobernanza, economía, tesorería y privacidad a nivel red. El 19 de mayo de 2017, en la altura de bloque 110000 de la cadena de bloques de ZClassic, tomaron una copia instantánea de volumen (snapshot) necesaria para entrar en la fase final de su lanzamiento. La cadena de bloques de ZenCash nació el 30 de mayo de 2017, a las 23:46:46 UTC.

> Nota: Tomando en cuenta detalles técnicos, fue el bloque #110000 fue de donde Rob y Rolf se bifurcaron. ZenCash comenzó su nueva blockchain con un modelo de tesorería a partir del bloque #110001. Nótese la emisión de 1.0625 en la transacción Coinbase, la cual forma parte de la nueva emisión que se fue hacía la tesorería.

![History Horizen logos](/assets/post_files/history/from-zencash-to-horizen/ZenCash.png)

### De pasatiempo a trabajo de tiempo completo

Rob tenía pensado participar en ZenCash como trabajo de medio tiempo, pero no se imaginaba lo que estaba por suceder. Una semana después del lanzamiento oficial de ZenCash, un exlíder de desarrollo del proyecto anunció un ataque zero-day contra la cadena. Dicho desarrollador compartió públicamente un método para atacar la cadena de bloques. El ataque podría causar un gasto doble en la blockchain de ZClassic y la cadena de bloques de ZEN. La reacción por parte del equipo de ZenCash fue rápida. Cronic, el Administrador de Arquitectura de Horizen, fue un actor clave en el éxito de la prevención del ataque. El soporte de Bittrex y Team Veritas también fue de mucha ayuda durante este periodo. Rob y Rolf se dedicaron a proporcionar dos actualizaciones diarias a la comunidad durante el ataque de doble gasto y hasta el momento en el que el problema se resolvió. Tras un tiempo, todos los usuarios que habían perdido fondos durante el ataque fueron reembolsados con fondos de la comunidad. Con todo lo sucedido, Rob se dio cuenta de que trabajar medio tiempo en el proyecto no sería suficiente. Se tomó un año sabático de su doctorado (y a la fecha tiene pendiente presentar su disertación para terminarlo) y se dedicó al proyecto por completo. Se implementó una medida preventiva el 12 de junio del 2017 a la altura de bloque 117000, trazando así el camino hacia el futuro éxito del proyecto.

Durante estas fechas, Rosario y otros utilizaron sus puestos de liderazgo para ayudar a la comunidad, y fue así que se empezaron a formar las primeras asociaciones. ZenCash interactuó con Tatiana Moroz y Crypto Media Hub en cuestiones de marketing.

### La cena de Lisboa

El equipo inicial de Horizen no fue seleccionado, sino que surgió de los voluntarios que demostraron compromiso y pasión por el proyecto.

Los desarrolladores de la comunidad fueron muy importantes durante 2017. Cada uno aportó herramientas importantes, Insight API de anarch3, NodeJS Zenchat y la billetera Zen para Android de Kendricktan, la billetera Arizen de Lukas y la Billetera Swing de Vaklinov. Esta comunidad también fue capaz de identificar y resolver problemas con el software del grupo de minería con la ayuda de Hellcatz.

Sin embargo, enero de 2018 fue un mes aún más importante para ZenCash (ahora Horizen). El equipo principal se formalizó por primera vez durante la conferencia de IOHK en Lisboa, Portugal. Rob, Rosario, Rowan (Director de Desarrollo de Negocios), Gustavo (Director de Experiencia del Usuario) y Alberto (Director de Investigación y Desarrollo) se reunieron en un Airbnb que acondicionaron como oficina temporal. Ahí, discutieron y evaluaron el desempeño de los voluntarios que recibían salario. Seleccionaron a los voluntarios más activos y esforzados y les ofrecieron puestos dentro del equipo. Ese mes se le dio la bienvenida oficial a varios miembros de la Zen Blockchain Foundation.

### Un modelo de fondeo sustentable

Los voluntarios contribuyen a un proyecto si les parece interesante, pero eso no siempre significa que las personas atraídas son profesionales. Rob y Rolf se percataron de esto durante su trabajo en ZClassic. No contaban con los fondos para ofrecer salarios porque ZenCash no tuvo un preminado o una oferta inicial de monedas (ICO). Así, los cofundadores de ZenCash decidieron agregar un modelo económico al protocolo del proyecto. El modelo desviaba parte de las monedas que se generaban al fondo de tesorería, permitiendo a ZenCash pagar salarios, atraer talento y financiarse.

### Incentivos para los nodos y otras partes interesadas

Conforme el modelo económico se fue implementado dentro del protocolo, el equipo fue pudiendo ofrecer incentivos. Se determinó que parte de las monedas recién generadas se destinaría a los operadores de nodos seguros encargados de operar un nodo completo en la cadena de bloques. Estos operadores utilizaban hardware poderoso, una dirección IP dedicada y un certificado TLS para encriptar las comunicaciones. El incentivo para hacer esto fue primero un 3.5% de la recompensa de bloque, pero incrementó luego a 10% cuando se introdujeron los supernodos. La decisión de incentivar a los operadores de nodos llevó a Horizen a tener la red de nodos más grande de la industria. Hoy en día, el proyecto cuenta con más de 23,000 nodos seguros y más de 3,000 supernodos en todo el mundo. 

Vamos por buen camino como proyecto, pero aún no estamos satisfechos. Nos hemos dedicado continuamente a identificar más partes interesadas que merezcan incentivos. Por ejemplo, los contribuyentes al sistema de la ZenDAO recibirán un incentivo por participar en el proceso de votación.

<blockquote>
    <table class="table table-borderless">
    <tbody>
        <tr>
            <td style="width: 80px;" class="p-0"><img src="/assets/post_files/history/from-zencash-to-horizen/superNodes.svg" alt="Super Nodes"></td>
            <td class="pt-0 pb-0 pr-0 pl-3">
                Los Súper Nodos alojarán las cadenas laterales de Horizen que serán implementadas en un futuro cercano, convirtiéndolas en las primeras cadenas laterales verdaderamente descentralizadas en la industria.
            </td>
        </tr>
        </tbody>
    </table>
</blockquote>

### Asosiación con IOHK, Code Particle, InfoPulse

La asociación con IOHK surgió de una amistad personal con Charles Hoskinson (Consejero Estratégico de Horizen) y una creencia compartida en la libertad y privacidad personales. Charles leyó el libro blanco de ZenCash, contactó a Rob y se reunieron en Nueva York para discutir el proyecto de Horizen e IOHK. Planearon también una colaboración entre ambos proyectos, la cual resultó en buenas contribuciones e investigación y desarrollo complementarios entre Horizen e IOHK.

Desde entonces, Horizen e IOHK han creado muchos proyectos juntos. La colaboración resultó en nuestra investigación sobre escalabilidad (BlockDAG), Dandelion++ (un protocolo de anonimato de red) y las cadenas laterales de Horizen.

Uno de los proyectos más grandes en los que Horizen se encuentra colaborando con IOHK es el sistema de votación de tesorería, pero en este caso fue IOHK quien trajo el proyecto a Horizen. Juntos, construimos sobre el proyecto y lo mejoramos, agregando criptografía de cero conocimiento para lograr un sistema privado de votación y más.

Hemos conocido a muchos de nuestros asociados gracias a Charles. Fue él quien nos introdujo a InfoPulse, el equipo que nos ayudó con la programación de la integración de Ledger, Trezor y OpenBazaar, y que ahora se encuentran desarrollando el SDK (Software Development Kit) de las cadenas laterales de Horizen.

Code Particle, otro de nuestros asociados importantes, colabora en el desarrollo de nuestra aplicación insignia, Sphere by Horizen y de Horizen zend, nuestro software de protocolo base. Pier Stabilini (uno de los ingenieros líderes en Code Particle) trabaja de manera cercana con nosotros y ha contribuido considerablemente al éxito del proyecto.

<div class="row mb-4 align-items-center">
    <div class="col-md-4 mt-4">
        <img src="/assets/post_files/history/from-zencash-to-horizen/IO.png" alt="Input Output">
    </div>
    <div class="col-md-4 mt-4">
        <img src="/assets/post_files/history/from-zencash-to-horizen/codeP.png" alt="Code Particle">
    </div>
    <div class="col-md-4 mt-4">
        <img src="/assets/post_files/history/from-zencash-to-horizen/infopulse.png" alt="Infopluse">
    </div>
</div>

### El ataque del 51% y su solución

A pesar de que el ataque del 51% fue de gran impacto para el equipo de Horizen y la comunidad, no fue un ataque que surgió de la nada. La industria cripto en general estaba al tanto de una entrada de blog que enlistó los costos para realizar ataques del 51% contra muchos proyectos. El equipo de Horizen comenzó un plan de contingencia rápidamente al enterarse de que el costo para ejecutar tal ataque era bajo. Instalamos un sistema de alerta capaz de detectar incrementos significativos de net hash y pedimos a nuestro equipo ingenieril monitorear continuamente la red.

La red ZEN fue blanco de un ataque del 51% el 3 de junio de 2018, aproximadamente a las 00:26 UTC, entre los bloques 318165 y 318275. Los atacantes causaron múltiples reorganizaciones en la cadena de bloques, revirtiendo 38 bloques en la reorganización más larga y creando satisfactoriamente tres dobles gastos de 3,317.4, 6,600, y 13,234.9 ZEN.

El equipo de Horizen se enteró inmediatamente gracias al sistema de alerta previamente establecido y se dio inicio a los procedimientos de mitigación que se habían diseñado para incrementar la dificultad de llevar a cabo un ataque contra la red. Ya que el equipo ingenieril había estado trabajando en soluciones posibles para un ataque del 51%, realizamos la prueba de concepto y la programación rápidamente y continuamos con las actualizaciones de la red.

Determinamos que la mejor solución era mejorar la regla de la cadena más larga (consenso de Satoshi) e introdujimos una penalización por la entrega tardía de bloques, lo cual hizo exponencialmente más difícil y costoso realizar un ataque del 51%. Puedes consultar nuestro libro blanco sobre la “Solución al ataque del 51%” [aquí.](https://www.horizen.global/assets/files/A-Penalty-System-for-Delayed-Block-Submission-by-Horizen.pdf)

<div class="learn-more">
    <img src="/assets/post_files/history/from-zencash-to-horizen/read.svg" alt="Read more">
    Si le interesa saber más al respecto, lea nuestra entrada de blog
    “<a href="https://blog.horizen.global/declaracion-zencash-transacciones-doble-gasto/" class="font-weight-bold" target="_blank">Declaración De Zencash En Transacciones De Doble Gasto</a>”
    y el libro blanco “<a href="https://www.horizen.global/assets/files/A-Penalty-System-for-Delayed-Block-Submission-by-ZenCash-Spanish.pdf" class="font-weight-bold" target="_blank">Prevención de Ataques del 51%: Una solución para modificar el consenso de Bitcoin.</a>”
</div>

### Expansión de marca: de ZenCash a Horizen

Conforme fue creciendo nuestro proyecto se volvió más y más común que se nos confundiera con ZCash, lo que nos llevó a pensar en que era tiempo de un cambio de marca. Nuestro proyecto se enfocaba en la oferta de productos como sistemas de votación de tesorería y cadenas laterales con la capacidad de soportar contratos inteligentes. Como éramos más que una divisa digital, sentíamos que la palabra cash de nuestro nombre ya no describía adecuadamente ya nuestro proyecto.

El motivo decisivo para realizar la expansión de marca fue la llegada de una carta de una institución bancaria internacional. En la carta, expresaban que el logo de ZenCash era similar al de uno de sus organizaciones y nos solicitaron cambiarlo. No tenía sentido pelear por una marca que ya no nos representaba. Entonces, creamos un equipo especial y nos asociamos con BranTuitive para dar inicio a la transformación. Los equipos se combinaron e invirtieron largas horas de trabajo en la expansión de marca. El resultado fue grandioso. El nombre Horizen se alineó perfectamente con la misión y metas del proyecto; al equipo y comunidad les encantó que fuéramos capaces de conservar “Zen” como parte del nombre y de que, como resultado, ZEN pudiera seguir siendo el símbolo de nuestra divisa.

<img src="/assets/post_files/history/from-zencash-to-horizen/HZ-logos.svg" alt="Horizen logos" style="width: 500px; margin-top: 2rem; margin-bottom: 5rem;">

<div class="learn-more">
    <img src="/assets/post_files/history/from-zencash-to-horizen/read.svg" alt="Read more">
    Para mayor información, puede leer las entradas de blog
    “<a href="https://blog.horizen.global/zencash-estara-revelando-proximamente-su-nuevo-cambio-de-marca/" class="font-weight-bold" target="_blank">Revelación de Nueva Marca</a>”
    y “<a href="https://blog.horizen.global/hola-horizen/" class="font-weight-bold" target="_blank">¡Hola Horizen!</a>”.
</div>


<table class="table table-borderless">
<tbody>
    <tr>
        <td style="width: 100px;" class="pl-0 pr-0"><img src="/assets/img/horizen-icon.svg" alt="Horizen"></td>
        <td class="pl-3 pl-lg-4">
            <h3 class="mt-0">Horizen a futuro</h3>
            <p>
                Y es así que llegamos al momento presente. Sería deshonesto negar que hemos tenido nuestros altibajos estos últimos dos años, pero no solamente hemos sobrevivido, sino que nos hemos hecho más fuertes día con día conforme continuamos creciendo.
            </p>
        </td>
    </tr>
    </tbody>
</table>

<div class="row">
    <div class="col-md-4 mt-3"><a class="btn btn-info btn-block pt-2 pb-2" href="https://blog.horizen.global/category/spanish/" target="_blank">NOTICIAS MÁS RECIENTES</a></div>
    <div class="col-md-4 mt-3"><a class="btn btn-info btn-block pt-2 pb-2" href="https://www.horizen.global/es/roadmap/" target="_blank">HORIZEN PLAN DE TRABAJO</a></div>
    <div class="col-md-4 mt-3"><a class="btn btn-info btn-block pt-2 pb-2" href="https://www.horizen.global/es/team/" target="_blank">EQUIPO DE HORIZEN</a></div>
</div>
