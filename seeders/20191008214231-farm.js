'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'FarmInfos',
      [
        {
          name: 'esmerelda',
          location: JSON.stringify({
            country: 'panama',
            geoLocation: {
              latitude: '23',
              longitude: '120',
            },
          }),
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FarmInfos', null, {})
  },
}
