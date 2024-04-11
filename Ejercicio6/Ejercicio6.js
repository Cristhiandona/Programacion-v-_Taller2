//Estudiante: Cristhian Orlando Aguirre Cardona - Cedula: 1088307052
/*
    Ejercicio 6: Una tienda aplica un descuento del 15% para las compras que incluyan más 
    de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe 
    comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio 
    de cada uno.
    Ejemplo si compras 20 artículos de 10 dólares se te descuenta un 15% del total 
    pagarías 20*10 - 20*10*0.15 = 170 dólares.
*/
const cantidadArticulos = window.prompt("Ingrese la cantidad de Articulos Iguales");
const precioArticulos = window.prompt("Ingrese el precio unitario del Articulo");
const total = cantidadArticulos * precioArticulos;

if(cantidadArticulos > 10 && precioArticulos > 40){
    alert("Se aplicará un descuento del 15%");
    descuento = total * 0.15;
    alert("En total Cancela " + descuento + " con el descuento aplicado");
}else{

    alert("El Total de la Factura Sería: " + total + " euros");
}


