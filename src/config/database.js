module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  database: 'noticias',
  password: 'docker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
