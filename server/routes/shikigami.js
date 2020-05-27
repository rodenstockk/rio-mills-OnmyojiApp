const express = require('express');
const router = express.Router();
// const imageTamamo = require('../public/tamamo.png')


const list = [ 
    { name: "tamamo", id: "tama", rarity: "SP", image: "http://localhost:8080/tamamo.png" },
    { name: "enmusubi", id: "enmu", rarity: "SSR", image: "http://localhost:8080/enmusubi.png" },
    { name: "ungaikyo", id: "unga", rarity: "SSR", image: "http://localhost:8080/ungaikyo.png" },
    { name: "shuten doji", id: "shuten", rarity: "SP", image: "http://localhost:8080/shuten.png" },
    { name: "shiranui", id: "shiranui", rarity: "SSR", image: "http://localhost:8080/shiranui.png" },
]

router.get('/list/:name', (req, res) => {
    console.log(req.params)
    let currShiki = req.params.name
    ? list.find(shiki => shiki.name === req.params.name)
    : list;

    res.json(currShiki)
});

router.get('/list', (req, res) => {
    res.json(list)
});




module.exports = router; 