import roleController from '@/container/role.container';
import express from 'express';
const roleRouter = express.Router();

roleRouter.get('/', roleController.findAll.bind(roleController));

export default roleRouter