const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors());

const login = require('./routes/login.js');
const chat = require('./routes/chat.js');

app.use('/login', login);
app.use('/chat', chat);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
