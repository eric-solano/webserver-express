const express = require('express');
const app = express(); //declara una variable 

app.use(express.static(__dirname + '/public'))

// app.get('/',function (req,res) { //configura una solicitud get cuando el path sea un /, ejecutara la funcion
//     // res.send('Hello World')
//     let salida = {
//         nombre : 'Eric',
//         edad: 32,
//         url: req.url
//     };

//     res.send(salida);
    
// });

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});