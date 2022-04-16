import { ProviderModel } from '../models/DataBaseModel.js'

/** CRUD Methods **/
// Read all records
export const getAllProviders = async (req, res) => {
  try {
    const providers = await ProviderModel.findAll()
    res.json(providers)
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Read record
export const getProvider = async (req, res) => {
  try {
    const provider = await ProviderModel.findAll({
      where: { id: req.params.id }
    })
    res.json(provider[0])
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Create record
export const createProvider = async (req, res) => {
  try {
    await ProviderModel.create(req.body)
    res.json({ message: '¡Successfully created record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Update record
export const updateProvider = async (req, res) => {
  try {
    await ProviderModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({ message: '¡Successfully updated record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Delete record
export const deleteProvider = async (req, res) => {
  try {
    await ProviderModel.destroy({ where: { id: req.params.id } })
    res.json({ message: '¡Successfully deleted record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}
