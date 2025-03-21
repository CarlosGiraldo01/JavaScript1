let pais = prompt("Ingrese su país")
let idioma = ""

if (pais === "colombia") {
    idioma = "Español";
} else if (pais === "italia") {
    idioma = "francés"
} else if (pais === "alemania") {
    idioma = "alemán"
} else if (pais === "japón") {
    idioma = "japones"
} else if (pais === "rusia") {
    idioma = "ruso"
} else {
    console.log("No existe el país!");
}
console.log("En " + pais + " se habla: " + idioma);