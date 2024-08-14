/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, task: 'folding the laundry', priority: 'low', completed: true },
    { id: 2, task: 'vacuuming the carpet', priority: 'low', completed: false },
    { id: 3, task: 'buying groceries', priority: 'high', completed: false },
  ])
}
