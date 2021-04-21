'use strict';

const express = require('express');

const Product = require('../models/productModel.js');
const products = new Product();

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

function getAllProducts(req, res) {
    let getProducts = products.read();
    res.status(200).json(getProducts);
}

function getOneProduct(req, res) {
    const id = parseInt(req.params.id);
    let getProduct = products.read(id);
    res.status(200).json(getProduct);
}

function createProduct(req, res) {
    let newProduct = products.create(req.body);
    res.status(201).json(newProduct);
}

function updateProduct(req, res) {
    const id = parseInt(req.params.id);
    let updateProduct = products.update(id, req.body);

    res.status(200).json(updateProduct);
}

function deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    let deleteProduct = products.delete(id, req.body);

    res.status(200).json(deleteProduct);
}




module.exports = router;