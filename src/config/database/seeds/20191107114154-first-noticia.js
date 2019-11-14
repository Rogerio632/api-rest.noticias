module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'noticia',
      [
        {
          titulo: 'Clã Bolsonaro é derrotado em combate',
          descricao:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fugiat ipsam, est delectus similique vel ducimus provident dolores, consequuntur praesentium mollitia ea rerum! Eaque illo vitae commodi molestiae, nobis neque?',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Clã Bolsonaro é derrotado em combate',
          descricao:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fugiat ipsam, est delectus similique vel ducimus provident dolores, consequuntur praesentium mollitia ea rerum! Eaque illo vitae commodi molestiae, nobis neque?',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Clã Bolsonaro é derrotado em combate',
          descricao:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fugiat ipsam, est delectus similique vel ducimus provident dolores, consequuntur praesentium mollitia ea rerum! Eaque illo vitae commodi molestiae, nobis neque?',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Clã Bolsonaro é derrotado em combate',
          descricao:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae fugiat ipsam, est delectus similique vel ducimus provident dolores, consequuntur praesentium mollitia ea rerum! Eaque illo vitae commodi molestiae, nobis neque?',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
