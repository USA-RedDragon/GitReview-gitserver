const GitServer = require('node-git-server');
const config = require('./config');
const authenticationHandler = require('./handlers/authentication');
const pushHandler = require('./handlers/push');
const fetchHandler = require('./handlers/fetch');
const infoHandler = require('./handlers/info');

module.exports = () => {
    const repos = new GitServer(
        config.repoPath,
        {
            autoCreate: config.autoCreate,
            authenticate: authenticationHandler,
        }
    );

    repos.on('push', pushHandler);
    repos.on('fetch', fetchHandler);
    repos.on('info', infoHandler);
    repos.listen(config.port, () => {
        console.log(`node-git-server running at http://localhost:${config.port}`);
    });
};
