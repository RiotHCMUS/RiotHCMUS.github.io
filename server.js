const express = require('express');
const mongoose = require('mongoose');
const app = express()

const ejs = require('ejs');
app.set('view engine', 'ejs');
try
{
mongoose.connect('mongodb+srv://huyhoan652002:huyhoan65@riotcluster.p3qr5ga.mongodb.net/test')}
catch (error)
{
    console.log(error.message)
}

app.get('/', (req, res) => {
    res.send('working')
})

app.listen(4000, function(){
    console.log('server is running');
})