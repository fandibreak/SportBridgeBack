const express = require("express");
const app = express() ;
const path = require('path');
const morgan  = require('morgan')
require('dotenv').config({path: __dirname + '/.env'})

//console.log(require('dotenv').config())
//1--Importo de Utils la conexion 



// view engine setup
app.set('views', path.join(__dirname, 'views'));

//app.set('view engine', 'pug');

// setting
app.set('port', 3000);

app.use(morgan('combined'))

app.use(express.static('Public'));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes 

app.use(require('./src/routes/index'))// por defecto node siempre llamara a /index.js


app.listen (3000, () => {

    console.log("Escuhando en puerto", app.get('port'))
    
})


