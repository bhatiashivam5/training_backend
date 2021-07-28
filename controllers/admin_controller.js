
const db = require("../models");
const Department = db.department;
const Course = db.course;
const Admin = db.admin;
const User = db.user;

// addadmin details
exports.adminDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    const adminDetails = {
      adminId: req.body.adminId,
      contact: req.body.contact,
      gender: req.body.gender,
      dob: req.body.dob,
      address: req.body.address,
      id: req.body.id
    };
    // Save admindetails  in the database
    Admin.create(adminDetails)
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        return res.status(401).json({
          success: false,
          message: 'Error in adding admindetails',
          error: err.message
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};

// update admindetails
exports.updateAdminDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    // update admin details in the database
    Admin.update({ contact: req.body.contact, dob: req.body.dob, gender: req.body.gender, address: req.body.address }, { where: { adminId: req.params.adminId } })
      .then(() => {
        res.status(200).send({
          status: 200,
          message: "admindetails updated",
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the admindetails."
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};

// // getadmin full details
// exports.adminFullDetails = async (req, res) => {
//   console.log(req.params, req.query)
//   const details = await User.findOne({ where: { id: req.params.userId  }});
//   if (details.roleId === 1) {
//     const userId = req.params.userId;
//     const adminDetails = User.findAll({
//       where: { id: userId},
//       include: Admin
//     })

//       // get admindetails from the database
//       .then(data=> {
//         res.send(adminDetails);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving details with userId=" + adminDetails
//         });
//       });
//   }
//   else {
//     res.send({
//       message: "user is not Admin"
//     })
//   }
// };


exports.adminFullDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.params.id } });
  if (details.roleId === 1) {
      const id = req.params.id;
      const result = User.findAll({
        where: {id: id},
        include: Admin,
      }).then(result =>{
        return res.status(200).send({
          status: 200,
          message: "full details of admin",
          data: result,
      } )
    }).catch (error=>{
      res.status(500).send({
        message: error,
      })
    })
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};

//                                   *COURSE METHODS*
//add course
exports.addCourse = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    const course = {
      courseId: req.body.courseId,
      courseName: req.body.courseName,
      courseDescription: req.body.courseDescription,
      deptId: req.body.deptId
    };
    // Save course  in the database
    Course.create(course)
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        return res.status(401).json({
          success: false,
          message: 'Error in adding course',
          error: err.message
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};


/*GET METHOD FOR FETCH SINGLE COURSE*/
exports.getCourse = (req, res) => {
  const courseId = req.params.courseId;

  Course.findByPk(courseId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Course with courseId=" + courseId
      });
    });
};

// Fetch all the courses from the database

module.exports.getAllCourses = (req, res) => {
  return Course.findAll().then((docs) => {
    res.status(200).json({
      success: true,
      message: 'List of courses',
      data: docs
    })
  })
    .catch((err) => {
      res.status(401).json({
        success: false,
        message: 'Error in finding records of courses',
        error: err.message
      })
    })
}

// update Course
exports.updateCourse = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    // update course in the database
    Course.update({ courseName: req.body.courseName, courseDescription: req.body.courseDescription }, { where: { courseId: req.params.courseId } })
      .then(() => {
        res.status(200).send({
          status: 200,
          message: "course updated",
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the course."
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};

// delete Course
exports.deleteCourse = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    // delete course in the database
    const courseId = req.params.courseId;

    Course.destroy({ where: { courseId: courseId }, })
      .then(() => {
        res.status(200).send({
          status: 200,
          message: "course deleted",
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting the course."
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};

//                             DEPARTMENT METHODS
//add Department
exports.addDepartment = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    const department = {
      deptId: req.body.deptId,
      deptName: req.body.deptName,
    };
    // Save Department in the database
    Department.create(department)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the department."
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};


// update department
exports.updateDepartment = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    // update department in the database
    Department.update({ deptName: req.body.deptName }, { where: { deptId: req.params.deptId } })
      .then(() => {
        res.status(200).send({
          status: 200,
          message: "department updated",
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the department."
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};
