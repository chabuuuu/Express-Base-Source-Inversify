import { inject, injectable } from "inversify";
import { BaseRepository } from "./base/base.repository.ts/base.repository";
import { Role } from "../models/role.model";
import { ITYPES } from "../types/interface.types";
import { DataSource } from "typeorm";

@injectable()
export class RoleRepository extends BaseRepository<Role> {
    constructor(@inject(ITYPES.Datasource) dataSource: DataSource) {
        super(dataSource.getRepository(Role))
    }
}