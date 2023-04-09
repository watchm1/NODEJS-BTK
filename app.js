const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log("middleware 1 çalıştırıldı");
    next();
})
app.use((req,res, next) => {
    console.log("middleware 2 çalıştırıldı.");
    next();
})
app.listen(3000, () => {
    console.log("listening on 3000 port");
});