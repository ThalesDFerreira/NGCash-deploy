module.exports = {
  up: async (queryInterface: any) => {
    await queryInterface.bulkInsert(
      'transactions',
      {},
    );
  },

  down: async (queryInterface: any) => {
    await queryInterface.bulkDelete('transactions', null, {});
  },
};
