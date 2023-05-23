const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

require('dotenv').config()
const app = express()

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// View engine
app.engine('hbs', exphbs.engine({extname: 'hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Route
const route = require('./routes/route')
route(app)

app.listen(3000, () => {
    console.log("Connect successfully !!!")
})