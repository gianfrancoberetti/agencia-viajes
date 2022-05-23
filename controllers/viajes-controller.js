const {models} = require('../libs/sequelize')
const {viajeSchema, Viaje} = require('./../db/models/viajes.model');


class ViajeController {
    constructor() {}

    async find(){
        const rta = await models.Viaje.findAll();
        return rta
    }

    async findById(id){
        const rta = await models.Viaje.findByPk(id)
        if(!rta){
            console.log(error)
        }
        return rta
    }


}