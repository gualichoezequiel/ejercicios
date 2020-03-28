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

function sumarNumerosUsuario() {
	let primerNumero = Number(document.getElementById("primerNumero").value);
	let segundoNumero = Number(document.getElementById("segundoNumero").value);

	sumarNumeros = primerNumero + segundoNumero;

	document.getElementById("resultado").value = sumarNumeros;
}

// https://www.sitesbay.com/js-program/javascript-sum-of-two-numbers-in-javascript

// EJERCICIO TRES

function productosLista() {
	let nombreProducto = document.getElementById("nombreProducto");
	let categoriaProducto = document.getElementById("categoriaProducto");
	let stockProducto = document.getElementById("stockProducto");

	let allInputs = document.getElementsByClassName("allInputs");
	let agregarProducto = document.getElementById("agregarProducto");


	if (nombreProducto.value.length == 0 && categoriaProducto.value.length == 0 && stockProducto.value.length == 0){
		alert("Insertar valores");
	} else if (nombreProducto.value.length <= 1 && categoriaProducto.value.length == 0 && stockProducto.value.length == 0) {
		alert("Insertar categoria y stock")
	} else if (nombreProducto.value.length == 0 && categoriaProducto.value.length == 0 && stockProducto.value.length <= 1) {
		alert("Insertar producto y categoria")
	} else if (nombreProducto.value.length == 0 && categoriaProducto.value.length <= 1 && stockProducto.value.length == 0) {
		alert("Insertar producto y stock")
	} else if (nombreProducto.value.length == 0 && categoriaProducto.value.length <= 1 && stockProducto.value.length <= 1) {
		alert("Insertar producto")
	} else if (nombreProducto.value.length <= 1 && categoriaProducto.value.length <= 1 && stockProducto.value.length == 0) {
		alert("Insertar stock")
	} else if (nombreProducto.value.length <= 1 && categoriaProducto.value.length == 0 && stockProducto.value.length == 0) {
		alert("Insertar categoria y stock")
	} else if (nombreProducto.value.length <= 1 && categoriaProducto.value.length == 0 && stockProducto.value.length <= 1) {
		alert("Insertar categoria")
	} else if (nombreProducto.value.length <= 1 && categoriaProducto.value.length <= 1 && stockProducto.value.length <= 1) {

		// Objeto
		let listaFinal = {
			nombreProducto : nombreProducto.value,
			categoriaProducto : categoriaProducto.value,
			stockProducto : stockProducto.value
		}

		// let listaProductos = document.getElementById("listaProductos");
		// let elementoLista = document.createElement("li");

		// let children = listaProductos.children.length + 1;
		// elementoLista.setAttribute("id", "Elemento"+children);
		// elementoLista.appendChild(document.createTextNode("Elemento"+children));
		// listaProductos.appendChild(elementoLista)

		// console.log(nombreProducto, categoriaProducto, stockProducto);

	}

}