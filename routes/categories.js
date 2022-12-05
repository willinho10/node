// TODO compléter

var express = require('express');
var router = express.Router();
const Categories = require("../model/Category.js");
const Product = require("../model/Product.js");

/* GET home page. */


router.get('/new', function(req, res, next) {
    res.render('categoryForm', {title: 'Créer un rayon'});
});


router.get('/', function(req, res, next) {
    res.render('categories', {title: 'Rayons', categories: Categories.getAll()});
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    const produit = Product.getByCategory(id);

    res.render('category', {title: "Produits du rayon " + Categories.getById(id)["name"], products: produit, categoryId: Categories.getById(id)});
});

router.get('/:id/update', function(req, res, next) {
    var id = req.params.id;
    const category = Categories.getById(id);
    res.render('categoryFormUpdate', {title: "Modifier le rayon " + category.name, category: category});
});

router.get('/:id/delete', function(req, res, next) {
    var id = req.params.id;
    const category = Categories.getById(id);
    res.render('delete', {title: "Voulez-vous vraiment supprimer le rayon "  + category.name +"?", category: category});
});


module.exports = router;
