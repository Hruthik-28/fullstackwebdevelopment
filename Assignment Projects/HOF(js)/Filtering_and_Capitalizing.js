// ----Filtering and Capitalizing: Books Published After 2010 with Author Names.-----
/* Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized. */


// Define an array of book objects
const books = [
    {title : "ToKillAMockingbird", author : "HarperLee", year : 1960},
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "Ready Player One", author: "Ernest Cline", year: 2011 },
    { title: "The Nightingale", author: "Kristin Hannah", year: 2015 },
    { title: "The Martian", author: "Andy Weir", year: 2011 },
    { title: "A Man Called Ove", author: "Fredrik Backman", year: 2012 },
    { title: "The Silent Patient", author: "Alex Michaelides", year: 2019 },
    { title: "Educated", author: "Tara Westover", year: 2018 }
];

// Filter out books published before 2010 and capitalize the author names
const filteredBooks = books.filter(book => book.year < 2010).map(book => {
    return { title : book.title, author : book.author.toUpperCase(), year:book.year }
});

// Print the final array of books with their capitalized author names
console.log(filteredBooks);