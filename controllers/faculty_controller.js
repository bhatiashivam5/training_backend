const db = require("../models");
const Faculty = db.faculty;
const User = db.user;
const Assignment = db.assignment;
// add faculty details
exports.facultyDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    const facultyDetails = {
      facultyId: req.body.facultyId,
      contact: req.body.contact,
      gender: req.body.gender,
      dob: req.body.dob,
      address: req.body.address,
      fatherName: req.body.fatherName,
      motherName: req.body.motherName,
      joiningYear: req.body.joiningYear,
      facultyDesignation: req.body.facultyDesignation,
      id: req.body.id
    };
    // Save facultydetails  in the database
    Faculty.create(facultyDetails)
      .then(data => {
        res.send(data);
      })
      .catch((err) => {
        return res.status(401).json({
          success: false,
          message: 'Error in adding facultydetails',
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


// update facultydetails
exports.updateFacultyDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 1) {
    // update faculty details in the database
    Faculty.update({ contact: req.body.contact, address: req.body.address, dob: req.body.dob, fatherName: req.body.fatherName, motherName: req.body.motherName, facultyDesignation: req.body.facultyDesignation }, { where: { facultyId: req.params.facultyId } })
      .then(() => {
        res.status(200).send({
          status: 200,
          message: "facultydetails updated",
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the facultydetails."
        });
      });
  }
  else {
    res.send({
      message: "user is not Admin"
    })
  }
};

// get full details faculty
exports.facultyFullDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.params.id } });
  if (details.roleId === 2) {
      const id = req.params.id;
      const result = User.findAll({
        where: {id: id},
        include: Faculty,
      }).then(result =>{
        return res.status(200).send({
          status: 200,
          message: "full details of faculty",
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
      message: "user is not faculty"
    })
  }
};

// upload assignment
exports.assignmentDetails = async (req, res) => {
  const details = await User.findOne({ where: { id: req.userId } });
  if (details.roleId === 2) {
  Assignment.create({
  assignmentName: req.body.assignmentName,
  assignmentNumber: req.body.assignmentNumber,
  assignmentId: req.body.assignmentId,
  assignmentPic: req.file.filename,
  assignmentSubDate: req.body.assignmentSubDate,
  assignmentPubDate: req.body.assignmentPubDate,
  facultyId: req.body.facultyId,
  id:req.body.id
}).then(data => {
 res.send(data);
}).catch((err) => {
 return res.status(401).json({
   success: false,
   message: 'Error in uploading assignment',
   error: err.message
 });
});
}
else {
res.send({
message: "user is not faculty"
})
}
};
