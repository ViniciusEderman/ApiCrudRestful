// Iniciando os pacotes 
// starting de packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./app/models/product');

// connect mongodb
mongoose.connect("mongodb+srv://admin:KsaS4UXtQyLZQNHK@cluster0.xmvpd.mongodb.net/apiRestFull?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connected to the db");
});


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
/*router.use(function(req, res, next) {
    console.log('teste');
    res.end() 
}); */


router.get('/', function(req, res) {
    res.json({ message: 'Hi, is started'})
});


//APIS:
router.route('/product')
    .post(function(req, res) {
        const product = new Product();
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
console.log(`App stated at port: ${port}`);
