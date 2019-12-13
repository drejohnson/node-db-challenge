exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Complete Sprint Challenge",
          description: "Push hard to complete this week sprint challenge",
          completed: true
        },
        {
          name: "Learn Rust",
          description: "Take crash course on learning Rust",
          completed: false
        },
        {
          name: "Pack for trip to America",
          description: "Stop procrastinating and pack",
          completed: false
        }
      ]);
    });
};
