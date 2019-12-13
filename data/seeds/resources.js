exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "Laptop",
          description: "A good laptop"
        },
        {
          name: "Coffee",
          description: "Consume coffee to code through the night"
        },
        {
          name: "Fast Internet",
          description: "Need to have online access"
        },
        {
          name: "Udemy course",
          description: "Udemy course for learing Rust"
        },
        {
          name: "Youtube",
          description: "Use Youtube to learn Rust"
        },
        {
          name: "Suitcase",
          description: "For packing of course"
        }
      ]);
    });
};
