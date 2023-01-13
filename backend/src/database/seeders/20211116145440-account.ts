module.exports = {
  up: async (queryInterface: any) => {
    await queryInterface.bulkInsert(
      'accounts',
      {},
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};
