import { Container } from "inversify";
import { ITYPES } from "../types/interface.types";
import { IService } from "../service/base/i.service";
import { AccountService } from "../service/account.service";
import { IRepository } from "../reposiroty/base/base.repository.ts/i.repository";
import { AccountRepository } from "../reposiroty/account.repository";
import { IController } from "../controller/base/i.controller";
import { AccountController } from "../controller/account.controller";
import { Account } from "../models/account.model";
import { AppDataSource } from "../database/db.datasouce";
import { DataSource } from "typeorm";

const accountContainer = new Container();
accountContainer.bind<IService<any>>(ITYPES.Service).to(AccountService);
accountContainer.bind<IRepository<Account>>(ITYPES.Repository).to(AccountRepository);
accountContainer.bind<IController<any>>(ITYPES.Controller).to(AccountController);
accountContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource);
const accountController = accountContainer.get<IController<any>>(ITYPES.Controller);
export default accountController;
