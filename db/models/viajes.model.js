const  {Model, DataTypes, Sequelize} = require('sequelize');

const VIAJES_TABLE = 'viajes';

const viajeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        
    },
    titulo: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    precio: {
        allowNull: false,
        type: DataTypes.STRING
    },
    fechaIda: {
        allowNull: false, 
        type: DataTypes.DATE,
        field: 'fecha_ida',
        timestamps: false
    },
    fechaVuelta: {
        allowNull: false, 
        type: DataTypes.DATE,
        field: 'fecha_vuelta',
        timestamps: false
    },
    imagen: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    descripcion: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    disponible: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    slug: {
        allowNull: false,
        type: DataTypes.STRING
    }

}

class Viaje extends Model {
    static associate(){

    }
    
    static config(sequelize) {
        return {
          sequelize,
          tableName: VIAJES_TABLE,
          modelName: 'Viaje',
          timestamps: false
        }
      }
    }
    


module.exports = { VIAJES_TABLE, viajeSchema, Viaje }