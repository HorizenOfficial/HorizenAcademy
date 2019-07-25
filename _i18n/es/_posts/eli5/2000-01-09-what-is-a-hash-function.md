---
layout: post
type: article
title: "¿Qué es una función hash?"
description: "Una función de hash es algo que se utiliza para crear una huella digital de un archivo para que pueda comprobar si se ha cambiado o no."
permalink: /eli5/what-is-a-hash-function/
topic: eli5
further_reads: [hashing]
---

<table class="table lead">
    <tr>
        <td class="icon"><img src="/assets/post_files/eli5/what-is-a-hash-function/Hash.jpg" alt="Cryptocurrency"></td>
        <td>
            Una función hash se utiliza para crear la huella digital de un archivo. Es posible emplear una función hash para hacer esto con casi cualquier tipo de archivo.
        </td>
    </tr>
</table>   

Si el usuario desea mandar un archivo de texto sin que el receptor pueda modificarlo, este puede utilizar una función hash para adjuntarle una huella digital al archivo antes de mandarlo.

Al recibir de nuevo el archivo de texto compartido, el remitente original puede utilizar otra vez la función hash para crear una segunda huella digital. Si ambas huellas coinciden, significa que no se ha modificado el archivo. Si las huellas no coinciden, en cambio, significa que el archivo ha sufrido modificaciones. 

La cadena de bloques utiliza funciones hash para crear una huella digital del historial de las transacciones. Si alguien quisiera engañar al sistema modificando el registro de alguna transacción, todos los usuarios de la cadena se enterarían, pues la huella digital del historial de las transacciones antes y después de su manipulación no coincidiría.

Explicamos más sobre las funciones hash en nuestra [sección avanzada de tecnología]({{ site.baseurl }}{% post_url /technology/advanced/2021-02-03-hash-functions %}).