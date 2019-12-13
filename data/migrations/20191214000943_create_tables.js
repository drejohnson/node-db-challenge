exports.up = function(knex) {
  return knex.schema
    .createTable("projects", t => {
      t.increments();
      t.string("name").notNullable();
      t.string("description");
      t.boolean("completed")
        .notNullable()
        .defaultTo(true);
    })
    .createTable("resources", t => {
      t.increments();
      t.string("name").notNullable();
      t.string("description");
    })
    .createTable("tasks", t => {
      t.increments();
      t.string("description").notNullable();
      t.string("notes");
      t.boolean("completed")
        .notNullable()
        .defaultTo(false);
      // foreign key
      t.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("project_resources", t => {
      t.increments();
      // foreign key
      t.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      // foreign key
      t.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources");
};
