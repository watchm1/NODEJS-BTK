// const categories = [
//     {id: "1", name: "Telefon", description: "Telefon Kategori Ürünleri"},
//     {id: "2", name: "Bilgisayar", description: "Bilgisayar Kategori Ürünleri"},
//     {id: "3", name: "Beyaz Eşya", description: "Beyaz Eşya Kategori Ürünleri"}
// ];
const connection = require('../utilities/database');

module.exports = class Category {
    constructor(name, description) {
        this.id = (categories.length + 1).toString();
        this.name = name;
        this.description = description;
    }
    saveCategory()
    {
        return connection.execute('INSERT INTO categories(name, description) VALUES(?, ?)', [this.name, this.description]);
    }

    static getAll()
    {
        return connection.execute('SELECT * FROM categories');
    }
    static getById(id)
    {
        return connection.execute('SELECT * FROM categories WHERE categories.id=?', [id]);
    }
    static update(category)
    {
        return connection.execute('UPDATE categories SET categories.name=?, categories.description=? WHERE categories.id=?', [category.name, category.description, category.id]);
    }
    static delete(id)
    {
        return connection.execute("DELETE FROM categories WHERE id=?", [id]);
    }
}