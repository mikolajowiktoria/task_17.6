var express = require('express');
var app = express();
app.use(express.static('assets'));
app.set('view engine', 'pug');
app.set('views','./views');


app.use('/auth/google', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu logowania do Google');
    next();
});

app.get('/', function (req, res) {
    res.send('Witaj w aplikacji logującej do serwisu Google!');
});

app.get('/', function (req,res) {
     res.sendFile('/index.html');
     res.send(JSON.stringify(response));
});

app.get('/auth/google', function (req, res) {
    res.send('To jest strona logowania do Google');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Zasoby nie zostały odnalezione.')
});