import Sequelize from 'sequelize';
import databaseConfig from '../database';
import Noticia from '../../app/models/Noticia';

const models = [Noticia];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}
export default new Database();
