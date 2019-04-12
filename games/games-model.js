const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find
}

async function find() {
    let game = await db('games')
    if(game === undefined) {
        return []
    } else {
        return game
    }
}

async function add(body) {
    const [id] = await db('games').insert(body);

    return db('games')
        .where({ id })
        .first();
}