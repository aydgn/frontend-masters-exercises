// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookname) {
  if (!bookname.includes("Great")) {
    favoriteBooks.push(bookname);
  }
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
  const totalBooks = favoriteBooks.length;
  console.log("Total number of books: " + totalBooks);
  for (book of favoriteBooks) {
    console.log(book);
  }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
