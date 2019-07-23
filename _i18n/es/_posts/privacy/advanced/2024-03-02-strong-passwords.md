---
layout: post
type: article
title: "Una contraseña segura"
description: "Explicamos la diferencia entre las contraseñas que son difíciles de recordar y las que son difíciles de adivinar."
permalink: /privacy/advanced/strong-passwords/
topic: privacy
level: advanced
chapter: "Mejores prácticas"
further_reads: [how_to_create_a_strong_password]
---

Utilizar la misma contraseña en diferentes sitios y aplicaciones es quizás la práctica digital más insegura de todas. Hay plataformas que a pesar de su tamaño y fortaleza han sido hackeadas para vender la información que almacenan sobre sus usuarios, así como ha habido casos en los que la información robada se ha hecho pública. Si el usuario tuviera su contraseña e información personal en alguna de estas bases de datos, todas sus cuentas con la misma contraseña correrían peligro de ser infiltradas.

Es de suma importancia que el usuario utilice una contraseña distinta para cada sitio o aplicación en el que tenga una cuenta. Considere este hábito como la práctica de seguridad personal número uno.

![password](/assets/post_files/privacy/advanced/strong-passwords/ES_password.jpg)

[Source](https://xkcd.com/936/)

### ¿Cómo se hackea una contraseña?

Hay varios métodos muy socorridos por los hackers para obtener contraseñas ajenas. El más fácil de ellos son las llamadas ciberestafas, o phishing.

En el caso de una ciberestafa, el atacante busca que el usuario entregue voluntariamente su información de contraseña. Esto puede lograrse enviándole un correo electrónico pidiéndole que verifique una cuenta, por ejemplo. Un enlace en el correo puede llevar al usuario a un sitio web fraudulento idéntico al original, el cual le pide su información de acceso. Una vez que el usuario la ingresa, el atacante ha logrado su objetivo.

Si usted recibe un correo sospechoso como el que acabamos de describir, lo más importante es no darle clic a ninguno de los enlaces que contenga. Si tiene dudas, visite el sitio oficial y revise si ha recibido algún aviso indicando que verifique su información de acceso; si no lo encuentra, lo más probable es que el correo se trate de una estafa.

Por desgracia, si el atacante no logra obtener la contraseña del usuario por medio del engaño, cuenta aún con otros métodos. 

 - Ataque diccionario - En un ataque de este tipo, el hacker inserta en el campo de contraseña una serie de palabras comunes (como las que pueden tomarse de un diccionario). Sin embargo, además de palabras comunes, muchos atacantes ingresan también las contraseñas más comúnmente utilizadas (digamos algo como “Contraseña123”, “c0ntr4seña” o “P4ssword”).
 - Ataque de fuerza bruta - Un ataque de fuerza bruta se concentra en la contraseña del usuario, y se emplea cuando el atacante tiene solamente un blanco. Durante un ataque de fuerza bruta, el hacker ingresa como contraseña toda combinación de caracteres posible hasta lograr acceder a la cuenta del usuario.

Lo más probable, es que un posible atacante utilice una combinación de los ataques diccionario y de fuerza bruta, intentando primero ingresar contraseñas comunes antes de pasar a intentar adivinar la contraseña.

### Cómo debe lucir una contraseña

Una contraseña fuerte tiene por lo menos 12 caracteres, aunque si la información que busca proteger es sensible, se recomienda emplear 20 caracteres o más. Emplee también una mezcla de letras mayúsculas y minúsculas, así como números y caracteres especiales. No se limite a reemplazar letras por números como se hizo con “c0ntr4seña”, pues en el caso de un ataque automatizado, una contraseña así resulta tan fácil de adivinar como la palabra sin alteraciones.

Hay algunos métodos que pueden emplearse para crear una contraseña robusta. En el método de la oración, por ejemplo, se utiliza una oración familiar o común como punto de partida, se le aplica un algoritmo manual y se emplea el resultado como contraseña.

Empecemos con la frase “Mi escuela se llamaba Simón Bolívar y tenía muchos amigos”. Ahora, pensemos en un algoritmo que se le pueda aplicar para crear una contraseña, como utilizar los primeros dos caracteres de cada palabra, los dos últimos, el primero y el último o cualquier otra combinación por el estilo. Utilizar los primeros dos caracteres de cada palabra de la frase anterior daría como resultado “MiessellSiBoytemuam”, una contraseña incoherente pero segura que resistiría tanto un ataque de diccionario como un ataque de fuerza bruta (salvo que el atacante estuviera 100% dedicado a obtener la contraseña a toda costa).

Otro método recomendable es el de unir palabras regulares en órdenes que no tengan sentido o coherencia; “correctocaballopilagrapa” es un ejemplo de una contraseña generada por medio de este método.

### How Do You Remember These?

El método menos seguro y más complicado de emplear una contraseña así en varias plataformas y lograr recordarla sería agregando alguna especie de código al final de la contraseña estándar dependiendo de la cuenta en cuestión.

Así, un usuario podría utilizar “MiessellSiBoytemuam_fb” para ingresar a su cuenta de Facebook y “MiessellSiBoytemuam_nf” para su cuenta de Netflix. Sin embargo, en caso de que la base de datos donde alguna de estas contraseñas estuviera almacenada se viera infiltrada, todas las contraseñas del usuario quedarían comprometidas a la vez si el atacante lograra identificar el método empleado para adaptar la contraseña a cada cuenta.

Un mejor método es el de utilizar un administrador de contraseñas capaz de generar y almacenar contraseñas largas y difíciles de adivinar. En este caso, el usuario tendría que recordar solo la contraseña segura de administrador para obtener acceso a cualquiera de sus cuentas personales.

Hablamos a detalle sobre los administradores de contraseñas en un [artículo del nivel principiante]({{ site.baseurl }}{% post_url /privacy/beginner/2023-04-06-password-manager %}).

### Resumen

Utilizar contraseñas seguras es el primer paso que el usuario debe tomar para proteger su información, mientras que el segundo es utilizar una contraseña diferente para cada una de sus cuentas.

Un hacker intentará obtener la contraseña del usuario por medio de estafas, ataques de diccionario y ataques de fuerza bruta, por lo que una contraseña debe contener por lo menos 12 caracteres (aunque 20 serían mejores). Es importante nunca utilizar frases comunes ni conformarse con reemplazar un carácter por otro al momento de crear una contraseña. Existen algunos métodos recomendables para crear contraseñas robustas, como el método de la oración, por ejemplo. Para que el usuario lleve un registro seguro de todas sus contraseñas, es recomendable que utilice un [administrador de contraseñas]({{ site.baseurl }}{% post_url /privacy/beginner/2023-04-06-password-manager %}).

