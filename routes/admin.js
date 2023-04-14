const express =require('express');
const router = express.Router();
const path = require('path');


router.post('/add-product', (req, res, next) => {
    
}); 
router.get('/add-product', (req, res, next) => {
    res.render('add-product')
}); 

router.get('/product', (req, res, next) => {
    console.log(req.body.productName);
    res.redirect('/');
});
// bu kod dosyası terminal üzerinden açılmıştır...
module.exports = router;
