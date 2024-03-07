import { injectable } from "inversify";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import { CreateAccountDto } from "@/dto/account/create-account.dto";
import { BaseController } from "@/controller/base/base.controller";

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