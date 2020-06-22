const { someFunction } = require('../src/index');

describe('Some Function in another thread', () => {
  it('it works', async () => {
    const params = 1;
    const res = await someFunction(params);
    console.assert(res === params);
  });
});
