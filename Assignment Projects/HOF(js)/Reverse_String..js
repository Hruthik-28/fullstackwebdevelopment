//----------------Reverse String-------------------
/*The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.*/

//giving a string input
const input = ".dlrow desrucca siht ni dennalp sa seog reve gnihtoN !ytilaer ot pu ekaW";


//function to reverse the string and print it
function toReverse() {
    const reversedInput = input.split("").reverse().join("");
    console.log(reversedInput);
}

//to cause delay of 2sec
setTimeout(toReverse, 2000);













 


