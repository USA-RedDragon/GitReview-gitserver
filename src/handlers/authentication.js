module.exports = (type, repo, user, next) => {
    if (type == 'push') {
        user((username, password) => {
            console.log(username, password);
            next();
        });
    } else {
        next();
    }
};
