import { request, Router } from 'express';
import { getKeyCodeById } from './controllers/keycodes';
import { getProductById, updateProductStatus } from './controllers/products';
const routes = Router();




routes.get('/', (req, res) => res.json({ status: "OK" }));
routes.get('/product/:id', getProductById)
routes.get('/keycode/:id', getKeyCodeById)
export default routes;
