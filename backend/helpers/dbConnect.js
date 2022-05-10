const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL);

const db = mongoose.connection;
//db listeners
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Db connected'); 
});

