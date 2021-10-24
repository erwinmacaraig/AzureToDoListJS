const Constants = require("../utilities/constants");
const Op = require("sequelize").Op;

module.exports = {
    development: {
        username: Constants.mysqlUsername,
        password: Constants.mysqlPassword,
        database: Constants.mysqlDatabase,
        host: Constants.mysqlHost,
        port: Constants.mysqlPort,
        dialect: "mysql",
        operatorsAliases: Op
    }
}