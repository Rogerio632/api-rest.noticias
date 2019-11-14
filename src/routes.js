import { Router } from 'express';
import NoticiaController from './app/controllers/NoticiaController';

const routes = new Router();

routes.get('/noticia', NoticiaController.show);
routes.get('/noticias', NoticiaController.index);

routes.post('/noticia/create', NoticiaController.store);

routes.put('/noticia/update', NoticiaController.update);

routes.delete('/noticia/destroy', NoticiaController.delete);

export default routes;
