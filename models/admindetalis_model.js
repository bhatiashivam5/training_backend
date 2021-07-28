module.exports  = (sequelize,Sequelize)=>{
    const Admin = sequelize.define('admins',{
            adminId: {
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
              }
           },
          {
            timestamps: false,
          }
        );
        return Admin;
      };