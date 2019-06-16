/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    const messages = sequelize.define('messages', {
    }, {
        tableName: 'messages',
    });

    messages.associate = function(models) {
        models.messages.belongsTo(models.users, {
            foreignKey: {
                name: 'from_id',
                allowNull: false,
            },
        });
        models.messages.belongsTo(models.changes, {
            foreignKey: {
                name: 'change_id',
                allowNull: false,
            },
        });
    };

    return messages;
};
