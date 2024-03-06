import { injectable } from "inversify";

@injectable()
export class Model {
    public ticket : any = {
        name: 'test'
    }
}