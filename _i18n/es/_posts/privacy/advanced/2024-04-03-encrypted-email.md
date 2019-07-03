---
layout: post
type: article
title: "Correo electrónico encriptado"
description: "El envío de correos electrónicos encriptados reduce el riesgo de que alguien entre a su correo y es más fácil de configurar de lo que la mayoría cree."
permalink: /privacy/advanced/encrypted-email/
topic: privacy
level: advanced
chapter: "Herramientas para proteger la privacidad"
further_reads: [email_glossary, how_to_use_pgp_encryption_with_gmail, 6_best_encrypted_email_software_to_protect_your_data]
---

A un hacker sofistacado le resulta increíblemente fácil interceptar correos electrónicos, y la manera más fácil de hacerlo es obteniendo acceso a la cuenta de correo electrónico de un usuario. Si se implementan las mejores prácticas que introdujimos en el capítulo anterior, en especial la elección de una contraseña segura y la activación de A2F, esto se vuelve mucho más difícil, pero aun así existen maneras de interceptar el flujo del correo. Utilizar redes Wi-Fi no aseguradas es también otra manera en la que un adversario puede obtener acceso a la correspondencia en línea del usuario.

La encriptación del correo electrónico del usuario no solo resuelve este problema, sino que también es mucho más fácil de hacer de lo que piensa la mayoría

### Cómo empezar

Hay fundamentalmente dos opciones a elegir si el usuario quiere empezar a enviar correos electrónicos encriptados. La primera opción es quizás la más conveniente, y es la de utilizar extensiones para las cuentas y clientes de correo que el usuario ya tiene. Hay extensiones para proveedores de correo como Gmail, pero aplicaciones como [Apple Mail](https://support.apple.com/guide/mail/sign-or-encrypt-emails-mlhlp1180/mac) y [Microsoft Outlook](https://support.office.com/en-us/article/encrypt-email-messages-373339cb-bf1a-4509-b296-802a39d801dc) tienen disponible la opción de encriptación de correo de manera nativa.

La segunda opción es menos conveniente, y es la de cambiarse a un cliente de correo electrónico seguro. Algunas opciones son ProtonMail, CipherPost, Hushmail y Disroot, los cuales hacen disponible la encriptación de manera nativa desde sus interfaces regulares. La mayoría de estos proveedores se concentran en la privacidad del usuario y se sirven de un estándar de código abierto conocido como OpenPGP.

Es importante recalcar que el envío de correos encriptados solo puede darse entre usuarios que tienen habilitada la opción de encriptación, ya sea por medio de una extensión o reconfigurando sus administradores de correo. En consecuencia, es necesario que el usuario comparta sus llaves públicas antes de poder enviarle un correo encriptado a alguien más.

Ya hemos cubierto el principio detrás de la criptografía de llave pública en nuestra sección de tecnología. En el caso de las criptomonedas, el usuario utiliza su llave pública para recibir dinero y la llave privada para gastarlo. El par de llaves se utiliza de manera análoga en el caso del correo encriptado. El remitente utiliza la llave pública del usuario para encriptar el texto, mientras que el receptor (el usuario) utiliza la privada para desencriptarlo más adelante. Sin la llave pública del usuario, sería posible mandarle mensajes encriptados, pero como receptor este no tendría manera de desencriptarlos.

### Cuál elegir

La cuestión de qué proveedor elegir solo la puede resolver el usuario. La primera pregunta que debe responderse es la de qué tan sensible es la información que se busca encriptar. Si el usuario quiere comunicarse de manera privada pero no habría consecuencias gravísimas si su comunicación llegara a hacerse pública, lo más adecuado es la elección de una extensión para un correo existente.

En caso de que el usuario maneja datos o información sensibles regularmente, debería de considerar cambiarse a un proveedor seguro o, por lo menos, crear una segunda cuenta de correo para enviar el contenido sensible. Ya que la meta aquí es que el usuario proteja su información personal, es importante prestar atención a los datos que se le proporcionan al proveedor a la hora de contratar el servicio. Por último, es esencial implementar una [contraseña robusta]({{ site.baseurl }}{% post_url /privacy/advanced/2024-03-02-strong-passwords %}) y habilitar la [A2F]({{ site.baseurl }}{% post_url /privacy/advanced/2024-03-03-2fa-two-factor-authentication %}).

Todos los proveedores que aparecen a continuación cuentan con servicios gratuitos y aceptan criptomonedas como método de pago para la creación de cuentas prémium. Recuerde que pagar con criptomonedas o tarjetas prepagadas evita que tenga que compartir sus datos bancarios o información de tarjeta de crédito con el proveedor.

 - ProtonMail
 - Disroot.org
 - Mailfence

No revisaremos aquí el procedimiento de cómo crear cuentas de correo nuevas, pues casi todos los proveedores cuentan ya con guías detalladas de cómo hacerlo y cómo implementar la encriptación al correo.

Debajo aparecen algunos recursos que lo ayudarán a elegir el proveedor que más le convenga.