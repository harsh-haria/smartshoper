const express = require('express');

const app = express();

const shopRoutes = require('./routes/shop');

app.set('view engine','ejs');
app.set('views','views');

app.use(shopRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);