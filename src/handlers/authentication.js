const db = require('../db/models');
const argon2 = require('argon2');

module.exports = ({ type, repo, user }, next) => {
    return new Promise((resolve, reject) => {
        user((username, password) => {
            db.users.findOne({
                where: { login: username },
            }).then((foundUser) => {
                argon2.verify(foundUser.gitPassword, password).then((verified) => {
                    verified ? resolve() : reject(new Error('Invalid Username or Password'));
                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        });
    });
};
