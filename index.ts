import express from 'express';

const app = express();


// get -> preguntar por información
// post -> enviar nueva información
// put -> modificar información que ya existe
// delete -> borrar información


app.get('/', (request, response) => {

  response.send('hola cambio');

});


app.listen(3333, () => {
  console.log('app listening');
});