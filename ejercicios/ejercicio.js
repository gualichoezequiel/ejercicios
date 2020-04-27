// EJERCICIO UNO

function sumarNumeros() {
	let numeroUno = 1;		// Las variables deberían ir dentro o fuera de la función? (de las dos maneras funciona)
	let numeroDos = 2;

   	// document.write("Resultado Ejercicio N˚1", ' = ', numeroUno + numeroDos);

	let ejercicioUno = document.getElementById("ejercicioUno");

	let resultadoUno = numeroUno + numeroDos;

	ejercicioUno.innerHTML = numeroUno + " + " +  numeroDos + " = " + resultadoUno;
}

sumarNumeros();

// EJERCICIO DOS
/**
 * Tanto con Number como con parseInt(), no podemos transformar un String a numero
 */
function sumarNumerosUsuario() {
	/*let primerNumero = Number(document.getElementById("primerNumero").value);
	let segundoNumero = Number(document.getElementById("segundoNumero").value);*/

	let primerNumero = parseInt(document.getElementById("primerNumero").value);
	let segundoNumero = parseInt(document.getElementById("segundoNumero").value);

	sumarNumeros = primerNumero + segundoNumero;

	document.getElementById("resultado").value = sumarNumeros;
}

// https://www.sitesbay.com/js-program/javascript-sum-of-two-numbers-in-javascript

// EJERCICIO TRES

function productosLista() {

	let nombreProducto = document.getElementById("nombreProducto").value;
	let categoriaProducto = document.getElementById("categoriaProducto").value;
	let stockProducto = document.getElementById("stockProducto").value;

	let producto = {
		nombre : nombreProducto,
		categoria: categoriaProducto,
		stock : stockProducto
	}

	let ulProductos = document.getElementById("listaProductos")
	ulProductos.innerHTML = `
		<li> ${producto.nombre}</li>
		<li> ${producto.categoria}</li>
		<li> ${producto.stock}</li>
		`

}

// EJERCICIO CUATRO

function sumaDeNumeros() {
	let arrayDeNumeros = [1, 2, 3];

	let transformarNumeros = parseInt(arrayDeNumeros[0]);
	let transformarNumerosDos = parseInt(arrayDeNumeros[1]);
	let transformarNumerosTres = parseInt(arrayDeNumeros[2]);

	let sumarNumerosTransformados = transformarNumeros + transformarNumerosDos + transformarNumerosTres;

	document.getElementById("numerosTransformados").innerHTML = sumarNumerosTransformados;
}

sumaDeNumeros();

// EJERCICIO CINCO

function saludoCurso() {
	// var saludoCurso = "Hola Como estas?";
	// document.write(saludocurso);

	// El problema de este ejercicio es que en document.write la c de "saludocurso" es minúscula
	// y la variable tiene mayúscula

	let saludoCurso = "Hola como estás?";
	document.write(saludoCurso);
}

// saludoCurso();

// EJERCICIO SEIS

// Como hace para tener todas las funciones en una sola

let pasajeros = [];

function datosPasajeros() {
	if (pasajeros.length < 5) {
		let nombrePasajeroUno = document.getElementById("nombrePasajeroUno").value;
		let apellidoPasajeroUno = document.getElementById("apellidoPasajeroUno").value;
		let emailPasajeroUno = document.getElementById("emailPasajeroUno").value;
		let edadPasajeroUno = document.getElementById("edadPasajeroUno").value;
		let numeroButacaUno = document.getElementById("numeroButacaUno").value;

		pasajeros[pasajeros.length] = {
			nombre : nombrePasajeroUno,
			apellido : apellidoPasajeroUno,
			email : emailPasajeroUno,
			edad : edadPasajeroUno,
			butaca : numeroButacaUno

		}

		console.log(pasajeros);
	} else {
		alert("Limite máximo de pasajeros alcanzado");
	}

}

function promedioEdad() {
	let sumaEdades = 0;
	let cantidadEdades = 0;

	for(var i in pasajeros) {
		var p = pasajeros[i];
		sumaEdades += (p.edad*1);
		cantidadEdades++;
	}

	let sacarPromedioEdad = sumaEdades / cantidadEdades;

	let promedioEdadResultado = document.getElementById("promedioEdadResultado");
	promedioEdadResultado.innerHTML = sacarPromedioEdad;

}

// function promedioEdad() {
// 	let edadPasajeroUno = document.getElementById("edadPasajeroUno").value;
// 	let edadPasajeroDos = document.getElementById("edadPasajeroDos").value;
// 	let edadPasajeroTres = document.getElementById("edadPasajeroTres").value;
// 	let edadPasajeroCuatro = document.getElementById("edadPasajeroCuatro").value;
// 	let edadPasajeroCinco = document.getElementById("edadPasajeroCinco").value;

// 	let botonPromedioEdad = document.getElementById("promedioEdad");

// 	// En vez de sumar los numeros, los está concatenando y después dividiendo
// 	let sacarPromedioEdad = (edadPasajeroUno + edadPasajeroDos + edadPasajeroTres + edadPasajeroCuatro + edadPasajeroCinco)/5;

// 	let promedioEdadResultado = document.getElementById("promedioEdadResultado")

// 	promedioEdadResultado.innerHTML = sacarPromedioEdad;
// }