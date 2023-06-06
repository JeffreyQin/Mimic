const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors());

const login = require('./routes/login.js')

app.use('/login', login);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
