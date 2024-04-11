//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052
/*
    Ejercicio 5: En un tramo de un rally los conductores no deben ir ni demasiado rápido 
    ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilómetros y 
    el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la 
    prueba en caso contrario es descalificado.
    Ejemplo: si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h.
    Estaría descalificado.
*/
const tramo = window.prompt("Ingrese el Tramo o distancia Recorrida en Kilometros");
const tiempo = window.prompt("Ingrese el Tiempo empleado en horas");

const total = tramo / tiempo;

if(total > 40 && total < 60){
    alert("En total recorrió "+ total + " Kilometros por Hora");
    alert("Pasate la Prueba");
}else{
    alert("En total recorrió "+ total + " Kilometros por Hora");
    alert("Ha sido Descalificado");
}




