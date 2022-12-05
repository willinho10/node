// TODO compléter


var express = require('express');
var router = express.Router();
const Categories = require("../model/Category.js");
const Product = require("../model/Product.js");

/* GET home page. */


router.get('/new', function(req, res, next) {
    res.render('productForm', {title: 'Créer un Produit', categories: Categories.getAll()});
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    const produit = Product.getAll()[id-1];

    res.render('product', {title: Product.getAll()[id]["name"], product: produit});
});

router.get('/:id/update', function(req, res, next) {
    var id = req.params.id;
    const produit = Product.getAll()[id-1];

    res.render('productFormUpdate', {title: 'Modifier un produit', product: produit, categories: Categories.getAll()});
});

router.get('/:id/delete', function(req, res, next) {
    var id = req.params.id;
    const produit = Product.getAll()[id-1];

    res.render('delete', {title: 'Voulez-vous vraiment supprimer le produit '+ produit.name +'?', product: produit, categories: Categories.getAll()});
});

module.exports = router;
