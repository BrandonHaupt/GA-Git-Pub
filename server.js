require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()
const methodOverride = require('method-override')

app.get('/', (req,res) => {
    console.log("hello")
})




// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})