//-----------------Count the occurrences.-----------------
/**You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces. */


function wordCount(str) {
  const words = str.split(' '); // split string into array of words
  const countMap = new Map(); // create a new map to store word counts

  for (const word of words) {
    if (countMap.has(word)) {
      // if word already exists in the map, increment its count
      countMap.set(word, countMap.get(word) + 1);
    } else {
      // if word doesn't exist in the map, add it with a count of 1
      countMap.set(word, 1);
    }
  }

  return countMap;
}

const str = 'wake up to reality. Nothing ever goes as planned in this accursive world. wake up to reality.';
const countMap = wordCount(str);
console.log(countMap);