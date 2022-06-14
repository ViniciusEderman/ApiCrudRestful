// Iniciando os pacotes 
// starting de packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app vai utilizar bodyParser
// app = bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json);

// definição da porta
// starting the port(at the serv)
const port = process.env.PORT || 8000;

// criando uma rota utilizando o express
// create the routes by express
const router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'Olá, tudo bem? Seja bem vindo!'});
});

// criando um padrão para as rotas
// create the standard for the routes
app.use('/api', router);

// iniciando o serv
// starting the serv
app.listen(port);
console.log(`Iniciando a aplicação na porta: ${port}`);