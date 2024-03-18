import knex from "knex";

export const up = function (knex) {
  return knex.schema.createTable("artists", function (table) {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("artists");
};
