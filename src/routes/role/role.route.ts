import express from 'express';
import roleController from '../../container/role.container';
const roleRouter = express.Router();

roleRouter.get('/', roleController.findAll.bind(roleController));

export default roleRouter