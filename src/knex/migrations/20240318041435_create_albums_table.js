import knex from "knex";

export const up = function (knex) {
  return knex.schema.createTable("albums", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("title").notNullable();
    table.string("genre").notNullable();
    table.integer("release_year").notNullable();
    table.uuid("artist_id").references("id").inTable("artists").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("albums");
};
