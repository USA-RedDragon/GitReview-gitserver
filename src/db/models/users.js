const argon2 = require('argon2');

module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define('users', {
        admin: DataTypes.BOOLEAN,
        githubId: {
            type: DataTypes.INTEGER,
            unique: { msg: 'Github ID already in use.' },
        },
        email: {
            type: DataTypes.STRING,
            unique: { msg: 'Email address already in use.' },
        },
        login: {
            type: DataTypes.STRING,
            unique: { msg: 'Github login already in use.' },
        },
        gitPassword: {
            type: DataTypes.STRING,
        },
        name: DataTypes.STRING,
        avatarUrl: DataTypes.STRING,
    }, {
        indexes: [{ unique: true, fields: ['email', 'githubId', 'login'] }],
        hooks: {
            beforeSave: (user) => {
                if (user.changed('gitPassword')) {
                    return argon2.hash(user.gitPassword).then((hash) => {
                        user.gitPassword = hash;
                    });
                }
            },
        },
    });

    return users;
};
