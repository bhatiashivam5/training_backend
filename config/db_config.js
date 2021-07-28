require('dotenv').config({path:'./env'});
const mysql_host = process.env.HOST || "localhost";
const mysql_user = process.env.USER || "root";
const mysql_password = process.env.PASSWORD || ""; 
const mysql_DB = process.env.DB || "institute_management";  


let db = {
  host: mysql_host,
  user: mysql_user,
  password:mysql_password,
  database: mysql_DB,
  dialect: "mysql",
};
module.exports = db;

