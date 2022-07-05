// Iniciando os pacotes 
// starting de packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./app/models/product');

// connect mongodb
/*mongoose.connect("mongodb:;;localhost:8000/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Connect db");
    }
}); */


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
router.route('/products')
    .post(function(req, res) {
        let product = new Product();
        product.name = req.body.name;
        product.value = req.body.value;
        product.note = req.body.note;

        product.save(error => {
            if(error)
                res.send(error)

            res.json({ message: 'product registered with sucefully'})    
        })  
});

// criando um padrão para as rotas
// create the standard for the routes
app.use('/api', router);

// iniciando o serv
// starting the serv
app.listen(port);
console.log(`Iniciando a aplicação na porta: ${port}`);
