import { ProductModel } from '../models/DataBaseModel.js'

/** CRUD Methods **/
// Read all records
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll()
    res.json(products)
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Read record
export const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findAll({
      where: { id: req.params.id }
    })
    res.json(product[0])
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Create record
export const createProduct = async (req, res) => {
  try {
    await ProductModel.create(req.body)
    res.json({ message: '¡Successfully created record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Update record
export const updateProduct = async (req, res) => {
  try {
    await ProductModel.update(req.body, { where: { id: req.params.id } })
    res.json({ message: '¡Successfully updated record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Delete record
export const deleteProduct = async (req, res) => {
  try {
    await ProductModel.destroy({ where: { id: req.params.id } })
    res.json({ message: '¡Successfully deleted record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}
