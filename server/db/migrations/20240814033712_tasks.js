/**
 * @param { import("knex").Knex } knex
 */
export const up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary()
    table.string('task').notNullable()
    table.text('priority')
    table.boolean('completed')
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('tasks')
}
