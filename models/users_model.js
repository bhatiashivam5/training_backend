  
module.exports  = (sequelize,Sequelize)=>{
    const User = sequelize.define('users',{
        userId:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
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
        id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            references: {
                model:"roles",
                key: 'id'
            }
        },
     


    },{
        timestamps: false,
    })
    return User;
}



