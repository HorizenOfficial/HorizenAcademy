---
layout: post
type: article
title: "A2F - Autenticación de dos factores"
description: "Otra mejor práctica que exhortamos al usuario a utilizar es la autenticación de dos factores, conocida también como AF2. Este artículo habla de ella y su importancia"
permalink: /privacy/advanced/2fa-two-factor-authentication/
topic: privacy
level: advanced
chapter: "Mejores prácticas"
further_reads: [how_to_set_up_2fa_using_google_authenticator, simplify_and_secure_your_online_logins_with_a_yubikey]
---

En breve, la autenticación de dos factores (A2F) es una manera de permitirle al usuario acceder a un servicio por medio de una combinación de dos métodos de autenticación. La segunda medida puede ser un código PIN o contraseña adicional, una contraseña de uso único (OTP), una huella dactilar u otros datos biométricos o inclusive un chip de seguridad o token instalado dentro del dispositivo del usuario.

Ya utilizamos la A2F en la vida diaria. Un ejemplo notable es el de los cajeros automáticos, los cuales piden al usuario un código PIN además de su tarjeta para retirar efectivo. Sin embargo, continúa siendo común que muchos servicios y plataformas utilicen autenticación de un solo factor, el cual comúnmente es una contraseña.

Por suerte, casi todos los servicios del mundo blockchain incluyen métodos de doble autenticación, pues se han convertido en un estándar del ámbito.

Habilitar la AF2 es una de las mejores prácticas de seguridad que el usuario puede implementar, pues lo protege incluso en caso de ataques a nivel plataforma en los que se revela un gran número de contraseñas. Estas protecciones, claro, dependen siempre de que la plataforma haya implementado la autenticación de manera adecuada.

La autenticación de dos factores funciona pidiéndole al usuario que compruebe su identidad por medio de un método de autenticación adicional a la contraseña. Es común que el método secundario de autenticación sea un mensaje de texto enviado al teléfono del usuario o un código generado en una aplicación dedicada como Microsoft Authenticator o Google Authenticator, entre otros.

![2FA](/assets/post_files/privacy/advanced/2fa/ES_2fa_D.jpg)
![2FA](/assets/post_files/privacy/advanced/2fa/ES_2fa_M.jpg)

### Los SMS como método de A2F

De ser posible, le sugerimos no utilizar mensajes SMS como método de autenticación de dos factores, pues hay muchas maneras en las que un tercero puede acceder a los mensajes y llamadas entrantes de un teléfono.

La primera y más sencilla es un método llamado ingeniería social. Ha habido incidentes en los que un atacante ha logrado convencer al empleado de una compañía telefónica de que “su” teléfono se extravió o que su tarjeta SIM se rompió, por lo que necesita un reemplazo inmediatamente. El atacante menciona también que acaba de mudarse, por lo que da una nueva dirección para recibir una segunda tarjeta. Aunque este tipo de ataque no suele funcionar a la primera, el atacante puede llamar repetidamente al número de servicio al cliente de la compañía hasta encontrar a un empleado dispuesto a cumplir con su solicitud.

Otro método empleado por atacantes es el de contratar a un nuevo proveedor de servicio y pedir que el número de teléfono se transfiera. La mayoría de los proveedores le ofrecen al usuario la opción de conservar su número al cambiarse de proveedor, lo cual deja abierta una ruta de ataque sencilla pero efectiva.

### Aplicaciones A2F

Es importante utilizar una aplicación generadora de códigos separada porque puede usarse sin estar en línea o en otro país sin necesidad de contratar un servicio de roaming.

La A2F tiene sus desventajas. El usuario puede volverse dependiente de ella, como en el caso de un administrador de contraseñas, por lo que debe cuidar no perder su dispositivo de A2F, el cual en la gran mayoría de los casos es el teléfono celular. Por fortuna, muchas aplicaciones y servicios A2F ofrecen una manera de respaldar la aplicación o proporcionan al usuario un código para que no se quede sin acceso de manera permanente.

Si usted no quiere confiarle a una aplicación de Google el cuidado de su A2F, hay un gran número de apps similares. Si quiere un mayor nivel de seguridad, pueden utilizar un dispositivo como [YubiKey](https://www.yubico.com/) o la billetera hardware en la que almacena sus criptomonedas. También hay A2F disponible a través de [FIDO U2F](https://support.ledger.com/hc/en-us/articles/115005198545-FIDO-U2F). 

Hay muchos tutoriales escritos y en video que indican cómo instalar u operar diversos métodos de A2F. En la sección de lecturas adicionales encontrará una guía tanto para Google Authenticator como para YubiKey.

La mayoría de los métodos ofrecen alguna manera de restaurar los códigos A2F del usuario en caso de que borre por accidente el app o quiebre o pierda su teléfono o dispositivo autenticador.  Asegúrese de familiarizarse con el procedimiento de respaldo del método que haya elegido antes de empezar a utilizarlo para no entrar en apuros si en una de las situaciones antes mencionadas.

### Resumen

Habilitar la autenticación de dos factores (A2F) en todas las cuentas que cuenten con ella incrementa la seguridad del usuario de manera significativa. Intente no emplear mensajes de texto SMS como método de A2F, pues son vulnerables a muchas rutas de ataque. Utilizar una aplicación de A2F o un dispositivo hardware son las mejores opciones. En todo caso, no se olvide de respaldar el método que sea que elija. 