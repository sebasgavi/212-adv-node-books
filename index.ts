import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

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
  const title = request.body.title;

  if(!title) {
    response.json({
      status: 'error',
      message: BookError.EMPTY_TITLE,
    });
    return;
  }

  const newBook = {
    title,
  };

  const bookAlreadyExists = books.find((book) => {
    return book.title === newBook.title;
  });
  if(bookAlreadyExists) {
    response.json({
      status: 'error',
      message: BookError.ALREADY_EXISTS,
    });
    return;
  }

  books.push(newBook);

  response.json({
    status: 'ok',
    newBook
  });
});

enum BookError {
  EMPTY_TITLE = 'EMPTY_TITLE',
  ALREADY_EXISTS = 'ALREADY_EXISTS',
}

app.listen(3333, () => {
  console.log('app listening');
});