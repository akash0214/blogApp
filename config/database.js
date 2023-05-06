const mongoose = require('mongoose');
require("dotenv").config();

const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(console.log("DB connection successfull !!"))
    .catch((e)=>{
        console.log(e);
        console.log("Error connecting to DB !!");
        process.exit(1);
    })
};
module.exports = connectDb;