const express = require('express')
const PORT = process.env.PORT
const app = express()







// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})