const express = require('express');
const app = express(); //declara una variable 

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'))

//Express HBS engine4
hbs.registerPartials( __dirname + '/views/parciales'); //ya tiene un directorio que va a contener todos mis parciales
app.set('view engine', 'hbs');


app.get('/',function (req,res) { //configura una solicitud get cuando el path sea un /, ejecutara la funcion
    
    res.render('home',{
        nombre: 'Eric'
    });    
});

app.get('/about',function (req,res) { //configura una solicitud get cuando el path sea un /, ejecutara la funcion
    
    res.render('about');    
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

