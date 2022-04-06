import { Sequelize } from 'sequelize'

const db = new Sequelize('edr_db', 'root', 'pass11', {
  host: '192.168.0.25',
  dialect: 'mariadb'
})

export default db
