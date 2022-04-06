// Import connection DB
import db from '../database/db'
// Import sequelize
import { DataTypes } from 'sequelize'
const dt = DataTypes

const ClientModel = db.define('Client', {
  rut: { type: dt.CHAR },
  name: { type: dt.STRING },
  direction: { type: dt.STRING },
  createdAt: { type: dt.DATE },
  updatedAt: { type: dt.DATE }
})

export default ClientModel
