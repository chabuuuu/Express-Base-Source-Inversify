import 'dotenv/config'
import express from 'express';
import { route } from './routes';
import "reflect-metadata"
import { AppDataSource } from './database/db.datasouce';
import { errorHanlder } from './middleware/error.middleware';
import helmet from 'helmet';
const cors = require('cors')
const config = require('config');
const morgan = require('morgan')
const corsOption = config.get('cors');
const useHelmet = config.get('helmet');
const morganFormat = config.get('morganFormat');
const app = express();

//Middleware
app.use(morgan(morganFormat || 'dev'))
app.use(cors(corsOption))
if (useHelmet) {
  app.use(helmet());
}
//Route
route(app);

//Error handler
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


 