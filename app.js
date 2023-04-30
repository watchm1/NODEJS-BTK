const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./utilities/database');
const User = require('./models/user');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());



const adminRouter = require('./routes/admin');
const userRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const Product = require('./models/product');
const Category = require('./models/category');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');

app.use((req, res, next) => {
    User.findByPk(1).then((user) => {
        req.user = user;
        next()
    }).catch((error) => {console.log(error)});
})
app.use("/admin", adminRouter);
app.use(userRoutes);


app.use(errorController.get404Page);

User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});

Product.belongsToMany(Cart, {through: CartItem});
Product.belongsTo(Category, {foreignKey: {allowNull: false}})
Category.hasMany(Product);

Product.belongsTo(User);
User.hasMany(Product);

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Order, {through: OrderItem});


let _user;
sequelize.sync().then(() => {
    User.findByPk(1).then((user) => {
        if(!user)
        {
            return User.create({
                name: 'muhammedali',
                email: 'm.ali.software.dev@gmail.com',
            });
        }
        return user;
    }).then((user) => {
        _user = user;
        return user.getCart();
    }).then((cart) => {
        if(!cart)
        {
            _user.createCart();
        }
        return cart;
    }).then(() => {
        Category.count().then((count) => {
            if(count === 0)
            {
                Category.bulkCreate([
                    {name: "Telefon", description: 'telefon kategorisi'},
                    {name: "Bilgisayar", description: 'bilgisayar kategorisi'},
                    {name: "Elektronik", description: "elektronik kategorisi"}
                ]);                
            }
        })
    })

}).catch((error) => {console.log(error)});
app.listen(3000, () => {
    console.log("listening on 3000 port");
});
