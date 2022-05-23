const { viajeSchema, Viaje} = require('./viajes.model');

function setupModels(sequelize){
    Viaje.init(viajeSchema, Viaje.config(sequelize));
}

module.exports = setupModels