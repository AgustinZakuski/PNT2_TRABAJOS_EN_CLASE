// Ej 1 --------------------
// Ej 1/A ------------------
let edad = 19;
const nombre = "Agustín";

edad = 20;
//nombre = "Ignacio";
//Comentado para no romper la ejecución 👆

// Ej 1/B ------------------
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
for (const j = 0; j < 5; j++) {
    console.log(j);
}
*/
//Comentado para no romper la ejecución 👆
console.log("---------------------");


// Ej 1/C ------------------
const alumno = {
    nombre: "Agustín",
    edad: 19,
};

alumno.nombre = "Ignacio";
alumno.edad = 20;
console.log(alumno);
// Se puede modificar los atributos debido a que "const" impide
// sólo la reasignación de la variable, no impide la modificación 
// de los objetos a los que apunta la variable.
console.log("---------------------");

// Ej 1/D ------------------
function probarVariables() {
    var var1 = "var1";
    let var2 = "var2";
    const var3 = "var3";
    console.log(var1, var2, var3);
}
/*
console.log(var1);
console.log(var2);
console.log(var3);
*/
// Ninguna de las tres variables existe fuera de la función

probarVariables();
console.log("---------------------");

// Ej 2 --------------------
// Ej 2/A ------------------
const frutas = ["manzana", "piña", "cereza", "durazno", "mandarina"];
frutas.unshift("banana");
frutas.push("sandía");
console.log (frutas);

console.log("---------------------");

// Ej 2/B ------------------
const numeros = [1, 2, 3, 4, 5];
const numeros2 = [];
for (let i = 0; i < numeros.length; i++) {
    numeros2.push(numeros[i] * 2);
}

console.log(numeros2);

console.log("---------------------");

// Ej 2/C ------------------
let colores = ["rojo", "verde", "azul"];
let colores2 = ["púrpura", "negro"]
colores = colores.concat(colores2);
console.log(colores);

console.log("---------------------");

// Ej 2/D ------------------
const array = ["item1", "item2", "item3", "item4", "item5", "item6"];
console.log(array.slice(1, array.length - 1));
// Para no modificar el array original, se puede 
// directamente imprimir un slice del mismo.

console.log("---------------------");

// Ej 3 --------------------
// Ej 3/A ------------------
const libro = {
    titulo: "The Witcher",
    autor: "Andrzej Sapkowski",
    año: 1993,
    genero: "fantasía",
};

console.log(libro.titulo); 
console.log(libro.autor);
console.log(libro.año);
console.log(libro.genero);

console.log("---------------------");

// Ej 3/B ------------------
const persona = {
    nombre: "Agustín",
    edad: 19,
};

persona.hobby = "programar";
persona.edad = 20;
console.log(persona);

console.log("---------------------");

// Ej 3/C ------------------
const calculadora = {
    sumar: (num1, num2) => num1 + num2,
    restar: (num1, num2) => num1 - num2,
    multiplicar: (num1, num2) => num1 * num2,
    dividir: (num1, num2) => {
        let result 
        if (num2 === 0) {
            result = "Error: División por cero";
        } else {
            result = num1 / num2;
        }
        return result;
    }
    
};

console.log("Suma: " + calculadora.sumar(5, 3));
console.log("Resta: " + calculadora.restar(5, 3));
console.log("Multiplicación: " + calculadora.multiplicar(5, 3));
console.log("División: " + calculadora.dividir(5, 3));
console.log("División por cero: " + calculadora.dividir(5, 0));

console.log("---------------------");

// Ej 3/D ------------------
const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
};

let propAcceso = "propiedad1";
console.log(objeto[propAcceso]);

console.log("---------------------");

// Ej 4 --------------------
// Ej 4/A ------------------
const nombre1 = "Agustín";
let edad1 = 19;
const profesion = "estudiante";
console.log(`Mi nombre es ${nombre1}, tengo ${edad1} años y soy ${profesion}.`);

console.log("---------------------");

// Ej 4/B ------------------
const darTotal = (precio, cant) => `El total es: $${precio * cant}`;
console.log(darTotal(10, 5));

console.log("---------------------");

// Ej 4/C ------------------
let variableX = 10;
try {
    variableX();
} catch (error) {
    let mensaje = `Error: ${error.name} - ${error.message}`;
    console.log(mensaje);
}

console.log("---------------------");

// Ej 5 --------------------
// Ej 5/A ------------------
/* Función original:
function saludar(nombre) { 
        return "Hola, " + nombre + "!"; 
      }
*/
// Función convertida 👇
const saludar = (nombre) => "Hola, " + nombre + "!";
console.log(saludar("Agustín"));

console.log("---------------------");

// Ej 5/B ------------------
const calcularCuadrado = (num) => num * num;
console.log(calcularCuadrado(5));

console.log("---------------------");

// Ej 5/C ------------------
const devolverMayor = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(devolverMayor(10, 20));

console.log("---------------------");

// Ej 5/D ------------------
const calcularCuadrados = (numeros) => numeros.map(num => num * num);
console.log(calcularCuadrados([1, 2, 3, 4, 5]));

console.log("---------------------");

// Ej 6 --------------------
// Ej 6/A ------------------
let arrayNums = [1, 2, 3, 4, 5];
let arrayPares = arrayNums.filter(num => num % 2 === 0);
console.log(arrayPares);

console.log("---------------------");

// Ej 6/B ------------------
let arrayEstudiantes = [
    { nombre: "Agustín", edad: 19, calificación: 10 },
    { nombre: "Ignacio", edad: 2578, calificación: 8 },
    { nombre: "María", edad: 18, calificación: 2 },
    { nombre: "Lucía", edad: 26, calificación: 7 },
];
let soloNombresYEdades = arrayEstudiantes.map(est => ({ nombre: est.nombre, edad: est.edad }));
console.log(soloNombresYEdades);

console.log("---------------------");

// Ej 6/C ------------------
let primerMayorDe25 = soloNombresYEdades.find(est => est.edad > 25);
console.log(primerMayorDe25);

console.log("---------------------");

// Ej 6/D ------------------
// Utilizo el array de números pares del ejercicio 6/A
let sumaPares = arrayPares.reduce((acc, num) => acc + num, 0);
console.log(sumaPares);

console.log("---------------------");

// Ej 7 --------------------
// Ej 7/A ------------------
const sumarArgumentos = (... args) => args.reduce((acc, num) => acc + num, 0);
console.log(sumarArgumentos(1, 2, 3, 4, 5));

console.log("---------------------");

// Ej 7/B ------------------
// Utilizo "arrayNums" del ejercicio 6/A (arrayNums = [1, 2, 3, 4, 5])
const masAlto = [... arrayNums].reduce((max, num) => num > max ? num : max, -Infinity);
console.log(masAlto);

console.log("---------------------");

// Ej 7/C ------------------
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objetoCombinado = { ...objeto1, ...objeto2 };
console.log(objetoCombinado);

console.log("---------------------");  

// Ej 7/D ------------------
const arrayConSubs = [1, [2, 3], [4]];
const arrayAplanado = [...arrayConSubs.flat()];
console.log(arrayAplanado);

console.log("---------------------");

// Ej 8 --------------------
// Ej 8/A ------------------
// Utilizo el objeto "persona" del ejercicio 3/B
const {nombre: nombrePersona, edad: edadPersona} = persona;
console.log(`${nombrePersona}, ${edadPersona}`);

console.log("---------------------");

// Ej 8/B ------------------   
const extraerPropiedades = (object) => {
    const {nombre: propiedad1, edad: propiedad2, hobby: propiedad3} = object; 
    return {propiedad1, propiedad2, propiedad3};
};

console.log(extraerPropiedades(persona));

console.log("---------------------");

// Ej 8/C ------------------
const datosCiudad = ["Buenos Aires", "Argentina", "3 millones"];
let {0: nombreCiudad, 1: paisCiudad, 2: poblacionCiudad} = datosCiudad;
console.log(datosCiudad);
