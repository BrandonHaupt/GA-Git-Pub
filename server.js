require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()
// const methodOverride = require('method-override')
const drinks = require('./models/drinks')
const foods = require('./models/foods')

// HOME ROUTE - Redirects to the localhost:3000/drinks
app.get('/', (req,res) => res.redirect("/drinks"))


// Displays the Drinks
app.get('/drinks', (req,res) => {
    res.render('drinks_index.ejs',
    {
        allDrinks:drinks,
        allFoods:foods
    })
})

// SHOW ROUTE for Drinks
app.get("/drinks/:id", (req, res) => {

    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id],
        id: req.params.id
    })
})

// SHOW ROUTE for Foods
app.get("/foods/:id", (req, res) => {
    res.render("food_show.ejs", {
        food: foods[req.params.id],
        id: req.params.id
    })
})


// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})