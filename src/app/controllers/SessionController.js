import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const usuario = await User.findOne({ where: { email } });

    if (!usuario) {
      return res
        .status(401)
        .json({ error: 'ERROR 401 NOT AUTHORIZED. User not found!' });
    }
    if (!(await usuario.checkPassword(password))) {
      return res.status(401).json({ error: '401! password does not match!' });
    }
    const { id } = usuario;

    return res.json({
      user: {
        id,
        email,
      },
      token: jwt.sign({ id, email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}
export default new SessionController();
