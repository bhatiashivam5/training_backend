  
module.exports  = (sequelize,Sequelize)=>{
    const User = sequelize.define('users',{
      username:{
            type:Sequelize.STRING,
            allowNULL:false
        },
        email: {
            type: Sequelize.STRING,
            allowNULL: false,
          },
          password: {
            type: Sequelize.STRING,
            allowNULL: false,
          },


    },{
        timestamps: false,
    })
    return User;
}



