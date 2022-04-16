import Express from 'express'
import {
  getAllInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice
} from '../controllers/InvoiceController.js'
const router = Express.Router()

router.get('/', getAllInvoices)
router.get('/:id', getInvoice)
router.post('/', createInvoice)
router.put('/:id', updateInvoice)
router.delete('/:id', deleteInvoice)

export default router
