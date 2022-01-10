'use strict';
// Import mongoose
    const mongoose = require("mongoose");
    // var autoIncrement = require('mongoose-auto-increment');

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const UserSchema = new Schema({
        name: {
            type:String,
            // required:true
        },
        email:{
            type:String,
            // required:true
        },
        phone:{
            type:Number,
            // required:true
        },
        details:{
            type:String,
            // required:true
        },
        state:{
            type:String,
        },
    });

    // autoIncrement.initialize(mongoose.connection);
    // UserSchema.plugin(autoIncrement.plugin, 'muntazimapp');

// create and export model
module.exports = mongoose.model("muntazimcrud", UserSchema);