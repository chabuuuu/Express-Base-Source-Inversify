import express from 'express';
import accountController from '../../container/account.container';
const accountRouter = express.Router();
accountRouter.get('/', accountController.findAll.bind(accountController));

export default accountRouter