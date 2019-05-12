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
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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

/* I think these relationships make sense, but of course feel free to counter! The onDelete is in place so that if a user deletes a location from their 'favorites' list*/

User.hasMany(Material)
Material.belongsTo(User)

Material.hasMany(Location)
Location.hasMany(Material)

User.hasMany(Location, {
    onDelete: 'cascade'
});

Location.belongsTo(User)

module.exports = {
    Location, 
    Material,
    User
}