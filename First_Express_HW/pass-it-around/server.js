const express = require('express');
const app = express();

const port = 3000;
let x = 99;
let value = 0;

app.get('/', (req, res) => {
    let bottles99 = ` ${x} Bottles of beer on the wall`;
    let br = "<br><br>";
    let passIt = `<a href="/${x-1}">take one down, pass it around. </a>`

    res.send(bottles99 + br + passIt);
});

app.get(`/:${x}`, (req, res) => {
    let buyMore = `<a href="/"> Lets buy another 99 beers. </a>`
    let bottles99 = ` ${x} Bottles of beer on the wall`;
    let br = "<br><br>";
    let beer = "someone added a six pack! (beers + 6)";
    let passIt = `<a href="/${x-1}">take one down, pass it around. </a>`
    value = Math.floor(Math.random() * 10);
    if (value > 8) {
        if (x > 0) {
            x += 6;
            res.send(beer + br + bottles99 + br + passIt);

        } else {
            x = 99;
            res.send(buyMore)
        }
    } else {
        if (x > 0) {
            res.send(bottles99 + br + passIt);
            x--;
        } else {
            x = 99;
            res.send(buyMore)
        }
    }
});

// app.get('/0', (req, res) => {


//     let buyMore = `<a href="/"> Lets buy another 99 beers. </a>`
//     res.send(bottles99 + br + passIt);
// });



app.listen(port, () => {
    console.log('app is running on port: ', port);
});