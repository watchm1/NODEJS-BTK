const Category = require('../models/category');
const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    Product.GetProducts().then((products) => {
        res.render('admin/products', {
            title: 'Admin Products',
            products: products[0],
            path: '/admin/products',
            action: req.query.action,
        })
    }).catch((error) => console.log(error));
    
}

exports.getAddProduct= (req, res, next) => {
    Category.getAll().then((categories) => {
        res.render('admin/add-product', {
            title: 'New product',
            categories: categories[0],
            path: '/admin/add-product'
        })
    }).catch((err) => console.log(err));
    
}
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.name, req.body.price, req.body.image, req.body.description, req.body.categoryId);
    product.saveProduct().then(() => {
        res.redirect('/');
    }).catch((error) => {console.log(error)});
}

exports.getEditProduct= (req, res, next) => {
    Category.getAll().then((categories) => {
        Product.GetById(req.params.productId).then((product) => {
            res.render('admin/edit-product', {
                title: 'Edit product',
                categories: categories[0],
                path: '/admin/products',
                product: product[0][0]
            })
        }).catch((error) => console.log(error));    
    }).catch((err) =>console.log(err));
        
}
exports.postEditProduct = (req, res, next) => {
    const product = new Product();
    
    product.id = req.body.id;
    product.name = req.body.name;
    product.description = req.body.description;
    product.image = req.body.image;
    product.price = req.body.price;
    product.categoryId = req.body.categoryId;
    Product.update(product).then(() => {
        res.redirect('/admin/products?action=edit');
    }).catch((error) => {console.log(error)});
}
exports.postDeleteProduct = (req, res, next) => {
    Product.delete(req.body.productId).then(() => {
        res.redirect('/admin/products?action=delete');
    }).catch((error) => console.log(error));
}
