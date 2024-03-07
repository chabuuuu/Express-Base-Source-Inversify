import { IRepository } from "@/repository/base/i.repository";
import { IService } from "@/service/base/i.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";
import "reflect-metadata";
@injectable()
export class BaseService implements IService<any>{
    protected repository: IRepository<any>;
    public constructor(@inject(ITYPES.Repository) repository: IRepository<any>) {
        this.repository = repository;
    }
    create(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(params: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(params: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    findOne(params: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findAll(params: any): Promise<any> {
        return await this.repository._findAll(params);
    }
}