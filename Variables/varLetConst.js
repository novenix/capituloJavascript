//let
let hola = "saludo"
let valor = true

if(valor == true){
    let despido = "me despido"
  
    console.log(despido)
}

console.log(despido)
console.log(hola)

//segundo ejemplo
//let no puede volver a declararse pero si redefinirse
/*
let hola ="saludo"
console.log(hola)
let hola ="saludo" //error - redeclarar variable

hola = "otro saludo" //forma correcta - re definir variable
*/

//const
const saludar = "hola"
let valorif =2
if (valorif >1) {
    const desperdirse ="adios"
    console.log(desperdirse)
    
}
console.log(saludar)

// las variables primitivas no pueden volver a modificarse 
// ni redeclararse
const saludacion ="hola"
saludacion ="hola"

//objetos

const obj = {
    mensaje: "hola",
    letras: 4
}
obj.mensaje = "adios"
obj.letras = 5

//var
//es de contexto global
var holas = "hola"
var valores=2
if(valor> 1){
    var holas = "adios"
}
console.log(holas)
// var se puede volver a redefinir y re asignar
var holas ="hola"
console.log(holas)
var holas ="que pasa"
console.log(holas)
holas ="hola otra vez"
console.log(holas)