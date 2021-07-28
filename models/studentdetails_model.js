  module.exports  = (sequelize,Sequelize)=>{
    const Student = sequelize.define('students',{
            studentId: {
              type: Sequelize.STRING,
              allowNULL: false,
              primaryKey: true,
            },
            contact: {
                type: Sequelize.BIGINT,
                allowNULL: false,
              },
            dob: {
              type: Sequelize.STRING,
              allowNULL: false,
            },
            gender: {
              type: Sequelize.STRING,
              allowNULL: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNULL: false,
              },
            fatherName: {
                type: Sequelize.STRING,
                allowNULL: false,
              },
             motherName: {
                type: Sequelize.STRING,
                allowNULL: false,
              },
              joiningYear: {
                type: Sequelize.STRING,
                allowNULL: false,
              },
             
          },
          {
            timestamps: false,
          }
        );
        return Student;
      };