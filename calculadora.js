document.getElementById('calcular').addEventListener('click', function() {
    event.preventDefault();


let op1 = parseInt(document.getElementById("op1").value);
let operador = document.getElementById("operador").value;
let op2 = parseInt(document.getElementById("op2").value);
let respuesta;

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
document.getElementById('respuesta').innerText = 'Resultado: ' + respuesta;
});
