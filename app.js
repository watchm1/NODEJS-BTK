const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');
 
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/admin",adminRoutes);
app.use("/user",userRoutes);

app.set('title', 'my site');

app.listen(3000, () => {
    console.log("listening on 3000 port");
});