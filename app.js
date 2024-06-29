import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT

app.use(express.json())

const userdb = process.env.USERDB
const passdb = process.env.PASSDB
const host = process.env.HOSTDB
const namedb = process.env.NAMEDB

const url = `mongodb+srv://${userdb}:${passdb}@${host}/?retryWrites=true&w=majority&appName=${namedb}`
console.log(url)

try {
    await mongoose.connect(url)
    console.log('Database connected')

} catch (error) {
    console.log('Error Database', error)
}

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