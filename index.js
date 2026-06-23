const productos = require("./baseDeDatosSimulada");
const { calcularSubtotal, aplicarDescuento, calcularIVA, actualizarStock } = require("./calculosMatematicos");
const { mostrarTitulo, formatoMoneda } = require("./formateoVisual");
console.log(mostrarTitulo("INVENTARIO INICIAL"));
productos.forEach(producto => {
    console.log(
    `ID: ${producto.id} | ${producto.nombre}| Precio: $${producto.precio} | Stock: ${producto.stock}`
    );
});
const compra = [
    productos[1],
    productos[2],
    productos[4]
];
const subtotal = calcularSubtotal(compra);
const totalFinal = aplicarDescuento(subtotal, 10);
const iva = calcularIVA(totalFinal);
const totalConIVA = totalFinal + iva;
console.log(mostrarTitulo("COMPRA"));
console.log("Subtotal: " + formatoMoneda(subtotal));
console.log("Descuento: 10%");
console.log("Total final: " + formatoMoneda(totalFinal));
console.log("IVA: " + formatoMoneda(iva));
console.log("Total con IVA: " + formatoMoneda(totalConIVA));
actualizarStock(compra);
console.log(mostrarTitulo("INVENTARIO ACTUALIZADO"));
productos.forEach(producto => {
    console.log(
        `ID: ${producto.id} | ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock}`
    );
});