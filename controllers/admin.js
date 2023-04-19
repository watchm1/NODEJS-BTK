const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    const products = Product.GetProducts();
    res.render('admin/products', {
        title: 'Admin Products',
        products: products,
        path: '/admin/products'
    })
}

exports.getAddProduct= (req, res, next) => {
    res.render('admin/add-product', {
        title: 'New product',
        path: '/admin/add-product'
    })
}
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.name, req.body.price, req.body.image, req.body.description);
    product.saveProduct();
    res.redirect('/');
}

exports.getEditProduct= (req, res, next) => {
    const product = Product.GetById(req.params.productId);

    res.render('admin/edit-product', {
        title: 'Edit product',
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
    Product.update(product);
    res.redirect('/admin/products');
}

