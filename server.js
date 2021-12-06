const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI,
                 {useNewUrlParser: true, useUnifiedTopology: true});

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

const CLIENT_URL = process.env.CLIENT_URL
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', CLIENT_URL);
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

// configure HTTP body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require("./controllers/users-controller")(app)
require("./controllers/pets-controller")(app)
require("./controllers/animals-controller")(app)
require("./controllers/categories-controller")(app)
require("./controllers/products-controller")(app)
require("./controllers/orders-controller")(app)

const cors = require('cors');
app.use(cors({credentials: true, origin: CLIENT_URL}));

app.listen(process.env.PORT || 4000);// listen at port 4000