const Category = require('../models/category');
const Product = require('../models/product');
exports.getIndex = (req, res, next) => {
    Category.findAll().then((categories) => {
        Product.findAll().then((products) => {
            res.render('shop/index', {
                title: 'Shopping',
                products: products,
                categories: categories,
                path: '/'
            })
        }).catch((error) =>{
            console.log(error);
        });
    }).catch((err) => {console.log(err)});
    
    
}
exports.getProducts = (req, res, next) => {
    Category.findAll().then((categories) => {
        Product.findAll().then((products) => {
            res.render('shop/products', {
                title: 'Products',
                products: products,
                categories: categories,
                path: '/products'
            })
        }).catch((error) => console.log(error));    
    }).catch((err)=>console.log(err));
    
}
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findByPk(productId).then((product) => {
        res.render('shop/product-detail', {
            title: product.name,
            product: product,
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
    const user = req.user;
    user.getCart().then((cart) => {
        return cart.getProducts().then((products) => {
            res.render('shop/cart', {
                title: 'Cart',
                path: '/cart',
                products: products
            });
        }).catch((error) => console.log(error));
    }).catch((error) => console.log(error));
}
exports.postCart = (req, res, next) => {
    const user = req.user;
    const productId = req.body.productId;
    let quantity = 1;
    let userCart;

    user.getCart().then((cart) => {
        userCart = cart;
        return cart.getProducts({where: {id: productId}})
        .then((products) => {
            let product;
            if(products.length > 0)
                product = products[0];
            if(product)
            {
                quantity += product.cartItem.quantity;
                return product;
            }
            return Product.findByPk(productId);
        })
        .then((product) => {
            userCart.addProduct(product, {
                through: {
                    quantity: quantity
                }
            }).then(() => {
                res.redirect('/cart');
            });  
        })
    }).catch(error => console.log(error));
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    });
}
exports.getProductsByCategoryId = (req, res, next) => {
    const categoryId = req.params.categoryId;
    Category.findAll().then((categories) => {
        Product.findAll({where: {categoryid: categoryId}}).then((products) => {
            res.render('shop/products', {
                title: 'Products',
                products: products,
                selectedCategory: categoryId,
                categories: categories,
                path: '/products'
            })
        }).catch((err) => {console.log(err)});       
    }).catch((err) => console.log(err));    
}

exports.postCartItemDelete = (req, res, next) => {
    const productId = req.body.productId;
    req.user.getCart().then((cart) => {
        return cart.getProducts({where: {id: productId}});
    }).then((products) => {
        const product = products[0];
        return product.cartItem.destroy();
    }).then(() => {
        res.redirect('/cart');
    })
}