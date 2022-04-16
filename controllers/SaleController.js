import { SaleModel } from '../models/DataBaseModel.js'

/** CRUD Methods **/
// Read all records
export const getAllSales = async (req, res) => {
  try {
    const sales = await SaleModel.findAll()
    res.json(sales)
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Read record
export const getSale = async (req, res) => {
  try {
    const sale = await SaleModel.findAll({ where: { id: req.params.id } })
    res.json(sale[0])
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Create record
export const createSale = async (req, res) => {
  try {
    await SaleModel.create(req.body)
    res.json({ message: '¡Successfully created record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Update record
export const updateSale = async (req, res) => {
  try {
    await SaleModel.create(req.body, { where: { id: req.params.id } })
    res.json({ message: '¡Successfully updated record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Delete record
export const deleteSale = async (req, res) => {
  try {
    await SaleModel.destroy({ where: { id: req.params.id } })
    res.json({ message: '¡Successfully deleted record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}
