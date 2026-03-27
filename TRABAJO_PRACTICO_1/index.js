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
