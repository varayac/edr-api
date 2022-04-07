import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import clientRoutes from './routes/routes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/clients', clientRoutes)

try {
  await db.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database: ', error)
}

app.get('/', (req, res) => {
  res.send('Hi bro')
})

app.listen(8000, () => {
  console.log('Server UP running in http://localhost:8000/')
})
