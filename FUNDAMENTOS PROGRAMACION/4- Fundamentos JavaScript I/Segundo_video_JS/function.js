//    console.log ("Hola mundo");
//
//    let numero1= 3;
//    let numero2= 4;
//
//    let resultado = numero1 + numero2;
//
//    console.log ("La suma de numero1 y numero2 es " + resultado);


///////////////////////////////////////////////////////////////

/** 
 
document.getElementById ('boton') . onclick=function name() {
    console.log ("Capturamos el evento click");
    document.getElementById("demo").innerHTML ="Estamos probando nuestro primer evento en JS";
}

*/

/** 
 
document.addEventListener ('click', function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML ="Estamos probando nuestro primer evento en JS";
});

*/

document.getElementById ('boton').addEventListener ('click', function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML ="Estamos probando nuestro primer evento en JS";
});

document.getElementById ('boton_color').addEventListener ('click', function(){
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById ('boton_default').addEventListener ('click', function(){
    document.body.style.backgroundColor = 'blue';
});

document.getElementById ('boton_ocultar').addEventListener ('click', function(){
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.lenght; i++)
{
    collection[i].style.backgroundColor = "aqua";
}
