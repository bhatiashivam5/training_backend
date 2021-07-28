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
    
      
    },{
        timestamps: false,
    }
    )
    return Courses;
}