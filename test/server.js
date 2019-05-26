const test = require('ava');
const app = require('../src/app');

test('Server Runs', async (t) => {
    app.listen();
    app.close();
    t.pass();
});
