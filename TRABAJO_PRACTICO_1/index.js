// Datos simulados --------------------------------------------------

const productos = [  
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
]; 

// Comando ejecución: node ./TRABAJO_PRACTICO_1/index.js
// Parte 1: Acceso a elementos y recorrido de arrays ----------------

// 1. Acceder a propiedades individuales:
console.log(productos[0]);
console.log("----------------------------------");

// 2. Recorrido con for...of:
console.log("Recorrido con for...of:");
for (const prod of productos) {
  console.log(`Nombre del producto: ${prod.nombre}, Precio: ${prod.precio}`);
}
console.log("----------------------------------");

// 3. Recorrido con .forEach():
console.log("Recorrido con .forEach():");
productos.forEach((prod) => {
  console.log(`Nombre del producto: ${prod.nombre}, Precio: ${prod.precio}`);
})
console.log("----------------------------------");


// Parte 2: Métodos de transformación y filtrado --------------------

// 4. Obtener solo los nombres con .map():
const soloNombres = productos.map((prod) => prod.nombre);
console.log("Nombres de los productos:", soloNombres);
console.log("----------------------------------");

// 5. Filtrar por categoría con .filter():
const productosRopa = productos.filter((prod) => prod.categoria == "Ropa");
console.log(productosRopa);
console.log("----------------------------------");

// 6. Filtrar por precio con .filter():
const maxPrecio = 3000;
const masCarosQue = productos.filter((prod) => prod.precio > maxPrecio);
console.log(masCarosQue);
console.log("----------------------------------");

// 7. Buscar un producto específico con .find():
const productoABuscar = "Gorra";
const prodBuscado = productos.find((prod) => prod.nombre == "Gorra");
console.log(prodBuscado);
console.log("----------------------------------");


// Parte 3: Métodos de validación -----------------------------------

// 8. Verificar con .some():
const precioLimite = 10000;
const hayMasCaros = productos.some((prod) => prod.precio > precioLimite);
console.log(hayMasCaros);
console.log("----------------------------------");

// 9. Verificar con .every():
const precioMinimo = 1000;
const todosMasCaros = productos.every((prod) => prod.precio > precioMinimo);
console.log(todosMasCaros);
console.log("----------------------------------");

// 10. Verificar existencia con .includes():
const aBuscar = "Campera";
const estaIncluido = soloNombres.includes(aBuscar);
console.log(estaIncluido);
console.log("----------------------------------");