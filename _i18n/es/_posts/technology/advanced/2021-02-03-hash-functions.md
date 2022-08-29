---
layout: post
type: article
title: "Funciones hash"
description: "Estas funciones son una parte importante de toda cadena de bloques, pues su función es verificar la integridad de los datos que contiene."
permalink: /technology/advanced/hash-functions/
topic: technology
level: advanced
chapter: "¿Cómo funciona una cadena de bloques?"
---

Las funciones hash son una parte esencial de la tecnología blockchain, por lo que sirven muchos propósitos. Son funciones matemáticas que toman una entrada de cualquier extensión y producen una salida con una extensión predefinida. A la salida suele llamársele valor hash, compendio hash o simplemente hash.

Hay tantas funciones hash que hay calculadoras en línea para funciones hash (como [esta](https://www.fileformat.info/tool/hash.htm), por ejemplo). Las llamadas calculadoras permiten al usuario aplicarle un hash a una misma entrada utilizando a la vez diferentes funciones. La extensión de la salida puede oscilar desde un solo carácter hasta archivos completos, pero el tamaño de la salida siempre será el mismo por función.

Una función hash criptográfica debe cumplir con los siguientes criterios para utilizarse en una cadena de bloques de manera viable:

- Unidireccionalidad - Debe ser fácil calcular la salida de una entrada pero imposible calcular la entrada a partir de la salida. Al discutir el minado de criptomonedas más adelante en este mismo capítulo, este principio desempeñará un papel importante.
- Seudoaleatoriedad - Un cambio en la entrada produce siempre un cambio impredecible en la salida. Si el valor hash de la entrada 2 fue 4, el hash de la entrada 3 no puede ser 6.
- Resistencia a las colisiones - Debe ser muy difícil (entiéndase imposible) encontrar dos entradas que al pasar por una función hash produzcan la misma salida (colisionen).
- Determinismo - Dos entradas iguales deben siempre producir también dos salidas iguales.

![Hash function]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.2-hash-functions/ES_hash_function_D.jpg)
![Hash function]({{site.baseurl_root}}/assets/post_files/technology/advanced/2.2-hash-functions/ES_hash_function_M.jpg)

La función hash más utilizada en la actualidad es SHA-256 (Secure Hash Algorithm). El número indica la extensión de la salida en bits. Por ejemplo, hay cuatro extensiones de salida en la familia SHA: 224, 256, 384 y 512 bits. Otro tipo de funciones hash relevantes a las cadenas de bloques son las de la familia RIPEMD. Muchas criptomonedas suelen utilizar RIPEMD160, el cual, como es de esperarse, produce salidas de 160 bits.

Los valores hash se utilizan con muchos propósitos en el mundo de criptomonetario y de cadenas de bloques. El más destacado de estos procesos es el encadenamiento de bloques, responsable de crear la blockchain. Al valor hash se le suele llamar también huella de datos por su propiedad de ser resistente a las repeticiones o colisiones. El usuario remitente de un archivo puede también incluir el hash de dicho archivo aplicándole una función hash antes de adjuntarlo. El receptor puede calcular también el valor hash del archivo tras recibirlo y, comparándolo al valor que le proporcionó el usuario, determinar si el archivo recibido le ha llegado íntegro.

Cada conjunto de datos utilizado como entrada puede identificarse fácilmente por medio del hash único que genera. Es casi imposible encontrar dos entradas para una misma función hash que resulten en la misma salida (es decir, que provoquen una colisión). Se requerirían todas las supercomputadoras del mundo y varios miles de años de tiempo para lograr una colisión. Esto se debe a que no hay manera de calcular una colisión, pues se pueden lograr solamente al azar, ingresando entrada tras entrada a la función hash hasta obtener una colisión por casualidad.

### Resumen

Las funciones hash son la piedra angular de la tecnología blockchain. El hash de un archivo es como una huella digital. Resulta fácil detectar si dos archivos son idénticos o no comparando sus hashes. Las funciones hash encadenan a los bloques, por lo que no puede modificarse información pasada sin incluir el hash del bloque anterior. Al intentar modificar los datos, las referencias o enlaces se romperán.

## Explicación Simple a Continuación - ¿Qué es una función hash?

<table class="table lead">
    <tr>
        <td class="icon"><img src="{{site.baseurl_root}}/assets/post_files/eli5/what-is-a-hash-function/Hash.jpg" alt="Cryptocurrency"></td>
        <td>
            Una función hash se utiliza para crear la huella digital de un archivo. Es posible emplear una función hash para hacer esto con casi cualquier tipo de archivo.
        </td>
    </tr>
</table>

Si el usuario desea mandar un archivo de texto sin que el receptor pueda modificarlo, este puede utilizar una función hash para adjuntarle una huella digital al archivo antes de mandarlo.

Al recibir de nuevo el archivo de texto compartido, el remitente original puede utilizar otra vez la función hash para crear una segunda huella digital. Si ambas huellas coinciden, significa que no se ha modificado el archivo. Si las huellas no coinciden, en cambio, significa que el archivo ha sufrido modificaciones.

La cadena de bloques utiliza funciones hash para crear una huella digital del historial de las transacciones. Si alguien quisiera engañar al sistema modificando el registro de alguna transacción, todos los usuarios de la cadena se enterarían, pues la huella digital del historial de las transacciones antes y después de su manipulación no coincidiría.
