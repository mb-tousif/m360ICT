import knex from "knex";

export const up = function (knex) {
  return knex.schema.createTable("songs", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("title").unique().notNullable();
    table.integer("duration").notNullable();
    table.uuid("album_id").references("id").inTable("albums").notNullable();
    table.uuid("artist_id").references("id").inTable("artists").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("songs");
};
