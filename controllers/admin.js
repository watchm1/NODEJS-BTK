const Category = require('../models/category');
const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    const products = Product.GetProducts();
    res.render('admin/products', {
        title: 'Admin Products',
        products: products,
        path: '/admin/products',
        action: req.query.action,
    })
}

exports.getAddProduct= (req, res, next) => {
    const categories = Category.getAll();
    res.render('admin/add-product', {
        title: 'New product',
        categories: categories,
        path: '/admin/add-product'
    })
}
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.name, req.body.price, req.body.image, req.body.description, req.body.categoryId);
    product.saveProduct();
    res.redirect('/');
}

exports.getEditProduct= (req, res, next) => {
    const product = Product.GetById(req.params.productId);
    const categories = Category.getAll();
    res.render('admin/edit-product', {
        title: 'Edit product',
        categories: categories,
        path: '/admin/products',
        product: product
    })
}
exports.postEditProduct = (req, res, next) => {
    const product = Product.GetById(req.body.id);
    
    product.name = req.body.name;
    product.description = req.body.description;
    product.image = req.body.image;
    product.price = req.body.price;
    product.categoryId = req.body.categoryId;
    Product.update(product);
    res.redirect('/admin/products?action=edit');
}
exports.postDeleteProduct = (req, res, next) => {
    Product.delete(req.body.productId);
    res.redirect('/admin/products?action=delete');
}
