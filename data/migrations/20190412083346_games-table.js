
exports.up = function(knex) {
    return knex.schema.createTable('games', function(tbl) {
        tbl
        .increments();

        tbl
        .string('title', 128)
        .notNullable()
        .unique()

        tbl
        .string('genre', 128)
        .notNullable()

        tbl
        .integer('releaseYear', 4)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('games');
};
