import { injectable } from "inversify";
import { plainToInstance } from "class-transformer";
import { ValidationError, validate, validateOrReject } from "class-validator";
import { CreateAccountDto } from "@/dto/account/create-account.dto";
import { BaseController } from "@/controller/base/base.controller";
import BaseError from "@/utils/error/base.error";
import { error } from "console";

@injectable()
export class AccountController extends BaseController{
    async create(req: any, res: any, next: any): Promise<any> {
        try {
            if (!req.body){
                throw new Error('Request body is empty');
            }
            // const createAccountDto = plainToInstance(CreateAccountDto, req.body);
            // const validateErrors : any = await validate(createAccountDto, { validationError: { target: false, value: false } })            
            // if (validateErrors.length > 0){
            //     const formatError = validateErrors.map((error : any) => ({
            //         field: error.property,
            //         error: Object.values(error.constraints).join(', '),
            //     }))
            //     console.log('format error:', formatError);
                
            //     throw new BaseError(400, 'fail', validateErrors)
            // }
        } catch (error : any) {            
            next(error)
        }

    }
}