import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// get -> preguntar por información
// post -> enviar nueva información
// put -> modificar información que ya existe
// delete -> borrar información

app.get('/', (request, response) => {
  response.send('home');
});

const books = [
  {
    title: 'Dune'
  },
  {
    title: 'Harry Potter'
  }
];

app.get('/books', (request, response) => {
  response.json(books);
});

app.post('/books', (request, response) => {
  const newBook = {
    title: request.body.title,
  };
  books.push(newBook);

  response.json({
    status: 'ok',
    newBook
  });
});


app.listen(3333, () => {
  console.log('app listening');
});