//Definimos la funcion HolaMundo
function HolaMundo()
{
    console.log ("Hola Mundo!");
}


//invocamos la funcion hola mundo
HolaMundo ();
HolaMundo ();
HolaMundo ();
HolaMundo ();
// Esto sirve para no tener que estar poniendo "console.log" todo el tiempo, gracias a que solamente tenemos que ingresar la funcion una vez..
//Y tambien sirve para no repetir codigo

////////////////////////////////////////////////////////////////
//otro

function sumar(a,b)
{
    var resultado = a+b;
    return resultado;
}

suma = sumar(3,4);
console.log (suma);

//Surge el mismo ejemplo que con el ejemplo anterior (no hay que andar poniendo "console.log" todo el tiempo)
suma = sumar(4,4);
suma = sumar(7,4);
suma = sumar(2,4);


//////////////////////////////////////////////////
////otro
function sumar(a,b)
{
    var resultado = a+b;
    return a+b;
}

suma = sumar(3,4);
console.log (suma);

