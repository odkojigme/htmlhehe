const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express()

app.use(cors());
app.use(bodyParser.json())


// const var let

// int long char 

var games = [
    {
        short: '1. 247 Games. Best For: Classic games, card games and puzzles.',
        img: '247game.png',
        link: '',
        like: 0,
        color: '#F6DF42'
    }
]

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/games', function (req, res) {
    console.log('/games [GET]')
    res.send(games)
})

app.post('/games', function (req, res) {
    console.log('/games [POST]')

    const game = req.body
    games.push(game)

    res.send('Success')
})

app.put('/games', function (req, res) {
    console.log('/games [POST]')

    games.push({
        button: 'Test button'
    })
    res.send('Success')
})

app.listen(3000);

