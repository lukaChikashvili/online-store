const express = require('express');
require('dotenv').config({ path: './backend/.env' });
 const cors = require('cors');  
 const path = require('path');

const cookieParser = require('cookie-parser');
const connectDB  = require('./config/db');
const { routes } = require('./routes/route');
const { blogRoutes } = require('./routes/blogRoutes');
const { uploadRoutes } = require('./routes/uploadRoutes');
const { applyRoutes } = require('./routes/applyRoutes');





const port = process.env.PORT || 5000;

connectDB();


const app = express();

app.use(cors({
    origin: 'https://baia-frontend.onrender.com',  
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
  }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', routes);
app.use('/api/blogs', blogRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/apply', applyRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'routes/uploads')));

 



app.listen(port, () => console.log('server is running'));


