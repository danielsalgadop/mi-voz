const express = require('express');
const app = express();
const port = 3000;

var contactRouter = require('./routes')

app.use('/contacts/', contactRouter);

app.listen(port, () => {
    console.log('listening');
})