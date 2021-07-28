const dbConfig = require("../config/db_config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models
db.user = require("./users_model")(sequelize, Sequelize);
db.role = require("./roles_model")(sequelize, Sequelize);
db.student=require("./studentdetails_model")(sequelize,Sequelize);
db.faculty=require("./facultydetails_model")(sequelize,Sequelize);
db.admin= require("./admindetalis_model")(sequelize, Sequelize);
db.course=require("./courses_model")(sequelize,Sequelize);
db.department=require("./department_model")(sequelize,Sequelize);
db.assignment=require("./assignment_model")(sequelize,Sequelize);


// relation between user & role
db.role.hasMany(db.user);


// relation between student & user
db.user.hasOne(db.student,{
  foreignKey:"id",
  });

// relation between faculty & user
db.user.hasOne(db.faculty,{
  foreignKey:"id",
  });


// relation between admin & user
db.user.hasOne(db.admin,{
  foreignKey:"id",
  });


//  // relation between course & student
 db.course.hasMany(db.student,{
  foreignKey:"courseId",
 });


// relation between department & course
db.department.hasMany(db.course,{
    foreignKey:"deptId",
   });
db.course.belongsTo(db.department,{foreignKey:"deptId"});

// // relation between faculty & assignment
db.faculty.hasMany(db.assignment, {
  foreignKey: "facultyId",
});
db.assignment.belongsTo(db.faculty, {
  foreignKey: "facultyId",

});






db.ROLES = [ "admin", "faculty","student"];

module.exports = db;
