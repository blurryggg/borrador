//ejercicio juan
//Necesitamos diseñar un programa que con 2 datos (el código del dulce 
//a comprar y el dinero que vamos a meter en la máquina para pagar) 
//logre decidir si entregar el dulceo no.
 const prompt = require( 'prompt-sync' )();
 var textN0 = "Producto         Codigo           precio"
 var textN1 = "Chocolate:       xc23             $12.50";
var textN2 = "Paleta :         c4f2             $5.75";
var textN3 = "chicle:          gt74             $4.25";
 var textN4 = "Galleta:         l3k8             $9.10";
 console.log(textN0, "\n", "\n" + textN1, "\n" + textN2, "\n" + textN3, "\n" + textN4, "\n");
 var codigo = prompt( "ingresa el codigo del producto: " );
if( codigo === "xc23" ){
    var cantidad = prompt( "ingresa la cantidad de dinero a pagar: " );
    if( cantidad < 12.50 ){
    console.log( "Dinero Insuficiente" );
}
if( cantidad == 12.50 ){
    console.log( "Compra de chocolate realizada con exito, Gracias por su preferencia:)" );
}
if( cantidad >12.50 ){
    var cambio = cantidad - 12.50;
    console.log( "Compra de chocolate realizada con exito, " + " Su cambio es" + cambio + " , Gracias por su preferencia:)" );
}
}
else if( codigo === "c4f2" ){
    var cantidad = prompt( "ingresa la cantidad de dinero a pagar: " );
    if( cantidad < 5.75 ){
        console.log( "Dinero insuficiente" );
    }
    if( cantidad === 5.75 ){
        console.log( "Compra de paleta realizada con exito, Gracias por su preferencia:)" );
    }
    if( cantidad > 5.75 ){
       cambio = cantidad - 5.75;
        console.log( "Compra de paleta realizada con exito, su cambio es: " + cambio + " Gracias por su preferencia:)"  );
    }
}
else if( codigo === "gt74"){
    var cantidad = prompt( "ingresa la cantidad de dinero a pagar: " );
    if( cantidad < 4.25 ){
        console.log( "Dinero insuficiente" );
    }
    if( cantidad == 4.25 ){
console.log( "Compra de chicle realizada con exito, gracias por su preferencia:)" );
    }
    if( cantidad > 4.25 ){
        cambio = cantidad - 4.25;
        console.log( "Compra de chicle realizada con exito, su cambio es: " + cambio  + " , Gracias por su preferencia:) " );
    }
}
else if( codigo === "l3k8" ){
    var cantidad = prompt( "ingresa la cantidad de dinero a pagar: " );
    if( cantidad < 9.10 ){
        console.log( "Dinero insuficiente" );
    }
    if( cantidad == 9.10 ){
        console.log( "Compra de galleta realizada con exito, Gracias por su preferencia:)" );
    }
    if( cantidad > 9.10 ){
        cambio = cantidad - 9.10;
        console.log( "Compra de galleta realizada con exito, su cambio es: " + cambio + ", Gracias por su preferencia:)" );
    }
}
else{
    console.log( "Codigo incorrecto, ingresa uno valido" );
}