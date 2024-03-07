import accountController from '@/container/account.container';
import express from 'express';
const accountRouter = express.Router();
accountRouter.post('/create', accountController.create.bind(accountController));
accountRouter.get('/', accountController.findAll.bind(accountController));

export default accountRouter