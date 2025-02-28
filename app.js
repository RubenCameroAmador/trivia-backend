import express from 'express'
import connection from './database/db.js'
import router from './routes/main.route.js'
import { not_found } from './controllers/main.controller.js'

const app = express()
const port = process.env.PORT

app.use(express.json())

//Connection with the database
await connection()

app.use('/api', router)

app.get('*', not_found)

app.listen(port, ()=> console.log(`Server running on port:${port}`))