function calcularSubtotal(compra){
    let subtotal = 0;
    compra.forEach(producto => {
        subtotal += producto.precio;
    });
    return subtotal
}

function aplicarDescuento(subtotal, porcentaje){
    return subtotal - (subtotal * porcentaje / 100);
}
function calcularIVA(monto){
    return monto * 0.21;
}
function actualizarStock(compra){
    compra.forEach(producto =>{
        producto.stock--;
    });
}
module.exports = {
    calcularSubtotal,
    aplicarDescuento,
    calcularIVA,
    actualizarStock
};
