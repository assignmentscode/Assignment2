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
    handler: (request, h) => h.response('HELLO WORLD'),

  }];
