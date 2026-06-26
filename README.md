# Simulador de Presupuestos y Control de Stock - Node.js

Este proyecto es una aplicación de consola (CLI) desarrollada en Node.js que simula el flujo de operaciones comerciales de una tienda de ropa. El sistema gestiona un catálogo de productos, procesa el cálculo de una compra aplicando reglas de negocio modulares y actualiza el inventario final de forma automática.

## Integrantes del Grupo
* Diaz Enzo
* Santillan Walter Hernan
* Osores Vergara Franco
* Vega Juan Jose

## Tecnologías y Estándar Utilizado
* **Entorno de ejecución:** Node.js
* **Estándar de Módulos:** CommonJS (`require` / `module.exports`)

## Estructura del Proyecto
El código se encuentra organizado de forma modular en los siguientes archivos:
* `baseDeDatosSimulada.js`: Contiene el array con el catálogo inicial de productos, precios y stock.
* `calculosMatematicos.js`: Contiene las funciones core de negocio (cálculo de subtotal, aplicación de descuentos, IVA y actualización de stock).
* `formateoVisual.js`: Funciones auxiliares para la presentación estética de los datos en la terminal.
* `index.js`: Archivo principal que coordina el flujo de la simulación y muestra los resultados.
* `package.json`: Archivo de configuración del proyecto que define el nombre, la versión y especifica el uso del estándar CommonJS.
* `README.md`: Documento de texto con la presentación del equipo, descripción del sistema e instrucciones de uso.

## Instrucciones para Ejecutar el Proyecto

## 1. Clonar el repositorio
Descarga una copia exacta de este proyecto a tu computadora ejecutando en tu terminal:
```bash
git clone [https://github.com/Juan-Jose-Vega/TP_evaluativo.git](https://github.com/Juan-Jose-Vega/TP_evaluativo.git)