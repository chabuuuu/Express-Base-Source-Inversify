import 'dotenv/config'
import express from 'express';
import { route } from './routes';
import "reflect-metadata"
import { AppDataSource } from './database/db.datasouce';
import { errorHanlder } from './middleware/error.middleware';
const app = express();

route(app);

app.use(errorHanlder)

//db connection
AppDataSource
  .initialize()
  .then(async () => {
    console.log('Database is connected');
    app.listen(3000, () => {
      console.log('Server is running on port http://localhost:3000');
    });
  })
  .catch((error) => {
    console.log(error)
  });


 