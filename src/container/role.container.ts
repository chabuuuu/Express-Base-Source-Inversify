import { IController } from "@/controller/base/i.controller";
import { RoleController } from "@/controller/role.controller";
import { AppDataSource } from "@/database/db.datasouce";
import { Role } from "@/models/role.model";
import { IRepository } from "@/repository/base/i.repository";
import { RoleRepository } from "@/repository/role.repository";
import { IService } from "@/service/base/i.service";
import { RoleService } from "@/service/role.service";
import { ITYPES } from "@/types/interface.types";
import { Container } from "inversify";

const roleContainer = new Container();
roleContainer.bind<IService<any>>(ITYPES.Service).to(RoleService)
roleContainer.bind<IRepository<Role>>(ITYPES.Repository).to(RoleRepository)
roleContainer.bind<IController<any>>(ITYPES.Controller).to(RoleController)
roleContainer.bind(ITYPES.Datasource).toConstantValue(AppDataSource)

const roleController = roleContainer.get<IController<any>>(ITYPES.Controller)
export default roleController