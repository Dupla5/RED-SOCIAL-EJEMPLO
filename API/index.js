const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();


mongoose.connect('mongodb+srv://tecla:12345@cluster0.xpjmb.mongodb.net/registro?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//HABILITANDO BODY-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


//HABILITANDO ROUTING

app.use('/', routes())  

//PUERTO

app.listen(3000,() => {
    console.log("Servidor Funcionando Puerto 3000")
})