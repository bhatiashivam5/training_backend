  module.exports  = (sequelize,Sequelize)=>{
    const Department = sequelize.define('departments',{
        deptId:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
        deptName:{
            type:Sequelize.STRING,
            allowNULL:false
        },


    },{
        timestamps: false,
    })
    return Department;
}
