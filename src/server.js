const Hapi = require('hapi');
const routes = require('./routes');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route(routes);

const start = async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};
module.exports = { server, start };
