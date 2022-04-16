import { InvoiceModel } from '../models/DataBaseModel.js'

/** CRUD Methods **/
// Read all records
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await InvoiceModel.findAll()
    res.json(invoices)
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Read record
export const getInvoice = async (req, res) => {
  try {
    const invoice = await InvoiceModel.findAll({ where: { id: req.params.id } })
    res.json(invoice[0])
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Create record
export const createInvoice = async (req, res) => {
  try {
    await InvoiceModel.create(req.body)
    res.json({ message: '¡Successfully created record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Update record
export const updateInvoice = async (req, res) => {
  try {
    await InvoiceModel.update(req.body, { where: { id: req.params.id } })
    res.json({ message: '¡Successfully updated record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}

// Update record
export const deleteInvoice = async (req, res) => {
  try {
    await InvoiceModel.destroy({ where: { id: req.params.id } })
    res.json({ message: '¡Successfully deleted record!' })
  } catch (e) {
    res.json({ message: e.message })
  }
}
