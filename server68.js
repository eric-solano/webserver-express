const express = require('express');
const app = express(); //declara una variable 

app.use(express.static(__dirname + '/public'))

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/',function (req,res) { //configura una solicitud get cuando el path sea un /, ejecutara la funcion
    
    res.render('home',{
        nombre: 'Eric',
        anio: new Date().getFullYear()  
    });
    
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});