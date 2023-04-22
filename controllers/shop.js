const Category = require('../models/category');
const Product = require('../models/product');
exports.getIndex = (req, res, next) => {
    const products = Product.GetProducts();
    const categories = Category.getAll();
    res.render('shop/index', {
        title: 'Shopping',
        products: products,
        categories: categories,
        path: '/'
    })
}
exports.getProducts = (req, res, next) => {
    const products = Product.GetProducts();
    const categories = Category.getAll();
    res.render('shop/products', {
        title: 'Products',
        products: products,
        categories: categories,
        path: '/products'
    })
}
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    const product = Product.GetById(productId)
    res.render('shop/product-detail', {
        title: product.name,
        product: product,
        path: '/products'
    })
}
exports.getProductDetails = (req, res, next) => {
    res.render('shop/details', {
        title: 'Details',
        path: '/details'
    });
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        title: 'Cart',
        path: '/cart'
    });
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    });
}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryId = req.params.categoryId;
    const products = Product.getProductsByCategoryId(categoryId);
    const categories = Category.getAll();
    res.render('shop/products', {
        title: 'Products',
        products: products,
        selectedCategory: categoryId,
        categories: categories,
        path: '/products'
    })
}