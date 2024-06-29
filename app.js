import express from 'express'
import connection from './database/db.js'
import router from './routes/main.route.js'
import { constants } from './services/utils/constants.js'
import { response } from './services/utils/response.js'

const app = express()
const port = process.env.PORT

app.use(express.json())

//Connection with the database
await connection()

app.use('/api', router)

const {status} = constants.response

app.get('*', (req,res) => {
    res.status(status.not_found).json(response(false, 'page not found'))
})


app.listen(port, ()=> console.log(`Server running on port:${port}`))



/*
app.get('/', (req, res) => {
    res.json({
        server: "running"
    })
})

app.get('/ping', (req, res) => {
    res.json({
        server: "pong"
    })
})

app.post('/', (req, res)=>{
    console.log(req.body)
    res.json({
        "msg": "Todo oka"
    })
})
    */