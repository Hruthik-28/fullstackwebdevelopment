const express = require('express');

const app = express();

const hostname = "localhost";
const port = 3500;

app.get('/random', (req, res) => {
    const randomNum = parseInt(Math.random() * 100 + 1)
    res.json({random: randomNum});
})

app.listen(port, () => {
    console.log(`server running at ${hostname}: ${port} `);
})