import Sequelize from 'sequelize';
import databaseConfig from '../database.js';
import Noticia from '../../app/models/Noticia';
import User from '../../app/models/User';

const models = [Noticia, User];

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
