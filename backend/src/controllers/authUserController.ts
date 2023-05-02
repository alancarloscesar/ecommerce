import { cp } from "fs";
import { AuthUserService } from "../services/authUserService";
import { Request, Response } from "express-serve-static-core";

export class authUserController{
    async handle(req:Request, res:Response){
        const authService = new AuthUserService();
        const {id,email, cpf, password} = req.body;

        const service = await authService.execute({email, cpf, password})

        if(Object.keys(service).length > 0){
            res.status(200).json(service)
        }else{
            throw new Error("Dados incorretos")
        }

    }
}