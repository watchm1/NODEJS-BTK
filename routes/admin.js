const express =require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct); 
router.get('/products', adminController.getProducts);
router.get('/products/:productId', adminController.getEditProduct);
router.post('/products', adminController.postEditProduct);
router.post('/delete-product', adminController.postDeleteProduct);
router.get('/add-category', adminController.getAddCategory);
router.post('/add-category', adminController.postAddCategory);
router.get('/categories', adminController.getCategories);
router.get('/categories/:categoryid', adminController.getEditCategory);
router.post('/categories', adminController.postEditCategory);
router.post('/delete-category', adminController.postDeleteCategory);
module.exports = router;
