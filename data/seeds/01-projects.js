
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Warp Speed',
          description: 'Increase from Impulse to Warp Speed',
          completed: false
        },
        {
          name: 'Engaging the Klingons',
          description: 'Analyzing for threats and Engaging',
          completed: false
        },
        {
          name: 'Black Alert',
          description: 'Going to Black Alert',
          completed: false
        },
      ]);
    });
};
