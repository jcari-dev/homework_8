const express = require('express');
const app = express();

const port = 3000;


app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = req.params['total'];
    let tipPercentage = req.params['tipPercentage'];
    let answer = total * (tipPercentage / 100);

    res.send(answer.toString());
});


app.listen(port, () => {
    console.log('app is running on port: ', port);
});