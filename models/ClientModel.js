// Import connection DB
import db from '../database/db.js'
// Import sequelize
import { DataTypes, Sequelize } from 'sequelize'

const ClientModel = db.define('clients', {
  id_client: { type: DataTypes.INTEGER, primaryKey: true },
  rut: { type: DataTypes.CHAR },
  name: { type: DataTypes.STRING },
  direction: { type: DataTypes.STRING },

  createdAt: [
    Sequelize.fn(
      'DATE_FORMAT',
      Sequelize.col('createdAt'),
      '%d-%m-%Y %H:%i:%s'
    ),
    'createdAt'
  ],

  updatedAt: [
    Sequelize.fn(
      'DATE_FORMAT',
      Sequelize.col('updatedAt'),
      '%d-%m-%Y %H:%i:%s'
    ),
    'updatedAt'
  ]

  /*
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  */

  /*
  createdAt: {
    type: DataTypes.DATE,
    get() {
      return this.getDataValue('createdAt').toLocaleString('en-GB', {
        timeZone: 'UTC',
      })
    },
    set() {
      return this.setDataValue('createdAt').toLocaleString('en-GB', {
        timeZone: 'UTC',
      })
    },
  },
  */

  /*
  updatedAt: {
    type: DataTypes.DATE,
    get() {
      return this.getDataValue('updatedAt').toLocaleString('en-GB', {
        timeZone: 'UTC',
      })
    },
    set() {
      return this.setDataValue('updatedAt').toLocaleString('en-GB', {
        timeZone: 'UTC',
      })
    },
  },
  */
})

export default ClientModel
