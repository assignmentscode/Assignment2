const axios = require('axios');

const getListOfBooks = async () => {
  const result = await axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks');
  const bookObjects = result.data.books;
  return bookObjects;
};
const getRatingOfBook = async (url) => {
  const posts = await axios.get(url);
  return posts.data;
};
const getRatingsOfBooks = (urls, ratingFunction) => {
  const numberOfBooks = urls.length;
  const promisesOfAxiosCall = [];
  for (let i = 0; i < numberOfBooks; i += 1) {
    promisesOfAxiosCall[i] = ratingFunction(urls[i]);
  }
  return Promise.all(promisesOfAxiosCall).then(ratingValue => ratingValue);
};
const ratingsUrl = (id) => {
  const baseUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
  const url = baseUrl.concat(id);
  return url;
};

const sortByAuthorName = (arrayOfObjects) => {
  const finalResponse = {};
  let uniqueAuthors = [];
  uniqueAuthors.push(arrayOfObjects[0].Author);
  uniqueAuthors = arrayOfObjects.filter((bookObject) => {
    if (uniqueAuthors.includes(bookObject.Author)) {
      return false;
    }
    return true;
  });
  uniqueAuthors.forEach((author) => {
    const sameAuthorBooks = arrayOfObjects.filter(currentBook => currentBook.Author === author);
    finalResponse.author = sameAuthorBooks;
  });
  return finalResponse;
};


const getBookDetailsWithRatings = () => {
  const result = getListOfBooks();
  return result.then(async (bookObjects) => {
  // This book object will contain ratings also
    const newBookArray = [];
    // Extracting id in separate array
    const ids = bookObjects.map(bookObject => bookObject.id);
    // Generating urls for all books
    const listOfUrls = [];
    ids.forEach(id => listOfUrls.push(ratingsUrl(id)));
    // Making request for each urls
    let bookRatings = [];
    bookRatings = await getRatingsOfBooks(listOfUrls, getRatingOfBook);
    const numberOfBooks = listOfUrls.length;
    for (let i = 0; i < numberOfBooks; i += 1) {
      const tempBookObject = {};
      tempBookObject.id = bookObjects[i].id;
      tempBookObject.Name = bookObjects[i].Name;
      tempBookObject.Author = bookObjects[i].Author;
      tempBookObject.rating = bookRatings[i].rating;
      newBookArray.push(tempBookObject);
    }
    return newBookArray;
  });
};
getBookDetailsWithRatings();

module.exports = getBookDetailsWithRatings;
