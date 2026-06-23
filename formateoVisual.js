function mostrarTitulo(texto){
    return `\n===${texto}===`;
}
function formatoMoneda(valor){
    return `$${valor}`;
}
module.exports = {
    mostrarTitulo,
    formatoMoneda
};