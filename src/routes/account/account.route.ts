import express from 'express';
import accountController from '../../container/account.container';
const accountRouter = express.Router();
accountRouter.post('/create', accountController.create.bind(accountController));
accountRouter.get('/', accountController.findAll.bind(accountController));

export default accountRouter