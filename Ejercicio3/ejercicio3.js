//Estudiante: Cristhian Orlando Aguirre Cardona
/*
    Ejercicio 3: Generar un código determine la diferencia ( resta ) entre dos
números de tal manera que la resta siempre se haga del numero mayor 
hacia el numero menor
*/

let numero1 = 2;
let numero2 = 6;

if(numero1 > numero2 || numero1 == numero2 ){

    operacion = numero1 - numero2;
    console.log('El resultado de la Resta es: ' + operacion);

}else{

    operacion2 = numero2 - numero1;
    console.log('El resultado de la Resta es: ' + operacion2);
    
}
