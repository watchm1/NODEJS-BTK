const express = require('express');
const router = express.Router();

const admin = require('./admin');


router.get("/",(req,res, next) => {
    res.render('index', {title: 'Home Page', products: admin.products})
})

module.exports = router;