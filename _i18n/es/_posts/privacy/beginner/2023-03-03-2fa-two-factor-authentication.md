---
layout: post
type: article
title: "A2F - Autenticación de dos factores"
description: "Otra mejor práctica que exhortamos al usuario a utilizar es la autenticación de dos factores, conocida también como AF2 (two-factor authentication; 2FA). Este artículo habla de ella y su importancia."
permalink: /privacy/beginner/2fa-two-factor-authentication/
topic: privacy
level: beginner
chapter: "Mejores prácticas"
further_reads: [how_to_set_up_2fa_using_google_authenticator]
---

En breve, la autenticación de dos factores (A2F) es una manera de permitirle al usuario acceder a un servicio por medio de una combinación de dos métodos de autenticación. La segunda medida puede ser un código PIN o contraseña adicional, una contraseña de uso único (OTP), una huella dactilar u otros datos biométricos o inclusive un chip de seguridad o token instalado dentro del dispositivo del usuario.

Ya utilizamos la A2F en la vida diaria. Un ejemplo notable es el de los cajeros automáticos, los cuales piden al usuario un código PIN además de su tarjeta para retirar efectivo. Sin embargo, continúa siendo común que muchos servicios y plataformas utilicen autenticación de un solo factor, el cual comúnmente es una contraseña.

Por suerte, casi todos los servicios del mundo blockchain incluyen métodos de doble autenticación, pues se han convertido en un estándar del ámbito.

Habilitar la AF2 es una de las mejores prácticas de seguridad que el usuario puede implementar, pues lo protege incluso en caso de ataques a nivel plataforma en los que se revela un gran número de contraseñas. Estas protecciones, claro, dependen siempre de que la plataforma haya implementado la autenticación de manera adecuada.



### ¿Cómo funciona?

La autenticación de dos factores funciona pidiéndole al usuario que compruebe su identidad por medio de un método de autenticación adicional a la contraseña. Es común que el método secundario de autenticación sea un mensaje de texto enviado al teléfono del usuario o un código generado en una aplicación dedicada como Microsoft Authenticator o Google Authenticator, entre otros.

Utilizar una segunda aplicación para generar códigos es otra práctica recomendable, pues estas pueden utilizarse aunque no estén en línea o en el extranjero sin necesidad de contratar servicios de roaming. Además, el usuario puede estar tranquilo de que nadie puede tomar control de su celular y recibir el SMS antes o modificarlo de alguna manera.

![2FA in ES](/assets/post_files/privacy/beginner/2fa/ES_2fa_D.jpg)
![2FA in ES](/assets/post_files/privacy/beginner/2fa/ES_2fa_M.jpg)

La A2F tiene también sus inconvenientes, pues al igual que el administrador de contraseñas, es fácil volverse dependiente de ella, por lo que el usuario debe tener mucho cuidado de no perder el dispositivo que utiliza para autenticarse. Por fortuna, muchas aplicaciones y servicios de A2F ofrecen maneras de respaldar la información en sí o conservan un código de respaldo para que el usuario no se quede sin acceso de manera permanente.

Pase a leer nuestro artículo avanzado sobre la A2F para aprender más sobre métodos de autenticación de dos factores y elegir ya los que más le convengan.