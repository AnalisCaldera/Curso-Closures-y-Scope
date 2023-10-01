// CLASE GLOBAL SCOPE

var a;          //declaracion
var b = 'b';    //declaramos y asignamos
b = 'bb';       //reasignando
var a = 'aa';   //redeclaracion


//
var fruit = "Apple";

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//
function pais(){
    paises = 'Venezuela'; // Al hacerlo asi, se toma como variable global.
    console.log(paises); // Hay que tener cuidado de declarar una variable global por accidente
}

pais();
console.log(paises);
