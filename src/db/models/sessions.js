/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('sessions', {
        sid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        userId: DataTypes.STRING,
        expires: DataTypes.DATE,
        data: DataTypes.STRING(50000),
    }, {
        tableName: 'sessions',
    });
};
