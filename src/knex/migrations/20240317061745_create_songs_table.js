/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTable("songs", function (table) {
      table.uuid("id").primary();
      table.text("title").notNullable();
      table.text("duration").notNullable();
      table.uuid("album_id").references("id").inTable("albums").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("songs");
};
