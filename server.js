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

app.post('/login', (req, res) => {
    res.send({
        name: "Ivan",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    })
})

app.listen(8080, () => {
    console.log('Server running on port 8080')
})