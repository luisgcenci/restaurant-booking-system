const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () =>{

    //Connecting to DB...
    console.log("Connecting to DB...")

    const config = process.env;

    mongoose.connect(
        config.MONGO_URI,
        function (err){

            if (err){
                console.log('Connection Failed: ' + err);
            }
            console.log("Connected to DB!")
        }
    )
}
