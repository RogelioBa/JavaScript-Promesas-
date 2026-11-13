import Estudiante from "./Estudiante.mjs"

let estudiante = new Estudiante();
estudiante.nombre = `Roger`;
estudiante.carrera = `ISW`;

console.log(estudiante);
console-log(estudiante.saludar());
console.log(estudiante.verPromedio())