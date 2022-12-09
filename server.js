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
 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://huyhoan652002:huyhoan65@riotcluster.p3qr5ga.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("riotHCMUS").collection("courses");
  // perform actions on the collection object
  client.close();
});

