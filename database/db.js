import e from 'express'
import mongoose from 'mongoose'


const userdb = process.env.USERDB
const passdb = process.env.PASSDB
const host = process.env.HOSTDB
const namedb = process.env.NAMEDB

const url = `mongodb+srv://${userdb}:${passdb}@${host}/${namedb}`
console.log(url)

const connection = async () => {

    try {
        await mongoose.connect(url)

        console.log('Database connected')

    } catch (error) {
        console.log('Error Database', error)
        process.exit(1);
    }

}

export default connection