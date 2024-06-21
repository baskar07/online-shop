const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cloudinary = require('cloudinary');
const fileUpload = require('express-fileupload');

const connectDB = require('./config/database');
const errorMiddleware = require('./middleware/error');

const PORT  = process.env.PORT || 5000;

const app = express();

//config
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({ path : 'server/config/.env'});
}
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});


connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})



const user = require('./routes/userRoutes');
const brand = require('./routes/brandRoutes');
const category = require('./routes/categoryRoutes');

app.use('/api',user);
app.use('/api/brand',brand);
app.use('/api/category',category);

app.use(errorMiddleware);

const server = app.listen(PORT,()=>{
    console.log(`Server running port: ${PORT} on ${process.env.NODE_ENV} mode`);
})


// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});


