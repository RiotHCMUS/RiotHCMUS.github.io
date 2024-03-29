// const express = require('express');
// const mongoose = require('mongoose');
// const app = express()

// const ejs = require('ejs');
// app.set('view engine', 'ejs');
// try
// {
// mongoose.connect('mongodb+srv://huyhoan652002:huyhoan65@riotcluster.p3qr5ga.mongodb.net/riotHCMUS?retryWrites=true&w=majority')}
// catch (error)
// {
//     console.log(error.message)
// }

// app.get('/', (req, res) => {
//     res.send('working')
// })

// app.listen(4000, function(){
//     console.log('server is running');
// })
 
// fetch from the database blog.json
// and return the data

const fs = require('fs');
const path = require('path');

const blogPath = path.join(__dirname, 'blog.json');

const getBlog = () => {
    const blog = fs.readFileSync(blogPath, 'utf8');
    return JSON.parse(blog);
};

module.exports = getBlog;

// show data in the browser

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    const blog = getBlog();
    res.send(blog);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// display on blog.html










