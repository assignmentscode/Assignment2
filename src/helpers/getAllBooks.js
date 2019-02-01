const axios = require('axios');

const listOfBooks = [];
const getListOfBooks = async () => {
  const result = await axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks');
  const bookObjects = result.data.books;
  return bookObjects;
};
// const getRatingOfBook = async (url) => {
//   const posts = await axios.get(url);
//   return posts.data;
// };
// const getRatingsOfBooks = (urls, ratingFunction) => {
//   const ratings = [];
//   const numberOfBooks = urls.length;
//   for (let i = 0; i < numberOfBooks; i += 1) {
//     const result = ratingFunction(urls[i]);
//     result.then((bookRating) => {
//       ratings[i] = bookRating;
//     });
//   }

//   return ratings;
// };
// const ratingsUrl = (id) => {
//   const baseUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';
//   const url = baseUrl.concat(id);
//   return url;
// };

const result = getListOfBooks();
result.then(async bookObjects => bookObjects);
// // Extracting id in separate array
// const ids = bookObjects.map(bookObject => bookObject.id);
// // Generating urls for all books
// const listOfUrls = [];
// ids.forEach(id => listOfUrls.push(ratingsUrl(id)));
// // Making request for each urls
// let bookRatings = [];
// bookRatings = await getRatingsOfBooks(listOfUrls, getRatingOfBook);
// console.log(bookRatings);

module.exports = getListOfBooks;
