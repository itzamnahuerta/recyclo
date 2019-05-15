const express = require('express');
const LocationRoute = express.Router();
const { Location  } = require('../db/models');

LocationRoute.get('/locations', async(req,res) =>{
    try {
        const locations = await Location.findAll();
        res.send(locations);
    } catch (error) {
        throw error
    }
});

LocationRoute.get('/locations/:name', async (req,res) => {
    try {
        
        const locationName = await Location.findAll({
            where: {
                name: req.params.name
            }
        });
        console.log(req.params.name)
        res.send(locationName);
    } catch (error) {
        throw error
    }
});

LocationRoute.get('/locations/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const locationId = await Location.findByPk(id)
        res.send(locationId)
    } catch(error) {
        throw error
        console.log(`error at location id route: ${error}`)
    }
})

LocationRoute.post('/locations/', async (req,res) => {
    try {
        const newLocation = await Location.create(req.body);
        res.send(newLocation)
    } catch (error) {
        throw error;
    }
})

module.exports = LocationRoute;