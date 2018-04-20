
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(() => {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'The capital of Australia is Sydney', answer: false, times_answered: 2, times_correct: 1, contributor: 'Zoe', last_answered: 'Date'},
        {id: 2, question: 'WWII ended in 1945', answer: true, times_answered: 1, times_correct: 0, contributor: 'Sarah', last_answered: 'Date'}
      ])
    })
}
