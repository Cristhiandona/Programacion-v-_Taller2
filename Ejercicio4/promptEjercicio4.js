//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052
/*
    Ejercicio 4: Este programa te ayuda a viajar. El programa pide al usuario si va a 
    viajar con coche, tren, bicicleta o autobús. Si va en tren o autobús le recordará que 
    lleve dinero para el billete.
    Ejemplo. el cliente pide ir en tren, aparecerá el mensaje "lleva dinero para el 
    ticket"
*/

const transporte = window.prompt("¿En que medio de transporte va a viajar: Coche, Tren, Bicicleta o Autobús");
tren = "tren";
autobus = "autobus";

const convertirMin = transporte.toLowerCase();

if(convertirMin == tren || convertirMin == autobus ){
    alert("Recuerda llevar el Ticket");
}else{
    alert("No debes Llevar ningún Ticket");
}








