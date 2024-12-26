const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
});

sequelize
    .authenticate()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection failed:", err));

module.exports = sequelize;