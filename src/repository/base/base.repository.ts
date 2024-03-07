import { IRepository } from "@/repository/base/i.repository";
import { injectable } from "inversify";
import "reflect-metadata";
@injectable()
export class BaseRepository<T extends any> implements IRepository<T> {
  protected _model;
  constructor(model: any) {
    this._model = model;
  }
  async _update(params: { where: any; data: any }): Promise<any> {
    const { where, data } = params;
    return this._model.update(where, data);
  }
  _delete(params: { where: any }): Promise<any> {
    const { where } = params;
    return this._model.delete(where);
  }
  async _findOne(params: { where?: any }): Promise<any> {
    const { where } = params;
    return await this._model.findOne({
      where,
    });
  }
  async _findAll(params: {
    skip?: number;
    take?: number;
    where?: any;
    order?: any;
  }): Promise<any> {
    const { skip, take, where, order } = params;

    return this._model.find({
      skip,
      take,
      where,
      order,
    })
  }
  async _create(params: { data: any }): Promise<any> {
    const { data } = params;
    return this._model.create(data);
  }
}