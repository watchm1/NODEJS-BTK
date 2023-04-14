const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());



const admin = require('./routes/admin');
const userRoutes = require('./routes/user');


app.use("/admin",admin.router);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: "ERROR!"});
})

// bu kod penceresi terminal üzerinden açılmıştır.
app.listen(3000, () => {
    console.log("listening on 3000 port");
});
