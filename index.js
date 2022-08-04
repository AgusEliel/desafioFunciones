let nombreAlumno = prompt("ingrese el nombre del alumno");
let tri1 = 0;
let tri2 = 0;
let tri3 = 0;
let trimestres = parseFloat(3);
let promediar = 0;

function promedioTrimestre() {
    tri1 = parseFloat(prompt("Primer Trimestre"));
    tri2 = parseFloat(prompt("Segundo Trimestre:"));
    tri3 = parseFloat(prompt("Tercer Trimestre:"));

    promediar = (tri1 + tri2 + tri2) / 3;
    console.log("El promedio de", nombreAlumno + promediar);
}
