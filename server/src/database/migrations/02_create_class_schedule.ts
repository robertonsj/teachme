exports.up = function (knex) {
  return knex.schema.createTable("class_schedule", function (table) {
    table.increments("id").primary();
    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    //A class creates a relationship with a user.
    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("class_schedule");
};
