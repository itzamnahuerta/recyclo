const express = require('express');
// const LocationRoute = express.Router();
// const { Location  } = require('../db/models');

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
        res.send(locationName);
    } catch (error) {
        throw error
    }
});

LocationRoute.post('/locations/', async (req,res) => {
    try {
        const newLocation = await Location.create(req.body);
        res.send(newLocation)
    } catch (error) {
        throw error;
    }
})

module.exports = LocationRoute;