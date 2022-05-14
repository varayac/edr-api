import app from './app.js'
import db from './database/db.js'
const PORT = 8000

async () => {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully 👍.')
  } catch (error) {
    console.error('Unable to connect to the database 😮: ', error)
  }
}

app.get('/', (req, res) => {
  res.send(`Hi, i lisent in the port ${PORT} 🙂`)
})

app.listen(PORT, () => {
  console.log(`Server UP running in http://localhost:${PORT}/`)
})
