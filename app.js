import express from 'express'
import cors from 'cors'
import clientsRoutes from './routes/clientsRoutes.js'
import providersRoutes from './routes/providersRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import invoicesRoutes from './routes/invoicesRouters.js'
import purchasesRoutes from './routes/purchasesRoutes.js'
import salesRoutes from './routes/salesRoutes.js'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/clients', clientsRoutes)
app.use('/providers', providersRoutes)
app.use('/products', productsRoutes)
app.use('/invoices', invoicesRoutes)
app.use('/purchases', purchasesRoutes)
app.use('/sales', salesRoutes)

export default app
