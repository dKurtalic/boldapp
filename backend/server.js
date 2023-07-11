const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()


const app = express()

app.use(express.json());
app.use('/', routes);

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to database and app successfully running on port 4000")
    })
}).catch((error) => {
    console.log(error)
})

app.use(express.static('./build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "client"))
})

