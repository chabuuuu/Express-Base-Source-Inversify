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
    async create(data: any): Promise<any> {        
        return await this.repository._create(data);
    }
    async update(params: any): Promise<any> {
        return await this.repository._update(params);
    }
    async delete(params: any): Promise<any> {
        try {
            return await this.repository._delete(params);
        } catch (error) {
            throw error;
        }
    }
    async findOne(params: any): Promise<any> {
        return await this.repository._findOne(params);
    }
    async findAll(params: any): Promise<any> {
        return await this.repository._findAll(params);
    }
}