import roleController from '@/container/role.container';
import { CreateRoleDto } from '@/dto/role/create-role.dto';
import { classValidate } from '@/middleware/class-validate.middleware';
import express from 'express';
const roleRouter = express.Router();

roleRouter
.post('/create', classValidate(CreateRoleDto), roleController.create.bind(roleController))
.get('/', roleController.findAll.bind(roleController))

export default roleRouter