import { Container } from "inversify";

import { DataSource } from "typeorm";
import { AccountController } from "@/controller/account.controller";
import { AccountService } from "@/service/account.service";
import { ITYPES } from "@/types/interface.types";
import { IService } from "@/service/base/i.service";
import { Account } from "@/models/account.model";
import { IRepository } from "@/repository/base/i.repository";
import { IController } from "@/controller/base/i.controller";
import { AccountRepository } from "@/repository/account.repository";
import { AppDataSource } from "@/database/db.datasource";

const accountContainer = new Container();
accountContainer.bind<IService<any>>(ITYPES.Service).to(AccountService);
accountContainer.bind<IRepository<Account>>(ITYPES.Repository).to(AccountRepository);
accountContainer.bind<IController<any>>(ITYPES.Controller).to(AccountController);
accountContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource);
const accountController = accountContainer.get<IController<any>>(ITYPES.Controller);
export default accountController;
