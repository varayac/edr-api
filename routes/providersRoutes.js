import Express from 'express'
import {
  getAllProviders,
  getProvider,
  createProvider,
  updateProvider,
  deleteProvider
} from '../controllers/ProviderController.js'
const router = Express.Router()

// get provider records
router.get('/', getAllProviders)
router.get('/:id', getProvider)
router.post('/', createProvider)
router.put('/:id', updateProvider)
router.delete('/:id', deleteProvider)

export default router
