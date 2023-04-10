const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/add-product', (req, res, next) => {
    res.send(`
        <html>
            <head>
                <title>Add a new product</title>
            </head>
            <body>
                <form action="/product" method="POST">
                    <input type="text" name"productName">
                    <input type="submit" value="save product">
                </form> 
            </body>
        </html>
    `)
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use("/",(req,res, next) => {
    console.log("main url çalıştı");
    res.send();
})
app.listen(3000, () => {
    console.log("listening on 3000 port");
});