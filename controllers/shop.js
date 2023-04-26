const Category = require('../models/category');
const Product = require('../models/product');
exports.getIndex = (req, res, next) => {
    Category.getAll().then((categories) => {
        Product.GetProducts().then((products) => {
            res.render('shop/index', {
                title: 'Shopping',
                products: products[0],
                categories: categories[0],
                path: '/'
            })
        }).catch((error) =>{
            console.log(error);
        });
    }).catch((err) => {console.log(err)});
    
    
}
exports.getProducts = (req, res, next) => {
    Category.getAll().then((categories) => {
        Product.GetProducts().then((products) => {
            res.render('shop/products', {
                title: 'Products',
                products: products[0],
                categories: categories[0],
                path: '/products'
            })
        }).catch((error) => console.log(error));    
    }).catch((err)=>console.log(err));
    
}
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.GetById(productId).then((product) => {
        res.render('shop/product-detail', {
            title: product[0][0].name,
            product: product[0][0],
            path: '/products'
        })
    }).catch((error) => console.log(error));
    
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
    Category.getAll().then((categories) => {
        Product.getProductsByCategoryId(categoryId).then((products) => {
            res.render('shop/products', {
                title: 'Products',
                products: products[0],
                selectedCategory: categoryId,
                categories: categories[0],
                path: '/products'
            })
        }).catch((err) => {console.log(err)});
       
    }).catch((err) => console.log(err));

    
}