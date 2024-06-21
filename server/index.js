const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const errorMiddleware = require('./middleware/error');

const PORT  = process.env.PORT || 5000;
const app = express();

//config
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path: 'server/config/.env'});
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

connectDB();


const user = require('./routes/userRoutes');
app.use('/api',user);


app.use(errorMiddleware);

app.listen(PORT,()=>{
    console.log(`Server running port: ${PORT} on ${process.env.NODE_ENV} mode`);
})







