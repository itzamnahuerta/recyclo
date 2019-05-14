const express = require('express');
const { Material } = require('../db/models');
const MaterialRoute = express.Router();

MaterialRoute.get('/materials', async(req,res) => {
    try {
        const materials = await Material.findAll();
        res.send(materials);
    } catch (error) {
        throw error;
    }
});

MaterialRoute.get('/materials/:name/', async (req,res) => {
    try {
        const type = await Material.findAll({
            where : {
                name: req.params.name,
            }
        });
        res.send(type);
    } catch (error) {
        throw error;
    }
});

MaterialRoute.post('/materials/', async (req,res) => {
    try {
        const create = await Material.create(req.body);
        res.send(create)
    } catch (error) {
        throw error
    }
})

module.exports = MaterialRoute;