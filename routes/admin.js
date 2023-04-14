const express =require('express');
const router = express.Router();
const path = require('path');

const products = [
    {name: "Samsung S8", price: 3000, image: "1.jpg", description: "iyi telefon"},
    {name: "Samsung S7", price: 2000, image: "1.jpg", description: "iyi"},
    {name: "Samsung S9", price: 4000, image: "1.jpg", description: "çok iyi"},
    {name: "Iphone 7S", price: 4500, image: "1.jpg", description: "çok iyi"},        
]
router.post('/add-product', (req, res, next) => {
    products.push({name: req.body.name, description: req.body.description, image: req.body.description, image: req.body.image});
    res.redirect('/');
}); 
router.get('/add-product', (req, res, next) => {
    
    res.render('add-product', {title: "Add new Product", path: "/admin/add-product"})
}); 
// bu kod dosyası terminal üzerinden açılmıştır...
exports.router = router;
exports.products = products;
