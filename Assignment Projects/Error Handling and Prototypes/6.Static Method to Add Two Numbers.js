//Using Static Method to Add Two Numbers with Calculator Class

/**Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method. */

class Calculator {
    static add(a, b) {
        return `sum: ${a+b}`;
    }
}
let result =  Calculator.add(2, 5)
console.log(result); //sum: 7