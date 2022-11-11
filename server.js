require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()
// const methodOverride = require('method-override')
const drinks = require('./models/drinks')

// HOME ROUTE - Redirects to the localhost:3000/drinks
app.get('/', (req,res) => res.redirect("/drinks"))

// Displays the Drinks
app.get('/drinks', (req,res) => {
    res.render('drinks_index.ejs',
    {
        allDrinks:drinks
    })
})

// SHOW Route
app.get("/drinks/:id", (req, res) => {

    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id],
        id: req.params.id
    })
})



// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})