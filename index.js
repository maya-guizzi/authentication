const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// enable POST request
app.use(bodyParser.urlencoded({
  extended: true
}));

// Connect to mongoDb
const mongoDbURI = 'mongodb+srv://mayaguizzi:mayaguizzi@cluster0.zvtcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDbURI)


// Install ejs - to show JS variables into the HTML
app.set('view engine','ejs')

// Manage models
require('./models/User.js')

// Manages routes
app.use(require('./routes/users'))


app.listen(3000)