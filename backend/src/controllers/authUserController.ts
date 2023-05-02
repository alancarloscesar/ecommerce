import { cp } from "fs";
import { AuthUserService } from "../services/authUserService";
import { Request, Response } from "express-serve-static-core";

export class authUserController {
    async handle(req: Request, res: Response) {
        const authService = new AuthUserService();
        const { id, email, cpf, password } = req.body;

        const service = await authService.execute({ email, cpf, password })


        res.status(200).json(service)

    }
}