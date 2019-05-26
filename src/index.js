const app = require('./app');
const config = require('./config');

app.listen(config.port, () => {
    console.log(`node-git-server running at http://localhost:${config.port}`);
});
