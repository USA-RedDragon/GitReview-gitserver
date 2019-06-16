/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    const changes = sequelize.define('changes', {
        changeId: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: { msg: 'Change ID must be unique.' },
        },
        message: DataTypes.TEXT,
        branch: DataTypes.STRING,
        topic: DataTypes.STRING,
        author_name: DataTypes.STRING,
        author_email: DataTypes.STRING,
    }, {
        tableName: 'changes',
        indexes: [{ unique: true, fields: ['changeId'] }],
    });

    changes.associate = function(models) {
        models.changes.belongsTo(models.users, {
            foreignKey: {
                name: 'assignee_id',
                allowNull: false,
            },
        });
        models.changes.belongsTo(models.users, {
            foreignKey: {
                name: 'owner_id',
                allowNull: false,
            },
        });
        models.changes.belongsTo(models.projects, {
            foreignKey: {
                name: 'project_id',
                allowNull: false,
            },
        });
    };

    return changes;
};
