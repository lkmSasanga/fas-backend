const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())


const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
}).on('error', function(err) { console.log('Error', err) })

const sentimentRouter = require('./routes/sentiment')
// const AuthRoutes = require('./routes/AuthRoutes')

app.use('/', sentimentRouter)
// app.use('/api', AuthRoutes)


if(process.env.NODE_ENV === 'production') {

}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

// const db = db.db("itemsDB")
