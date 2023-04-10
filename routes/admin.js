const express =require('express');
const router = express.Router();

router.post('/add-product', (req, res, next) => {
    res.redirect('/admin/product');

}); 
router.get('/add-product', (req, res, next) => {
    res.send(`
            <html>
                <head>
                    <title>Add a new product</title>
                </head>
                <body>
                    <form action="/admin/add-product" method="POST">
                        <input type="text" name"productName">
                        <input type="submit" value="save product">
                    </form> 
                </body>
            </html>
        `)
}); 

router.get('/product', (req, res, next) => {
    console.log(req.body.productName);
    res.redirect('/');
});

module.exports = router;