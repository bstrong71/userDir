const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', { userList: data.users});
});

app.get('/user/:id', function (req, res) {
  let id = req.params.id;

  let userP = data.users.find(function(user) {
    return user.id == id; //return any user that equals the user.id//
  });                      //.find requires two equals//
  res.render('profile', userP);
});


app.listen(3000, function() {
  console.log("App is running on localhost:3000");
})
