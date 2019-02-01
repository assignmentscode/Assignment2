const getListOfBooks = require('./../../../src/helpers/getAllBooks');

describe('getListOfBooks () :', () => {
  it('should respond with status code 200 when request is made to list of books at API 1', async () => {
    const temp = await getListOfBooks();
    console.log(temp);
    expect(temp).toEqual(200);
  });
});
