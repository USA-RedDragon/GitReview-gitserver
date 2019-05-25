const config = require('./index');

module.exports = {
    database: config.db.database,
    username: config.db.username,
    password: config.db.password,
    host: config.db.host,
    dialect: config.db.dialect,
    dialectOptions: {
        timezone: 'local',
    },
    pool: {
        max: 10,
        min: 1,
        acquire: 30000,
        idle: 10000,
    },
    sync: {
        force: false,
        alter: true,
    },
    logging: false,
};
