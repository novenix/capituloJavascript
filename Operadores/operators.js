//Operadores de asignacion
var x = 1 
var y = 2
//buena practica iniciar variables
//numericas desde 0
var resultado = 0
//adicion
resultado = x + y

x = x + y
x += y

resultado += x +y

//resta
var x = 1 
var y = 2

var x = y-x
y -= x

//multiplicacion
var x = 1 
var y = 2
x = x * y
x *= y

//division -> cociente
var x = 20 
var y = 2
x = x / y
x /= y

//(MODULO)-> residuo 
var x = 20 
var y = 2
x = x % y
x %= y

var x = 10
var y = 7
x = x % y
x %= y

// exponenciacion
var x = 3
var rta
rta = x **2
rta = x ** x

//negacion

var x = 10
var y = 7

var x = y-x
var y = -7

//positivo unario
var x = "3"
x =   +x


//incremento (++) -> x + 1
//sumar 1 al valor acual

++variable//prefijo: nos va a devolver el valor de su operando despues de agregar el 1 (+1)

var variable = 2
++variable


variable++//sufijo: nos va a devolver el valor de su operando antes de agregar 1 (+1)
var variable = 2
variable++

//decremento (-- ) x -1
--variable //prefijo: nos va a devolver el valor de su operando despues de restar el 1 (-1)
var variable = 2
--variable

variable--//sufijo: nos va a devolver el valor de su operando antes de restar 1 (-1)
var variable = 2
variable--