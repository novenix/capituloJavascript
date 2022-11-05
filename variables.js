//datos primitivos
//string
var texto = "hola mundo"
document.writeln("</br> texto: ",texto, " ",typeof texto )
var texto1 = 'hola mundo'
document.writeln("</br> texto: ",texto1," ",typeof texto )
var texto2 =  `hola mundo`
document.writeln("</br> texto: ",texto2," ",typeof texto )

//number
//maximo podemos guardar un numero menor a 2^53 
var num = 10
document.writeln("</br> texto: ",num, " ",typeof num )
//big int todos los numeros mayores a 2^53
//max_safe_integer
var bigNum = BigInt(9007199254740991)
document.writeln("</br> texto: ",bigNum, " ",typeof bigNum )



//boolean
var bool = true
document.writeln("</br> texto: ",bool, " ",typeof bool )
var bool = false
document.writeln("</br> texto: ",bool, " ",typeof bool )

//undefined
var no_definida;
document.writeln("</br> texto: ",no_definida, " ",typeof no_definida )

//symbol
var valueSymbol = Symbol("hola")

//arreglos
var dias_de_la_semana= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
document.writeln("</br> texto: ",dias_de_la_semana, " ",typeof dias_de_la_semana )
var horas_del_dia = [1,2,3,4,5,6,7,8,9,10,11,12]
document.writeln("</br> texto: ",horas_del_dia, " ",typeof horas_del_dia )