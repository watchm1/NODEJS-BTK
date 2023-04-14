const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/admin",adminRoutes);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404).render('404');
})

// bu kod penceresi terminal üzerinden açılmıştır.
app.listen(3000, () => {
    console.log("listening on 3000 port");
});
