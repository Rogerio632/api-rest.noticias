import * as Yup from 'yup';
import Noticia from '../models/Noticia';

class NoticiaController {
  async index(req, res) {
    const noticia = await Noticia.findAll().then(noticias => {
      return noticias;
    });

    if (!noticia) {
      return res.status(500).json({ message: 'any news have been find' });
    }
    return res.json(noticia);
  }

  async show(req, res) {
    // encontrar noticia por id
    const findNoticia = await Noticia.findOne({ where: { id: req.body.id } });

    if (!findNoticia) {
      return res.status(500).json({ error: "This noticia doesn't exists" });
    }
    return res.json(findNoticia);
  }

  async store(req, res) {
    const storeNoticia = await Noticia.create(req.body);

    if (!storeNoticia) {
      return res
        .status(500)
        .json({ error: 'A error has been founded. Please try again.' });
    }

    return res.status(201).json({ message: 'Cadastrado com sucesso!' });
  }

  async update(req, res) {
    const { id } = req.body;

    const findNoticia = await Noticia.findByPk(id);

    if (!findNoticia) {
      return res.status(400).json({ message: 'Notícia não encontrada' });
    }
    const update = await findNoticia.update(req.body);

    if (!update) {
      return res
        .status(500)
        .json({ message: 'Some error has been found. Please, try again.' });
    }

    return res.json({ message: 'Notícia Alterada com sucesso' });
  }

  async delete(req, res) {
    const { id } = req.body;

    const findNoticia = Noticia.findByPk(id);

    if (!findNoticia) {
      return res
        .status(400)
        .json({ message: 'This noticia has not been found' });
    }
    const deletar = Noticia.destroy({ where: { id } });

    if (!deletar) {
      return res
        .status(500)
        .json({ message: 'A error has been found. Try again, i want it' });
    }
    return res.json({ message: 'Deletado com sucesso!' });
  }
}
export default new NoticiaController();
