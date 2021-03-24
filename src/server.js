const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log('Server Start ! -> '+ process.env.APP_PORT)
})