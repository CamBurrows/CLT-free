module.exports = function (sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    // Giving the Author model a name of type STRING
    creator: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    job_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    job_category: {
      type: DataTypes.TEXT,
      allowNull: false
    }
      //Currently trying to implement the data for email only in the user table
    ,
    email: {
      type: Datatypes.STRING,
      validate: {
        isEmail: true
      }
    }
    
  });

  Job.associate = function (models) {

    Job.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Job;
};
