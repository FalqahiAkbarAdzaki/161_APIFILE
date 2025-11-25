require("dotenv").config();

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  database_test: process.env.DB_DATABASE_TEST,
  database_production: process.env.DB_DATABASE_PRODUCTION
}
const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  database_test: process.env.DB_DATABASE_TEST,
  database_production: process.env.DB_DATABASE_PRODUCTION
}

const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_TEST,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  database_test: process.env.DB_DATABASE_TEST,
  database_production: process.env.DB_DATABASE_PRODUCTION
}

module.exports = { development, production, test };
