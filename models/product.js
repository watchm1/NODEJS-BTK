// const products = [
//     {id: '12345',name: 'Samsung S6', price: '2000', image: '1.jpg', description: 'iyi telefon', categoryId: "1"},
//     {id: '12330',name: 'Samsung S7', price: '3000', image: '1.jpg', description: 'iyi telefon', categoryId: "1"},
//     {id: '11248',name: 'Samsung S8', price: '4000', image: '1.jpg', description: 'güzel telefon', categoryId: "1"},
//     {id: '12672',name: 'Samsung S9', price: '5000', image: '1.jpg', description: 'çok iyi telefon', categoryId: "1"},
//     {id: '12904',name: 'Iphone X', price: '6000', image: '1.jpg', description: 'harika telefon', categoryId: "1"},
//     {id: '12905',name: 'Notebook', price: '10000', image: '1.jpg', description: 'harika notebook', categoryId: "2"},
//     {id: '12906',name: 'Çamaşır Makinası', price: '7000', image: '1.jpg', description: 'harika makina', categoryId: "3"},

// ];
const { connect } = require('../routes/admin');
const connection = require('../utilities/database');
module.exports = class Product {
    constructor(name, price, image, description, categoryId)
    {
        this.id = (Math.floor(Math.random()*99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.categoryId = categoryId;
    }
    saveProduct()
    {
        return connection.execute('INSERT INTO products (name, price, image, description, categoryid) VALUES (?, ?, ?, ?, ?)', [this.name, this.price, this.image, this.description, this.categoryId]);
    }
    static GetProducts()
    {
        return connection.execute('select * from products');
    }
    static GetById(id)
    {
        return connection.execute(`SELECT * FROM products where products.id=?`, [id]);
    }
    static update(product)
    {
        return connection.execute('UPDATE products SET products.name=?, products.price=?, products.image=?, products.description=?, products.categoryid=? WHERE products.id=?',
        [product.name, product.price, product.image, product.description, product.categoryId, product.id]);
    }
    static delete(id)
    {
        return connection.execute('DELETE FROM products where products.id=?', [id]);
    }
    static getProductsByCategoryId(categoryId)
    {
        return connection.execute('SELECT * FROM products WHERE categoryid=?', [categoryId]);
    }
}