
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Warp Drive',
          description: 'Impulse'
        },
        {
          name: 'Proton Torpedos',
          description: 'Active Munitions'
        },
        {
          name: 'Spore Drive',
          description: 'Micellium'
        },
      ]);
    });
};
