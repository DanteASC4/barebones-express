const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Colored console logs for clarity and readability
const chalk = require('chalk');

// Init express
const app = express();

// Middleware that parses incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Telling express to use ejs
app.set('view engine', 'ejs')

// Our /public directory can now be referenced by our pages inside /views, so we can serve clients css and js
app.use(express.static(path.join(__dirname, 'public')));

// Default home route, login page
app.get('/', (req, res) => {

  // Have to give it user: null or ejs throws an error saying user is undefined
  res.render('login', {
    user: null
  });
})

// Login post route
app.post('/login', async (req, res) => {
  console.log(`This is your incoming data:`);
  console.log(req.body);
  // await "your db method to verify user"
  /*
    if user is verified render page with some user info
    else send back to login page with `res.redirect`

    I'll Render the page without verification because this example doesn't include DB stuff
  */

  // Example user info object
  let userInfo = {
    name: req.body.username,
    age: 20 // maybe you retrieve some other info about the user from your DB if the user gets verified, you can pass more than just the name to the page
  };

  // Notice how in the browser the URL is now "localhost:3000/login" because we rendered the page from the /login endpoint in the backend.
  res.render('login', {
    user: userInfo // Passing user info back to page
  })
});

app.listen(3000, () => {
  console.log(`App is now listening on port ${chalk.magenta('3000')}`);
});