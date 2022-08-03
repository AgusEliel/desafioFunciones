/* function sumar(num1, num2) {
    console.log("resultado", num1 + num2)
}

function multiplicar(num1, num2) {
    console.log("resultado", num1 * num2)
}

function restar(num1, num2) {
    console.log("resultado", num1 - num2)
}

function dividir(num1, num2) {
    console.log("resultado", num1 / num2)
}


function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*")); */



/* function promedio (primerTrimestre, segundoTrimestre, tercerTrimestre){
    let notaFinal = primerTrimestre + segundoTrimestre + tercerTrimestre
} */

/* let nombreAlumno = prompt("Ingrese el nombre del alumno");

let primerTrimestre = parseInt(prompt("Nota del primer trimestre"));
let segundoTrimestre = parseInt(prompt("Nota del primer trimestre"));
let tercerTrimestre = parseInt(prompt("Nota del primer trimestre"));

let notaFinal = primerTrimestre + segundoTrimestre + tercerTrimestre

let promedio = notaFinal / 3

if (notaFinal == 21){
    console.log(nombreAlumno + " esta aprobado con un promedio de " + promedio)
}

else if (notaFinal > 21){
    console.log(nombreAlumno + " esta aprobado con un promedio de " + promedio)
}

else if (notaFinal < 21){
    console.log(nombreAlumno + " no pudo aprobar porque su promedio fue " + promedio)
} */


function CalcularPromedio(){
    let v1 = document.getElementById("n1").value;
    let v2 = document.getElementById("n2").value;
    let v3 = document.getElementById("n3").value;
    let pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML=pro;
}







