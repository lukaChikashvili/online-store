const express = require('express');
 require('dotenv').config();
 const path = require('path');

const cookieParser = require('cookie-parser');
const connectDB  = require('./config/db');
const { routes } = require('./routes/route');
const { blogRoutes } = require('./routes/blogRoutes');
const { uploadRoutes } = require('./routes/uploadRoutes')




const port = process.env.PORT || 5000;

connectDB();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', routes);
app.use('/api/blogs', blogRoutes);
app.use('/api/uploads', uploadRoutes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

app.listen(port, () => console.log('server is running'));


