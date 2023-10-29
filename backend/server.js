const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Signup = require('./src/Components/Signup.js');
const SignInSide = require('./src/Components/SignInSide.js');
const errorHandler = require('./src/backend/errorHandler.js');

const app = express();
const PORT = 4000;

app.post('/api/Signup', Signup);
app.post('/api/SignInSide', SignInSide);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Sedang Berjalan pada PORT ${PORT}`);
});
