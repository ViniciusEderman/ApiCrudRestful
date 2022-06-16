
// Aquivo responsável por tratar o modelo da classe Produto 
// This file is responsibility for start the product class

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    name: String,
    value: Number,
    note: String
});

module.exports = mongoose.model('Product', ProductSchema);