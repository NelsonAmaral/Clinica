const express = require('express');
const routes = require('./router');
const { app_port } = require('./config');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(app_port, () => {
    console.log('Server Start ! -> '+ app_port)
    // console.log(process.env)
})