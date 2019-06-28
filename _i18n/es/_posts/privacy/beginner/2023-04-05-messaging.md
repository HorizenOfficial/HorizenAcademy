---
layout: post
type: article
title: "Mensajería"
description: "La mensajería instantánea es uno de los medios de comunicación eminentes de la actualidad, razón suficiente para que el usuario elija una aplicación de mensajería que respete su privacidad."
permalink: /privacy/beginner/messaging/
topic: privacy
level: beginner
chapter: "Herramientas para proteger la privacidad"
further_reads: [secure_messaging_apps_comparison, secure_messaging_scorecard_a_thorough_review_of_top_trending_apps]
---

Todos chateamos, y chateamos mucho; mensajes de texto, iMessage, Skype, Messenger, WhatsApp, Telegram, algunos hasta recordamos todavía las épocas de ICQ y mIRC.

Comunicarse por mensajes de texto (textear; mensajearse) es un medio de comunicación muy cómodo de utilizar porque no exige respuestas inmediatas y puede utilizarse en ambientes ruidosos o poco privados. Los mensajes de voz integrados son otra función útil, en especial cuando el usuario tiene prisa y desea ahorrarse unos cuantos segundos. Utilizamos estos sistemas de mensajería seguido, pero esto detona varias preguntas sobre la seguridad del usuario: ¿Cómo se almacena, trata y transmite la información?, ¿se encuentra protegido el usuario al compartir datos privados por medio de estas aplicaciones? Resulta que algunos de estos sistemas de mensajería logran buenos niveles de privacidad, pero otros no tanto.

En el caso de servicios de mensajería, la privacidad se logra sacrificando comodidad. Entre más enfocada en privacidad está la aplicación, mayor el número de limitantes que el usuario podrá toparse.

La característica más importante para los servicios de mensajería de la actualidad es su capacidad de implementar la encriptación de punto a punto, lo cual significa que los datos se encriptan durante la transmisión y no se envían como texto normal.

Es importante prestarle atención a características como la jurisdicción e infraestructura de la empresa, las implicaciones de entregarles los datos del usuario a agencias de inteligencia, las funciones de vigilancia inherentes a la aplicación, la recolección de los datos del cliente, primitivas criptográficas, si la app y su infraestructura están construidas con código abierto y si el usuario es capaz o no de registrarse y utilizar la aplicación de manera anónima. 

Revisemos ahora algunas de las aplicaciones de mensajería que más protegen la privacidad de sus usuarios:

### ZenChat

El ZenChat propio de Horizen es una de las aplicaciones de mensajería más seguras actualmente disponibles en el mercado. Utilizando la plataforma de cadena de bloques de Horizen, ZenChat aprovecha las capacidades de algoritmos de encriptación como zk-SNARKS y otros.

La aplicación puede utilizarse por sí sola o embebida en cualquiera de nuestras billeteras, aunque su mejor implementación está disponible a través de nuestra app insignia, Sphere by Horizen. Los usuarios tienen la habilidad de comunicarse uno a uno a través de mensajería grupal, pero también de crear canales privados. Las comunicaciones canalizadas cuestan una cantidad mínima de ZEN para evitar spam y desorden en la app. ZenChat almacena sus mensajes de manera permanente en la blockchain para evitar la fuga de metadatos, y estos se encriptan con algoritmos como AES-25 con perfect forward secrecy (PFS) para cumplir con nuestros estándares de encriptación para la comunicación segura.

Al encontrarse en la cadena de bloques, tiene también algunas limitaciones: ya que los bloques y transacciones necesitan ser pequeños, la extensión real de los mensajes se ve limitada también y es necesario comprobar que cada mensaje es una transacción privada, además de esperar la confirmación de la cadena de bloques. Debido a esta restricción, no pueden adjuntarse archivos a los mensajes, aunque que sí pueden incluirse enlaces. Tenemos preparadas una serie de mejoras para Sphere by Horizen que permitirán al usuario  utilizar distintas cuentas en ZenChat, permitiendo el envío de mensajes múltiples. Por otra parte, una actualización próxima de Sapling reducirá drásticamente el tiempo de espera de autenticación de cada mensaje.

La infraestructura está completamente descentralizada y construida con código abierto, sigue el principio de no confianza y asegura que únicamente el usuario puede leer su información. Además, ZenChat puede utilizarse de manera completamente anónima, pues nunca se le pedirán al usuario datos privados o identificables.

Puede leer más a detalle sobre ZenChat en nuestras secciones sobre Horizen en los niveles [principiante]({{ site.baseurl }}{% post_url /horizen/beginner/2026-01-04-zenchat %}), [avanzado]({{ site.baseurl }}{% post_url /horizen/advanced/2027-01-04-zenchat %}) y [experto]({{ site.baseurl }}{% post_url /horizen/expert/2028-01-04-zenchat %}).

![ZenChat](/assets/post_files/privacy/beginner/messaging/chat.jpg)

### Ricochet

Aunque su creador lo considera un experimento, Ricochet utiliza la red de Tor para conectarse con los contactos del usuario sin depender de servicios de mensajería. Ricochet crea un servicio oculto para para permitir interacciones sin revelar ubicación o direcciones IP. En vez de un nombre, el usuario recibe una dirección del tipo “ricochet:rs7ce36ksk24ogfw”. Otros usuarios de Ricochet pueden utilizar esta dirección para enviar una solicitud de contacto y pedirle a ese usuario formar parte de su lista de contactos. Los usuarios pueden ver quién se encuentra en línea y mandarles mensajes y, próximamente, archivos. La lista de contactos la conoce solo la computadora del usuario, y nunca se revela a ningún servidor o rastreador de tráfico. Toda la información se encripta de punto a punto y se anonimiza, por lo que solo el receptor del mensaje puede leerlo, y nadie sabe adónde va ni de dónde viene.

En cuanto a una selección más convencional de aplicaciones de mensajería, las más destacables son aquellas con servicios para conservar la privacidad como Signal, Threema y Wire. Securemessagingapps.com incluye una buena comparativa de estas aplicaciones con otras de uso común como Telegram, Skype, Whatsapp, Messenger, etc. Le recomendamos visitar el sitio y comparar usted mismo las características de estos distintos servicios.

![Ricochet](/assets/post_files/privacy/beginner/messaging/ricochet.png)

### Keybase

El trabajo en equipo y la colaboración en línea es otro concepto que se ha visto popularizado recientemente, con servicios como Slack y Microsoft Teams encabezando el fenómeno. Si lo que usted está buscando es una aplicación para trabajar en equipo que conserve su privacidad, esta es la alternativa indicada. Keybase es un app gratuita para teléfonos celulares y computadoras, es de código abierto y depende de criptografía de llave abierta. Keybase puede compararse a aplicaciones como Slack, Teams o Dropbox, pero con encriptación de punto a punto en todos los dispositivos.

Con una selección tan amplia de servicios, le deseamos una experiencia de mensajería feliz y segura.

<img src="/assets/post_files/privacy/beginner/messaging/keybase.png" alt="Keybase" style="width: 200px;">