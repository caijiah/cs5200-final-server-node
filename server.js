const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI,
                 {useNewUrlParser: true, useUnifiedTopology: true});



app.get('/hello',(req, res) =>
    res.send('hello world'));

app.listen(3000);// listen at port 3000