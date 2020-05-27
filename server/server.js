const express = require('express');
const app = express();
const shikigamiRoutes = require('./routes/shikigami');

const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {
    console.log("request: ", req.path, Date.now());
    next();
})

app.use('/shikigami', shikigamiRoutes)

app.use(express.json());

app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Listening on 8080 local server yay!')
})