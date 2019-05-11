const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'recycle_project_db',
    dialect: 'postgres',
    define: {
        underscored: true
    },
}) 


const Location = db.define('location', {
    name: Sequelize.STRING,
    phone_number: Sequelize.INTEGER,
    url: Sequelize.STRING,
    postal_code: Sequelize.INTEGER,
    latitude: Sequelize.INTEGER,
    longitude: Sequelize.INTEGER
})

const Material = db.define('material', {
    name: Sequelize.STRING
})

const User = db.define('user', {
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12)
  user.password = hashedPassword
});

User.hasMany(Material)

module.exports = {
    Location, 
    Material,
    User
}