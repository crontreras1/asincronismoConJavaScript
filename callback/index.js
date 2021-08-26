// Primero, se crea una función.

function sum(num1, num2) {
    return num1 + num2;
};

//Ahora vamos a crear esa función que recibe como argumento la función que se creo antes.

function calc(num1, num2, callback) {
    return callback(num1, num2)
};

//En el bloque anteriór, podemos utilizar cualquier palabra que no sea callback. Simplemente se suele utilizar la palabra callback para así distinguirlo. 

console.log(calc(23, 32, sum));

//Con este console.log y despues de correr el cógigo, la respuesta es 55. La suma se realizó. 

//Otro ejemplo. este se va a tratar más de tiempo. Como esperar a que algo suceda. 

//Nuevo ejemplo:

function date (callback) {
    console.log(new Date);
    setTimeout (function () {
        let date = new Date;
        callback(date);
    }, 3000)
};

function prinDate(dateNow) {
    console.log(dateNow);
};

date(prinDate);

//el resultado de este código es: 
/* 2021-08-26T16:10:06.205Z 
   2021-08-26T16:10:09.281Z */