const path = require('path');
const GitServer = require('node-git-server');

function init() {
    const repos = new GitServer(path.resolve(__dirname, '../repos'), {
        autoCreate: true,
        authenticate: (type, repo, user, next) => {
            if (type == 'push') {
                user((username, password) => {
                    console.log(username, password);
                    next();
                });
            } else {
                next();
            }
        },
    });
    const port = 29418;

    repos.on('push', (push) => {
        console.log({ 'push.pushType': push.pushType });
        console.log({ 'push.repo': push.repo });
        console.log({ 'push.branch': push.branch });
        console.log({ 'push.commit': push.commit });
        push.accept();
    });

    repos.on('fetch', (fetch) => {
        console.log(`fetch ${fetch.commit}`);
        fetch.accept();
    });

    repos.listen(port, () => {
        console.log(`node-git-server running at http://localhost:${port}`);
    });
}

module.exports = init;
