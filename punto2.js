let sueldo = prompt("Ingrese su sueldo");
let descuento = 0;

if (sueldo <= 1000) {
    descuento = (sueldo * 5)/100;
}

if (sueldo > 1000 && sueldo <= 2000) {
    descuento = (sueldo * 10)/100;
}

if (sueldo > 2000) {
    descuento = (sueldo * 15)/100;
}

let sueldoNeto = sueldo - descuento;
console.log("Sueldo base: " + sueldo)
console.log("Descuento de $: " + descuento)
console.log("Su sueldo neto es de $: " + sueldoNeto)