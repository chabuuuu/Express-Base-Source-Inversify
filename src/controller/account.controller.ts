import { injectable } from "inversify";
import { BaseController } from "./base/base.controller";
import { plainToInstance } from "class-transformer";
import { CreateAccountDto } from "../dto/account/create-account.dto";
import { validate, validateOrReject } from "class-validator";

@injectable()
export class AccountController extends BaseController{
    async create(req: any, res: any, next: any): Promise<any> {
        try {
            if (!req.body){
                throw new Error('Request body is empty');
            }
            const createAccountDto = plainToInstance(CreateAccountDto, req.body);
            await validateOrReject(createAccountDto)

            
        } catch (error) {
            next(error)
        }

    }
}