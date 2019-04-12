const router = require('express').Router();
const Games = require('./games-model.js');

router.get('/', async (req, res) => {
    try {
        const games = await Games.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    try {
        let { title, genre } = req.body;
        if(title === '' || title === undefined || genre === '' || genre === undefined) {
            res.status(422).json({ error: 'Please provide a title and a genre'})
        } else {
            const game = await Games.add(req.body);
            res.status(201).json(game);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;