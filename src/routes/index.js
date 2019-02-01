module.exports = [{
  method: 'GET',
  path: '/ping',
  handler(request, h) {
    return 'pong';
  },
}];
