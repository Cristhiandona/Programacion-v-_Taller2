//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052
/*
    Ejercicio 4: Este programa te ayuda a viajar. El programa pide al usuario si va a 
    viajar con coche, tren, bicicleta o autobús. Si va en tren o autobús le recordará que 
    lleve dinero para el billete.
    Ejemplo. el cliente pide ir en tren, aparecerá el mensaje "lleva dinero para el 
    ticket"
*/

let medioTransporte = prompt('Ingrese el medio de transporte en el cual va a viajar',0);
console.log(medioTransporte);

const dataFromConsole = process.argv;
const opcion1 = dataFromConsole[2];

if(opcion1 == 'tren'){
    console.log("Lleve dinero para el ticket");
}







