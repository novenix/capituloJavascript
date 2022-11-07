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


//Operadores de comparacion
// igual (==)
var x = "3" 
"3" == x // true -> es verdad
'3' == 3 // true -> es verdad
x == 2 // false -> NO es verdad
x == "2" // false -> NO es verdad

// NO es igual
var x = 5
x != 4 // true -> es verdad
x != "2" // true -> es verdad
x != "5" // false -> NO es verdad
x != 5 // false -> NO es verdad

// comparacion estricta
//estrictamente igual (===)
var x = 3
var y = "3"
y === x // false -> NO es verdad porque "3" no es igual a 3
x === "3" // false -> NO es verdad
x === 3 // true -> es verdad

// estrictamente no igual 
var x = 3
var y = "2"
var z = "3"
y !== x // true -> es verdad
z !== x // true -> es verdad

//mayor que (>)
//devuelve true si el operando izquierdo es mayor al 
//operando derecho
var x = 5
var y = 3

x > y // true -> es verdad
x > 3
x > "3"

//mayor o igual (>=)
//operando izquierdo es mayor o igual a operando 
//derecho
var x = 5
var y = 3
var z = 5

x >= y // true -> es verdad
x >= 3// true -> es verdad
x >= "3"// true -> es verdad

z >= x// true -> es verdad
z > x //// false -> NO es verdad

//menor que (<)
// devuelve true si el operando izquierdo es menor que el
//operando derecho

var x = 5
var y = 3

x < y //false
x < 3 //false
x < "3" //false
y < x //true

//menor o igual (<=)
//devuelve true si el operado izquierdo es menor 
//o igual al operando derecho

var x = 5
var y = 3
var z = 5

x <= y 
x <= 3
x <= "3"

z <= x
z < x 

//operadores logicos
//nos permite conectar dos formulas bien formadas
//de modo de que vamos a tener un valor de verdad de
//esta formula comuesta
//Operador logico AND (Y)
//expr1 && expr2;

var x = 5
var y = 3
var z = 5
var expr1 = x >= y //true
var expr2 = z >= x //true

var rta = expr1 && expr2 //por tanto RTA es true
//ambos operandos deben ser true para que AND devuelva true

true && true    // t && t devuelve true
true && false   // t && f devuelve false
false && true   // f && t devuelve false
false && false  // f && f devuelve false
//&& and nos devuelve true si ambos operandos son true

'hola' && 'otra palabra' //return 'otra palabra'
//hola && otra palbra => otra palabra
false && 'hola' // false

'hola' && false // false
//hola && false => false
false && (3==4) //false
//false && false => false

 (3==4) && false //false
 //false && false => false
 (3==3) && 'otra palabra' // otra palabra
 //true &&  'otra palabra' => otra palabra
 (3==3) && (4==4) //true
 //true &&   true  => true
 (4 >= -1) && (3 ===3) //true
 //true   &&   true  => true
 (3 == 2) && (2 ==2 )
 //false  &&  true => true

 // operador Logico OR (o) ||
 //expr1 || expr2
 // cuando se usa con valores booleanso devuelve true
 // si alguno de los dos operandos es true 
 //de lo contrario devuelve false

 true || true    // t || t devuelve true
 true || false   // t || f devuelve true
 false || true   // f || t devuelve true
 false || false  // f || f devuelve false


 var x = 5
 var y = 3
 var z = 5
 var expr1 = x <= y //false
 var expr2 = z >= x //true
 
 var rta = expr1 || expr2 

false || 'hola' //'hola'
'otra palabra' || false // otra palabra
false || false //false
(3 == 2) || (2 ==2 ) //true
// false || true   => true
(4 >= -1) || (3 ===3) //true
//true  ||   true  => true
(3==4) || false //false
//false || false => false

// Not Logico (negación lógica) (!)
//vamos a negar las afirmacions con !
false //false
true // true
(3==4) || false //false

!false // TRUE
!true // false
!(3==4) || false //
