import { Router } from 'express';
import NoticiaController from './app/controllers/NoticiaController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

/* -- Autenticação de Usuário -- */
routes.post('/sessions', SessionController.store);

/* Rotas para o controller de Notícias */
routes.get('/noticia', NoticiaController.show);
routes.get('/noticias', NoticiaController.index);
routes.post('/noticia/create', NoticiaController.store);
routes.put('/noticia/update', NoticiaController.update);
routes.delete('/noticia/destroy', NoticiaController.delete);

/* -- Rotas para o controller de Usuários -- */
routes.get('/usuarios', UserController.index);
routes.post('/usuarios/create', UserController.store);

export default routes;
