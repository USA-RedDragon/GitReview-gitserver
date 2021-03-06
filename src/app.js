const GitServer = require('node-git-server');
const config = require('./config');
const authenticationHandler = require('./handlers/authentication');
const pushHandler = require('./handlers/push');
const fetchHandler = require('./handlers/fetch');
const infoHandler = require('./handlers/info');

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

module.exports = repos;
