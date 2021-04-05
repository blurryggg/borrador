//ejercicio dron
//[Aro bajo, aro bajo, tobogán derecho, aro alto, tobogán izquierdo, aro alto]
const prompt = require( 'prompt-sync' )();
console.log( 'Escribe on para prender el dron: ' );
var encendido = prompt( 'apagado: ' );
var contadordeaciertos = 0;
var contadordefallos = 0;
var arreglov = ['Aro bajo', 'Aro bajo', 'tobogan derecho', 'aro alto', 'tobogan izquierdo', 'aro alto', 'aro alto', 'Aro bajo'];

if( encendido == 'on' ){
    console.log( 'Buenas tardes:D, las acciones que se pueden realizar son: ' );
    console.log( 'subir   ' + 'bajar    ' + 'girar derecha     ' + 'girar izquierda' );
    for( var i = 0; i < 12; i++ ){
        console.log( arreglov[i] );
        accion();
        console.log(  'fallos: ' + contadordefallos + "  aciertos: " + contadordeaciertos );
        if( contadordeaciertos == 6 ){
            console.log( 'Ganaste, Felicidades:D' );
            break;
        }
        if( contadordefallos == 2 ){
            console.log( 'Fallaste:c, intenta de nuevo:D' );
            break;
        }
    }
    if( contadordeaciertos == 6 ){
        console.log( 'Bien hecho, ahora apaga el dron:D, para apagar escribe off' );
       var apagado = prompt( 'encendido: ' );
    }
}
else{
    console.log( 'debes prender el dron para empezar:c' );
}

function accion( a ){
    a = prompt( 'ingresa la accion: ' );
    if( arreglov[i] == 'Aro bajo' && a == 'bajar' ){
        contadordeaciertos++;
    }
    else if( arreglov[i] == 'aro alto' && a == 'subir' ){
        contadordeaciertos++;
    }
    else if( arreglov[i] == 'tobogan derecho' && a == 'girar derecha' ){
        contadordeaciertos++;
    }
    else if( arreglov[i] == 'tobogan izquierdo' && a == 'girar izquierda' ){
        contadordeaciertos++;
    }
    else{
        contadordefallos++;
    }
}