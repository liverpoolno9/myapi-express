const express = require('express');

const app = express();
const port = 3000;

app.get('/users',(req, res) => {
    res.send('Get users');
});

app.get('/users/:id',(req, res) => {
    res.send('Get users ID');
});

app.post('/',(req, res) => {
    res.send('POST request');
});

app.listen(port, () => {
    console.log('Server ready');
    }
);