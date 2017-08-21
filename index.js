const express         = require('express');
const path            = require('path');
const mustacheExpress = require('mustache-express');
const app             = express();
const Data            = require('./models/data.js');
const router          = require('./routes/user.js');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(router);


app.listen(3000, function() {
  console.log("App is running on localhost:3000");
})
