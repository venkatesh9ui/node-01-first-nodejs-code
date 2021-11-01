const express = require('express');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   let userName = req.body.username || 'Unknown User';
//   res.render('index', {
//     user: userName
//   });
// });

app.use(locationRoutes);

app.listen(3000);
