const express =require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct); 
router.get('/products', adminController.getProducts);
router.get('/products/:productId', adminController.getEditProduct);
router.post('/products', adminController.postEditProduct); 
module.exports = router;
