//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052

/*  Ejercicio 8: Para tributar un determinado impuesto se debe ser mayor de 16 años y 
    tener unos ingresos iguales o superiores a 1000 € mensuales. Escribir un programa 
    que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla 
    si el usuario tiene que tributar o no.
*/

const edad = window.prompt("Ingrese su edad");
const ingresos = window.prompt("Ingrese sus ingresos mensuales en Euros");

if(edad > 16 && ingresos >= 1000){

    alert("Usted debe Tributar");

}else{

    alert("No tiene que Tributar");

}