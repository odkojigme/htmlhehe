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
        link: 'https://www.247games.com/',
        like: '0',
        color: '#F6DF42',
        count:2,
    },{
        short: '2. Addicting Games. Best For: Single-player games.',
        img: 'addicting games.png',
        link: 'https://www.addictinggames.com/',
        like: 0,
        color: '#171717',
        count: 3,
    },{
        short: '3. Agame. Best For: Games on multiple devices, single and multi-player online games',
        img: 'agame.png',
        link: 'https://www.agame.com/',
        like: 0,
        color: '#0364A0',
        count: 4,
    }
]
{/* <h1 class="title3 ">2. Addicting Games. Best For: Single-player games.</h1>
        <img src="addicting games.png" alt="AG" style="width:600px;height:100px;"> <h1 class="title3 ">(Link: https://www.addictinggames.com/)</h1>
        <h1 class="title4 ">3. Agame. Best For: Games on multiple devices, single and multi-player online games </h1>
        <img src="agame.png" alt="agame"style="width:600px;height:100px;"> <h1 class="title4 ">(Link: https://www.agame.com/)</h1> */}

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

