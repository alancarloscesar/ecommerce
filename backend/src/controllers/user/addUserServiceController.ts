import { Request, Response } from "express";
import { AddUserService } from "../../services/user/addUserService";


export class AddUserController {
    async handle(req: Request, res: Response) {
        const service = new AddUserService();

        const { name, gender, birth, cpf, phone, email, password } = req.body;

        const response = await service.execute({
            name,
            gender,
            birth,
            cpf,
            phone,
            email,
            password
        })

        return res.status(201).json(response);

        


    }
}