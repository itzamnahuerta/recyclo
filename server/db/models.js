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

module.exports = {
    Location
}