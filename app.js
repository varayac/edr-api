import express from 'express'
import cors from 'cors'
import clientsRoutes from './routes/clientsRoutes.js'
import providersRoutes from './routes/providersRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/clients', clientsRoutes)
app.use('/providers', providersRoutes)
app.use('/products', productsRoutes)

export default app
