const express = require('express');
const getJSON = require('get-json')
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

app.get('/fibonacci/:num', (req, res) => {
    let fib = "FIBONACCI!"
    let notFib = "Not fib."
    let numfib = req.params['num'];
    let numcheck1 = (5 * numfib * numfib + 4)
    let numcheck2 = (5 * numfib * numfib - 4)
    if (numcheck1 % Math.sqrt(numcheck1) == 0 || numcheck2 % Math.sqrt(numcheck2) == 0) {
        res.send(fib);
    } else {
        res.send(notFib);
    }
});

app.get('/trivia', (req, res) => {
    let answer;
    let question;
    let br = "<br>";
    getJSON('http://jservice.io/api/random', function(error, response) {
        //I am aware that I am not running error checking here
        let answer = response[0].answer;
        let question = response[0].question;
        console.log(typeof response)
        res.send(`Trivia question ID: ${response[0].id} <br> Question: ${question} <br> Answer: ${answer}`);

    });
    // res.send(question + br + answer);

});




app.listen(port, () => {
    console.log('app is running on port: ', port);
});