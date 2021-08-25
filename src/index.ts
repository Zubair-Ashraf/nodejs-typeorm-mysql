import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use('/api', routes);

createConnection()
  .then(() => {
    app.listen(port, () => console.log(`App is running at PORT: ${port}`));
  })
  .catch(() => console.log('Database connection failed'));
