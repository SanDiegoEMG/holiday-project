module.exports = function(sequelize, DataTypes) {
    var BurgerModel = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
    });
    return BurgerModel;
}