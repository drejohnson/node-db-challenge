exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "Fork repo",
          notes: "Don't forget to create a new branch",
          completed: true
        },
        {
          project_id: 1,
          description: "Initialize repo",
          notes: "Initial server setup",
          completed: true
        },
        {
          project_id: 2,
          description: "Buy Udemy course for Learn Rust",
          notes: "Research the the best course on Udemy",
          completed: false
        },
        {
          project_id: 2,
          description: "Watch Youtube crash course of Rust",
          notes: null,
          completed: true
        },
        {
          project_id: 3,
          description: "Wash clothes",
          notes: "Wash clothes before packing",
          completed: true
        },
        {
          project_id: 3,
          description: "Fold clothes",
          notes: "Fold clothes before packing",
          completed: true
        }
      ]);
    });
};
