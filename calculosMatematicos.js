/**
 * Función calcularSubtotal para calcular monto base o monto acululado 
 * todas las funcines son bloques de código reutilizables para evitar duplicar código*/
function calcularSubtotal(compra){
    //let variable que inicia en 0 que puede cambiar mas adelante
    let subtotal = 0;

    // forEach() Recorre el Arreglo, ejecuta una función para cada elemento, en este caso acumula el costo
    compra.forEach(producto => {
        // Usamos el puntito (.precio) para buscar y sumar el precio específico del producto
        subtotal += producto.precio;
    });
    return subtotal
}

function aplicarDescuento(subtotal, porcentaje){
    // funcion que realiza el cálculo matemático restando el porcentaje 
    return subtotal - (subtotal * porcentaje / 100);
}
function calcularIVA(monto){
    // funcion para multiplicar IVA (21%) al monto base
    return monto * 0.21;
}
/**
 * Función actualizarStock
 * Itera sobre la colección de datos para modificar las propiedades internas de los objetos */
function actualizarStock(compra){
    compra.forEach(producto =>{
        producto.stock--; //-- Le resta 1 al stock actual de este producto
    });
}

// Exporta un objeto con múltiples funciones".
module.exports = {
    calcularSubtotal,
    aplicarDescuento,
    calcularIVA,
    actualizarStock
};
