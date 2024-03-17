/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("albums", function (table) {
    table.uuid("id").primary();
    table.text("title").notNullable();
    table.text("genre").notNullable();
    table.date("release_year").notNullable();
    table.uuid("artist_id").references("id").inTable("artists").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("albums");
};
