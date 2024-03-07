import { Role } from "@/models/role.model";
import { BaseRepository } from "@/repository/base/base.repository";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";
import { DataSource } from "typeorm";

@injectable()
export class RoleRepository extends BaseRepository<Role> {
    constructor(@inject(ITYPES.Datasource) dataSource: DataSource) {
        super(dataSource.getRepository(Role))
    }
}