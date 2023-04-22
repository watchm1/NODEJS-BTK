const products = [
    {id: '12345',name: 'Samsung S6', price: '2000', image: '1.jpg', description: 'iyi telefon', categoryId: "1"},
    {id: '12330',name: 'Samsung S7', price: '3000', image: '1.jpg', description: 'iyi telefon', categoryId: "1"},
    {id: '11248',name: 'Samsung S8', price: '4000', image: '1.jpg', description: 'güzel telefon', categoryId: "1"},
    {id: '12672',name: 'Samsung S9', price: '5000', image: '1.jpg', description: 'çok iyi telefon', categoryId: "1"},
    {id: '12904',name: 'Iphone X', price: '6000', image: '1.jpg', description: 'harika telefon', categoryId: "1"},
    {id: '12905',name: 'Notebook', price: '10000', image: '1.jpg', description: 'harika notebook', categoryId: "2"},
    {id: '12906',name: 'Çamaşır Makinası', price: '7000', image: '1.jpg', description: 'harika makina', categoryId: "3"},

];
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
        products[index].categoryId = product.categoryId;
    }
    static delete(id)
    {
        const index = products.findIndex(i=> i.id === id);
        products.splice(index, 1);
    }
    static getProductsByCategoryId(categoryId)
    {
        return products.filter(i=> i.categoryId == categoryId);
    }
}