import {Request,Response} from 'express'
import {AuThenticateUseService} from '../services/AuthenticateUserService'
class AuthenticateUserController {
    async handle(req:Request,res:Response){
        const { code } = req.body

        const service = new AuThenticateUseService();
        const result = await service.execute(code);

        return res.json(result);
    }
}

export {AuthenticateUserController} 