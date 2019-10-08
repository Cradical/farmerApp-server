'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Farmers',
      [
        {
          firstName: 'John',
          lastName: 'Farmer',
          age: 32,
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Farmers', null, {})
  },
}
