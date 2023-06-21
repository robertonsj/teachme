import Knex from "knex";
// import Knex, { knex } from "knex";

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

// import Knex, { knex } from "knex";

// export async function up(knex: knex) {
//   return knex.schema.createTable("classes", (table) => {
//     table.increments("id").primary();
//     table.string("subject").notNullable();
//     table.decimal("cost").notNullable();

//     table
//       .integer("user_id")
//       .notNullable()
//       .references("id")
//       .inTable("users")
//       .onUpdate("CASCADE")
//       .onDelete("CASCADE");
//   });
// }

// export async function down(knex: Knex) {
//   return knex.schema.dropTable("classes");
// }
