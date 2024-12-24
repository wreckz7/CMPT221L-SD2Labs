/*
 Awais Razaque - Lab 5: Books Objects
 Marist CMPT 221L Fall 2024
*/

// Iteration 1 | Books Array
let booksArray = [];

let book1 = 
{
  title: "The Old Man and the Sea", 
  pages: 128, author: "Ernest Hemingway", 
  details: {
    language: "English", 
    description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }};

let book2 = 
{
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
    language: "English",
    description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
}};

let book3 = 
{
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention..."
}};

let book4 =
{
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  detatils: {
    language: "English",
    description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
}};
booksArray.push(book1);
booksArray.push(book2);
booksArray.push(book3);
booksArray.push(book4);

// Iteration 2 | Book Details
function getBookDetails(bookObject) {
  console.log(bookObject.title + " - " + bookObject.author + " - " + booksObject.pages + " pages");
}

// Iteration 3 | Delete Language
for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}

// Iteration 4 | Estimated Reading Time
for (let j = 0; j < booksArray.length; j++) {
  booksArray[i].readtime = Math.ceil((booksArray[i].pages * 500) / 90);
}