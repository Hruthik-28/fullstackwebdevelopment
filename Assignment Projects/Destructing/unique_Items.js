//------------------Only unique items are allowed.------------------
/*You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.*/

const array = [1, 2, 3, 4, 5, 6, 7, 1, 2, 5, 6]

function onlyUniqueItems() {
    const onlyUniqueItems = new Set([...array]);
    return onlyUniqueItems;
}

const uniqueItems = onlyUniqueItems(array);
console.log(uniqueItems);