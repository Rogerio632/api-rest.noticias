import Sequelize, { Model } from 'sequelize';

class Noticia extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        descricao: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
  }
}
export default Noticia;
