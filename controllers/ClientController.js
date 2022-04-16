// Import models
import { ClientModel } from '../models/DataBaseModel.js'

/** CRUD Methods **/
// Read all records
export const getAllClients = async (req, res) => {
  try {
    const clients = await ClientModel.findAll()
    res.json(clients)
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Read record
export const getClient = async (req, res) => {
  try {
    const client = await ClientModel.findAll({
      where: { id: req.params.id }
    })
    res.json(client[0])
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Create record
export const createClient = async (req, res) => {
  try {
    await ClientModel.create(req.body)
    res.json({ message: '¡Successfully created record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Update record
export const updateClient = async (req, res) => {
  try {
    await ClientModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({ message: '¡Successfully updated record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Delete record
export const deleteClient = async (req, res) => {
  try {
    await ClientModel.destroy({
      where: { id: req.params.id }
    })
    res.json({ message: '¡Successfully Deleted record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}
