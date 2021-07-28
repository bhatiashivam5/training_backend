const jwt = require("jsonwebtoken");
const config = require("../config/auth_config");
const db = require("../models");
const User = db.user;
const Admin = db.admin;
const Faculty = db.faculty;
const Student = db.student;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};


isStudent = (req, res, next) => {
    user_roles.findOne(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "student") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require student Role!"
        });
      });
    });
  };
  
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    console.log(user);
    user.getRoles().then(roles => {
     
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};


isFaculty = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "faculty") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Faculty Role!"
      });
    });
  });
};

checkDuplicateid = (req, res, next) => {
  // id
  Admin.findOne({
    where: {
      id: req.body.id
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! id is already in use!"
      });
      return;
    }
    next();
  });
};

checkDuplicateid = (req, res, next) => {
  // id
  Student.findOne({
    where: {
      id: req.body.id
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! id is already in use!"
      });
      return;
    }
    next();
  });
};

checkDuplicateid = (req, res, next) => {
  // id
  Faculty.findOne({
    where: {
      id: req.body.id
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! id is already in use!"
      });
      return;
    }
    next();
  });
};


const authJwt = {
  verifyToken: verifyToken,
  isStudent: isStudent,
  isAdmin: isAdmin,
 isFaculty:isFaculty,
 checkDuplicateid: checkDuplicateid,
 checkDuplicateid: checkDuplicateid,
 checkDuplicateid: checkDuplicateid
};
module.exports = authJwt;