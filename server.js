const methodOverride = require('method-override')
const express = require('express')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.set('views', __dirname + '/src/components')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// ROOT
app.get('/home', (req, res) => {
    res.render('playlist')
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Jammin' on port: ${process.env.PORT}`)
})




