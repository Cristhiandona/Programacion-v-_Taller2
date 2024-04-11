//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052
/*
    Ejercicio 7: Crea un programa que pida la nota de un estudiante en los tres trimestres
    del curso y calcule la nota promedio. El resultado que dará será suspenso si la 
    media es menor de 5, aprobado si está entre 5 y 7 y Notable por encima de 7.
    Ejemplo para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable
*/

const nota1 = parseFloat(window.prompt("Ingrese la nota del Primer Mes"));
const nota2 = parseFloat(window.prompt("Ingrese la nota del Segundo Mes"));
const nota3 = parseFloat(window.prompt("Ingrese la nota del Tercer Mes"));

const notaPromedio = (nota1 + nota2 + nota3) / 3;

if(notaPromedio < 5){

    alert("Su nota Promedio es: " + notaPromedio + " usted esta Suspendido");

}else if (notaPromedio >= 5 && notaPromedio <= 7) {

    alert("Su nota Promedio es: " + notaPromedio + " usted ha Aprobado");
    
}else{

    alert("Su nota Promedio es: " + notaPromedio + " usted a sido Calificado como Notable");

}


