/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    const projects = sequelize.define('projects', {
        name: {
            type: DataTypes.STRING,
            unique: { msg: 'Project name must be unique.' },
        },
    }, {
        tableName: 'projects',
        indexes: [{ unique: true, fields: ['name'] }],
    });

    return projects;
};
