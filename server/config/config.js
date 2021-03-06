// const Constants = require("../utilities/constants");
const Op = require("sequelize").Op;
const path = require("path");
const fs = require("fs");

if(process.env.NODE_ENV != "production") {
    require("dotenv").config({
        path: path.join(__dirname, '..', '.env')
    });
}

module.exports = {
    development: {
        dialect: "mysql",
        operatorsAliases: Op,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT
    },
    production: {
        dialect: "mysql",
        operatorsAliases: Op,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        ssl: true,
        dialectOptions: {
            ssl: {
                encrypt: true,
                ca: fs.readFileSync(path.resolve(__dirname, "./BaltimoreCyberTrustRoot.crt.pem"))
            }
        }
    }
}