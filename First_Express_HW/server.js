const express = require('express');
const app = express();

const port = 3000;



app.get('/greeting/:name', (req, res) => {
    req.params['name'] = 100;
    console.log('req.query: ', req.query);
    res.send('Hello ' + req.params['name'] + '!');
});


app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = req.params['total'];
    let tipPercentage = req.params['tipPercentage'];
    let answer = total * (tipPercentage / 100);

    res.send(answer.toString());
});

app.get('/magic/:probNot', (req, res) => {
    let butHopefully = req.params['probNot'];
    let ball8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    let br = "<br><br>"
    let random = ball8[Math.floor(Math.random() * butHopefully.length)];

    // This is what I got

    // Will I Be a Millionaire

    // Ask again later
    // sweet.

    res.send(butHopefully + br + random);
});


app.listen(port, () => {
    console.log('app is running on port: ', port);
});