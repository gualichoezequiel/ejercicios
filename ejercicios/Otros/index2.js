
/*

// Le ASIGNAMOS a la variable numbers un array
// EL VALOR DE LA VARIABLE TIENE UN TIPO, NO LA VARIABLE EN SI
let numbers = [1, 9, -8, 1.2, 5]
//Como sabemos el tipo del valor de la variable?
console.log( typeof(numbers) )

// Usar let por buenas practicas. No usar var, a menos que se quiera usar en muchos lugares la variable
for (let index = 0; index < numbers.length; index++) {

    const element = numbers[index];
    console.log(element)
}

// /**
//  *  No es una buena practica redefinir el valor de la variable
//  * 
//     numbers = 55
//     console.log( typeof(numbers) )
//

 */

 // ARRAYS

 // Recomendacion: No crear arrays heterogeneos

 //let booleanos = [ true, false, false, true, true ]
 let numeros = [1, 8, -4, 2, 7, 4, -9, 1, -1.5]
 // Posiciones del array anterior --> 0, 1, 2, 3
 // .length para saber longitud de una variable (Strings como arrays)
 console.log(numeros.length)

 // Aceeder a posiciones de array
 console.log(numeros[1])

 // Acceder al ultimo elemento del array
 let longitud = numeros.length
 let ultimaPosicion = longitud - 1
 console.log(numeros[ ultimaPosicion ])

// Contar caracteres de un array
let pais = "Argentina"
console.log(pais.length)

// LLEGAMOS HASTA OBJETOS 03/03/2020