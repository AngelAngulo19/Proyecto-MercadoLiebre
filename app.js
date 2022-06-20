const path = require('path');
const express = require('express');
const app = express();

app.use('/static',express.static(__dirname + '/public'));


let puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
    console.log('Servidor corriendo en el puerto 3000' + puerto);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html' ));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));

})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));

})