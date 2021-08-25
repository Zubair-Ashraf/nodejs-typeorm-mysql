import express from 'express';
import bookRoutes from './Book';

const routes = express.Router();

routes.use('/books', bookRoutes);

export default routes;
