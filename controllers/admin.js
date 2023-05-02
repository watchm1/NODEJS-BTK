const Category = require('../models/category');
const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    Product.findAll().then((products) => {
        res.render('admin/products', {
            title: 'Admin Products',
            products: products,
            path: '/admin/products',
            action: req.query.action,
        })    
    }).catch((error) => console.log(error));
    
}

exports.getAddProduct= (req, res, next) => {
    Category.findAll().then((categories) => {
        res.render('admin/add-product', {
            title: 'New product',
            categories: categories,
            path: '/admin/add-product'
        })
    }).catch((err) => console.log(err));
    
}
exports.postAddProduct = (req, res, next) => {
    const {name, price, image, description, categoryId} = req.body;
    const user = req.user;
    user.createProduct({
        name: name,
        price: price,
        image: image,
        description: description,
        categoryId: categoryId,
    }).then((result) => {
        res.redirect('/');
    }).catch((err) => console.log(err));
}

exports.getEditProduct= async(req, res, next) => {
    const productId = req.params.productId;
    const categories = await Category.findAll();
    const product = await Product.findByPk(productId);
    res.render('admin/edit-product', {
        title: 'Edit product',
        categories: categories,
        path: '/admin/products',
        product: product
    })
}
exports.postEditProduct = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const image = req.body.image;
    const price = req.body.price;
    const categoryId = req.body.categoryId;
    Product.update({name: name, price: price, image: image,description: description, categoryId: categoryId}, {where : {id: id}}).then(()=> {
        res.redirect('/admin/products?action=edit');
    }).catch((error) => {console.log(error)});

}
exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.destroy({where: {id: productId}}).then(() => {
        res.redirect('/admin/products?action=delete');
    }).catch((error) => {console.log(error)});
}
exports.getAddCategory = (req, res, next) => {
   res.render('admin/add-category', {
       title: 'Add new Category',
       path:'admin/add-category'
   });
}
exports.postAddCategory = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    Category.create({
        name: name,
        description: description
    }).then((result) => {
        res.redirect('/admin/categories?action=create');
    }).catch((error) => {});
}
exports.getCategories = (req, res,next) => {
    Category.findAll().then((categories) => {
        res.render('admin/categories', {
            title: 'New product',
            categories: categories,
            path: '/admin/categories',
            action: req.query.action,
        })
    }).catch(error => console.log(error));
}
exports.getEditCategory = (req, res, next) => {
    const categoryid = req.params.categoryid;
    Category.findByPk(categoryid).then((category) => {
        res.render('admin/edit-category', {
            title: 'Edit category',
            path: '/admin/category',
            category: category
        })
    }).catch(err => console.log(err));
}
exports.postEditCategory = (req, res, next) => {
    const categoryid = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    Category.update({name: name, description: description}, {where: {id: categoryid}}).then(() => {
        res.redirect('/admin/categories?action=edit')
    }).catch((error) => console.log(error));

}
exports.postDeleteCategory = (req, res, next) => {
    const categoryId = req.body.categoryid;
    Category.destroy({where: {id: categoryId}}).then(() => {
        res.redirect('/admin/categories?action=delete');
    }).catch((error) => {console.log(error)});
}