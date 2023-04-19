const products = [
    {id: '12345',name: 'Samsung S6', price: '2000', image: '1.jpg', description: 'iyi telefon'},
    {id: '12330',name: 'Samsung S7', price: '3000', image: '1.jpg', description: 'iyi telefon'},
    {id: '11248',name: 'Samsung S8', price: '4000', image: '1.jpg', description: 'güzel telefon'},
    {id: '12672',name: 'Samsung S9', price: '5000', image: '1.jpg', description: 'çok iyi telefon'},
    {id: '12904',name: 'Iphone X', price: '6000', image: '1.jpg', description: 'harika telefon'},

];
module.exports = class Product {
    constructor(name, price, image, description)
    {
        this.id = (Math.floor(Math.random()*99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
    saveProduct()
    {
        products.push(this);
    }
    static GetProducts()
    {
        return products;
    }
    static GetById(id)
    {
        const product = products.find(i=> i.id == id);
        return product;
    }
    static update(product)
    {
        const index = products.findIndex(i=>i.id === product.id);
        products[index].name = product.name;
        products[index].price = product.price;
        products[index].description = product.description;
        products[index].image = product.image;
    }
}