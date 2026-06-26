//Funciones para optimizar la visualización de la información
//Función mostrarTitulo sirve para crear titulos ordenados con rayitas
function mostrarTitulo(texto){
    return `\n===${texto}===`;
}
function formatoMoneda(valor){ // Agrega el signo de pesos ($) pegado antes del número 
    return `$${valor}`;
}
module.exports = { // Guarda las funciones adentro de module.exports para que se puedan usar en el archivo index.js
    mostrarTitulo,
    formatoMoneda
};