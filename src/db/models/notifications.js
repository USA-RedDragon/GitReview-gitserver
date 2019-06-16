/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    const notifications = sequelize.define('notifications', {
        title: DataTypes.STRING,
        text: DataTypes.TEXT,
        action: DataTypes.STRING,
        global: DataTypes.BOOLEAN,
    }, {
        tableName: 'notifications',
    });

    notifications.associate = function(models) {
        models.notifications.belongsTo(models.users, {
            foreignKey: {
                name: 'source_id',
                allowNull: false,
            },
        });
        models.changes.belongsTo(models.users, {
            foreignKey: {
                name: 'destination_id',
                allowNull: true,
            },
        });
    };

    return notifications;
};
