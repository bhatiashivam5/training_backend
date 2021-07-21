module.exports = (sequelize,Sequelize)=>{
    const Roles  = sequelize.define('roles',{
        id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
      
    },{
        timestamps: false,
    }
    )
    return Roles;
}