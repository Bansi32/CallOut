const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone:{
        type: String,
        required:true
    },
    activated: {
        type: Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = new mongoose.model('User', userSchema,'user');