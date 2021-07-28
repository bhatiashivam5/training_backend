const db = require("../models");
const Student = db.student;
const User = db.user;

// add student details
  exports.studentDetails = async (req, res) => {
    const details = await User.findOne({ where: { id: req.userId } });
    if (details.roleId === 1) {
      const studentDetails = {
        studentId:req.body.studentId,
        contact:req.body.contact,
        gender:req.body.gender,
        dob:req.body.dob,
        address : req.body.address,
        fatherName : req.body.fatherName,
        motherName : req.body.motherName,
        joiningYear : req.body.joiningYear,
        courseId : req.body.courseId,
        id: req.body.id
    };
      // Save studentdetails  in the database
      Student.create(studentDetails)
        .then(data => {
          res.send(data);
        })
        .catch((err) => {
          return res.status(401).json({
            success: false,
            message: 'Error in adding studentdetails',
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
  
// update studentdetails
exports.updateStudentDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    // update student details in the database
    Student.update({contact: req.body.contact,address:req.body.address,dob:req.body.dob,fatherName:req.body.fatherName,motherName:req.body.motherName}, {where: {studentId: req.params.studentId}})
      .then(() => {
        res.status(200).send({
          status: 200,
          message: "studentdetails updated",
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the studentdetails."
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};



// get full details of student

exports.studentFullDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.params.id } });
  if (details.roleId === 3) {
      const id = req.params.id;
      const result = User.findAll({
        where: {id: id},
        include: Student,
      }).then(result =>{
        return res.status(200).send({
          status: 200,
          message: "full details of student",
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
      message: "user is not student"
    })
  }
};
