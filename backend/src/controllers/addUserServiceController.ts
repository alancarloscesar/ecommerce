import { Request, Response } from "express";
import { AddUserService } from "../services/addUserService";
import mysql from "mysql2"

export class AddUserController {
    async handle(req: Request, res: Response) {
        const service = new AddUserService();

        const { name, gender, brith, cpf, phone, email, password } = req.body;

        await service.execute({
            name,
            gender,
            brith,
            cpf,
            phone,
            email,
            password
        })

        return res.status(201).json({
            Sucess: "User created successfuly!!!"
        });


    }
}