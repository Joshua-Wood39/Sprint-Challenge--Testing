
exports.seed = function(knex) {
      return knex('games').insert([
        {title: 'Pacman', genre: 'Arcade', releaseYear: 1980}
        
      ]);
};
