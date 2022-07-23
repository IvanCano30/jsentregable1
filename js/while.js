
// promedio de un numero ingresado
let cuantos = 0, suma= 0, numero, val ;

numero = +prompt("favor de ingresar el numero: ");
val = numero;

while(val > 0){
    suma = suma + (val % 10);
    cuantos = cuantos + 1;
    val = parseInt(val / 10 );
}
console.log( "\nEl promedio de los digitos de " + numero  + " es: " + (suma / cuantos));


