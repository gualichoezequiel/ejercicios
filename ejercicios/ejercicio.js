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

saludoCurso();