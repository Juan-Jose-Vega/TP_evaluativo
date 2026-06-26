
// Impotaciones en commonjs 
// Recupera el arreglo expuesto por el archivo de base de datos
const productos = require("./baseDeDatosSimulada");

// Importación desestructurada utilizando llaves {} para extraer funciones específicas de los módulos.
const { calcularSubtotal, aplicarDescuento, calcularIVA, actualizarStock } = require("./calculosMatematicos");
const { mostrarTitulo, formatoMoneda } = require("./formateoVisual");


// Visuaizacion del inventario inicial

// console.log() Función que envía información a la terminal
console.log(mostrarTitulo("INVENTARIO INICIAL"));

// Itera sobre el catálogo para imprimir cada elemento de forma secuencial
productos.forEach(producto => {
    console.log(
    `ID: ${producto.id} | ${producto.nombre}| Precio: $${producto.precio} | Stock: ${producto.stock}`
    );
});


// 2. comfiguracion del carrito de compra
// Arreglo que contiene referencias directas a elementos específicos del array original.
// ( productos[1] se refiere al segundo elemento)
const compra = [
    productos[1], // Jean Slim fit
    productos[2],
    productos[4]  
];


// 3. Calculos

// Invoca las funciones pasandoles los argumentos reales requeridos
const subtotal = calcularSubtotal(compra);
const totalFinal = aplicarDescuento(subtotal, 10); // Pasa el subtotal y el 10% fijo.
const iva = calcularIVA(totalFinal);
const totalConIVA = totalFinal + iva;


// 4. Factura

console.log(mostrarTitulo("COMPRA"));
console.log("Subtotal: " + formatoMoneda(subtotal));
console.log("Descuento: 10%");
console.log("Total final: " + formatoMoneda(totalFinal));
console.log("IVA: " + formatoMoneda(iva));
console.log("Total con IVA: " + formatoMoneda(totalConIVA));


// 5 Actualizacion de inventario y control de stock

actualizarStock(compra); // Llama a la función que decrementa el stock en memoria

console.log(mostrarTitulo("INVENTARIO ACTUALIZADO"));
// Reevaluación del arreglo para auditar el impacto en las propiedades de stock modificadas.
productos.forEach(producto => {
    console.log(
        `ID: ${producto.id} | ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock}`
    );
});