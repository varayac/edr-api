import Express from 'express'
import {
  createSale,
  deleteSale,
  getAllSales,
  getSale,
  updateSale
} from '../controllers/SaleController.js'
const router = Express.Router()

router.get('/', getAllSales)
router.get('/:id', getSale)
router.post('/', createSale)
router.put('/:id', updateSale)
router.delete('/:id', deleteSale)

export default router
