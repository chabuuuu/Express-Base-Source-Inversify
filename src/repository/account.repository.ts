import { inject, injectable } from "inversify";
import { BaseRepository } from "./base/base.repository.ts/base.repository";
import { ITYPES } from "../types/interface.types";
import { Account } from "../models/account.model";
import "reflect-metadata";
import { DataSource } from "typeorm";

export class AccountRepository extends BaseRepository<Account>{
    constructor(@inject(ITYPES.Datasource) dataSource : DataSource){
        super(dataSource.getRepository(Account))
    }
}