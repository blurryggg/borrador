//escribir un programa que cifre un mensaje
var am = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m' ];
var nz = [ 'n','o','p','q','r','s','t','u','v','w','x','y','z' ];
const prompt = require( 'prompt-sync' )();
cifrar();
function cifrar( mensaje ){
    var mensaje = prompt( 'inserta tu mensaje para cifrar o descifrar: ' );
    var mensajecifra = [];
    for( var i = 0; mensaje.length != mensajecifra; i++ ){
     for( var z = 0; z < 13; z++ ){
         if( mensaje[i] == am[z] ){
             mensajecifra[i] = nz[z];
             z = 13;
             console.log( mensajecifra[i] );
         }
         else if( mensaje[i] == nz[z] ){
            mensajecifra[i] = am[z];
            z = 13;
            console.log( mensajecifra[i] );
        }
        else if( mensaje != mensaje.toLowerCase() ){
            console.log( 'ingresa tu mensaje en minusculas' );
        }
     }
     if( mensaje.length == mensajecifra.length ){
        console.log( mensajecifra );
        break;
     }
    }
    
}