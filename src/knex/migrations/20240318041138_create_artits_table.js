import knex from "knex";

export const up = function (knex) {
  return knex.schema.createTable("artists", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("name").unique().notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("artists");
};
