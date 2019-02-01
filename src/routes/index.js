const booksWithRaings = require('./../helpers/getAllBooks');

module.exports = [
  {
    method: 'GET',
    path: '/ping',
    handler(request, h) {
      return 'pong';
    },
  },
  {
    method: 'GET',
    path: '/booksAndRatings',
    handler: booksWithRaings,
  }];
