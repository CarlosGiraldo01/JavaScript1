document.getElementById('calcular').addEventListener('click', function() {
let op1 = parseInt(prompt("Ingrese un número"));
let operador = prompt("Ingrese un operador (+, -, *, /, **, %)").trim();
let op2 = parseInt(prompt("Ingrese otro número"));

let respuesta = "";

if (operador === "+") {
    respuesta = op1 + op2;
} else if (operador === "-") {
    respuesta = op1 - op2;
} else if (operador === "*") {
    respuesta = op1 * op2;
} else if (operador === "/") {
    if (op2 === 0) {
        respuesta = "ERROR: ¡NO SE PUEDE DIVIDIR POR 0!";
    } else {
        respuesta = op1 / op2;
    }
} else if (operador === "**") {
    respuesta = op1 ** op2;
} else if (operador == "%") {
    respuesta = op1 % op2;
} else {
    respuesta = "ERROR: Operador No Válido!"; 
}
document.getElementById('respuesta').textContent = 'Resultado: ' + respuesta;
});
