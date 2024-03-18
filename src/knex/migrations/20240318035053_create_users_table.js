import knex from "knex";

export const up = async function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("name").unsigned();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("users");
};
