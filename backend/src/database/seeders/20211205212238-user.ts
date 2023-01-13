module.exports = {
  up: async (queryInterface: any) => {
    await queryInterface.bulkInsert(
      'users',
      {},
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
