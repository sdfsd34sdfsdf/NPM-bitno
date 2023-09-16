const express = require('express');

const app = express();

app.use(express.json());

app.get('/data', (req, res) => {
    res.send("Datas fine")
})

app.post('/upis', (req, res) => {
    console.log(req.body);
    res.send("Ok")
})

app.listen(8080, () => {
    console.log('Server running on port 8080')
})