const express = require('express')
const routes = require('./routes')

require('dotenv').config()

const app = express()
app.get("/", (req, res) => {
    res.json({ mssg: "hellooo" })
})
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log("App successfully runned on port 4000")
})