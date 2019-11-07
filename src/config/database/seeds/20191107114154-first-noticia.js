module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'noticias',
      [
        {
          titulo: 'Clã Bolsonaro é derrotado em combate',
          descricao:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fugiat ipsam, est delectus similique vel ducimus provident dolores, consequuntur praesentium mollitia ea rerum! Eaque illo vitae commodi molestiae, nobis neque?',
        },
      ],
      {}
    );
  },

  down: () => {},
};
