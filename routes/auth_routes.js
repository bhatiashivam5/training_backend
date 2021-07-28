const { verifySignUp } = require("../middleware");
const myctrl = require("../controllers/auth_controller");
const myctrl1 = require("../controllers/admin_controller");
const { authJwt } = require("../middleware");
const myctrl2 = require("../controllers/student_controller");
const myctrl3 = require("../controllers/faculty_controller");
 const upload =require("../controllers/profilePic_upload");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    myctrl.signup
  );
  app.post("/api/auth/signin", myctrl.signin);

// ADMIN ROUTES

// add admindetails route
app.post("/api/auth/addAdminDetails",authJwt.verifyToken,myctrl1.adminDetails);

// get full admindetails route
app.get("/api/auth/adminFullDetails/:id",authJwt.verifyToken,myctrl1.adminFullDetails);

// update admindetails route
app.put("/api/auth/updateAdminDetails/:adminId",authJwt.verifyToken,myctrl1.updateAdminDetails);

 // add course route
  app.post("/api/auth/addCourse", authJwt.verifyToken,myctrl1.addCourse);
    // get course route
  app.get("/api/auth/getCourse/:courseId", myctrl1.getCourse);
     // get all course route
  app.get("/api/auth/getAllCourses", myctrl1.getAllCourses);
  // delete course route
  app.delete("/api/auth/deleteCourses/:courseId",authJwt.verifyToken, myctrl1.deleteCourse);
    
  // update course route
  app.put("/api/auth/updateCourse/:courseId", authJwt.verifyToken,myctrl1.updateCourse);
  // add department route
  app.post("/api/auth/addDepartment",authJwt.verifyToken, myctrl1.addDepartment);
  // // update department route
  app.put("/api/auth/updateDepartment/:deptId", authJwt.verifyToken, myctrl1.updateDepartment);


  // STUDENT ROUTES

   // add student route
   app.post("/api/auth/addstudentDetails",authJwt.verifyToken,myctrl2.studentDetails);
   app.get("/api/auth/studentFullDetails/:id",authJwt.verifyToken, myctrl2.studentFullDetails);
   app.put("/api/auth/updateStudentDetails/:studentId",authJwt.verifyToken,myctrl2.updateStudentDetails)
   
//  FACULTY ROUTES
// add faculty route
app.post("/api/auth/addfacultyDetails",authJwt.verifyToken, myctrl3.facultyDetails);
app.put("/api/auth/updateFacultyDetails/:facultyId",authJwt.verifyToken, myctrl3.updateFacultyDetails);
// get full facultydetails route
app.get("/api/auth/facultyFullDetails/:id",authJwt.verifyToken,myctrl3.facultyFullDetails);

// assignmentdetails route
app.post("/api/auth/assignmentDetails",authJwt.verifyToken,upload.single('assignmentPic'),myctrl3.assignmentDetails);

};