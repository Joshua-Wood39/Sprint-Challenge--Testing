const db = require('../data/dbConfig.js');
const Games = require('./games-model.js');

describe('games model', () => {

    beforeEach(async () => {
        await db('games').truncate();
    })

    describe('post functionality', () => {

        it('should add the new game', async () => {
            await Games.add({ title: 'Joust', genre: 'Console', releaseYear: 1985 })

            const games = await db('games');
            expect(games).toHaveLength(1);
        })

        

        
    })

    describe('get functionality', () => {
        
        it('should return []', async () => {
            const games = await Games.find();
            console.log(games);
            expect(games).toEqual([]);
        })
    })

})