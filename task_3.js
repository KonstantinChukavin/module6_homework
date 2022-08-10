/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function isFunctionOne(numOne) {
    function isFunctionOTwo(numTwo) {
        return numOne + numTwo;
    }
    return isFunctionOTwo(7);
}

let result = isFunctionOne(2);

console.log(result);