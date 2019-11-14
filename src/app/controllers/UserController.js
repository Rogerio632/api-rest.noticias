import User from '../models/User';

class UserController {
  async index(req, res) {
    const AllUsers = await User.findAll().then(users => {
      return users;
    });

    if (!AllUsers) {
      return res
        .status(500)
        .json({ message: 'Não foi encontrado usuários cadastrados' });
    }
    return res.json(AllUsers);
  }

  async store(req, res) {
    const { email } = req.body;

    const emailExists = await User.findOne({ where: { email } });

    if (emailExists) {
      return res.status(400).json({ message: 'This email are already in use' });
    }
    const createUser = await User.create(req.body);

    if (!createUser) {
      return res
        .status(500)
        .json({ message: 'Um erro foi encontrado! tente novamente.' });
    }
    return res.status(201).json({ message: 'Cadastrado com sucesso!' });
  }
}
export default new UserController();
