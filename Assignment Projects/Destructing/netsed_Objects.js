//------------------- Nested Objects--------------------

/**Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below. */

const person = {
    name:"Mithun",
    age: 21,
    adress: {
      street: "B8, Block B, Industrial area.",
      city:"Banglore",
      state: "Karnataka"
    }
  };
  
  function personInfo() {
    const {name, adress:{street}} = person;
    console.log({name, street});
  }
  
  personInfo(person);