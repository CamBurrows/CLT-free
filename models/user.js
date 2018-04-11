var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });

    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
  
    User.associate = function(models) {
      //The User should be IDed inside the freelancer database
      User.hasMany(models.Freelancer, {
        foreignKey: {
          allowNull: false
        }
      }),
      User.hasMany(models.Job, {
          foreignKey: {
              allowNull: false
          }
      })
    };
  
    return User;
  };
