// Build a feature for Store's Inventory.
/*Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees. */

// Define the exchange rate of 1 USD to 80 INR as a constant variable
const exchangeRate  = 80;

// Define the store's inventory as an object with item names as keys and their respective prices in US Dollars as values
const inventory = {
    iphone11: 499,
    iPhone11Pro: 899,
    iPhone11ProMax: 999,
    iphone12: 799,
    iPhone12Pro: 999,
    iPhone12ProMax: 1099,
};

// Use Object.entries() to convert the inventory object into an array of [key, value] pairs, then use map() to create a new array of [key, convertedValue] pairs
const inventoryPriceInInr = Object.entries(inventory).map(([key, value]) => [key, value * exchangeRate]);

// Use Object.fromEntries() to convert the inventoryInRupeesArray back into an object
const inventoryInInr = Object.fromEntries(inventoryPriceInInr);

// Output the new object with the converted prices in Rupees
console.log(inventory);
console.log(inventoryInInr);