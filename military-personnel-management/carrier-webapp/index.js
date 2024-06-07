const express = require('express');
const path = require('path');

const app = express();
const port = 3002;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/personnel', (req, res) => {
  res.render('personnel');
});

app.get('/positions', (req, res) => {
  res.render('positions');
});

app.get('/units', (req, res) => {
  res.render('units');
});

app.listen(port, () => {
  console.log(`Carrier web app listening at http://localhost:${port}`);
});
