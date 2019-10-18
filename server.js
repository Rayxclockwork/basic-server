'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

//tells express to serve our files from the public folder
app.use(express.static('./public'));

// app.get('/', (request, response) => response.send('Hello World!'));

// app.get('/hello', (request, response) => response.send('Hi Roz, thanks for the cookies! Happy Birthday, James!'));

app.get('/raven', (request, response) => response.send('Can\'t wait until November 9th!'));

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));