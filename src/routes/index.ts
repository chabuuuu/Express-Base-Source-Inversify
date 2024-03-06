import BaseError from "../utils/error/base.error";
import accountRouter from "./account/account.route";
import roleRouter from "./role/role.route";
const root_api = '/api/v1';
export function route (app : any){
    app.use(`${root_api}/account`, accountRouter);
    app.use(`${root_api}/role`, roleRouter)
    app.all('*', (req: any, res: any, next: any) => {
        const status = 'fail';
        const statusCode = 404;
        const err = new BaseError(statusCode, status, 'API Not Exists');
        next(err);
    });
}