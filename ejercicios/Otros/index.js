// Generar un objeto Libro

// key: value
// Cada key/value, se separa por coma
let libro = {
    nombre : "1984",
    autor: "Orwell",
    isbn: 2154545454
}

//console.log(`Libro: ${libro.nombre}, Autor: ${libro["autor"]}, ISBN: ${libro.isbn}`)

// Obtener datos de forma dinamica
function mostrarDatoDePropiedad(nombrePropiedad) {
    // De esta forma no funciona
    //console.log(libro.nombrePropiedad)
    console.log(libro[nombrePropiedad])
}

mostrarDatoDePropiedad("nombre")
mostrarDatoDePropiedad("autor")
mostrarDatoDePropiedad("isbn")

/**
 * Problema desafio: Hacer un programita en JS, en el que se ingresen 5 usuarios, 
 * que tengan los siguientes datos (Nombre, Email, Grado, Edad).
 * 
 * Luego mostrar por pantalla, el promedio de edades
 * 
 */