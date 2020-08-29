
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: 'Prepare Impulse'
        },
        {
          project_id: 1,
          description: 'Go to Warp'
        },
        {
          project_id: 2,
          description: 'Analyze Target'
        },
        {
          project_id: 2,
          description: 'Engage Target'
        },
        {
          project_id: 3,
          description: 'Black Alert'
        },
        {
          project_id: 3,
          description: 'Fire Proton Torpedos'
        },
      ]);
    });
};
