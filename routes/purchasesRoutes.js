import Express from 'express'
import {
  createPurchase,
  deletePurchase,
  getAllPurchases,
  getPurchase,
  updatePurchase
} from '../controllers/PurchaseController.js'
const router = Express.Router()

router.get('/', getAllPurchases)
router.get('/:id', getPurchase)
router.post('/', createPurchase)
router.put('/:id', updatePurchase)
router.delete('/:id', deletePurchase)

export default router
