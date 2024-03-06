import BaseError from "../utils/error/base.error";
import accountRouter from "./account/account.route";
import roleRouter from "./role/role.route";

export function route (app : any){
    app.use('/account', accountRouter);
    app.use('/role', roleRouter)
    app.all('*', (req: any, res: any, next: any) => {
        const status = 'fail';
        const statusCode = 404;
        const err = new BaseError(statusCode, status, 'API Not Exists');
        next(err);
    });
}