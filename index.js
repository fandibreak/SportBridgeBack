const express = require("express");
const app = express() ;
const path = require('path');
const morgan  = require('morgan')

//1--Importo de Utils la conexion 



// view engine setup
app.set('views', path.join(__dirname, 'views'));

//app.set('view engine', 'pug');

// setting
app.set('port', 3000);

app.use(morgan('combined'))

//routes 

app.use(require('./src/routes/index'))// por defecto node siempre llamara a /index.js


app.listen (3000, () => {


    console.log("Escuhando en puerto", app.get('port'))
    console.log (process.env.DB_PASSWORD) 
})