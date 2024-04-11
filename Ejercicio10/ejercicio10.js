//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052

/*  Ejercicio 10: Escribir un programa que pregunte al usuario su renta anual y muestre 
por pantalla el tipo impositivo que le corresponde.
*/

const rentaAnual = window.prompt("Ingrese su Renta Anual");

if(rentaAnual < 10000){
    alert("El impositivo que le corresponde es 5%");
}else if(rentaAnual >= 10000 && rentaAnual < 20000){
    alert("El impositivo que le corresponde es 15%");
}else if(rentaAnual >= 20000 && rentaAnual < 35000){
    alert("El impositivo que le corresponde es 20%");
}else if(rentaAnual >= 35000 && rentaAnual <= 60000){
    alert("El impositivo que le corresponde es 30%");
}else{
    alert("El impositivo que le corresponde es 45%");
}