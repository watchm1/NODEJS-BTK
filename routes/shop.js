const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get("/",shopController.getIndex);
router.get("/products",shopController.getProducts);
router.get("/products/:productId",shopController.getProduct);
router.get('/details', shopController.getProductDetails);
router.get('/card', shopController.getCart);
router.get('/orders', shopController.getOrders);
module.exports = router;