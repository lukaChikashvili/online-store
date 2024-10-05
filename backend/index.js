const express = require('express');
 require('dotenv').config();

const cookieParser = require('cookie-parser');
const connectDB  = require('./config/db');
const { routes } = require('./routes/route');



const port = process.env.PORT || 5000;

connectDB();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', routes);

app.listen(port, () => console.log('server is running'));


