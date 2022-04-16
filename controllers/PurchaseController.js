import { PurchaseModel } from '../models/DataBaseModel.js'

/** CRUD Methods **/
// Read all records
export const getAllPurchases = async (req, res) => {
  try {
    const purchases = await PurchaseModel.findAll()
    res.json(purchases)
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Read record
export const getPurchase = async (req, res) => {
  try {
    const purchase = await PurchaseModel.findAll({ where: { id: req.params.id } })
    res.json(purchase[0])
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Create record
export const createPurchase = async (req, res) => {
  try {
    await PurchaseModel.create(req.body)
    res.json({ message: '¡Successfully created record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Update record
export const updatePurchase = async (req, res) => {
  try {
    await PurchaseModel.create(req.body, { where: { id: req.params.id } })
    res.json({ message: '¡Successfully updated record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Delete record
export const deletePurchase = async (req, res) => {
  try {
    await PurchaseModel.destroy({ where: { id: req.params.id } })
    res.json({ message: '¡Successfully deleted record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}
