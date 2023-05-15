require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 4000

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})


//database connection
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log("DB connected & listening on port " +port)
        })
    }) 
    .catch(error => {
        console.log(error)
    })

app.use('/api/', routes)