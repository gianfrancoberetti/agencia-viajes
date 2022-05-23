const express = require('express');

const router = express.Router()


const {models} = require('../libs/sequelize')
const {viajeSchema, Viaje} = require('../db/models/viajes.model');





router.get('/', async (req, res, next) => {
    const viajes = await models.Viaje.findAll();
    try {
        res.render('viajes', {
            pagina: 'viajes',
            viajes
        })
    } catch (error) {
        next(error)
    }
});


router.get('/:id', async(req, res, next) => {
    console.log(req.params)
})


module.exports = router