const express = require('express');

const PORT = 3000;
const hostname = "localhost";
let counter = 0;

const app = express();

app.get('/', (req, res) => {
    res.json({counter})
})

app.get('/increment', (req, res) => {
    counter++
    res.json({counter})
})

app.get('/decrement', (req, res) => {
    counter--
    res.json({counter})
})

app.listen(PORT, () => {
    console.log(`server running at ${hostname}: ${PORT}`);
})