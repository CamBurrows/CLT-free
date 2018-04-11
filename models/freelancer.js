module.exports = function (sequelize, DataTypes) {
  var Freelancer = sequelize.define("Freelancer", {
    // Giving the Author model a name of type STRING
    freelancer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    skill_set: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    img_link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    portfolio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    linked_in: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    rate_requested: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
      //Right now we are not implementing email inside the freelancer table
    ,
    email: {
      type: Datatypes.STRING,
      validate: {
        isEmail: true
      }
    }
    
  });

  //==========================================
  //Saving this code block for later if we implement the -Message- functionality
  // Freelancer.associate = function (models) {
  //   // Associating Freelancer with Messages
  //   // When an Freelancer is deleted, also delete any associated Messages
  //   Freelancer.hasMany(models.Message, {
  //     onDelete: "cascade"
  //   });
  // };
  //==========================================

    // Associating Freelancer with Jobs
    // Will add a jobId attribute to Freelancer to hold the primary key value for Job
  Freelancer.associate = function (models) {
    Freelancer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
    Freelancer.belongsTo(models.User, {
      foreignKey: {name: 'email'}
    })
    
  }
    //EXAMPLE: User.belongsTo(Company); // Will add companyId to user
  return Freelancer;
};

  //in users model, associate "has many" to jobs
  //freelancers assciate "belongs to" user