module.exports  = (sequelize,Sequelize)=>{
    const Faculty = sequelize.define('faculties',{
            userId: {
              type: Sequelize.INTEGER,
              allowNULL: false,
              onDelete: 'CASCADE',
              onUpdate:'CASCADE', 
              references: {
                model: "users",
                key: "userId",
               },
            },
            facultyId: {
              type: Sequelize.INTEGER,
              allowNULL: false,
              primaryKey: true,
            },
            contact: {
                type: Sequelize.STRING,
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
              facultyDesignation: {
                type: Sequelize.STRING,
                allowNULL: false,
              },
              
              
          },
          {
            timestamps: false,
          }
        );
        return Faculty;
      };