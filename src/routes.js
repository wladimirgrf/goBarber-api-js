import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ msg: 'bla bla bless3r3r3e' }));

export default routes;
