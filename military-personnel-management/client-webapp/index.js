const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/addPersonnel', (req, res) => {
  res.render('addPersonnel');
});

app.get('/editPersonnel', (req, res) => {
  res.render('editPersonnel');
});

app.listen(3003, () => {
  console.log('Client WebApp сервер працює на порту 3003');
});
