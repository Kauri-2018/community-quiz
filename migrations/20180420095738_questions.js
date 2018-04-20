exports.up = (knex, Promise) => {
  return knex.schema.createTable('questions', table => {
    table.increments('id')
    table.text('question')
    table.boolean('answer')
    table.integer('times_answered')
    table.integer('times_correct')
    table.string('contributor')
    table.string('last_answered')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('questions')
}
