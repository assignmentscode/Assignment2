const { server, start } = require('./../../../src/server');

describe('Server () :', () => {
  const optionGet1 = {
    method: 'GET',
    url: '/ping',
  };
  it('should respond with status code 200 when request is made to path "/ping"', async () => {
    const temp = await server.inject(optionGet1);
    expect(temp.statusCode).toEqual(200);
  });
  it('should respond with "pong" when requested at route "/ping"', async () => {
    const temp = await server.inject(optionGet1);
    expect(temp.result).toEqual('pong');
  });
  const optionGet2 = {
    method: 'GET',
    url: '/',
  };
  it('should respond with status code 404 when request is made to path "/"', async () => {
    const temp = await server.inject(optionGet2);
    expect(temp.statusCode).toEqual(404);
  });
  const optionGet3 = {
    method: 'GET',
    url: '/123*%',
  };
  it('should respond with status code 404 when request is made to path "123*%"', async () => {
    const temp = await server.inject(optionGet3);
    expect(temp.statusCode).toEqual(404);
  });
});
