// const define un valor que no cambia
// Un Array [] almacenar múltiples valores de datos de los productos
// Cada elemento dentro en el array ocupa una posición llamada índice (index) iniciando en 0.
const productos = [
    {
        // Objetos {} del array
        // Se utiliza la notación de punto o clave para encapsular características de una entidad
        id: 1,
        nombre: "Remera Oversize",
        precio: 18000,
        stock: 20
    },
    {
        id: 2,
        nombre: "Jean Slim fit",
        precio: 35000,
        stock: 12
    },
    {
        id: 3,
        nombre: "Buzo canguro",
        precio: 42000,
        stock: 8
    },
    {
        id: 4,
        nombre: "Campera deportiva",
        precio: 65000,
        stock: 5
    },
    {
        id: 5,
        nombre: "Gorra Urbana",
        precio: 12000,
        stock: 15
    }
];
module.exports = productos; // Para exponer funcionalidades, se asigna el elemento directamente al objeto global module.exports.