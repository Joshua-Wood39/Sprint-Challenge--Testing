const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const gamesRouter = require('../games/games-router.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/games', gamesRouter);



module.exports = server;