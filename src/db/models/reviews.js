/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    const reviews = sequelize.define('reviews', {
        vote: DataTypes.TINYINT,
    }, {
        tableName: 'reviews',
    });

    reviews.associate = function(models) {
        models.reviews.belongsTo(models.users, {
            foreignKey: {
                name: 'reviewer_id',
                allowNull: false,
            },
        });
        models.reviews.belongsTo(models.changes, {
            foreignKey: {
                name: 'change_id',
                allowNull: false,
            },
        });
    };

    return reviews;
};
