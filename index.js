const express = require('express');
const app = express();
const port = 3000;

console.log('primeras'); // esto sale por la consola de express (no del navegador)
// first middleware

app.use((req, res, next)=>{
    console.log('va por ahi');
    next();
});

var contactRouter = require('./routes/contactRoutes')

app.use('/contacts/', contactRouter);

app.listen(port, () => {
    console.log('listening');
})