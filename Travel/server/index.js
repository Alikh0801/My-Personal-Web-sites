const express = require('express');
const config = require('./src/config');
const app = express();

app.use(express());

app.listen(config.port, () => {
    console.log('Server is running')
})