const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt')


const db = new Sequelize({
    database: 'recycle_project_db',
    dialect: 'postgres',
    define: {
        underscored: true
    },
})

const Location = db.define('location', {
    name: Sequelize.STRING,
    phone_number: Sequelize.BIGINT,

    url: Sequelize.STRING,
    postal_code: Sequelize.INTEGER,
    latitude: Sequelize.DECIMAL,
    longitude: Sequelize.DECIMAL
})

const Material = db.define('material', {
    name: Sequelize.STRING,
})

const MaterialType = db.define('material_type', {
    name: Sequelize.STRING
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
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

Material.hasMany(MaterialType)
MaterialType.belongsTo(Material)

Material.belongsToMany(Location, {
    through: 'material_location',
    foreignKey: 'materialId'

});
Location.belongsToMany(Material, {
    through: 'material_location',
    foreignKey: 'locationId'
})

User.belongsToMany(Location, {
    through: 'user_location',
    foreignKey: 'userId'

});
Location.belongsToMany(User, {
    through: 'user_location',
    foreignKey: 'locationId'
})

User.belongsToMany(Location, {
    through: 'user_location',
    foreignKey: 'userId'

});
Location.belongsToMany(User, {
    through: 'user_location',
    foreignKey: 'locationId'
})

module.exports = { 
    MaterialType,   
    Material,
    Location,
    User,
    db
}