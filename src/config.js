const path = require('path');

module.exports = {
    repoPath: process.env.REPO_PATH || path.resolve(__dirname, '../repos'),
    autoCreate: Boolean(process.env.AUTO_CREATE_REPOS) || true,
    port: process.env.PORT || 29418,
};
