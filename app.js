const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //builds localhost:3000/views/index.html
})

app.listen(port,() => {
    console.log(`Server running at ${port}`);
})