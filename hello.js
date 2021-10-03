const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello-world-english');
});

app.get('/english', (req, res) => {
  res.render('hello-world-english');
});

app.get('/french', (req, res) => {
  res.render('hello-world-french');
});

app.get('/serbian', (req, res) => {
  res.render('hello-world-serbian');
});

app.listen(3000, 'localhost', () => {
  console.log('Listening on port 3000.');
});