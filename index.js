const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());

//adding route
const blog = require('./routes/blog');
//mounting the route
app.use('/api/v1', blog);

//database connection
const connectDb = require('./config/database');
connectDb();

app.listen(PORT, () => {
    console.log(`App started on ${PORT} !!`);
})

app.get('/', (req,res)=>{
    res.send("Hello buddy !!");
})
