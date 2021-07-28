module.exports  = (sequelize,Sequelize)=>{
    const Assignment = sequelize.define('assignments',{
           assignmentName:{
            type:Sequelize.STRING,
            allowNULL:false
        },
        assignmentPic:{
            type:Sequelize.STRING,
            allowNULL:false
        },
        assignmentId:{
            type:Sequelize.STRING,
            allowNULL:false
        },
        assignmentNumber:{
            type:Sequelize.INTEGER,
            allowNULL:false
        },
        assignmentSubDate: {
            type: Sequelize.DATEONLY,
            allowNULL: false,
          },
          assignmentPubDate: {
            type: Sequelize.DATEONLY,
            allowNULL: false,
          },


    },{
        timestamps: false,
    })
    return Assignment;
}

