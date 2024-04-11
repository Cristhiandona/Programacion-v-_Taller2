//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052

/*  Ejercicio 9: Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo 
al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la 
M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un 
programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que 
le corresponde.
*/

const nombre = window.prompt("Ingrese su nombre");
const sexo = window.prompt("Ingrese su sexo - Masculino o Femenino");

const converMinNombre = nombre.toLowerCase();
const converMinSexo = sexo.toLowerCase();
const letraNombre = nombre.charAt(0);
const letraSexo = sexo.charAt(0);

const arrayMujeres = ['a','b','c','d','e','f','g','h','i','j','k','l'];
const arrayHombre = ['o','p','q','r','s','t','u','v','w','x','y','z'];

if(arrayMujeres.includes(letraNombre) && letraSexo == "f" || arrayHombre.includes(letraNombre) && letraSexo == "m"){
    
    alert("Te corresponde el grupo A");
    
}else{

    alert("Te corresponde el grupo B");

}








