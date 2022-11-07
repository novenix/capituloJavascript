//estructuras de control
//Condiciones
//sentencia if/else
//nnos permite eejecutar un bloque de codigo
//si una condicion es cierta, y si no es cierta
//nos permite ejecutar otro bloque de codigo
var x =3 
debugger
if (x == '2'){
    // si x == 2 entra aca
    console.log(x, 'es un valor igual a 2')
}
else{
  // si x == 2 no es verdad entra aca
    console.log(x,'NO es un valor igual a 2')
}

//segundo ejemplo
var x =3 
debugger
if (x == '2'){
    // si x == 2 entra aca
    console.log(x + ' es un valor igual a 2')
}
else{
  // si x == 2 no es verdad entra aca
    console.log(x + ` NO es un valor igual a 2 y ${x} no es un valor string, es ${typeof x}`)
}
// else if

var x = 3
debugger
if(x === "2"){
    // si x === "2" entra aca
    console.log(x + ' es un valor igual a 2')
}
else if(x === 3){
    // si x === 3 entra aca
    console.log(x + ' es un valor igual a 3')
}
else{
    console.log(x + ` NO es un valor igual a 2 y ${x} no es un valor string, es ${typeof x}`)
}

//switch case
// es otra forma de escribir condiciones 
//se escribe el valor deseado de nuestra condicion y
// se ejecutara una linea de codigo

var x =2
debugger
switch(x){
    case "2":  //===
        console.log(x, "es un valor igual a 2 (string)" )
        break;
    case 3:
        console.log(x, "es un valor igual a 3")
        break;
    default:
        console.log(x, "no es igual a 2 ni tampoco a 3")
        break;
        
}

//bucles
// nos permite ejecutar bloques de codigo un numero determinado de veces

// for
//nos permite ejecutar bloques de codigo un numero determinado de veces
//sintaxis
/*for(inicialicacion; condicion; actualizacion){
    //codigo que se repito

}*/
/* Inicialicacion: se ejecuta antes de que empiece el bloque de codigo que
                    se va a arepetir
    condicion: define la condicion por la que el bloque de codigo
                se va a ejecutar
    actualizacion: se ejecuta despues de que se acabe el codigo que
                se va a repetir
 */

const cont = 10
for(x = 0;x < cont;x++){
    //codigo que se va a repetir
    console.log(x," x => contador :", cont)
}

//While 
//ejecutar bloque de codigo mientras que una condicion se cumpla

var x = 0
var conta =10
var decide = false
while ((x<= conta) &&  (decide == false)){
    if(x == 8){
        decide = true
        console.log(decide," decide")
    }

    console.log(x, "contador: ", conta)

    x++
}

//do while
//funciona de la misma manera que el while
//solo que siempre ejecuta almenos una vez el do

var decide = false
var conta =10
var y = 0
do {
    if(y == 8){
        decide = true
        console.log("cambia decide, termina programa")
    }
    
    console.log(y, "contador:", conta )
    y++
}
while((y<= conta) &&  (decide == false))
