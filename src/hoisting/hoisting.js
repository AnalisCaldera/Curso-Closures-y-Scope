nameOfDog();

function nameOfDog(){
    console.log(`El mejor perro es ${namePerro}`);
} // Error en la ejeccion del codigo

// Pero si agregamos o definimos una varible si se ejecuta el codigo
var namePerro;

// "El mejor perro es _undefined_"

let array = [2, 4, 6]

function multiplyElements(array) {
    for (let i = 0; i < array.length; i++){
       array[i] = array[i] * 2;
    }
    console.log(array);
 }

 multiplyElements(array);

