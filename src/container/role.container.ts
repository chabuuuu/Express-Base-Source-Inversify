import { Container } from "inversify";
import { IService } from "../service/base/i.service";
import { RoleService } from "../service/role.service";
import { ITYPES } from "../types/interface.types";
import { IRepository } from "../repository/base/base.repository.ts/i.repository";
import { Role } from "../models/role.model";
import { RoleRepository } from "../repository/role.repository";
import { IController } from "../controller/base/i.controller";
import { RoleController } from "../controller/role.controller";
import { AppDataSource } from "../database/db.datasouce";

const roleContainer = new Container();
roleContainer.bind<IService<any>>(ITYPES.Service).to(RoleService)
roleContainer.bind<IRepository<Role>>(ITYPES.Repository).to(RoleRepository)
roleContainer.bind<IController<any>>(ITYPES.Controller).to(RoleController)
roleContainer.bind(ITYPES.Datasource).toConstantValue(AppDataSource)

const roleController = roleContainer.get<IController<any>>(ITYPES.Controller)
export default roleController