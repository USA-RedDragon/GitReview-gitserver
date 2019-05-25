const path = require('path');

module.exports = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USERNAME || 'username',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_DATABASE || 'database',
        dialect: process.env.DB_DIALECT || 'mariadb',
    },
    repoPath: process.env.REPO_PATH || path.resolve(__dirname, '../../repos'),
    autoCreate: Boolean(process.env.AUTO_CREATE_REPOS) || false,
    port: process.env.PORT || 29418,
};
