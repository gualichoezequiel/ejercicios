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
function datosPasajerosUno() {
	let nombrePasajeroUno = document.getElementById("nombrePasajeroUno").value;
	let apellidoPasajeroUno = document.getElementById("apellidoPasajeroUno").value;
	let emailPasajeroUno = document.getElementById("emailPasajeroUno").value;
	let edadPasajeroUno = document.getElementById("edadPasajeroUno").value;
	let numeroButacaUno = document.getElementById("numeroButacaUno").value;

	let datosPasajeroUno = {
		nombre : nombrePasajeroUno,
		apellido : apellidoPasajeroUno,
		email : emailPasajeroUno,
		edad : edadPasajeroUno,
		butaca : numeroButacaUno

	}

	let listaPasajeroUno = document.getElementById("listaPasajeroUno")
	listaPasajeroUno.innerHTML = `
	<p>Pasajero Uno</p>
	<li>${datosPasajeroUno.nombre}</li>
	<li>${datosPasajeroUno.apellido}</li>
	<li>${datosPasajeroUno.email}</li>
	<li>${datosPasajeroUno.edad}</li>
	<li>${datosPasajeroUno.butaca}</li>
	`

}

function datosPasajerosDos() {
	let nombrePasajeroDos = document.getElementById("nombrePasajeroDos").value;
	let apellidoPasajeroDos = document.getElementById("apellidoPasajeroDos").value;
	let emailPasajeroDos = document.getElementById("emailPasajeroDos").value;
	let edadPasajeroDos = document.getElementById("edadPasajeroDos").value;
	let numeroButacaDos = document.getElementById("numeroButacaDos").value;

	let datosPasajeroDos = {
		nombre : nombrePasajeroDos,
		apellido : apellidoPasajeroDos,
		email : emailPasajeroDos,
		edad : edadPasajeroDos,
		butaca : numeroButacaDos

	}

	let listaPasajeroDos = document.getElementById("listaPasajeroDos")
	listaPasajeroDos.innerHTML = `
	<p>Pasajero Dos</p>
	<li>${datosPasajeroDos.nombre}</li>
	<li>${datosPasajeroDos.apellido}</li>
	<li>${datosPasajeroDos.email}</li>
	<li>${datosPasajeroDos.edad}</li>
	<li>${datosPasajeroDos.butaca}</li>
	`


}

function datosPasajerosTres() {
	let nombrePasajeroTres = document.getElementById("nombrePasajeroTres").value;
	let apellidoPasajeroTres = document.getElementById("apellidoPasajeroTres").value;
	let emailPasajeroTres = document.getElementById("emailPasajeroTres").value;
	let edadPasajeroTres = document.getElementById("edadPasajeroTres").value;
	let numeroButacaTres = document.getElementById("numeroButacaTres").value;

	let datosPasajeroTres = {
		nombre : nombrePasajeroTres,
		apellido : apellidoPasajeroTres,
		email : emailPasajeroTres,
		edad : edadPasajeroTres,
		butaca : numeroButacaTres

	}

	let listaPasajeroTres = document.getElementById("listaPasajeroTres")
	listaPasajeroTres.innerHTML = `
	<p>Pasajero Tres</p>
	<li>${datosPasajeroTres.nombre}</li>
	<li>${datosPasajeroTres.apellido}</li>
	<li>${datosPasajeroTres.email}</li>
	<li>${datosPasajeroTres.edad}</li>
	<li>${datosPasajeroTres.butaca}</li>
	`

}

function datosPasajerosCuatro() {
	let nombrePasajeroCuatro = document.getElementById("nombrePasajeroCuatro").value;
	let apellidoPasajeroCuatro = document.getElementById("apellidoPasajeroCuatro").value;
	let emailPasajeroCuatro = document.getElementById("emailPasajeroCuatro").value;
	let edadPasajeroCuatro = document.getElementById("edadPasajeroCuatro").value;
	let numeroButacaCuatro = document.getElementById("numeroButacaCuatro").value;

	let datosPasajeroCuatro = {
		nombre : nombrePasajeroCuatro,
		apellido : apellidoPasajeroCuatro,
		email : emailPasajeroCuatro,
		edad : edadPasajeroCuatro,
		butaca : numeroButacaCuatro

	}

	let listaPasajeroCuatro = document.getElementById("listaPasajeroCuatro")
	listaPasajeroCuatro.innerHTML = `
	<p>Pasajero Cuatro</p>
	<li>${datosPasajeroCuatro.nombre}</li>
	<li>${datosPasajeroCuatro.apellido}</li>
	<li>${datosPasajeroCuatro.email}</li>
	<li>${datosPasajeroCuatro.edad}</li>
	<li>${datosPasajeroCuatro.butaca}</li>
	`

}

function datosPasajerosCinco() {
	let nombrePasajeroCinco = document.getElementById("nombrePasajeroCinco").value;
	let apellidoPasajeroCinco = document.getElementById("apellidoPasajeroCinco").value;
	let emailPasajeroCinco = document.getElementById("emailPasajeroCinco").value;
	let edadPasajeroCinco = document.getElementById("edadPasajeroCinco").value;
	let numeroButacaCinco = document.getElementById("numeroButacaCinco").value;

	let datosPasajeroCinco = {
		nombre : nombrePasajeroCinco,
		apellido : apellidoPasajeroCinco,
		email : emailPasajeroCinco,
		edad : edadPasajeroCinco,
		butaca : numeroButacaCinco

	}

	let listaPasajeroCinco = document.getElementById("listaPasajeroCinco")
	listaPasajeroCinco.innerHTML = `
	<p>Pasajero Cinco</p>
	<li>${datosPasajeroCinco.nombre}</li>
	<li>${datosPasajeroCinco.apellido}</li>
	<li>${datosPasajeroCinco.email}</li>
	<li>${datosPasajeroCinco.edad}</li>
	<li>${datosPasajeroCinco.butaca}</li>
	`

}

function promedioEdad() {
	let edadPasajeroUno = document.getElementById("edadPasajeroUno").value;
	let edadPasajeroDos = document.getElementById("edadPasajeroDos").value;
	let edadPasajeroTres = document.getElementById("edadPasajeroTres").value;
	let edadPasajeroCuatro = document.getElementById("edadPasajeroCuatro").value;
	let edadPasajeroCinco = document.getElementById("edadPasajeroCinco").value;

	let botonPromedioEdad = document.getElementById("promedioEdad");

	// En vez de sumar los numeros, los está concatenando y después dividiendo
	let sacarPromedioEdad = (edadPasajeroUno + edadPasajeroDos + edadPasajeroTres + edadPasajeroCuatro + edadPasajeroCinco)/5;

	let promedioEdadResultado = document.getElementById("promedioEdadResultado")

	promedioEdadResultado.innerHTML = sacarPromedioEdad;
}