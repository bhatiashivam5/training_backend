module.exports = (sequelize,Sequelize)=>{
    const Courses  = sequelize.define('courses',{
        courseId:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
        courseName:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        courseDescription:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
        deptId:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            references: {
                model:"departments",
                key: 'deptId'
            }
        },
      
    },{
        timestamps: false,
    }
    )
    return Courses;
}