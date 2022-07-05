// Iniciando os pacotes 
// starting de packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Produto = require('./app/models/product');

// connect mongodb
/*mongoose.connect('mongodb+srv://admin:<KsaS4UXtQyLZQNHK>@cluster0.xmvpd.mongodb.net/apiRestFull?retryWrites=true&w=majority', {
    useMongoClient: true
    
});*/ 


// app vai utilizar bodyParser
// app = bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// definição da porta
// starting the port(at the serv)
const port = process.env.port || 8000;

// criando uma rota utilizando o express
// create the routes by express
const router = express.Router();
//middleware
router.use(function(req, res, next) {
    console.log('teste');
    next(); // Caso tenha problema, o next irá levar a outra rota
});

router.get('/', function(req, res) {
    res.json({ message: 'Olá, tudo bem? Seja bem vindo!'})
});

//APIS:



// criando um padrão para as rotas
// create the standard for the routes
app.use('/api', router);

// iniciando o serv
// starting the serv
app.listen(port);
console.log(`Iniciando a aplicação na porta: ${port}`);
