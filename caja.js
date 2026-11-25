const prompt = require("prompt-sync")();

let total = 0;
let cantidad = 0;
let precio;

do {
  precio = prompt("Ingresa el precio del producto: ");

  if (precio === null) {
    break;
  }

  precio = Number(precio);

  if (isNaN(precio) || precio < 0) {
    console.log("Error: ingrese un numero valido");
    continue;
  }

  if (precio !== 0) {
    total = total + precio;
    cantidad++;
  }

} while (precio !== 0);

console.log("Cantidad de productos: " + cantidad);
console.log("TOTAL A PAGAR: " + total);