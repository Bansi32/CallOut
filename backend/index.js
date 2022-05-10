require('dotenv').config(); 
const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');
const corsOpt = {
    credentials:true,
    origin: ['http://localhost:3000']
}

app.use(cors(corsOpt));
const PORT = process.env.PORT || 5000;
require('./helpers/dbConnect');
app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
    res.json({message:"hi"});
});


app.listen(PORT, () => {
   console.log(`Listening to port ${PORT}`) 
});