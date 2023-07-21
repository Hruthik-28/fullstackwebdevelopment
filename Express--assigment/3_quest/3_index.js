const express = require('express');

const app = express();

const hostname = "localhost";
const port = 3500;

app.get('/', (req, res) => {
    res.json({msg: `I am HomePage`})
})
app.get('/about', (req, res) => {
    res.json({msg: `I am about Page`})
})
app.get('/contact', (req, res) => {
    res.json({email: `support@pwskills.com`})
})

app.listen(port, () => {
    console.log(`server running at ${hostname}: ${port} `);
})