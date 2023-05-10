// Check the presence using closures.

/**Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise. */

function numChecker(array){
    return function(num) {
        return array.includes(num);
    }
}

let arr = [1, 2, 3, 4 ,5 ];
const checkNum = numChecker(arr);

console.log(checkNum(10));

